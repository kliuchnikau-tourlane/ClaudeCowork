# Sascha Burku
Type: person
Role: Tech Lead on Flamingo (Booking Platform)
First seen: 2026-04-08
Last updated: 2026-04-08

## Context
Reports to Aliaksei. Leading smart booking investigation.

## Updates
- **2026-04-08** — Leading smart booking investigation: created detailed document with data flow diagrams and decision steps. Key finding: room-level DMC mapping is the critical dependency — needs Spaeti to expose an API from their Giata/Geonics mapping data. Two options: (1) Spaeti exposes room mapping API from existing persistence layer (preferred), (2) Flamingo calls Geonics directly (rejected — wrong domain, would duplicate inventory). Found a second mapping service in Bruno (auto-migrated from Postman — likely dead code). Discovered "mapping service" recently updated — will investigate. Aliaksei will ask Kiryl to coordinate Spaeti side. Sascha to post API requirement in Slack and tag Aliaksei. Also discussed Documents Dashboard tech debt: MongoDB auto-scaling to tier 10 on mongodb.com (cost + stability concerns) — wants to migrate to Postgres; also wants to remove Vue.js. Prefers to wait for new infra pilot project before tackling. Will review DD tech debt Confluence page on Friday. Away for infra week next week. Vacation: two days around July 3 (birthday conflicts with Tourlane summer event — missed last year too), two weeks end of August/September. No May/June vacation. (Source: 1:1 — Sascha / Aliaksei)
