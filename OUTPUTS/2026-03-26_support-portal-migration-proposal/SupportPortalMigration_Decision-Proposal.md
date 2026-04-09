# Decision Proposal: Support Portal Migration into the Tourlane Stack

**Author:** Aliaksei Kliuchnikau
**Date:** 2026-03-26
**Audience:** Engineering Leadership, Product Management (Foxes, Lambus, Flamingo)
**Status:** Draft — for alignment before C2 2026 planning
**Reference:** [[Internal] February 2026: Traveler Crossing <> Support Portal <> Customer Portal](https://docs.google.com/document/d/1cM8j6DnG7WAx_cdY0VhDjoWqxevO8uzCXENAf-CA5E0/edit?tab=t.0)

---

## Executive Summary

This proposal recommends migrating the Support Portal fully into Tourlane's CFA monorepo (Option 4, sub-option B) and transferring case deflection ownership to the Foxes team.

After deeper investigation, this project is larger than initially anticipated. It will not be completed by the end of Cycle 1. The migration is not just a code rewrite — it requires design work (Fusion redesign), onboarding (Markus into CFA and Fusion), CMS migration (Strapi v5 to Contentful), and QA investment, on top of the frontend and backend rewrite itself. A concrete plan with a realistic estimate and timeline can only be produced after the general approach is decided — it is not possible to do both this week.

**What needs to be decided now (before C2 planning in ~2 weeks):**

1. **Migration approach:** Do we go with full migration into CFA (sub-option B, recommended) or partial migration of authenticated features only (sub-option A)?
2. **Case deflection ownership — this is the key decision.** The Foxes team should own case deflection as part of the User Portal. This must be explicitly agreed upon — it unblocks C2 roadmap planning for both teams. Note: the Foxes PM acknowledges that as the User Portal grows in complexity, ownership may eventually be split by phase (e.g., Foxes for pre-booking, Flamingo for post-booking). Regardless of future team structure, tech and content ownership should remain with Tourlane.
3. **Contractual review with Lambus:** Are there IP or licensing blockers to migrating the codebase? This gates sub-option B and must be answered ASAP.
4. **Design capacity:** Can Tourlane Design take on the Fusion redesign? Without proper design specs, Markus would have to make design decisions during migration that will likely require a rewrite afterwards — something we want to avoid.

**What we solve after the decision is made:**

- Detailed migration plan, timeline, and phasing.
- QA approach and capacity allocation (no dedicated QA exists — this will be a joint effort).
- CMS migration scope (which features depend on Strapi and need to move to Contentful).
- Contentful ownership and support for migration.
- Admin area: migrate to CFA or keep separate.

The rest of this document provides the full analysis, workstream breakdown, and the complete list of decisions requested.

---

## Problem Statement

Tourlane is building a User Portal (owned by the Foxes team) that will replace Traveller Crossing. In parallel, the Support Portal (built and maintained by Lambus, with Flamingo involvement) provides authenticated self-service features — trip overview, invoices, app download, and a contact/ticket flow — that overlap significantly with the User Portal's intended scope.

As of today, the two portals are converging on the same user surface but diverge on tech stack (NuxtJS/Vue vs. NextJS/React), design system (custom Vue components vs. Fusion), CMS (Strapi v5 vs. Contentful), and team ownership. This creates friction in three areas:

1. **Ownership conflict on "case deflection."** Both portals touch the self-service experience. There is no agreed owner for the case deflection initiative going into C2 2026.
2. **Fragmented user experience.** The Support Portal does not use Fusion (Tourlane's design system), so authenticated users move between two visually inconsistent experiences.
3. **Engineering inefficiency.** Maintaining two separate stacks for overlapping functionality doubles the cost of changes and limits cross-team contribution.
4. **External codebase ownership.** The Support Portal codebase is owned by Lambus, an external company. Tourlane does not have access to or IP ownership of this codebase, which creates a strategic dependency on a third party for a core customer-facing product.

A decision is needed before C2 planning begins (~2 weeks from now) to unblock roadmap alignment and resource allocation. C2 planning will be heavily influenced by the ownership of the "case deflection" area, which makes this decision a prerequisite for both teams' roadmaps.

---

## Background: Options Explored So Far

Hans's original document outlined three options. A fourth was proposed by Karolina (Foxes team). Below is a brief recap — the full analysis is in the referenced Google Doc.

**Option 1 — Reuse Support Portal as-is (NuxtJS).** Foxes would adopt the NuxtJS stack. Rejected: imposes a learning curve on the Foxes team, blocks Fusion reuse, and locks Tourlane into a non-standard stack.

**Option 2 — Split guest/authenticated; rewrite authenticated to NextJS.** Keep the guest-facing Support Portal (FAQ, contact form) in NuxtJS; rewrite the authenticated area to NextJS. Hans's recommendation. Good pragmatic middle ground, but leaves the guest-facing portal outside the Tourlane stack indefinitely.

**Option 3 — Keep portals separate; build User Portal from scratch.** No migration. Rejected: months of delay, loss of existing feature parity, context loss for users.

**Option 4 — Migrate Support Portal into the CFA monorepo (Karolina's proposal).** Full migration of the Support Portal into the CFA monorepo as a package, using React/NextJS and Fusion. This is the evolution of Option 2 that the Foxes team supports.

---

## Recommendation: Option 4, with two sub-options

This proposal recommends Option 4 — migrating the Support Portal into the CFA monorepo — and presents two sub-options for how far the migration goes.

### Sub-option A: Partial migration (authenticated features only)

Migrate only the user-authenticated parts of the Support Portal (trip overview, invoices, finance, app download, etc.) into the User Portal within CFA. Leave the remaining guest-facing Support Portal (FAQ pages, contact/ticket submission form) running as a standalone thin application in its current Lambus-maintained stack.

**When this makes sense:** If there are contractual or timeline constraints that make full migration impractical in the near term, or if the guest-facing support experience is considered low-priority and stable enough to leave as-is.

**Tradeoffs:**
- Faster initial delivery — smaller migration scope.
- Two systems remain in production: the thin guest-facing Support Portal (Lambus stack) and the User Portal (CFA).
- The guest-facing portal still won't use Fusion, so there's a UX seam between the unauthenticated support experience and the authenticated portal.
- CMS split remains: Strapi for the guest portal, Contentful for everything in CFA.
- Ongoing (quite minimal) maintenance burden on the Lambus stack.

### Sub-option B: Full migration (recommended)

Migrate the entire Support Portal — both guest-facing and authenticated — into the CFA monorepo. The support-specific features (FAQ, ticket submission) become a package within CFA, built on Fusion and backed by Contentful instead of Strapi.

**Why this is recommended:**
- After migrating the authenticated features, what remains in the Support Portal is a thin shell (FAQ + ticket form). The marginal effort to migrate this too is low relative to the benefit.
- Eliminates the Strapi v5 dependency entirely — one CMS (Contentful) for all customer-facing content.
- Unified UX end-to-end: users never leave the Fusion design system.
- Single codebase, single deployment pipeline, built the Tourlane way — familiar to every engineer at Tourlane, which simplifies future extensions and ownership transfers.
- Full and clear IP ownership — the entire customer-facing portal codebase lives within Tourlane, removing the strategic dependency on Lambus.
- Removes ongoing maintenance cost of a separate Lambus-hosted application.

**Prerequisite to validate:** Contractual terms with Lambus must be reviewed to confirm there are no IP or licensing restrictions on migrating the full Support Portal codebase into Tourlane's own repository. This should be clarified before committing to sub-option B over A.

---

## Key Decision: Case Deflection Ownership

Independent of the migration sub-option, a critical decision is needed on who owns the **case deflection** business initiative going forward.

**Proposal: The Foxes team owns case deflection as part of the User Portal.**

Rationale:
- The product vision (outlined by Magdalena and Karolina in the referenced doc) is clear: the User Portal is where customers find answers independently; the Support Portal is the fallback when self-service isn't enough. Case deflection is fundamentally a User Portal concern — the richer the portal, the fewer support cases.
- After migration, the support-specific logic (ticket submission, FAQ) becomes a component *within* the Foxes-owned codebase. Splitting ownership of case deflection across teams when the code lives in one place creates unnecessary coordination overhead.
- The Foxes team is already planning C2 around self-service capabilities (payment schedules, invoices, booking confirmations, travel documents). Case deflection is the natural extension.

This frees up the Flamingo and Lambus teams from Support Portal responsibilities entirely, allowing them to focus on their primary priority — the Booking Platform. The Foxes team takes full ownership of the customer-facing portal area, including case deflection.

Note: the Foxes PM acknowledges that as the User Portal grows in complexity, ownership may eventually be split by phase — e.g., Foxes for pre-booking and Flamingo for post-booking. Regardless of future team structure, tech and content ownership should remain with Tourlane.

This ownership shift should be explicitly agreed upon by Product (Karolina, Kristina) and Engineering leadership before C2 planning begins.

---

## Migration Workstreams

The migration is not just a code rewrite — it requires planning, design, onboarding, and only then the actual rework. The workstreams below reflect this sequencing. This is a multi-cycle effort; it will not be done by the end of C1.

**Known milestones:**
- *Markus available:* ~2 weeks from now (Kristina confirmed 2 weeks is the bare minimum as he's busy finishing current commitments).
- *C2 planning:* ~2 weeks from now.
- *C2 start:* ~4 weeks from now. Markus can move to full-time on the migration.

### 1. Contractual and IP review

- **What:** Review contractual terms with Lambus to confirm there are no IP or licensing restrictions on migrating the Support Portal codebase into Tourlane's CFA monorepo.
- **Who:** Veronica.
- **Prerequisite for:** This gates sub-option B. If contractual blockers exist, the recommendation falls back to sub-option A (partial migration only).
- **Risks:** This is on the critical path — delay here delays the entire decision and all downstream work.
- **Decision needed:** Are there IP or licensing constraints? Must be answered ASAP.

### 2. Design: Redesign to Fusion

- **What:** The Support Portal UI must be redesigned to conform to Fusion (Tourlane's design system). This is not a 1:1 port of existing screens — it requires design work to ensure migrated features feel native within the User Portal. Covers both authenticated features and guest-facing features (if sub-option B).
- **Who:** Tourlane Design team (recommended).
- **Prerequisite for:** Frontend migration — Markus cannot rewrite screens without Fusion specs to build against. Design work can potentially start now from existing Support Portal screens (no code dependency) and should be ahead of or at least in parallel with onboarding.
- **Risks:**
  - Design capacity is unconfirmed. If Tourlane Design cannot take this on, it becomes the critical bottleneck for the entire migration.
  - No design stakeholder has been formally involved in this discussion yet.
- **Decision needed:** Can Tourlane Design take on the Fusion redesign? This must be confirmed before C2 planning.

### 3. Onboarding Markus to CFA and Fusion

- **What:** Markus is experienced with React/NextJS (confirmed). He needs structured onboarding on the Fusion design system and CFA monorepo conventions/structure to ensure the migrated code respects all conventions of the target system.
- **Who:** Foxes team provides onboarding support. They have committed to this and are ready to provide an isolated CFA environment.
- **Prerequisite for:** Frontend migration. Markus should not start writing migration PRs before understanding the target system's conventions.
- **Risks:** Onboarding needs to be structured — ad-hoc support alone may not be sufficient for a codebase and design system Markus hasn't worked with before.

### 4. Frontend migration (Vue/NuxtJS → React/NextJS in CFA)

- **What:** Rewrite the Support Portal frontend from NuxtJS/Vue to NextJS/React within the CFA monorepo. Authenticated features (trip overview, invoices, finance, app download) are migrated first; guest-facing features (FAQ, contact form) follow if sub-option B is chosen.
- **Who:** Markus (primary). Markus submits PRs into the CFA monorepo; Foxes review on a rolling basis. This runs in parallel with the Foxes' own Traveller Crossing → User Portal migration (confirmed — no blocking dependency). Foxes are ready to receive a high volume of PRs.
- **Prerequisite for:** QA, decommissioning of the old Support Portal.
- **Depends on:** Onboarding complete, Fusion design specs available for the screens being migrated.
- **Risks:**
  - Markus is the single point of execution. If his availability shifts, the entire migration shifts.
  - This is the bulk of the work — scope depends on how many screens and features exist in the authenticated and guest-facing areas.

### 5. Backend / API migration

- **What:** The Support Portal has existing API connections to Trip Planner, Salesforce (if option B is chosen), the App, and Documents Dashboard. These integrations need to be verified and potentially re-wired within the CFA context.
- **Who:** Markus, with support from the Foxes team on CFA-side patterns.
- **Runs alongside:** Frontend migration — each feature's API connections are migrated as the frontend for that feature moves to CFA.
- **Risks:** Most API connections may transfer cleanly if endpoints remain the same. Risk is low but needs verification per integration.

### 6. CMS migration (Strapi v5 → Contentful)

- **What:** The Support Portal uses Strapi v5 as its CMS. It is not yet clear which features depend on CMS-driven content. If any CMS-driven content belongs to the authenticated user experience (e.g., help articles, FAQs surfaced within the portal), it needs to migrate to Contentful even under sub-option A. Under sub-option B, all CMS content migrates. This includes content modeling in Contentful, data migration, and updating the frontend to consume Contentful APIs.
- **Who:** Needs to be determined — likely Markus with guidance from whoever owns Contentful at Tourlane.
- **Depends on:** Contentful owner identified and available to support. Understanding of what exactly is CMS-driven in the current Support Portal.
- **Risks:**
  - Contentful ownership at Tourlane is unclear. Markus will need guidance on content modeling and migration patterns.
  - The scope of CMS usage in the Support Portal is not yet assessed — it may be limited to FAQ pages or it may be more pervasive. This needs investigation before migration planning.
- **Decisions needed:** Identify the Contentful owner at Tourlane. Clarify which Support Portal features depend on Strapi to determine CMS migration scope.

### 7. QA

- **What:** Migrated features need testing within the CFA context — regression testing against existing Support Portal functionality, plus integration testing within the User Portal flow. End-to-end QA before decommissioning the old Support Portal.
- **Who:** Tourlane does not have a dedicated QA function. This will require a joint effort on the Tourlane side — the teams involved (Foxes, Flamingo) will need to invest time into testing the migration.
- **Depends on:** Frontend migration delivering testable features.
- **Risks:**
  - Without dedicated QA, testing effort falls on engineers and managers already allocated to other work. This needs to be accounted for in planning.
  - Test coverage of the existing Support Portal is unclear. If there are no existing strong automated tests coverage, the manual testing effort may be significant.
- **Decision needed:** Who contributes to QA effort and how much capacity is allocated? Must be agreed before migration work begins.

### 8. Admin area

- **What:** The Support Portal includes an admin area (impersonation, support request tracking) that is already built in NextJS. A decision is needed on whether this also moves into CFA or remains separate.
- **Who:** To be determined.
- **Risks:** Low. The admin area is already in NextJS, so migration effort would be smaller if needed. Not on the critical path.
- **Decision needed:** Should the admin area move into CFA or remain a separate application?

---

## Decisions Requested

| # | Decision | Proposed answer | Decide by |
|---|----------|----------------|-----------|
| 1 | Which migration option? | Option 4, sub-option B (full migration into CFA) | Before C2 planning (~2 weeks) |
| 2 | Who owns case deflection? | Foxes team, as part of User Portal | Before C2 planning (~2 weeks) |
| 3 | Are there contractual blockers to full migration? | To be validated with Lambus | ASAP — gates sub-option B |
| 4 | Who does Design for the migration? | Tourlane Design team | Before C2 planning |
| 5 | Who contributes to QA and with how much capacity? | Joint effort across Tourlane teams — to be agreed | Before migration work begins |
| 6 | Who owns Contentful and can support CMS migration? | To be identified | Before CMS migration begins |
| 7 | Admin area: migrate to CFA or keep separate? | To be decided | During C2 |
