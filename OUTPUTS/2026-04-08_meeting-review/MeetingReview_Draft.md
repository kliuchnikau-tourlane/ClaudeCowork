# Meeting Notes Review — 2026-04-08

## Meetings Analyzed
- Weekly: Aliaksei / Claudia (11:30–12:00, 2 participants)
- Kick-off: Destinations onboarding (14:30–15:30, 5 participants)
- 1:1 — Minh / Aliaksei (15:45–16:30, 2 participants)
- 1:1 — Sascha / Aliaksei (~16:45–17:30, 2 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — claudia-tita.md
> **Current context**: PM on Spaeti. Only had "present at outcome roadmap review" as update.
> **Proposed addition**:
> - **2026-04-08** — Driving Expedia certification to completion: test booking items passed and marked done by Expedia. Remaining open items: voucher/confirmation email (biggest risk — no feedback from Expedia yet), check-in/checkout pay-at-property data (Kiryl verifying), legal TnCs (following up since March 25 with no response — escalating to Veronica). Hotel images now rated positively after Kiryl's filtering; descriptions are auto-generated/robotic but not a certification blocker. 
> - On 11 Infotech: redirected Discova questions directly to 11 Infotech, planning first integrations with Agent Trails and Thompson, Tour Plan must do their own integration (high volume). Creating API outsourcing backlog/timeline list with DMCs ordered by margin/gross bookings. 
> - Flagged team morale concern: Spaeti members (especially external contractors) worried API outsourcing means "outsourcing their jobs" — surfaced during standup when 11 Infotech work was added mid-sprint. Suggested delaying TP2 area work until 11 Infotech is live. Proposed talking to Talha about pairing for adapter work — candidates Leon or Minh. (Source: Weekly Aliaksei / Claudia)
> **Source**: Weekly: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — kiryl-karetnikau.md
> **Current context**: Tech Lead on Spaeti. Noted as off/on leave, needs to be included in planning.
> **Proposed addition**:
> - **2026-04-08** — Checking Expedia check-in/checkout structure: verifying whether pay-at-property check-in data is already in catalog or needs to be added to trip planner. Previously filtered Expedia images — quality now rated positively by stakeholders. Confirmed ancestry tree is NOT currently used for accommodation search. 
> - Attended Destinations onboarding kick-off — asked about feasibility of mapping Wetu areas to Expedia areas and what happens if mapping isn't possible. (Source: Weekly Aliaksei / Claudia; Kick-off: Destinations onboarding)
> **Source**: Weekly: Aliaksei / Claudia; Kick-off: Destinations onboarding
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer, owns catalog system design. Was asked to write ADR on Wetu deprecation options.
> **Proposed addition**:
> - **2026-04-08** — Driven Destinations onboarding kick-off. Led the detailed technical discussion: explained two content sourcing options (branding team collaboration vs. augmenting Item Curator), the mapping challenge between Wetu and Expedia areas, and the distinction between geo data and content data. 
> - Confirmed accommodation decoupling from Wetu is more urgent than destinations decoupling. 
> - **2026-04-08** — Led the Destinations onboarding kick-off. Presented Destinations Concepts document and effort estimation doc. Explained two use cases for touristic areas: (1) aggregating accommodations/activities for search and route builder, (2) visualization content (images, descriptions, tips) for Trip Planner/TripVis. Identified Expedia Geography API as best geo data source (ancestor tree, bounding boxes, translated names — but zero content). Outlined content options: collaborate with branding team or augment Item Curator. Flagged biggest challenge: mapping existing Wetu area content to new Expedia areas. Proposed exploration tasks: understand current data model, explore area shapes, understand accommodation-to-area mapping. In office until Wednesday of team event week (April 20). (Source: Kick-off: Destinations onboarding)
> - Noted only Finland and Sweden are planned as new destinations this year. (Source: Kick-off: Destinations onboarding)
> **Source**: Kick-off: Destinations onboarding
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — marcus-klemann.md
> **Current context**: Flamingo developer (Lambus contractor). Flagged as overloaded (16h days, ~16 PRs/day).
> **Proposed addition**:
> - **2026-04-08** — Wrote a detailed Completeness Check document. Minh is reviewing it and will validate understanding with Marcus before presenting to the Flamingo team. Was one of only two devs active during a short week. 
> - In C2 May need be fully assigned to rewrite the support portal in React as part of user portal migration to Foxes team. (Source: 1:1 — Minh / Aliaksei; 1:1 — Sascha / Aliaksei)
> **Source**: 1:1 — Minh / Aliaksei; 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer, leaving in 1.5–2 months. Knowledge holder for TP, destinations, Wetu.
> **Proposed addition**:
> - **2026-04-08** — For infra specifically, knowledge transfer is in good shape — Gregor was more reviewing than contributing in recent infra weeks, and documentation is solid. Worked with Jacob last week on infra PRs. (Source: 1:1 — Sascha / Aliaksei)
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] NEW — wieland-pfesdorf.md
> **Current context**: NEW — not yet in KB (was mentioned as "Villains" in April 7 notes re: destinations onboarding)
> **Proposed addition**:
> ```
> # Wieland Pfesdorf
> Type: person
> Role: Engineer on Spaeti (Supply Platform)
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Assigned to own and drive the destinations topic alongside Pedro, replacing Gregor long-term.
> Participates in the Infra guild.
>
> ## Updates
> - **2026-04-08** — Participated in the Destinations onboarding kick-off. Flagged biggest challenge: mapping existing Wetu area content to new Expedia areas. Proposed exploration tasks: understand current data model, explore area shapes, understand accommodation-to-area mapping. In office until Wednesday of team event week (April 20). (Source: Kick-off: Destinations onboarding)
> ```
> **Source**: Kick-off: Destinations onboarding
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] NEW — minh-nguyen.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Minh Nguyen
> Type: person
> Role: Software engineer on Flamingo (Booking Platform)
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Reports to Aliaksei. On the Flamingo team.
>
> ## Updates
> - **2026-04-08** — Implemented the Expedia request (back-and-forth with sales and Spaeti teams); feature done and rolled out. Now reviewing Marcus's Completeness Check document — will schedule a Flamingo team presentation next week in condensed slideshow format, then validate understanding with Marcus. Development plan: rewrote section 2 (self-assessment) and cleaned up section 4. Development goal: become go-to person on Completeness Check. Interested in integration testing but blocked by other priorities — could use Curiosity Fridays. Actively experimenting with Claude Code workflows. Aliaksei advised adding coding agent proficiency and core engineering skills (architecture, design patterns, system design) as development goals. Has a twisted ankle; MRI scan on April 9, won't be in office. (Source: 1:1 — Minh / Aliaksei)
> ```
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] NEW — sascha-burku.md
> **Current context**: NEW — not yet in KB (mentioned only as "Sascha" in April 7 outcome roadmap context)
> **Proposed addition**:
> ```
> # Sascha Burku
> Type: person
> Role: Tech Lead on Flamingo (Booking Platform)
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Reports to Aliaksei. Leading smart booking investigation.
>
> ## Updates
> - **2026-04-08** — Leading smart booking investigation: created detailed document with data flow diagrams and decision steps. Key finding: room-level DMC mapping is the critical dependency — needs Spaeti to expose an API from their Giata/Geonics mapping data. Two options: (1) Spaeti exposes room mapping API from existing persistence layer (preferred), (2) Flamingo calls Geonics directly (rejected — wrong domain, would duplicate inventory). Found a second mapping service in Bruno (auto-migrated from Postman — likely dead code). Discovered "mapping service" recently updated — will investigate. Aliaksei will ask Kiryl to coordinate Spaeti side. Sascha to post API requirement in Slack and tag Aliaksei. Also discussed Documents Dashboard tech debt: MongoDB auto-scaling to tier 10 on mongodb.com (cost + stability concerns) — wants to migrate to Postgres; also wants to remove Vue.js. Prefers to wait for new infra pilot project before tackling. Will review DD tech debt Confluence page on Friday. Away for infra week next week. Vacation: two days around July 3 (birthday conflicts with Tourlane summer event — missed last year too), two weeks end of August/September. No May/June vacation. (Source: 1:1 — Sascha / Aliaksei)
> ```
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] NEW — kristina-lamza.md
> **Current context**: NEW — not yet in KB (note: different person from Christine Berg who is Head of Product)
> **Proposed addition**:
> ```
> # Kristina Lamza
> Type: person
> Role: Product Manager for Flamingo (Booking Platform)
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Works with Aliaksei on Flamingo cycle planning and prioritization.
>
> ## Updates
> - **2026-04-08** — Currently out, expected back next week. Will be more active on cycle planning. Sascha tagged her on smart booking: open question whether milestone 1 should be accommodation-level or room-level matching. Previously owned the support portal — now being absorbed into Foxes team's user portal. Also asked Claudia to create an outcome map with dates for each initiative. (Source: 1:1 — Sascha / Aliaksei; Weekly Aliaksei / Claudia)
> ```
> **Source**: 1:1 — Sascha / Aliaksei; Weekly Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P10] NEW — talha-mahmood.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**:
> ```
> # Talha Mahmood
> Type: person
> Role: Engineer on Spaeti (Supply Platform)
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Working on API adapter implementations for 11infotech outsourced suppliers integrations.
>
> ## Updates
> - **2026-04-08** — Assigned to 11 Infotech adapter work after Expedia certification tasks. Previously gave feedback that pair programming on adapters works better (smoother, fewer issues). Claudia suggested Aliaksei talk to Talha about pairing — candidates are Leon or Minh. (Source: Weekly Aliaksei / Claudia)
> ```
> **Source**: Weekly: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — expedia-integration.md
> **Current status in KB**: All work done on Tourlane side, waiting for Expedia feedback. ~€500K margin impact.
> **Proposed update**:
> - **2026-04-08** — Roughly two-thirds of certification requirements done. Test booking items passed and marked done. Remaining open items: (1) voucher/confirmation email — biggest risk, no Expedia feedback yet, but may not require full implementation to pass (can send template); (2) check-in/checkout pay-at-property data — Kiryl verifying if already in catalog; (3) legal TnCs — Claudia escalating to Veronica after no response from legal since March 25. Hotel descriptions are robotic/auto-generated (not a certification blocker — can fix later, possibly with AI); images now good quality after Kiryl's filtering. Target: end of April from Tourlane's side, but depends on Expedia's responsiveness. Started in December 2025, still not fully done due to competing priorities — Minh implemented the latest Expedia request last week (done, rolled out). (Source: Weekly Aliaksei / Claudia; 1:1 — Minh / Aliaksei)
> **Source**: Weekly: Aliaksei / Claudia; 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — api-outsourcing.md
> **Current status in KB**: Partner signed. 14 pending suppliers. ~€1.3–1.5M CM1 leakage. Technical integration starts in C2.
> **Proposed update**:
> - **2026-04-08** — 11 Infotech sent everything needed to start; adapter work can begin immediately. Talha assigned after Expedia certification. Generic adapter estimated at ~3 weeks. First integrations: Agent Trails and Thompson. Tour Plan must do their own integration (high volume). DMCs ordered by margin/gross bookings. Discova questions redirected to 11 Infotech directly (no longer Spaeti's problem). Claudia creating backlog/timeline list with API credentials and integration dates — first version expected today. Team morale concern: members worried API outsourcing means "outsourcing their jobs," especially external contractors — surfaced during standup. Sprint may need to be recreated to accommodate urgency. Consider pairing Talha with Leon or Minh for speed. All DMCs in backlog are for existing destinations (no new destination launches needed). Claudia suggested delaying TP2 area work until 11 Infotech is live. (Source: Weekly Aliaksei / Claudia)
> - **2026-04-08** - Pedro wasn't happy about what they sent and wants to request changes (source: discussion with Claudia)
> **Source**: Weekly: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — wetu-deprecation.md
> **Current status in KB**: 5 work packages identified. Kickoff planned for Monday. Pedro to document plan.
> **Proposed update**:
> - **2026-04-08** — Destinations onboarding kick-off held (separate from accommodations track). Wieland presented the destinations/areas scope. Two use cases: 
>   (1) aggregating accommodations by area for search/route builder, 
> - (2) visualization content for Trip Planner/TripVis. Expedia Geography API is best candidate for geo data (bounding boxes, ancestor tree) but has zero content. 
> - Content options: collaborate with branding team or augment Item Curator. 
> - Biggest challenge: mapping existing Wetu area content to new Expedia areas. All areas must have polygons going forward. Confirmed: accommodation decoupling from Wetu is MORE urgent than destination decoupling — can survive without new destinations temporarily. 
> - Only Finland and Sweden planned as new destinations this year. Investigation phase: late April (after infra week). 
> - Team event week of April 20 good for co-located swarming. 
> - Need capacity estimates by end of April for cycle planning. (Source: Kick-off: Destinations onboarding)
> **Source**: Kick-off: Destinations onboarding
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — room-level-mapping-api.md
> **Current status in KB**: May not be feasible in current cycle. Crucial for smart book.
> **Proposed update**:
> - **2026-04-08** — Sascha's smart booking investigation confirmed: room-level DMC mapping is THE critical dependency. Spaeti uses Giata/Geonics mapping internally — data is persisted somewhere in the supply domain. Need: an API that takes a room DMC ID and returns equivalent room IDs from other DMCs. Preferred approach: Spaeti exposes API from existing persistence layer (not direct Geonics calls). Rejected approach: Flamingo calling Geonics directly (wrong domain, would duplicate inventory). Sascha found a "mapping service" recently updated — will investigate. Also found a second mapping endpoint in Bruno (likely dead code auto-migrated from Postman). 
> - Open question for Kristina: should milestone 1 be accommodation-level or room-level matching? 
> - Aliaksei to ask Kiryl to coordinate Spaeti side. (Source: 1:1 — Sascha / Aliaksei)
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — cycle-2-planning.md
> **Current status in KB**: 2x oversubscribed. Multiple competing priorities. Need 2–3 weeks to define work packages.
> **Proposed update**:
> - **2026-04-08** — Confirmed across all meetings: every team has at least 2x more ideas than capacity. Key competing priorities for Spaeti/Flamingo: Expedia certification, 11 Infotech API outsourcing, Destinations decoupling, Wetu accommodations decommissioning, catalog work, smart booking, completeness check, support portal migration. 
> - Kristina (Flamingo PM) back next week to drive planning. 
> - Christine asked Claudia for outcome map with dates. 
> - Infra week next week consumes capacity. Need to prioritize aggressively and document trade-offs explicitly. 
> - Sascha: if smart booking and TP2 are priorities, no room for Documents Dashboard tech debt. (Source: Weekly Aliaksei / Claudia; 1:1 — Sascha / Aliaksei; 1:1 — Minh / Aliaksei)
> **Source**: All four meetings
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] NEW — completeness-check.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**:
> ```
> # Completeness Check
> Type: project
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> System changes for booking completeness validation. Flamingo team initiative.
>
> ## Updates
> - **2026-04-08** — Marcus wrote a detailed document. Minh is reviewing it and will schedule a Flamingo team presentation next week in slideshow format to make it easier to consume. Will validate understanding with Marcus first. This is Minh's development goal focus area (becoming go-to person on the topic). Important to clarify scope before next cycle planning. (Source: 1:1 — Minh / Aliaksei)
> ```
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] NEW — support-portal-migration.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**:
> ```
> # Support Portal Migration
> Type: project
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Migrating support portal functionality into the user portal owned by the Foxes team. Current support portal uses Vue.js frontend, Ruby/Rails backend, MongoDB, and a non-standard CMS.
>
> ## Updates
> - **2026-04-08** — Foxes team ("In Focus") is building a user portal that overlaps ~80% with the existing support portal (e.g., list of trips). Plan: merge and migrate support portal features into user portal (different tech stack — React). Marcus may be assigned to the rewrite. Support portal should become stripped down: cases + FAQ only. Self-service capabilities (reducing ticket creation) move to Foxes-owned user portal. Christina previously owned the support portal. (Source: 1:1 — Sascha / Aliaksei)
> ```
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR8] NEW — documents-dashboard-tech-debt.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**:
> ```
> # Documents Dashboard Tech Debt
> Type: project
> First seen: 2026-04-08
> Last updated: 2026-04-08
>
> ## Context
> Technical debt reduction for the Documents Dashboard system. Ideas proposed by Sascha.
>
> ## Updates
> - **2026-04-08** — Key proposals: (1) migrate MongoDB to Postgres — MongoDB on mongodb.com is auto-scaling to tier 10 with cost and stability concerns; Postgres has been rock-solid by comparison. (2) Remove Vue.js dependency. Sascha prefers to wait for new infra pilot project — then migration to RDS via Terraform would be straightforward. No business case for immediate action; these are maintainability/stability improvements. Tech debt Confluence page already exists. Sascha will review it Friday. Infra weeks consuming most tech debt budget currently. Not realistic if smart booking and TP2 are C2 priorities. (Source: 1:1 — Sascha / Aliaksei)
> ```
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — catalog-supply-platform.md
> **Current status in KB**: C2 initiatives listed. Wetu dependency is critical blocker.
> **Proposed update**:
> - **2026-04-08** — Active workstreams update: Expedia certification near completion (waiting on Expedia), 11 Infotech API outsourcing now actionable (adapter work starting), Destinations decoupling kick-off held (investigation phase in late April). Team morale concern: members worried API outsourcing to 11 Infotech means "outsourcing their jobs" — need to reassure with visibility into remaining backlog (flights, activities, cancellation APIs, modifications, rebookings). Infra week next week. Sprint may need to be recreated for 11 Infotech urgency. (Source: Weekly Aliaksei / Claudia; Kick-off: Destinations onboarding)
> **Source**: Weekly: Aliaksei / Claudia; Kick-off: Destinations onboarding
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — booking-platform.md
> **Current status in KB**: Multiple independent workstreams. Marcus overloaded.
> **Proposed update**:
> - **2026-04-08** — Completeness Check: Marcus wrote detailed doc, Minh preparing team presentation for next week. Smart booking: Sascha leading investigation, created data flow and decision docs; critical dependency on Spaeti room mapping API. Support portal migration to Foxes team likely — Marcus may be assigned to React rewrite. Documents Dashboard tech debt (MongoDB→Postgres, drop Vue.js) on hold pending infra pilot. Voucher generation may be needed for Expedia certification but not a big deal for Flamingo. Next cycle: 2 months, Christina back next week to drive planning. (Source: 1:1 — Minh / Aliaksei; 1:1 — Sascha / Aliaksei; Weekly Aliaksei / Claudia)
> **Source**: All four meetings
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Talk to Talha about pairing on 11 Infotech adapter
> **Description**: Discuss with Talha whether pairing with Leon or Minh would speed up the 11 Infotech adapter implementation. He previously said pair programming on adapters works better.
> **Due**: 2026-04-09
> **Priority**: p2
> **Source**: Weekly Aliaksei / Claudia — Claudia suggested checking with Talha and possibly assigning a pair.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Address Spaeti team concerns about API outsourcing
> **Description**: Talk to the Spaeti team (especially external contractors) about 11 Infotech API outsourcing. Reassure that there's plenty of other work (flights, activities, cancellation APIs, modifications, smart booking, rebookings) and this isn't about replacing them.
> **Due**: 2026-04-11
> **Priority**: p2
> **Source**: Weekly Aliaksei / Claudia — Claudia flagged pushback and concerns during standup.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Ask Kiryl to coordinate on smart booking room mapping API
> **Description**: Sascha needs Spaeti to expose an API for room-level DMC mapping (Giata/Geonics data). Ask Kiryl to investigate what exists, what needs to be built, and how to expose it. Sascha will post the requirement in Slack — watch for his tag.
> **Due**: 2026-04-11
> **Priority**: p2
> **Source**: 1:1 — Sascha / Aliaksei — "I will probably ask Kirill to coordinate and explain."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Review Claudia's 11 Infotech API outsourcing backlog/timeline
> **Description**: Claudia is sharing the first version of the API outsourcing backlog with DMC timeline and API credentials info. Review it and discuss next steps, including DMC ordering and integration dates.
> **Due**: 2026-04-09
> **Priority**: p2
> **Source**: Weekly Aliaksei / Claudia — "I will work on the backlog and share it with them today."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Plan Destinations discovery work for team event week
> **Description**: Coordinate with Wieland, Pedro, Kiryl, and Claudia to swarm on Destinations topic during office week (April 20). Wieland in office until Wednesday only. Goal: produce capacity estimates for cycle planning by end of April.
> **Due**: 2026-04-18
> **Priority**: p2
> **Source**: Kick-off: Destinations onboarding — agreed to use team event week for co-located discovery.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Review Minh's updated development plan
> **Description**: Minh rewrote section 2 (self-assessment) and cleaned up section 4. Review and ensure goals include: completeness check expertise, coding agent proficiency, and core engineering skills (architecture, design patterns, system design).
> **Due**: 2026-04-15
> **Priority**: p3
> **Source**: 1:1 — Minh / Aliaksei — sections updated today.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Decide on sprint adjustment for 11 Infotech urgency
> **Description**: Current sprint was planned before 11 Infotech was ready. May need to adjust sprint to reprioritize — possibly pull some catalog work. Discuss with Claudia and team.
> **Due**: 2026-04-10
> **Priority**: p3
> **Source**: Weekly Aliaksei / Claudia — "Maybe next sprint we can adjust it to be fast."
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Watch Town Hall recording — new vacation policy
> **Description**: Tourlane announced +1 vacation day per year of tenure (up to 30 days, starting 2026). Aliaksei hasn't seen this info yet.
> **Due**: 2026-04-11
> **Priority**: p4
> **Source**: 1:1 — Sascha / Aliaksei — Sascha mentioned it from the Town Hall.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Talk to Kristina about Markus and Support Portal rewrite plans for c2
> **Description**: We need to clarify, what to plan for c2 for Markus - likely just a migration of the support portal parts to the user portal
> **Due**: 2026-04-14
> **Priority**: p2
> **Source**: 1:1 — Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Dense day with four meetings covering both teams' full breadth. The most urgent signal: 11 Infotech API outsourcing just became actionable and needs to move fast, but the Spaeti team has morale concerns about it — this is a people-leadership item for this week. Expedia certification is close (target end of April) but depends on Expedia's responsiveness; the voucher/confirmation email is the biggest remaining risk. The Destinations onboarding kick-off with Wieland revealed a complex initiative — investigation starts late April after infra week, with the team event week as the target for co-located discovery. On Flamingo, smart booking investigation surfaced a critical cross-team dependency: Spaeti's room-level mapping API. Gregor's departure was announced at the all-hands; infra knowledge is well-covered, but other areas still need transfer planning. Everything confirms the C2 planning picture: 2x+ more work than capacity, aggressive prioritization needed.
