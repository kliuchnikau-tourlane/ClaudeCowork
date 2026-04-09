# Knowledge Base

Local knowledge base maintained by the daily meeting notes analysis workflow.
Updated automatically via the `meeting-notes-analyzer` Cowork skill after user review.

## Structure

- `people/` — One file per person. Contains role, team, context from meetings, key decisions they were involved in.
- `projects/` — One file per project. Contains status, decisions, blockers, timeline updates.
- `products/` — One file per product area. Contains feature discussions, roadmap signals, technical decisions.

## File format

Each file is Markdown. Filename: `kebab-case-name.md`.

Each file has a YAML-like header followed by a log of updates:

```
# Person/Project/Product Name
Type: person | project | product
First seen: YYYY-MM-DD
Last updated: YYYY-MM-DD

## Context
Brief description.

## Updates
- **YYYY-MM-DD** — What was discussed/decided. (Source: meeting title)
```

## Rules

- Never delete entries, only append.
- Each update line references the meeting it came from.
- The meeting-notes-analyzer skill proposes updates; the user confirms before anything is written.
