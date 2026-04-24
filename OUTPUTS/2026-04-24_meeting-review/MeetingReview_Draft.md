# Meeting Review Draft — 2026-04-24

Meetings analyzed from **2026-04-23**. Every proposed update has **Accept** pre-selected. Edit the boxes inline if you want to reject or revise an item, then tell me you're done and I'll apply the accepted changes to the KB and task list.

---

## Meetings Analyzed

1. `11---Wieland--Aliaksei.md` — 1:1 with Wieland (skip-level / manager)
2. `Refinement-Späti-team.md` — Spaeti team refinement
3. `TPWetu-Sequence-Diagram---draw.md` — Trip Planner ↔ Wetu sequence diagram working session
4. `Support-Portal-Migration-Backend-Follow-Up.md` — Backend follow-up for the Support Portal → CFA migration
5. `TP2-Architecture.md` — Trip Planner 2 target architecture deep-dive

No meetings were skipped (no `.processed.md` present — first run).

---

## KB Updates — People

### 1. Wieland Pfesdorf (existing) — update
- **Source:** `11---Wieland--Aliaksei.md`
- **Proposed update to append to `PROJECTS/KnowledgeBase/people/wieland-pfesdorf.md`:**
  > 2026-04-23 — 1:1. Reiterated that TP2 is the top architectural bet for the year and wants a crisp ADR on the three TP2 responsibilities before Cycle 2 kickoff. Flagged the transport-pricing-service domain violation as a must-fix this half. Asked for a written proposal on the infrastructure guild handover (Gregor → Jakob) including scope, authority and success criteria. Supportive on ESOP topic raised in the 1:1 — will chase People Ops.
- [x] Accept  [ ] Reject  [ ] Edit

### 2. Silvia Torre (existing) — update
- **Source:** `TP2-Architecture.md`, `Refinement-Späti-team.md`
- **Proposed update:**
  > 2026-04-23 — Drove the TP2 architecture session. Articulated the three-responsibility model (store trip / mutate route-based / orchestrate externals) and pushed back on embedding pricing logic in the trip store. Volunteering to write the first draft of the TP2 ADR.
- [x] Accept  [ ] Reject  [ ] Edit

### 3. Karolina Grabowska (existing) — update
- **Source:** `Refinement-Späti-team.md`, `TPWetu-Sequence-Diagram---draw.md`
- **Proposed update:**
  > 2026-04-23 — Led the Wetu sequence diagram session. Mapped current Trip Planner ↔ Wetu calls and identified four call sites that need to move behind the catalog adapter for the V2 deprecation. Owning the catalog adapter work in the upcoming sprint.
- [x] Accept  [ ] Reject  [ ] Edit

### 4. Marcus Klemann (existing) — update
- **Source:** `Support-Portal-Migration-Backend-Follow-Up.md`
- **Proposed update:**
  > 2026-04-23 — Confirmed Option 4A for the Support Portal auth migration. Will spike the CFA auth shim next week and come back with a rollback plan.
- [x] Accept  [ ] Reject  [ ] Edit

### 5. Jakob Pupke (existing) — update
- **Source:** `11---Wieland--Aliaksei.md`
- **Proposed update:**
  > 2026-04-23 — Wieland endorsed Jakob as Gregor's successor for the infrastructure guild. Aliaksei to write up scope + authority proposal and share with Jakob before the handover starts.
- [x] Accept  [ ] Reject  [ ] Edit

### 6. Pedro Alves (existing) — update
- **Source:** `TP2-Architecture.md`
- **Proposed update:**
  > 2026-04-23 — Raised the transport-pricing-service domain violation: pricing logic currently sits inside the trip store service. Proposed extracting it into the booking-platform domain. Aliaksei and Silvia agreed this blocks the clean TP2 carve-out.
- [x] Accept  [ ] Reject  [ ] Edit

### 7. Kiryl Karetnikau (existing) — update
- **Source:** `TP2-Architecture.md`
- **Proposed update:**
  > 2026-04-23 — Pushed for one MCP server per service as the dev-tooling standard. Will prototype on the catalog service and report back in two weeks.
- [x] Accept  [ ] Reject  [ ] Edit

### 8. Claudia Tita (existing) — update
- **Source:** `Support-Portal-Migration-Backend-Follow-Up.md`
- **Proposed update:**
  > 2026-04-23 — Confirmed frontend is unblocked on the CFA migration once Marcus lands the auth shim. Flagged a remaining risk on session timeouts across the two portals during the cutover window.
- [x] Accept  [ ] Reject  [ ] Edit

### 9. Talha Mahmood (existing) — update
- **Source:** `Refinement-Späti-team.md`
- **Proposed update:**
  > 2026-04-23 — Picked up the 11 Infotech API outsourcing gateway adapter. Design doc expected end of next week.
- [x] Accept  [ ] Reject  [ ] Edit

### 10. Gregor Schmidt (existing) — update
- **Source:** `11---Wieland--Aliaksei.md`
- **Proposed update:**
  > 2026-04-23 — Wieland signed off on the infrastructure guild handover to Jakob. Gregor to stay as advisor for ~4 weeks post-handover, then fully move off.
- [x] Accept  [ ] Reject  [ ] Edit

### 11. Robert Wolf (existing) — update
- **Source:** `TP2-Architecture.md`
- **Proposed update:**
  > 2026-04-23 — Raised data-model concerns about route-based mutations — specifically, that current schema makes partial re-routes expensive. Will propose a mitigation ahead of the ADR.
- [x] Accept  [ ] Reject  [ ] Edit

### 12. Christine Berg (existing) — update
- **Source:** `11---Wieland--Aliaksei.md`
- **Proposed update:**
  > 2026-04-23 — Aliaksei to follow up with Christine on ESOP eligibility dates for recent Spaeti hires. Wieland will back the ask if needed.
- [x] Accept  [ ] Reject  [ ] Edit

### 13. Nishant Tomer (new) — create
- **Source:** `TP2-Architecture.md` (joined as a new voice in the architecture session)
- **Proposed new file `PROJECTS/KnowledgeBase/people/nishant-tomer.md`:**
  > Backend engineer, attended the TP2 architecture session on 2026-04-23. Contributed on orchestration boundaries — suggested an outbox pattern for external-service calls so we can isolate retries from the trip-store write path. Team affiliation TBD (likely Flamingo); confirm and update.
- [x] Accept  [ ] Reject  [ ] Edit

---

## KB Updates — Projects

### 1. TP2 (Trip Planner 2) Rewrite — update
- **Source:** `TP2-Architecture.md`, `11---Wieland--Aliaksei.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/tp2-trip-planner-rewrite.md`:**
  > 2026-04-23 — Target architecture crystallised around three responsibilities: (1) store trip, (2) mutate route-based, (3) orchestrate external services. Transport-pricing-service identified as a domain violation that must be lifted out of the trip store before carve-out. Silvia to draft ADR; Wieland wants it before Cycle 2 kickoff. Robert raised partial-re-route cost concern — mitigation needed in the ADR. Nishant proposed an outbox pattern for orchestration.
- [x] Accept  [ ] Reject  [ ] Edit

### 2. Wetu / V2 Deprecation — update
- **Source:** `TPWetu-Sequence-Diagram---draw.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/wetu-deprecation.md`:**
  > 2026-04-23 — Sequence diagram mapped. Four Trip Planner ↔ Wetu call sites identified for migration behind the catalog adapter (accommodations read, destinations read, touristic-areas lookup, region search). Karolina owns the adapter; target to unblock deprecation of V2 accommodations + destinations + touristic-areas endpoints this cycle.
- [x] Accept  [ ] Reject  [ ] Edit

### 3. Support Portal Migration — update
- **Source:** `Support-Portal-Migration-Backend-Follow-Up.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/support-portal-migration.md`:**
  > 2026-04-23 — Option 4A (CFA-native auth with shim) confirmed as the chosen path. Marcus spiking the auth shim next week with a rollback plan. Claudia flagged session-timeout behaviour during the cutover window as a remaining risk.
- [x] Accept  [ ] Reject  [ ] Edit

### 4. Catalog System Rollout — update
- **Source:** `TPWetu-Sequence-Diagram---draw.md`, `Refinement-Späti-team.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/catalog-system-rollout.md`:**
  > 2026-04-23 — Catalog adapter becomes the single entry point for accommodations/destinations reads from Trip Planner (replacing direct Wetu calls). Scope now includes the four Wetu call sites identified in the sequence-diagram session.
- [x] Accept  [ ] Reject  [ ] Edit

### 5. API Outsourcing (11 Infotech) — update
- **Source:** `Refinement-Späti-team.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/api-outsourcing.md`:**
  > 2026-04-23 — Gateway adapter pattern agreed. Talha owns the design doc, expected end of next week. One adapter per outsourced API; auth handled centrally at the gateway.
- [x] Accept  [ ] Reject  [ ] Edit

### 6. Cycle 2 Planning — update
- **Source:** `11---Wieland--Aliaksei.md`, `TP2-Architecture.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/cycle-2-planning.md`:**
  > 2026-04-23 — Cycle 2 must-haves per Wieland: TP2 ADR landed, transport-pricing-service extraction scoped, infrastructure guild handover in motion. Secondary: catalog adapter covering Wetu call sites, CFA auth shim spike.
- [x] Accept  [ ] Reject  [ ] Edit

### 7. Infrastructure Guild Transition — update
- **Source:** `11---Wieland--Aliaksei.md`
- **Proposed update to `PROJECTS/KnowledgeBase/projects/infrastructure-guild-transition.md`:**
  > 2026-04-23 — Jakob confirmed as Gregor's successor. Gregor to stay as advisor ~4 weeks post-handover. Aliaksei owns a written proposal covering scope, authority and success criteria before the handover starts.
- [x] Accept  [ ] Reject  [ ] Edit

### 8. Transport Pricing Service Extraction (new) — create
- **Source:** `TP2-Architecture.md`
- **Proposed new file `PROJECTS/KnowledgeBase/projects/transport-pricing-service-extraction.md`:**
  > Transport-pricing logic currently sits inside the trip-store service, which is a domain violation and blocks the clean TP2 carve-out. Proposal (Pedro + Silvia): extract into the booking-platform domain. Must be scoped in Cycle 2; ADR candidate. Owner TBD.
- [x] Accept  [ ] Reject  [ ] Edit

### 9. MCP Servers for Dev Tooling (new) — create
- **Source:** `TP2-Architecture.md`
- **Proposed new file `PROJECTS/KnowledgeBase/projects/mcp-servers-dev-tooling.md`:**
  > Standard: one MCP server per service, exposing service-specific dev tools (local runs, fixtures, diagnostics). Kiryl prototyping on the catalog service; 2-week check-in to decide on broader rollout.
- [x] Accept  [ ] Reject  [ ] Edit

---

## KB Updates — Products

### 1. Trip Planner — update
- **Source:** `TP2-Architecture.md`, `TPWetu-Sequence-Diagram---draw.md`
- **Proposed update to `PROJECTS/KnowledgeBase/products/trip-planner.md`:**
  > 2026-04-23 — Target TP2 shape defined: store trip / mutate route-based / orchestrate externals. Transport pricing leaves Trip Planner (moves to booking-platform domain). Direct Wetu reads will be replaced by catalog-adapter reads across four call sites.
- [x] Accept  [ ] Reject  [ ] Edit

### 2. Destinations — update
- **Source:** `TPWetu-Sequence-Diagram---draw.md`
- **Proposed update to `PROJECTS/KnowledgeBase/products/destinations.md`:**
  > 2026-04-23 — V2 destinations + touristic-areas endpoints targeted for deprecation this cycle, contingent on catalog adapter landing.
- [x] Accept  [ ] Reject  [ ] Edit

### 3. Catalog / Supply Platform — update
- **Source:** `TPWetu-Sequence-Diagram---draw.md`, `Refinement-Späti-team.md`
- **Proposed update to `PROJECTS/KnowledgeBase/products/catalog-supply-platform.md`:**
  > 2026-04-23 — Catalog adapter expands to become the canonical read path for accommodations, destinations and touristic areas from Trip Planner.
- [x] Accept  [ ] Reject  [ ] Edit

### 4. Booking Platform — update
- **Source:** `TP2-Architecture.md`
- **Proposed update to `PROJECTS/KnowledgeBase/products/booking-platform.md`:**
  > 2026-04-23 — Will absorb the transport-pricing-service once extracted from Trip Planner. Domain ownership clarified: pricing lives here, orchestration lives in Trip Planner.
- [x] Accept  [ ] Reject  [ ] Edit

---

## Suggested Tasks for Aliaksei

### 1. Write the TP2 three-responsibilities ADR brief for Silvia
- **Source:** `TP2-Architecture.md`, `11---Wieland--Aliaksei.md`
- **Why:** Wieland wants the ADR before Cycle 2 kickoff; Silvia is drafting but needs Aliaksei's framing on scope + non-goals.
- [x] Accept  [ ] Reject  [ ] Edit

### 2. Draft the infrastructure guild handover proposal (Gregor → Jakob)
- **Source:** `11---Wieland--Aliaksei.md`
- **Why:** Wieland explicitly requested scope/authority/success-criteria in writing before handover starts.
- [x] Accept  [ ] Reject  [ ] Edit

### 3. Scope the transport-pricing-service extraction for Cycle 2
- **Source:** `TP2-Architecture.md`
- **Why:** Blocks the clean TP2 carve-out; Pedro + Silvia aligned on direction, owner still TBD.
- [x] Accept  [ ] Reject  [ ] Edit

### 4. Follow up with Christine on ESOP eligibility dates for recent Spaeti hires
- **Source:** `11---Wieland--Aliaksei.md`
- **Why:** Open 1:1 item; Wieland offered to back the ask if needed.
- [x] Accept  [ ] Reject  [ ] Edit

### 5. Review Karolina's catalog-adapter scope for the four Wetu call sites
- **Source:** `TPWetu-Sequence-Diagram---draw.md`
- **Why:** Sits on the critical path for V2 deprecation this cycle.
- [x] Accept  [ ] Reject  [ ] Edit

### 6. Check in with Marcus on the CFA auth shim spike next week
- **Source:** `Support-Portal-Migration-Backend-Follow-Up.md`
- **Why:** Option 4A confirmed; rollback plan is the gating artifact for the cutover.
- [x] Accept  [ ] Reject  [ ] Edit

### 7. Align with Claudia on session-timeout mitigation during portal cutover
- **Source:** `Support-Portal-Migration-Backend-Follow-Up.md`
- **Why:** Remaining risk flagged in the backend follow-up; FE/BE alignment needed.
- [x] Accept  [ ] Reject  [ ] Edit

### 8. Review Talha's 11 Infotech gateway-adapter design doc when it lands
- **Source:** `Refinement-Späti-team.md`
- **Why:** Sets the outsourcing pattern for the rest of the APIs; expected end of next week.
- [x] Accept  [ ] Reject  [ ] Edit

### 9. Schedule the 2-week MCP-server prototype review with Kiryl
- **Source:** `TP2-Architecture.md`
- **Why:** Decision point on whether to roll out one-MCP-per-service more broadly.
- [x] Accept  [ ] Reject  [ ] Edit

### 10. Confirm Nishant Tomer's team + add to Flamingo 1:1 rotation if applicable
- **Source:** `TP2-Architecture.md`
- **Why:** Contributed meaningfully to TP2 architecture; worth a quick intro if he's in scope.
- [x] Accept  [ ] Reject  [ ] Edit

---

## Summary

Yesterday's meetings were dominated by the TP2 architecture direction, which now has a crisp three-responsibility framing and an ADR in flight — but the transport-pricing-service domain violation has to be lifted out before the carve-out is clean. The Wetu sequence-diagram session produced a concrete migration list for the catalog adapter, which unblocks V2 deprecation this cycle. The Support Portal migration settled on Option 4A with Marcus spiking the auth shim. The biggest people-ops items from Wieland's 1:1 are the infrastructure guild handover to Jakob (needs a written proposal) and the ESOP follow-up for Spaeti hires.

**Counts:** 13 people updates (1 new), 9 project updates (2 new), 4 product updates, 10 suggested tasks.
