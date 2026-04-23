# Meeting Notes Review — 2026-04-23 (analyzing meetings from 2026-04-22)

## Meetings Analyzed

- Content Automation Milestone Weekly Check (11:00, 4 participants: Claudia, Aliaksei, Kiryl, Pedro)
- TripPlanner<>Wetu catch-up (12:00, with Gregor and Kiryl — recorded for Mochi team)
- 1:1 — Minh / Aliaksei (14:15)
- 1:1 — Aliaksei / Claudia (15:15)
- Daily Späti (10:00 — no transcript, skipped)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — minh-nguyen.md
> **Current context**: On the Flamingo team, reports to Aliaksei. Development goal is Completeness Check expertise.
> **Proposed addition**: **2026-04-22** — Expected to take over as main person driving Completeness Check since Marcus will be on Support Portal migration for C2. Position: completeness check can solve ~90% of cases but last 10% is very hard and an open question. Concerned about support burden (user confusion notifications) if the 10% isn't addressed. On smart booking: hesitant about Sasha's proposed hacky solution — worried about tech debt and eventual cleanup cost when proper solution lands. Interested in joining Infra Guild eventually but capacity doesn't allow now; already told Wieland he'd join if Sasha fully steps away after setup is done. Works mostly async with Marcus (small PRs). Marcus has been adding prep work for Completeness Check on Confluence. (Source: 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — claudia-tita.md
> **Current context**: Product Manager on Späti. Driving Expedia certification and API outsourcing.
> **Proposed addition**: **2026-04-22** — Going on vacation from Friday April 24. Wants to hand over technical alignment for API Outsourcing (11 Infotech) to Aliaksei; feels she cannot contribute further on the technical decisions. Created a dedicated #11-infotech-implementation Slack channel with Aliaksei, Robert, Pedro, Talha for transparency on red flags. Frustrated with the state of the project — Pedro is deeply concerned things won't work, Talha is sick, and there's no clear technical requirements document from Tourlane side. Proposes Leon as second engineer alongside Talha (prefers him over Nishant because he's closer to Wieland). Also flagged that the team feels lost about C2 direction and wants more delivery touch points from Aliaksei. (Source: Aliaksei / Claudia; Content Automation Weekly Check)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer, owns catalog/Wetu architecture.
> **Proposed addition**: **2026-04-22** — Raised serious concerns about 11 Infotech's approach: they created a new endpoint with different authentication than their other endpoints (red flag on quality). Wants Tourlane to provide an API spec for 11 Infotech to implement against, rather than Tourlane adapting to whatever they build. Doesn't clearly understand the Gateway pattern being implemented. On the catalog planning: proposed catalog management (fork/rebuild of Item Curator + Tourlane preferred flag + destination enable/disable) as a C2 topic, scoping down to basic functionality so capacity can go to API outsourcing and Wetu deprecation. Confirmed accommodation search will not be deprecated until TP1 is gone — instead it will proxy to the new catalog endpoints. RAPID for destination launch block still needs Veronica's thumbs up and then Karen's approval (Karen is out for two weeks). (Source: Content Automation Weekly Check; Aliaksei / Claudia)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — gregor-schmidt.md
> **Current context**: Staff engineer, leaving in ~1.5–2 months. Expert on Wetu/Trip Planner. Offloaded from infra guild.
> **Proposed addition**: **2026-04-22** — Delivered a detailed technical walkthrough of all three Trip Planner ↔ Wetu interaction patterns (meeting recorded for Mochi team handover — no one assigned on their side yet). Key revelations: Wetu content is fetched via a private/reverse-engineered API (content/itinerary) — already a legal/licensing risk. Wetu polygons are increasingly unreliable (Cape Town lost its polygon) — mapping now stored explicitly in Elephant as backup. Gecko API has internal cleanup to do (uses Wetu IDs for e.g. transport round-trip detection — will need geo-distance alternative). Transport leg search is simplest to replace (Google Places / Nominatim). Map search can mostly just be removed (no replacement needed — accommodation search will only return items with content). Confirmed in 1:1 that Aliaksei successfully offloaded him from infra guild — Gregor will be available for Wetu work next month. (Source: TripPlanner<>Wetu catch up; Aliaksei / Claudia)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — wieland-pfesdorf.md
> **Current context**: Engineer on Späti, owns destinations topic. In Infra guild.
> **Proposed addition**: **2026-04-22** — Open to taking over Infra Guild leadership from Gregor. Aliaksei briefed Minh that if Wieland takes it, he'll likely need help and may need to hand off destinations ownership (Claudia suggested Leona or someone else). Infra guild lead role will be heavy on coordination (not hands-on) — especially in cycle 3 when scaling the Terraform migration from booking platform (Sasha's C2 pilot) to all other services. Stefan likely joining as 4th member due to data infrastructure experience. Was invited to the Wetu walkthrough with Gregor but couldn't join; Aliaksei will share the recording. (Source: 1:1 — Minh / Aliaksei; TripPlanner<>Wetu catch up; Aliaksei / Claudia)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — sascha-burku.md
> **Current context**: Tech Lead on Flamingo. Leading smart booking investigation.
> **Proposed addition**: **2026-04-22** — Does NOT want the organizational/coordination part of infra guild leadership — wants to stay focused on platform and hands-on work. Will drive the booking platform Terraform migration in C2 as the first reference implementation of the new infra setup — this feeds the scale-out work expected in C3. On smart booking: proposing a hacky isolated solution so Flamingo unblocks itself from depending on Späti's supply domain; Aliaksei sees potential if it can be kept self-contained with few dependencies, but Minh is hesitant about tech-debt risk. (Source: 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — marcus-klemann.md
> **Current context**: Flamingo developer (Lambus contractor). Assigned full-time to Support Portal migration in C2. Completeness check coverage at risk.
> **Proposed addition**: **2026-04-22** — Still making incremental contributions on Completeness Check despite being earmarked for Support Portal — opened a lot of small prep PRs that Minh has been able to review and approve quickly. Actively updating the Confluence page (added "quite a lot" this morning). Working asynchronously with Minh, pinging on changes. (Source: 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — talha-mahmood.md
> **Current context**: Engineer working on 11 Infotech integration.
> **Proposed addition**: **2026-04-22** — Out sick today; may be longer. Claudia asked Aliaksei to meet Talha when he's back to align on 11 Infotech technical requirements, then ideally meet Claudia before she leaves on Friday. Previously declined pairing help — said solo work was faster given dependencies between integrations — but this is now a risk: single-person bottleneck on a P1 project. (Source: Aliaksei / Claudia)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — api-outsourcing.md
> **Current status in KB**: Adapter work in progress with Talha. Gateway approach confirmed. Wieland more positive after initial concerns.
> **Proposed update**: **2026-04-22** — Project hit a rough patch. Pedro raised serious concerns: 11 Infotech created a new endpoint with different authentication than others (quality red flag); he wants Tourlane to provide an API spec for them to implement rather than Tourlane adapting to whatever they ship. Root cause: technical requirements were never clearly defined on Tourlane side during onboarding. Talha out sick today — single-person bottleneck exposed. Action plan: (1) add Leon as second engineer alongside Talha (preferred over Nishant); (2) Aliaksei takes over technical alignment from Claudia (she feels she can't contribute further on technical decisions); (3) dedicated Slack channel #11-infotech-implementation created with Aliaksei, Robert, Pedro, Talha — Aliaksei invited yesterday, hasn't read yet. Claudia wants Aliaksei, Talha and Pedro to meet when Talha returns, ideally before Claudia leaves Friday. Currently in testing phase with credentials from 11 Infotech — endpoints shared, need to be validated. Open question: whether to tell 11 Infotech to pause further implementation until alignment is achieved. (Source: Aliaksei / Claudia; Content Automation Weekly Check)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — wetu-deprecation.md
> **Current status in KB**: Endpoint specs for catalog replacement nearly complete. Gregor unavailable until mid-May; bottleneck.
> **Proposed update**: **2026-04-22** — Gregor delivered a detailed 45-minute walkthrough of all Trip Planner ↔ Wetu interactions (recorded for later viewing — Sylvia's team has no one assigned yet). Three distinct interaction patterns documented:
>   1. **Accommodation flow (map search + link content)** — map search returns Wetu IDs, link content allows manual name search; after Wetu removal, accommodation search will only return items with content (stored in catalog), map search effectively disappears, link content shifts to searching catalog.
>   2. **Trip Viz sync (content enrichment)** — full itinerary sent to Wetu, enriched content (images/descriptions/areas) fetched back and imported into Elephant. Uses a private/reverse-engineered Wetu API — legal/licensing risk. This entire interaction goes away without replacement (content from Expedia or manual).
>   3. **Transport location search** — looks up airports, train stations, ferry terminals etc. for transport legs. Not linked to Elephant. Replaceable with Google Places or Nominatim (OpenStreetMap) depending on licensing/pricing.
> Also: Gecko API has internal cleanup needed — uses Wetu IDs for transport round-trip detection; will need geo-distance alternative. Wetu polygons increasingly unreliable (Cape Town no longer has polygon) — explicit accommodation→area mapping already stored in Elephant as backup since end of 2024. Follow-ups: Aliaksei/Kiryl to draw sequence diagrams of their understanding for Gregor to validate; share recording with Wieland. (Source: TripPlanner<>Wetu catch up)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — completeness-check.md
> **Current status in KB**: Marcus wrote the doc, Minh reviewing. Marcus on Support Portal for C2, coverage at risk.
> **Proposed update**: **2026-04-22** — Minh confirmed as main owner for the initiative since Marcus is going to Support Portal migration. Scoping insight: the approach solves ~90% of cases but the last 10% is very hard and an open design question across Marcus, Minh and Aliaksei. Concern: if the last 10% is not addressed, support burden will snowball (users getting "something missing" notifications when nothing is actually missing). Product/tech decision pending: ship at 90% and accept support burden, or invest further to close the gap. Marcus continues incremental prep work via many small PRs that Minh is reviewing async; Confluence page seeing active updates. (Source: 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — cycle-2-planning.md
> **Current status in KB**: Resource rule = 2 people per topic, max 3 concurrent topics. Wetu + API outsourcing confirmed; third slot contested.
> **Proposed update**: **2026-04-22** — Shortlist proposal forming for Monday's alignment with Robert and Christine: (1) API outsourcing, (2) Wetu deprecation (including catalog management UI basics), (3) technical discovery for destination system. Catalog management scoped down to basics (item curator-style UI, Tourlane preferred flag, destination enable/disable) — advanced features pushed to C3 since Expedia rollout will be gradual. Destination discovery only in C2, implementation in C3. Cycle effectively ~7 weeks: Wieland away 3 weeks, May has 4 public holidays. Doing catalog management + supply domain + API outsourcing in 2 months assessed as "borderline unrealistic" by Claudia. Christina will bring smart booking to Monday's discussion — Aliaksei/Claudia expect the meeting to resolve catalog-management-vs-supply-domain-vs-smart-booking trade-off. Estimations and final plan expected by first week of May. Data warehouse events can be added as a small item (data model agreed, existing gem may be reusable). Warning from Claudia: transfer pricing may land as a forced C2 priority, per Robert's milestone docs. (Source: Content Automation Weekly Check; 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — expedia-integration.md
> **Current status in KB**: Certification nearly done. Two-phase launch planned.
> **Proposed update**: **2026-04-22** — Contract timeline setback. Anna (Director of Expedia Europe) called Karen on the morning certification passed — congratulated, then dropped a long timeline for the contract draft ("advance and stuff"). Karen reportedly didn't challenge her on the long timeline. Context: previous Expedia contract also took ~6 months to sign. Karen is out of office for two weeks. Claudia's take: "another disaster" — going to be a while before actual launch is unlocked. (Source: Aliaksei / Claudia)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] UPDATE — infrastructure-guild-transition.md
> **Current status in KB**: Transition planned last week of April. Jakob primary candidate, Sasha alternative, Stefan as future addition.
> **Proposed update**: **2026-04-22** — Constraints clarifying: Sasha has explicitly opted out of the organizational/coordination portion of the role (wants to stay hands-on platform). That leaves Wieland or Jakob to volunteer for the lead role. Wieland is open to taking it but recognizes he'd likely need to hand off destinations ownership as a consequence. Stefan likely joining as 4th member due to data-infra experience. The role will be coordination-heavy in cycle 3 when Sasha's booking-platform Terraform migration (C2 pilot) scales out to all services — decision on whether guild runs the migrations or supports each team's own migration is still open. Minh told Wieland he'd join the guild eventually (currently no capacity). (Source: 1:1 — Minh / Aliaksei)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] UPDATE — catalog-system-rollout.md
> **Current status in KB**: Catalog search endpoint being designed to serve both Wetu replacement and regular catalog search.
> **Proposed update**: **2026-04-22** — Endpoint set crystallizing: `search accommodations` (supports bounding box for map search, area ID for TP2, accommodation UUIDs for direct lookup), and a dedicated `price refresh` endpoint — deliberately separated from search based on past learnings, and the same pattern will serve the room-level mapping use case (input: accommodation + selected rooms + rates → response indicates whether original rate still exists, otherwise rate is flagged as gone). Accommodation search service will remain as a proxy to catalog until TP1 is decommissioned — no change needed in Trip Planner for this phase. Manual items will reach catalog directly (the endpoint that replaces Wetu). A new "search within supply" endpoint will be needed for the booking platform use case. Catalog management layer (basic UI) proposed as C2 delivery; SCM (existing system) will mostly be superseded rather than actively decommissioned. (Source: Content Automation Weekly Check)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — catalog-supply-platform.md
> **Proposed update**: **2026-04-22** — Catalog management layer proposed for C2 (basic scope): a UI resembling Item Curator (fork or new build — engineering's call) supporting (a) Tourlane-preferred checkbox workflow, (b) destination enable/disable for gradual rollouts (Expedia, catalog). More advanced capabilities deferred to C3 since Expedia rollout is gradual over months. SCM decommissioning approach clarified: SCM is not actively torn down — the new experience supersedes it; only actively decommissioned if something must be changed there. Data warehouse event publishing near-complete: model agreed, events specified, existing gem may be reusable for sending — small remaining effort. (Source: Content Automation Weekly Check)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — trip-planner.md
> **Proposed update**: **2026-04-22** — Architecture of Wetu dependency documented via Gregor walkthrough (recorded). Three interaction types, each with a distinct replacement strategy: (1) accommodation content flow — replaced by catalog, with accommodation search retained as proxy until TP1 goes away; (2) Trip Viz sync content enrichment — removed entirely, content will come from Expedia/catalog; (3) transport leg location search — replaced with Google Places or Nominatim, fully self-contained. The Trip Viz JSON generation job already only reads from Elephant (no Wetu dependency there), so the trip visualization itself is unaffected — all Wetu dependency lives above the job in Gecko API. Trip Viz does not require Wetu; the perception that "Trip Viz needs Wetu" comes only from the content sync pipeline. (Source: TripPlanner<>Wetu catch up)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Talk to Robert about priorities (smart booking + C2 scope)
> **Description**: 1:1 with Robert (scheduled for today). Bring up smart booking priority (50/50 right now, Sasha's hacky solution proposal), completeness check staffing trade-offs, and the C2 shortlist forming for Monday's alignment. Minh specifically asked Aliaksei to bring smart booking priorities to this meeting.
> **Due**: 2026-04-23
> **Priority**: p1
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Sync with Talha and Claudia on API Outsourcing strategy before Claudia's vacation
> **Description**: When Talha is back (hopefully tomorrow), meet with him and Pedro to align on technical requirements for 11 Infotech. Try to have the outcome aligned with Claudia before she leaves Friday (April 24). Also need to decide whether to tell 11 Infotech to pause further implementation until we have clear specs.
> **Due**: 2026-04-24
> **Priority**: p1
> **Source**: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Read the #11-infotech-implementation Slack channel and catch up
> **Description**: Claudia created this channel yesterday with Aliaksei, Robert, Pedro, Talha. Already long. Read the full history before engaging so you understand Pedro's concerns and Talha's feedback.
> **Due**: 2026-04-23
> **Priority**: p1
> **Source**: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Propose Leon as second engineer alongside Talha on 11 Infotech
> **Description**: Add Leon to the 11 Infotech integration work to remove the single-person bottleneck. Claudia prefers Leon over Nishant (closer to Wieland). Coordinate with Wieland and Leon on availability.
> **Due**: 2026-04-27
> **Priority**: p2
> **Source**: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Take over technical alignment for API Outsourcing from Claudia
> **Description**: Claudia wants to hand over the technical-requirements alignment with 11 Infotech — she feels she cannot contribute further to these decisions. Formally take ownership: schedule meetings, drive spec definition with Pedro, document the API contract we want 11 Infotech to implement.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Share Gregor's Wetu walkthrough recording with Wieland and Mochi
> **Description**: Send the recording of the Wetu catch-up to Wieland (was invited but couldn't join) and to Sylvia so Mochi can watch when someone is assigned. Also share transcription per Sylvia's request.
> **Due**: 2026-04-24
> **Priority**: p2
> **Source**: TripPlanner<>Wetu catch up
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Draw sequence diagrams of Trip Planner ↔ Wetu interactions with Kiryl, validate with Gregor
> **Description**: Follow-up from Gregor's walkthrough. Kiryl and Aliaksei to draft sequence diagrams of all three interaction patterns (accommodation flow, Trip Viz content sync, transport location search) — then Gregor validates. Ensures knowledge is durable before Gregor leaves.
> **Due**: 2026-05-05
> **Priority**: p2
> **Source**: TripPlanner<>Wetu catch up
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Talk to Sylvia about assigning someone from Mochi to Wetu deprecation
> **Description**: Only Aliaksei and Kiryl currently have deep knowledge of Trip Planner ↔ Wetu interactions (and Gregor, who is leaving). Claudia flagged that Mochi has no one assigned. Sylvia needs to staff someone so they can pick up the work before Gregor departs. Share the recording to help.
> **Due**: 2026-04-28
> **Priority**: p2
> **Source**: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Prepare C2 shortlist for Monday alignment with Robert and Christine
> **Description**: Draft a shortlisted topic list for Monday (April 27) alignment: API outsourcing, Wetu deprecation (incl. basic catalog management UI), technical discovery for destination system. Include one-liner descriptions per topic. Expect the meeting to also resolve smart-booking-vs-catalog-management-vs-supply-domain trade-off since Christina will bring smart booking.
> **Due**: 2026-04-26
> **Priority**: p1
> **Source**: Content Automation Weekly Check
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Decide with Minh on completeness check approach for last 10%
> **Description**: Before cycle planning, have a clear answer: do we ship at 90% and accept support burden, or invest further to close the last 10%? This is a product/tech decision that Minh, Marcus, and Aliaksei need to align on. Pull in Kristina/Robert if needed.
> **Due**: 2026-04-28
> **Priority**: p2
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Confirm Infra Guild lead decision (Wieland vs Jakob) ahead of end-of-April guild meeting
> **Description**: Sasha explicitly out for the organizational role. Wieland open but would need destinations handoff. Jakob already pairing with Gregor on infra. The last-week-of-April guild meeting is the deadline — push for a decision and support whoever takes it.
> **Due**: 2026-04-28
> **Priority**: p2
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T12] Rejoin team ceremonies (standups, plannings) once immediate planning crunch eases
> **Description**: Aliaksei acknowledged in 1:1 with Minh that he's skipped team events while juggling C2 planning across too many projects. Plan to rejoin standups/planning within 1–2 weeks when the cycle plan is settled. Block calendar once this week's fires are contained.
> **Due**: 2026-05-06
> **Priority**: p3
> **Source**: 1:1 — Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

The day's signal centers on three fronts. First, API Outsourcing hit a rough patch: Pedro flagged quality concerns with 11 Infotech's approach (different auth on a new endpoint, no clear Tourlane spec driving the work), Talha is out sick, and Claudia is handing over technical ownership to Aliaksei right before going on vacation Friday — Aliaksei needs to absorb context fast. Second, Gregor delivered a detailed recorded walkthrough of the Trip Planner ↔ Wetu interactions, clarifying that the three interaction patterns each have a clean replacement path, but Mochi still has no one assigned on their side — a knowledge-transfer risk before Gregor leaves. Third, C2 planning is crystallizing toward a Monday alignment with Robert and Christine: the proposed shortlist is API outsourcing, Wetu deprecation (with basic catalog management UI), and destination discovery — smart booking remains 50/50 and Sasha's hacky-solution proposal is on the table but Minh is hesitant. Expedia contract drift (Anna mentioned long draft timeline, Karen out 2 weeks) pushes full go-live further right. Infra Guild leadership comes down to Wieland or Jakob now that Sasha has explicitly opted out of the coordination role.
