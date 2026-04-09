---
name: meeting-notes-analyzer
description: >
  Analyze daily meeting notes from Granola, update local knowledge base, and suggest Todoist tasks.
  Use this skill whenever the user says "review meeting notes", "analyze today's meetings",
  "process meeting notes", "daily meeting review", "what happened in my meetings", "update knowledge base
  from meetings", or "meeting notes draft". Also triggers on the daily 17:00 scheduled task.
  This skill handles two modes: (1) automated analysis that creates a draft, and (2) interactive review
  where the user approves/edits knowledge base updates and Todoist tasks.
---

# Meeting Notes Analyzer

You help Aliaksei process daily meeting notes from Granola, maintain a knowledge base about people/projects/products at Tourlane, and create actionable Todoist tasks.

## Context

Aliaksei is an Engineering Manager at Tourlane (custom-tailored multi-stop trip planning) managing two Platform teams: Supply Platform (Spaeti) and Booking Platform (Flamingo). The tech department is ~50 people.

## Two Operating Modes

### Mode 1: Automated Analysis (scheduled task or "analyze my meetings")

This mode runs automatically at 17:00 or when the user asks to analyze meetings.

**Step 1: Fetch today's Granola notes**

Run the Granola export script to pull today's notes:

```bash
python3 /path/to/ClaudeCowork/scripts/granola-export.py --date today --output /path/to/ClaudeCowork/MeetingNotes/
```

If the script isn't available or fails, check `MeetingNotes/YYYY-MM-DD/` for any notes already placed there. If no notes exist for today, inform the user and stop.

**Step 2: Read all meeting notes for today**

Read every file in `MeetingNotes/YYYY-MM-DD/` where YYYY-MM-DD is today's date.

**Step 3: Read existing knowledge base**

Read all files in:
- `PROJECTS/KnowledgeBase/people/`
- `PROJECTS/KnowledgeBase/projects/`
- `PROJECTS/KnowledgeBase/products/`

This gives you context on what's already known, so you only propose genuinely new or updated information.

**Step 4: Analyze and extract**

From each meeting, extract:

1. **People mentions**: New people not yet in KB, or new context about known people (role changes, responsibilities, opinions expressed, decisions they made).
2. **Project updates**: Status changes, decisions, blockers, timeline shifts, new projects mentioned.
3. **Product insights**: Feature discussions, technical decisions, roadmap signals, customer feedback mentioned.
4. **Action items**: Anything that sounds like a commitment, follow-up, or task — by Aliaksei or delegated to him.

Be selective. Meeting notes from Granola can be noisy. Focus on information that would be valuable a week or a month from now. Skip small talk, routine status updates with no new info, and things already captured in the KB.

**Step 5: Create draft review file**

Create a file at `OUTPUTS/YYYY-MM-DD_meeting-review/MeetingReview_Draft.md` with this structure:

```markdown
# Meeting Notes Review — YYYY-MM-DD

## Meetings Analyzed
- [Meeting title 1] (HH:MM, N participants)
- [Meeting title 2] (HH:MM, N participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — person-name.md
> **Current context**: (show what's already in KB, or "NEW — not yet in KB")
> **Proposed addition**: What to add based on today's meeting.
> **Source**: Meeting title
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

#### [P2] NEW — another-person.md
> **Proposed entry**: Full proposed KB entry.
> **Source**: Meeting title
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — project-name.md
> **Current status in KB**: ...
> **Proposed update**: ...
> **Source**: Meeting title
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — product-area.md
> **Proposed update**: ...
> **Source**: Meeting title
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Todoist Tasks

#### [T1] Task title
> **Description**: What needs to be done and why.
> **Due**: Suggested date (or "no due date").
> **Priority**: p1/p2/p3/p4
> **Source**: Meeting title — context for why this task exists.
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Task title
> **Description**: ...
> **Due**: ...
> **Priority**: ...
> **Source**: ...
> **Action**: [ ] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Brief 3-5 sentence summary of the day's meetings — key themes, most important decisions, and anything that needs urgent attention.
```

**Step 6: Notify the user**

Tell the user the draft is ready for review. Share the file link. Mention how many KB updates and Todoist tasks are proposed.

---

### Mode 2: Interactive Review (user says "review meeting notes draft" or opens the draft)

When the user wants to review a draft:

**Step 1: Find the latest draft**

Look for the most recent `MeetingReview_Draft.md` in OUTPUTS/ subfolders.

**Step 2: Present items one by one using AskUserQuestion**

For each proposed KB update and each Todoist task, use the AskUserQuestion tool to let the user:
- **Accept** as-is
- **Decline** (skip it)
- **Rephrase** (provide their own wording)

Group related items when possible (e.g., all updates about the same person). Present the proposed text clearly so the user can make an informed decision.

**Step 3: Apply approved KB updates**

For each accepted update:
- If the KB file exists, append the update to the `## Updates` section with today's date.
- If it's a new entry, create the file following the format in `PROJECTS/KnowledgeBase/README.md`.
- If rephrased, use the user's wording.

**Step 4: Create approved Todoist tasks**

For each accepted task, create it via the Todoist REST API:

```bash
curl -s -X POST "https://api.todoist.com/api/v1/tasks" \
  -H "Authorization: Bearer $TODOIST_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Task title",
    "description": "Task description",
    "project_id": "'$TODOIST_PROJECT_ID'",
    "priority": 2,
    "due_string": "tomorrow"
  }'
```

The environment variables `TODOIST_API_TOKEN` and `TODOIST_PROJECT_ID` must be set. If they're not, ask the user to provide them.

Todoist API base URL: `https://api.todoist.com/api/v1/` (NOT the old `/rest/v2/` which is deprecated).

Todoist priority mapping: p1 (urgent) = priority 4 in API, p2 = priority 3, p3 = priority 2, p4 = priority 1. Yes, it's inverted.

**Step 5: Update the draft file**

Mark processed items as accepted/declined/rephrased in the draft file so there's a record.

**Step 6: Confirm completion**

Tell the user what was done: N KB entries updated, M Todoist tasks created. Mention any items that were declined.

## Important Notes

- Never modify KB files without explicit user approval.
- Meeting notes can be imprecise — always let the user refine wording.
- If a meeting note is ambiguous about who said what or what was decided, flag it for the user rather than guessing.
- The `#Tourlane` Todoist project is the default destination for all tasks.
- Keep task descriptions concise but include enough context that they'll make sense in a week.
