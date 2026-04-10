#!/bin/bash
# ---------------------------------------------------------------
# Cowork git auto-commit watcher
# Monitors .commit-trigger and commits+pushes on every change.
#
# Setup (one-time):
#   brew install fswatch
#   bash ~/Projects/ClaudeCowork/.cowork-install.sh
# ---------------------------------------------------------------

set -euo pipefail

# Ensure Homebrew and its packages are on PATH (needed for launchd)
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

FOLDER="$HOME/Projects/ClaudeCowork"
TRIGGER="$FOLDER/.commit-trigger"

# Verify dependencies
command -v fswatch >/dev/null 2>&1 || { echo "ERROR: fswatch not found. Run: brew install fswatch" >&2; exit 1; }
command -v git    >/dev/null 2>&1 || { echo "ERROR: git not found." >&2; exit 1; }

echo "[cowork-watcher] Watching $TRIGGER for changes..."

fswatch -o "$TRIGGER" | while read -r; do
  sleep 0.5

  # Read commit message; skip if empty or whitespace-only
  MSG=$(cat "$TRIGGER" 2>/dev/null)
  [[ -z "${MSG// /}" ]] && continue

  cd "$FOLDER" || exit 1

  # Stage everything, skip if nothing to commit
  git add -A
  git diff --cached --quiet && continue

  # Use --file to handle multiline commit messages correctly
  git commit --file "$TRIGGER"
  git push origin HEAD

  # Clear the trigger (this fires another fswatch event,
  # but the empty-check above will skip it)
  : > "$TRIGGER"

  echo "[cowork-watcher] Committed and pushed at $(date '+%H:%M:%S')"
done
