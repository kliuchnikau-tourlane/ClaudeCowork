# Meeting Notes Review — 2026-04-10 (analyzing meetings from 2026-04-09)

## Meetings Analyzed
- Wetu for accommodations — gather info that we know so far (14:00–14:45, 3 participants: Aliaksei, Kiryl, Pedro)
- 1:1 — Wieland / Aliaksei (16:00–16:45, 2 participants)
- 1:1 — Kiryl / Aliaksei (17:00–17:45, 2 participants, in Russian)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — kiryl-karetnikau.md
> **Current context**: Tech Lead on Späti team. Last updated 2026-04-08 (Expedia images filtering, ancestry tree, destinations kick-off).
> **Proposed addition**:
> - **2026-04-09** — Spent the week building ML-based image analysis for accommodation content using a small TensorFlow model (~6MB, deployed inside the service container). System stores all accommodation images in S3, categorizes them (hero, living area, exterior, etc.), and filters out undesirable content (people, food, cars, close-up plants). Max 4 images per category. Full processing of all images reduced from ~1 week to 8 hours. A larger model (600MB) exists as fallback for advanced analysis (deduplication, aesthetic quality) but would need bigger infrastructure/GPU. Currently collecting feedback on results, adding new destination images. Limitation: small model can't detect flipped images or deduplicate similar images across categories. Also set up MCP server proof of concept for Claude desktop (one-click auth flow, staging connected, Claudia already using it with 3–4 tools), automated Dependabot PR handling (~80 PRs queued), and fixed a DB index that dropped CPU from ~100% to ~64%. No vacation planned for May–June cycle yet; has 30 days available, will likely take 1–2 weeks. (Source: 1:1 — Kiryl / Aliaksei)
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — wieland-pfesdorf.md
> **Current context**: Engineer on Spaeti. Assigned to destinations topic alongside Pedro. Participates in infra guild.
> **Proposed addition**:
> - **2026-04-09** — Now more positive about API outsourcing (11 Infotech) after initially being critical: "I do see this bringing a huge impact" for increasing digital supply quickly. Concerns: support cases add complexity with an extra layer between Tourlane and DMCs; DMC API quality varies wildly (e.g., Private Safaris has many oddities). Raised infra guild ownership concern after Gregor's departure — believes only Jakob can realistically take over, but Jakob is super busy. Will start looking into destinations next week (syncing with Gregor), full investigation after infra week. Development plan not yet updated (will include destinations topic next 1:1). Vacation: ~1 week around May 25; working from Dunkirk, France June 27–July 26 (will take occasional days off, will miss company summer event); ~2 weeks Aug 26–Sep 9. (Source: 1:1 — Wieland / Aliaksei)
> **Source**: 1:1 — Wieland / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer for backend teams. Owns catalog system design and rollout plan. Key person for Wetu deprecation.
> **Proposed addition**:
> - **2026-04-09** — Led Wetu accommodations sync meeting. Has a solid API draft for catalog accommodation search (on Miro, not yet documented). Confirmed: accommodations replacement is straightforward — expose catalog content via search endpoint (name + country), Trip Planner switches from Wetu/Elephant to catalog. Destinations replacement is harder and less urgent. Raised content licensing risk: Tourlane may not have proper legal rights to use Wetu content (images, descriptions for areas) outside Wetu's itinerary builder — Wetu already asked Tourlane to reduce API load. Proposed interim solution for areas: pull existing Wetu area data into Elephant storage and serve from there, but geo shapes are unreliable (Wetu stopped guaranteeing them since API change). Will prepare documented API draft from Miro board for Monday discussion with Gregor. (Source: Wetu for accommodations — gather info)
> **Source**: Wetu for accommodations — gather info that we know so far
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer for frontend teams. Leaving in ~1.5–2 months. Critical knowledge holder for destinations, Trip Planner, Wetu.
> **Proposed addition**:
> - **2026-04-09** — Wieland confirmed: only Jakob has enough knowledge to potentially take over infra ownership after Gregor leaves, but Jakob is very busy. Gregor is back Monday — Wieland will sync with him on destinations and infra. Has written many documents about destinations (Pedro noted "a bit too many" scattered across Confluence). In office Monday and Wednesday of team event week (April 20). (Source: 1:1 — Wieland / Aliaksei)
> **Source**: 1:1 — Wieland / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — wetu-deprecation.md
> **Current status in KB**: 5 work packages identified for TP changes. Destinations kick-off held. Accommodation decoupling confirmed more urgent than destinations.
> **Proposed update**:
> - **2026-04-09** — Accommodations sync held (Aliaksei, Kiryl, Pedro). Two-phase approach agreed: Phase 1 (C2) = replace manual accommodation input in TP1 — Spaeti exposes catalog content API (search by name + country code), Trip Planner switches from Wetu/Elephant to catalog. Phase 2 (likely C3) = replace accommodation map search with full catalog search (needs additional filters). The search API being designed serves both Wetu replacement AND regular catalog search (not separate implementations). Wetu API currently returns mixed item types (accommodations, areas, rentals) — need to clarify which non-accommodation types Trip Planner actually uses. Content licensing risk: Pedro raised that Tourlane may not have legal rights to store/use Wetu content outside their itinerary builder (need legal review). Interim solution for areas: pull existing Wetu area data into Elephant, but geo shapes unreliable since Wetu API change. Bulk of implementation work is on Trip Planner side, not Spaeti. Erlini shared screen recording of TP1-Wetu interaction (Slack link preserved in meeting notes). Monday: Gregor returns, deeper dive planned. (Source: Wetu for accommodations — gather info)
> **Source**: Wetu for accommodations — gather info that we know so far
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — catalog-system-rollout.md
> **Current status in KB**: Pedro documented Phase 1 but "middle piece" (full Wetu replacement) is not documented.
> **Proposed update**:
> - **2026-04-09** — API design progressing: catalog search endpoint being designed serves both Wetu replacement AND regular accommodation search (unified approach). Draft exists on Miro board (link: https://miro.com/app/board/uXjVJRnq05M=/) but not yet in written document. Pedro to prepare documented version for Monday. Current draft covers accommodation content; country filter not yet in API but easy to add. (Source: Wetu for accommodations — gather info)
> **Source**: Wetu for accommodations — gather info that we know so far
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — api-outsourcing.md
> **Current status in KB**: Partner signed, adapter work starting, first integrations Agent Trails and Thompson. Risk management created.
> **Proposed update**:
> - **2026-04-09** — Wieland now more positive (was initially critical). Gateway adapter approach confirmed: one Tour Plan adapter, then DMC connections released through it. Wieland's concerns: support cases add complexity with extra layer; DMC API quality varies (Private Safaris cited as painful example); responsiveness may drop after initial sales phase. Risk discussion: 11 Infotech hosting is closed-source on their infra — company bankruptcy or service failure is a business risk. Strategy: keep ~5 critical adapters in-house as circuit breakers, outsource the rest. Start slow with non-critical DMCs to battle-test before migrating critical ones. Aliaksei to share risk management plan with wider team. Wieland: "The integration on our side will be fast" (building the adapter). (Source: 1:1 — Wieland / Aliaksei)
> **Source**: 1:1 — Wieland / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — automated-content-onboarding.md
> **Current status in KB**: C1 integrated media to catalog. Next: connect to AccRec.
> **Proposed update**:
> - **2026-04-09** — Kiryl built ML-based image analysis pipeline using TensorFlow model. System categorizes accommodation images (hero, living area, exterior, etc.), filters undesirable content (people, food, cars, close-up plants), max 4 per category. All images stored in S3, full processing in 8 hours (down from ~1 week). Small model (6MB) runs in service container. Larger model (600MB) available as fallback for advanced tasks (deduplication, aesthetics) but needs bigger infra. Currently collecting feedback. Claudia drove the initiative. (Source: 1:1 — Kiryl / Aliaksei)
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — catalog-supply-platform.md
> **Proposed update**:
> - **2026-04-09** — ML image analysis pipeline operational for accommodation content (TensorFlow, 8-hour full run). MCP server proof of concept working for developer tooling (one-click auth, staging connected). DB index fix improved performance. C2 planning concern raised: too many initiatives (Wetu deprecation, Expedia certification, API outsourcing, catalog search, Booking.com analysis, Sascha's room-level mapping API) — won't all fit in 2-month cycle. (Source: 1:1 — Kiryl / Aliaksei)
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Check Wetu content licensing with legal team
> **Description**: Pedro raised that Tourlane may not have proper legal rights to store/use Wetu content (images, area descriptions) outside Wetu's itinerary builder. Wetu has already asked Tourlane to reduce API load. Need to review contract terms with legal to understand what happens when/if the contract ends — are we allowed to keep using stored content?
> **Due**: 2026-04-17
> **Priority**: p2
> **Source**: Wetu for accommodations — gather info (Pedro raised concern)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Monday: Wetu deprecation deep-dive with Gregor + Pedro
> **Description**: Gregor is back Monday. Schedule and run the planned deeper discussion on Wetu deprecation. Pedro is preparing API draft from Miro board. Combine with Erlini's screen recording of TP1-Wetu interaction for full picture. Key questions: exact Wetu usage in TP1 beyond accommodations, how to handle mixed item types, what can be negotiated between Spaeti and Trip Planner teams.
> **Due**: 2026-04-14
> **Priority**: p1
> **Source**: Wetu for accommodations — gather info; 1:1 — Wieland / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Share API outsourcing risk management plan with team
> **Description**: Wieland hasn't seen the risk management plan that was created with Pedro. Check if Claudia shared it with the team; if not, share it so everyone (especially Wieland, who will be maintaining adapters) understands the strategy: which DMCs stay in-house, circuit breaker approach, escalation process.
> **Due**: 2026-04-14
> **Priority**: p3
> **Source**: 1:1 — Wieland / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Review Booking.com analysis results from Kiryl
> **Description**: Kiryl mentioned someone completed the Booking.com review/ratings analysis (checking if Booking.com data covers what Expedia doesn't). Kiryl said he'll look at it tomorrow (April 10). Review the results to decide if Booking.com integration is needed for content quality.
> **Due**: 2026-04-11
> **Priority**: p3
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Consolidate all C2 initiatives into prioritized plan
> **Description**: Kiryl raised that there are too many things to fit in 2 months: Wetu deprecation (accommodations + destinations), API for Sascha (room-level mapping), Expedia certification, catalog search, Booking.com analysis, API outsourcing adapter, MCP tooling. Need to collect all initiatives with dependencies and make realistic commitments. Claudia started something on Miro — check and build on it.
> **Due**: 2026-04-18
> **Priority**: p1
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Coordinate Sascha's room-level mapping API with Kiryl
> **Description**: Sascha needs an API from Spaeti for room-level DMC mapping (smart booking investigation). Kiryl acknowledged this in 1:1 — needs to document input/output/process. Follow up to make sure this gets scoped and included in C2 planning.
> **Due**: 2026-04-14
> **Priority**: p2
> **Source**: 1:1 — Kiryl / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Watch Erlini's screen recording of TP1-Wetu interaction
> **Description**: Erlini shared a detailed screen recording showing how Trip Planner frontend communicates with Gecko backend to Wetu. Link in Slack: https://tourlane.slack.com/archives/C0ALA2Q6Y92/p1775719185915679?thread_ts=1775663081.692889&cid=C0ALA2Q6Y92. Pedro and Kiryl already reviewed it. Important context for Monday's discussion.
> **Due**: 2026-04-14
> **Priority**: p2
> **Source**: Wetu for accommodations — gather info
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Yesterday's three meetings were heavily focused on Wetu deprecation planning for accommodations. The key outcome from the sync with Pedro and Kiryl is a clearer two-phase approach: Phase 1 (C2) replaces manual accommodation input in TP1 with a new catalog search API, while Phase 2 (C3) tackles map search with full filters. Pedro raised an important content licensing risk around Wetu data that needs legal review. The 1:1 with Wieland covered Gregor's departure impact (infra guild ownership is a concern — only Jakob can realistically take over) and a constructive discussion about API outsourcing risks. The 1:1 with Kiryl (in Russian) revealed impressive progress on ML-based image analysis for accommodation content, MCP server tooling, and Dependabot automation — but also surfaced a capacity concern: there are too many C2 initiatives to fit in two months, and a prioritization exercise is needed urgently.
