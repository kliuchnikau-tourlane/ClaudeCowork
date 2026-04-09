# Pedro Alves
Type: person
Role: Staff Engineer for the backend teams.
First seen: 2026-04-07
Last updated: 2026-04-08

## Context
Owns catalog system design and rollout plan. Key person for Wetu deprecation and destination/area architecture.

## Updates
- **2026-04-07** — Back tomorrow (April 8). Currently finalizing the catalog, next step is touristic areas and destinations. Has a partial rollout plan documented (initial phase where accommodation search still uses Elephant but extends content from catalog). The "middle piece" — full switch from Wetu to catalog — is NOT documented yet. Asked to write down his plan with options as an ADR before the Monday kickoff. Aliaksei is onboarding "Villains" into the destinations topic so they can own and drive it alongside Pedro. (Source: EM Sync)
- **2026-04-08** — Driven Destinations onboarding kick-off. Led the detailed technical discussion: explained two content sourcing options (branding team collaboration vs. augmenting Item Curator), the mapping challenge between Wetu and Expedia areas, and the distinction between geo data and content data.
- Confirmed accommodation decoupling from Wetu is more urgent than destinations decoupling.
- Led the Destinations onboarding kick-off. Presented Destinations Concepts document and effort estimation doc. Explained two use cases for touristic areas: (1) aggregating accommodations/activities for search and route builder, (2) visualization content (images, descriptions, tips) for Trip Planner/TripVis. Identified Expedia Geography API as best geo data source (ancestor tree, bounding boxes, translated names — but zero content). Outlined content options: collaborate with branding team or augment Item Curator. Flagged biggest challenge: mapping existing Wetu area content to new Expedia areas. Proposed exploration tasks: understand current data model, explore area shapes, understand accommodation-to-area mapping. In office until Wednesday of team event week (April 20). (Source: Kick-off: Destinations onboarding)
- Noted only Finland and Sweden are planned as new destinations this year. (Source: Kick-off: Destinations onboarding)
