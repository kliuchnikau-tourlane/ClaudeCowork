# ADR: Backend Approach for Support Portal Migration

**Author:** Aliaksei Kliuchnikau
**Date:** 2026-04-24
**Status:** Proposed
**Reviewers:** Robert Wolf, Silvia de la Torre, Karolina Grabowska, Jakob Pupke, Markus Klemann

---

## Context

We are migrating the authenticated customer area of the Support Portal (Lambus/Nuxt) into the CFA monorepo (Next.js/React, Fusion). The frontend migration approach is agreed upon. This ADR addresses where the **server-side data aggregation logic** should live.

**What the backend does today:**
- Fetches data from multiple sources (TripViz S3 JSON, Salesforce, Documents Dashboard, CM, Gecko API)
- Aggregates and transforms it for display (notably ~1500 lines of TripViz type mapping)
- All TypeScript, runs as server-side functions in Nitro (Nuxt's server layer)

**Current consumers:** Support Portal web app only. No other service consumes this aggregation logic today.

**Key constraints:**
- Foxes team (future owners) are frontend engineers — no backend (Ruby) capacity until June
- Markus (current developer) knows TypeScript, not Ruby
- Company direction: avoid unnecessary microservices, build on domain boundaries
- Mobile app (Lambus) has its own tightly coupled implementation — cannot reuse a shared service without significant rework on the Lambus side
- Decision needed by April 27 for Cycle 2 planning

---

## Options

### Option 1: Server-side functions in CFA (recommended)

Handle all data fetching and transformation in CFA using Next.js server actions + `libs/data/*`.

- **TripViz:** server-side call to TripViz S3 JSON, type mapping logic ported into CFA
- **Documents:** direct call to Documents Dashboard API from CFA
- **Invoices:** routed through CM (avoids adding a direct CFA ↔ Salesforce connection)

| Pros | Cons |
|------|------|
| No new service to deploy or maintain | Logic coupled to CFA — not reusable by other consumers |
| Foxes team can own and review (TypeScript, same patterns they already use) | If a second consumer appears, refactoring needed |
| Fastest to implement — Markus ports existing TS logic directly | |
| Aligns with existing CFA architecture (server actions + libs/data/*) | |
| Single deployment pipeline, no extra infra | |

### Option 2: New aggregation service

Create a standalone service that aggregates all data sources. CFA calls one endpoint.

**Sub-option 2a — Ruby service:**
- Maintained by Foxes once BE engineer joins in June
- Aligns with Tourlane's backend language

**Sub-option 2b — TypeScript/Fastify service:**
- Markus can build it now
- Foxes are familiar with Fastify patterns

| Pros | Cons |
|------|------|
| Reusable by future consumers (mobile app, AI agents) | New service to deploy, monitor, and maintain |
| Clean separation of concerns | Only one consumer today — premature abstraction |
| Future-proof if TripViz JSON is replaced by multiple sources (content catalog, booking platform) | 2a: no Ruby capacity until June, blocks migration timeline |
| | 2b: adds a TypeScript service that FE team must maintain; Fly.io deployment concerns |
| | Roughly doubles backend migration effort vs. Option 1 |

### Option 3: Everything into CM

Route all data through CM — invoices, documents, and trip data. CM becomes the aggregation layer.

| Pros | Cons |
|------|------|
| CM already handles customer auth and Salesforce connection | CM is a Ruby service — no Ruby capacity to build this now |
| Centralized customer data access | Overloads CM with view-specific aggregation logic that doesn't belong to customer domain |
| CFA only needs to verify login (already in place) | TripViz doesn't require auth — routing it through CM adds unnecessary complexity |
| | Increases scope and timeline significantly |

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
