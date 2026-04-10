#!/bin/bash
# Sync Granola meeting notes (yesterday by default, or specify a date)
# Usage:
#   bash ~/Projects/ClaudeCowork/scripts/sync-granola.sh              # yesterday
#   bash ~/Projects/ClaudeCowork/scripts/sync-granola.sh today        # today
#   bash ~/Projects/ClaudeCowork/scripts/sync-granola.sh 2026-04-09   # specific date
python3 ~/Projects/ClaudeCowork/scripts/granola-export.py --date "${1:-yesterday}" --output ~/Projects/ClaudeCowork/MeetingNotes/
