#!/bin/bash
# =============================================================================
# granola-watch.sh — Watch Granola cache and auto-export on changes
#
# Uses fswatch to monitor cache-v6.json. When the file changes, waits for
# a quiet period (no further writes), then re-exports today's meetings.
# This ensures transcripts are captured as soon as Granola flushes them.
#
# Usage:
#   bash ~/Projects/ClaudeCowork/scripts/granola-watch.sh          # foreground
#   bash ~/Projects/ClaudeCowork/scripts/granola-watch.sh --daemon  # background
#
# Requirements:
#   brew install fswatch
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
EXPORT_SCRIPT="${SCRIPT_DIR}/granola-export.py"
CACHE_FILE="${HOME}/Library/Application Support/Granola/cache-v6.json"
OUTPUT_DIR="${HOME}/Projects/ClaudeCowork/MeetingNotes"
LOG_FILE="${SCRIPT_DIR}/granola-watch.log"
PID_FILE="${SCRIPT_DIR}/.granola-watch.pid"
PYTHON="/opt/homebrew/opt/python@3.14/bin/python3"

# Debounce: wait this many seconds after last cache write before exporting
DEBOUNCE_SECONDS=60

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

check_deps() {
    if ! command -v fswatch &>/dev/null; then
        echo "Error: fswatch not found. Install with: brew install fswatch"
        exit 1
    fi
    if [[ ! -f "$CACHE_FILE" ]]; then
        echo "Error: Granola cache not found at: $CACHE_FILE"
        exit 1
    fi
    if [[ ! -f "$EXPORT_SCRIPT" ]]; then
        echo "Error: Export script not found at: $EXPORT_SCRIPT"
        exit 1
    fi
    if [[ ! -x "$PYTHON" ]] && ! command -v python3 &>/dev/null; then
        echo "Error: Python3 not found"
        exit 1
    fi
    # Use Homebrew python if available, otherwise fall back to system python3
    if [[ ! -x "$PYTHON" ]]; then
        PYTHON="python3"
    fi
}

stop_existing() {
    if [[ -f "$PID_FILE" ]]; then
        local old_pid
        old_pid=$(cat "$PID_FILE" 2>/dev/null)
        if [[ -n "$old_pid" ]] && kill -0 "$old_pid" 2>/dev/null; then
            log "Stopping existing watcher (PID $old_pid)"
            kill "$old_pid" 2>/dev/null || true
            sleep 1
        fi
        rm -f "$PID_FILE"
    fi
}

do_export() {
    local today
    today=$(date '+%Y-%m-%d')
    log "Cache changed — exporting meetings for $today"
    "$PYTHON" "$EXPORT_SCRIPT" --date today --output "$OUTPUT_DIR" 2>&1 | while read -r line; do
        log "  $line"
    done
    log "Export complete"
}

# ---------------------------------------------------------------------------
# Main watch loop
# ---------------------------------------------------------------------------

run_watcher() {
    log "Starting Granola cache watcher"
    log "  Cache: $CACHE_FILE"
    log "  Output: $OUTPUT_DIR"
    log "  Debounce: ${DEBOUNCE_SECONDS}s"

    # Track last change time for debounce
    local last_change=0
    local export_pending=false
    local timer_pid=""

    # Export once on startup to pick up anything already in cache
    do_export

    # Watch the cache file for modifications
    fswatch --event Updated "$CACHE_FILE" | while read -r event; do
        local now
        now=$(date +%s)

        # Kill any pending debounce timer
        if [[ -n "$timer_pid" ]] && kill -0 "$timer_pid" 2>/dev/null; then
            kill "$timer_pid" 2>/dev/null || true
        fi

        # Start a new debounce timer in the background
        (
            sleep "$DEBOUNCE_SECONDS"
            do_export
        ) &
        timer_pid=$!

        log "Cache write detected — waiting ${DEBOUNCE_SECONDS}s for quiet period..."
    done
}

# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

check_deps

case "${1:-}" in
    --daemon)
        stop_existing
        log "Launching in daemon mode"
        nohup bash "$0" >> "$LOG_FILE" 2>&1 &
        echo $! > "$PID_FILE"
        echo "Granola watcher started (PID $(cat "$PID_FILE"))"
        echo "Logs: $LOG_FILE"
        ;;
    --stop)
        stop_existing
        echo "Granola watcher stopped"
        ;;
    --status)
        if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
            echo "Running (PID $(cat "$PID_FILE"))"
        else
            echo "Not running"
        fi
        ;;
    "")
        run_watcher
        ;;
    *)
        echo "Usage: $0 [--daemon|--stop|--status]"
        exit 1
        ;;
esac
