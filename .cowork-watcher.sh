#!/bin/bash
# To run it:
# brew install fswatch
# launchctl load ~/Projects/ClaudeCowork/.com.cowork.gitpush.plist

FOLDER="/Users/$(whoami)/Projects/ClaudeCowork"
TRIGGER="$FOLDER/.commit-trigger"
FSWATCH="/opt/homebrew/bin/fswatch"  # run `which fswatch` to verify

$FSWATCH -o "$TRIGGER" | while read -r; do
  sleep 0.5

  MSG=$(cat "$TRIGGER")
  [ -z "$MSG" ] && continue

  cd "$FOLDER" || exit
  git add -A
  git diff --cached --quiet && continue
  git commit -m "$MSG"
  git push origin HEAD

  > "$TRIGGER"
done
