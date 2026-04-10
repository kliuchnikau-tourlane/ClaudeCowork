# Kiryl Karetnikau
Type: person
Role: Tech Lead on the Späti team
First seen: 2026-04-07
Last updated: 2026-04-09

## Context
Needs to be included in cycle planning.

## Updates
- **2026-04-07** — Currently off/on leave. Aliaksei noted in EM Sync: "Include Kiryl into planning ASAP — tomorrow." (Source: EM Sync, Get started with Granola)
- **2026-04-08** — Checking Expedia check-in/checkout structure: verifying whether pay-at-property check-in data is already in catalog or needs to be added to trip planner. Previously filtered Expedia images — quality now rated positively by stakeholders. Confirmed ancestry tree is NOT currently used for accommodation search.
- Attended Destinations onboarding kick-off — asked about feasibility of mapping Wetu areas to Expedia areas and what happens if mapping isn't possible. (Source: Weekly Aliaksei / Claudia; Kick-off: Destinations onboarding)
- **2026-04-09** — Spent the week building ML-based image analysis for accommodation content using a small TensorFlow model (~6MB, deployed inside the service container). System stores all accommodation images in S3, categorizes them (hero, living area, exterior, etc.), and filters out undesirable content (people, food, cars, close-up plants). Max 4 images per category. Full processing of all images reduced from ~1 week to 8 hours. A larger model (600MB) exists as fallback for advanced analysis (deduplication, aesthetic quality) but would need bigger infrastructure/GPU. Currently collecting feedback on results, adding new destination images. Limitation: small model can't detect flipped images or deduplicate similar images across categories. Also set up MCP server proof of concept for Claude desktop (one-click auth flow, staging connected, Claudia already using it with 3–4 tools), automated Dependabot PR handling (~80 PRs queued), and fixed a DB index that dropped CPU from ~100% to ~64%. No vacation planned for May–June cycle yet; has 30 days available, will likely take 1–2 weeks. (Source: 1:1 — Kiryl / Aliaksei)
