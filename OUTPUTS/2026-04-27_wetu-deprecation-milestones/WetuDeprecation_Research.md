# Wetu Deprecation — Comprehensive Milestones Plan

**Date:** 2026-04-27
**Scope:** Späti-led work (Accommodations track, Pedro) + Destinations track (Kiryl). Synthesised from KB project notes, recent meeting transcripts, and Confluence.

---

## Top finding — the document Pedro keeps current

The most authoritative artefact is the **"2026-04-15 WETU DEPRECATION CONTEXT"** page in the new dedicated Confluence space `WETU DEPRECATION` (parent space TPD). It was last edited **today, 2026-04-27 09:44 UTC** — version 9, still actively iterated on. It is the single page where Pedro's input on Späti's work packages, restrictions, dependencies, risks, and timeline has been captured in writing. Pedro is also assigned as the owner of two of the listed next-step actions ("RAPID for business sign-off", "Kick-off session to align teams").

- WETU DEPRECATION CONTEXT (live, the main plan): https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4661510147/2026-04-15+WETU+DEPRECATION+CONTEXT
- WETU DEPRECATION space landing page: https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4662099969/WETU+DEPRECATION

Note: that page is owned by another author (likely Veronica/Christine — not Pedro himself), but it is the agreed cross-team source of truth and reflects Pedro's content. Pedro's own writing on this initiative lives in his recurring **Weekly Updates** and the **Decision Record**, both in the TPD space and both updated within the last two weeks. Those are linked at the bottom of this doc.

---

## Workstream 1 — Accommodations (Späti / Pedro)

### Phase split

From the 2026-04-09 sync (Aliaksei + Kiryl + Pedro) and confirmed in the 2026-04-13 kickoff:

- **Phase 1 — Cycle 2 (May 2026 start)**: replace the **Manual Items** flow in TP1. Späti exposes a Catalog content API (search by name + country code). Trip Planner switches from Wetu/Elephant to Catalog for manual accommodation linking.
- **Phase 2 — likely Cycle 3**: replace the **accommodation map search** with full Catalog search (additional filters required). Same underlying search API as Phase 1 — not a separate implementation.

### Späti work packages (the milestones you asked for)

These are taken verbatim from the Confluence WETU DEPRECATION CONTEXT page (Spati Team table) and cross-checked against Pedro's API specs in the Catalog Domain Design page. The endpoint specs (search, fetch, price refresh) Pedro flagged as "now specified" in his 2026-04-14 Weekly Update map onto WP1 + WP2 below.

| # | Work package | What it actually means | Status as of 2026-04-22 |
|---|---|---|---|
| 1 | **Remove V2 ID from accommodation endpoints** | Stop returning Wetu IDs from Späti's accommodation APIs; serve accommodations without a Wetu dependency. Renaming/cleanup on the response shape. | Spec ready — implementation pending |
| 2 | **Develop search endpoint for manual accommodations in Catalog** | New `Search Accommodations` endpoint on Catalog. Search by name (+ country code as filter). This was not in Catalog's original scope — it was added specifically to replace Wetu's content search behind the TP1 "Link content" form. | **Endpoint specified** (Pedro's 2026-04-14 Weekly Update). Not built yet. |
| 3 | **Develop search endpoint for manual areas in Elephant** | Searching touristic areas by name, limited to areas already imported into Elephant. No new touristic areas until the full replacement is built. Pedro will write a RAPID to align the org on this restriction. | Pending. RAPID owed by Pedro. |
| 4 | **Filter Expedia rates without DMC match** (Supply side) | Supply ensures Späti does not serve Expedia rates if there is no matching DMC inventory. Inventory will be visibly limited as a result. | Pending. Decision recorded in DR008. |
| 5 | **Migrate Elephant Accommodation UUIDs to Catalog** | Trip continuity (past trips, in-planning, confirmed) requires the Accommodation UUID to remain stable across legacy → new. Migration steps still need to be detailed (Pedro's 2026-04-14 update flags this as the next design priority). | Migration steps pending — flagged as next focus. |

Supporting endpoints already specified by Pedro in the Catalog Domain Design (linked under Phase 1 above):
- **Search Accommodations (Sync)** — backs WP2.
- **Fetch Accommodation Details (Sync)** — adjustments made when Search was added.
- **Price Refresh (Sync)** — specified, implementation depends on Supply domain readiness.
- **Content Curation (Async)** — already in development; serves Expedia content into staging.

### Restrictions Späti's plan introduces (worth tracking as separate communication milestones)

| Restriction | Mitigation in plan |
|---|---|
| Manual accommodations limited to DMC-mapped Expedia inventory (~5% gap, some African destinations affected) | Expedia has 2-3× Wetu inventory; gaps expected to be rare |
| Manual accommodations require an existing touristic area | Reuse existing Wetu geo-shapes; expand in Cycle 3 |
| **No new destinations** until Area System replacement is in place | Communicate to business stakeholders (Karen+ level); pull additional destinations from Wetu before deprecation as a stop-gap |
| No new touristic areas until replacement is built | Planned for Cycle 3 |

### Mochi (Trip Planner) counterpart work packages

Documented on the same Confluence page — useful context because Späti's milestones are gated on these landing on the TP side:

1. Change 'link content' form (campgrounds → Elephant area search; regular accommodations → Catalog search).
2. Change transport stop search (replace Wetu with Google Maps or Nominatim — cost comparison needed).
3. Remove the unique-ID dependency for transport stops (round-trip detection currently relies on Wetu IDs; switch to distance-based comparison).
4. Remove Wetu ID reliance from accommodation records (audit every place still reading Wetu ID, especially Wetu Sync / Elephant import).
5. Run a migration job on past offers and templates (backfill Wetu references with internal UUIDs from Elephant/Catalog before permanent removal).
6. Stop syncing itineraries with Wetu (delete the Trip Sync code path that PUT/GETs Wetu's itinerary API).

---

## Workstream 2 — Destinations (Kiryl's three milestones)

These are the milestones you received from Kiryl. The Confluence WETU DEPRECATION CONTEXT page treats Destinations as the secondary, slower track ("not as urgent" — confirmed in the 2026-04-08 destinations kick-off and again in the 2026-04-09 sync):

1. **Enrich existing destinations missing geo-data with data from Expedia.** Make sure the dedicated endpoint works well and can replace the Wetu integration for Trip Planner.
2. **Import all destinations from Wetu and enrich them.** Pull additional destinations from Wetu before deprecation as a stop-gap to avoid blocking new launches.
3. **Enable manual curation of destinations** (including geo-shapes). Item Curator extension is the candidate here — currently limited to admin areas.

Where this connects back to Späti's plan: Späti work package #3 (manual area search in Elephant) provides the API surface; the Destinations track refills/curates the data behind it. Until milestone 3 is delivered, "no new destinations until Area System replacement" remains the binding restriction.

The full Touristic Area System replacement is targeted for **Cycle 3** per the Confluence plan.

---

## Cross-team dependencies & risks (carried over from Confluence)

| Dependency | Status | Notes |
|---|---|---|
| Expedia Certification | ~99% complete | Vouchers are the main outstanding risk |
| Catalog System API | In progress | Accommodation search by name not yet built (Späti WP2) |
| Touristic Area Service | Not started | Required for area search; geo-shape fallback from Wetu initially |
| DMC Inventory Overlap | Ongoing | Expedia rates only served if a DMC match exists (DR008) |

| Risk | Likelihood | Impact | Mitigation in plan |
|---|---|---|---|
| Expedia certification fails | Low | High | 2/3 complete; vouchers main risk area |
| Inventory gaps in specific destinations | Medium | Medium | 95% coverage expected; flag destinations with gaps |
| Knowledge bottleneck on Gregor (TP side) | High | High | Consult Gregor and Robert; build understanding now while he's available |
| Mochi availability after May 8-15 (TPS release) | Low | Medium | Consider giving Gregor and Robert a more active role |

---

## Target timeline (from Confluence, today's snapshot)

| Milestone | Target |
|---|---|
| Work package definition | Second week of May |
| Cycle 2 start | May 2026 |
| V2 deprecation (Phase 1) | TBD |
| Touristic Area System replacement | Cycle 3 |

Open action items still owned by Pedro on the Confluence page: write the **RAPID for business sign-off**, run the **kick-off session** (jointly with Kiryl), and produce the **T-shirt estimation session** for Späti after kick-off.

Open question still on the page (assigned to Robert): *"If we freeze TP1, would the value of Wetu deprecation change?"*

---

## Pedro's documentation trail on Confluence (most recent first)

These are the pages Pedro is the author of, in the TPD space, that touch this initiative. The first one is the recurring status doc and is the place to check for fresh weekly progress.

- **Weekly Updates** — last updated 2026-04-22. Pedro's running status doc; explicit Wetu callouts on 4/14 ("there is now a plan to enable Catalog to be a replacement for Wetu in Trip Planner") and 3/24 ("Späti will need to replace Wetu for the Manual Items feature"). https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4430200874/Weekly+Updates
- **Decision Record** — last updated 2026-04-12. Two decisions directly drive the Wetu plan:
  - **DR007** (2026-03-18) — Catalog will replace Wetu as the source of Accommodation content for the "Manual Items" feature in Trip Planner. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4416405531/Decision+Record#DR007
  - **DR008** (2026-04-10) — Catalog will not drop its requirement to import only Content that matches Inventory records. Filtering of Expedia-only rates moves to Supply. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4416405531/Decision+Record#DR008
- **Catalog Domain Design** — last updated 2026-04-15. API specs for Search Accommodations, Fetch Accommodation Details, Price Refresh, Content Curation. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4420108353/Catalog+Domain+Design
- **Catalog Events** — last updated 2026-04-20. Sellable Accommodation Created and related events. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4616028165/Catalog+Events

And the cross-team space (not Pedro-authored but reflects his input):

- **WETU DEPRECATION** space — landing. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4662099969/WETU+DEPRECATION
- **2026-04-15 WETU DEPRECATION CONTEXT** — the live plan. https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4661510147/2026-04-15+WETU+DEPRECATION+CONTEXT

---

## Sources

- KB: PROJECTS/KnowledgeBase/projects/wetu-deprecation.md (project notes through 2026-04-14)
- Meeting: MeetingNotes/2026-04-09 — Wetu for accommodations (Aliaksei + Kiryl + Pedro)
- Meeting: MeetingNotes/2026-04-13 — Wetu Deprecation & Catalog System Rollout KickOff
- Meeting: MeetingNotes/2026-04-22 — TripPlanner ↔ Wetu catch up (with Gregor)
- Meeting: MeetingNotes/2026-04-23 — TP↔Wetu sequence diagram drawing session
- OUTPUTS/2026-04-24_TripPlannerWetu-sequence-diagrams/TripPlannerWetu_Documentation.md
- Confluence: WETU DEPRECATION CONTEXT (https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4661510147/2026-04-15+WETU+DEPRECATION+CONTEXT) — last edit 2026-04-27
- Confluence: Pedro's Weekly Updates (https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4430200874/Weekly+Updates) — last edit 2026-04-22
- Confluence: Decision Record (https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4416405531/Decision+Record) — DR007, DR008
- Confluence: Catalog Domain Design (https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4420108353/Catalog+Domain+Design)
