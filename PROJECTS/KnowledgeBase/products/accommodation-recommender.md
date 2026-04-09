# Accommodation Recommender
Type: product
First seen: 2026-04-07
Last updated: 2026-04-07

## Context
AI/algorithmic system recommending accommodations to sales agents. Central dependency for Spaeti initiatives.

## Updates
- **2026-04-07** — V1 impact: ~5 min saving (~2 min from V1, rest from V2). Currently fails to find accommodations in 25% of cases due to limited supply bias. V2 depends on catalog content. In EM Sync: AccRec V2 could potentially use data warehouse (Snowflake) instead of direct catalog API — would make it independent from Spaeti if data team agrees. But if data team says no, AccRec becomes blocked on Mochi capacity (which may be consumed by Wetu deprecation). Needs to be sized for C2. (Source: Outcome roadmap Spati, EM Sync)
