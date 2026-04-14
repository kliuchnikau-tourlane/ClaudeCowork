# Meeting Notes Review — 2026-04-14 (analyzing meetings from 2026-04-13)

## Meetings Analyzed
- Aliaksei / Veronica (15:00–15:30, 2 participants)
- Wetu Deprecation & Catalog System Rollout — KickOff (15:45–16:35, 7 participants)

---

## Knowledge Base Updates

### People

#### [P1] NEW — veronica-garcia.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Veronica Garcia (veronica.garcia@tourlane.com). Senior tech leader at Tourlane — likely VP Engineering or CTO level based on scope of discussion. Drives strategic decisions on Lambus acquisition, org restructuring, and AI transformation vision. Direct involvement in Aliaksei's career development conversations. Thinks about "AI as an operating system" for the company, shift from APIs to skills, and a potential "AI Platform Engineer" role. Wants to push domain-driven design and clear data ownership as foundation for AI initiatives.
> **Source**: Aliaksei / Veronica (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — marcus-klemann.md
> **Current context**: Developer on Flamingo team, Lambus contractor. Created Support Portal migration roadmap with 4-phase plan.
> **Proposed addition**: **2026-04-13** — Completed deep-dive reassessment of Support Portal migration estimates. Phase 4A confirmed at 2–3 sprints (same as initial). Phase 4B (full tech stack migration) reassessed at 5–7 additional sprints — significantly higher than anticipated. Key blocker: tight coupling to Nuxt.js means large rewrites needed for chatbot solution and CMS logic. Preparing detailed breakdown of what specifically drives the 4B estimate. (Source: Aliaksei / Veronica)
> **Source**: Aliaksei / Veronica (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer for backend teams. Owns catalog system design and rollout plan.
> **Proposed addition**: **2026-04-13** — Led technical discussion at Wetu Deprecation kickoff. Confirmed catalog will not change key behavior (only fetch content for matching inventory) but will enable entire Expedia inventory. Outlined three Spaeti work packages: (1) accommodation search without Wetu ID, (2) search-by-name endpoint for manual accommodations, (3) DMC overlap filtering on supply side. Noted destinations content is work-in-progress — Elephant fallback limited to what's already imported. Flagged that existing accommodation content may be preserved even without Expedia match. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer for frontend teams. Expert on destinations, Trip Planner, and Wetu internals. Leaving company in 1.5–2 months.
> **Proposed addition**: **2026-04-13** — Detailed Trip Planner work packages at Wetu Deprecation kickoff: (1) switch manual accommodation linking from Wetu to catalog, (2) switch area search to Elephant, (3) replace Wetu as transport stop location provider (options: Google Places, Nominatim), (4) stop Trip DB sync with Wetu, (5) clean up Wetu ID references in gecko backend. Revealed he already replaced fixed routes Wetu lookup with static YAML file ~2 years ago (unused feature, no complaints). Noted transport recommendation feature (Cycle 1) will need rework for new location IDs. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — silvia-torre.md
> **Current context**: Engineering Manager for frontend teams (Mochi team). Strong advocate for definition of ready/done.
> **Proposed addition**: **2026-04-13** — At Wetu Deprecation kickoff, raised key concerns: (1) who owns UX gap when sales agents can't find accommodations post-Wetu, (2) Expedia certification risks (API rate limits, content usage restrictions), (3) mix-and-match implications. Pushed for clarity on business stakeholder communication process for Wetu deprecation limitations. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — robert-wolf.md
> **Current context**: Director of Engineering, Aliaksei's manager. Closely involved in Spaeti planning and cross-team coordination.
> **Proposed addition**: **2026-04-13** — Facilitated Wetu Deprecation & Catalog System Rollout kickoff. Wants high-level work packages identified. Noted Spaeti team is responsible for communicating Wetu deprecation limitations to business stakeholders (up to Karen level). Identified two key decisions to announce: (1) manual accommodations can only be replaced with Expedia inventory, (2) no new touristic areas until replacement is built. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — support-portal-migration.md
> **Current status in KB**: 4-phase migration plan documented. Phase 1 (auth area, 2–3 sprints), Phase 2 (forms + AI chat, high effort/risk), Phase 3 (admin area), Phase 4 (CMS migration).
> **Proposed update**: **2026-04-13** — Marcos completed deep-dive reassessment. Phase 4A estimate confirmed at 2–3 sprints. Phase 4B (full backend/tech stack migration) now estimated at 5–7 additional sprints — far higher than anticipated due to tight coupling to Nuxt.js/Node.js. CMS migration to Contentful questioned (isolated to support portal, unclear benefit). Critical finding: AI features (chatbot, FAQ analysis, ticket-based improvements) cannot be purchased contractually from Lambus. Chatbot may use Lambus internal ML models — risk flagged. Veronica wants to proceed with migration regardless of Lambus merger outcome (product/UX rationale). Current lean: keep existing tech stack rather than full migration, pending feature breakdown of AI vs non-AI components. Marcos working with Foxes team on concrete next steps for Phase 4A. (Source: Aliaksei / Veronica)
> **Source**: Aliaksei / Veronica (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — wetu-deprecation.md
> **Current status in KB**: Two-track approach planned. Phase 1 (C2) replace manual accommodation input. 5 work packages identified for TP changes. Pedro to document plan.
> **Proposed update**: **2026-04-13** — Formal kickoff meeting held with Spaeti, Mochi, and Foxes team representatives. Work packages now concretely defined. Spaeti side: (1) serve accommodations without Wetu ID from catalog, (2) build search-by-name endpoint for manual accommodations in catalog, (3) DMC overlap rate filtering on supply side. Trip Planner side (Gregor): (1) switch manual accommodation linking to catalog, (2) switch area search to Elephant, (3) replace transport stop location provider (Google Places or Nominatim), (4) stop Trip DB sync with Wetu, (5) clean up Wetu ID references in gecko backend. Key limitations confirmed: no new touristic areas until replacement built (Cycle 3 target); manual accommodations restricted to Expedia inventory + existing areas. Business stakeholder communication needed (Spaeti team responsible, up to Karen). Fixed routes already migrated to static YAML (non-issue). Transport recommendation feature (C1) will need rework. Item Curator may need extension to support touristic areas. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — catalog-system-rollout.md
> **Current status in KB**: Pedro owns technical plan. Phase 1 documented. API design serves both Wetu replacement and regular search.
> **Proposed update**: **2026-04-13** — At kickoff, confirmed approach: catalog will enable entire Expedia inventory while maintaining key behavior (only fetch content for matching inventory records). No change to content onboarding process. Search-by-name endpoint needed for manual accommodation workflow (new work, not initially planned but always wanted). Rate filtering for Expedia-without-DMC-match handled on supply side (not catalog). Existing accommodation content may be preserved even without Expedia match (to be investigated, not urgent). (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — expedia-integration.md
> **Current status in KB**: ~2/3 of certification requirements complete. Target end of April.
> **Proposed update**: **2026-04-13** — Confirmed still on track, ~2/3 complete. Important policy update: Expedia now requires partners to use their content regardless of booking (previously only if booking with them) — this is favorable for Tourlane. Content API is not rate-limited (only shopping API is). Expedia inventory 2–3x larger than Wetu. Enabling Expedia content will also unlock additional DMC inventory that was previously blocked by lack of content. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — trip-planner.md
> **Current status in KB**: Deeply coupled with Wetu. 5 work packages identified to decouple.
> **Proposed update**: **2026-04-13** — Work packages now concretely scoped at kickoff. Transport stops are a significant additional consideration: currently all stop locations come from Wetu with uniform IDs; post-deprecation they'll come from multiple sources (catalog UUID, Elephant area UUID, external location provider ID) requiring internal data structure changes. Gregor noted transport recommendation feature (C1 work) will need rework. Fixed routes already decoupled (static YAML, ~2 years ago). Manual accommodation search will switch from Wetu to catalog; area search to Elephant. After switch, sales agents limited to Expedia inventory + existing areas for manual accommodations. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — destinations.md
> **Current status in KB**: Three destination concepts. Migrating from Wetu geo shapes to Expedia geography. Discovery phase.
> **Proposed update**: **2026-04-13** — At kickoff, confirmed: deprecating Wetu blocks new destination/area creation until full replacement built (Cycle 3 target). Current fallback: use existing areas in Elephant (limited to what was previously imported). Geo shapes from Wetu will be mapped to Expedia accommodations for manual association. Item Curator currently limited to admin areas — needs work package to support touristic areas. Only new corridors (not brand-new destinations) planned for near-term launches, reducing immediate impact. Pedro confirmed destinations content work-in-progress, expects months-range timeline for full replacement. (Source: Wetu Deprecation KickOff)
> **Source**: Wetu Deprecation & Catalog System Rollout KickOff (2026-04-13)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Investigate AI vs non-AI feature breakdown in Support Portal
> **Description**: Separate the support portal features into AI-dependent (chatbot, FAQ analysis, ticket suggestions) and non-AI components. Check if chatbot uses Lambus internal ML models. This is needed for Veronica to understand contractual options (AI part may not be purchasable) and to refine the migration decision.
> **Due**: 2026-04-18
> **Priority**: p2
> **Source**: Aliaksei / Veronica — Veronica explicitly asked for this breakdown to understand scope and contractual feasibility.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Get detailed 4B estimate breakdown from Marcos
> **Description**: Marcos estimated 5–7 sprints for full tech stack migration (4B) but Aliaksei found this surprisingly high. Get a concrete breakdown of what exactly drives this estimate — particularly the Nuxt.js coupling, chatbot rewrite, and CMS migration portions. Assess which parts could be dropped to reduce scope.
> **Due**: 2026-04-15
> **Priority**: p2
> **Source**: Aliaksei / Veronica — Aliaksei mentioned "tomorrow we should have more concrete data."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Think about career growth areas and propose to Veronica
> **Description**: Veronica outlined several directions for increased impact: process maturity, AI transformation (deterministic → probabilistic engineering), AI platform engineering, domain-driven design/architecture. Reflect on these and propose where you can contribute most. No hard deadline but Veronica is actively thinking about org restructuring.
> **Due**: no due date
> **Priority**: p3
> **Source**: Aliaksei / Veronica — Veronica gave directional guidance and asked Aliaksei to shape a proposal.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Ensure business stakeholder communication plan for Wetu deprecation limitations
> **Description**: Two key limitations need to be communicated up to Karen level: (1) manual accommodations restricted to Expedia inventory, (2) no new touristic areas/destinations until replacement built. Robert noted Spaeti team is responsible. Make sure this communication happens and stakeholders understand the consequences.
> **Due**: 2026-04-21
> **Priority**: p2
> **Source**: Wetu Deprecation KickOff — Robert and Silvia both flagged this as critical.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Two substantive meetings on April 13. The Veronica 1:1 surfaced a major update on Support Portal migration: the full tech stack migration (4B) is estimated at 5–7 sprints by Marcos — far more than expected — pushing the decision toward keeping the existing stack and just transferring ownership. A complicating factor is that AI features can't be purchased contractually from Lambus, and the chatbot may use their internal models. The Lambus acquisition itself remains 50/50 with a decision expected this week. The Wetu Deprecation kickoff was a productive alignment session — work packages are now concretely defined for both Spaeti and Trip Planner sides, with key limitations (no new destinations, Expedia-only manual accommodations) clearly identified. The most urgent follow-up is the AI vs non-AI feature breakdown for the support portal, which Veronica needs for contractual negotiations.
