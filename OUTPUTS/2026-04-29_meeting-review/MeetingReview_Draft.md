# Meeting Notes Review — 2026-04-29 (analyzing meetings from 2026-04-28)

## Meetings Analyzed
- Architecture Board Meeting (10:00–10:50, 7 participants)
- Aliaksei / Kristina Weekly (11:30–12:00, 2 participants)
- Product Monthly (14:00–15:30, large group, ~80+ participants)
- Kiryl / Aliaksei — Check current roadmap (15:30–16:00, 2 participants — much in Russian)
- EM Sync (16:00–16:55, 4 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — marcus-klemann.md
> **Current context in KB**: Lambus contractor on Flamingo. Overloaded (16h days, 16 PRs/day). Wrote support portal migration roadmap; full-time on Option 4A migration. Completeness check coverage at risk.
> **Proposed addition**:
> - **2026-04-28** — Working solo and invisibly on completeness check: 50 PRs in a single ticket (per Kristina), no clear breakdown of scope/milestones, team hasn't reviewed his Confluence page or code-maintainer doc. Approach has shifted mid-flight: original "one universal solution" broke down (e.g., Sunny Cars edge cases) and is now per-supplier — Kristina was not informed of the pivot. Aliaksei + Kristina agreed to ask Marcus to prepare a roadmap with milestones/remaining scope before Thursday's cycle-2 delivery planning. Marcus claimed each new supplier onboarding is "just 2 hours of work." Robert has signaled Marcus may stay with Foxes for the support portal migration; Aliaksei intends to fight to bring him back to Flamingo. (Source: Aliaksei / Kristina Weekly; EM Sync)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — minh-nguyen.md
> **Current context in KB**: Software engineer on Flamingo. Reviewing Marcus's completeness check doc, presenting to team. Development goal: become go-to person on completeness check.
> **Proposed addition**:
> - **2026-04-28** — Concern raised by Kristina: Minh is not proactively shadowing Marcus on completeness check. Today picked up an unrelated low-priority Ruby ticket without checking with Kristina; agreed to pause it. Knowledge transfer is at risk — Minh's recent Confluence-to-slides presentation was good (he absorbed knowledge by transforming the doc), but he is not yet confident enough to take over the core logic. Minh and Marcus to be asked (by Kristina, with Aliaksei in support) to sit down and define a roadmap together — including data-research workstream (e.g., assess which of the ~10 onboarded suppliers fit each cluster of solutions). Kristina prefers the request comes from Aliaksei rather than her ("then it doesn't sound like product nagging again"). (Source: Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — sascha-burku.md
> **Current context in KB**: Tech Lead on Flamingo. Leading smart booking investigation. Documents Dashboard tech debt advocate.
> **Proposed addition**:
> - **2026-04-28** — Sascha (per Kristina) initially told Aliaksei that Stefano would join the infra guild as new lead — this was incorrect. Decision actually went the other direction (Jakob chosen, Stefano joining as supporting member in C2). Aliaksei to clarify with Sascha. Sascha mentioned a (to-be-prepared) plan for documents-dashboard supplier-onboarding API integration: ~3–4 small tickets for first batch, ~1 sprint of work. Sascha currently keeps "within his zone" rather than acting as cross-team tech lead — Kristina flagged this as a structural gap (Sasha + Aliaksei are both Senior 2; neither is acting as TL across the whole team). (Source: Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — kristina-lamza.md
> **Current context in KB**: Product Manager for Flamingo. Driving support portal migration planning.
> **Proposed addition**:
> - **2026-04-28** — Burning out: this month is "absolutely unmanageable" — 9 new projects in this cycle, several requiring her to do technical assessment work that should be a tech lead's job ("two clueless managers trying to do work with engineers"). User portal migration is taking the most of her time. Asked Aliaksei to occasionally cover stand-ups and team rituals so she can step back. Will lead the cycle-2 delivery planning workshop on Thursday. Decided Aliaksei should take the lead on Documents Dashboard / DORA work; will message him about it. (Source: Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — jakob-pupke.md
> **Current context in KB**: Senior Engineer on the frontend teams. Proposed to take over infrastructure guild leadership.
> **Proposed update**:
> - **2026-04-28** — DECISION: Jakob is confirmed as the new infrastructure guild lead. Decision made at Architecture Board Meeting after extended discussion; Veronica articulated the trade-off as "tendency to higher seniority because the topics are heavy and learning on top would be too much." Wieland was the alternative candidate (similar capability, but already taking on destinations ownership this cycle — too much overlap). Stefano was briefly raised but rejected as he hasn't been part of the guild before — would look strange to existing members. Robert to clarify role expectations next round so Jakob doesn't get overloaded with too many implicit responsibilities (no team-lead-style performance feedback expected from him). Stefano joining in C2 as supporting member. Jakob also actively reads the backend admin emails and spots cost issues — flagged as a positive signal for the role. (Source: Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — wieland-pfesdorf.md
> **Current context in KB**: Engineer on Spaeti. Owning destinations topic. Considered for infra guild leadership.
> **Proposed update**:
> - **2026-04-28** — Not selected as infra guild lead — decision went to Jakob. Veronica's reasoning: Wieland is already taking on destinations ownership this cycle (his first time covering a large company-wide topic) and adding infra guild lead on top would risk both. Aliaksei advocated for the senior=Jakob path because he'd rather not stretch Wieland thin. (Source: Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — gregor-schmidt.md
> **Current context in KB**: Staff engineer leaving in 1.5–2 months. Critical knowledge holder. Unavailable until mid-May for V2/Wetu.
> **Proposed addition**:
> - **2026-04-28** — Officially announced at Architecture Board: not actively contributing to infra guild going forward. Spoke with Stefano to introduce the work and pointed him at the Confluence docs. At Product Monthly, presented the TP2/TP1 architectural strategy — TP2 will be built **inside** the existing TripPlanner servers (not as a parallel system) so other tools migrate at their own pace; functionality being externalized into separate services (offer lifecycle, sales price, destinations under Foxes). For the bulk-update / Gecko ticket, argued that V2 deduplication has solved the underlying root cause (data team can't fetch at scale because each page takes 20-30s) — proposed dropping the bulk-update ticket and instead require any TP2-equivalent design to provide a faster alternative for the data use case. (Source: Architecture Board Meeting; Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — pedro-alves.md
> **Current context in KB**: Staff Engineer for backend teams. Owns catalog rollout, central to Wetu/destinations.
> **Proposed addition**:
> - **2026-04-28** — At Architecture Board: drove discussion on how to handle service-to-service vs. data-warehouse data flows. Identified three patterns: (1) purely analytical for Looker, (2) hybrid (catalog → DWH → recommender, where reliability matters but eventual consistency works), (3) service-to-service. Proposing the catalog→DWH for accommodation recommender as a "low-risk experiment" — if one event is lost, an update event recovers it. Robert to take this to data engineers and define success criteria. Pedro also working on a single document compiling all current domain violations across Tourlane (incl. the Flamingo→Spaeti room-mapping API workaround for smart booking) so they can be evaluated quarter-by-quarter. On 11 Infotech: not happy with their response document to his change requests — feels the tone is "not very collaborative." Aliaksei sees Pedro's instinct to scrutinize as valuable but also wants to act as mediator (Pedro vs. vendor) given the stakes for the cycle-2 plan. (Source: Architecture Board Meeting; EM Sync)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] UPDATE — robert-wolf.md
> **Current context in KB**: Director of Engineering. Aliaksei's manager.
> **Proposed addition**:
> - **2026-04-28** — Took action item to engage data engineering on event-streaming vs. API-based data sharing — clarify what's "operational" vs. "analytical" and what reliability guarantees Snowplow gives. Proposed (in private to Aliaksei, per Kristina) that Marcus might stay with Foxes for support portal migration — Aliaksei plans to push back. Will check with Christine about moving the bi-weekly status meeting from 9:30 AM to a later time (already in KB; reaffirmed). (Source: Architecture Board Meeting; Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P10] UPDATE — kiryl-karetnikau.md
> **Current context in KB**: Tech Lead on Späti. Vacation: 1–2 weeks within May–June cycle.
> **Proposed addition**:
> - **2026-04-28** — Walked Aliaksei through the catalog/Wetu/curation-rules dependencies in detail. Key clarifications: (1) the current catalog→Trip Planner content connection is only for the Expedia certification path (staging), not a full migration — full content from catalog to TP1 happens **after** Wetu deprecation, when Wetu stops sending updates that override catalog content; (2) "catalog management" (manual curation by TX team — block/unblock, Tourlane Preferred, top picks) needs migration of curation states from Elephant to catalog plus new functionality the catalog doesn't yet have; (3) "catalog curation rules" (e.g., rules per corridor like "only show 8.5+ review scores in Namibia") is distinct from "OTA-only" blocking — the latter has not yet been discussed with Pedro; (4) "Tourlane preferred" specifically: catalog ↔ Elephant ↔ map-search interplay still TBD. Catalog as content source-of-truth blocked by Expedia contract + completing Wetu migration sequence. Catalog management for cycle 2: "we won't make it" — likely cycle 3. (Source: Kiryl / Aliaksei — Check current roadmap)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P11] UPDATE — claudia-tita.md
> **Current context in KB**: Spaeti PM.
> **Proposed addition**:
> - **2026-04-28** — At Product Monthly, presented Spaeti updates: Expedia certification "successfully passed this month" — major milestone, now waiting only on Expedia contract finalization (could take longer than 60 days due to Expedia's formal processes). Also presented 11 Infotech: signed contract, gateway being built, Asian Trails will be the MVP (~50% margin recovery expected this year if launched on time, "more than half a million net financial benefit"). Per Veronica, an open question for Aliaksei: whether the next Expedia milestone is **content** (real-time content extension via accommodation search) or **availability lookup** (extending hotel-bed look-up to Expedia for higher coverage in core destinations like South Africa, Namibia — projected "+5% book-through rate"). Veronica asked Aliaksei to catch up with Claudia and align. (Source: Product Monthly; EM Sync)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P12] NEW — stefano-rodighiero.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Stefano Rodighiero
> Type: person
> Role: Senior engineer, formerly lead of Dunero team (now dissolved)
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Has data-infrastructure experience and prior leadership experience (was Dunero lead, "almost a one-man team"). Joining the infrastructure guild in Cycle 2 as a supporting member. Briefly considered as guild lead (alternative to Jakob) but rejected — hasn't been part of the guild before; would look strange to existing members. Has historically raised concerns about Snowplow event reliability for analytics-vs-operational use cases.
>
> ## Updates
> - **2026-04-28** — Gregor introduced him to infra guild work and pointed him at the Confluence docs. Confirmed willingness to join in C2. (Source: Architecture Board Meeting)
> ```
> **Source**: Architecture Board Meeting
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P13] NEW — edward-jones.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Edward Jones
> Type: person
> Role: Engineer (likely senior) involved in Trip Planner and Spaeti collaboration
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Has been heavily supporting Spaeti work, especially on Expedia integration. With Gregor leaving, Aliaksei expects Edward will need to shift into more Trip Planner / TP2 work, reducing his Spaeti-side support. Aliaksei is concerned about losing this support channel.
>
> ## Updates
> - **2026-04-28** — Aliaksei flagged in EM Sync (and side conversation with Kristina) that Edward's reallocation to TP2 work post-Gregor is a foreseeable resource loss for Spaeti. (Source: Aliaksei / Kristina Weekly)
> ```
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P14] NEW — lore-people-ops.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Lore (People & Operations)
> Type: person
> Role: Picks up cross-functional projects from a People & Operations angle
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Wrote a process-improvement document around incident-response communication (after the recent CEF1/SEV1 had bumpy comms). Document was shared with engineering ~two weeks before April 28 but not yet reviewed. Veronica is the link person; she's deciding whether engineering can take this over or whether to tell Lore "we're out of capacity for now."
>
> ## Updates
> - **2026-04-28** — Document linked into the Architecture Board "incident process review" ticket (now in progress). Refinement needed since framing is from an organizational perspective, not engineering. (Source: Architecture Board Meeting)
> ```
> **Source**: Architecture Board Meeting
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P15] NEW — karen.md
> **Current context**: NEW — not yet in KB. (Surname unclear from notes — referenced as the person pushing the Expedia contract; possibly "Karmen" / "Carmen" — likely a Tourlane senior leader involved in supplier negotiations, possibly the same Karen mentioned earlier in KB as needing to sign off on the destination-launch RAPID document.)
> **Proposed addition**:
> ```
> # Karen
> Type: person
> Role: Senior business stakeholder (likely commercial / supply leadership)
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Owns the push to get Expedia's contract signed. Out from end of next week (early May), but spoke with everyone he could before leaving. Also previously named (in KB context) as the person who needs to sign off on the 10-month destination-launch block via RAPID document. Surname not yet captured — Aliaksei to confirm whether this is one person or two.
>
> ## Updates
> - **2026-04-28** — Veronica flagged that contract escalation is critical: Karen → push Expedia + push internal legal review → ~1 month process; if not signed within the next two weeks, the May go-live target slips. (Source: EM Sync)
> ```
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — api-outsourcing.md
> **Current status in KB**: Partner signed, gateway adapter approach, 14 suppliers in backlog ordered by margin. Wieland positive after initial skepticism.
> **Proposed update**:
> - **2026-04-28** — Major scope cut for cycle 2: target reduced from 3 suppliers to **1 (Asian Trails) only**. Reason: 11 Infotech's initial integration revealed quality concerns — ~20 feedback points on engineering practices (missing error handling, attempting to encode supplier-code in the rate field, etc.). Pedro pushed back hardest; Aliaksei acting as mediator because of structural conflict-of-interest (Lambus contractors were always against this initiative). Pedro feels 11 Infotech's response document tone is "not very collaborative." If Asian Trails works as MVP and the universal adapter holds, ramp-up to remaining suppliers should be quick (vendor has 11–16 adapters ready to plug in). Margin-optimization milestone delayed correspondingly: ~€500K net financial benefit this year if MVP goes live on time. Onboarding will overflow into cycle 2. (Source: EM Sync; Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — expedia-integration.md
> **Current status in KB**: Two-phase launch decided. Last open item: properly passing test booking in staging.
> **Proposed update**:
> - **2026-04-28** — **Certification 100% passed from Tourlane side** (announced at Product Monthly). Sole remaining blocker: Expedia contract signature. Process expected to take ~1 month total, "could take longer than 60 days" because Expedia is a slow formal organization. Karen pushing it; out early May. Veronica flagged: must be signed within next two weeks or May go-live timeline slips. Three-phase rollout reaffirmed: (1) enable as supplier (everywhere hotelbeds is active + extra destinations), (2) extend hotel-bed availability lookup with Expedia (~+5% book-through rate, especially in core destinations like South Africa/Namibia), (3) full content source for ~40K → ~400K accommodations. Open clarification needed from Aliaksei to Claudia: whether the cycle-2 milestone "extend room-level mapping with Expedia" actually means availability lookup vs. content. (Source: Product Monthly; EM Sync)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — wetu-deprecation.md
> **Current status in KB**: Endpoint specs nearly complete; Gregor unavailable until mid-May.
> **Proposed update**:
> - **2026-04-28** — Confirmed at EM Sync: full migration of Trip Planner content from Wetu → catalog **cannot be done without** the Wetu deprecation work. Current "connect new catalog service to TP1" milestone (originally cycle-1 commitment) is in fact only a partial connection for the Expedia certification path — not the real migration. Carries over as the bulk of cycle 2 work. Sequence per Kiryl: (1) Expedia contract signs, (2) catalog goes to production with Expedia content, (3) curation rules + blocking states migrated from Elephant to catalog (new functionality required), (4) Wetu stops sending updates, (5) TP1 fully reads content from catalog. "Catalog as single source of truth for accommodation content" is achievable post-step-5 (cycle 2). "Catalog as source of truth for accommodation search" is a separate, larger step (Elephant → catalog migration of supply/availability data) — likely cycle 3, not cycle 2. Aliaksei is personally building sequence diagrams of TP1↔Wetu interactions because Mochi can't prepare them ("between nine projects, sometimes a little too into the technical needles"). At Product Monthly, the TP2 strategy was committed: TP2 lives **inside** TP1 servers, externalizing offer lifecycle, sales price, and destinations into separate services. (Source: EM Sync; Kiryl / Aliaksei roadmap; Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — catalog-system-rollout.md
> **Current status in KB**: Endpoint specifications nearly complete.
> **Proposed update**:
> - **2026-04-28** — Catalog management features (manual curation: block/unblock, Tourlane Preferred, top picks, OTA-only blocking rules) need to migrate from Elephant: (a) preserve curation states already set by humans, (b) build new functionality the catalog doesn't yet have, (c) define automated catalog curation rules per corridor (e.g., "only 8.5+ review scores in Namibia") — not yet discussed with Pedro. Two distinct concepts now clearly separated in our team's vocabulary: "catalog curation rules" (corridor-level rules) vs. "content curation" (OTA-only/blocking decisions). For cycle 2, only the foundational migration is realistic; full catalog management likely slips to cycle 3. "Catalog→DWH" as the data-flow pattern accepted at Architecture Board as a low-risk experiment for the accommodation recommender. (Source: Kiryl / Aliaksei roadmap; Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — completeness-check.md
> **Current status in KB**: Marcus wrote detailed doc; Minh preparing presentation.
> **Proposed update**:
> - **2026-04-28** — At risk: original "one universal solution" approach broke down (e.g., Sunny Cars edge cases) — implementation pivoted to per-supplier solutions, but the team wasn't informed until last week's workshop. Currently Marcus is working alone (~50 PRs in one ticket); knowledge is not shared, no roadmap with milestones exists. Decision: ask Marcus + Minh to prepare a remaining-scope roadmap with milestones before Thursday's cycle-2 delivery planning. Data research is the critical blocker — need to assess each supplier (~10 already onboarded, ~80 total) and cluster them by required solution complexity (light check / ATI-equivalent / hard historical). Strategy proposal: parallelize Minh on data-research while Marcus continues core implementation. Originally targeted -5% nps impact in cycle 1; now slipping to end of May. Possible Aliaksei takes engineering ownership in cycle 2 (per Kristina's push — "his other huge topic, confirmation flow, is done"). (Source: Aliaksei / Kristina Weekly; EM Sync)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR6] UPDATE — infrastructure-guild-transition.md
> **Current status in KB**: Transition planned for last week of April. Jakob primary candidate.
> **Proposed update**:
> - **2026-04-28** — DECISION at Architecture Board: **Jakob is the new infrastructure guild lead**. Stefano joining in C2 as a supporting member. Wieland not selected (already taking destinations ownership; would risk both topics). Stefano not selected as lead (hasn't been part of the guild). Open follow-up: Robert to clarify role expectations (no team-lead-style performance feedback expected from Jakob; mostly coordination + technical alignment). Risk flagged by Veronica: Jakob is already at "9-10 out of 10" busy and has orphaned products from Dunero only he understands — onboarding others to those products needed. (Source: Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR7] UPDATE — support-portal-migration.md
> **Current status in KB**: Option 4A only; Marcus full-time on it; completeness check at risk.
> **Proposed update**:
> - **2026-04-28** — Robert proposed (per Kristina) that Marcus might stay with Foxes for support portal migration permanently. Aliaksei's intent: fight to bring Marcus back to Flamingo after the migration; even if Marcus stays, he should at minimum **not** continue working on Documents Dashboard / completeness check. Foxes team perceived as overloaded — only 4 engineers, struggling to cover the portal scope. Lambus team only has 1 backend engineer; Jakob being added in June helps but onboarding needed. Two-clueless-managers (Aliaksei + Kristina) currently doing tech-lead-level work for Foxes that should belong to a tech lead within Foxes. (Source: Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR8] UPDATE — documents-dashboard-tech-debt.md
> **Current status in KB**: Tech debt proposals (Mongo→Postgres, drop Vue.js); on hold for new infra pilot.
> **Proposed update**:
> - **2026-04-28** — New scope decided in 1:1: cycle 2 will allocate 2 engineers for ~1 week to a focused supplier/document-type onboarding sprint (top 3–5 suppliers/types per Supply audit results, then continue 1 supplier/sprint cadence). Sascha to prepare API integration tickets (~3–4 small ones, expected ~1 sprint). Aliaksei tentatively proposed as the lead/owner here with a 4-hour-per-sprint cap (DORA work overhead). Tickets to be created (not just timeboxed) so effort transparency is preserved. Eventual longer-term direction (per Sascha's earlier discovery): partial automation where operational teams cluster documents directly. Vue.js / MongoDB→Postgres still on hold. (Source: Aliaksei / Kristina Weekly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR9] UPDATE — cycle-2-planning.md
> **Current status in KB**: Resource allocation rule, max 3 concurrent topics per team. Catalog vs supply domain decision pending.
> **Proposed update**:
> - **2026-04-28** — Cycle-1 retrospective at EM Sync revealed: the cycle-1 milestones were not outcome-oriented enough — e.g., "connect new catalog service to TP1" was technically marked done after the Expedia certification connection, but the actual outcome (catalog → TP1 fully) wasn't achieved. Lesson: cycle 2 milestones must be outcome-based and small enough to satisfy/no interpretation room. Spaeti cycle 2 priorities firming up: (1) close Asian Trails 11 Infotech onboarding, (2) Expedia launch (gated on contract), (3) Wetu deprecation = "the bulk." Catalog management + accommodation search → catalog likely slip to cycle 3. Flamingo cycle 2 priorities: (1) finish Completeness Check, (2) Smart Booking logic MVP — €500K (revised down from €1M), (3) timeboxed Documents Dashboard onboarding. Thursday delivery-planning workshop; Aliaksei to talk with Kiryl first to assess team capacity. Vacation survey for cycle 2 still outstanding. (Source: EM Sync; Aliaksei / Kristina Weekly; Kiryl / Aliaksei roadmap)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR10] NEW — tp2-architecture-decision.md
> **Current context**: NEW — not yet in KB. Could also fit as TP2 update; creating dedicated entry for the architectural ADR-style decision.
> **Proposed addition**:
> ```
> # TP2 Architecture Decision — Build inside TP1
> Type: project
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> At Product Monthly, Gregor presented the architectural decision for how TP2 fits alongside TP1 across ~1M existing trips and bookings extending to 2029. Key reasoning: building TP2 as a parallel system would require all consuming systems (website, booking platform, data, supply, salesforce, etc.) to migrate on the same day, with rollback risk if any one fails. Instead, TP2 is being built **inside** the existing TripPlanner servers, allowing consumers to migrate at their own pace as new functionality becomes available. Trade-off: added complexity within TripPlanner itself, plus discipline to mark legacy-vs-new features so legacy can be removed once TP1 is shut off. Functionality being externalized into separate services to keep complexity manageable: offer life cycle (offer count, sharing, passenger details, booking trigger), sales price (rate composition, vouchers, margins), destinations (Foxes-owned; accommodation/transport recommendation lives here).
>
> ## Updates
> - **2026-04-28** — Decision presented and committed at Product Monthly. Accommodation recommender already integrated to current TripPlanner; will be reused in TP2 (build once, surface in both). (Source: Product Monthly)
> ```
> **Source**: Product Monthly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR11] NEW — gecko-bulk-update.md
> **Current context**: NEW — Architecture Board decision worth tracking as a project so its status is visible.
> **Proposed addition**:
> ```
> # Gecko Bulk Update — DWH vs Events
> Type: project
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Architectural decision around how the data team gets itinerary/catalog data: bulk-update API (current pain — each page takes 20-30s, takes a month to refresh the whole TripPlanner DB) vs. event streaming (Snowplow). Pedro raised the underlying tension: a goal to decouple services from data warehouse via events, but Snowplow's reliability concerns (Stefano's recurring point) make it questionable for operational data.
>
> Three patterns identified by Pedro:
> 1. Purely analytical (Looker reports) — Snowplow OK
> 2. Hybrid: catalog → DWH → recommender (e.g., accommodation recommender) — eventual consistency tolerable; one missing event recovers via next update
> 3. Service-to-service — events would require stronger reliability than Snowplow currently provides
>
> ## Updates
> - **2026-04-28** — Decision: Gregor to add a description of the data-access requirement to the V2 / TP2 ticket (not the bulk-update solution itself, but the use case). Catalog → DWH (pattern #2) accepted as a low-risk experiment to test viability with the accommodation recommender. Robert to engage data engineering to define what's "operational" vs. "analytical" and validate Snowplow reliability numbers. Bulk-update ticket itself: stay in to-do or move to "want-to / next year." (Source: Architecture Board Meeting)
> ```
> **Source**: Architecture Board Meeting
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**:
> - **2026-04-28** — Cycle-1 close: customer confirmation automation (MS4 + billing-address fix) live; foundation tracking object access in Salesforce delivered (currently in Snowflake, no Looker dashboard yet — first consumer is the admin-time KPI for Veronica/Ola). Smart booking: domain-violation accepted — Flamingo will host a temporary mapping API with Spaeti taking over in a future cycle. Cycle 2 Flamingo focus order: completeness-check completion, smart-booking MVP (€500K), timeboxed Documents Dashboard onboarding sprint. Marcus possibly staying with Foxes (decision pending). (Source: EM Sync; Aliaksei / Kristina Weekly; Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — catalog-supply-platform.md
> **Proposed update**:
> - **2026-04-28** — Curation states (block/unblock, Tourlane Preferred, top picks, OTA-only) need a dedicated migration from Elephant to catalog: existing human-set states must be preserved, plus new functionality built that the catalog doesn't yet have. New vocabulary distinction: "catalog curation rules" (corridor-level automated rules like minimum review score) vs. "content curation" (manual OTA blocking). API outsourcing scoped down to Asian Trails MVP only for cycle 2; ramp-up dependent on universal-adapter quality. Expedia certification fully passed; awaiting contract. Catalog→DWH→recommender accepted as the data flow pattern (low-risk experiment). (Source: Kiryl / Aliaksei roadmap; Product Monthly; EM Sync; Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD3] UPDATE — trip-planner.md
> **Proposed update**:
> - **2026-04-28** — TP2 architectural decision committed at Product Monthly: build inside existing TripPlanner servers (not parallel). Externalize offer lifecycle, sales price, and destinations into separate services. Mochi paused the transport/transfer pricing service indefinitely (announced at Product Monthly) — last-minute decision before May release. Mochi and Albatross teams merging next month into a unified product line. Accommodation recommender V1 expanded: now handles non-self-drive, missing meal-basis (cascading callbacks), on-request availability, and agent familiarity scoring. Useful-result rate up from ~25% to ~70%. (Source: Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD4] UPDATE — destinations.md
> **Proposed update**:
> - **2026-04-28** — Wieland's destinations ownership confirmed as one of two heavy topics this cycle (the other being potential infra-guild lead, which went to Jakob to avoid stretching Wieland thin). Destinations are also being externalized as a Foxes-owned service per the TP2 architecture (accommodation/transport recommendation lives there). (Source: Architecture Board Meeting; Product Monthly)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD5] UPDATE — accommodation-recommender.md
> **Proposed update**:
> - **2026-04-28** — Yuri presented major V1 expansion at Product Monthly. Previous status: only 25% of calls returned useful results (50% not even called due to non-self-drive trips, of remainder 50% returned empty due to missing meal-basis). Now expanded: works with non-self-drive trips (in combo with transport recommender), cascading callback for missing/unavailable meal-basis, on-request availability, agent-familiarity metric for prioritization. New status: ~70% of calls return useful results. Accepted as the experiment for catalog→DWH data-flow pattern (low-risk: one lost event recovers via update). (Source: Product Monthly; Architecture Board Meeting)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD6] NEW — customer-data-platform.md
> **Current context**: NEW — not yet in KB. Worth tracking because it's a strategic data-team initiative now in flight that intersects with Salesforce, the user portal, and (eventually) catalog/supply data.
> **Proposed addition**:
> ```
> # Customer Data Platform (CDP / Customer 360)
> Type: product
> First seen: 2026-04-28
> Last updated: 2026-04-28
>
> ## Context
> Data team initiative (driven by Ivana) to unify customer data across Salesforce, sales agent tools, marketing, etc. Current pain: customer data is fragmented — agents can't reliably identify repeat customers, can't prepare for first calls. Architecture: composable platform on top of Snowflake, "butterfly" framework — left wing = ingestion from many sources, body = bronze/silver/gold layers, right wing = systems consuming unified profiles. First customer-facing use case: 7-attribute unified profile for sales-agent first-call prep (e.g., "repeat family traveler, 3 prior bookings to Thailand, last contact 7 months ago, €15K trip range").
>
> ## Updates
> - **2026-04-28** — Presented at Product Monthly. Strategic theme #1 for the year. Engagement data flows back into bronze layer to power downstream models (e.g., next-trip recommendations, lifecycle awareness, opportunity prioritization). (Source: Product Monthly)
> ```
> **Source**: Product Monthly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Send roadmap-prep message to Marcus and Minh ahead of Thursday's cycle-2 delivery planning
> **Description**: Per agreement with Kristina (in 1:1), Aliaksei (preferred — to defuse Kristina's product-asks-again dynamic) sends Marcus a kick-off message asking for: (a) remaining-scope roadmap with milestones for completeness check, (b) explicit list of next-steps + supplier clusters (which suppliers fit which solution: light check / ATI-equivalent / historical hard), (c) data-research workstream Minh can pick up immediately. Goal: have a digestible picture to use at Thursday's workshop, not just the Confluence wall-of-text.
> **Due**: 2026-04-29 (today — needs to land before Thursday)
> **Priority**: p1
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Talk with Sascha about smart booking + clarify infra-guild misunderstanding
> **Description**: Two threads to land in one conversation: (1) align on smart-booking cycle-2 plan (Flamingo independent path with temporary domain-violating API, agreed at EM Sync); (2) clarify with Sascha why he believed Stefano was joining as infra-guild lead — Architecture Board decision was actually Jakob, with Stefano as supporting member. Source-of-truth alignment so the team hears the same story.
> **Due**: 2026-04-30 (Thursday, before delivery planning)
> **Priority**: p1
> **Source**: Aliaksei / Kristina Weekly; Architecture Board Meeting
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Catch up with Claudia on Expedia next milestone — content vs. availability lookup
> **Description**: Veronica flagged at EM Sync that Aliaksei needs to align with Claudia on whether the cycle-2 milestone "extend room-level mapping with Expedia" actually means **availability lookup** (extending hotel-bed lookup, ~+5% book-through rate target) or **content** (real-time accommodation search extension). They had different mental models. Decision affects sequencing of work post-Expedia launch.
> **Due**: 2026-04-30
> **Priority**: p2
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Read Marcus's code-maintainer Confluence page and ping Sascha to do the same
> **Description**: Marcus wrote the page for the team to review; only one or two comments exist. Kristina wants explicit feedback or an explicit "we won't pursue this — original problem is no longer big enough" decision. Aliaksei needs to read it himself first (this also closes a previous open item about the AI-review/code-quality workshop topic).
> **Due**: 2026-04-30 (Thursday)
> **Priority**: p2
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Decide Aliaksei's role for cycle 2: completeness-check engineering owner vs. Wetu-deprecation lead
> **Description**: Two strong pulls. (1) Kristina wants Aliaksei to take engineering ownership of completeness check now that confirmation flow is done — fits because completeness check is challenging-complexity work and Aliaksei knows the tooling. (2) At EM Sync the discussion implied Aliaksei or Sylvia leads Wetu deprecation; Aliaksei prefers Sylvia takes vetto so he can focus elsewhere. Need to land this before Thursday workshop so team capacity assignment is clear.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei / Kristina Weekly; EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Talk to Robert about Marcus's post-migration return to Flamingo
> **Description**: Robert proposed (per Kristina) that Marcus might stay with Foxes after the support-portal migration. Aliaksei's plan is to push back: even if Marcus's expertise is needed there, he must stop working on Documents Dashboard and Flamingo's completeness check work needs reliable ownership.
> **Due**: 2026-05-08 (within the next week and a half, before Foxes plans cycle-2 staffing)
> **Priority**: p2
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Survey Spaeti + Flamingo team for cycle-2 vacation plans
> **Description**: Per EM Sync (cycle-2 is short — 2 months — every absence hurts) and Aliaksei/Kristina chat. Aliaksei to send a single message asking each engineer for May–June dates, ideally also through end-of-year. Goal: have it consolidated before Saturday/Thursday delivery planning.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei / Kristina Weekly; EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Push for Expedia contract signature; coordinate with Karen
> **Description**: Veronica was explicit at EM Sync: if contract isn't signed in the next two weeks, May launch slips. Karen owns push on Expedia side and must align Tourlane legal review. Aliaksei to confirm with Robert/Karen who is monitoring this end-to-end and at what cadence (also clarify "Karen" identity if there's confusion with the "Karen" who needs to sign off the destination-launch RAPID document).
> **Due**: 2026-05-04 (within next week; before Karen leaves end of next week)
> **Priority**: p1
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Share 11 Infotech risk-management plan with team and address morale
> **Description**: From Wieland's earlier feedback (already in KB) and reinforced by today: 11 Infotech vendor quality concerns ramping up, Pedro pushing back hard, Lambus contractors (incl. Marcus) emotionally invested against the initiative. Aliaksei to write/share a plan covering: (a) which 5 critical adapters stay in-house as circuit breakers, (b) MVP→ramp-up sequencing (Asian Trails first, prove gateway, then ramp), (c) escalation path for vendor quality issues. Helps with team-morale narrative as much as with operational risk.
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: EM Sync; Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Continue building TP1↔Wetu sequence diagrams and share with Mochi
> **Description**: Aliaksei has been doing this technical work because Mochi is between nine projects and can't prepare it. Goal: hand a clean sequence-diagram set to Mochi so they can untangle TP1's Wetu interactions after Gregor leaves. This also feeds into the Thursday workshop's work-package definition.
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Define DORA / Documents Dashboard ticketing approach with Aliaksei as owner
> **Description**: Kristina proposed (and tentatively agreed) Aliaksei leads the Documents Dashboard onboarding workstream in cycle 2 with a ~4-hour-per-sprint cap. Per discussion: create tickets (an Epic with sub-tickets) for visibility — this gives transparency on effort and a clear "increase to 0.5 days if needed" lever. Distinct from infra week (which stays time-boxed without tickets).
> **Due**: 2026-05-04
> **Priority**: p3
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T12] Cover stand-ups / rituals occasionally for Kristina's Flamingo team
> **Description**: Kristina is burning out and asked Aliaksei to occasionally cover stand-ups and team rituals (not delivery planning — she'll lead that). Specifically: at minimum the retro and stand-ups occasionally. Aliaksei agreed to occasionally cover. Set a recurring reminder.
> **Due**: ongoing — start week of 2026-05-04
> **Priority**: p3
> **Source**: Aliaksei / Kristina Weekly
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T13] Reframe cycle-2 milestones as outcome-based (not output-based)
> **Description**: Veronica's lesson at EM Sync from cycle-1: "connect new catalog service to TP1" was technically marked done after the partial Expedia path was live, but the actual outcome wasn't. For cycle-2 planning, every milestone must describe an outcome that can be verified end-to-end with no interpretation room (and prefer many small ones over a few big ones). Apply this when finalizing the Spaeti and Flamingo cycle-2 sheets before Thursday.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: EM Sync
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

April 28 was a heavy decisions day. The infrastructure-guild lead was settled on Jakob (Wieland not selected to avoid stretching him over destinations + infra). Expedia certification fully passed — the only remaining gate is contract signature, which Karen owns and Veronica flagged as the two-week tripwire for the May launch. Cycle-2 scope contracted in two important places: API outsourcing dropped from 3 suppliers to Asian Trails only (quality concerns with 11 Infotech, Pedro pushing back), and the catalog→TP1 migration revealed it's effectively the entire Wetu deprecation work — so cycle 2 is dominated by Wetu, with catalog-search and catalog-management slipping to cycle 3. Most personally pressing for Aliaksei: Kristina is burning out and wants him to take engineering ownership of completeness check, while EM Sync implied he might also lead Wetu deprecation — both can't be true; this needs deciding before Thursday's cycle-2 workshop. Marcus's situation is the other open thread — Robert hinted he stays with Foxes; Aliaksei plans to fight that.
