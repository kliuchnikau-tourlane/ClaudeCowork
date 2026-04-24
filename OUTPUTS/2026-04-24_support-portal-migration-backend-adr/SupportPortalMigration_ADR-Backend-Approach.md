# ADR: Backend Approach for Support Portal Migration

**Author:** Aliaksei Kliuchnikau
**Date:** 2026-04-24
**Status:** Proposed
**Reviewers:** Robert Wolf, Silvia de la Torre, Karolina Grabowska, Jakob Pupke, Markus Klemann

---

## Context

We are migrating the authenticated customer area of the Support Portal (Lambus/Nuxt) into the CFA monorepo (Next.js/React, Fusion). The frontend migration approach is agreed upon. This ADR addresses where the **server-side data aggregation logic** should live.

**What the Support Portal backend does today:**
- Fetches data from multiple sources (TripViz S3 JSON, Salesforce, Documents Dashboard, CM, Gecko API)
- Aggregates and transforms it for display
- All TypeScript, runs as server-side functions in Nitro (Nuxt's server layer)

**Current consumers:** Support Portal web app only. No other service consumes this aggregation logic today.

**Key constraints:**
- Foxes team (future owners) are frontend engineers — no backend (Ruby) capacity until June (when new Backend engineer joins). Jakob knows Ruby, but is not a part of the Foxes team and is fully busy with other commitments (notably Zoom migration, Infrastructure guild)
- Markus (current developer of the Support Portal) knows TypeScript, not Ruby
- Company direction: avoid unnecessary microservices, build on domain boundaries
- Mobile app (Lambus) has its own tightly coupled implementation and is a proprietary Lambus product that is purchased by other Lambus customers (it is not Tourlane-tailored) — cannot reuse a shared service without significant rework on the Lambus side
- Decision needed by April 27 for Cycle 2 planning

---

## Options

### Option 1: Server-side functions in CFA

Handle all data fetching and transformation in CFA using Next.js server actions + `libs/data/*`.

- **TripViz:** server-side call to TripViz S3 JSON, type mapping logic ported into CFA
- **Documents:** direct call to Documents Dashboard API from CFA
- **Invoices:** routed through CM (avoids adding a direct CFA ↔ Salesforce connection)

**Pros:**
- No new service to deploy or maintain
- Foxes team can own and review (TypeScript, same patterns they already use)
- Fastest to implement — Markus ports existing TS logic directly
- Aligns with existing CFA architecture (server actions + libs/data/*)
- Single deployment pipeline, no extra infra

**Cons:**
- Logic coupled to CFA — not reusable by other consumers. If a second consumer appears, refactoring needed. We consider this a non-issue: this is a conscious decision to avoid premature optimisation. There are no other consumers for this logic at the moment and there may not be any. The current logic is view-specific backend-for-the-frontend code.

### Option 2: New aggregation service

Create a standalone service that aggregates all data sources. CFA calls one endpoint.

**Sub-option 2a — Ruby service:**
- Maintained by Foxes once BE engineer joins in June
- Aligns with Tourlane's backend language

**Sub-option 2b — TypeScript/Fastify service:**
- Markus can build it now
- Foxes are familiar with Fastify patterns

**Pros:**
- Reusable by future consumers — though there are no clear future consumers at this point. Mobile app is out of the equation (Lambus-owned, tightly coupled to their stack).
- Logic is independently deployable and scalable

**Cons:**
- New service to deploy, monitor, and maintain
- Only one consumer today — premature abstraction
- 2a: no Ruby capacity until June, blocks migration timeline
- 2b: adds a TypeScript service that FE team must maintain
- Roughly doubles backend migration effort vs. Option 1, adding significant time on top of the currently estimated 3–4 sprints

### Option 3: Everything into CM

Route all data through CM — invoices, documents, and trip data. CM becomes the aggregation layer.

**Pros:**
- CM already handles customer auth and Salesforce connection
- Centralized customer data access
- CFA only needs to verify login (already in place)

**Cons:**
- CM is a Ruby service — no Ruby capacity to build this now
- Overloads CM with view-specific aggregation logic that doesn't belong to the customer domain (e.g. trip visualization data has nothing to do with customer management)
- Increases scope and timeline significantly

---

## Decision

**Option 1 — server-side functions in CFA, invoices through CM.**

Rationale:
- Only one consumer exists today. Building a separate service is premature.
- Fastest path to delivery given resource constraints (Markus, TypeScript, no Ruby capacity).
- Foxes team can own and maintain it — same language, same patterns, same repo.
- If a second consumer emerges (mobile app, AI agent), we can extract into a service then. The code will already be cleanly organized in `libs/data/*`.
- Invoices go through CM because: (a) CM already has the Salesforce connection, (b) we avoid adding a direct CFA ↔ Salesforce dependency, (c) invoice data naturally fits the customer domain.

---

## Open Items

- **Documents Dashboard auth:** verify whether CFA needs additional auth setup to call Documents Dashboard directly.
- **Shared TypeScript types package:** opportunity to create a shared npm package for cross-project type consistency (Markus's suggestion, post-MVP).
