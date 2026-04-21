# Meeting Notes Review — 2026-04-21 (analyzing meetings from 2026-04-20)

## Meetings Analyzed
- Monthly Roadmap Session: Closing C1/2026 (11:00–11:25, 6 participants: Kristina, Sascha, Oleksii Mazurik, Minh, Markus, Aliaksei)
- [blocker] Alignment on Support Portal Migration for Cycle 2 (14:30–15:50, 9 participants: Silvia, Kristina, Aliaksei, Magdalena Kaaden, Karolina, Belen Beltran, Markus, Shubham, Jakob)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — magdalena-kaaden.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**: Magdalena Kaaden — engineer/lead on the Foxes team (user portal). In the Support Portal Migration alignment, pushed back on placing the Salesforce invoice fetch inside CFA (authorization complexity — customer-auth vs. internal-auth mixed concerns). Preferred routing invoice fetching through CM or a dedicated service. Also flagged existing concern: anyone with Salesforce access can log in as any customer to the user portal — pre-existing issue not introduced by migration. Invited Jakob to the session to assess backend migration needs.
> **Source**: [blocker] Alignment on Support Portal Migration for Cycle 2
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — belen-beltran.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**: Belen Beltran — attended the Support Portal Migration alignment session. Role unclear from transcript; observer/participant on the Foxes side. Revisit if she surfaces again with more context.
> **Source**: [blocker] Alignment on Support Portal Migration for Cycle 2
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — karolina-grabowska.md
> **Current context in KB**: Tech lead on the Foxes team, working on Trip Viz / user portal. No prior context on tripless aggregator concept as of 2026-04-07.
> **Proposed addition**:
> - **2026-04-20** — Now actively engaged on Support Portal Migration. Key technical stance: the "backend" concerns raised by product side are largely overstated — most of it is a BFF (aggregation layer over APIs) that can live as NextJS server-side functions inside CFA. Open architectural questions she wants resolved before committing: (1) should invoice data route through CM/a new service vs. being fetched directly by CFA; (2) where does invoice data conceptually belong (customer? trip?). Proposed concrete next step: engineers-only session with Markus, Silvia, Aliaksei (and possibly Jakob) to walk through the code and scope the migration realistically. Aware that CM already acts as a thin Ruby wrapper and is "a level of indirection that stays in your way." Agreed first-cut migration can land in CFA and be refactored later. (Source: Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — marcus-klemann.md
> **Current context in KB**: Full-time on support portal migration (Option 4A), 2–3 sprints estimated. Completeness check coverage at risk while he's on migration.
> **Proposed addition**:
> - **2026-04-20** — Aligned with Aliaksei on the Lambus code-ownership constraint (Veronika's clarification): cannot copy code as-is — would violate Lambus IP. Will rewrite/refactor on the fly (rename functions, adjust structure, improve as he goes). Confirmed no Ruby needed on Foxes side — TypeScript + NextJS/Fastify server-side functions are sufficient. Current estimate: ~3 sprints for trip visualization rewrite + ~1 sprint for smaller items = roughly the full 2-month cycle. Presented support portal architecture to Foxes team: data sources are Gecko (trip stages), Lambus pin service, Salesforce (invoices via SOQL), Documents Dashboard (enrichment), tripless JSON. No real "backend" in the classical sense — it's a BFF aggregation layer. Phase 1 scope confirmed as authenticated customer area only; guest area and AI/chat stay on support portal. (Source: Monthly Roadmap Session; Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] UPDATE — kristina-lamza.md
> **Current context in KB**: PM for Flamingo, back from leave 2026-04-14, driving support portal migration planning.
> **Proposed addition**:
> - **2026-04-20** — C1 closing review: customer ownership transformation milestone on track. Decision to drop cycle terminology and return to quarters — business teams found cycles confusing. Smart booking milestone may shift from "customer ownership" to "margin optimization" (Robert's push) — she's fine either way. For C2 (May–June, 2 months): Flamingo will NOT add new supplier-confirmation functionality; focus shifts to smart booking, completeness check rollout, and documents quality (not features). Target for documents in C2: stabilize flow, increase specification rate, improve supply coverage. Smart booking expected to span multiple cycles through end of year. Facilitated the Support Portal Migration alignment session — positioned it explicitly as a kickoff ("understand use cases + architecture + collect questions"), not a solutioning session. Will follow up on backend ownership question with Silvia tomorrow (2026-04-21); proceeds without her if she's not back. (Source: Monthly Roadmap Session; Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — jakob-pupke.md
> **Current context in KB**: Senior Engineer, proposed to take over infra guild from Gregor.
> **Proposed addition**:
> - **2026-04-20** — Attended Support Portal Migration alignment. Challenged whether the migration needs a separate backend service at all: concluded that NextJS server-side functions in CFA are sufficient for phase 1 — "right now we are not blocked by any backend that has to be migrated." Pushed back against adding invoice/sales-force logic directly into CFA (prefers a separate layer for authorization concerns); suggested CM or a trip-data service as alternatives. Not confirmed to join Foxes team yet — Aliaksei still has no formal confirmation that Jakob will own the Foxes backend. (Source: Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — shubham.md
> **Current context in KB**: Designer on Foxes team, availability uncertain, pairing with Kristina on user portal designs.
> **Proposed addition**:
> - **2026-04-20** — Attended Support Portal Migration alignment. Had a prior walkthrough with Kristina on Friday covering support portal capabilities. Will pair with Kristina and Magdalena this week to identify which support portal features actually need to move to user portal vs. already exist vs. can be dropped. (Source: Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — silvia-torre.md
> **Current context in KB**: EM for frontend teams; advocate for definition of ready/done.
> **Proposed addition**:
> - **2026-04-20** — Called the Support Portal Migration alignment session but was absent (attended kickoff but had to leave early). Key open question she left behind: is Foxes expected to own the backend migration fully, and if so, who (no backend engineer currently on Foxes)? Kristina to follow up with her 2026-04-21. (Source: Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — support-portal-migration.md
> **Current status in KB**: Option 4A proceeding — auth section to CFA. Workshop needed with Foxes. Completeness check coverage at risk.
> **Proposed update**:
> - **2026-04-20** — Kickoff workshop held with Foxes team (Kristina, Markus, Karolina, Magdalena, Jakob, Shubham; Silvia absent). Outcome: session explicitly framed as alignment + question-collection, NOT solutioning. Key clarifications landed:
>   - **Code-ownership constraint**: Veronika confirmed Lambus contract prevents copy-paste — Markus will rewrite/refactor on the fly. Decision is safe and consistent with existing migration plan.
>   - **Backend concern largely dissolved**: Karolina and Jakob analyzed the architecture and concluded there is no real backend to migrate — what was called "backend" is a BFF aggregation layer that can live as NextJS server-side functions in CFA. Phase 1 is not blocked by backend ownership.
>   - **Open decision**: invoice data path — direct-from-Salesforce via CFA (simplest) vs. routing through CM (existing wrapper) vs. new dedicated service. Magdalena and Jakob prefer extracting a layer for authorization hygiene; Karolina is pragmatic. Agreement: ship phase 1 in CFA, revisit the layering later.
>   - **Admin view (CSM impersonation)**: keep out of scope for phase 1; re-assess later. Pre-existing issue: anyone with Salesforce access can log in as any customer — flagged but not a migration blocker.
>   - **TripViz**: absolute enabler — nothing else migrates until that's in place.
>   - **Estimate**: Markus ~3 sprints for TripViz + ~1 for smaller items ≈ full 2 months (C2).
>   - **Next steps**: (1) engineers-only session (Karolina, Markus, Silvia, Aliaksei, maybe Jakob) to walk through code and scope migration properly; (2) Kristina + Magdalena + Shubham work the feature-selection front ("what actually needs to move"); (3) Kristina follows up with Silvia on backend ownership tomorrow.
> (Source: Monthly Roadmap Session; Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — cycle-2-planning.md
> **Current status in KB**: Resource rule — 2 people/topic, max 3 concurrent topics. Current prioritization: Wetu, API outsourcing, contested third slot.
> **Proposed update**:
> - **2026-04-20** — Flamingo C2 scope locked in at Monthly Roadmap close. Three focus areas: (1) smart booking (kickoff — multi-cycle work, will run through end of year in milestones), (2) completeness check rollout (core logic will finish in C2; full supplier rollout slips to C3/Q3), (3) documents quality (stabilization, specification rate, supply coverage — not new features). Explicit decision: NO new supplier-confirmation functionality in C2. C2 is ~2 months (May–June), 2 sprints; first week of May includes a bank holiday. Last manual supplier (Amadeus) planned for final C1 sprint to close out the "5 automated suppliers" milestone. Aliaksei flagged: no technical research tickets yet for smart booking / documents — may need to add them mid-sprint if discovery reveals gaps. Cycles being phased out in favor of quarters — business teams found cycles confusing. (Source: Monthly Roadmap Session)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — completeness-check.md
> **Current status in KB**: Minh reviewing Marcus's doc; development goal for Minh.
> **Proposed update**:
> - **2026-04-20** — Status confirmed: core logic confidence is high for C2 delivery, but full supplier rollout + testing will NOT complete in C2 — slips to Q3 (already shared with management in last business review). Rollout strategy: provider-based configurations are required (Amadeus-style strictness); roll out supplier-by-supplier, 2–3 per cycle, with CSM feedback loops post-rollout. Coverage still at risk from Markus's reassignment to support portal migration. (Source: Monthly Roadmap Session)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — infrastructure-guild-transition.md
> **Current status in KB**: Jakob proposed as successor to Gregor.
> **Proposed update**:
> - **2026-04-20** — Update: Jakob has told Aliaksei he does not want the role — needs to actively avoid being assigned it. Aliaksei also noted an open position (previously DevOps-ish) that isn't being rushed to refill on the current team — potential opportunity to rehire specifically for DevOps. Aliaksei to sync with Robert and Veronika on the hiring angle and on guild leadership next steps. (Source: Monthly Roadmap Session)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**:
> - **2026-04-20** — C2 scope finalized: smart booking (multi-cycle kickoff), completeness check (logic done, rollout slips to Q3), documents quality push (stabilization rather than new features). No new supplier-confirmation features. Markus fully on support portal migration — ~3 sprints trip-viz rewrite + ~1 sprint misc. Backend migration concern largely resolved: the support portal "backend" is a BFF aggregation layer that can live in CFA as NextJS server-side functions — phase 1 is not blocked by backend ownership on Foxes side. (Source: Monthly Roadmap Session; Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — trip-planner.md
> **Proposed update**:
> - **2026-04-20** — Trip visualization confirmed as the hard gate for user portal migration — nothing else migrates until TripViz is up in the Foxes stack. Architectural question still open: how to reconcile the trip-details view already in user portal with TripViz post-booking enrichment. Current support portal TripViz parses the same tripless JSON used by mobile (Markus ported the Lambus-server logic). Gecko may not be needed — the enriched trip JSON likely already has the stage data. (Source: Support Portal Migration alignment)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Organize engineers-only backend/migration code walkthrough
> **Description**: Set up a session with Karolina, Markus, Silvia, Aliaksei (and possibly Jakob) to walk through the support portal codebase and concretely scope the phase-1 migration (what moves, how, difficulties, ownership). This is the next concrete unblock for C2 planning on Flamingo + Foxes.
> **Due**: 2026-04-24 (this week)
> **Priority**: p1
> **Source**: Support Portal Migration alignment — Karolina's proposal
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Sync with Robert and Veronika on open role + guild leadership
> **Description**: Two related items: (1) Jakob has said he doesn't want the infra guild lead role — need to reopen the succession question with Robert/Veronika; (2) explore rehiring the open role as a DevOps profile (currently not being rushed to refill). Both touch Robert and Veronika directly.
> **Due**: 2026-04-24
> **Priority**: p2
> **Source**: Monthly Roadmap Session
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Confirm Jakob's (non-)move to Foxes team
> **Description**: No formal confirmation yet that Jakob is joining Foxes or owning their backend. This blocks the backend-ownership decision for support portal migration. Chase clarity with Silvia / Robert.
> **Due**: 2026-04-24
> **Priority**: p2
> **Source**: Support Portal Migration alignment
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Add technical research tickets for smart booking & documents
> **Description**: Aliaksei flagged during roadmap close that no tech-research tickets exist yet for smart booking or documents quality work — may need to inject them mid-sprint if scope gaps surface. Capture now so C2 doesn't stall on discovery.
> **Due**: 2026-04-28 (before C2 kickoff)
> **Priority**: p2
> **Source**: Monthly Roadmap Session
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Resolve smart booking milestone ownership (customer ownership vs. margin optimization)
> **Description**: Kristina is fine either way but Robert is pushing for smart booking to sit under margin optimization. Align with Robert; if Robert wants MVP in C2, push back on expectations with Kristina's multi-cycle estimate.
> **Due**: 2026-04-24 (this week — Kristina said "has this week")
> **Priority**: p2
> **Source**: Monthly Roadmap Session
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Follow up with Kristina on backend-ownership decision outcome
> **Description**: Kristina plans to close the backend-ownership question with Silvia on 2026-04-21 (or without her). Check back same day/next — this gates whether the engineers-only session (T1) can be scheduled usefully.
> **Due**: 2026-04-22
> **Priority**: p2
> **Source**: Support Portal Migration alignment
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Track invoice-data architectural decision
> **Description**: Open decision from the alignment session: route invoice fetching through CFA (simplest, ships phase 1), CM (existing Salesforce wrapper), or a new dedicated service. Team agreed CFA for phase 1, but Magdalena/Jakob want revisit. Park on the support portal migration ADR list so it doesn't get lost.
> **Due**: no due date
> **Priority**: p3
> **Source**: Support Portal Migration alignment
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Yesterday closed C1 for Flamingo and kicked off the support portal migration with the Foxes team. The headline: the "backend migration" worry that was blocking C2 planning largely dissolved — Karolina and Jakob concluded the support portal "backend" is really a BFF aggregation layer that can live as NextJS server-side functions in CFA, so phase 1 is not blocked by backend ownership on Foxes. C2 scope for Flamingo is now locked: smart booking kickoff (multi-cycle), completeness-check core logic (rollout slips to Q3), and documents quality (not features) — plus Markus full-time on the ~2-month support portal migration gated by TripViz. Two threads need Aliaksei this week: reopening the infra-guild succession with Robert/Veronika (Jakob declined), and confirming Jakob's status re: joining Foxes. Also: cycles are being phased out in favor of quarters.
