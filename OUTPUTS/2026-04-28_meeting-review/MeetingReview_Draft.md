# Meeting Notes Review — 2026-04-28 (analyzing meetings from 2026-04-27)

## Meetings Analyzed
- Completeness Check Follow-up (10:00–10:45, Minh + Aliaksei + Veronica)
- Aliaksei / Veronica 1:1 (10:30–11:00)
- Quarter 2 planning alignment (Flamingo) (11:30–11:55, with Kristina, Sascha, Christine, Ron, Robert, Steph)
- 11infotech API – align on next steps (14:30–15:15, Aliaksei, Pedro, Nishant, Talha, Claudia)
- Quarter 2 planning alignment (Späti) (15:30–16:00, with Christine, Ron, Robert, Claudia, Pedro)

---

## Knowledge Base Updates

### People

#### [P1] NEW — veronica-garcia.md
> **Current context**: NEW — not yet in KB. (Note: Silvia's KB file currently has Veronica's email by mistake — see [P9].)
> **Proposed addition**: Senior engineering leader (one of Aliaksei's stakeholders / skip-level). Email: veronica.garcia@tourlane.com. Drives delivery quality discussions: questions are framed around "are projects properly discovered, signed-off, and ready to start?". Sees Cycle 1 as having been bumpy in certain teams and is pushing to avoid the same pattern in C2. Strong views: WIP limit ~6 projects across Spaeti+Mochi (not 10–12), max 2 projects per team in parallel, priority decisions need to happen earlier in the cycle (not on the last days), engineering owns delivery and must escalate when priorities aren't clear. Believes ownership of priority compilation should happen in a single forum where Spaeti, Mochi and Robert all sit together — currently it's "ping-pong via Robert". On Wetu deprecation: position is unambiguous — it's a clear C2 priority and "lost in translation" if Sylvia is still uncertain. On the previous quarter: Tourlane took in 42 initiatives; she suspects 32 with focus would have shipped more cleanly. Asked Aliaksei to bring his observations on C1 delivery and C2 health into their Tuesday session.
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27); Completeness Check Follow-up (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] NEW — nishant-tomer.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**: Engineer on Spaeti (Supply Platform). Email: nishant.tomer@tourlane.com. Working with Talha on the 11 Infotech API integration evaluation. Strong technical assessment: "Below average. Not a secret anymore." Flagged that the API isn't really an API gateway — it's a thin proxy that forwards raw supplier responses; has no error handling (returns 500 on missing/empty fields); is RPC-shaped over HTTP; and the partner has rejected several capability requests outright (e.g., proper get-booking endpoint). Also raised a "smell test" — partner appears to be doing the minimum to close the deal and not engaging on structural feedback. Drafting a document of issues + needed changes that we'll send to 11 Infotech. Style note: communicates directly and bluntly; will speak up early when partner relationships look broken.
> **Source**: 11infotech API – align on next steps (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — claudia-tita.md
> **Current context**: PM on Spaeti. Driving Expedia certification, 11 Infotech rollout, content quality, and team morale.
> **Proposed addition**:
> - **2026-04-27** — On 11 Infotech: framed the strategic question well — costs ~€22,000/month for the gateway module ("we're paying a lot for relatively little value"). Has the relationship handle: Karen (Tourlane side, on vacation but reachable) + Charlie (11 Infotech CEO). Plan: short, small-circle check-in with Charlie this week (not waiting until Monday for Karen) before sending the full spec; explicitly wants to avoid Charlie pulling 20 unknown people onto the call. Stance: no preference between "fix this API" and "rewrite per our spec" — that's an engineering call; her job is to manage the partner relationship and any commercial implications. Reminded the room that the original proposal had 11 Infotech providing the spec, not us — so reframing requires a partner conversation. On Q2 planning (Späti): added catalog management as an initiative scope but flagged it will only fit if Wetu/V2 deprecation leaves capacity; agreed to break catalog scope into more granular milestones once Pedro's gradual-rollout decision is settled.
> **Source**: 11infotech API – align on next steps (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer; owns catalog system, Wetu deprecation, destination/area architecture.
> **Proposed addition**:
> - **2026-04-27** — On 11 Infotech: most pragmatic voice in the room. Pushed back on the "smell test" framing — argued (a) our own adapter API isn't gold standard either, (b) the partner has actually delivered changes when asked and met deadlines, (c) lack of technical acumen ≠ bad faith, and we'd save more by helping them improve than by replacing them. Said the cleanest path is to write down our API contract and hand it to them, accepting we'll do hand-holding either way (we already are). Made one explicit concession: he wouldn't oppose keeping their RPC-over-HTTP shape *if it's consistent*, instead of forcing REST. Will compile review notes from his own pass and share with Nishant. Will help craft the partner-facing message but flagged he doesn't fully trust himself to do it without bruising the relationship.
> - **2026-04-27** — On gradual rollout for Expedia / catalog: had a long talk with Kiryl. Was not aware that gradual rollout adds significant complexity — and the original problem it was solving (no way to see Expedia content in staging) can be solved differently (e.g. just get Expedia data into staging properly). Will propose alternative solutions rather than building gradual-rollout machinery into catalog.
> - **2026-04-27** — On V2 / Wetu deprecation in C2: needs sign-off from Karen on the destination-launch limitations RAPID this week. Already has Gran's first pass; finalizing impact numbers (which destinations are affected, by how much).
> **Source**: 11infotech API – align on next steps (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — marcus-klemann.md
> **Current context**: Flamingo developer (Lambus contractor). Will rewrite support portal in React under Foxes for C2.
> **Proposed addition**:
> - **2026-04-27** — Confirmed allocation: 6 of 8 weeks of C2 in the Foxes team for the user-portal/support-portal migration. Will be tracked under the Foxes C2 tab — Flamingo doesn't book the time on its plan. Goal is for Marcus to come back to Flamingo afterwards (Kristina explicitly said this in the planning meeting — "still need to discuss" but that's the intent). Implication: completeness-check ownership and rollout has to be picked up by someone else for that window — Kristina raised hands internally already; "it's a huge and very complex product" and the team needs to formally assign a successor before C2 starts.
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — sascha-burku.md
> **Current context**: Flamingo engineer, leading smart booking investigation.
> **Proposed addition**:
> - **2026-04-27** — Approximately half of C2 (3 weeks of an 8-week cycle) goes to Infrastructure Guild work — building the general infra setup (not Flamingo-specific). The team-level rollout of that infra setup happens in C3.
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — minh-nguyen.md
> **Current context**: Flamingo engineer. Development goal: become go-to person on Completeness Check.
> **Proposed addition**:
> - **2026-04-27** — Drove the Completeness Check follow-up session for Veronica. Walked through the new provider-based rule design end-to-end, used Sunny Cars and First D as worked examples, and answered Veronica's design challenges live. Demonstrates he is now the second person beyond Marcus who can defend the design — relevant context for the post-Marcus ownership question.
> **Source**: Completeness Check Follow-up (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — kristina-lamza.md
> **Current context**: Flamingo PM.
> **Proposed addition**:
> - **2026-04-27** — Walked the Flamingo C2 plan with leadership. Smart booking MVP is the main bet — limited to hotel beds for the first version, accepts some technical debt to deliver sooner, leadership round 2 sign-off still open and will be scheduled for next week. Phase 5 (delivery) explicitly added as a visibility-only item until legal sign-off lands. Acknowledged the legal angle (flight-operator price-rebooking precedent) is open and being checked. Added a separate C2 line item: define overall vision for the Documents domain (sustainable supplier/document onboarding, more responsibility to TX/Supply teams, simpler path for the ~50% of suppliers with only 1–2 document types). Flagged she still needs to figure out internal owner for completeness-check rollout while Marcus is in the Foxes team.
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] FIX — silvia-torre.md
> **Current context**: KB file lists email as `veronica.garcia@tourlane.com`, which is wrong — that's Veronica's email. Sylvia's actual surname is "de la Torre" per the file header.
> **Proposed addition**: Correct the email to `silvia.delatorre@tourlane.com` (or whatever her actual address is — flagging for Aliaksei to fill in correctly). Also add: as of 2026-04-27 Sylvia was reportedly "not sure how high a priority Wetu deprecation is" — Veronica strongly disagrees and considers this a translation/communication gap, not a real disagreement. Aliaksei to align with Sylvia this week.
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — api-outsourcing.md
> **Current status in KB**: 11 Infotech partner signed; integration starts in C2; Talha on adapter; Pedro had concerns; risk-management plan agreed (keep ~5 critical adapters in-house); first integrations Agent Trails / Thompson.
> **Proposed update**:
> - **2026-04-27** — Material reset on direction. Engineering assessment after first hands-on with the deployed API: below acceptable bar — RPC over HTTP rather than REST; no error handling (500 on bad input); the supposed "gateway" forwards raw supplier responses for several flows (e.g. get-booking), pushing supplier complexity back onto Tourlane; partner has outright rejected several improvements. Communication is also a problem: technical contacts are not engineers, replies are slow, language is hard to parse, and there's a recurring pattern of "not possible" → push back → eventually possible. Cost context surfaced: ~€22,000/month for the gateway module; sentiment in the room is we are not getting that value today. Decision: do not just go with the flow. Two-track plan agreed:
>   1. **Technical**: Nishant + Talha compile a comprehensive list of issues + the complete spec we want them to implement (including get-booking, error handling, authentication, consistent shape — RPC is acceptable if it's consistent). Pedro reviews and adds his own notes. We send the spec, ask them to implement, and explicitly tell them why the current API is a no-go.
>   2. **Relationship**: Claudia takes a short, small-circle check-in with Charlie (11 Infotech CEO) this week — without his usual 20-person retinue — to give heads-up, ask him to pause new supplier outreach, and gauge openness to the redesign. Karen (Tourlane relationship owner) is on vacation back next Monday; Claudia will brief her short rather than wait. We also formally request a direct line to their actual developers.
>   In parallel: Aliaksei + Pedro + Claudia to investigate exit-clause options if the response is unsatisfactory. WIP impact for C2 Späti roadmap: optimistic scenario was "onboard vendor + enable Agent Trails + 3 more"; that is now de-risked downward, with a clearer answer expected after the Charlie call. The team has paused investing further on speeding up onboarding until the API direction is resolved.
> **Source**: 11infotech API – align on next steps (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — completeness-check.md
> **Current status in KB**: Marcus owns design; Minh becoming the second expert and prepping a slideshow.
> **Proposed update**:
> - **2026-04-27** — Design pivot now articulated end-to-end. Old approach (historical evidence: "this item required document X in past trips") was too noisy and supplier-specific to generalize across ~70–80 DMCs. New approach is layered:
>   - **Layer 1 (provider-based rules at item-type level)** — exploits a new one-to-many connection between trip-item supplier and DMC (e.g., First D → ATI; Sunny Cars → its actual provider). For a given (provider, item-type) pair we declare which document types are required (e.g., "for First D extra-cost items, expect a voucher"). Rules are configured via a flag/multi-select per supplier, can be enabled per supplier independently of legacy logic, and use the existing case-creation flow downstream — only the gating decision changes. Many candidate rules already drafted from data analysis.
>   - **Layer 2 (historical evidence)** — kept for the more complex, item-level cases that don't fit a provider-rule pattern. Comes after Layer 1.
>   - **Future**: a combined version that improves the trip-completeness reporting itself.
>   - Implementation status: core logic close to done, expected live within ~2 weeks; first short-list of suppliers ready for rollout in same window. Veronica raised an important counter-example (e.g. "First D doesn't appear in Saudi Arabia, Cook Islands, Zimbabwe, Namibia") — once the tool clarified that the source-of-truth is what's actually in the trip plan (not "every trip"), her concern was resolved, but it underlines that rule semantics need to be precisely documented.
>   - **Ownership risk**: Marcus is in the Foxes team for 6 of 8 weeks of C2 — Kristina to assign a continuity owner for completeness-check rollout (Minh has demonstrated he can defend the design; viable candidate). Flagged in C2 planning as an open concern.
> **Source**: Completeness Check Follow-up (2026-04-27); Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — cycle-2-planning.md
> **Current status in KB**: 2x more planned than capacity; WIP limit of ~3 concurrent topics with 5 engineers; Wetu, API outsourcing, third slot contested.
> **Proposed update**:
> - **2026-04-27** — Process gap explicitly named. Aliaksei told Veronica: at this point in the cycle (~4 days from C2 start) Spaeti has ~8 initiatives in play, only some have proper discovery + sign-off + solution-design artifacts. Flamingo's are more self-contained; Spaeti's are still being written. Several initiatives (notably Wetu deprecation and Support Portal Migration) hinge on other teams' capacity that hasn't been formally committed. Veronica's diagnosis:
>   - We are deciding priorities too late. The "Quarter Planning Alignment" sessions are happening 4 days before the cycle starts, with Spaeti and Flamingo split into separate sessions and Robert as the only common participant — a ping-pong setup, not a forum.
>   - WIP is too high. Acceptable is ~2 projects per team in parallel; with 4 teams that's a system-wide WIP of ~6, not the current ~10–12.
>   - We took 42 initiatives last quarter; even now we don't know if we delivered them all. Suggestion: aim for ~32 next time, finish them with less stress.
>   - Engineering owns delivery and must escalate when priorities aren't clear. The pattern of "we kept investing because we assumed it was a priority on Mochi side" → "turns out it isn't" is the failure mode.
>   - Cross-cutting input expected: Aliaksei is to bring concrete observations on C1 delivery + C2 readiness into the Tuesday (2026-04-28) session.
> - **2026-04-27 (Späti C2 alignment)** — Wetu/V2 deprecation confirmed as the highest priority for both M1 (TP2.0 enabler) and M4 (margin via doubled supply). Impact-calculation ownership: Späti leads the *delivery*, Mochi owns the *impact* (TP2.0 admin/quoting savings + business enablement / new-destination launches). Ron pushed for reframing impact as M1 since M4 numbers are too uncertain. Idea floated by Sylvia (per Pedro): create a small dedicated focus group from Späti + Mochi to work on V2 together for ~a month — Aliaksei + Sylvia to discuss this week. Catalog management work tentatively kept in C2 but explicitly conditional on remaining capacity after V2 + API outsourcing; Christine asked the catalog scope to be either made concrete (named user use-cases) or removed.
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27); Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — wetu-deprecation.md
> **Current status in KB**: Spaeti endpoints nearly specified; Gregor unavailable until mid-May; rollout planning underway.
> **Proposed update**:
> - **2026-04-27** — Cross-team alignment risk surfaced. As of Friday Sylvia (Mochi EM) was "not sure how high a priority Wetu deprecation is"; Veronica is firm — clearly C2, partly because Gregor is leaving, partly because deferring compounds. Plan-of-record is still: Späti delivers the catalog endpoints, Mochi rewires Trip Planner. Robert confirmed at the Späti C2 alignment that V2 deprecation is one of Mochi's "highest priorities" — they're not done defining their input but it's not the only thing on their plate. Pedro's view: timelines need to overlap heavily ("when we build the search endpoint, they need to be working on consuming it") — proposed a small joint focus group of 1–2 engineers from each side for a focused month on V2 work; Aliaksei + Sylvia to align this week. Gradual-rollout idea was de-scoped after Pedro's talk with Kiryl: original problem (no Expedia content visibility in staging) can be solved by fixing staging data instead of building gradual-rollout machinery into catalog. RAPID document for the destination-launch block lands this week; Gran already did a first pass; Pedro finalizing impact numbers.
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] UPDATE — support-portal-migration.md
> **Current status in KB**: Option 4A only (auth section to CFA); Markus assigned full-time; joint workshop needed; risk to completeness-check coverage.
> **Proposed update**:
> - **2026-04-27** — Reality check. Marcus's allocation confirmed at 6 of 8 weeks in the Foxes team for C2; will be tracked under Foxes C2 tab (not Flamingo's). Aliaksei flagged in 1:1 that Foxes don't currently have engineering capacity to invest in this project — they're finishing existing C1 commitments — so the migration is moving in fits and starts. Aliaksei is filling gaps personally but described the dynamic as "managers solving engineering problems" with a lot of back-and-forth on Foxes-side priorities. Estimated outcome: planning needs another couple of weeks of alignment beyond the C2 start; some of the work will slip into May regardless. Marcus expected to return to Flamingo after C2.
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27); Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**:
> - **2026-04-27** — Flamingo C2 picture, top to bottom: smart-booking MVP is the headline initiative, scoped down to hotel beds only for v1. Edge-case logic (e.g. "what if alternate is 2% more expensive but available?") still being decided — Kristina indicated she'd lean toward booking the available option even at slight cost increase. Itinerary email feature added/restored — needed because increased hotel-beds usage means more "main supplier doesn't know where the customer is" cases; infrastructure exists from past attempts; quick scope. Tracking + monitoring required for legal compliance and for measuring counterfactual savings ("if we hadn't switched, what was the loss"). Legal angle: precedent of a flight operator that re-booked at lower rates after customer confirmation triggered a court case — Kristina has summarized the use cases and is awaiting feedback from legal; data retention period (2 vs 5 years) also TBD. New C2 initiative: Documents-domain overall vision — sustainable supplier-document onboarding, simpler model for the ~50% of suppliers with only 1–2 document types, more responsibility to TX/Supply teams. New US dark-rollout supplier brings ~15 new documents (train, activities, accommodations) — concrete catalyst.
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — catalog-supply-platform.md
> **Proposed update**:
> - **2026-04-27** — Späti C2 picture: Wetu/V2 deprecation is now the explicit #1 priority for both milestones; API outsourcing #2 (de-risked downward pending the 11 Infotech rework decision); catalog work #3 and conditional. Catalog management scope being formalized (TX-driven curation rules, manual block/unblock, destination enable/disable), but Christine asked us to either name concrete user use-cases or drop it from C2. Catalog as the single source of truth for accommodations: Albatross will receive accommodation-level data via the data warehouse pipeline (already in progress), not a direct integration. Gradual-rollout work for Expedia/catalog dropped in favor of better staging data. Documents-domain vision is being led from the Flamingo side ([PD1]) but has direct implications for supply onboarding workflow.
> **Source**: Quarter 2 planning alignment (Späti) (2026-04-27); Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Bring concrete C1 delivery + C2 readiness observations to Tuesday session with Veronica
> **Description**: Veronica asked for honest, data-backed observations on (a) how C1 actually flowed (what's slipping into C2), (b) how healthy C2 looks today and what would make committing to a delivery timeline realistic, and (c) what process changes (priority forum, WIP limit, earlier discovery) you'd push for. She wants observations, not solutions packaged as questions.
> **Due**: 2026-04-28
> **Priority**: p1
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Align with Sylvia this week on Wetu deprecation as a clear C2 priority
> **Description**: Veronica flagged the disconnect — Sylvia was uncertain on Friday, Veronica is unambiguous it's a C2 priority. Have a direct conversation with Sylvia: agree it's in for C2, agree on the joint Spaeti+Mochi focus-group idea Pedro proposed (1–2 engineers from each side, ~a month of co-located work), and lock the timing overlap (Mochi consumes catalog endpoints as Späti delivers them).
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27); Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Drive the 11 Infotech reset — review Nishant's spec, send to partner
> **Description**: Nishant + Talha drafting comprehensive issues list + the API spec we need them to implement; Pedro adding his own review notes. Your role: review the combined doc end-to-end, coordinate with Pedro on tone (he flagged he doesn't fully trust himself on partner-relationship phrasing), and align with Claudia on how/when to send. Include explicit asks: direct contact with their actual developers, not intermediaries; consistent API shape (RPC acceptable if consistent); proper error handling; real get-booking. Also include the "why we cannot continue with the current API" framing.
> **Due**: 2026-05-01
> **Priority**: p1
> **Source**: 11infotech API – align on next steps (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] With Pedro and Claudia, surface the 11 Infotech exit options
> **Description**: Decision blocked: contract is signed and exit clauses are unclear. Run a small parallel track to (a) read the contract for termination/renegotiation paths, (b) sketch a Plan B (which suppliers must stay in-house, what would in-house implementation cost in Spaeti time, which competing vendor was second), and (c) document the "go/no-go" criteria from the partner's response to our spec. Goal: when the response from 11 Infotech comes back, we can decide quickly instead of starting due-diligence then.
> **Due**: 2026-05-08
> **Priority**: p1
> **Source**: 11infotech API – align on next steps (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Push Kristina to assign a Completeness Check continuity owner before C2 starts
> **Description**: Marcus is in the Foxes team for 6 of 8 C2 weeks; rollout is going live in ~2 weeks. Minh has demonstrated he can defend the design — viable candidate. Confirm with Kristina who owns rollout, supplier onboarding, and any rule debugging during Marcus's window.
> **Due**: 2026-04-30
> **Priority**: p2
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27); Completeness Check Follow-up (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Propose a single C2-priority forum with Spaeti, Mochi, and Robert in the same room
> **Description**: Veronica's main process critique: priority decisions ping-pong via Robert because Spaeti and Mochi planning alignments are separate sessions with no shared participant. Propose a recurring (or at least one-off pre-cycle) joint session and bring the proposal into Tuesday's session. Also propose a WIP target of ~2 projects/team (~6 system-wide) and earlier discovery sessions inside the previous cycle.
> **Due**: 2026-04-30
> **Priority**: p2
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Pedro: support catalog scope decision — concrete use-cases or drop from C2
> **Description**: Christine asked to either name concrete TX/curation use-cases for catalog management (which curation rule changes? destination enable/disable? manual block/unblock? in what order?) or remove it from the C2 plan. Sit with Pedro this week, decide. This unblocks Claudia's roadmap finalization for Späti C2.
> **Due**: 2026-05-01
> **Priority**: p2
> **Source**: Quarter 2 planning alignment (Späti) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Fix Sylvia's KB email and clarify her current position on Wetu
> **Description**: Internal hygiene: Sylvia's KB file currently has Veronica's email by mistake. Also add a note about Sylvia's reported uncertainty on Wetu priority (per Veronica) so it's traceable, then update again after the alignment in T2.
> **Due**: 2026-04-30
> **Priority**: p4
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Coordinate Foxes-side capacity for Support Portal Migration before C2 start
> **Description**: Foxes are finishing C1 commitments and don't have meaningful engineering capacity for the migration yet. Marcus joins them for 6/8 weeks but you flagged "managers solving engineering problems" as the dynamic. Get a direct read from the Foxes EM/lead on (a) which engineer is primary partner for Marcus, (b) what's their commitment week-by-week, (c) what's the realistic completion-of-Phase-1 date — accept that some of it slips into May.
> **Due**: 2026-05-01
> **Priority**: p2
> **Source**: Aliaksei / Veronica 1:1 (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Decide on documents-domain ownership and roadmap visibility for C2
> **Description**: Kristina added a C2 line item for "Documents-domain overall vision" — sustainable supplier-document onboarding, simpler 50%-of-suppliers path, US dark-rollout (~15 new documents) as forcing function. Decide with Kristina/Claudia: is this Flamingo-led, Späti-led, or joint? Should it be a milestone with specific deliverables for end-of-C2 or is it scoping/discovery only? Bring the answer into the next cross-team alignment.
> **Due**: 2026-05-05
> **Priority**: p3
> **Source**: Quarter 2 planning alignment (Flamingo) (2026-04-27)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

The dominant theme of 2026-04-27 was C2 readiness pressure surfacing across three angles: a senior leadership challenge from Veronica that the team is starting cycles with too many under-baked initiatives and priority decisions arriving too late; a vendor reset on 11 Infotech, where the API and the partner relationship are both materially below bar and a coordinated technical-spec + CEO-conversation response is being prepared this week; and Wetu deprecation being unambiguously confirmed by leadership as a top-2 C2 priority, but with Sylvia/Mochi alignment still wobbly and a joint focus-group proposal on the table. Smaller but real: Marcus is locked at 6/8 weeks in the Foxes team, leaving completeness-check rollout without a clear continuity owner; the Completeness Check redesign (provider rules at item-type level, configurable per supplier) is now articulated end-to-end and going live in ~2 weeks; and the Späti C2 plan has Wetu #1, API outsourcing #2 (de-risked), catalog work #3 conditional. The single most urgent thing on Aliaksei's plate is bringing concrete C1/C2 observations into Tuesday's session with Veronica.
