#!/bin/bash
# =============================================================================
# install-granola-watch.sh — Install the Granola cache watcher as a launchd agent
#
# What it does:
#   1. Checks dependencies (fswatch, python3, cache file)
#   2. Generates the plist with real paths (replaces __HOME__)
#   3. Unloads any old version, copies plist, loads the new agent
#
# Usage:
#   bash ~/Projects/ClaudeCowork/scripts/install-granola-watch.sh
#
# To uninstall:
#   launchctl unload ~/Library/LaunchAgents/com.cowork.granola-watch.plist
#   rm ~/Library/LaunchAgents/com.cowork.granola-watch.plist
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLIST_TEMPLATE="${SCRIPT_DIR}/com.cowork.granola-watch.plist"
PLIST_NAME="com.cowork.granola-watch.plist"
LAUNCH_AGENTS_DIR="${HOME}/Library/LaunchAgents"
PLIST_DEST="${LAUNCH_AGENTS_DIR}/${PLIST_NAME}"

echo "=== Granola Watch Installer ==="
echo ""

# --- Check dependencies ---
echo "Checking dependencies..."

if ! command -v fswatch &>/dev/null; then
    echo ""
    echo "  fswatch not found. Install it with:"
    echo "    brew install fswatch"
    echo ""
    exit 1
fi
echo "  ✓ fswatch"

PYTHON="/opt/homebrew/opt/python@3.14/bin/python3"
if [[ ! -x "$PYTHON" ]]; then
    PYTHON="$(command -v python3 2>/dev/null || true)"
fi
if [[ -z "$PYTHON" ]]; then
    echo "  ✗ python3 not found"
    exit 1
fi
echo "  ✓ python3 ($PYTHON)"

CACHE_FILE="${HOME}/Library/Application Support/Granola/cache-v6.json"
if [[ ! -f "$CACHE_FILE" ]]; then
    echo "  ✗ Granola cache not found at: $CACHE_FILE"
    exit 1
fi
echo "  ✓ Granola cache"

if [[ ! -f "${SCRIPT_DIR}/granola-export.py" ]]; then
    echo "  ✗ granola-export.py not found in $SCRIPT_DIR"
    exit 1
fi
echo "  ✓ granola-export.py"

if [[ ! -f "${SCRIPT_DIR}/granola-watch.sh" ]]; then
    echo "  ✗ granola-watch.sh not found in $SCRIPT_DIR"
    exit 1
fi
echo "  ✓ granola-watch.sh"

# --- Make scripts executable ---
chmod +x "${SCRIPT_DIR}/granola-watch.sh"
chmod +x "${SCRIPT_DIR}/granola-export.py"

# --- Generate plist with real paths ---
echo ""
echo "Installing launchd agent..."

mkdir -p "$LAUNCH_AGENTS_DIR"

# Unload old version if present
if launchctl list | grep -q "com.cowork.granola-watch" 2>/dev/null; then
    echo "  Unloading previous version..."
    launchctl unload "$PLIST_DEST" 2>/dev/null || true
fi

# Replace __HOME__ placeholder with actual home dir
sed "s|__HOME__|${HOME}|g" "$PLIST_TEMPLATE" > "$PLIST_DEST"
echo "  Wrote: $PLIST_DEST"

# Load the agent
launchctl load "$PLIST_DEST"
echo "  Loaded: com.cowork.granola-watch"

echo ""
echo "=== Done ==="
echo ""
echo "The watcher is now running. It will:"
echo "  • Start automatically on login"
echo "  • Watch Granola's cache for changes"
echo "  • Re-export today's meeting notes whenever transcripts arrive"
echo "  • Write to: ~/Projects/ClaudeCowork/MeetingNotes/YYYY-MM-DD/"
echo ""
echo "Commands:"
echo "  Check status:  bash ~/Projects/ClaudeCowork/scripts/granola-watch.sh --status"
echo "  View logs:     tail -f ~/Projects/ClaudeCowork/scripts/granola-watch.log"
echo "  Stop:          launchctl unload ~/Library/LaunchAgents/com.cowork.granola-watch.plist"
echo "  Manual sync:   bash ~/Projects/ClaudeCowork/scripts/sync-granola.sh [today|yesterday|YYYY-MM-DD]"
