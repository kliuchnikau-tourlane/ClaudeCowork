# Meeting Notes Review — 2026-04-22 (analyzing meetings from 2026-04-21)

## Meetings Analyzed
- Smart Booking Tech Alignment (14:00–15:00, 7 participants: Sascha Burku, Kristina Lamza, Claudia Tita, Aliaksei, Kiryl Karetnikau, Pedro Alves, Minh Nguyen)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — pedro-alves.md
> **Current context**: Staff Engineer for backend teams. Owns catalog system design and rollout plan. Key person for Wetu deprecation and destination/area architecture.
> **Proposed addition**:
> - **2026-04-21** — Walked the team through the end-to-end smart booking data flow on a high-level diagram: Trip Planner sends trip with booking data fields (inventory IDs, mapping IDs, selected rate) → Booking Platform → new Accommodation Supply domain → fetches competing rates, compares, returns matches + uncertain alternatives for evaluation. Clarified that Booking Platform does NOT need catalog at runtime unless it's replacing an entire accommodation. Identified direct dependencies for smart booking: basic quoting (rates), competing offer lookup, and room/offer-level mapping; indirect dependency is inventory & supplier management (full supply domain). Suggested reframing MVP: replacing unavailable accommodations may be a simpler first use case than price optimization because it reuses the same integration capabilities — doesn't change the Spaeti scope, but makes gradual delivery easier. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — kiryl-karetnikau.md
> **Current context**: Tech Lead on Späti team. Currently working on Expedia certification items, ML image analysis, and MCP tooling.
> **Proposed addition**:
> - **2026-04-21** — Confirmed Spaeti's current priority stack: (1) Wetu/V2 migration — the top priority, will occupy the team for ~2 months because of heavy geographical-data dependencies; (2) API outsourcing onboarding with 11 Infotech — contract signed, work ramping up. Explicitly advised against any "temporary" smart booking solution built on legacy systems (accommodation search) — argued for building it properly in the new supply domain, even if it takes longer. Confirmed accommodation search API is NOT a strict dependency for Booking Platform's smart booking work — it's only tied to Trip Planner quoting; it will be replaced by newer recommendation search on Catalog once TP2 starts quoting. Noted room-level mapping today only maps 1–2 fields (mostly room description), returns a confidence indicator, and is not always precise — MVP can start with low-fidelity mapping and extend later. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — kristina-lamza.md
> **Current context**: Product Manager for Flamingo (Booking Platform). Actively driving support portal migration planning.
> **Proposed addition**:
> - **2026-04-21** — Joined smart booking tech alignment. Pushed on whether the hotel beds room-mapping logic living in accommodation search could be reused out of the box — confirmed with team that it cannot and that the feature needs to be built in the new supply domain. Asked about accommodation search deprecation timing and whether any other currently-used domains (get_accommodations, get_accommodation_offers) would also be deprecated. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — sascha-burku.md
> **Current context**: Tech Lead on Flamingo. Leading smart booking investigation.
> **Proposed addition**:
> - **2026-04-21** — Supported Aliaksei in framing smart booking MVP scope at the tech alignment. Position: if smart booking logic is to be built, do it properly in the new supply domain — no point extending the legacy accommodation search. Sascha's earlier technical research (done while Aliaksei was on vacation) served as Kristina's entry point into the topic. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — claudia-tita.md
> **Current context**: Product Manager on Späti team. Driving Expedia certification and API outsourcing.
> **Proposed addition**:
> - **2026-04-21** — At smart booking alignment, clarified milestone ownership: API outsourcing falls under Kiryl's milestone; accommodation search deprecation doesn't have a clear milestone home yet (candidates: content onboarding or agent optimization). Aliaksei asked so he knows whom to talk to for cross-team alignment. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — room-level-mapping-api.md
> **Current status in KB**: Confirmed providing proper room-level mapping for smart booking requires building the entire supply domain and migrating from Elephant — "quite a bunch of work." Team has simple-API assessment; challenge is the architecture around it.
> **Proposed update**:
> - **2026-04-21** — Scope confirmed with full team: mapping service today only maps on 1–2 fields (primarily room description → room description) and returns a confidence indicator — not always precise. For MVP, low-fidelity mapping is acceptable and can start without rates being passed in. To improve accuracy later, Booking Platform would need to pass search parameters/rates to the mapping endpoint, requiring a rate-fetch integration path. Still the critical technical blocker for smart booking. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — cycle-2-planning.md
> **Current status in KB**: Resource allocation: min 2 per topic, 5 engineers = max 3 concurrent topics. Wetu migration is #1, API outsourcing #2, third slot contested.
> **Proposed update**:
> - **2026-04-21** — Smart booking MVP confirmed technically infeasible for C2 without building the new supply domain first. Building the supply domain is "quite a bunch of work" and Pedro's estimate of 8 weeks was explicitly called "very optimistic" given geographical data dependencies and a competing destination-domain workstream (also needed for route builder). No productive path for Flamingo to build smart booking alone — would create non-scalable work that Spaeti would have to rework. Cycle planning kickoff is in 10 days. Aliaksei to take the priority decision back to milestone owners and Robert: either prioritize supply domain in C2/C3 or drop smart booking from the MVP scope. As a contingency, Aliaksei has reframed the initiative proposal (due end of 2026-04-21) as "MVP" rather than a hard commitment. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] NEW — smart-booking-logic.md
> **Current context in KB**: NEW — not yet in KB as its own project (currently tracked only under room-level-mapping-api.md).
> **Proposed addition**:
> ```
> # Smart Booking Logic
> Type: project
> First seen: 2026-04-21
> Last updated: 2026-04-21
>
> ## Context
> New decision engine on Booking Platform (Flamingo) that automatically selects the best supplier/room for a booking instead of blindly booking the DMC that Trip Planner quoted. Goal: move from supplier-specific bookings to equivalent-room bookings optimized for price and availability. Aliaksei is the milestone owner.
>
> ## Updates
> - **2026-04-21** — Agreed MVP scope for milestone 1: hotel beds only, only "top-up" rooms when mix-and-match is not yet reached (or exceeded), optimizing primarily for price (secondary: availability). Mix-and-match stays in Trip Planner for now (Spaeti may move it later, possibly cycle 3). Target: test the new booking flow end-to-end with minimal cross-system complexity. All other booking items continue to follow the current booking logic (not sent as part of the smart flow).
> - End-to-end flow (per Pedro's high-level diagram): Trip Planner sends trip with booking data fields → Booking Platform → new Accommodation Supply domain (does NOT exist yet) → fetches competing rates from suppliers, runs mapping logic, returns matches + uncertain alternatives → Booking Platform applies smart logic and sends booking requests as today (Zanox API for Booking.com, email for the rest).
> - Dependencies: direct — basic quoting (rates), competing offer lookup, room-level mapping (mapping service currently maps 1–2 fields, confidence-scored). Indirect — inventory & supplier management (needed to fully model supply domain).
> - Decisions: (1) do NOT extend the legacy accommodation search API for smart booking; (2) do NOT build a temporary solution on Flamingo side — Kiryl and Pedro both argued it would be non-scalable and require rework; (3) accommodation search deprecation is NOT a strict blocker (it's only tied to Trip Planner quoting via TP2); it will be replaced by new recommendation search on Catalog. Pedro suggested keeping "replace unavailable accommodations" in mind as a simpler first use case than price optimization, since it reuses the same integration capabilities.
> - Blocker: new supply domain does not exist. Building it is "quite a bunch of work"; 8 weeks considered optimistic. Competes with destination-domain work (also needed for route builder).
> - Next steps: Aliaksei submits MVP initiative proposal by end of 2026-04-21; takes priority decision back to other milestone owners and Robert before cycle planning (10 days out). Kiryl to share link to supply-domain planning docs for reference. (Source: Smart Booking Tech Alignment)
> ```
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — wetu-deprecation.md
> **Current status in KB**: Endpoint specs for catalog replacement nearly complete. Gregor unavailable until mid-May = bottleneck.
> **Proposed update**:
> - **2026-04-21** — Clarified dependency direction: accommodation search API shutdown is gated by TP2 beginning to quote against Catalog, NOT by smart booking. Booking Platform can build against the new supply domain even while accommodation search still exists for Trip Planner. Accommodation search will eventually be replaced by the newer recommendation search on Catalog. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — catalog-supply-platform.md
> **Current status in KB**: Pending architectural decision: invest in additional catalog capabilities vs. build supply domain. Everything not catalog is considered legacy.
> **Proposed update**:
> - **2026-04-21** — Direction reinforced at smart booking alignment: legacy systems (accommodation search, Elephant, ISPS, essium) will NOT be extended for new features — only updated to support migration steps. Smart booking logic must therefore be built in the new supply domain. Supply domain scope is broader than smart booking alone — also needed for proper rate processing, inventory & supplier management, and room-level mapping. Explicit warning from Kiryl: any temporary solution on Booking Platform side would be misaligned with the domain design and would need to be reworked. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — booking-platform.md
> **Current status in KB**: Smart booking: Sascha leading investigation; critical dependency on Spaeti room mapping API.
> **Proposed update**:
> - **2026-04-21** — Tech alignment produced a clear end-to-end flow for smart booking MVP and a shared understanding of the dependencies. Booking Platform's work is roughly: integrate with the (not-yet-existing) supply domain endpoint, store intermediate state while rates are fetched across items (can't send full booking request until all rooms are resolved), apply smart decision logic, add tracking data (what was originally quoted vs. what was actually booked, for later analysis — e.g., mix-and-match uplift). Remaining non-room items continue to follow today's booking logic. Team cannot productively start implementation until Spaeti delivers the supply-domain endpoint. (Source: Smart Booking Tech Alignment)
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Take smart booking prioritization decision to milestone owners before cycle planning
> **Description**: Discuss with other milestone owners and Robert whether the new supply domain (and therefore smart booking MVP) is a C2/C3 priority. If not prioritized, smart booking cannot land in C2 — need explicit trade-off decision. Cycle planning kickoff is in 10 days.
> **Due**: 2026-04-30 (before cycle planning kickoff ~2026-05-01)
> **Priority**: p1
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Confirm with Claudia where accommodation search deprecation lives as a milestone
> **Description**: Clarify whether accommodation search deprecation is under "content onboarding," "agent optimization," or another milestone so Aliaksei knows whom to coordinate with. Claudia was uncertain during the meeting.
> **Due**: 2026-04-24
> **Priority**: p3
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Submit smart booking MVP initiative proposal (end of 2026-04-21)
> **Description**: Submit initiative proposal for smart booking framed as MVP (contingent on supply domain work being prioritized). Aliaksei is milestone owner. Mentioned in meeting as due end of 2026-04-21 — verify it was submitted.
> **Due**: 2026-04-21 (verify/follow up)
> **Priority**: p1
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Collect supply-domain planning docs from Kiryl / Pedro and link in smart booking notes
> **Description**: Kiryl offered to share links to the supply-domain and related planning docs (Miro boards, one additional link Pedro called out). Add them to the smart-booking working space so the context is preserved for cycle planning.
> **Due**: 2026-04-24
> **Priority**: p3
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Ask Sascha to produce a concrete flow diagram for smart booking MVP
> **Description**: During the meeting Aliaksei noted he couldn't follow the current written description and asked for a graphical end-to-end flow. Pedro drew one at a high level; capturing a concrete version (including where Flamingo begins/ends and where Spaeti's supply domain begins) would anchor the next planning conversation.
> **Due**: 2026-04-28
> **Priority**: p2
> **Source**: Smart Booking Tech Alignment (2026-04-21)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Only one meeting yesterday, but it was a pivotal one: the smart booking MVP is technically feasible in concept but blocked on Spaeti building the new supply domain, which doesn't exist yet and is "quite a bunch of work" — Pedro called 8 weeks "very optimistic." The team explicitly ruled out both extending legacy accommodation search and building a Flamingo-only temporary solution. The accommodation-search-deprecation question turned out to be a dependency red herring — it's gated by TP2 quoting, not smart booking. With cycle planning kickoff in 10 days, the most important next step is a priority conversation with other milestone owners and Robert: commit to building the supply domain in C2/C3, or drop smart booking from the MVP scope.
