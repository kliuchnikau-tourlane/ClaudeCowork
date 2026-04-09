# Documents Dashboard Tech Debt
Type: project
First seen: 2026-04-08
Last updated: 2026-04-08

## Context
Technical debt reduction for the Documents Dashboard system. Ideas proposed by Sascha.

## Updates
- **2026-04-08** — Key proposals: (1) migrate MongoDB to Postgres — MongoDB on mongodb.com is auto-scaling to tier 10 with cost and stability concerns; Postgres has been rock-solid by comparison. (2) Remove Vue.js dependency. Sascha prefers to wait for new infra pilot project — then migration to RDS via Terraform would be straightforward. No business case for immediate action; these are maintainability/stability improvements. Tech debt Confluence page already exists. Sascha will review it Friday. Infra weeks consuming most tech debt budget currently. Not realistic if smart booking and TP2 are C2 priorities. (Source: 1:1 — Sascha / Aliaksei)
