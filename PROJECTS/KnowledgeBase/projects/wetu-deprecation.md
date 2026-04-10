# Wetu Deprecation
Type: project
First seen: 2026-04-07
Last updated: 2026-04-09

## Context
Removing Wetu (V2) as the source of truth for accommodations, destinations, and touristic areas across Trip Planner and related systems. Cross-team effort involving Spaeti, Mochi, and potentially Foxes. THE most discussed topic of the day — this is the critical blocker for supply extension.

## Updates
- **2026-04-07** — 5 work packages identified for Trip Planner changes:
  1. Transport leg start/end points: change from Wetu IDs to catalog IDs (assessed as "smaller")
  2. Content fetching: switch Trip Planner from fetching content from Wetu to catalog system (medium — two options: Mochi does it in TP1, or Foxes does it via aggregation layer)
  3. Trip Planner as source of truth for accommodation: disable manual accommodation creation in TP1, use only catalog (bigger)
  4. Manual accommodation linking: change search dialog from Wetu catalog to Spaeti catalog (bigger — front-end change needed)
  5. Disable Wetu code paths entirely

  Key debate: Can both Wetu deprecation AND catalog system rollout fit in C2? Veronica says no — proposes focusing only on Wetu deprecation. Gregor and Pedro say Wetu deprecation alone is doable in one cycle (but assumed 3 months; C2 is shorter).

  Data migration is a huge sub-topic — need to migrate existing trip data from Wetu IDs to catalog IDs. Options discussed: clean database migration script vs maintaining backwards compatibility.

  Creative scoping discussed: don't support all edge cases (e.g., fixed routes, manual accommodations in rare destinations). Propose dropping use cases that have high engineering cost and low business value.

  Existing doc: "Wetu Refinement Plan" in Confluence, "Oreo" Previous Team space. Robert also has a dependency map on Miro (not loading during meeting).

  Next steps: Pedro to document his plan with options by Friday/Monday. Kickoff meeting Monday with Pedro, Gregor, Aliaksei, Robert, Veronica, Sylvia. (Source: EM Sync)
- **2026-04-08** — Destinations onboarding kick-off held (separate from accommodations track). Wieland presented the destinations/areas scope. Two use cases: (1) aggregating accommodations by area for search/route builder, (2) visualization content for Trip Planner/TripVis. Expedia Geography API is best candidate for geo data (bounding boxes, ancestor tree) but has zero content. Content options: collaborate with branding team or augment Item Curator. Biggest challenge: mapping existing Wetu area content to new Expedia areas. All areas must have polygons going forward. Confirmed: accommodation decoupling from Wetu is MORE urgent than destination decoupling — can survive without new destinations temporarily. Only Finland and Sweden planned as new destinations this year. Investigation phase: late April (after infra week). Team event week of April 20 good for co-located swarming. Need capacity estimates by end of April for cycle planning. (Source: Kick-off: Destinations onboarding)
- **2026-04-09** — Accommodations sync held (Aliaksei, Kiryl, Pedro). Two-phase approach agreed:
  - Phase 1 (C2) = replace manual accommodation input in TP1 — Spaeti exposes catalog content API (search by name + country code), Trip Planner switches from Wetu/Elephant to catalog.
  - Phase 2 (likely C3) = replace accommodation map search with full catalog search (needs additional filters). The search API being designed serves both Wetu replacement AND regular catalog search (not separate implementations). Wetu API currently returns mixed item types (accommodations, areas, rentals) — need to clarify which non-accommodation types Trip Planner actually uses. Content licensing risk: Pedro raised that Tourlane may not have legal rights to store/use Wetu content outside their itinerary builder (need legal review). Interim solution for areas: pull existing Wetu area data into Elephant, but geo shapes unreliable since Wetu API change. Bulk of implementation work is on Trip Planner side, not Spaeti. Erlinis shared screen recording of TP1-Wetu interaction (Slack link preserved in meeting notes).
  - Monday: Gregor returns, deeper dive planned. (Source: Wetu for accommodations — gather info)
