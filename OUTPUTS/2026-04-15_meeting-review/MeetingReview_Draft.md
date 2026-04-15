# Meeting Notes Review — 2026-04-15 (analyzing meetings from 2026-04-14)

## Meetings Analyzed
- Aliaksei / Kiryl Planning Sync (Tue Apr 14, 2 participants) — poor transcript quality, limited extractable signal
- Aliaksei / Robert Biweekly Status Report (Tue Apr 14, 2 participants)
- Content Automation Milestone: Weekly Check (Tue Apr 14, 4 participants)
- EM Sync Weekly (Tue Apr 14, 3 participants — Aliaksei, Robert, Silvia)
- Support Portal Migration — Alignment sync within Flamingo (Tue Apr 14, 3 participants — Aliaksei, Kristina, Markus)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — robert-wolf.md
> **Current context**: Director of Engineering. Closely involved in Spaeti planning. Co-prepared outcome roadmap.
> **Proposed addition**: Introduced new bi-weekly synchronous initiative status meetings to replace async updates — driven by information loss and misalignment in async process. Focus: are we on track, progress vs expectations, risks/blockers. Has V2 integration knowledge and can support work package documentation. Robert to check with Christina about moving bi-weekly meeting from 9:30 AM to a later time.
> **Source**: Aliaksei/Robert Biweekly Status Report, EM Sync Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — kristina-lamza.md
> **Current context**: PM for Flamingo. Previously noted as "out, expected back next week."
> **Proposed addition**: Back from leave. Actively driving support portal migration planning. Working with Steff (lead designer) on vision prototype for user portal vs support portal separation. Will clarify design resource availability with Shubham and Lena. Will document shared capabilities list for technical review. Preparing to organize joint workshop with Foxes team.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer, leaving in ~1.5–2 months. Critical knowledge holder for destinations, Trip Planner, Wetu.
> **Proposed addition**: Unavailable for V2/Wetu work until mid-May due to current commitments (through April), vacation, and infrastructure week. Currently leads infrastructure guild — transition planned for last week of April, with Jakob proposed as successor (already pairing with Gregor). Pedro lacks Gregor's deep knowledge for V2 work, making Gregor's availability a bottleneck.
> **Source**: EM Sync Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — marcus-klemann.md
> **Current context**: Developer on Flamingo. Flagged as overloaded. May be fully assigned in C2 to rewrite support portal in React.
> **Proposed addition**: Confirmed to be assigned full-time to support portal migration (Option 4A — auth section to CFA). Estimated 2-3 sprints. Completeness check coverage is at risk while Markus is on migration — flagged as open concern.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer for backend teams. Owns catalog system design and rollout plan.
> **Proposed addition**: Confirmed nearly all endpoint specifications complete for Wetu-to-catalog replacement (search, accommodation fetch, price refresh). Had more time to flesh out V2 work packages than Gregor. Advocating for two-phase Expedia launch approach (supplier first, then content by destination).
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] NEW — jakob-pupke.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Senior Engineer on the frontend teams. Proposed to take over infrastructure guild leadership from Gregor (already pairing with him). Transition planned for last week of April infrastructure guild meeting. Alternative candidates mentioned: Sasha, Stefan (data infrastructure experience).
> **Source**: EM Sync Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] NEW — steff.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Lead designer. Created vision prototype for user portal / support portal separation. Presented to leadership round while Kristina was on vacation. Kristina will check if prototype is ready for broader sharing.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] NEW — shubham.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Designer working for Foxes team. Needed for user portal migration designs but availability uncertain — also working on other scheduling tasks. Kristina discussing capacity with him and Lena today. Could review existing support portal to compare with Steff's vision.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — wetu-deprecation.md
> **Current status in KB**: 5 work packages identified. Phase 1 (C2): replace manual accommodation input. Content licensing risk flagged.
> **Proposed update**: Endpoint specifications for catalog replacement nearly complete (search, accommodation fetch, price refresh all specified). Migration steps are next priority — concrete task definition pending. Destinations more advanced than initially expected. V2 dependency discovery meeting revealed significant complexity — work packages likely to grow, not shrink. Gregor unavailable until mid-May, creating a bottleneck. Approach: create dependency graphs with Gregor validation rather than full implementation by him.
> **Source**: Content Automation Weekly Check, EM Sync Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — expedia-integration.md
> **Current status in KB**: ~2/3 certification done. Remaining: voucher/confirmation email, check-in/checkout data, legal TnCs. Target: end of April.
> **Proposed update**: TNCs updates in progress for front-end and germany.com — expected done by end of day Apr 14. Last remaining open item: properly passing test booking in staging (must trigger from trip planning, show in booking platform). Two-phase launch decided: Phase 1 = launch Expedia as supplier (active everywhere); Phase 2 = gradual content rollout by destination (like hotel rollout model), allowing feedback collection and rollback. This is aligned with Wetu replacement rollout.
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — api-outsourcing.md
> **Current status in KB**: Outsourcing 14 suppliers to 11infotech. Vendor estimates 2-4 weeks per supplier.
> **Proposed update**: Expected minimal team impact once gateway is ready — at most 1 engineer for onboarding support. Aliaksei plans to define streamlined switching process (current system → infotech) and optimize since it needs to happen 14-20 times. If launching an integration from infotech still takes more than ~1 day of engineer time, something is wrong.
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — support-portal-migration.md
> **Current status in KB**: 4-phase plan. Phase 1 (auth area, 2-3 sprints). Markus asked to add effort/risk details.
> **Proposed update**: Decision made: proceeding with Option 4A only (authorized section migration to CFA). Option 4B (full migration) rejected — would require 5-10 additional sprints. Migration candidates: finance components, trip visualization (light version), emergency contacts, invoice section (Salesforce data), admin view components. CFA integration confirmed feasible — support portal keeps URL/login, backend migrates to CFA. No UI designs exist yet for new user portal components. Joint workshop with Foxes team needed (half-day) before starting. May start date questionable. Aliaksei proposed increasing estimate to 4 sprints + product/design overhead. Overlapping capabilities identified: login, trip visualization, chatbot/AI, FAQ content. Completeness check coverage at risk during Markus's migration focus.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — cycle-2-planning.md
> **Current status in KB**: Multiple competing priorities. 2x more than can be done.
> **Proposed update**: Resource allocation rule established: minimum 2 people per topic, with 5 engineers = maximum 3 concurrent topics. Current prioritization: (1) Wetu migration — all hands, (2) API outsourcing — ongoing, minimal drain, (3) third slot contested between catalog capabilities, supply domain, destinations, smart booking. Destination launches blocked for rest of year (except Finland/Sweden already started). Formal sign-off from Karen needed for 10-month block — RAPID document to be drafted. New bi-weekly synchronous initiative status meetings introduced by Robert.
> **Source**: Content Automation Weekly Check, Aliaksei/Robert Biweekly Status Report
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] UPDATE — room-level-mapping-api.md
> **Current status in KB**: May not be feasible in current cycle. Need API that takes room DMC ID and returns equivalents.
> **Proposed update**: Confirmed: providing room level mapping properly for smart booking requires building the entire supply domain and migrating from Elephant. This is not trivial — a "quite a bunch of work." Sasha already synced with the team and prepared a technical assessment — they need one simple API, but the challenge is how to provide it given current architecture.
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] NEW — infrastructure-guild-transition.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**: Gregor currently leads the infrastructure guild but is leaving soon. Transition planned for last week of April guild meeting. Proposed successors: (1) Jakob (already pairing with Gregor, primary candidate), (2) Sasha as alternative, (3) Stefan as future addition (data infrastructure experience). Goal: free up Gregor's remaining time for V2 deprecation work.
> **Source**: EM Sync Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — destinations.md
> **Current context**: Three destination concepts documented. Connected to Wetu deprecation and catalog rollout.
> **Proposed update**: No new destination launches planned for rest of year — only Finland and Sweden (already started, areas work expected done by end of April). Formal sign-off from Karen needed for 10-month block. RAPID document to be drafted to formalize the decision. If block extends to next year, team could work on catalog/supply domain in C2/C3 instead of destination capabilities. Destinations in catalog are more advanced than initially expected.
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — catalog-supply-platform.md
> **Current context**: C2 initiatives: Expedia go-live, API outsourcing. Major blocker: Wetu dependency.
> **Proposed update**: Key architectural decision pending: invest in additional catalog capabilities vs. build supply domain (move from Elephant). Everything that is not catalog is considered legacy (ISPS, Elephant, accommodation search, essium). Supply domain needed for room level mapping (smart booking) and proper rate processing. Decision impacts C2/C3 roadmap. Tourlane preferred/top picks filter: need usage data to decide whether to keep, drop, or replace with Expedia attributes/categories.
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD3] UPDATE — booking-platform.md
> **Current context**: Multiple work streams: Completeness Check, Smart booking, Support portal migration.
> **Proposed update**: Support portal migration proceeding with Option 4A only (auth section to CFA). Shared capabilities identified between support portal and new user portal: login, trip visualization, chatbot/AI features, FAQ content management. Vision prototype created by Steff showing user portal and help center separation. CFA confirmed as feasible integration target. Completeness check at risk due to Markus reallocation.
> **Source**: Support Portal Migration sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Draft RAPID document for destination launch block
> **Description**: Pedro to Draft a RAPID decision document requesting Karen's sign-off to block new destination launches for the next 10 months. Include rationale (team capacity, Wetu migration priority), scope (new destinations only — existing corridor expansions unaffected), and fallback option (fast-track destination content from Wetu). Share with the group for feedback before submitting.
> **Due**: 2026-04-22
> **Priority**: p2
> **Source**: Content Automation Weekly Check — Claudia/Pedro confirmed need for formal sign-off.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Prepare initiative status updates for bi-weekly meeting
> **Description**: For the new bi-weekly sync with Robert, prepare status on: (1) Content automation / Wetu migration, (2) API outsourcing, (3) Expedia certification, (4) Smart booking discovery. Focus on: on-track vs delayed, remaining work, risks/blockers. Written update can follow 1-2 days after meeting.
> **Due**: 2026-04-16 (next occurrence)
> **Priority**: p2
> **Source**: Aliaksei/Robert biweekly status report meeting.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Organize joint workshop with Foxes team for support portal migration
> **Description**: Coordinate a half-day workshop with Foxes team to align on support portal migration scope. Agenda: share Steff's vision prototype, review current support portal capabilities, identify what Foxes already have in new user portal, define migration steps, create technical milestones. Include Kristina, Markus, Foxes team, and Shubham (design).
> **Due**: 2026-04-25
> **Priority**: p2
> **Source**: Support Portal Migration sync — agreed as critical next step before migration can start.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Plan completeness check coverage without Markus
> **Description**: Markus will be full-time on support portal migration. Determine who handles completeness check finalization — can Minh cover it, or does it need to be paused? Discuss with Kristina and team during cycle 2 planning.
> **Due**: 2026-04-22
> **Priority**: p2
> **Source**: Support Portal Migration sync — flagged as open concern by Kristina.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Gather Tourlane preferred filter usage data
> **Description**: Check with the team whether we can count how many search requests include the Tourlane preferred/top picks filter. This data supports the decision on whether to keep, drop, or replace the filter with Expedia attributes. Pedro mentioned tracking this in request logs.
> **Due**: 2026-04-22
> **Priority**: p3
> **Source**: Content Automation Weekly Check — open decision on filter future.
> **Action**: [ ] Accept  [x] Decline  [ ] Rephrase

#### [T6] Ensure Expedia test booking passes in staging
> **Description**: Last open item for Expedia certification: properly pass a test booking in staging. Must trigger booking from trip planning and show it in booking platform. Coordinate with team (flagged in small channel). This is the final gate before certification.
> **Due**: 2026-04-18
> **Priority**: p1
> **Source**: Content Automation Weekly Check — only remaining certification blocker after TNCs.
> **Action**: [ ] Accept  [x] Decline  [ ] Rephrase

---

## Summary

Yesterday was a dense meeting day covering five key discussions. The biggest decisions: support portal migration will proceed with Option 4A only (auth section to CFA, ~4 sprints with Markus full-time), and destination launches are effectively blocked for the rest of the year pending formal sign-off from Karen via a RAPID document. Expedia certification is down to its last blocker — the staging test booking — after rapid TnC progress. The V2/Wetu deprecation work revealed more complexity than expected, compounded by Gregor's unavailability until mid-May. Resource constraints remain the dominant theme: with 5 engineers and a minimum-2-per-topic rule, the team can sustain at most 3 concurrent initiatives, forcing hard prioritization choices for cycle 2.
