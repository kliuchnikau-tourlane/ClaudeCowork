# Meeting Notes Workflow — Setup Guide

## Overview

This workflow automates your daily meeting note processing:

1. **Granola** records meeting notes throughout the day.
2. At **17:00**, a scheduled Cowork task automatically fetches today's notes, analyzes them, and creates a draft review file.
3. You open the draft, review proposed knowledge base updates and Todoist tasks, and **accept, decline, or rephrase** each one.
4. Approved updates get written to your local knowledge base; approved tasks get created in Todoist.

## Setup Steps

### 1. Install GranolaMCP (for automatic note export)

```bash
pip install granola-mcp
```

Then find your Granola cache path. On macOS it's typically:
```
~/Library/Application Support/Granola/
```

Set the environment variable (add to your `~/.zshrc` or `~/.bash_profile`):
```bash
export GRANOLA_CACHE_PATH="$HOME/Library/Application Support/Granola/cache.json"
```

Verify it works:
```bash
granola list --last 5
```

If the `granola` CLI works, the export script will use it. If not, it falls back to reading the cache file directly.

### 2. Copy the export script

Copy `scripts/granola-export.py` to your ClaudeCowork folder:
```bash
cp scripts/granola-export.py ~/ClaudeCowork/scripts/granola-export.py
chmod +x ~/ClaudeCowork/scripts/granola-export.py
```

Test it:
```bash
python3 ~/ClaudeCowork/scripts/granola-export.py --date today --output ~/ClaudeCowork/MeetingNotes/
```

### 3. Install the meeting-notes-analyzer skill

Copy the skill folder to your Claude skills directory:
```bash
cp -r meeting-notes-analyzer/ ~/.claude/skills/meeting-notes-analyzer/
```

Restart Claude Cowork for the skill to be picked up.

### 4. Get your Todoist API token

1. Open [todoist.com/app/settings/integrations/developer](https://todoist.com/app/settings/integrations/developer)
2. Copy your **API token** from the page.
3. Add it to your shell profile (`~/.zshrc` or `~/.bash_profile`):

```bash
export TODOIST_API_TOKEN="your-token-here"
```

### 5. Get your Todoist project ID for #Tourlane

Run this to find the project ID:
```bash
curl -s "https://api.todoist.com/rest/v2/projects" \
  -H "Authorization: Bearer $TODOIST_API_TOKEN" | python3 -c "
import json, sys
projects = json.load(sys.stdin)
for p in projects:
    print(f'{p[\"id\"]:>12}  {p[\"name\"]}')
"
```

Find the `Tourlane` project in the output and add its ID:
```bash
export TODOIST_PROJECT_ID="your-project-id-here"
```

### 6. The scheduled task

The scheduled task is already created in Cowork (see below). It runs daily at 17:00 and:
- Exports today's Granola notes to `MeetingNotes/YYYY-MM-DD/`
- Analyzes them against your knowledge base
- Creates a draft review file in `OUTPUTS/`

### 7. Daily usage

**End of day (automatic):**
At 17:00, you'll get a notification that the analysis is ready.

**When you're ready to review:**
Open Claude Cowork and say: *"Review my meeting notes draft"* or *"Let's go through today's meeting review"*.

Claude will walk you through each proposed KB update and Todoist task, letting you accept, decline, or rephrase each one.

## Folder Structure

```
ClaudeCowork/
├── MeetingNotes/              ← Granola notes land here
│   ├── 2026-04-07/
│   │   ├── Sprint-Planning.md
│   │   └── 1-on-1-with-Alex.md
│   └── 2026-04-08/
├── PROJECTS/
│   └── KnowledgeBase/         ← Your local knowledge base
│       ├── README.md
│       ├── people/
│       │   ├── alex-mueller.md
│       │   └── sarah-chen.md
│       ├── projects/
│       │   ├── spaeti-migration.md
│       │   └── flamingo-v2.md
│       └── products/
│           └── booking-engine.md
├── OUTPUTS/
│   └── 2026-04-07_meeting-review/
│       └── MeetingReview_Draft.md  ← Daily draft for your review
└── scripts/
    └── granola-export.py      ← Granola export script
```

## Known Limitations

**Granola cache flush delay**: Granola writes to `cache-v6.json` lazily — a meeting that just ended may not appear immediately. If a meeting is missing from the export, try one of:
- Close and reopen the Granola app (forces a cache flush)
- Click on the meeting in Granola's UI
- Wait a few minutes and re-sync: `bash ~/Projects/ClaudeCowork/scripts/sync-granola.sh`

The 16:55 launchd trigger works well because most meetings end before then, giving Granola time to flush. If your last meeting runs right up to 17:00, re-sync manually afterward.

**No AI summaries**: Granola stores its AI-generated summaries server-side, not in the local cache. The export includes your typed notes and the full transcript — Claude analyzes the transcript directly during the review step.

## Troubleshooting

**No notes exported**: Check that Granola is running and has recorded meetings. Verify the cache exists: `ls ~/Library/Application\ Support/Granola/cache*.json`

**Missing recent meeting**: Granola hasn't flushed the cache yet. Close/reopen Granola, then re-sync.

**Todoist tasks not created**: Check that `TODOIST_API_TOKEN` and `TODOIST_PROJECT_ID` environment variables are set. Test with: `curl -s "https://api.todoist.com/api/v1/projects" -H "Authorization: Bearer $TODOIST_API_TOKEN"`

**Skill not triggering**: Make sure the skill is installed in `~/.claude/skills/meeting-notes-analyzer/` and Cowork has been restarted.
