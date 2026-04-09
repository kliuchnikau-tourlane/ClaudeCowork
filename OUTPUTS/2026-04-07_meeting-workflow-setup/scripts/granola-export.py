#!/usr/bin/env python3
"""
Export today's Granola meeting notes to MeetingNotes/YYYY-MM-DD/ folder.

Reads directly from Granola's local cache file (cache-v6.json).
No external dependencies — uses only Python standard library.

Usage:
    python3 granola-export.py --date today --output ~/ClaudeCowork/MeetingNotes/
    python3 granola-export.py --date 2026-04-07 --output ~/ClaudeCowork/MeetingNotes/
"""

import argparse
import json
import re
import sys
from datetime import datetime, date
from pathlib import Path


# Default cache location on macOS
DEFAULT_CACHE_PATH = Path.home() / "Library" / "Application Support" / "Granola" / "cache-v6.json"


def find_cache():
    """Find the Granola cache file."""
    if DEFAULT_CACHE_PATH.exists():
        return DEFAULT_CACHE_PATH

    # Try other versioned cache files in the same directory
    granola_dir = DEFAULT_CACHE_PATH.parent
    if granola_dir.is_dir():
        for f in sorted(granola_dir.glob("cache*.json"), reverse=True):
            return f

    return None


def load_cache(cache_path):
    """Load and return the Granola cache data."""
    with open(cache_path, "r") as f:
        return json.load(f)


def get_documents_for_date(cache_data, target_date):
    """Extract documents (meetings) for a specific date."""
    state = cache_data.get("cache", {}).get("state", {})
    documents = state.get("documents", {})
    transcripts = state.get("transcripts", {})

    results = []
    for doc_id, doc in documents.items():
        # Parse created_at to check the date
        created_at = doc.get("created_at", "")
        try:
            dt = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
            doc_date = dt.date()
        except (ValueError, AttributeError):
            continue

        if doc_date != target_date:
            continue

        # Skip deleted documents
        if doc.get("deleted_at"):
            continue

        # Attach transcript segments for this document
        doc_transcripts = transcripts.get(doc_id, [])

        results.append({
            "doc": doc,
            "transcripts": doc_transcripts,
        })

    return results


def extract_attendees(doc):
    """Extract attendee names from the people and google_calendar_event fields."""
    names = []

    # From google_calendar_event.attendees
    gcal = doc.get("google_calendar_event") or {}
    for attendee in gcal.get("attendees", []):
        name = attendee.get("displayName") or attendee.get("email", "")
        if name:
            names.append(name)

    # If no gcal attendees, try the people field
    if not names:
        people = doc.get("people") or {}
        for role, person in people.items():
            if isinstance(person, dict):
                name = person.get("name", "")
                if name:
                    names.append(name)
            elif isinstance(person, list):
                for p in person:
                    if isinstance(p, dict):
                        name = p.get("name", "")
                        if name:
                            names.append(name)

    return names


def build_transcript_text(transcript_segments):
    """Build readable transcript from segments, separating mic (you) vs system (others) audio."""
    if not transcript_segments:
        return ""

    lines = []
    for seg in sorted(transcript_segments, key=lambda s: s.get("start_timestamp", 0)):
        text = seg.get("text", "").strip()
        if not text:
            continue
        source = seg.get("source", "unknown")
        speaker = "You" if source == "microphone" else "Other"
        lines.append(f"**{speaker}**: {text}")

    return "\n".join(lines)


def export_document(doc_data, day_dir):
    """Export a single document to a markdown file."""
    doc = doc_data["doc"]
    transcripts = doc_data["transcripts"]

    title = doc.get("title", "Untitled Meeting")
    created_at = doc.get("created_at", "")
    notes_md = doc.get("notes_markdown", "")
    summary = doc.get("summary", "")

    # Build the markdown file
    parts = []
    parts.append(f"# {title}\n")

    # Meeting time from gcal
    gcal = doc.get("google_calendar_event") or {}
    start = gcal.get("start", {})
    end = gcal.get("end", {})
    start_time = start.get("dateTime", start.get("date", created_at))
    end_time = end.get("dateTime", end.get("date", ""))

    if start_time:
        try:
            st = datetime.fromisoformat(start_time.replace("Z", "+00:00"))
            parts.append(f"**Date**: {st.strftime('%Y-%m-%d')}")
            time_str = st.strftime("%H:%M")
            if end_time:
                et = datetime.fromisoformat(end_time.replace("Z", "+00:00"))
                time_str += f" – {et.strftime('%H:%M')}"
            parts.append(f"**Time**: {time_str}")
        except ValueError:
            parts.append(f"**Created**: {created_at}")

    # Location
    location = gcal.get("location", "")
    if location:
        parts.append(f"**Location**: {location}")

    parts.append("")

    # Attendees
    attendees = extract_attendees(doc)
    if attendees:
        parts.append("## Attendees\n")
        for name in attendees:
            parts.append(f"- {name}")
        parts.append("")

    # Notes (the human-written / AI-enhanced notes)
    if notes_md and notes_md.strip():
        parts.append("## Notes\n")
        parts.append(notes_md.strip())
        parts.append("")

    # AI Summary
    if summary:
        parts.append("## AI Summary\n")
        if isinstance(summary, dict):
            parts.append(json.dumps(summary, indent=2))
        else:
            parts.append(str(summary))
        parts.append("")

    # Transcript
    transcript_text = build_transcript_text(transcripts)
    if transcript_text:
        parts.append("## Transcript\n")
        parts.append(transcript_text)
        parts.append("")

    # Write the file
    safe_title = re.sub(r'[^\w\s-]', '', title).strip().replace(' ', '-')[:60]
    if not safe_title:
        safe_title = f"meeting-{doc.get('id', 'unknown')[:8]}"
    filename = f"{safe_title}.md"

    filepath = day_dir / filename
    filepath.write_text("\n".join(parts))
    return filepath, title


def main():
    parser = argparse.ArgumentParser(
        description="Export Granola meeting notes from local cache to Markdown files."
    )
    parser.add_argument(
        "--date", default="today",
        help="Date to export: 'today' or YYYY-MM-DD (default: today)"
    )
    parser.add_argument(
        "--output", required=True,
        help="Output directory (e.g. ~/ClaudeCowork/MeetingNotes/)"
    )
    parser.add_argument(
        "--cache", default=None,
        help="Path to Granola cache file (default: auto-detect)"
    )
    args = parser.parse_args()

    # Parse target date
    if args.date == "today":
        target_date = date.today()
    else:
        target_date = date.fromisoformat(args.date)

    date_str = target_date.strftime("%Y-%m-%d")

    # Find cache
    cache_path = Path(args.cache) if args.cache else find_cache()
    if not cache_path or not cache_path.exists():
        print(f"Error: Granola cache not found.")
        print(f"  Expected at: {DEFAULT_CACHE_PATH}")
        print(f"  Use --cache to specify a custom path.")
        return 2

    print(f"Exporting Granola notes for {date_str}...")
    print(f"  Cache: {cache_path}")

    # Load and filter
    cache_data = load_cache(cache_path)
    meetings = get_documents_for_date(cache_data, target_date)

    if not meetings:
        print(f"  No meetings found for {date_str}.")
        return 1

    # Create output directory
    day_dir = Path(args.output).expanduser() / date_str
    day_dir.mkdir(parents=True, exist_ok=True)

    # Export each meeting
    exported = 0
    for meeting_data in meetings:
        filepath, title = export_document(meeting_data, day_dir)
        print(f"  Exported: {title} -> {filepath.name}")
        exported += 1

    print(f"Done. Exported {exported} meeting(s) to {day_dir}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
