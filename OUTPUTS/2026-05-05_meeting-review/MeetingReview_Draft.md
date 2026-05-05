# Meeting Notes Review — 2026-05-05 (analyzing meetings from 2026-05-04)

## Meetings Analyzed
- Quarter 2 cross-team planning alignment (10:00–11:00, ~16 attendees: all team leads + Veronica, Christine, Robert, Gregor, Sylvia, etc.)
- Sprint planning Späti team (11:00–11:45, Pedro, Claudia, Nishant, Talha, Aliaksei)
- Flamingo Retro [Spaeti team retro] (13:30–14:30, Spaeti team — Min, Sasha, Alexis, Aliaksei)
- Aliaksei / Veronica 1:1 (15:00–15:30)
- Aliaksei / Robert 1:1 (16:00–16:40)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — robert-wolf.md
> **Current context**: Director of Engineering, Aliaksei's manager. Coordinates cross-team Wetu deprecation work.
> **Proposed addition**: **2026-05-04** — In 1:1 took ownership of unblocking V2 / Wetu deprecation: said he would ping Anish (frontend) and ask Alina to ping Aliaksei to form a "proper team" with the Spaeti team while Sylvia is out. Confirmed Trip Planner team is already split with at least one backend person (Alina, Erlinis Quintana) responsible for V2 migration full-time and one frontend (Anish). Said Gregor's role going forward is to enable parallelization rather than code — "explain what to start, what depends on supply API." Will look into Foxes-team architecture for support portal (TripVis user/support portal split). Acknowledged a chicken-and-egg discovery problem at Tourlane: initiatives come in expecting same-cycle delivery without prior research; needs to build a backlog of research initiatives so cycle 3 can plan with proper discovery for cycle 4. Confirmed "we have no business right now blocking us" — most teams blocked on something (Expedia certification, API outsourcing, route builder discovery). Asked whether Sasha is using AI for engineering speed-up. Will ask Veronica about a kickoff form for Gregor's replacement hire and include Aliaksei in the process. (Source: Aliaksei / Robert 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer for frontend teams, leaving in 1.5–2 months, expert on Wetu/destinations/TP.
> **Proposed addition**: **2026-05-04** — Gregor's remaining role on V2 deprecation: enabler/coordinator rather than implementer. Per Robert: Gregor is "supporting research, can give Alina a kickstart explaining what she needs to do, where, and why." Not expected to write code unless he has time. His job is to identify what work can start now vs. what depends on supply API readiness, and help parallelize Spaeti and Trip Planner work. Aliaksei flagged Gregor's communication ability as a critical loss: "structures explanations well, phrases things well, people understand him quite easy." Veronica confirmed she will rehire externally for the staff engineer role rather than promote — the team currently has no senior 2 candidate she'd promote (cited missing structuring/system-design skill set). Will create a kickoff form for the role. Aliaksei asked to be included in interviewing. (Source: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — silvia-torre.md
> **Current context**: Engineering Manager for frontend teams (Mochi/Albatross), advocates for definition-of-ready before cross-team work.
> **Proposed addition**: **2026-05-04** — Out sick, expected back Wednesday (per Veronica) or Thursday (per Robert). Her absence during cycle 2 planning created a single-point-of-failure problem: Aliaksei could not get clarity on V2 deprecation staffing and route builder dependencies; Robert did not have full answers in her place. Mochi team renamed to Albatross (Mochi merged into a larger team). Sylvia previously communicated to Aliaksei that two people from Albatross would work on V2 application (Alina backend + frontend TBD), with Gregor supporting. She had also discussed forming a virtual joint team with Spaeti for V2 work. (Source: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — claudia-tita.md
> **Current context**: Spaeti PM, drives Expedia certification, manages 11 Infotech outsourcing backlog.
> **Proposed addition**: **2026-05-04** — Reported positive updates after long weekend: Karen back from vacation and confirmed Expedia is on track for May go-live; Amadeus Costa Rica finally integrated with Giada after one year; Private Safaris no longer ghosting (responding to API doc requests). Decided to be conservative for cycle 2 with 11 Infotech: commit only to onboarding the vendor + going live with first supplier (Agent Trails MVP). All previously-blocked tickets in sprint to move back to "to do" — full re-plan of 11 Infotech work pending review of their latest doc and tomorrow's call. Confirmed approach: have 11 Infotech finish all endpoints before any integration testing, rather than going endpoint-by-endpoint. (Source: Sprint planning Späti team; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — pedro-alves.md
> **Current context**: Senior engineer on Spaeti team, deep V2/catalog knowledge.
> **Proposed addition**: **2026-05-04** — In Q2 planning raised concern that data engineering has no visible roadmap presence despite increasing event-based communication needs. Asked Christine to add a data engineering tab to the cross-team roadmap; Michael (Boehme) to estimate workload and own that tab. Also noted touristic-area data investigation came back to the same numbers found earlier — issues he found in his own data didn't change the conclusion. (Source: Q2 cross-team planning alignment; Sprint planning Späti team)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — minh-nguyen.md
> **Current context**: Spaeti engineer, raised concerns previously on completeness check.
> **Proposed addition**: **2026-05-04** — In retro, articulated that the completeness-check topic felt rushed despite having dedicated 8-point research tickets — outcome was AI-generated docs that were too high-level/duplicative to be useful, with documents changing 5 minutes before presentations. Defended TypeScript in general (booking platform front-end was "easy to follow") but agreed Documents Dashboard's TypeScript implementation specifically is hard to consume — pointing at code conventions and project structure rather than the language. (Source: Flamingo/Spaeti Retro)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — sascha-burku.md
> **Current context**: Flamingo backend engineer, conservative AI adopter.
> **Proposed addition**: **2026-05-04** — Per Aliaksei's report to Robert: now using AI more, deliberately codes once a week without AI to stay sharp. Will be out for half of cycle 2. Smart booking is "well prepared" with documents, escalations, and stakeholder agreements — Aliaksei contrasted this favorably with completeness-check planning quality. (Source: Flamingo Retro; Aliaksei / Robert 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] NEW — erlinis-quintana.md
> **Current context**: NEW — not yet in KB
> **Proposed addition**: Create file. Erlinis "Alina" Quintana — backend engineer on Albatross team (formerly Mochi). Email: erlinis.quintana@tourlane.com. Assigned full-time as backend lead for V2/Wetu deprecation in cycle 2. Has time available now and per Robert will start the work this week. Needs significant discovery/onboarding before she can productively contribute. Aliaksei to set up kickoff meeting with her, Anish, and Gregor. (Source: Aliaksei / Robert 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] NEW — anish-front-end.md (frontend Albatross engineer)
> **Current context**: NEW — not yet in KB. Name confirmed as "Anish" / "Niche" in transcripts; full surname not captured.
> **Proposed addition**: Create file. Anish — frontend engineer on Albatross team. Per Robert's 1:1 with Aliaksei, assigned to V2 frontend work for the full cycle. Robert will ping him to coordinate with Aliaksei. Aliaksei flagged risk: only two frontend engineers (Anish + one TBD) for V2 may not be enough once implementation hits blockers. (Source: Aliaksei / Robert 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P10] UPDATE — veronica-garcia.md (or NEW — verify if exists)
> **Current context**: NEW — Veronica's file does not appear in the KB people directory. Email: veronica.garcia@tourlane.com.
> **Proposed addition**: Create file. Veronica Garcia — Aliaksei's skip-level manager / Director (Tech). Owner of two pillars in the milestone framework. Currently personally taking over delivery management for cycle 2 ("two levels too deep") because the function isn't working — wants to identify root causes (architectural, people, AI transformation, requirements clarity, collaboration) and then delegate. Plans to shift the Architecture Board into more architecture/process focus and route delivery topics through the new delivery-management cadence. Wants Aliaksei in the Architecture Board for context. Confirmed she will rehire a staff engineer externally for Gregor's role rather than promote internally. Sees current senior-2 engineers as missing system-design/structuring skills. Sees managers as a single point of failure ("star communication") and wants tech leads more empowered. Frustrated that planning conflicts surfaced in Q2 alignment without clear escalation paths. (Source: Aliaksei / Veronica 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P11] NEW — christine-berg.md (verify if exists)
> **Current context**: christine-berg.md exists in KB. Skipping creation.
> **Proposed addition**: **2026-05-04** — Played strong moderator role in Q2 cross-team planning alignment, repeatedly cutting off tangents to keep meeting on time. Per Sasha: "first time I saw her that fierce." Owns the cross-team roadmap template and coordinates which initiatives are flagged against discovery principles. Will aggregate the Salesforce/CDP conflicts and route them to Veronica for prioritization. Asked all teams to complete roadmaps with impact/net-profit translations by end of Tuesday. Set the rule: any new Zoom-related work must "sit in a proper team" (no more cross-quarter Zoom iterations without an owning team). (Source: Q2 cross-team planning alignment; Flamingo Retro)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P12] NEW — antoine-data-scientist.md
> **Current context**: NEW — not yet in KB. Surname not captured in transcript.
> **Proposed addition**: Create stub file. Antoine — new data scientist starting 2026-05-04. Onboarding owned by data science team. Mentioned as part of data science Q2 roadmap. (Source: Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

### Projects

#### [PR1] UPDATE — wetu-deprecation.md
> **Current status in KB**: Cross-team effort with 5 work packages defined; Spaeti-Mochi-Foxes coordination needed; Gregor unavailable until mid-May.
> **Proposed update**: **2026-05-04** — Cycle 2 commitment confirmed in Q2 planning by both Spaeti and Albatross. Spaeti scope: search endpoint for manual accommodations in catalog; search endpoint enabling Trip Planner to search for touristic areas in Elephant; making catalog the source of truth for accommodations. Aliaksei's confidence assessed as low: "challenging to be super confident — large initiative with a lot of unknowns and two teams working on it." Mochi team is now Albatross; only ~2–4 people total (Alina backend + Anish frontend + possibly one more). Aliaksei warned in 1:1s that estimates have grown over the past two weeks of refinement and he expects more growth. Initial integration uses Elephant's existing search endpoint (search by name, with ancestor tree) — no new endpoint needed for area-by-ID lookups, only fuzziness-tuning required. Open: solution design hasn't been done by Albatross side; no dedicated technical owner there. Aliaksei to drive virtual-team kickoff this week with Alina, Anish, Gregor — not waiting for Sylvia's return. Spaeti team to organize the kickoff (Robert: "this initiative is led by the Spaeti team"). (Source: Sprint planning Späti team; Q2 cross-team planning alignment; Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — api-outsourcing.md
> **Current status in KB**: 11 Infotech onboarded, Talha assigned, ~14 suppliers in backlog.
> **Proposed update**: **2026-05-04** — Significant pushback on 11 Infotech's API gateway quality: inconsistent fields (booleans returned as integers), missing error handling (generic exceptions), missing documentation, leaking supplier-specific fields directly without abstraction. Talha drafted a feedback document with ~22 issues; Aliaksei told Robert it's "very clear, every point" and 11 Infotech colleagues can act on it. Tomorrow (May 5) is the first meaningful alignment session after they review. Cycle 2 commitment narrowed to: onboard vendor + go live with first supplier (Agent Trails MVP). All previously-planned tickets returning to "to do." Decision made not to integrate endpoint-by-endpoint: 11 Infotech will finalize all endpoints, then Spaeti tests the full end-to-end flow (search → booking) at once. Document recommendation from 11 Infotech: Tourlane should push accommodation data into their system, then GET it back country-wise — i.e., they treat partner (Tourlane) as the data source for static accommodation data. Robert's stance: "if it's a one-time integration problem, I'm relaxed; if it's a consistent problem, that's different" — wants to see what 11 Infotech actually adjusts vs. dodges. (Source: Aliaksei / Robert 1:1; Sprint planning Späti team; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — expedia-integration.md
> **Current status in KB**: Two-phase rollout planned; certification in final stages.
> **Proposed update**: **2026-05-04** — On track for May go-live per Karen's update post-vacation. Cycle 2 plan: launch Expedia as supplier (testing in production, importing all data, active wherever Hotelbeds is active — initially as additional bed bank, later as content source). Hotel-beds availability lookup with Expedia is at risk in cycle 2 due to short cycle and unknowns around production access timing. (Source: Sprint planning Späti team; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — support-portal-migration.md
> **Current status in KB**: Option 4A (auth section to CFA) decided; Markus to lead.
> **Proposed update**: **2026-05-04** — Status: paused for past week, no progress. Markus joins Foxes full-time after the next 2 weeks; Aliaksei wants all architecture/scope questions resolved by then. Open architectural decision: how user portal vs. support portal split looks for TripVis (Foxes team currently building TripVis from frontend side). Aliaksei's assessment: project doesn't need a Ruby backend — "thin wrapper layer on top of APIs, not much real logic" — so the Foxes user-portal backend can absorb it. Karolina was supposed to lead architectural discovery but was busy with implementation in cycle 1; Aliaksei now plans to do it in the next two weeks. Robert will look into Foxes-team capacity for the architectural work (with Sylvia out, who calls the shots there is unclear). (Source: Aliaksei / Robert 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — cycle-2-planning.md
> **Current status in KB**: 2x more work than capacity; resource allocation rule established.
> **Proposed update**: **2026-05-04** — Q2 cross-team planning alignment held — first time formal milestone conflicts surfaced (Salesforce account-manager pilot vs. CDP first-use-case; Salesforce vs. lead-score milestone). Christine to aggregate conflicts and route to Veronica + pillar leads for prioritization. Veronica is taking over delivery management personally for now to identify root causes. Cycle is short (2 months, already 25% gone). Multiple teams flagged shared retrospective: tech leads were not engaged enough during cycle planning, leaving managers/PMs to make best-guess commitments. Aliaksei raised this in 1:1 with both Robert and Veronica as the #1 retro item: tech leads need to be empowered/freed from current-cycle delivery in the last weeks of a cycle to support next-cycle planning. Sylvia's absence during planning was a single-point-of-failure event; need backups/tech leads who can step in. Robert and Veronica both agreed in principle. New cycle-3 planning rule: research initiatives must be lined up in cycle 2 for cycle 3 / in cycle 3 for cycle 4 — backlog of research, not same-cycle discovery. (Source: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] NEW — route-builder-v0.md
> **Current status in KB**: NEW — route builder mentioned in passing in earlier KB; no dedicated project file.
> **Proposed update**: Create file. Route Builder v0 — Albatross team's flagship cycle 2 initiative, target Aug 1 delivery to ship a "totally relevant route structure" for agents across 3 destinations initially, scaling to 38. Concept (per Robert): user (sales agent or AI hub) provides places to visit + nights per place; system finds accommodations from existing recommender, then layers in transport, rentals, activities. First version uses existing accommodations recommender. Components: combination recommendation v1 (extends ACREQ engine to transfer trips, removes the "use existing accommodation as reference" assumption), trip assembly (backend), transport recommendation (launching this week, scaling fast), call parsing/note structuring (extracts customer preferences/style/willingness-to-pay from sales call transcripts to feed recommendations). Aliaksei's concern: he and Pedro lack technical onboarding into Route Builder — only have a high-level idea. Will read Confluence pages and catch up with Sylvia when she returns. Robert sees Route Builder as higher priority than V2 because it blocks email + TP2 initiatives. Open question on data plumbing: Pedro asked whether Route Builder's call-transcript output should feed CDP or vice-versa — Ed (Albatross) confirmed they need transcripts much faster than CDP cadence allows, but they could be the source feeding CDP afterward. (Source: Aliaksei / Robert 1:1; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] NEW — completeness-check.md
> **Current status in KB**: completeness-check.md exists. Update instead.
> **Proposed update**: **2026-05-04** — Retro feedback: planning was "very last-minute" with insufficient research, 8-point research tickets did not produce a usable proposal, AI-generated documents were too high-level / duplicative / changed 5 minutes before presentations. Aliaksei's view: the team failed to set good acceptance criteria when refining the research tickets — should refine better next cycle. The team had a clean planning template (problem statement, milestones, risks) but stepped away from it for completeness check; Aliaksei wants to return to that template for cycle 3. Cycle 2 plan: rollout still pending; one solution does not fit all suppliers — buckets and per-supplier solutions needed. Critical-path item for current cycle. (Source: Flamingo/Spaeti Retro; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR8] UPDATE — documents-dashboard-tech-debt.md
> **Current status in KB**: Tech debt file exists; deprioritized in cycle 1.
> **Proposed update**: **2026-05-04** — Discovery added to Flamingo cycle 2 roadmap (mainly product, possibly technical late-cycle): how to move document classification/maintenance closer to the operational team so they can onboard new documents themselves, freeing engineering capacity. Retro feedback re-confirmed: project structure and code conventions in TypeScript implementation are hard to consume — language is not the root cause (booking platform front-end TypeScript is "easy to follow"). Action item: team to add their thoughts to the Confluence page; Aliaksei to follow up with Cristina and Markus tomorrow on next steps. (Source: Flamingo/Spaeti Retro; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR9] UPDATE — cycle-2-planning.md (additional context)
> See [PR5].
> **Action**: [ ] (covered above)

#### [PR10] NEW — smart-booking-logic.md
> **Current status in KB**: NEW — appears not yet in KB.
> **Proposed update**: Create file. Smart Booking Logic — Flamingo team's primary cycle 2 initiative. Discovery (problem and technical) was completed in cycle 1 with a clean planning template (Aliaksei held it up as a positive example vs. completeness check). Cycle 2 capacity is reduced: Sascha out for half the cycle, Markus out for almost the full cycle (joining Foxes for support portal migration). Realistic capacity: 2–2.5 engineers on average. Will start cycle 2 with one engineer; rollout to a supplier most likely slips to cycle 3. Architecture sign-off still pending — Christine will schedule the architecture session this week (originally only problem-phase sign-off was done). Legal review still open — Christine awaiting feedback from Pam. (Source: Q2 cross-team planning alignment; Flamingo/Spaeti Retro)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR11] NEW — tp2-trip-planner-rewrite.md (verify exists)
> **Current status in KB**: tp2-trip-planner-rewrite.md exists.
> **Proposed update**: **2026-05-04** — Cycle 2 scope set: Albatross team to do enough discovery to define what the new front-end v0 actually looks like, with a clear product/design proposition that can become an anchor for engineering discussions. Architectural implications of the TP1 backend / TP2 front-end split still unclear — Christine flagged she's "no friend of defining design completely without engineering involvement"; product and engineering will collaborate throughout discovery, with engineering capacity protected during this period. Goal: cycle 3 will start with concrete engineering work. (Source: Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR12] NEW — cdp-rollout.md
> **Current status in KB**: NEW.
> **Proposed update**: Create file. CDP rollout — committed go-live by October so impact can be measured by December. First use case is showing a quick summary of customer data inside Salesforce so sales agents get up to speed in seconds (~7 attributes, sequenced rollout, not big-bang). Critical dependency: Salesforce team capacity. In Q2 planning Veronica explicitly de-prioritized this from Salesforce's roadmap, putting the milestone "at risk." Workaround options floated: dedicated Salesforce staging environment with Tourlane dev rights; weekly Q&A sessions with the Salesforce team. Robert proposed an alternative — Zoom has a default "show customer details before answering call" feature that could surface CDP data in the contact center; whoever owns this initiative should ping him for a write-up, but that work would land in Foxes (creating a new conflict there). To be aggregated by Christine and routed to Veronica + pillar leads. (Source: Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**: **2026-05-04** — Cycle 2 roadmap confirmed: smart booking logic (primary), completeness check rollout, document onboarding for new US-market suppliers (especially Germany rollout for US customers — heavy doc load), document classification maintenance, plus a discovery item to bring document maintenance closer to operations team. Capacity is constrained: Sascha out half the cycle, Markus full cycle (moving to Foxes). Albatross will not require Flamingo backend support in cycle 2 (smart booking is internal/local). (Source: Q2 cross-team planning alignment; Aliaksei / Robert 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — catalog-supply-platform.md
> **Proposed update**: **2026-05-04** — Cycle 2 supply-platform roadmap: launch Expedia as supplier, attempt to extend hotel-beds availability lookup with Expedia (at risk), API outsourcing onboarding (commit to Agent Trails MVP only), expose catalog data to data warehouse for accommodation recommender. Heavy V2/Wetu deprecation lift: search endpoint for manual accommodations, search endpoint enabling TP→Elephant area lookup, making catalog the single source of truth for accommodation content. Aliaksei's framing: "everything content-wise gets wrapped up in this V2 deprecation epic — then we have a fully completed content domain and can start on supply domain." (Source: Sprint planning Späti team; Q2 cross-team planning alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD3] UPDATE — destinations.md
> **Proposed update**: **2026-05-04** — Pulled into Spaeti current sprint last-minute (Q2 cross-team meeting prompted it): Wieland is back for one week, then on infra week / location, so capacity window is tight. Ad hoc destinations work pulled in: review and possibly build on top of Egic endpoints; finalize work on existing area mapping (the without-polygons exercise that previously paused). 8-point discovery placeholder ticket created. (Source: Sprint planning Späti team)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD4] UPDATE — trip-planner.md
> **Proposed update**: **2026-05-04** — Trip Planner team is in deadlock per Robert: ambitions exceed team size, made the mistake of putting the team on transport pricing (consumed ~30% of cycle 1 capacity, pulling away from supply integrations). Strategy now: parallelize via supply API enablement so Trip Planner is no longer the bottleneck. New team structure: Mochi merged into Albatross. At least one backend (Alina) and one frontend (Anish) committed full-time to V2 migration; Gregor in coordination/research role. Route Builder v0 is the team's flagship initiative for the August delivery. (Source: Aliaksei / Robert 1:1)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Drive V2/Wetu deprecation kickoff meeting this week with Alina, Anish, Gregor + Spaeti team
> **Description**: Don't wait for Sylvia's return. Robert agreed Aliaksei/Spaeti team should organize the meeting; Spaeti owns this initiative. Goals: align on parallelization, scope the discovery handoff, get Alina/Anish into discovery work immediately. Coordinate with Gregor on what work can start vs. what depends on supply API readiness.
> **Due**: 2026-05-08 (this week)
> **Priority**: p1
> **Source**: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Complete support portal migration architecture by 2026-05-15
> **Description**: Markus is on the Spaeti team for the next 2 weeks only, then joins Foxes full-time. Need all architecture/scope questions resolved by then — TripVis user/support portal split, where Markus's logic lives, how Foxes-team user-portal backend absorbs the migrated work. Robert is investigating who calls the shots in Foxes while Sylvia is out.
> **Due**: 2026-05-15
> **Priority**: p1
> **Source**: Aliaksei / Robert 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Prepare for and attend 2026-05-05 alignment call with 11 Infotech
> **Description**: Tomorrow's call is the first meaningful session after 11 Infotech reviews Talha's feedback document (~22 issues). Watch for whether they accept changes vs. dodge. This determines whether to slow down or proceed with Agent Trails MVP integration.
> **Due**: 2026-05-05
> **Priority**: p1
> **Source**: Aliaksei / Robert 1:1; Sprint planning Späti team
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Read Confluence pages for Route Builder v0
> **Description**: Robert offered to send Confluence links. Aliaksei flagged he and Pedro lack technical understanding of Route Builder. Catch up before talking to Sylvia (back Wed/Thu). Output: enough context to scope cross-team dependencies and identify whether Spaeti needs to react to anything.
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: Aliaksei / Robert 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Sync with Sylvia when she returns
> **Description**: She's back Wednesday or Thursday. Topics: confirm V2 staffing on Albatross side; align on virtual joint team format; route builder onboarding; cycle 2 retro themes (especially the manager-as-single-point-of-failure pattern).
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Ask Veronica to include Aliaksei in the staff engineer hiring process for Gregor's replacement
> **Description**: Already raised with Robert ("please include me when we start hiring"). Confirm with Veronica directly and ensure Aliaksei is on the kickoff form / interview loop.
> **Due**: 2026-05-12
> **Priority**: p2
> **Source**: Aliaksei / Robert 1:1; Aliaksei / Veronica 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Follow up with Cristina and Markus on Documents Dashboard items tomorrow
> **Description**: Per retro action item carryover. Team to write thoughts on the Confluence page; Aliaksei follows up with Cristina/Markus on next steps for documents dashboard tech debt.
> **Due**: 2026-05-05
> **Priority**: p2
> **Source**: Flamingo/Spaeti Retro
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Write down cycle planning concerns for cycle 3 retro
> **Description**: Aliaksei flagged in 1:1: top concern is that tech leads were not engaged in cycle 2 planning, leaving managers and PMs to commit on best-guess. Aliaksei agreed with Veronica that the cycle 3 planning experiment could be: try planning without managers as primary drivers, with tech leads stepping up. Document concerns now while fresh; revisit before cycle 3 planning starts (~6 weeks).
> **Due**: 2026-05-08
> **Priority**: p3
> **Source**: Aliaksei / Veronica 1:1; Aliaksei / Robert 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Push Späti team review of new 11 Infotech document before tomorrow
> **Description**: Christine asked the team to summarize feedback on 11 Infotech's updated doc together; Pedro and Talha to read with current eyes (changes since last week) and give Aliaksei a confidence read on whether 11 Infotech can deliver. 5 story points allocated.
> **Due**: 2026-05-05
> **Priority**: p1
> **Source**: Sprint planning Späti team
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Reach out to Pedro on touristic-area number reconciliation (delegated to Talha)
> **Description**: Talha will ping Pedro to confirm whether the team's data investigation matches Pedro's. Aliaksei should track that this resolves quickly so the in-review ticket can be moved to done.
> **Due**: 2026-05-06
> **Priority**: p3
> **Source**: Sprint planning Späti team
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Track delivery-management cadence with Veronica
> **Description**: Veronica is personally running delivery management for cycle 2. Aliaksei agreed to use those check-ins to raise: where info flow is stuck, where engineering leads should own decisions, where leadership needs to cascade information faster, where product/engineering sync is missing. Bring concrete examples.
> **Due**: no due date (recurring)
> **Priority**: p3
> **Source**: Aliaksei / Veronica 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

The day was dominated by cycle 2 kicking off in stress mode. The Q2 cross-team planning alignment surfaced the first formal milestone conflicts (Salesforce account-manager pilot vs. CDP, Salesforce vs. lead-scoring) that Christine will route to Veronica for prioritization. The dominant theme across both 1:1s and the Spaeti retro was process fragility: tech leads disengaged from cycle planning, managers acting as information bottlenecks, Sylvia's absence breaking continuity, completeness-check planning rushed despite dedicated research time. Veronica is taking over delivery management herself ("two levels too deep") to find root causes; Robert agreed in 1:1 to ping Alina and Anish to form the V2 virtual team this week without waiting for Sylvia. Most critical decisions: V2 deprecation goes ahead with reduced confidence; 11 Infotech narrowed to Agent Trails MVP only; Markus has 2 weeks left before joining Foxes — all support-portal architecture must be locked by then; Veronica will rehire Gregor's role externally and Aliaksei wants in on interviews.
