# Support Portal Migration
Type: project
First seen: 2026-04-08
Last updated: 2026-04-10

## Context
Migrating support portal functionality into the user portal owned by the Foxes team. Current support portal uses NextJS monorepo, Strapi CMS (headless) on Supabase (managed Postgres), hosted on Vercel.

## Updates
- **2026-04-08** — Foxes team ("In Focus") is building a user portal that overlaps ~80% with the existing support portal (e.g., list of trips). Plan: merge and migrate support portal features into user portal (different tech stack — React). Marcus may be assigned to the rewrite. Support portal should become stripped down: cases + FAQ only. Self-service capabilities (reducing ticket creation) move to Foxes-owned user portal. Christina previously owned the support portal. (Source: 1:1 — Sascha / Aliaksei)
- **2026-04-10** — Aliaksei held technical deep-dive with Markus. Markus wrote migration roadmap on Confluence: [Support Portal to CFA Migration Roadmap](https://tourlane.atlassian.net/wiki/spaces/TPD/pages/4651155469/Support+Portal+to+CFA+Migration+Roadmap). 4-phase plan: Phase 1 = authenticated customer area to CFA/user portal (2–3 focused sprints, medium-low risk, components are reusable); Phase 2 = general form + modification chat + AI logic (high effort/risk — vector store and AI tightly coupled to NextUI, requires full rewrite); Phase 3 = admin area for support agents; Phase 4 = CMS migration (Strapi to potentially Contentful, which Tourlane prefers for frontend teams). Trip visualization component just released — shared between guest and admin views. 14K+ support requests processed, ~8–9% AI deflection rate. Markus asked to add effort/risk details per phase. (Source: Support Portal Migration — Technical Deep Dive)
