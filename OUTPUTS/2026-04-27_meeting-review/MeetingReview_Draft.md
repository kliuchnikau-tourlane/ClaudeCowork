# Meeting Notes Review — 2026-04-27 (analyzing meetings from 2026-04-24)

## Meetings Analyzed
- API Outsourcing Intro (15:45–16:30, 3 participants — Pedro, Nishant, Aliaksei)
- Aliaksei / Silvia 1:1 (12:00–12:50, 2 participants)
- Completeness Check Onboarding/Info sharing session (14:30–15:30, Minh hosting; Marcus, Sascha, Kristina, Hua, Aliaksei)
- Tourlane <> Grafana: Intro (13:00–13:30, 3 participants — Aliaksei, Alex Wojdynski, Tim Klaver from Grafana)

---

## Knowledge Base Updates

### People

#### [P1] NEW — nishant-tomer.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Nishant Tomer
> Type: person
> Role: Engineer working on the 11 Infotech API outsourcing integration. Email: nishant.tomer@tourlane.com.
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Joined the API outsourcing project. Worked with Pedro last year on a Tourlane API design redesign (improved version of the existing adapter API). Strong API design instincts — quickly identified concerns with the 11 Infotech spec (rate parameter being overloaded as supplier ID, overridden fields with multiple meanings, casing/typing inconsistencies).
>
> ## Updates
> - **2026-04-24** — Onboarded into the 11 Infotech API outsourcing project. Will produce a brief feedback document next week documenting concerns with the current 11 Infotech API spec and what we want differently. Already worked with Pedro last year on an improved version of the adapter API design — that work can be evolved into a refined proposal. Pedro will brief him on Toha's prior conversation history with 11 Infotech (Slack channel: "revenue for tech implementation"). (Source: API Outsourcing Intro)
> ```
> **Source**: API Outsourcing Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] NEW — magdalena.md
> **Current context**: NEW — not yet in KB. Mentioned multiple times in earlier meetings without a dedicated entry.
> **Proposed addition**:
> ```
> # Magdalena
> Type: person
> Role: Product Manager for Foxes team (user portal / CFA)
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Foxes team PM. Strong preference that her team builds features themselves (vs. accepting migrations from other teams) so they own the result.
>
> ## Updates
> - **2026-04-24** — Per Silvia: "Magdalena really has the preference that the team builds it." Pushing for Foxes to build the trip-vis baseline themselves rather than have Marcus migrate the support-portal version. Compromise being explored: Foxes builds public + private trip-vis baseline; Marcus joins later to add the enrichment layer (financial info, document data). (Source: Aliaksei/Silvia 1:1)
> ```
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] NEW — olu.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Olu (Oleksii)
> Type: person
> Role: Developer (likely Mochi/Foxes — TBD)
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> New developer on Silvia's side. Mentioned by her as one of the people who could maintain the trip-vis aggregation layer in Ruby — though that would create a bottleneck on Jakob and Olu, which is why Marcus on the layer is preferred.
>
> ## Updates
> - **2026-04-24** — Mentioned by Silvia as a recent addition to the frontend/Mochi side. Owns Ruby work in current setup. Already on the C2 vacation-collection list as "Oleksii". (Source: Aliaksei/Silvia 1:1)
> ```
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] NEW — alex-wojdynski.md
> **Current context**: NEW — not yet in KB. External contact (Grafana).
> **Proposed addition**:
> ```
> # Alex Wojdynski
> Type: person (external)
> Role: Grafana account / sales contact covering eastern Europe and the Baltics. Email: alex.wojdynski@grafana.com.
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Initiated outreach to Tourlane. Interested in helping Tourlane evaluate a move from self-hosted OSS Grafana to Grafana Cloud, including the full observability suite (Mimir/Loki/Tempo + IRM/SLOs/AI observability).
>
> ## Updates
> - **2026-04-24** — Intro call held. Aliaksei explained Tourlane's current setup: self-hosted Grafana, business-ops dashboards per team, fragmented incident management, Devlake-based DORA metrics being introduced, no tracing/SLOs in Grafana. Aliaksei is mainly interested in centralized incident management. Next step: Aliaksei will connect Alex to Tourlane's staff engineer who maintains the Grafana setup; Grafana will set up a shared Slack channel. (Source: Tourlane <> Grafana Intro)
> ```
> **Source**: Tourlane <> Grafana Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P5] NEW — tim-klaver.md
> **Current context**: NEW — not yet in KB. External contact (Grafana).
> **Proposed addition**:
> ```
> # Tim Klaver
> Type: person (external)
> Role: Grafana team lead (Alex Wojdynski's manager). Email: tim.klaver@grafana.com.
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Senior Grafana counterpart for any commercial conversation. Joined the intro call with Alex.
>
> ## Updates
> - **2026-04-24** — Joined Tourlane intro. Pitched Grafana Cloud as the way to consolidate observability (centralized dashboards, IRM, root-cause analysis) without losing OSS-Grafana familiarity. Acknowledged migration is straightforward from self-hosted. (Source: Tourlane <> Grafana Intro)
> ```
> **Source**: Tourlane <> Grafana Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P6] UPDATE — pedro-alves.md
> **Current context**: Pedro is staff engineer for the backend teams; owns catalog and Wetu deprecation work.
> **Proposed addition**:
> - **2026-04-24** — Reviewed the 11 Infotech API in detail. Strong concerns: everything is POST (no GETs), inconsistent property casing, overridden fields with multiple meanings (e.g., `rate` parameter used to carry supplier ID), typos in either docs or API. Recommends NOT pulling out the contract clause yet (vendor has been accommodating with changes), but advocates getting ahead of the issues with a comprehensive feedback document rather than fix-as-you-go. Concern: 11 Infotech is unlikely to fork the API for Tourlane, so changes risk breaking their other customers and creating future regressions. Will spend Monday onwards documenting points more rigorously. Also flagged that vendor communication is dropping requests — Talha has been complaining; suggested using a shared spreadsheet to track open topics. (Source: API Outsourcing Intro)
> **Source**: API Outsourcing Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P7] UPDATE — silvia-torre.md
> **Current context**: Engineering Manager for the frontend teams; advocates definition of ready/done; Mochi team manager.
> **Proposed addition**:
> - **2026-04-24** — Pushing back on the original Marcus-migrates-trip-vis plan: Magdalena (Foxes PM) prefers her team builds the trip-vis baseline themselves; Silvia is supporting that preference. Compromise direction: Foxes builds the public + private trip-vis baseline (private version is new — current support-portal trip-vis exposes private info on a public page); Marcus joins later for the enrichment layer (financial info, documents). Suggested splitting the support portal migration scope into "trip fees / enrich-trip-with" and "payments section / finance portal" — invoices belong to the second scope and don't have to be in Ruby, allowing phased delivery. Proposed forming a temporary "ninja team" for Wetu deprecation (Spaeti developers + her one developer) since the work is very technical and cycle-long. Raised an architecture-board topic: every team in Tourlane should own a piece of the user profile (booking domain owns booking-related fields like accessibility data, etc.) instead of a single team owning all views. Reported priorities keep oscillating between TP2/route-builder and Wetu deprecation, "probably from the top + Robert"; not 100% confident her side can deliver Wetu changes in C2. Will likely stop working on the pricing service ("should not have been built on our side"). Asked Aliaksei to share the recording of his Wetu/Gregor knowledge-transfer session. Has a sore throat. (Source: Aliaksei/Silvia 1:1)
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P8] UPDATE — marcus-klemann.md
> **Current context**: Developer on Flamingo (Booking Platform); Lambus contractor; full-time on support portal migration in C2.
> **Proposed addition**:
> - **2026-04-24** — In the completeness check info session, confirmed his C2 focus on completeness check is "define provider-based rule configurations" for the simpler DMCs first (Sunny Cars-style: one upload-enabled doc type per item type) — this should cover "many many DMCs" without historical lookup. Hotelbeds-style providers (multiple equally valid doc types) are next. Historical lookup is implemented in code already but won't be enabled in C2 — needed only for the harder cases (ATI Hollywood/Empire-State pattern, e-ticket case). Confirmed GPT 5.4 model upgrade made matching stricter (more name/language mismatches between trip items and PDFs). Noted the Salesforce case-creation logic itself can be improved — surfacing "high-likelihood candidate document where the booking should have been but wasn't extracted" would help agents. (Source: Completeness Check info session)
> **Source**: Completeness Check info session (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P9] UPDATE — minh-nguyen.md
> **Current context**: Software engineer on Flamingo. Development goal = become go-to person on Completeness Check.
> **Proposed addition**:
> - **2026-04-24** — Hosted the Completeness Check info-sharing session with Marcus, Sascha, Kristina, Hua, and Aliaksei. Walked through current logic (14-day pre-departure trigger, fingerprint/hash matching, false-positive and false-negative cases) and the proposed advanced check (7-step provider-rule-driven logic). Demonstrating clear ownership of the topic, in line with development goal. Will incorporate the historical-lookup step explicitly into the diagram after meeting feedback. Christina was joining via mobile then desktop, somewhat distracted. (Source: Completeness Check info session)
> **Source**: Completeness Check info session (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P10] UPDATE — talha-mahmood.md
> **Current context**: Engineer on Spaeti; assigned to 11 Infotech adapter work.
> **Proposed addition**:
> - **2026-04-24** — Per Pedro: Talha has been complaining about communication gaps with 11 Infotech — questions get partially answered, others get forgotten, requires constant chasing. Pedro suggested adopting a shared spreadsheet to track open topics. Talha is the holder of context on what was already requested from 11 Infotech (e.g., the new content/booking endpoints already added). Aliaksei to sync with him before any new feedback letter goes out, so the team builds on prior asks rather than restart. (Source: API Outsourcing Intro)
> **Source**: API Outsourcing Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P11] NEW — hua.md
> **Current context**: NEW — not yet in KB.
> **Proposed addition**:
> ```
> # Hua
> Type: person
> Role: Engineer on Flamingo (likely)
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Attended the Completeness Check info session and asked clarifying questions about provider-based rules — specifically how the rule applies when a Sunny Cars rental is not in the trip (answer: rule doesn't fire, because the trip items drive the check).
>
> ## Updates
> - **2026-04-24** — Asked clarifying questions in the Completeness Check info session that helped surface a key implementation invariant: provider-based rules only fire when the matching item type is present in the trip. (Source: Completeness Check info session)
> ```
> **Source**: Completeness Check info session (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — api-outsourcing.md
> **Current status in KB**: Vendor signed; Talha doing adapter work; 11 Infotech accommodating change requests; team morale concerns; risk-management strategy = keep ~5 critical adapters in-house.
> **Proposed update**:
> - **2026-04-24** — Intro/onboarding meeting with Nishant Tomer (joined the project). Pedro reviewed the 11 Infotech spec end-to-end and surfaced significant API-design concerns: everything POST (no GETs), inconsistent casing, overridden fields with multiple meanings (`rate` parameter is overloaded as supplier ID), typos. Strategy debate framed as three options: (a) accept current API and request fixes piecemeal — high long-term risk; (b) provide a comprehensive list of issues for them to fix at once; (c) invoke the contract clause and provide our own API spec. Pedro's recommendation: NOT (c) yet — vendor has been forthcoming with changes — but bias toward (b) with a clear up-front feedback document. Aliaksei dropped the Monday blocker session as too early; instead Pedro/Nishant will write a brief feedback doc the following week and combine it with the prior 11 Infotech ↔ Toha conversation history that Talha holds. Communication-process gap: 11 Infotech drops requests, requires repeated chasing — adopting a shared spreadsheet of open topics. Tola is currently still implementing against the existing spec; partial work already done. Caveat noted by Pedro: any deeper redesign request must reconcile with endpoints already requested in the recent past, or it will look incoherent to the vendor.
>
> Reference docs:
>   - Vendor brief: https://docs.google.com/document/d/1KJW1z04Y4mCQ1owwAcVQlX2AkvdeHXR7We1of9M6Cb4/edit
>   - 11 Infotech API: https://api.11infotech.com/partner/tourlane-gateway-:-api-services
>   - Slack: "revenue for tech implementation" channel for prior Q&A. (Source: API Outsourcing Intro)
> **Source**: API Outsourcing Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — wetu-deprecation.md
> **Current status in KB**: Endpoint specs nearly complete; Gregor unavailable until mid-May; destinations more advanced than expected; work packages likely to grow.
> **Proposed update**:
> - **2026-04-24** — Aliaksei has nearly finished a current-state sequence diagram of Trip Planner ↔ Wetu interactions, covering three concrete cases: (1) recommendation content linking, (2) manual accommodation content input, (3) transport leg. Plan: validate the diagram with Gregor, then build a future-state diagram, then run a planning session with the Mochi/Foxes side. Recording of the earlier Gregor knowledge-transfer session exists; Silvia hasn't seen it and asked for a copy. From the Mochi side, capacity for C2 delivery is uncertain: priorities oscillate between TP2/route-builder and Wetu, "probably from the top + Robert"; Silvia is "not 100% confident we can deliver." Mochi will likely stop working on the pricing service ("should not have been built on our side") to free up time. Silvia proposed forming a temporary cross-team "ninja team" — Spaeti developers + one Foxes/Mochi developer — to swarm Wetu deprecation given the technical depth and cycle-long focus required. Aliaksei plans to push Robert and Christina for an explicit priority signal that Wetu is highest priority for Mochi/Foxes, otherwise the work stalls. (Source: Aliaksei/Silvia 1:1)
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — support-portal-migration.md
> **Current status in KB**: Option 4A — auth section to CFA; Marcus full-time on migration; joint workshop pending.
> **Proposed update**:
> - **2026-04-24** — Major scope rethink driven by Silvia. Two threads:
>
>   1. **Who builds trip-vis** — Magdalena (Foxes PM) wants her team to build the trip-vis baseline themselves, not accept Marcus's migration. Silvia is backing that preference. Compromise being explored: Foxes builds the public + private trip-vis baseline (private version is new — current support-portal version is public-only with private info leaked into it); Marcus joins afterwards for the enrichment layer (financial info, documents) — and ideally builds the aggregation layer from day one if a backend service is needed. Aliaksei pushed back: Marcus is the fastest engineer on this and was specifically intended to save Foxes capacity, but conceded that if Foxes wants ownership, Marcus can be reallocated to other things (back to support portal or pulled into Wetu work) until enrichment phase begins.
>
>   2. **Aggregation-layer architecture** — current ADR options under discussion: (1) aggregation layer inside CFA (with Salesforce piece outside), (2) separate aggregation service (Ruby or TypeScript sub-options), (3) keep code in Ruby in CM, (4) brand-new service. Silvia and Aliaksei agreed the technical decision (where the layer lives) is independent from the staffing decision (who builds it). ADR scope to stay narrow and technical; ownership/scope discussion goes to a separate doc. Silvia adding "future evolution" benefits of options 1 and 2: Marcus could maintain the layer instead of bottlenecking on Jakob/Olu in Ruby. Public vs private versions of the locked CFA pages is a new constraint to design around.
>
>   Silvia floated a reverse-design idea: Marcus could build finance components in code, push them into Figma using the design system, designer iterates there, then re-port to code — leveraging Marcus's speed when designer capacity is the blocker.
>
>   Aliaksei wants the technical part of the ADR closed out and sent to Robert for review; Silvia is finalizing her additions. The locked version of the support portal will likely be removed entirely — anything Christina/Marcus want to build in the future would go directly into CFA as a separate sub-page/tab. (Source: Aliaksei/Silvia 1:1)
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR4] UPDATE — completeness-check.md
> **Current status in KB**: Marcus wrote detailed doc; Minh preparing team presentation; scope clarification needed before cycle planning.
> **Proposed update**:
> - **2026-04-24** — Detailed info-sharing session held by Minh, with Marcus filling in implementation specifics. Documented the current logic (14-day pre-departure trigger, fingerprint/hash matching of trip items to extracted bookings, Salesforce case creation) and its failure modes:
>   - **False positives**: items that have no standalone PDF (greet-and-meet, ~67% of transport items, etc.); hash instability for activities/extras (hash computed from name/date/passenger UID — fragile when these change); GPT 5.4 model upgrade made matching stricter (more language/wording mismatches).
>   - **False negatives**: e-ticket case — booking extracted from a generic confirmation matches the hash, but the actual entry pass (e.g., go-city pass, Universal Studios voucher) is missing.
>
>   Proposed solution = "Advanced check" — 7-step provider-rule-driven logic: get supplier UID → map to provider → check provider settings (completeness-check enabled doc types, upload-enabled doc types) → narrow possible doc types via item-type filter → (historical lookup, deferred) → hash match → flag. Aliaksei pushed for clarity on whether V1/V2/V3 in Marcus's doc are incremental phases — Marcus clarified they are alternative solution approaches, not phases.
>
>   **C2 scope decision**: provider-based rules only (Sunny Cars-style first, then Hotelbeds-style multi-doc-type). Historical lookup deferred — already built in code, but configuration work for the simpler providers is the bottleneck. Estimated coverage: provider rules alone get ~50–60% of cases; historical lookup adds ~60→80%.
>
>   **Aliaksei's main concern flagged**: the e-ticket / generic-voucher false-negative case is NOT solved in C2 because it requires historical lookup. Pushed for explicit acknowledgement. Christina also probed — was reading V1/V2/V3 as incremental and was surprised to learn they aren't. Sales-force case creation can be enriched with "high-likelihood candidate document" hints to help agents triage faster.
>
>   Configuration correction noted: First-T provider's `item types = all` should be `extra cost`. (Source: Completeness Check info session)
> **Source**: Completeness Check info session (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR5] NEW — observability-platform-evaluation.md
> **Current context**: NEW project — emerging from the Grafana intro call.
> **Proposed addition**:
> ```
> # Observability Platform Evaluation
> Type: project
> First seen: 2026-04-24
> Last updated: 2026-04-24
>
> ## Context
> Lightweight evaluation of whether to consolidate Tourlane's observability stack on Grafana Cloud (vs. continuing self-hosted OSS Grafana + ad-hoc tools per team). Driven primarily by Aliaksei's interest in centralized incident management; observability consolidation is a secondary motivator.
>
> ## Current state at Tourlane
> - Self-hosted OSS Grafana
> - Per-team high-level business-ops dashboards + some alerting
> - One team (likely Spaeti) has stronger Grafana setup with AWS CloudWatch source
> - DORA metrics being introduced via Devlake-backed Grafana (default dashboards for now)
> - No tracing in Grafana (some teams use Scout)
> - No SLO management
> - One staff engineer maintains Grafana — significant time investment
> - Incident management is fragmented per team — manual, inconsistent, hard to reassign across teams
>
> ## Updates
> - **2026-04-24** — Intro call with Alex Wojdynski and Tim Klaver (Grafana). Aliaksei explained the current setup and his top need: centralized incident management with consistent alert routing, on-call assignment, and reassignment across teams (today fragmented across Grafana, CloudWatch, custom solutions). Grafana pitched the full Cloud suite (Mimir/Loki/Tempo + IRM/SLOs/AI observability) as the consolidation play. Aliaksei: company is open to SaaS — went self-hosted on Grafana initially because it was a test that grew, similar reasoning for Devlake (price wasn't right for SaaS DORA). Migration path "isn't very difficult" per Tim. Next step: Aliaksei to connect Grafana team to Tourlane's observability staff engineer; Grafana to set up shared Slack channel. (Source: Tourlane <> Grafana Intro)
> ```
> **Source**: Tourlane <> Grafana Intro (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**:
> - **2026-04-24** — Completeness check direction crystallized for C2: provider-based rule configurations (Sunny Cars-style first, then Hotelbeds-style) — should cover ~50–60% of cases. Historical lookup deferred to a later cycle but already implemented in code. The high-impact e-ticket / generic-voucher false-negative case (Aliaksei's primary concern) is NOT in C2 scope. GPT 5.4 model upgrade has made document extraction matching noticeably stricter — language/wording mismatches between trip-planner items and PDFs are the main new noise source. Salesforce case creation could be enriched with high-likelihood-document hints to help agents triage. Trip-vis migration ownership is contested between Marcus and Foxes — Magdalena wants her team to build the baseline, leaving Marcus for the enrichment layer (financial info, documents). (Source: Completeness Check info session, Aliaksei/Silvia 1:1)
> **Source**: Completeness Check info session, Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PD2] UPDATE — trip-planner.md
> **Proposed update**:
> - **2026-04-24** — Wetu-coupling sequence diagram in progress: three concrete TP1↔Wetu interaction patterns mapped (recommendation content linking, manual accommodation content input, transport leg). This is the basis for the future-state design and the planning session with Mochi/Foxes. Silvia's view: Wetu is a blocker for full TP2, but NOT for the first TP2 release (route builder), so company-level priority calls keep oscillating. Mochi will likely stop investing in the pricing service to free up time. (Source: Aliaksei/Silvia 1:1)
> **Source**: Aliaksei/Silvia 1:1 (2026-04-24)
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Share Wetu/Gregor knowledge-transfer recording with Silvia
> **Description**: Silvia explicitly asked for the recording of the earlier Gregor session. Send the link.
> **Due**: 2026-04-28
> **Priority**: p2
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Finish Wetu current-state sequence diagram and validate with Gregor
> **Description**: Three cases drawn (recommendation content linking, manual accommodation content input, transport leg). Confirm completeness with Gregor before sharing more broadly.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Build Wetu future-state sequence diagram
> **Description**: Once current-state is validated, draw the post-deprecation interactions (catalog/Elephant/etc.) so the planning session with Mochi/Foxes has both pictures.
> **Due**: 2026-05-04
> **Priority**: p1
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Push Robert and Christina for explicit Wetu priority for Mochi/Foxes
> **Description**: Silvia is "not 100% confident" Mochi can deliver Wetu in C2 because TP2/route-builder priority keeps oscillating "probably from the top + Robert." Get a clear, written priority decision so Mochi can commit a person.
> **Due**: 2026-04-30
> **Priority**: p1
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Decide on Wetu "ninja team" formation
> **Description**: Silvia proposed forming a temporary cross-team pod (Spaeti devs + her one developer) for Wetu deprecation. Decide whether to formalize this; align with Robert and Mochi tech-lead/PM.
> **Due**: 2026-05-04
> **Priority**: p2
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T6] Close out trip-vis aggregation-layer ADR and send to Robert for review
> **Description**: Keep the ADR narrow and technical (where the aggregation layer lives — CFA-internal vs separate service vs Ruby-in-CM). Silvia is adding her benefits-of-options-1-and-2 section. Once she's done, send to Robert. Ownership/scope discussion goes into a separate Slack thread, not the ADR.
> **Due**: 2026-04-29
> **Priority**: p1
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T7] Reallocate Marcus while Foxes builds trip-vis baseline
> **Description**: If Foxes builds the baseline themselves (Magdalena's preference), Marcus is freed for ~1–2 months. Decide where he goes — back to support portal? Into Wetu deprecation work? Joint plan with Kristina; loop Marcus in once direction is set. Marcus rejoins for the enrichment layer once baseline is live.
> **Due**: 2026-05-06
> **Priority**: p2
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T8] Confirm with Kristina/Magdalena: Foxes-builds-baseline plan
> **Description**: Silvia spoke for Magdalena's preference. Confirm directly with Kristina (and through her, Magdalena) before reallocating Marcus.
> **Due**: 2026-04-29
> **Priority**: p2
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T9] Push completeness-check e-ticket false-negative onto C3 (or earlier) roadmap
> **Description**: The e-ticket / generic-voucher false-negative case (the most operationally painful) is explicitly NOT solved in C2 — needs historical lookup. Get this on the C3 plan with a concrete owner; flag as risk in the next bi-weekly initiative status.
> **Due**: 2026-05-08
> **Priority**: p2
> **Source**: Completeness Check info session
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T10] Drop Monday blocker for API outsourcing; sync Talha + Pedro/Nishant async
> **Description**: Aliaksei dropped the Monday blocker session as too early. Instead: Talha briefs Pedro/Nishant on the prior 11 Infotech ↔ Toha conversation history (incl. the recently-requested endpoints) so the new feedback doc reconciles with what was already asked. Then decide: comprehensive feedback list vs. invoking contract clause for our own API spec.
> **Due**: 2026-04-29
> **Priority**: p1
> **Source**: API Outsourcing Intro
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T11] Set up shared spreadsheet for 11 Infotech open-topic tracking
> **Description**: 11 Infotech drops requests, requires repeated chasing. Create (or have Claudia create) a shared spreadsheet with all open topics, who asked, when, status, response. Pedro suggested it; Talha is the primary user.
> **Due**: 2026-04-30
> **Priority**: p2
> **Source**: API Outsourcing Intro
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T12] Decide API outsourcing strategy: feedback list vs invoke contract clause
> **Description**: Two options on the table once the feedback doc is ready: (a) deliver a comprehensive list of fixes and stay on their API; (b) invoke contract clause and provide our own API spec (Pedro and Nishant already worked on a redesign last year that can be evolved). Pedro recommends NOT going to (b) yet — vendor has been accommodating. Decision should be after Pedro/Nishant deliver their brief feedback doc.
> **Due**: 2026-05-08
> **Priority**: p1
> **Source**: API Outsourcing Intro
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T13] Connect Grafana (Alex Wojdynski) to Tourlane observability staff engineer
> **Description**: Aliaksei committed to making the intro. Grafana team will set up a shared Slack channel. Frame the conversation around current pain (one engineer carrying maintenance load, fragmented incident management) so Tourlane gets useful insight regardless of whether a paid evaluation moves forward.
> **Due**: 2026-04-29
> **Priority**: p3
> **Source**: Tourlane <> Grafana Intro
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T14] Raise "shared user-profile ownership across teams" at architecture board
> **Description**: Silvia proposed: every team should own a piece of the user profile (booking domain owns booking-related fields, etc.) instead of one team owning all views. Add to architecture-board agenda.
> **Due**: 2026-05-15
> **Priority**: p3
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T15] Get access to Foxes user portal
> **Description**: During the call Aliaksei realized he doesn't have login access to the user portal Silvia was demoing. Request access.
> **Due**: 2026-04-29
> **Priority**: p4
> **Source**: Aliaksei/Silvia 1:1
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Friday's four meetings produced the most substantive movement of the week. The 11 Infotech API review surfaced design-quality issues serious enough to debate invoking the contract clause for our own spec — Pedro is preparing a written feedback document, with Nishant Tomer (new in the KB) joining the project. The Silvia 1:1 reshuffled the support-portal migration: Magdalena wants Foxes to build the trip-vis baseline themselves, freeing Marcus for the enrichment layer later — triggering a rethink of staffing and possibly closing out the aggregation-layer ADR with Robert this week. On Wetu, Silvia is "not 100% confident" Mochi can deliver in C2 unless Robert/Christina lock in priority over TP2 — a "ninja team" pod is on the table. The completeness-check info session formally confirmed that the painful e-ticket / generic-voucher false-negative case stays unsolved in C2 (needs historical lookup) — worth flagging in the next bi-weekly status. The Grafana intro is preliminary; the meaningful next step is connecting them to Tourlane's observability staff engineer.
