#!/bin/bash
# ---------------------------------------------------------------
# Cowork watcher — one-time install
# Registers the git auto-commit watcher as a LaunchAgent so it
# starts on login and survives restarts.
#
# Usage:  bash ~/Projects/ClaudeCowork/.cowork-install.sh
# ---------------------------------------------------------------

set -euo pipefail

COWORK="$HOME/Projects/ClaudeCowork"
PLIST_TEMPLATE="$COWORK/.com.cowork.gitpush.plist"
WATCHER="$COWORK/.cowork-watcher.sh"
LABEL="com.cowork.gitpush"
DEST="$HOME/Library/LaunchAgents/${LABEL}.plist"

# ---- Pre-flight checks ----
if ! command -v fswatch >/dev/null 2>&1; then
  echo "ERROR: fswatch is not installed. Run:  brew install fswatch"
  exit 1
fi

if [ ! -f "$PLIST_TEMPLATE" ]; then
  echo "ERROR: Plist template not found at $PLIST_TEMPLATE"
  exit 1
fi

if [ ! -f "$WATCHER" ]; then
  echo "ERROR: Watcher script not found at $WATCHER"
  exit 1
fi

# ---- Make watcher executable ----
chmod +x "$WATCHER"

# ---- Generate plist with real paths ----
mkdir -p "$HOME/Library/LaunchAgents"
sed "s|__HOME__|$HOME|g" "$PLIST_TEMPLATE" > "$DEST"
echo "✓ Plist installed to $DEST"

# ---- Unload old version (if any), then load ----
launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$DEST"
echo "✓ LaunchAgent loaded: $LABEL"

# ---- Verify ----
sleep 1
if launchctl print "gui/$(id -u)/$LABEL" >/dev/null 2>&1; then
  echo "✓ Watcher is running. Logs at /tmp/cowork-gitpush.log"
  echo ""
  echo "Done! The watcher will now auto-start on every login."
else
  echo "⚠ Agent loaded but may not be running. Check: /tmp/cowork-gitpush-error.log"
fi
