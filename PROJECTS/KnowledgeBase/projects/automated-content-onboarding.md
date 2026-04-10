# Automated Content Onboarding
Type: project
First seen: 2026-04-07
Last updated: 2026-04-09

## Context
Automating the ingestion of accommodation content into the catalog, removing manual curation dependency (the "Wetu/BD dependency"). Spaeti initiative.

## Updates
- **2026-04-07** — Cycle 1: integrated media to catalog (no standalone value). Next: connect to accommodation recommender — estimated 2 min saved per lookup. Full value depends on AccRec V2. Automated curation using review scores is feasible (data from Expedia + Booking.com). Key blocker: content must exist before curation can scale — currently only ~10% of Expedia inventory usable. Christine emphasized storytelling: frame as scaling from 40K to 40K+ sellable hotels. (Source: Outcome roadmap Spati)
- **2026-04-09** — Kiryl built ML-based image analysis pipeline using TensorFlow model. System categorizes accommodation images (hero, living area, exterior, etc.), filters undesirable content (people, food, cars, close-up plants), max 4 per category. All images stored in S3, full processing in 8 hours (down from ~1 week). Small model (6MB) runs in service container. Larger model (600MB) available as fallback for advanced tasks (deduplication, aesthetics) but needs bigger infra. Currently collecting feedback. Claudia drove the initiative. (Source: 1:1 — Kiryl / Aliaksei)
