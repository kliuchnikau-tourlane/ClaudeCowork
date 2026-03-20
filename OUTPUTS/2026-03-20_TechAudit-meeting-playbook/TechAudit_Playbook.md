# Technical Due Diligence — Meeting Playbook

**Target company:** LMBAQ
**Meeting format:** 3-hour presentation + sample-check
**Your side:** Aliaksei (EM) + CTO/VP Eng
**Objective:** Verify self-assessment claims, surface hidden risks before signing

---

## Pre-Meeting Analysis: What the Self-Assessment Tells Us

### The headline problem: everything is "1"

Out of ~130 line items, fewer than 10 are rated anything other than 1.0 ("Great"). This is either an exceptionally mature company — or a self-assessment that wasn't done critically. The meeting's job is to determine which one.

### Items they rated 2.0 (the only admitted gaps)

| Area | Item | Their comment | What to probe |
|------|------|---------------|---------------|
| Security | GDPR assessment | No external assessment, internal only | Ask for evidence of the internal process |
| Security | Access review cadence | Not quarterly — only on-/offboarding | What happens to dormant accounts? |
| Security | Email encryption at rest | "Not required for GDPR compliance, yet" | Verify this legal interpretation |
| Security | Data encryption | Customer-sensitive yes, public no | Where's the boundary defined? |
| Security | Training | No external security training | Only phishing tests — is that enough? |
| People | Diversity | "Good, but could be better" | Only honest 2.0 in People section |
| People | Talent assessment | "Regular reviews but no specific documents" | No paper trail = no real process |
| Systems | Vendor lock-in | "Some AWS services, no non-solvables" | Which services? Migration cost estimate? |
| Systems | On-call | "Not contractually regulated" | Legal risk post-acquisition |

### Claims that should trigger skepticism

These are rated 1.0 but warrant hard verification:

1. **"Elite" DORA metrics** — multiple deploys per day. For a small company with native apps (App Store review cycles), this needs unpacking. Elite DORA for mobile is unusual.
2. **100% AI coding adoption** — every developer, every project? What does "adoption" mean here — Copilot autocomplete or agentic coding?
3. **All engineers senior+ level** — in a small company, this could be title inflation or a genuine hiring bar. Verify with actual leveling criteria.
4. **< 3 days onboarding to first productive commit** — impressive if true. Ask to see the onboarding checklist and what "productive" means.
5. **~€1,500/month total infrastructure cost** — for multiple products with AI inference, this is suspiciously low. Clarify what's included.
6. **No data warehouse but claims data-driven decisions** — contradictory. Where do analytical queries run?
7. **WCAG accessibility = "Yes"** — for native mobile apps, this is a significant claim. What level? Audited by whom?
8. **No legacy code at all** — every company has some. What's their definition?
9. **Can scale 10x** — based on what? Load testing evidence?
10. **Disaster recovery simulated** — "frequency depends on the project." So is it tested or not?
11. **STRIDE threat modeling "when applicable"** — who decides when it's applicable?
12. **PM2 AGPL claim** — they say "no AGPL licensing obligations apply" because they only use PM2 to run Node.js. This needs legal verification — AGPL obligations can be triggered by network use.

---

## 3-Hour Meeting Agenda

### Suggested role split

| Role | Focus areas | Why |
|------|-------------|-----|
| **Aliaksei** | Systems & Development, People, Integration risks | You know their team members, the codebase they touch, and what integration looks like |
| **CTO/VP Eng** | Security & Disaster Recovery, Architecture, AI/Data | Senior perspective on infrastructure maturity, strategic tech risks |

Both should take notes and score independently — compare afterwards.

---

### Block 1: Security & Disaster Recovery (60 min)

**00:00–00:05 — Opening**
Set expectations: "We've reviewed your self-assessment. Today we want to go deeper on selected areas. We'll ask to see evidence where possible — dashboards, configs, runbooks. This isn't adversarial, it's about understanding the real state."

**00:05–00:25 — Backup & Disaster Recovery (20 min)**

Ask them to show, not tell:

- [ ] "Walk us through a backup restore you did recently. Which system, what triggered it, how long did it take?"
- [ ] "Show us the runbook for a full disaster recovery. If your primary region goes down tomorrow, what happens step by step?"
- [ ] "You said disaster simulations depend on the project — which projects have been tested, and which haven't?"
- [ ] "Show us the monitoring dashboard. How would you know within 5 minutes that a backup failed?"

*Red flag:* No runbook exists, or it hasn't been updated in 6+ months.
*Yellow flag:* DR tested for some projects but not the critical ones.
*Green flag:* Can show a recent DR drill report with timelines and findings.

**00:25–00:40 — Access Management & Credentials (15 min)**

- [ ] "Show us your access control matrix. Who has admin access to what?"
- [ ] "Your access reviews happen only during on-/offboarding. What happens when someone changes roles? Walk us through a concrete example."
- [ ] "Show us the MFA configuration on your GitHub org, CI pipeline, and cloud console."
- [ ] "You use both a custom auth system and Auth0 depending on the project. What's the plan to consolidate? Is there a migration path?"

*Red flag:* No access matrix exists; admin access is broadly granted.
*Yellow flag:* MFA enforced on some but not all critical systems.
*Green flag:* Can show a maintained access inventory with recent review dates.

**00:40–00:55 — Vulnerability Management & Pen Testing (15 min)**

- [ ] "Show us the Dependabot/Renovate dashboard. How many open security PRs right now?"
- [ ] "You mentioned one pen-test on the support portal. Was this internal or external? Do you have the report?"
- [ ] "No external security audits in 12 months — is that a conscious decision or a resource constraint?"
- [ ] "Walk us through your SLA for critical vulnerabilities. You quoted 7–15 days for critical — can you show a recent example that hit this timeline?"
- [ ] "The PM2 AGPL license — have you had legal counsel review the obligation? AGPL can trigger through network interaction."

*Red flag:* No pen-test reports available; vulnerability backlog is unknown.
*Yellow flag:* Internal testing only, no third-party validation.
*Green flag:* Recent pen-test report with remediation tracking.

**00:55–01:00 — Buffer / Catch-up**

---

### Block 2: Development, Systems & Architecture (75 min)

**01:00–01:20 — Architecture & Infrastructure (20 min)**

- [ ] "Show us the C4 Level 1 and Level 2 diagrams. Walk us through the main data flows."
- [ ] "You listed AWS, Azure, MongoDB, Supabase, Fly.io. What runs where, and why the multi-cloud approach? Is this intentional architecture or organic growth?"
- [ ] "€1,500/month total infrastructure — does this include AI inference costs, third-party SaaS, monitoring tools? Walk us through the cost breakdown."
- [ ] "Which AWS services create vendor lock-in? What would a migration to our infrastructure look like?"
- [ ] "Your on-call is 'accepted by all engineers but not contractually regulated.' What happens post-acquisition when employment terms change?"

*Red flag:* No architecture diagrams exist or they're severely outdated. Infra cost excludes significant items.
*Yellow flag:* Multi-cloud is accidental, no clear infrastructure strategy.
*Green flag:* Clear diagrams, justified multi-cloud decisions, transparent cost model.

**01:20–01:40 — Release Process & DORA (20 min)**

- [ ] "You claim Elite DORA deployment frequency — multiple times a day. Show us the deployment history for the last month. All products or just some?"
- [ ] "For the native mobile apps — how do App Store review cycles factor into your deployment frequency? What does 'deploy' mean for iOS?"
- [ ] "Show us a CI/CD pipeline run end-to-end. From push to production — what stages, what gates?"
- [ ] "Rollbacks are 'controlled via stores.' What's the rollback time for a critical bug in production? Walk us through the last time you had to roll back."
- [ ] "What's your change failure rate? How do you measure it?"

*Red flag:* DORA claim doesn't hold up when mobile release cycles are factored in. No pipeline to show.
*Yellow flag:* Elite for backend, much slower for mobile — but wasn't distinguished in self-assessment.
*Green flag:* Can show deployment logs, has meaningful metrics, acknowledges mobile/backend differences.

**01:40–01:55 — AI & Data (15 min)**

- [ ] "You use GPT-4-Turbo, GPT-5, Claude Opus 4.6, BrowserUse LLM 3.0, Gemini 2.5 Flash. Walk us through which model is used where and why."
- [ ] "No data warehouse, no MLOps, no model registry — but data is used for decisions and ContextSDK is in production. Where does analytical work actually happen?"
- [ ] "What's your monthly AI inference spend? You said monitoring per project and user — show us the dashboard."
- [ ] "Prompts are versioned in version control — show us the repo structure. How do you test prompt changes before production?"
- [ ] "Your AI governance policy — can we see it? What does it cover?"
- [ ] "100% AI coding adoption — what does that mean concretely? Which tools, what percentage of code is AI-generated, how do you ensure quality of AI-generated code?"

*Red flag:* AI costs are untracked or much higher than stated. No governance policy exists.
*Yellow flag:* Heavy reliance on third-party AI with no fallback strategy.
*Green flag:* Clear model selection rationale, cost tracking, governance documentation.

**01:55–02:10 — Code Quality & Testing (15 min)**

- [ ] "Test coverage 'depends on project' — give us the actual numbers for your top 3 products."
- [ ] "You said TDD is practiced. Show us a recent PR that demonstrates test-driven development."
- [ ] "Code generated vs. manual ratio also 'depends on project.' What's the overall split? How do you review AI-generated code differently?"
- [ ] "Show us the bug backlog. How many open bugs by severity? What's the oldest unresolved bug?"
- [ ] "What does 'definition of done' look like? You said JIRA 'to be deployed' — is that the only gate?"

*Red flag:* No measurable test coverage data. Bug backlog is large and stale.
*Yellow flag:* Coverage varies wildly across projects with no minimum standard.
*Green flag:* Concrete coverage numbers, consistent testing practices, clean bug backlog.

**02:10–02:15 — Break (5 min)**

---

### Block 3: People & Integration Risks (45 min)

**02:15–02:35 — Team & Skills (20 min)**

- [ ] "All engineers are senior+. What are your leveling criteria? How do you distinguish senior from staff?"
- [ ] "Onboarding in < 3 days to first productive commit — show us the onboarding guide. What counts as 'productive'?"
- [ ] "You said no single points of failure. If your most experienced engineer left tomorrow, which systems would be most affected?"
- [ ] "Knowledge is shared via Confluence — how current is the documentation? When was the last major doc update?"
- [ ] "No skill gaps — really? What about areas like security engineering, SRE, or data engineering?"

*Red flag:* No leveling framework exists. Documentation is outdated or sparse.
*Yellow flag:* Leveling is informal. Some knowledge concentration despite claims.
*Green flag:* Clear leveling criteria, demonstrably current documentation, genuine knowledge distribution.

**02:35–02:50 — Retention, Talent & Culture (15 min)**

- [ ] "Very low retention risk — what's the actual turnover rate over the last 2 years?"
- [ ] "Performance reviews exist but no specific documents — how do you track performance over time? How would we inherit this?"
- [ ] "Education budget is mostly used for AI budgets — does that mean AI tool subscriptions or actual learning?"
- [ ] "Post-acquisition: what are the team's expectations? Have you discussed the acquisition with them? What are their concerns?"
- [ ] "On-call not contractually regulated — what happens when we need to formalize employment terms?"

*Red flag:* Team doesn't know about the acquisition. High risk of attrition post-announcement.
*Yellow flag:* Informal processes that work for a small team but won't scale.
*Green flag:* Team is aware and supportive. Processes are documentable even if informal.

**02:50–02:55 — Integration Readiness (5 min)**

- [ ] "What does your team need from Tourlane to succeed post-acquisition? What are you worried about?"
- [ ] "Which of your current processes or tools would you push back on changing?"

**02:55–03:00 — Wrap-up & Next Steps**

Summarize key findings, agree on follow-up items, timeline for any documentation they need to provide.

---

## Scoring Rubric

Use this during the meeting. Score each area independently (you and CTO/VP Eng), then compare.

### Rating Scale

| Score | Label | Meaning |
|-------|-------|---------|
| 1 | **Verified** | Claim confirmed with evidence. Matches or exceeds self-assessment. |
| 2 | **Partially verified** | Some evidence shown, but gaps exist or the reality is less mature than claimed. |
| 3 | **Not verified** | Unable to confirm the claim. Evidence missing, vague, or contradictory. |
| 4 | **Concern** | Evidence suggests the real state is materially worse than self-assessed. Risk identified. |

### Scorecard

| # | Area | Self-Assessed | Your Score | CTO Score | Evidence Seen? | Notes |
|---|------|---------------|------------|-----------|----------------|-------|
| 1 | Backup & Restore | 1.0 | ___ | ___ | Y / N | |
| 2 | Disaster Recovery | 1.0 | ___ | ___ | Y / N | |
| 3 | Access Management | 2.0 | ___ | ___ | Y / N | |
| 4 | Vulnerability Mgmt | 1.0 | ___ | ___ | Y / N | |
| 5 | Data Privacy & GDPR | 2.0 | ___ | ___ | Y / N | |
| 6 | Architecture | 2.0 | ___ | ___ | Y / N | |
| 7 | Infrastructure Cost | 1.0 | ___ | ___ | Y / N | |
| 8 | Release Process & DORA | 1.0 | ___ | ___ | Y / N | |
| 9 | AI & Data Maturity | 1.0 | ___ | ___ | Y / N | |
| 10 | Code Quality & Testing | 1.0 | ___ | ___ | Y / N | |
| 11 | Team Leveling & Skills | 1.0 | ___ | ___ | Y / N | |
| 12 | Retention & Culture | 1.0 | ___ | ___ | Y / N | |
| 13 | On-call & Ops Maturity | 1.0 | ___ | ___ | Y / N | |
| 14 | Integration Readiness | — | ___ | ___ | — | |

---

## Red / Yellow / Green Flag Reference

### Red Flags (potential deal-breakers or require contract clauses)

- Cannot produce a disaster recovery runbook or evidence of a recent drill
- Undisclosed critical/high vulnerabilities in production
- No external security audit or pen-test ever performed by a third party
- Actual infrastructure costs are significantly higher than stated (hidden costs in AI inference, SaaS tools)
- PM2 AGPL license issue not reviewed by legal counsel
- Key team members unaware of acquisition — high attrition risk
- On-call arrangements have no legal basis — employment law exposure
- No real access review process — risk of lingering permissions

### Yellow Flags (risks to manage post-acquisition)

- Self-assessment is overwhelmingly optimistic — pattern of "everything is great" may indicate lack of critical self-awareness
- Answers frequently say "depends on project" without specifics — suggests no company-wide standards
- No data warehouse despite claiming data-driven decisions — limits analytical capability
- Multi-cloud (AWS, Azure, Fly.io, Supabase, MongoDB) without clear strategy — operational complexity
- Security training limited to phishing simulations — no secure coding education
- WCAG compliance claimed but likely not formally audited for mobile apps
- Talent assessment has no documentation — hard to inherit or continue
- DORA "Elite" claim likely only applies to some products, not all

### Green Flags (positive signals)

- Automated CI/CD with GitHub Actions — modern and maintainable
- Dependabot/Renovate for vulnerability tracking — proactive approach
- Confluence-based documentation culture — knowledge isn't only in heads
- AI-forward strategy with multiple models — aligned with Tourlane's direction
- Low stated infrastructure costs — if verified, this is excellent efficiency
- Team retention appears genuinely strong based on what you know from working with them

---

## Post-Meeting Assessment Template

Complete within 24 hours of the meeting while details are fresh.

### Summary

**Date of meeting:**
**Attendees (their side):**
**Attendees (our side):**
**Overall impression (1 sentence):**

### Key Findings

**Confirmed strengths (claims that held up):**
1.
2.
3.

**Gaps between self-assessment and reality:**
1.
2.
3.

**New risks discovered (not in self-assessment):**
1.
2.
3.

### Risk Matrix

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation | Owner |
|------|--------------------|-----------------|-----------:|-------|
| | | | | |

### Recommendations

**Proceed / Proceed with conditions / Do not proceed:**

**If proceeding, required contract clauses or conditions:**
1.
2.
3.

**Immediate post-acquisition actions needed:**
1.
2.
3.

**90-day integration priorities:**
1.
2.
3.

### Open Items (to be followed up before signing)

| # | Item | Owner | Deadline | Status |
|---|------|-------|----------|--------|
| 1 | | | | |

### Appendix: Evidence Collected

List all documents, screenshots, dashboards, and demos shown during the meeting for the audit trail.

| # | Evidence | Format | Provided by | Notes |
|---|----------|--------|-------------|-------|
| 1 | | | | |
