# BEFORE EVERY TASK

1. Read `ABOUTME/`. No task starts without reading both.
2. If the task relates to a project, read everything in the matching `PROJECTS/` subfolder before proceeding.
3. If the task involves a content type that has a matching pattern in `TEMPLATES/`, study that template's structure first. Use the structure. Don't copy the content.

# FOLDER PROTOCOL

You have three read-only folders and one write folder.

## Read-only — never create, edit, or delete anything here:
- `ABOUTME/` → My identity and writing rules.
- `TEMPLATES/` → Proven structures to reuse as patterns.
- `PROJECTS/` → My briefs, references, and finished work organized by project.

## Write folder — the only place you deliver work:
- `OUTPUTS/` → Everything you create goes here. Organize with one subfolder per project, mirroring the structure of `PROJECTS/`. Create the subfolder if it doesn't exist yet.

# NAMING CONVENTION

All files you create must follow this format:

`project_content-type.ext`

Content types: Email, ADR, Brief, Deck, Report, Research, Documentation.

For ADRs, append a short topic slug after `ADR-` so each ADR is identifiable by name:

`project_ADR-Topic-Slug.md`

Examples:
- `How-To-AI_Newsletter.md`
- `EasyGen_Deck.pptx`
- `GPC_Report.docx`
- `DocumentsDashboard_ADR-Technology-Stack-Decision.md`
- `DocumentsDashboard_ADR-Document-Storage-Strategy.md`

# FILE FORMAT

All text-based project documents use Markdown (.md). Do not create or convert to .docx unless explicitly asked.

# OPERATING RULES
- If the brief is unclear or incomplete, use the `AskUserQuestion` tool. Don't fill gaps with generic filler. I want to refine the approach with you before you execute.
- Don't over-explain. Deliver the work. Save the commentary unless I ask for it.
- Never delete files anywhere.
- After completing any file changes in the working folder, you MUST write a commit message into the file .commit-trigger in the root of the working folder. The first line must be a short summary (max 72 characters). If more detail is needed, leave a blank line after the summary and add a description. Writing to .commit-trigger must always be the very last action you take. Never write to .commit-trigger before all file changes are complete. Never run git commands yourself.
