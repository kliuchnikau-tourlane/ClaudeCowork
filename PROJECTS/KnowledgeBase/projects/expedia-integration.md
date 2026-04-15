# Expedia Integration
Type: project
First seen: 2026-04-07
Last updated: 2026-04-14

## Context
Extending hotel bed lookup with Expedia data to improve supply coverage. Spaeti team. Most strategic integration in the domain.

## Updates
- **2026-04-07** — Certification: all work done on Tourlane side, waiting for Expedia feedback. Tracking document shared with screenshots and requirement status. Spaeti team can maintain communication independently unless something fails. Outcome roadmap: Expedia go-live will extend coverage from ~76% to ~82%. High-level impact estimate: ~€500K margin (full year, seasonal variance — concentrated in Q1/Q4). Mochi team has a proposal related to Expedia that needs discussion with Aliaksei. (Source: Outcome roadmap Spati, EM Sync)
- **2026-04-08** — Roughly two-thirds of certification requirements done. Test booking items passed and marked done. Remaining open items: (1) voucher/confirmation email — biggest risk, no Expedia feedback yet, but may not require full implementation to pass (can send template); (2) check-in/checkout pay-at-property data — Kiryl verifying if already in catalog; (3) legal TnCs — Claudia escalating to Veronica after no response from legal since March 25. Hotel descriptions are robotic/auto-generated (not a certification blocker — can fix later, possibly with AI); images now good quality after Kiryl's filtering. Target: end of April from Tourlane's side, but depends on Expedia's responsiveness. Started in December 2025, still not fully done due to competing priorities — Minh implemented the latest Expedia request last week (done, rolled out). (Source: Weekly Aliaksei / Claudia; 1:1 — Minh / Aliaksei)
- **2026-04-14** — TNCs updates in progress for front-end and germany.com — expected done by end of day Apr 14. Last remaining open item: properly passing test booking in staging (must trigger from trip planning, show in booking platform). Two-phase launch decided: Phase 1 = launch Expedia as supplier (active everywhere); Phase 2 = gradual content rollout by destination (like hotel rollout model), allowing feedback collection and rollback. This is aligned with Wetu replacement rollout. (Source: Content Automation Weekly Check)
