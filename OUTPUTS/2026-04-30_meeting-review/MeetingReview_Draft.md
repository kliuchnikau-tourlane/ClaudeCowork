# Meeting Notes Review — 2026-04-30 (analyzing meetings from 2026-04-29)

## Meetings Analyzed
- Daily Späti (10:00 – 10:30, 2 attendees listed; full Spaeti standup)
- 11infotech – Tourlane (11:30 – 12:30, 6 participants — first kickoff with Charlie/CEO)
- 11infotech follow-up internal team sync (10:35, internal debrief — Aliaksei + Pedro + Claudia + Talha)
- Completeness Check: Next Steps (13:00 – 13:50, 6 participants — Kristina-led re-prioritization, then Pedro/Claudia/Aliaksei catalog & destinations follow-up)
- Flamingo – Finalize Cycle 2 Delivery Planning (16:15 – 17:00, 5 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — charlie-11infotech.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**: New file. Type: person. Role: CEO of 11infotech (vendor for outsourced supplier API integration). Email: charlie@11infotech.com. **2026-04-29** — Joined first formal Tourlane–11infotech kickoff call. Confirmed gateway is dedicated to Tourlane (separate deployment, not shared with other clients). Open to Pedro's proposal of redesigning the API contract rather than incremental fixes. Receptive but seemed less technically deep — Aliaksei and Pedro flagged internally that future technical sessions should pull in 11infotech's API lead for data-model deep-dives. Promised revised API spec by Apr 30 and follow-up meeting Mon/Tue (May 4–5). Communication channel: Microsoft Teams (Slack not possible for external party). (Source: 11infotech – Tourlane; 11infotech follow-up internal team sync)
> **Source**: 11infotech – Tourlane; 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — marcus-klemann.md
> **Current context in KB**: Lambus contractor on Flamingo. Confirmed full-time on support portal migration (Option 4A) for ~2-3 sprints from Apr 14. Completeness check coverage flagged at risk while he's away.
> **Proposed addition**: **2026-04-29** — Reversed direction during Kristina-led "step back" session: Completeness Check is now top priority, with Markus driving "layer 1" (provider-based config rule) plus historical-lookup follow-up before he rotates. Layer 1 ships as a UI toggle + DB schema change with no behavior until enabled — already partially in review with Nishant. Markus has only ~2 weeks left before rotating; engineering alignment session scheduled Apr 30 (10:00–12:00) without Aliaksei/Kristina to extract knowledge from him while present. Markus prefers pairing/PR walk-throughs over Confluence-based knowledge dumps. (Source: Completeness Check: Next Steps)
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — kristina-lamza.md
> **Current context in KB**: Flamingo PM. Driving support portal migration planning, organizing Foxes joint workshop.
> **Proposed addition**: **2026-04-29** — Took the call to formally pause smart booking delivery and most non-completeness-check work in Flamingo to free capacity for the completeness-check finalization while Markus is still here. Willing to communicate slip ("not done by end of cycle 2") to stakeholders if needed. Flagged that the team's current confidence in the multi-layer solution is too low to plan around; pushed for face-to-face working sessions over async Confluence FAQ. Proposed engineers-only alignment Apr 30 morning + product/EM sync afterwards. (Source: Completeness Check: Next Steps)
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — sascha-burku.md
> **Current context in KB**: Flamingo Tech Lead. Leading smart booking; on infra week the week of Apr 27.
> **Proposed addition**: **2026-04-29** — Provided shirt-size estimates for Smart Booking work in cycle 2: technical prep ≈ M (2–3 sprints), core logic + edge cases ≈ M–L (~4 sprints), full-itinerary email re-enable ≈ S–M (2 sprints), post-launch support ≈ S; tracking and legal confirmation effectively folded into core logic. Conclusion: smart booking won't fit C2 fully — only foundation realistic. Pushed back on multi-meeting completeness-check workshops and asked instead for shorter PR-walkthrough sessions while Markus is still around. Open to swapping a day of infra-guild work for the Apr 30 engineering alignment if needed. (Source: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps)
> **Source**: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — minh-nguyen.md
> **Current context in KB**: Flamingo engineer. Completeness Check is his stated development goal area.
> **Proposed addition**: **2026-04-29** — Proposed concrete sequencing for completeness check: he and Markus finish Layer 1 (PR review now), then once Sascha is back from infra guild the four engineers hold a working session on Layers 1.5 / 2 and next steps. Reiterated that "Product Vision & Discovery" milestones in the C2 roadmap are Christina's to estimate, not engineering's, since they require stakeholder discovery — engineering input limited to feasibility checks. (Source: Completeness Check: Next Steps; Flamingo – Finalize Cycle 2 Delivery Planning)
> **Source**: Completeness Check: Next Steps; Flamingo – Finalize Cycle 2 Delivery Planning.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — pedro-alves.md
> **Current context in KB**: Staff engineer. Driving Wetu deprecation, catalog rollout, and accommodation/destination architecture.
> **Proposed addition**: **2026-04-29** — Led the technical agenda of the first 11infotech kickoff. Strategy: stop fixing 22-point list one-by-one; instead propose a redesigned API contract (data model alignment, consistency over RPC-vs-REST style). Tourlane's reference API spec (currently on Confluence) needs to be exported as PDF and converted from "ondisview" → 11infotech terminology before sending. Internally flagged that Charlie did not appear to follow restful/RPC technical jargon and recommended pulling 11infotech's API lead into future sessions. Reaffirmed that he'd default to Tourlane driving the design rather than waiting passively for 11infotech's revisions. (Source: 11infotech – Tourlane; 11infotech follow-up internal team sync)
> **Source**: 11infotech – Tourlane; 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — claudia-tita.md
> **Current context in KB**: Spaeti PM, driving Expedia + 11infotech.
> **Proposed addition**: **2026-04-29** — Pushed back during catalog/destinations discussion: was not aware that the team had implicitly committed to using Expedia Geography API as the geo-data source for Wetu replacement. Asked for the Expedia geography dependency to be called out explicitly (RAPID note + leadership-channel heads-up before C2 planning) so Karen and the Mochi team are aware of the risk if Expedia production access slips. Will draft a formal email to Charlie summarizing 11infotech kickoff, action items, and the API spec PDF — agreed to circulate it in the implementation Slack channel for review before sending externally. Confirmed: communication with 11infotech runs over Microsoft Teams (Tourlane email accounts not supported there → personal account workaround). (Source: Completeness Check: Next Steps; 11infotech follow-up internal team sync)
> **Source**: Completeness Check: Next Steps; 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — completeness-check.md
> **Current status in KB**: Marcus wrote a detailed doc; Minh reviewing for team presentation; coverage at risk while Markus is on support portal migration.
> **Proposed update**: **2026-04-29** — Re-prioritized as Flamingo's top initiative. Smart booking explicitly paused; other work freed up. Multi-layer rollout strategy clarified:
>  - **Layer 1** — Provider-level config (UI toggle + schema change). Adds a "always-expect item types" flag per supplier × doc type. Already partly in review (Markus + Nishant); ships without behavior until enabled. Targets simple suppliers (Sunny Cars, FirstTec).
>  - **Layer 1.5** — Provider rules for harder suppliers (e.g., Hotelbeds) where a hotelbeds item often appears as an extracted booking inside a voucher/virtual document.
>  - **Layer 2** — Historical lookup against past trips. Heavier code; broader coverage (e.g., ATI). Markus already prototyped scripts for the analysis.
>  - **Layer 3 (potential)** — Decision tree / AI over historical data for residual cases.
>
>   Confidence concerns: Oleksii flagged the "black box" risk that no one knows where the layer ladder ends. Goal trimmed: cover top ~10–20 suppliers (~80% volume), accept that some long-tail suppliers may be handled via ops workflows. Markus has only ~2 weeks left before rotating to support portal — knowledge-transfer is the binding constraint. Engineering-only alignment session: Apr 30 morning (Markus, Minh, Sascha, Oleksii). Product/EM follow-up: Monday May 4. Severity argument from Kristina: ~30% of all customer support cases are document-related; current "AI hallucination" close-outs in Salesforce suggest ops are dismissing real cases (resolution time ~3 min). Bringing this down should move NPS materially. (Source: Completeness Check: Next Steps)
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — api-outsourcing.md
> **Current status in KB**: Vendor signed; adapter work started; Talha assigned; first integrations Agent Trails + Thompson; bi-weekly status with Robert.
> **Proposed update**: **2026-04-29** — First formal joint working session with 11infotech CEO Charlie + the Tourlane team (Pedro, Aliaksei, Claudia, Talha, Nishant). Outcomes:
>  - Confirmed: 11infotech's gateway is a Tourlane-dedicated deployment (not shared SaaS).
>  - Strategy shift: Tourlane proposed redesigning the API contract end-to-end rather than fixing 22 individual points. Charlie agreed in principle.
>  - Tourlane's reference REST-style spec to be shared as PDF (export from Confluence, rename "ondisview" → 11infotech). RPC-vs-REST style is negotiable; data-model consistency is the actual ask.
>  - Operational decisions: 5 min TTL for search keys, 15 min recheck-to-book (configurable per Tourlane). 10s server-clock skew window kept for now. New auth signature flow understood (similar to hotelbeds — sign each request, no separate API-key rotation needed).
>  - Operational agreement: when a supplier doesn't return mandatory fields, 11infotech omits the optional ones and tags the supplier as not meeting the contract; static-data top-up handled on Tourlane side.
>  - Communication consolidates on Microsoft Teams (a single shared channel, no DMs). Slack-with-external isn't possible. For large-scale review cycles (22-point feedback) Aliaksei pushed for email + CC to keep it visible — Claudia will draft.
>  - Risk: Charlie did not appear to track restful/RPC distinction; future technical sessions should pull in 11infotech's API lead.
>  - Next: 11infotech sends revised API tomorrow (Apr 30); Tourlane sends its API spec PDF; follow-up call Mon/Tue (May 4–5). Decisions about long-term contractual direction parked until Karen returns Monday. (Source: 11infotech – Tourlane; 11infotech follow-up internal team sync)
> **Source**: 11infotech – Tourlane; 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — expedia-integration.md
> **Current status in KB**: Two-phase launch plan; gradual rollout aligned with Wetu replacement; legal TnCs in flight.
> **Proposed update**: **2026-04-29** — Production-access slippage risk surfaced as a strategic concern. Today the team is fine; in roughly a month it becomes a hard blocker for C2 deliverables across Spaeti and Mochi. Claudia raised that the implicit decision to also use **Expedia Geography API** for destinations/areas (not just accommodation content) was never formally taken — she felt it was treated as obvious by engineering. Pedro framed this as a contained risk (geo shapes only) but agreed it should be called out explicitly in the geography RAPID and surfaced to leadership before C2 planning. Tx feedback on staging Expedia content has been positive overall; vertical/portrait images flagged as poor in cropping; descriptions still need work. (Source: Completeness Check: Next Steps — second half catalog/destinations discussion)
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — wetu-deprecation.md
> **Current status in KB**: Endpoint specs nearly complete; migration steps next; Mochi structure unclear.
> **Proposed update**: **2026-04-29** — Mochi/Albatross team is reportedly splitting in two: one half on Wetu deprecation, the other on the "Route Builder" service (the new TP2 trip-generation pipeline that consumes call transcripts → A/B/C/D points → transports → accommodation recommendations). Ownership and contact points on Mochi side are still unclear — Gregor is sick again, Robert's TP2 architecture decision paper from last Thursday was never shared with Spaeti. Risk: Mochi may build Route Builder against deprecating APIs; Spaeti needs to proactively steer them toward the catalog/destinations endpoints we're shipping. Open question whether accommodation-recommender output needs to include rates/availability or only static data — three scenarios outlined by Pedro/Kiryl, alignment pending with the Mochi technical lead (TBD). Veto-ID removal from accommodation endpoint response: confirmed Trip Planner side concern, not Spaeti's. (Source: Completeness Check: Next Steps — second half; Daily Späti)
> **Source**: Completeness Check: Next Steps; Daily Späti.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — cycle-2-planning.md
> **Current status in KB**: 5 engineers, max 3 concurrent topics; bi-weekly Robert sync; RAPID for destination block.
> **Proposed update**: **2026-04-29** — Flamingo C2 picture (~4 sprints, May–June, 3+ public holidays):
>  - Smart Booking: tech prep M (2–3 sprints), core logic + edge cases M–L (~4 sprints), itinerary email re-enable S–M, post-launch S → won't fit fully; only foundation realistic.
>  - Completeness Check: now top priority for the cycle, layer-1 ships first, layer-2 historical lookup before Markus rotates.
>  - Documents Dashboard / classification / removal of outdated docs / new supplier onboarding for dashboard rollout: still ambiguous; Aliaksei to extract clarifying questions from Christina (suppliers in scope, classification-rate target ≥95%?, scope of outdated-doc removal beyond Sunny Cars).
>  - Catalog management remains underspecified — definition needs to come from Pedro/Claudia/Kiryl.
>
>   Spaeti C2 picture: Wetu deprecation top priority; Expedia integration ongoing; API outsourcing ongoing low-touch; catalog management contested as 3rd slot. Aliaksei + Kiryl finalizing Spaeti roadmap Apr 29–30. C2 roadmap finalization deadline: Monday May 4. (Source: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps; Daily Späti)
> **Source**: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps; Daily Späti.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**: **2026-04-29** — Cycle 2 commitment landscape: Completeness Check elevated to top priority with explicit pause on smart-booking delivery; smart-booking foundation (technical prep, core-logic spike) may still start in parallel since Markus + Minh own completeness-check finalization while Sascha is on infra week. Markus rotates off Flamingo to support-portal migration in ~2 weeks; knowledge-transfer concentrated into PR walk-throughs and one engineering alignment session (Apr 30). Documents Dashboard product-vision/discovery work owned by Kristina (PM) — engineering input limited to feasibility. Outdated-document removal feature is implemented but only validated for Sunny Cars; broader rollout requires per-supplier audit first. (Source: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps)
> **Source**: Flamingo – Finalize Cycle 2 Delivery Planning; Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — destinations.md
> **Proposed update**: **2026-04-29** — Strategic risk surfaced: relying on Expedia Geography API for area/geo data introduces a second axis of Expedia dependency on top of the (already-decided) accommodation content one. Decision was never formally taken; Claudia is now requiring it to be made visible in the destinations/RAPID document and flagged to leadership before C2 planning. Mitigation framing: alternative geo-data providers exist if needed. Mochi Route Builder will need destination data; specific access pattern (rates included? static only?) still being scoped between Pedro/Kiryl and the still-unidentified Mochi technical lead. (Source: Completeness Check: Next Steps — second half)
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Review Claudia's draft email to Charlie before it goes out
> **Description**: Claudia is drafting a wrap-up email to Charlie summarizing the 11infotech kickoff: action items, the API spec PDF, expectations for next session. She agreed to circulate it on the Slack implementation channel for alignment before sending externally. Read it, push back on wording so the ask (review our spec → propose data-model alignment, do **not** just patch the existing endpoints) is unambiguous.
> **Due**: 2026-05-01
> **Priority**: p1
> **Source**: 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Bring Christina (Kristina) the open questions on Documents Dashboard milestones
> **Description**: The "Improve documents dashboard / classification / removal / new supplier onboarding" cluster on the Flamingo C2 roadmap is too generic for engineering to size. Compile the open questions from yesterday's Flamingo planning (which suppliers in scope, target classification rate, scope of "remove outdated documents" beyond Sunny Cars, what "Product Vision & Discovery" actually delivers) and resolve them with Kristina before Monday's planning checkpoint.
> **Due**: 2026-05-04
> **Priority**: p1
> **Source**: Flamingo – Finalize Cycle 2 Delivery Planning.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Join Monday completeness-check product/EM sync after engineers align
> **Description**: Engineering-only alignment runs Apr 30 morning (Markus, Minh, Sascha, Oleksii). The follow-up product+EM sync is Monday — purpose is to lock the C2 plan: who owns what after Markus rotates, how Layer 1 / 1.5 / 2 sequence, what the realistic supplier-coverage commitment is (likely ~10–20 suppliers / ~80%). Come prepared with the resourcing question — does Minh take over driving, does Sascha free up part-time?
> **Due**: 2026-05-04
> **Priority**: p1
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Surface Expedia-geography dependency to leadership before C2 planning
> **Description**: The team has implicitly built C2 plans assuming Expedia Geography API will be the geo-data source for Wetu replacement (Spaeti) and Route Builder (Mochi). Claudia wants this called out explicitly so Karen sees it before sign-off. Heads-up post in the leadership Slack channel + add the Expedia-geo dependency as a named risk in the Wetu/destinations RAPID. Frame it as: "if Expedia production access slips beyond ~1 month, two teams' C2 commitments are at risk."
> **Due**: 2026-05-04
> **Priority**: p1
> **Source**: Completeness Check: Next Steps — second half.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Identify the Mochi technical contact for Route Builder
> **Description**: Mochi/Albatross is splitting into Wetu-deprecation and Route-Builder sub-teams. Gregor is unwell, Robert's TP2 architecture decision paper was never shared, no one knows who Spaeti should be aligning with on the data-access pattern (does Route Builder need rates + availability, or only static accommodation/destination data?). Poke Gregor for the doc; if no reply, ask Robert directly. Goal: a named contact and a written answer on the data scope before C2 starts.
> **Due**: 2026-05-04
> **Priority**: p2
> **Source**: Completeness Check: Next Steps — second half.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Sync with Karen on Monday on 11infotech relationship
> **Description**: The internal posture in yesterday's kickoff was deliberately reserved ("listen first, no commitments") because Karen is the contractual decision-maker and was out. Brief her Monday on: gateway = Tourlane-dedicated, agreed direction is API redesign not point-fixes, comms moved to Teams, follow-up call Mon/Tue, realistic risk that 11infotech may not be able to drive the redesign without Tourlane handholding. Ask her to confirm contractual direction.
> **Due**: 2026-05-04
> **Priority**: p1
> **Source**: 11infotech – Tourlane; 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Make sure the 11infotech API spec PDF gets shared with Charlie
> **Description**: Pedro will export the Tourlane reference API spec from Confluence to PDF and rename internal "ondisview" references to 11infotech terminology before sending. Track that this lands in the implementation Slack channel and that Claudia attaches it to her formal email to Charlie. Don't just leave the spec in Confluence — Charlie/11infotech can't reach internal Confluence.
> **Due**: 2026-05-01
> **Priority**: p2
> **Source**: 11infotech follow-up internal team sync.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Finalize Spaeti C2 roadmap with Kiryl
> **Description**: Catch up with Kiryl today and tomorrow (Apr 30 / May 1) to lock the Spaeti side of the C2 roadmap (Wetu deprecation + Expedia + API outsourcing + catalog) before Monday's broader planning checkpoint. Make sure Mochi's still-unspecified Route-Builder data needs are explicitly flagged as "out of cycle 2 unless they tell us soon" so we don't get blindsided.
> **Due**: 2026-05-01
> **Priority**: p1
> **Source**: Daily Späti; Completeness Check: Next Steps — second half.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Follow up with Sascha on infra-week vs Apr 30 alignment session
> **Description**: Sascha is on infra-guild duty this week. Kristina suggested swapping a day so he can join the Apr 30 engineering alignment on completeness check. Confirm with Sascha whether he can swap or whether the engineering-only session goes ahead without him (Markus + Minh + Oleksii) and Sascha catches up in the Monday session.
> **Due**: 2026-04-30
> **Priority**: p2
> **Source**: Completeness Check: Next Steps.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Push Mochi to create C2 placeholder tickets for catalog/Wetu touchpoints
> **Description**: Spaeti agreed in standup that even empty placeholder tickets on Mochi's board (one per catalog/destination touchpoint) would help during daily standups so we can see where their work crosses ours. Either ask Christina to ping the Mochi PM, or do it directly if that's faster.
> **Due**: 2026-05-04
> **Priority**: p3
> **Source**: Daily Späti.
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Yesterday was a pivot day for two big workstreams. **Flamingo formally re-prioritized Completeness Check to the top slot** and paused smart booking delivery for cycle 2 — driven by Kristina's "step back" call and the binding constraint that Markus rotates off in two weeks. Markus's layered approach (provider config → provider rules → historical lookup) is now the de-facto plan, with engineering-only alignment Apr 30 and a product+EM follow-up Monday. **11infotech had its first real working session with their CEO**: Tourlane proposed redesigning the API contract end-to-end and Charlie agreed in principle, but the team flagged that the technical depth on 11infotech's side needs an API lead in future calls. Pedro and Claudia will drive a formal email + PDF spec hand-off before next Mon/Tue's follow-up call. The third notable thread is a **previously-implicit decision being made visible**: relying on Expedia Geography API for destination/area data is now explicitly flagged as a risk that needs Karen's awareness before C2 planning closes Monday — Claudia escalating. Action lists for Aliaksei converge on Monday May 4 as the hard checkpoint.
