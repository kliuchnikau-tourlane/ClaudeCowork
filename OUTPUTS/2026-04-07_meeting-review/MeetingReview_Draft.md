# Meeting Notes Review — 2026-04-07

## Meetings Analyzed
- **Get started with Granola** (09:23–09:53, 1 participant — Sam Stephenson). Granola onboarding demo. Transcript also captured a side conversation with substantive work content about team capacity and knowledge transfer.
- **Outcome roadmap Spati** (11:30–12:00, 4 participants — Christine Berg, Robert Wolf, Claudia Tita, Aliaksei). Spaeti outcome roadmap review: impact estimation for Expedia integration, API sourcing, content onboarding, and supply extension.
- **EM Sync** (16:00–17:20, 4 participants — Robert Wolf, Veronica Garcia, another EM, Aliaksei). Cycle 2 planning deep-dive. Massive discussion on Wetu deprecation scope, catalog system rollout, cross-team dependencies, Gregor's departure timeline, and whether both initiatives fit into C2.

---

## Knowledge Base Updates

### People

#### [P1] NEW — christine-berg.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Christine Berg
> Type: person
> Role: Head of Product
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Stakeholder involved in Spaeti outcome roadmap reviews. Pushes for net profit impact translations and storytelling around team deliverables. Email: christine.berg@tourlane.com.
>
> ## Updates
> - **2026-04-07** — Reviewed Spaeti outcome roadmap. Pushed for net profit figures alongside CR1/margin metrics. Suggested presenting impact as a story at the next product monthly, including speed-of-automation angle (manual FTE effort vs automated). Asked for book-through-rate to net profit translation model. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] NEW — robert-wolf.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Robert Wolf
> Type: person
> Role: Director of Engineering
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Rober is my manager.
> Closely involved in Spaeti planning and cross-team coordination. Co-prepared the outcome roadmap. Coordinates dependency work across Spaeti/Mochi/Foxes. Email: robert.wolf@tourlane.com.
>
> ## Updates
> - **2026-04-07** — Co-prepared Spaeti outcome roadmap with Aliaksei. In EM Sync, shared dependency map and Spaeti Domain Definition Workshop on Miro. Has documented initial catalog rollout steps. Tasked with coordinating cross-team progress on Wetu deprecation — needs to ensure Gregor, Pedro, Sylvia, and Aliaksei all converge on a plan. (Source: Outcome roadmap Spati, EM Sync)
> ```
> **Source**: Outcome roadmap Spati, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] NEW — claudia-tita.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Claudia Tita
> Type: person
> Role: Product Manager on the Späti team (Supply Platform team)
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Presented at Spaeti outcome roadmap review. Email: claudia.tita@tourlane.com.
>
> ## Updates
> - **2026-04-07** — Present at Spaeti outcome roadmap review. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] NEW — silvia-torre.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Silvia de la Torre
> Type: person
> Role: Engineering Manager for the frontend teams
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Engineering Manager. Manages what appears to be the Mochi team. Strong advocate for definition of ready/done before starting cross-team dependency work. Email: veronica.garcia@tourlane.com.
>
> ## Updates
> - **2026-04-07** — Key contributor in EM Sync. Proposed focusing only on Wetu deprecation for C2 (pushing catalog/AccRec integration back) to avoid failing on both. Raised concerns about repeating the Expedia certification pattern of start/pause/restart. Wants shared definition of ready and definition of done before kicking off dependency work. Plans to onboard Mochi team carefully with staged handovers from Gregor. Proposed templates for cross-team alignment before starting. Also flagged lack of proper staging environment for testing. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] NEW — marcus-klemann.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Marcus Klemann
> Type: person
> Role: Developer on Flamingo (Booking Platform) team. Lambus contractor.
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
>

> ## Updates
> - **2026-04-07** — Flagged as overloaded: working 16-hour days, producing ~16 PRs/day. Flamingo has had periods with only one active developer. This is creating friction. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] NEW — gregor-schmidt.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Gregor Schmidt
> Type: person
> Role: Staff engineer for the frontend teams
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Expert on destinations, Trip Planner, and Wetu internals. Leaving the company in ~1.5–2 months. Critical knowledge holder.
>
> ## Updates
> - **2026-04-07** — Departure confirmed: 1.5–2 months remaining. Currently working on TP2, will be busy until ~mid-May. Back on Monday. Has deep knowledge of Wetu deprecation approach — told Robert it's "doable in one cycle" (but assumed 3-month cycle). Gregor and Pedro are the only ones who fully understand the Wetu/catalog/Trip Planner interactions. Needs to do staged knowledge handovers to Mochi team. May go on vacation mid-June. Also carries incident management knowledge that needs to be transferred. (Source: Get started with Granola side conversation, EM Sync)
> ```
> **Source**: Get started with Granola, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] NEW — pedro-alves.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Pedro Alves
> Type: person
> Role: Staff Engineer for the backend teams.
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Owns catalog system design and rollout plan. Key person for Wetu deprecation and destination/area architecture.
>
> ## Updates
> - **2026-04-07** — Back tomorrow (April 8). Currently finalizing the catalog, next step is touristic areas and destinations. Has a partial rollout plan documented (initial phase where accommodation search still uses Elephant but extends content from catalog). The "middle piece" — full switch from Wetu to catalog — is NOT documented yet. Asked to write down his plan with options as an ADR before the Monday kickoff. Aliaksei is onboarding "Villains" into the destinations topic so they can own and drive it alongside Pedro. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] NEW — kiryl.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Kiryl Karetnikau
> Type: person
> Role: Tech Lead on the Späti team
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Needs to be included in cycle planning.
>
> ## Updates
> - **2026-04-07** — Currently off/on leave. Aliaksei noted in EM Sync: "Include Kiryl into planning ASAP — tomorrow." (Source: EM Sync, Get started with Granola)
> ```
> **Source**: EM Sync, Get started with Granola
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] NEW — karolina-grabowska.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Karolina Grabowska
> Type: person
> Role: Tech lead on the Foxes team
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Working on Trip Viz / user portal.
>
> ## Updates
> - **2026-04-07** — Discussed whether to include her in the Wetu deprecation kickoff on Monday. She has no prior context on the tripless aggregator concept. Veronica to prepare a short summary for her. Decision: probably not needed in initial kickoff unless the scope extends to Trip Viz. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

### Projects

#### [PR1] NEW — wetu-deprecation.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Wetu Deprecation
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Removing Wetu (V2) as the source of truth for accommodations, destinations, and touristic areas across Trip Planner and related systems. Cross-team effort involving Spaeti, Mochi, and potentially Foxes. THE most discussed topic of the day — this is the critical blocker for supply extension.
>
> ## Updates
> - **2026-04-07** — 5 work packages identified for Trip Planner changes:
>   1. Transport leg start/end points: change from Wetu IDs to catalog IDs (assessed as "smaller")
>   2. Content fetching: switch Trip Planner from fetching content from Wetu to catalog system (medium — two options: Mochi does it in TP1, or Foxes does it via aggregation layer)
>   3. Trip Planner as source of truth for accommodation: disable manual accommodation creation in TP1, use only catalog (bigger)
>   4. Manual accommodation linking: change search dialog from Wetu catalog to Spaeti catalog (bigger — front-end change needed)
>   5. Disable Wetu code paths entirely
>
>   Key debate: Can both Wetu deprecation AND catalog system rollout fit in C2? Veronica says no — proposes focusing only on Wetu deprecation. Gregor and Pedro say Wetu deprecation alone is doable in one cycle (but assumed 3 months; C2 is shorter).
>
>   Data migration is a huge sub-topic — need to migrate existing trip data from Wetu IDs to catalog IDs. Options discussed: clean database migration script vs maintaining backwards compatibility.
>
>   Creative scoping discussed: don't support all edge cases (e.g., fixed routes, manual accommodations in rare destinations). Propose dropping use cases that have high engineering cost and low business value.
>
>   Existing doc: "Wetu Refinement Plan" in Confluence, "Oreo" Previous Team space. Robert also has a dependency map on Miro (not loading during meeting).
>
>   Next steps: Pedro to document his plan with options by Friday/Monday. Kickoff meeting Monday with Pedro, Gregor, Aliaksei, Robert, Veronica, Sylvia. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] NEW — expedia-integration.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Expedia Integration
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Extending hotel bed lookup with Expedia data to improve supply coverage. Spaeti team. Most strategic integration in the domain.
>
> ## Updates
> - **2026-04-07** — Certification: all work done on Tourlane side, waiting for Expedia feedback. Tracking document shared with screenshots and requirement status. Spaeti team can maintain communication independently unless something fails. Outcome roadmap: Expedia go-live will extend coverage from ~76% to ~82%. High-level impact estimate: ~€500K margin (full year, seasonal variance — concentrated in Q1/Q4). Mochi team has a proposal related to Expedia that needs discussion with Aliaksei. (Source: Outcome roadmap Spati, EM Sync)
> ```
> **Source**: Outcome roadmap Spati, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] NEW — api-outsourcing.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # API Outsourcing
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Outsourcing API connections for pending suppliers to an external vendor "11infotech". Spaeti initiative to reduce margin leakage and manual booking work.
>
> ## Updates
> - **2026-04-07** — Partner signed. Technical integration starts in C2. Vendor estimates 2–4 weeks per supplier, will work in parallel. 14 pending suppliers to migrate. Some existing suppliers (e.g., Asian Trails) can be plugged in quickly. CM1 leakage for backlog: ~€1.3–1.5M total, ~60% from accommodation documentation gaps. Full impact realized gradually as suppliers go live through end of year. Christine asked for per-supplier breakdown with timeline. Also flagged in EM Sync as a competing priority for C2 capacity. (Source: Outcome roadmap Spati, EM Sync)
> ```
> **Source**: Outcome roadmap Spati, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] NEW — catalog-system-rollout.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Catalog System Rollout
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Deploying Spaeti's new catalog system as the single source of truth for accommodation and destination data, replacing Wetu/V2. Pedro owns the technical plan.
>
> ## Updates
> - **2026-04-07** — Pedro has documented Phase 1: accommodation search remains the entry point for Trip Planner (still searching in Elephant) but extends content from catalog. The critical "middle piece" — full switch where catalog replaces Wetu entirely — is NOT documented yet. This gap is the biggest planning risk for C2. The area/destination catalog is new scope — same architecture as accommodation catalog but not yet built. Veronica proposed deferring catalog integration to focus C2 on Wetu deprecation only. Robert has a Miro board (Spaeti Domain Definition Workshop) showing the rollout steps — there's a missing step between the last two "interface changes" diagrams. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] NEW — automated-content-onboarding.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Automated Content Onboarding
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Automating the ingestion of accommodation content into the catalog, removing manual curation dependency (the "Wetu/BD dependency"). Spaeti initiative.
>
> ## Updates
> - **2026-04-07** — Cycle 1: integrated media to catalog (no standalone value). Next: connect to accommodation recommender — estimated 2 min saved per lookup. Full value depends on AccRec V2. Automated curation using review scores is feasible (data from Expedia + Booking.com). Key blocker: content must exist before curation can scale — currently only ~10% of Expedia inventory usable. Christine emphasized storytelling: frame as scaling from 40K to 40K+ sellable hotels. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] NEW — tp2-trip-planner-rewrite.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # TP2 (Trip Planner Rewrite)
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Rewrite of Trip Planner. Gregor is the primary engineer. Heavily discussed whether to pause.
>
> ## Updates
> - **2026-04-07** — Gregor working on TP2 until ~mid-May. Strong signal to PAUSE TP2 due to lack of capacity and Gregor's departure. Veronica: "much better to say we pause trip planner two because we don't have people to work on it." Gregor also lacks time to define what needs to be built (trip JSON structure, API interactions). Even if Gregor stayed, he'd be fully occupied with Wetu migration. TP2 creates a complication: the new trip object structure needs to be designed, but that work competes with the Wetu deprecation work on the same people. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] NEW — room-level-mapping-api.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Room Level Mapping API
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Hotel/room-level mapping API needed for smart book functionality.
>
> ## Updates
> - **2026-04-07** — May not feasible in current cycle. Aliaksei suggested C3 or later. Room-level mapping is crucial for smart book — either Spaeti builds it or the smart book team handles it. Status: work in progress. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR8] NEW — tree-planner-staffing.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Tree Planner Staffing
> Type: project
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Concern about Tree Planner team capacity and knowledge concentration risk.
>
> ## Updates
> - **2026-04-07** — Team getting thinner. Front-end teams down to one person. Gregor leaving in ~2 months. Discussion about knowledge transfer urgency and potential infra-focused hire. (Source: Get started with Granola — side conversation)
> ```
> **Source**: Get started with Granola (side conversation)
> **Action**: [ ] Accept  [x] Decline  [ ] Rephrase

#### [PR9] NEW — cycle-2-planning.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Cycle 2 Planning
> Type: ceremony
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Planning the next development cycle 2. Short two-month cycle (May-June). Multiple competing priorities.
>
> ## Updates
> - **2026-04-07** — Aliaksei's assessment: "we have 2x more than we can do planned." Competing C2 priorities: Wetu deprecation, catalog system rollout, AccRec support, API sourcing, smart book support. Chicken-and-egg problem: can't do cycle planning without knowing team composition, but can't assign people without the plan. Agreed to use next 2–3 weeks to get high-level work packages defined. Vacation planning urgency: need team vacation plans for C2 at minimum, ideally through end of year — short cycle means every unplanned absence hurts. Senior EM will not accept "we didn't deliver because of vacation" as an excuse. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

### Products

#### [PD1] NEW — accommodation-recommender.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Accommodation Recommender
> Type: product
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> AI/algorithmic system recommending accommodations to sales agents. Central dependency for Spaeti initiatives.
>
> ## Updates
> - **2026-04-07** — V1 impact: ~5 min saving (~2 min from V1, rest from V2). Currently fails to find accommodations in 25% of cases due to limited supply bias. V2 depends on catalog content. In EM Sync: AccRec V2 could potentially use data warehouse (Snowflake) instead of direct catalog API — would make it independent from Spaeti if data team agrees. But if data team says no, AccRec becomes blocked on Mochi capacity (which may be consumed by Wetu deprecation). Needs to be sized for C2. (Source: Outcome roadmap Spati, EM Sync)
> ```
> **Source**: Outcome roadmap Spati, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] NEW — catalog-supply-platform.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Catalog (Supply Platform developed by Spaeti)
> Type: product
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Platform team managing supplier integrations, accommodation content/catalog, and supply availability. Managed by Aliaksei.
>
> ## Updates
> - **2026-04-07** — Outcome roadmap presented to Christine Berg. C2 initiatives: Expedia go-live (~€500K margin), API outsourcing (14 suppliers, partner signed), content onboarding to AccRec. Major blocker: Wetu dependency prevents supply extension. EM Sync revealed the full scope of Wetu deprecation — 5 work packages in Trip Planner alone, plus data migration, plus area/destination catalog build-out. C2 is severely oversubscribed. Pedro (staff eng) is the key person for catalog/Wetu work. Domain Definition Workshop on Miro shows interface changes needed. (Source: Outcome roadmap Spati, EM Sync)
> ```
> **Source**: Outcome roadmap Spati, EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD3] NEW — booking-platform.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Booking Platform (developed by Flamingo)
> Type: product
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Platform team handling booking workflows. Managed by Aliaksei.
>
> ## Updates
> - **2026-04-07** — Multiple work streams running independently, which was working well. Main friction: Marcos is overloaded (16h days, ~16 PRs/day). Team has had periods with only one developer. (Source: Outcome roadmap Spati)
> ```
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD4] NEW — trip-planner.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Trip Planner
> Type: product
> First seen: 2026-04-07
> Last updated: 2026-04-07
>
> ## Context
> Core tool for sales agents to build trips. Currently TP1 is in production, TP2 rewrite is in progress. Deeply coupled with Wetu — uses Wetu IDs for transport legs, accommodation linking, and content fetching. Managed by Silvia.
>
> ## Updates
> - **2026-04-07** — TP1 is the blocker for Wetu deprecation: as long as it uses Wetu IDs, supply can't be extended beyond Wetu-cataloged accommodations. 5 specific work packages identified to decouple. TP2 rewrite may be paused due to Gregor's departure and lack of capacity. Discussion about whether Foxes team should start with Trip Viz (tripless) or user portal — currently started with user portal, but Gregor wanted tripless first for risk minimization. Terminology clarification from Aliaksei's notes: "Trip Viz" = the tool (sometimes called "Trip With"), Spaeti/Mochi/Foxes = team names, Trip Planner = the tool. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Todoist Tasks

#### [T1] Talk to Pedro about Wetu deprecation plan and options
> **Description**: Pedro is back tomorrow (April 8). Get his point of view on Wetu deprecation approach and catalog rollout. Ask him to write down his plan with options (ADR-style) before the Monday kickoff. Focus on: what work is needed, what can be scoped out, what are the dependencies on other teams.
> **Due**: 2026-04-08
> **Priority**: p1
> **Source**: EM Sync — "I would definitely start from Pedro."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Include Kiryl in C2 planning ASAP
> **Description**: From Aliaksei's own notes: "Include Kiryl into planning ASAP — tomorrow." Kiryl is currently off but needs to be brought into cycle 2 planning as soon as possible.
> **Due**: 2026-04-08
> **Priority**: p1
> **Source**: EM Sync (Aliaksei's notes)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Plan kickoff meeting for Monday — Wetu deprecation & catalog rollout
> **Description**: Set up a kickoff meeting for Monday with Pedro, Gregor (back Monday), Robert, Veronica, and Aliaksei. Goal: get all key people in one room to align on Wetu deprecation scope and work packages for C2. Veronica to prepare Carolina if she's needed. Pedro should present his plan before or during the meeting.
> **Due**: 2026-04-08 (send invite)
> **Priority**: p1
> **Source**: EM Sync — "Do we want to have a kick off on Monday?"
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Check Confluence: "Wetu Refinement Plan" from "Oreo" Previous Team space
> **Description**: Robert shared this document during EM Sync. Review it to understand prior thinking on Wetu deprecation and compare with current approach.
> **Due**: 2026-04-09
> **Priority**: p2
> **Source**: EM Sync (Aliaksei's notes)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Size AccRec and Wetu Accom deprecation for C2
> **Description**: From Aliaksei's own notes: "Need to size what we need to do for AccRec and for Wetu Accom deprecation in C2. And what are the estimates and what are conflicting priorities — what we can fit and cannot fit into C2." This is the core planning question.
> **Due**: no due date (before C2 planning finalizes)
> **Priority**: p1
> **Source**: EM Sync (Aliaksei's notes)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Sync with Gregor — knowledge transfer plan
> **Description**: Gregor has 1.5–2 months left. From Aliaksei's notes: "Make sure we sync with Gregor — he's in for 1.5 month–2 months max and then he's gone, we need his knowledge and input before that!" Key areas: Trip Planner internals, destinations, Wetu deprecation, incident management. Veronica plans staged handovers. Gregor may take vacation mid-June — window is tight.
> **Due**: 2026-04-14 (Monday, when Gregor is back)
> **Priority**: p1
> **Source**: EM Sync, Get started with Granola
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Onboard Wieland into destinations topic
> **Description**: Aliaksei mentioned onboarding Wieland as the owner of the destinations topic to drive it and organize things, since Gregor and Pedro are context-heavy but won't be available long-term.
> **Due**: no due date
> **Priority**: p2
> **Source**: EM Sync — "We are onboarding Villains into this topic so he can actually be an owner."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Collect team vacation plans for C2 (and ideally through end of year)
> **Description**: Senior EM emphasized: no more "we didn't deliver because of vacation." C2 is a short cycle — every unplanned absence hurts. Request vacation plans from all team members, at minimum for C2, ideally through end of year. Discuss case-by-case in 1:1s.
> **Due**: 2026-04-11 (this week)
> **Priority**: p2
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Prepare Spaeti impact story for product monthly
> **Description**: Christine encouraged presenting the Spaeti outcome roadmap at the next product monthly with clear storytelling — net profit impact, speed of automation vs manual FTE effort, per-initiative breakdown. Coordinate with Robert.
> **Due**: no due date (before next product monthly)
> **Priority**: p2
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Build book-through-rate → net profit translation model
> **Description**: Align with Kristina and Sasha to create a simple model translating book-through-rate improvements into net profit (accounting for margin loss + manual rework cost). Aliaksei flagged he doesn't have a fast way to calculate this yet.
> **Due**: no due date
> **Priority**: p3
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Get per-supplier breakdown and timeline from API outsourcing vendor
> **Description**: Christine asked to see which suppliers onboard first and what each brings in CM1 impact. Coordinate with vendor for prioritized migration timeline.
> **Due**: no due date
> **Priority**: p3
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T12] Decide on mapping service ownership for C2
> **Description**: Room-level/offer mapping is crucial for smart book. Either Spaeti builds it in C2 or booking team handles it. Decision needed during cycle planning. Decide with Kiryl and Sascha.
> **Due**: no due date (before C2 planning finalizes)
> **Priority**: p3
> **Source**: Outcome roadmap Spati
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T13] Address Marcus overload on Flamingo
> **Description**: Marcos is working 16-hour days, ~16 PRs/day. Team has had periods with only one developer. Sustainability risk.
> **Due**: no due date
> **Priority**: p2
> **Source**: Outcome roadmap Spati
> **Action**: [ ] Accept  [x] Decline  [ ] Rephrase

---

## Summary

Heavy day. Three meetings, dominated by the **EM Sync** (80 minutes) which went deep on the Wetu deprecation problem — this is the single biggest technical decision facing the teams right now. Five specific work packages were identified to decouple Trip Planner from Wetu, but the consensus is that doing both Wetu deprecation AND catalog system rollout in Cycle 2 is likely too much (Veronica's "we'll fail on both" warning). Aliaksei's own assessment: "we have 2x more than we can do." The most urgent actions are tomorrow: talk to Pedro (back April 8), include Kiryl in planning, and start preparing for Monday's kickoff meeting. Gregor's 1.5–2 month departure window creates a hard deadline on knowledge transfer. On the roadmap side, the earlier **Outcome roadmap Spati** session successfully presented impact numbers to Christine — ~€500K from Expedia, significant CM1 savings from API outsourcing — but she wants these translated into net profit for the product monthly.
