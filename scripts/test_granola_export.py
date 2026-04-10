#!/usr/bin/env python3
"""
Tests for granola-export.py

Uses only the Python standard library (unittest + tempfile).
Run:  python3 scripts/test_granola_export.py
"""

import json
import os
import sys
import tempfile
import unittest
from datetime import date, timedelta
from pathlib import Path

# Import the module under test
sys.path.insert(0, str(Path(__file__).resolve().parent))
import importlib
granola_export = importlib.import_module("granola-export")


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

def make_doc(doc_id, title, created_at, notes_md="", deleted_at=None):
    """Build a minimal Granola document dict."""
    return {
        "id": doc_id,
        "title": title,
        "created_at": created_at,
        "notes_markdown": notes_md,
        "summary": "",
        "deleted_at": deleted_at,
        "google_calendar_event": {
            "start": {"dateTime": created_at},
            "end": {},
            "attendees": [
                {"displayName": "Alice", "email": "alice@example.com"},
                {"email": "bob@example.com"},
            ],
        },
        "people": {},
    }


def make_transcript_segment(text, source="microphone", start_ts=None):
    """Build a single transcript segment."""
    seg = {"text": text, "source": source}
    if start_ts is not None:
        seg["start_timestamp"] = start_ts
    return seg


def make_cache(documents, transcripts=None):
    """Build a full Granola cache structure."""
    docs_dict = {d["id"]: d for d in documents}
    trans_dict = transcripts or {}
    return {"cache": {"state": {"documents": docs_dict, "transcripts": trans_dict}}}


SAMPLE_DATE = "2026-04-10"
SAMPLE_ISO = f"{SAMPLE_DATE}T11:00:00.000Z"

DOC_A = make_doc("aaa-111", "Sprint Planning", SAMPLE_ISO, notes_md="- Discussed roadmap")
DOC_B = make_doc("bbb-222", "1:1 — Alice / Bob", SAMPLE_ISO, notes_md="- Performance review")
DOC_DELETED = make_doc("ccc-333", "Old Meeting", SAMPLE_ISO, deleted_at="2026-04-10T18:00:00Z")
DOC_OTHER_DAY = make_doc("ddd-444", "Yesterday Meeting", "2026-04-09T14:00:00.000Z")

TRANSCRIPT_A = [
    make_transcript_segment("Hello everyone", "microphone", SAMPLE_ISO),
    make_transcript_segment("Hi there", "system_audio", "2026-04-10T11:00:05.000Z"),
    make_transcript_segment("Let's start", "microphone", "2026-04-10T11:00:10.000Z"),
]

TRANSCRIPT_B_NUMERIC = [
    make_transcript_segment("Welcome", "microphone", 1744282800.0),     # offset-style: big unix ts
    make_transcript_segment("Thanks", "system_audio", 1744282805000),    # milliseconds
]

TRANSCRIPT_EMPTY_TEXT = [
    make_transcript_segment("", "microphone", SAMPLE_ISO),
    make_transcript_segment("   ", "system_audio", "2026-04-10T11:01:00.000Z"),
    make_transcript_segment("Actual text", "microphone", "2026-04-10T11:02:00.000Z"),
]


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

class TestGetDocumentsForDate(unittest.TestCase):
    """Test filtering documents by date."""

    def test_returns_matching_docs(self):
        cache = make_cache([DOC_A, DOC_B, DOC_OTHER_DAY])
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        titles = {r["doc"]["title"] for r in results}
        self.assertEqual(titles, {"Sprint Planning", "1:1 — Alice / Bob"})

    def test_excludes_deleted_docs(self):
        cache = make_cache([DOC_A, DOC_DELETED])
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        titles = {r["doc"]["title"] for r in results}
        self.assertNotIn("Old Meeting", titles)
        self.assertIn("Sprint Planning", titles)

    def test_empty_for_no_matches(self):
        cache = make_cache([DOC_OTHER_DAY])
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        self.assertEqual(results, [])

    def test_attaches_transcripts(self):
        cache = make_cache([DOC_A], transcripts={"aaa-111": TRANSCRIPT_A})
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        self.assertEqual(len(results), 1)
        self.assertEqual(len(results[0]["transcripts"]), 3)

    def test_missing_transcripts_returns_empty_list(self):
        """Documents without transcripts should still export (empty transcript list)."""
        cache = make_cache([DOC_A])  # no transcripts dict entry
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]["transcripts"], [])

    def test_handles_malformed_created_at(self):
        bad_doc = make_doc("zzz-999", "Bad Date", "not-a-date")
        cache = make_cache([bad_doc, DOC_A])
        results = granola_export.get_documents_for_date(cache, date(2026, 4, 10))
        titles = {r["doc"]["title"] for r in results}
        self.assertEqual(titles, {"Sprint Planning"})


class TestFormatTimestamp(unittest.TestCase):
    """Test the timestamp formatter handles all input varieties."""

    def test_iso_string(self):
        result = granola_export.format_timestamp("2026-04-10T11:30:45.000Z")
        self.assertEqual(result, "11:30:45")

    def test_iso_string_with_offset(self):
        result = granola_export.format_timestamp("2026-04-10T14:05:00+02:00")
        self.assertEqual(result, "14:05:00")

    def test_none_returns_empty(self):
        self.assertEqual(granola_export.format_timestamp(None), "")

    def test_empty_string_returns_empty(self):
        self.assertEqual(granola_export.format_timestamp(""), "")

    def test_zero_returns_empty(self):
        self.assertEqual(granola_export.format_timestamp(0), "")

    def test_numeric_unix_timestamp(self):
        # A typical Unix timestamp (seconds)
        result = granola_export.format_timestamp(1744282800.0)
        self.assertRegex(result, r"\d{2}:\d{2}:\d{2}")

    def test_numeric_milliseconds(self):
        # Millisecond timestamp (> 1 trillion)
        result = granola_export.format_timestamp(1744282800000)
        self.assertRegex(result, r"\d{2}:\d{2}:\d{2}")

    def test_small_offset_seconds(self):
        # Offset from meeting start: 90 seconds
        result = granola_export.format_timestamp(90)
        self.assertEqual(result, "01:30")

    def test_offset_with_hours(self):
        result = granola_export.format_timestamp(3661)
        self.assertEqual(result, "1:01:01")

    def test_numeric_string(self):
        result = granola_export.format_timestamp("90")
        self.assertEqual(result, "01:30")


class TestBuildTranscriptText(unittest.TestCase):
    """Test transcript text assembly."""

    def test_basic_transcript(self):
        text = granola_export.build_transcript_text(TRANSCRIPT_A)
        self.assertIn("**You**:", text)
        self.assertIn("**Other**:", text)
        self.assertIn("Hello everyone", text)
        self.assertIn("Hi there", text)

    def test_empty_segments_skipped(self):
        text = granola_export.build_transcript_text(TRANSCRIPT_EMPTY_TEXT)
        self.assertNotIn("****", text)  # no empty speaker lines
        self.assertIn("Actual text", text)
        # Only 1 segment should produce output
        lines = [l for l in text.strip().split("\n") if l.strip()]
        self.assertEqual(len(lines), 1)

    def test_empty_input(self):
        self.assertEqual(granola_export.build_transcript_text([]), "")
        self.assertEqual(granola_export.build_transcript_text(None), "")

    def test_segments_sorted_by_timestamp(self):
        segments = [
            make_transcript_segment("Second", "microphone", "2026-04-10T11:01:00Z"),
            make_transcript_segment("First", "system_audio", "2026-04-10T11:00:00Z"),
            make_transcript_segment("Third", "microphone", "2026-04-10T11:02:00Z"),
        ]
        text = granola_export.build_transcript_text(segments)
        lines = text.strip().split("\n")
        self.assertIn("First", lines[0])
        self.assertIn("Second", lines[1])
        self.assertIn("Third", lines[2])

    def test_microphone_labeled_you(self):
        segments = [make_transcript_segment("My words", "microphone")]
        text = granola_export.build_transcript_text(segments)
        self.assertIn("**You**:", text)

    def test_system_audio_labeled_other(self):
        segments = [make_transcript_segment("Their words", "system_audio")]
        text = granola_export.build_transcript_text(segments)
        self.assertIn("**Other**:", text)


class TestExtractAttendees(unittest.TestCase):
    """Test attendee extraction from different doc structures."""

    def test_gcal_attendees(self):
        names = granola_export.extract_attendees(DOC_A)
        self.assertIn("Alice", names)
        self.assertIn("bob@example.com", names)  # falls back to email

    def test_people_field_fallback(self):
        doc = {
            "google_calendar_event": {},
            "people": {
                "organizer": {"name": "Charlie"},
                "participants": [{"name": "Dana"}, {"name": "Eve"}],
            },
        }
        names = granola_export.extract_attendees(doc)
        self.assertIn("Charlie", names)
        self.assertIn("Dana", names)
        self.assertIn("Eve", names)

    def test_no_attendees(self):
        doc = {"google_calendar_event": {}, "people": {}}
        names = granola_export.extract_attendees(doc)
        self.assertEqual(names, [])


class TestExportDocument(unittest.TestCase):
    """Test writing a single document to a markdown file."""

    def test_creates_markdown_file(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            doc_data = {"doc": DOC_A, "transcripts": TRANSCRIPT_A}
            filepath, title = granola_export.export_document(doc_data, day_dir)

            self.assertTrue(filepath.exists())
            self.assertEqual(title, "Sprint Planning")
            self.assertTrue(filepath.name.endswith(".md"))

            content = filepath.read_text()
            self.assertIn("# Sprint Planning", content)
            self.assertIn("## Notes", content)
            self.assertIn("Discussed roadmap", content)
            self.assertIn("## Transcript", content)
            self.assertIn("Hello everyone", content)

    def test_no_transcript_section_when_empty(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            doc_data = {"doc": DOC_A, "transcripts": []}
            filepath, _ = granola_export.export_document(doc_data, day_dir)

            content = filepath.read_text()
            self.assertNotIn("## Transcript", content)

    def test_attendees_section(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            doc_data = {"doc": DOC_A, "transcripts": []}
            filepath, _ = granola_export.export_document(doc_data, day_dir)

            content = filepath.read_text()
            self.assertIn("## Attendees", content)
            self.assertIn("- Alice", content)

    def test_sanitized_filename(self):
        doc = make_doc("xxx-000", "Meeting: Q&A (Final!)", SAMPLE_ISO)
        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            filepath, _ = granola_export.export_document({"doc": doc, "transcripts": []}, day_dir)
            # Should not contain special chars
            self.assertNotIn(":", filepath.name)
            self.assertNotIn("(", filepath.name)
            self.assertNotIn("!", filepath.name)

    def test_empty_title_fallback(self):
        doc = make_doc("xxx-000", "", SAMPLE_ISO)
        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            filepath, _ = granola_export.export_document({"doc": doc, "transcripts": []}, day_dir)
            self.assertIn("meeting-", filepath.name)


class TestEndToEnd(unittest.TestCase):
    """Integration test: write cache to disk, run full export pipeline."""

    def test_full_export(self):
        cache = make_cache(
            [DOC_A, DOC_B, DOC_DELETED, DOC_OTHER_DAY],
            transcripts={"aaa-111": TRANSCRIPT_A},
        )

        with tempfile.TemporaryDirectory() as tmpdir:
            # Write cache file
            cache_path = Path(tmpdir) / "cache-v6.json"
            cache_path.write_text(json.dumps(cache))

            # Run export
            output_dir = Path(tmpdir) / "output"
            output_dir.mkdir()

            target = date(2026, 4, 10)
            cache_data = granola_export.load_cache(cache_path)
            meetings = granola_export.get_documents_for_date(cache_data, target)

            self.assertEqual(len(meetings), 2, "Should find 2 non-deleted meetings for April 10")

            day_dir = output_dir / target.strftime("%Y-%m-%d")
            day_dir.mkdir(parents=True, exist_ok=True)

            exported_files = []
            for m in meetings:
                fp, title = granola_export.export_document(m, day_dir)
                exported_files.append((fp, title))

            self.assertEqual(len(exported_files), 2)

            # Sprint Planning should have transcript
            sprint_file = [fp for fp, t in exported_files if t == "Sprint Planning"][0]
            sprint_content = sprint_file.read_text()
            self.assertIn("## Transcript", sprint_content)
            self.assertIn("Hello everyone", sprint_content)

            # 1:1 should NOT have transcript section (no segments provided)
            oneone_file = [fp for fp, t in exported_files if "Alice" in t][0]
            oneone_content = oneone_file.read_text()
            self.assertNotIn("## Transcript", oneone_content)

    def test_no_meetings_for_date(self):
        cache = make_cache([DOC_OTHER_DAY])
        target = date(2026, 4, 10)
        meetings = granola_export.get_documents_for_date(cache, target)
        self.assertEqual(len(meetings), 0)


class TestRealCache(unittest.TestCase):
    """Tests against the real Granola cache (skipped if not available)."""

    CACHE_PATH = Path("/sessions/dreamy-serene-allen/mnt/Granola/cache-v6.json")

    def setUp(self):
        if not self.CACHE_PATH.exists():
            self.skipTest("Real Granola cache not available")
        self.cache_data = granola_export.load_cache(self.CACHE_PATH)

    def test_april_10_has_transcripts(self):
        """April 10 meetings should have transcripts in the real cache."""
        meetings = granola_export.get_documents_for_date(self.cache_data, date(2026, 4, 10))
        self.assertGreater(len(meetings), 0, "Should find meetings for April 10")

        meetings_with_transcripts = [m for m in meetings if m["transcripts"]]
        self.assertGreater(len(meetings_with_transcripts), 0,
                           "At least one April 10 meeting should have transcripts")

    def test_export_produces_transcript_section(self):
        """Exported markdown should contain a Transcript section for meetings with audio."""
        meetings = granola_export.get_documents_for_date(self.cache_data, date(2026, 4, 10))
        meetings_with_transcripts = [m for m in meetings if m["transcripts"]]
        if not meetings_with_transcripts:
            self.skipTest("No meetings with transcripts on April 10")

        with tempfile.TemporaryDirectory() as tmpdir:
            day_dir = Path(tmpdir)
            fp, _ = granola_export.export_document(meetings_with_transcripts[0], day_dir)
            content = fp.read_text()
            self.assertIn("## Transcript", content)
            # Should have speaker labels
            self.assertTrue("**You**:" in content or "**Other**:" in content)


if __name__ == "__main__":
    unittest.main()
