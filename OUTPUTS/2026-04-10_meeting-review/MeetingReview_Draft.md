# Meeting Notes Review — 2026-04-10 (analyzing meetings from 2026-04-10)

## Meetings Analyzed
- [Align] Next steps touristic area domain (14:30–14:55, 6 participants)
- Benefits 2026: Briefing for Leaders + Q&A (12:00–12:45, ~60 participants)
- Support Portal Migration — Technical Deep Dive (11:00–12:00, 2 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — christine-berg.md
> **Current context**: Head of Product. Reviewed Spaeti outcome roadmap; pushed for net profit figures.
> **Proposed addition**: **2026-04-10** — Led formal alignment meeting on touristic area domain ownership transfer to Spaeti. Framed this as start of discovery phase — wants a formal sign-off on the problem definition before moving to solutions. Asked teams to follow discovery principles. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — robert-wolf.md
> **Current context**: Director of Engineering. Closely involved in Spaeti planning and cross-team coordination.
> **Proposed addition**: **2026-04-10** — Provided detailed historical context on three types of destinations at Tourlane: (1) aspirational/inspirational (customer-facing, conversion drivers), (2) administrative (corridors, reporting, visa), (3) search concept (newly introduced by TP2 for area-based accommodation/transport matching). Identified the TP2 search use case as an unexpected third category that makes losing touristic areas more impactful than initially thought — it's not just a conversion problem but also a search problem. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer. Owns catalog system design; key for Wetu deprecation.
> **Proposed addition**: **2026-04-10** — At alignment meeting, clarified that the quickest path for touristic areas is maintaining existing feature set. Emphasized that if Spaeti doesn't solve the Wetu dependency, TP2 will build it in — making it a permanent dependency. Confirmed accommodation search API foundation is reusable for both manual items replacement and future search capability. Highlighted that room-level mapping is secondary priority since an external service exists as fallback. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — claudia-tita.md
> **Current context**: Product Manager on Spaeti. Driving Expedia certification.
> **Proposed addition**: **2026-04-10** — At alignment meeting, framed urgency of touristic area work as building a strong foundation for TP2 and removing tech debt — not just enabling Expedia expansion. Argued this is even more important than full Expedia enablement right now: without solving this, the new trip planner inherits the Wetu dependency. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — wieland-pfesdorf.md
> **Current context**: Engineer on Spaeti. Assigned to own destinations topic alongside Pedro.
> **Proposed addition**: **2026-04-10** — Attended formal alignment meeting on touristic area domain. Will be on infra week next week. Alignment on problem definition expected during cycle planning at end of month. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — marcus-klemann.md
> **Current context**: Developer on Flamingo (Lambus contractor). Flagged as overloaded; wrote Completeness Check document.
> **Proposed addition**: **2026-04-10** — Gave Aliaksei a deep-dive technical walkthrough of the support portal. Wrote a detailed migration roadmap document on Confluence (Support Portal to CFA Migration Roadmap). Trip visualization feature just went live last week for both customer and internal agent views. Building a new analytics/tracking view for support requests to replace Google Sheet — launching next week. Support portal tech stack: NextJS monorepo, Strapi CMS (headless), Supabase (managed Postgres), Vercel hosting. Has 14,000+ customer support requests processed; AI-powered FAQ with vector search achieving ~8–9% deflection rate. Proposed 4-phase migration: Phase 1 (auth area, 2–3 sprints, medium-low risk), Phase 2 (forms + AI chat, high effort/risk), Phase 3 (admin area), Phase 4 (CMS). Asked to add effort estimates and risk details per phase to the document. (Source: Support Portal Migration — Technical Deep Dive)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — wetu-deprecation.md
> **Current status in KB**: 5 TP work packages identified; kickoff Monday; accommodation decoupling more urgent than destinations; interim solution for areas discussed.
> **Proposed update**: **2026-04-10** — Formal alignment meeting held with Christine, Robert, Claudia, Pedro, Wieland, Aliaksei. Robert identified three types of destinations: aspirational, administrative, and search (newly introduced by TP2). The search use case adds significant complexity — TP2 uses touristic areas for accommodation recommendations and transport routing, meaning losing areas isn't just a conversion problem but also impacts core search functionality. Discovery is still in "problem phase" per Christine — next check-in for problem sign-off to happen during cycle planning at end of month. Wieland on infra week next week. Priorities: inspirational touristic areas replacement is top priority; search concept is secondary ("that train has left" but lower priority). Room-level mapping is deprioritized since external service exists as fallback. Pedro confirmed: if destinations work doesn't make it into next cycle, they'll be blocked from launching new destinations. (Source: Align Next steps touristic area domain)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — support-portal-migration.md
> **Current status in KB**: Foxes team building user portal overlaps ~80% with existing support portal; plan to merge; Marcus may be assigned rewrite.
> **Proposed update**: **2026-04-10** — Aliaksei held technical deep-dive with Markus. Markus wrote migration roadmap on Confluence (Support Portal to CFA Migration Roadmap). 4-phase plan: Phase 1 = authenticated customer area to CFA/user portal (2–3 focused sprints, medium-low risk, components are reusable); Phase 2 = general form + modification chat + AI logic (high effort/risk — vector store and AI tightly coupled to NextUI, requires full rewrite); Phase 3 = admin area for support agents; Phase 4 = CMS migration (Strapi to potentially Contentful, which Tourlane prefers for frontend teams). Tech stack: NextJS monorepo, Strapi CMS on Supabase (managed Postgres), hosted on Vercel. Trip visualization component just released — shared between guest and admin views. 14K+ support requests processed, ~8–9% AI deflection rate. Markus asked to add effort/risk details per phase. (Source: Support Portal Migration — Technical Deep Dive)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] NEW — destinations.md
> **Proposed update**: Create new product file. Destinations is a new product area owned by the Spaeti team (Wieland Pfesdorf is the owner). It encompasses three distinct destination concepts at Tourlane: (1) aspirational/inspirational — customer-facing images and descriptions on tripvis/offers that drive conversion, (2) administrative — corridors, reporting, visa requirements, bound to countries/states, (3) search — area-based accommodation and transport matching used by TP2 (recently introduced, builds on touristic area geo shapes). Connected projects: Wetu deprecation (replacing touristic area data source), catalog system rollout (exposing area data via catalog), TP2 (dependent on area data for recommendations). Key challenge: migrating from Wetu geo shapes to Expedia geography data (which lacks content and is dropping geo shape support). Discovery phase in progress — problem definition sign-off expected during cycle planning end of April. (Source: Align Next steps touristic area domain + Wetu for accommodations 2026-04-09)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Review Markus's support portal migration roadmap on Confluence
> **Description**: Markus wrote a detailed migration roadmap document. Review it to prepare for cycle 2 planning — need to decide which phases to include and whether to allocate Markus full-time to migration.
> **Due**: 2026-04-17
> **Priority**: p2
> **Source**: Support Portal Migration — Technical Deep Dive. Link: https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4651155469/Support+Portal+to+CFA+Migration+Roadmap
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Follow up with Markus on effort/risk details per migration phase
> **Description**: Asked Markus during the meeting to add effort estimates (sprint counts) and risk descriptions per phase to his Confluence document. Follow up to make sure it's done before cycle planning.
> **Due**: 2026-04-15
> **Priority**: p2
> **Source**: Support Portal Migration — Technical Deep Dive.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Review learning budget approval policy on Confluence
> **Description**: New learning budget process announced for leaders. Employee-driven requests, manager is quality gate. 8 approval criteria. Development plan required before any request. Form on Confluence. Be ready if team members submit requests.
> **Due**: no due date
> **Priority**: p3
> **Source**: Benefits 2026: Briefing for Leaders + Q&A.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Three meetings today covered distinct but interconnected topics. The touristic area alignment with Christine, Robert, and the Spaeti team formalized the discovery phase for destinations — Robert's breakdown into three destination types (aspirational, administrative, search) was the key insight, revealing that TP2's use of touristic areas as a search concept makes the problem significantly harder than just replacing inspirational content. The support portal deep-dive with Markus gave a thorough technical picture: a 4-phase migration plan with Phase 1 being feasible for cycle 2 but Phase 2 carrying high risk due to tightly coupled AI/vector search logic. The benefits briefing was informational — travel benefits discontinued due to tax law, new learning budget process requires manager approval with a development plan.
