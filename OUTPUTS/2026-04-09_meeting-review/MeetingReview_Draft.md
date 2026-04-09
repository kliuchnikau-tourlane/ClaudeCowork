# Meeting Notes Review — 2026-04-09 (analyzing meetings from 2026-04-08)

## Meetings Analyzed
- Weekly: Aliaksei / Claudia (11:30–12:00, 2 participants)
- Kick-off: Destinations onboarding (14:30–15:30, 5 participants)
- 1:1 - Sascha / Aliaksei (~15:00–15:45, 2 participants)
- 1:1 - Minh / Aliaksei (15:45–16:30, 2 participants)

---

## Knowledge Base Updates

### People

#### [P1] UPDATE — minh-nguyen.md
> **Current context**: Software engineer on Flamingo. Reviewing Marcus's Completeness Check document. Development goal: become go-to person on Completeness Check. Has twisted ankle; MRI April 9.
> **Proposed addition**: Development plan rewritten: updated section 2 (skills self-assessment) and section 4. Development goals crystallizing around three areas: (1) become go-to person on Completeness Check, (2) improve core engineering skills — architecture, design patterns, system design, (3) AI coding agent proficiency as a must-have skill. Integration testing improvement still blocked by priorities — could use Curiosity Fridays. Actively experimenting with Claude Code workflows during Curiosity Fridays. Will present Completeness Check to Flamingo team next week in slideshow format; plans to validate understanding with Marcus first. (Source: 1:1 Minh/Aliaksei)
> **Source**: 1:1 - Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P2] UPDATE — claudia-tita.md
> **Current context**: Driving Expedia certification. On 11 Infotech: adapter work starting. Flagged team morale concern.
> **Proposed addition**: Legal TnCs for Expedia: lawyer not responding since March 25 despite multiple follow-ups (April 1, April 7, April 8). Will escalate to Veronica if no response today. Expedia voucher strategy: can send a template/sample voucher for certification without full automated generation; Aliaksei confirmed Flamingo can implement generation later if needed. Expedia descriptions: robotic/auto-generated from tree structure, all start with "near something" — not a priority but Expedia's own website has better descriptions, possible hidden field to explore later. 11 Infotech: adapter work started unexpectedly (wasn't in sprint plan) — team caught off-guard during standup, adding to "outsourcing jobs" concern. (Source: Weekly Aliaksei/Claudia)
> **Source**: Weekly: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P3] UPDATE — sascha-burku.md
> **Current context**: Tech Lead on Flamingo. Leading smart booking investigation. Documents Dashboard tech debt on hold.
> **Proposed addition**: Documents Dashboard: MongoDB on mongodb.com auto-upgraded to tier 10 automatically (visible in refinement with Marcus), causing cost concerns vs Postgres which was configured once and stays stable. Prefers to wait for infra pilot project before migrating. Will set Friday reminder to check Documents Dashboard tech debt Confluence page and make adjustments. Learned about Gregor's departure for the first time (was out during TPDA All Hands). Vacation: no May/June plans; two days around July 3 (birthday, will miss Tourlane summer event again), two weeks end of August/September. Tourlane new perk mentioned: extra vacation day per year of tenure, up to 30 max. (Source: 1:1 Sascha/Aliaksei)
> **Source**: 1:1 - Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [P4] UPDATE — marcus-klemann.md
> **Current context**: Developer on Flamingo, Lambus contractor. Wrote detailed Completeness Check document. May need full assignment to rewrite support portal in React.
> **Proposed addition**: Support portal tech: uses Vue.js, Ruby on Rails backend, MongoDB, non-standard CMS (Contentful). Marcus previously rewrote something to make it free (likely hosting optimization). Was one of only two devs active during the short week (with Minh). (Source: 1:1 Minh/Aliaksei, 1:1 Sascha/Aliaksei)
> **Source**: 1:1 - Minh / Aliaksei, 1:1 - Sascha / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Projects

#### [PR1] UPDATE — expedia-integration.md
> **Current status in KB**: Most strategic integration. All work done on Tourlane side, waiting for Expedia feedback. Roughly two-thirds done.
> **Proposed update**: Test booking milestone passed — Tolga signed the email, four points closed. Technical instructions section: done. Remaining items narrowing: (1) voucher/confirmation email — strategy agreed to send template for certification, implement automated generation later; (2) check-in/checkout pay-at-property — Kiryl verifying, thinks data may already be in catalog, checking Trip Planner side; (3) legal TnCs — escalating to Veronica after lawyer non-responsive. Minh implemented latest Expedia request, rolled out and tested with Wetu — no issues so far. Implementation required cross-team coordination (Flamingo ↔ Spaeti ↔ Sales). (Source: Weekly Aliaksei/Claudia, 1:1 Minh/Aliaksei)
> **Source**: Weekly: Aliaksei / Claudia, 1:1 - Minh / Aliaksei
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR2] UPDATE — api-outsourcing.md
> **Current status in KB**: Partner signed. Technical integration starts in C2. Talha assigned. Claudia creating backlog/timeline.
> **Proposed update**: Sprint may need recreation to accommodate 11 Infotech urgency (wasn't planned when sprint started). Claudia to share first version of backlog with API credentials/dates by end of day April 8. Claudia introduced Discova directly to 11 Infotech (no longer Tourlane's problem to mediate). Testing and first integration planned with Agent Trails and Thompson. Agreed: prioritize 11 Infotech live over TP2/area work — delay destinations implementation until 11 Infotech is live. Aliaksei to chat with Talha (April 9) about pairing; if helpful, assign Leon or Minh to pair for speed. (Source: Weekly Aliaksei/Claudia)
> **Source**: Weekly: Aliaksei / Claudia
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [PR3] UPDATE — cycle-2-planning.md
> **Current status in KB**: Planning next cycle (May-June). Multiple competing priorities.
> **Proposed update**: Emerging priority ordering from discussions: (1) Expedia certification — finish ASAP, (2) 11 Infotech API — most urgent for Spaeti post-Expedia, (3) Destinations investigation — late April after infra week, (4) Smart booking — investigation continues but implementation depends on Spaeti room mapping API, (5) Documents Dashboard tech debt — explicitly deprioritized. Next cycle is only 2 months (not 3). Infra weeks consuming significant capacity (next week + one more in April). Team event week ~April 20 good for co-located swarming on destinations. Sascha confirmed: if smart booking + TP2 are C2 priorities, zero room for Documents Dashboard tech debt. (Source: all four meetings)
> **Source**: All meetings
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

### Products

#### [PD1] UPDATE — booking-platform.md
> **Proposed update**: Minh's development plan formalized: three goals (Completeness Check expertise, core engineering skills, AI coding proficiency). Completeness Check team presentation scheduled for next week. Support portal tech stack confirmed: Vue.js frontend, Ruby on Rails backend, MongoDB on mongodb.com (auto-scaling to tier 10), Contentful CMS — all non-standard compared to Tourlane's main stack. Expedia voucher generation: confirmed not a major effort for Flamingo if needed. (Source: 1:1 Minh/Aliaksei, 1:1 Sascha/Aliaksei, Weekly Aliaksei/Claudia)
> **Source**: Multiple meetings
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Suggested Tasks

#### [T1] Chat with Talha about 11 Infotech adapter work and pairing
> **Description**: Discuss pairing on adapter implementations — Talha previously said pair programming works better for adapters. Check if assigning Leon or Minh would help speed things up. Also get his read on timeline for generic adapter.
> **Due**: 2026-04-09
> **Priority**: p1
> **Source**: Weekly: Aliaksei / Claudia — "maybe you can talk with him… check if it would make sense"
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T2] Address team morale around API outsourcing
> **Description**: Team members (especially contractors) concerned that 11 Infotech means "outsourcing their jobs." Aliaksei said "I'll talk to them." Frame it as: we have plenty of other work (flights, activities, cancellation APIs, modifications, rebookings, smart booking) — this frees capacity for higher-value work, not replaces people.
> **Due**: 2026-04-11
> **Priority**: p2
> **Source**: Weekly: Aliaksei / Claudia — team pushback visible during standup
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T3] Ask Kiryl to coordinate Spaeti-side room-level mapping API for smart booking
> **Description**: Sascha needs API: give room DMC ID → get sibling DMC IDs from other suppliers. This lives in Spaeti's Giata/Geonics mapping persistence. Kiryl should investigate what's needed and how to expose it. Write request in Slack chat, tag Aliaksei.
> **Due**: 2026-04-14
> **Priority**: p2
> **Source**: 1:1 - Sascha / Aliaksei — "I will probably ask Kirill to coordinate and explain"
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T4] Review Destinations concepts documents
> **Description**: Pedro recommended everyone go through the Destinations Concepts doc and the effort estimation doc before the investigation phase. Understand the data model, explore how many areas have/don't have shapes, how to navigate accommodation↔property↔area relationships.
> **Due**: 2026-04-18
> **Priority**: p3
> **Source**: Kick-off: Destinations onboarding — Pedro's recommendation
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

#### [T5] Work with Pedro and Kiryl on refining upcoming initiatives
> **Description**: Need to develop better understanding of Wetu dependencies, what Mochi needs from Spaeti, and solution options for each initiative. Focus on having clearer picture before cycle planning. Especially: what are dependencies on Mochi, what they need from us, what we need from them, solution options.
> **Due**: 2026-04-25
> **Priority**: p2
> **Source**: Weekly: Aliaksei / Claudia — "I will try to work with Pedro and Kiryl as much as I can"
> **Action**: [x] Accept  [ ] Decline  [ ] Rephrase

---

## Summary

Yesterday was a packed day with four meetings covering the most critical active workstreams. The biggest operational news: Expedia test booking passed and 11 Infotech adapter work can now start — shifting Spaeti's near-term focus. The Destinations onboarding kick-off laid out the scope and challenges (area mapping, content sourcing, polygon requirements) with investigation phase planned for late April after infra week. Team morale around API outsourcing surfaced again and needs direct attention. The emerging priority stack for C2 is crystallizing: Expedia → 11 Infotech → Destinations investigation → Smart booking, with Documents Dashboard tech debt explicitly shelved.
