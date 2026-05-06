# Meeting Notes Review — 2026-05-06 (analyzing meetings from 2026-05-05)

## Meetings Analyzed
- Architecture Board Meeting (10:00–10:50, 6 participants)
- 11infotech – Tourlane (11:00–12:00, 9 participants)
- Catch up on Wetu deprecation next steps (12:00–12:15, 3 participants)
- 1:1 — Oleksii / Aliaksei (13:45–14:30, 2 participants)
- Content Automation Milestone: Weekly Check (14:30–15:00, 4 participants)
- Cycle 2 Roadmap: Part II (15:00–16:00, 6 participants)
- EM — Delivery Management (16:00–16:55, 4 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — anish.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Backend engineer on the Trip Planner team. Just back from parental leave. Joining the Wetu deprecation effort from the Trip Planner side together with Alinys. Still in onboarding — needs walkthrough of the Wetu deprecation plan and Trip Planner code/docs. Gregor scheduling kickoff with him for tomorrow morning at 10:00.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — alinys.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Frontend engineer on the Trip Planner team. Joining Wetu deprecation from the Trip Planner side alongside Anish. Started reviewing Confluence documents (including Aliaksei's) yesterday. Still onboarding — needs structured walkthrough this week to be productive next week while Gregor is out.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — lukasz.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Mid-level engineer on the Trip Planner team, working on Route Builder V0. Robert proposed giving him the engineering mandate to design a sensible slicing strategy for the Route Builder problem (with Aliaksei/Sylvia/Gregor as mentors). Goal: foster ownership and produce a realistic delivery roadmap. Current team approach is too iterative ("find a problem, solve it, move on") — Lukasz expected to bring a structured slicing proposal.
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — laura.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Wrote a detailed proposal document on incident process improvements after the Sev 1 incident. Document is from a business perspective — Robert sees it as a good starting point but flagged it as "not always compatible with engineering reality." Tourlane has not yet allocated capacity to act on it; Robert to give her feedback that it's deferred (likely C3).
> **Source**: Architecture Board Meeting.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — charlie-11infotech.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Lead from 11infotech (vendor) on the API outsourcing project. In the May 5 working session he was visibly upset/emotional at the start over scope confusion (multi-room search, multi-supplier vs. multi-destination). After alignment, the team confirmed a "best-effort" gateway: vendor passes through whatever suppliers offer, no decision-making in the gateway, no extra capabilities built on suppliers' behalf. Charlie's team is delivering very fast (35-page spec already updated, parallel implementation work) — Aliaksei flagged this speed as a possible quality risk.
> **Source**: 11infotech – Tourlane.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — karan-malhotra.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Tourlane stakeholder (likely supply/commercial side) involved in the 11infotech meetings. Cares about the timeline for first DMC go-live (Asian Trails in May) for downstream communication. Pushed Charlie to explain whether new requirements would change cost or scope.
> **Source**: 11infotech – Tourlane.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — marcus-klemann.md
> **Current context**: Lambus contractor, Flamingo developer, working on Completeness Check, full-time on Support Portal migration (Option 4A). Already known as overloaded.
> **Proposed addition**: 2026-05-05 — Out sick, possibly severely (described his condition as bad enough that Aliaksei thinks it could be ~2 weeks). Completeness Check V1 (deterministic approach he proposed) was supposed to be delivered earlier — now slipping to end of month at best. Oleksii has independently advanced V2 with a UUID-from-Items-Curator approach that may make Marcus's heavier "AI judge" design unnecessary for ETI.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — kristina-lamza.md
> **Current context**: PM for Flamingo. Recently back from leave, driving support portal migration planning.
> **Proposed addition**: 2026-05-05 — Out sick (uncertain when she returns). Aliaksei and Oleksii agreed to push forward on completeness-check decisions without her, but want her sign-off when she's back. Engineers (esp. Oleksii) flagged that initiative descriptions she writes are too vague — proposing a 1–2 page product one-pager template per initiative as a hard requirement before next cycle planning.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer (frontend), leaving in 1.5–2 months. Critical Wetu/Trip Planner knowledge holder.
> **Proposed addition**: 2026-05-05 — Confirmed last active day = June 17 (with all remaining vacation taken at end of tenure); team should plan as if he's unavailable from June 1 (risk-managed buffer). Out three days next week (kindergarten closed, taking the little one). Will run the Wetu deprecation kickoff with Anish/Alinys tomorrow at 10:00 in Sylvia's absence; Aliaksei may join. Confirmed he'll be advisory-only on Wetu delivery (mentor/reviewer), not committing to delivery work himself.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps; EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P10] UPDATE — silvia-torre.md
> **Current context**: EM for frontend teams. Note: KB currently has wrong email (veronica.garcia@) — not corrected here, just flagged.
> **Proposed addition**: 2026-05-05 — Still out sick; team should not assume she returns mid-week. Aliaksei stepping in for her on Wetu deprecation coordination and Route Builder V0 slicing. Robert asked who has Route Builder V0 ownership: Aliaksei answered "me, Pedro and Sylvia, but with Sylvia out it's me." Robert pushed for a single spokesperson — Aliaksei confirmed.
> **Source**: Catch up on Wetu deprecation next steps; EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P11] UPDATE — robert-wolf.md
> **Current context**: Director of Engineering, Aliaksei's manager.
> **Proposed addition**: 2026-05-05 — In the EM Delivery review, flagged Route Builder V0 as a "major fuck up" risk: scope shifted from "copy a valid offer" to "compose a completely new offer," which makes V0 simultaneously huge in complexity and low in confidence about impact. Pushed for slicing strategy ownership to be given to Lukasz (with mentorship). Consistent message across multiple initiatives: solution design happening within the cycle prevents him from giving a credible delivery roadmap.
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P12] UPDATE — pedro-alves.md
> **Current context**: Staff engineer, owns catalog and Wetu deprecation tech plan.
> **Proposed addition**: 2026-05-05 — Confirmed Wetu rollout is split into 3 phases (A: launch Expedia; B: Spaeti builds capabilities to replace Wetu; C: Trip Planner removes Wetu integration). Said the boundary between B and C is "blurry" and needs alignment with Trip Planner team — they need to be consultants in B, drivers in C. Raised the concern that the team is "spreading too thin" — moving onto rollout plans while basic catalog curation work isn't finished. Asked the team to write things down because picking up state from memory isn't working.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps; Content Automation Milestone Weekly Check.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P13] UPDATE — oleksii-mazurik.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Engineer on the Flamingo team working on Completeness Check. Found that for ATI activities, UUIDs in Items Curator deterministically map to specific document types (Go City voucher, Universal Studio, etc.) — using a historical lookup script he built (AI-assisted). This finding makes Marcus's heavier "AI judge" design unnecessary for ATI: M3 (associations) + M4 (enforcement) can both fit before end of May for ATI, freeing the team to expand to more suppliers and put more capacity on Smart Booking in June. Strongly advocating for: dashboards inside the Documents Dashboard app (not Grafana), product 1–2 pagers from PMs ahead of cycle planning, observability as a tech debt item that must be planned into next cycle.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P14] UPDATE — minh-nguyen.md
> **Current context**: Engineer on Flamingo, focused on Completeness Check and Expedia work.
> **Proposed addition**: 2026-05-05 — Wrapping up rentals/V1 work (the PR is ready for review). Once that lands, available to work alongside Sasha on Smart Booking. Plan: Minh covers V1 enforcement of Completeness Check, Oleksii drives V2 historical lookup, Sasha continues Smart Booking groundwork. Marcus to hand off his V1 piece when he's back.
> **Source**: 1:1 — Oleksii / Aliaksei.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P15] UPDATE — sascha-burku.md
> **Current context**: Tech Lead on Flamingo, leading Smart Booking investigation.
> **Proposed addition**: 2026-05-05 — Created the Documents Dashboard observability ticket Oleksii had been planning to file (Aliaksei thanked him explicitly). Still tracking towards Smart Booking; will get an additional engineer (likely Minh, possibly Sasha himself once free) once Completeness Check V1/V2 wrap up at end of May.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P16] UPDATE — kiryl-karetnikau.md
> **Current context**: Tech lead on Spaeti.
> **Proposed addition**: 2026-05-05 — Drafting the Wetu deprecation rollout plan in 3 phases (A=Expedia launch, B=Spaeti capabilities replace Wetu, C=Trip Planner removes Wetu). Document is lengthy. Plan currently doesn't depend heavily on Trip Planner during phase B — Trip Planner is a consultant, not a driver, until phase C. Pedro reviewing/co-writing.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — wetu-deprecation.md
> **Current status in KB**: Multiple work packages identified, Phase 1 (replace manual accommodation input) targeted for C2, Phase 2 (full catalog search replacement) likely C3. Endpoint specs nearly complete as of 2026-04-14. Gregor unavailable until mid-May.
> **Proposed update**: 2026-05-05 — Project officially kicking off this week. Anish (back from parental leave) and Alinys are the new Trip Planner-side engineers; Niche, Leon, Kirill are the existing core. Kickoff meeting with Anish/Alinys scheduled tomorrow (May 6) at 10:00 — Gregor leading in Sylvia's absence, Aliaksei may join. Aliaksei is now the single point of contact for V2 delivery (confirmed with Robert) — Pedro provides technical support, Gregor advisory. Kiryl is drafting the rollout plan in 3 phases (A: Expedia launch with gradual rollout; B: Spaeti builds replacement capabilities; C: Trip Planner removes Wetu). Phase B/C boundary is blurry and needs alignment. Salesforce concern (4 fields with "Wetu" in their names) cleared — they actually carry Trip Planner / TripVis data, not Wetu, so no impact. Robert flagged that since solution design is happening within the cycle, a credible delivery roadmap for the full deprecation is impossible — only the first slice can be planned with confidence.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps; EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — completeness-check.md
> **Current status in KB**: Marcus wrote detailed doc; Minh reviewing.
> **Proposed update**: 2026-05-05 — Significant scope and timing change. Oleksii found that for ATI activities, Items Curator UUIDs map deterministically to required document types via a historical lookup script — making Marcus's heavier "AI judge" design unnecessary at this stage. New plan: V1 (Marcus's enforcement layer, M1+M2) finished by end of May despite Marcus being out sick; V2 (Oleksii's historical lookup + UUID→doc-type mapping, M3+M4) also end of May for ATI only. June freed up for: (a) extending the approach to more DMCs/suppliers, (b) more capacity on Smart Booking. Project scope shrunk to bare minimum: e-tickets, accommodations, activities, some booking documents — transports explicitly excluded (no UUID correlation possible there). Manual fill of UUID mappings for now (3 people max do this); a "nice UI" with Items Curator integration can come in a later cycle. Open: bus tickets and rentals via Asian Trails inside vouchers — handled by enforcement at type level.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — api-outsourcing.md
> **Current status in KB**: Partner signed; Talha leading adapter work; Asian Trails / Thompson first.
> **Proposed update**: 2026-05-05 — Working session with 11infotech revealed major scope confusion (multi-room search, multi-supplier vs. multi-destination). Charlie was emotional/upset at the start, blaming back-and-forth on the spec. After alignment, agreed gateway model: best-effort, no decision-making, passes through whatever suppliers offer (e.g., timezone fields, multi-room support). Tourlane will send one supplier per request, multiple destinations per supplier, never multi-supplier in a single call. Multi-room search remains "nice to have" — vendor will support where suppliers do (Expedia, EPS, Webbeds), drop where they don't. Vendor to send a capabilities questionnaire to suppliers; Pedro and Talha lead the review. Charlie committed to giving an estimate by Thursday for the implementation changes; vendor is updating the spec AND coding in parallel. Aliaksei privately flagged anxiety about the speed (35-page spec done quickly = potential quality concern). Asian Trails May go-live still the target; Karan and Claudia want a timeline they can communicate. Action: Aliaksei still needs to read the full updated 35-page spec.
> **Source**: 11infotech – Tourlane.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — cycle-2-planning.md
> **Current status in KB**: 2x more planned than capacity; new bi-weekly synchronous status meetings introduced.
> **Proposed update**: 2026-05-05 — Strong consensus from engineers (Oleksii especially) on process improvements for the next cycle planning round (next plan starts ~5 weeks out): (1) PMs (specifically Kristina) must produce a 1–2 page product one-pager per initiative ahead of the engineering technical proposal phase; (2) engineering gets one week to produce technical proposals from those one-pagers; (3) tech debt items — specifically the Documents Dashboard observability/dashboards initiative — must be planned in, not stealth-delivered; (4) deadline backwards from cycle start: product one-pagers ~2 weeks before, engineering proposals ~1 week before, with one buffer week for moving things around. Aliaksei to draft a template for Kristina similar to the engineering technical template. Separately, Pedro raised that the team is starting rollout-planning for Wetu/Expedia before basic catalog curation tasks are finished — said discussion has been "spreading too thin" and "not very helpful." Wants a documented stocktake of what's done vs. not before moving forward.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II; Content Automation Milestone Weekly Check.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — route-builder-v0.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**: New project entry. Route Builder V0 is the V2 / Trip Planner team's first attempt to compose a brand-new offer (rather than copying a valid existing offer as historically done). This shift makes V0 dramatically more complex — every element (accommodation, transport, rental, location) has to be matched/composed from scratch, with high risk that a "first-match" fill produces low-impact or wrong offers in 40%+ of cases. Robert's read: the team is in an iterative "find a problem, solve it" mindset that prevents any roadmap commitment. Decision: give Lukasz the engineering mandate to propose a slicing strategy (with Aliaksei/Sylvia/Gregor as mentors). Realistic deliverable from C2 is likely the first slice only, not the full V0. Aliaksei is the delivery owner / spokesperson while Sylvia is out.
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] UPDATE — architecture-board.md
> **Current status in KB**: NEW — not yet in KB
> **Proposed update**: New project/forum entry. Weekly architecture sync (Pedro, Gregor, Robert, Veronica, Aliaksei + EM). Standing topics: cross-team domain decisions, Wetu deprecation kickoff, infra tool migration, incident process. May 5 outcomes: (1) Domain validation overview ticket created — compile cross-team list of domain violations, ownership questions, and missing service-definition validation. Pedro will draft. (2) Decision-log organization aligned: cross-domain technical decisions go to a centralized log, within-domain decisions stay in domain documentation. Use Confluence's built-in decision template so they aggregate automatically. (3) Sense that the C4 diagram (last refresh 1–2 years ago) needs a rebuild as part of the domain overview work. (4) Infrastructure tool migration: Gregor still owes the role description for the new lead; Sylvia (when back) needs to formally hand the mandate to Jakob. (5) Incident process redesign (Laura's doc) deferred to C3 — too many process initiatives competing for the same short cycle. (6) Pedro raised that running quarter planning fully synchronously across all teams burns ~2 weeks of capacity per cycle; Veronica acknowledged but wants to ride out current setup before changing. (7) Quarter planning starts in ~1 month and certain items (route builder, V2 deprecation) will explicitly cross into Q3.
> **Source**: Architecture Board Meeting.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Current status in KB**: Multiple workstreams; Marcus overloaded.
> **Proposed update**: 2026-05-05 — Completeness Check timeline rebuilt around Marcus being out sick. Plan: V1 enforcement (Marcus's design, picked up by Minh) and V2 historical-lookup-based UUID mapping (Oleksii) both targeted for end of May, scoped to ATI / e-tickets / accommodations / activities / some booking documents. Transports excluded. From June, Smart Booking gets the full team's focus (one engineer continues, plus Minh + Sasha freed up). Documents Dashboard observability becomes a hard ask for next cycle's tech-debt slot — proposed implementation inside the dashboard app itself (JavaScript, not Grafana, since Grafana doesn't fit the data model). Knowledge gap surfaced explicitly: only Marcus and Kristina understand certain milestone definitions; team unable to make decisions while both are out.
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — catalog-supply-platform.md
> **Current status in KB**: Catalog vs. supply-domain investment is the key architectural decision. Per-supplier rollout for Expedia replacement.
> **Proposed update**: 2026-05-05 — Two catalog-curation tasks in review (curation rule + filter applicator service). Rollout strategy clarified: per-supplier gating in production, but for staging all gates removed except the "GMC enabled" gate so testers can see all data. Booking.com review score lives in Areefront and will need to move to catalog (or be served via catalog) before curation can apply review-score-based gating — currently no review scores visible for many staging items. Pedro pushed back on jumping to "rollout plan" discussions before catalog curation, area enrichment, and S3 stages are actually finished — wants written stocktake before continuing. Per-supplier gradual rollout is somewhat illusory: in practice, an accommodation only needs one of its suppliers enabled for the new content path to fire.
> **Source**: Content Automation Milestone Weekly Check.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD3] UPDATE — trip-planner.md
> **Current status in KB**: TP1 blocks Wetu deprecation; TP2 rewrite under stress.
> **Proposed update**: 2026-05-05 — Concrete onboarding kicked off this week: Anish + Alinys joining the V2 deprecation effort, kickoff with Gregor scheduled tomorrow at 10:00. The rollout plan from Spaeti's side (Kiryl's doc) splits the work into 3 phases — Trip Planner is consultant in phases A/B and the driver of phase C (where Wetu integration is finally removed). Salesforce false-alarm: 4 fields with "Wetu" in their names are actually populated with TripVis links — no migration needed there. Route Builder V0 (separate but related TP work) flagged as scope-too-big for confident delivery this cycle.
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps; EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Run Wetu deprecation kickoff with Anish + Alinys
> **Description**: Join Gregor's kickoff meeting with the Trip Planner-side new joiners (Anish + Alinys) tomorrow at 10:00. Daily and refinement already to be cancelled. Ensure they leave the meeting with a clear week-1 task list and enough context to plan independently while Gregor is out next week.
> **Due**: 2026-05-06
> **Priority**: p1
> **Source**: Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Schedule the broader Wetu deprecation kickoff
> **Description**: Set up the larger kickoff (Anish, Alinys, Niche, Leon, Kirill, Pedro/Gregor) for late this week or early next, walking through the unified plan and aligning Trip Planner work with Spaeti's 3-phase rollout. Goal: everyone working on Wetu deprecation knows what they're doing by end of next week.
> **Due**: 2026-05-08
> **Priority**: p1
> **Source**: Architecture Board Meeting.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Read Kiryl's Wetu rollout plan in full
> **Description**: Lengthy doc, multiple phases. Read it carefully and add comments — Pedro and Gregor flagged that critical comments are best added now while the plan is still in draft. Specifically validate the phase B/C boundary which Pedro called "blurry."
> **Due**: 2026-05-08
> **Priority**: p1
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Read 11infotech's updated 35-page API spec
> **Description**: Aliaksei explicitly admitted he hasn't read the full updated spec. Charlie is delivering revisions Thursday and the team needs to lock the spec to get a credible Asian Trails May go-live estimate. Block focused time before the next 11infotech session.
> **Due**: 2026-05-07
> **Priority**: p1
> **Source**: 11infotech – Tourlane.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Give Lukasz the Route Builder slicing mandate
> **Description**: Talk to Lukasz tomorrow on Sylvia's behalf. Hand over the engineering ownership for proposing a slicing strategy for Route Builder V0 — explicit mandate, not just "help us slice." Frame it as a learning/career boost with Aliaksei/Sylvia/Gregor as mentors. Goal: a slicing proposal that yields a deliverable first slice (e.g., route is correct, fillers are best-effort) within C2.
> **Due**: 2026-05-06
> **Priority**: p1
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Resolve the lead-score capacity backfill with Robert + Thorsten
> **Description**: Lead score is dropped for C2 (no way to use the score in agent prioritization yet). Capacity freed up on the data science side. Decide offline with Robert and Thorsten whether to fill it with CAM (already partially built, blocked by smart-calling conflict) or another pricing work package. Both pay into milestone four. Work the trade-off explicitly: smart-calling timeline, conflict cost, and overall impact.
> **Due**: 2026-05-12
> **Priority**: p2
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Draft the cycle-planning template for Kristina
> **Description**: Engineers want a 1–2 page product one-pager per initiative (problem, target outcome, KPI calculation, must-haves, nice-to-haves) before they spend a week on technical proposals. Draft a template and run it past Sasha and Oleksii before sharing with Kristina. Aim to get this in place before next cycle planning kicks off (~5 weeks).
> **Due**: 2026-05-15
> **Priority**: p2
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Push Documents Dashboard observability into next cycle plan
> **Description**: Sasha created the ticket Oleksii had been wanting to file. Make sure observability/dashboards (built inside the dashboard app, not Grafana) is locked into the next cycle's tech-debt slot, not deferred again. Tie it to the broader knowledge-gap problem (only Marcus/Kristina understand certain numbers right now).
> **Due**: 2026-06-01
> **Priority**: p2
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Check in with Marcus and Kristina once they're back
> **Description**: Both out sick — Marcus possibly 2 weeks, Kristina unknown. Don't wait passively: ping each on day 1 back with the new Completeness Check plan (V1 enforced by Minh, V2 historical lookup by Oleksii, end-of-May target for ATI) so they can either confirm or adjust before the team has invested too much.
> **Due**: 2026-05-12
> **Priority**: p2
> **Source**: 1:1 — Oleksii / Aliaksei; Cycle 2 Roadmap: Part II.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Sync with Gregor on Trip Planner-side Wetu coordination
> **Description**: While Sylvia is out, Aliaksei agreed to co-coordinate the Trip Planner-side Wetu work with Gregor. Set a short recurring sync (or daily standup attendance) for the rest of this week and next so onboarding of Anish + Alinys doesn't drift, and so the broader kickoff this week actually happens.
> **Due**: 2026-05-06
> **Priority**: p1
> **Source**: Architecture Board Meeting; Catch up on Wetu deprecation next steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Stocktake of catalog curation / Expedia rollout state
> **Description**: Pedro asked for a written stocktake — what's actually done in catalog curation vs. what's still in flight (rules, filters, booking.com review-score migration to catalog, area enrichment, search endpoint). Right now the team is debating rollout strategy on top of unfinished foundations. Owner: Aliaksei to push Claudia/Kiryl/Pedro to produce this before Thursday's follow-up. Not for Aliaksei to write himself, but to drive.
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: Content Automation Milestone Weekly Check.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T12] Confirm V2 deprecation single-spokesperson messaging
> **Description**: Robert asked for one spokesperson on Wetu deprecation; Aliaksei confirmed it's him. Make this explicit in the next bi-weekly delivery management sync and in any cross-team comms — Pedro is technical support, Gregor is advisory, Aliaksei owns delivery messaging.
> **Due**: 2026-05-13
> **Priority**: p3
> **Source**: EM — Delivery Management.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

The big movement this week is the Wetu deprecation actually starting: two Trip Planner-side engineers (Anish, Alinys) onboarded, Kiryl's 3-phase rollout plan in draft, and Aliaksei confirmed as single delivery owner while Sylvia is out. Two important illness risks: Marcus (possibly 2 weeks), Kristina (unknown), forcing the team to make Completeness Check decisions without them — Oleksii's UUID-from-Items-Curator finding actually shrinks the work and frees capacity for Smart Booking in June. The 11infotech session was tense but ended productively with a clean "best-effort gateway" model and a Thursday estimate from Charlie. Two recurring red flags Robert and Pedro both raised: solution design is happening inside delivery cycles (so timelines are nominal at best), and the team is jumping to rollout planning while curation foundations are unfinished. Process change requested for next cycle planning: PM one-pagers + engineering proposals + locked-in tech debt slot.
