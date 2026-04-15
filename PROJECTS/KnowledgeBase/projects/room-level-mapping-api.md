# Room Level Mapping API
Type: project
First seen: 2026-04-07
Last updated: 2026-04-14

## Context
Hotel/room-level mapping API needed for smart book functionality.

## Updates
- **2026-04-07** — May not feasible in current cycle. Aliaksei suggested C3 or later. Room-level mapping is crucial for smart book — either Spaeti builds it or the smart book team handles it. Status: work in progress. (Source: Outcome roadmap Spati)
- **2026-04-08** — Sascha's smart booking investigation confirmed: room-level DMC mapping is THE critical dependency. Spaeti uses Giata/Geonics mapping internally — data is persisted somewhere in the supply domain. Need: an API that takes a room DMC ID and returns equivalent room IDs from other DMCs. Preferred approach: Spaeti exposes API from existing persistence layer (not direct Geonics calls). Rejected approach: Flamingo calling Geonics directly (wrong domain, would duplicate inventory). Sascha found a "mapping service" recently updated — will investigate. Also found a second mapping endpoint in Bruno (likely dead code auto-migrated from Postman).
- Open question for Kristina: should milestone 1 be accommodation-level or room-level matching?
- Aliaksei to ask Kiryl to coordinate Spaeti side. (Source: 1:1 — Sascha / Aliaksei)
- **2026-04-14** — Confirmed: providing room level mapping properly for smart booking requires building the entire supply domain and migrating from Elephant. This is not trivial — a "quite a bunch of work." Sasha already synced with the team and prepared a technical assessment — they need one simple API, but the challenge is how to provide it given current architecture. (Source: Content Automation Weekly Check)
