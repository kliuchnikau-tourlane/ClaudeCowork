# API Outsourcing — Last Week Recap & Brief for Talha

## Part 1 — What was agreed last week (your-eyes summary)

Sources: meetings April 22 (Aliaksei/Claudia 1:1, Content Automation Weekly Check with Pedro & Kiryl), April 23 (Späti team refinement with Wieland, Pedro, Kiryl, Claudia, Nishant, Talha; Wieland 1:1), April 24 (API Outsourcing Intro with Pedro & Nishant). Also `#11-infotech-implementation` Slack channel.

**The pivot.** While Talha was out sick on April 22, Pedro escalated his concerns on the 11 Infotech spec. Claudia handed technical alignment over to you, then went on vacation Friday April 24. The project moved from "implement against what they sent us" to "pause, write a comprehensive feedback document, then negotiate".

**Quality concerns Pedro surfaced** (full review on April 24):
- Everything is POST — no GETs.
- Inconsistent property casing (camel/snake/none mixed).
- Overridden fields with multiple meanings — most flagrant: `rate` parameter overloaded as supplier ID.
- Typos that may be in docs or in the actual API.
- The new "get accommodations" endpoint they built sits on a different host with different auth than the booking endpoints.

**Strategic options on the table:**
- (a) Stay on their API, request fixes piecemeal — what we've been doing. High long-term risk of regressions because they don't fork their API for us; any change risks breaking their other customers.
- (b) Deliver a comprehensive feedback document, get fixes in one batch.
- (c) Invoke the contract clause that says we can supply our own API spec.

**Pedro's recommendation:** NOT (c) yet — vendor has been accommodating with previous change requests, and Pedro fully expects them to put a thin layer on top of their existing API anyway. Bias to (b) with a clear up-front document. Decision on (b) vs (c) is deferred until Pedro and Nishant deliver the brief feedback doc next week.

**Team changes:**
- **Nishant Tomer joined the project** on April 24. He and Pedro had worked together last year on the Andes Viva API design — an improved version of the existing adapter API — that's our reference point for what "good" looks like. Nishant will review the 11 Infotech spec against that work and produce a short feedback doc.
- **Aliaksei now drives technical alignment** (handed over from Claudia). Claudia is on vacation (return date TBD).
- Plan was to add Leon as a second engineer (Claudia's preference); ended up being Nishant per the refinement on April 23 — closer fit because of the prior Andes Viva work and because Pedro and Nishant can move faster together.

**Process improvements agreed:**
- Adopt a shared spreadsheet of open topics with 11 Infotech (status, who asked, response) — they keep dropping requests, requires repeated chasing. Pedro suggested it; Talha is the primary user.
- Slack channel `#11-infotech-implementation` is now the transparency channel for red flags (Aliaksei, Robert, Pedro, Talha — Claudia created it April 21).

**Wieland's framing (refinement April 23):** focus, max two priorities at a time. Current #1 is "get 11 Infotech live with the first API + a good migration plan for the others". #2 is destinations. He doesn't want new topics dragged in.

**Reference docs (from the April 24 intro):**
- Vendor brief sent to all vendors: https://docs.google.com/document/d/1KJW1z04Y4mCQ1owwAcVQlX2AkvdeHXR7We1of9M6Cb4/edit
- 11 Infotech API: https://api.11infotech.com/partner/tourlane-gateway-:-api-services
- Slack: `revenue for tech implementation` channel — prior Q&A trail with Toha.

---

## Part 2 — Brief for Talha (welcome back)

Hi Talha — short brief on where 11 Infotech landed while you were out, so you don't have to read through a week of channels and meetings.

**The headline:** we've paused the "fix-as-you-go" approach. Pedro and Nishant are writing a comprehensive feedback document on the 11 Infotech API this week. We may either send them a one-shot list of changes, or — depending on how serious the design issues turn out — invoke the contract clause and provide our own API spec. Pedro's recommendation is to stay short of invoking the clause for now; the vendor has been responsive.

**What changed in the team while you were out:**
- Nishant joined the project. He worked with Pedro last year on an improved adapter API design (Andes Viva); that work is the basis of the redesign proposal we'll likely hand 11 Infotech.
- Aliaksei took over technical alignment from Claudia, who is on vacation.
- Slack channel for transparency: `#11-infotech-implementation` (Aliaksei, Robert, Pedro, Talha). Worth catching up on the backlog.

**What Pedro flagged about the API** (April 24 deep review):
- Everything POST, no GETs.
- Inconsistent casing.
- Overridden fields with multiple meanings — `rate` parameter doubles as supplier ID. Pedro's main concern: even if we map all the meanings correctly today, the next change they make will break something for someone.
- Typos in docs or API (unclear which).
- The new content/get-accommodations endpoint they built for us has a different host and different auth than the booking endpoints. Red flag on consistency.

**What we need from you, ideally early this week:**
1. **Brief Pedro and Nishant on the prior 11 Infotech ↔ Toha conversation history** — specifically the endpoints we already requested and they delivered (e.g., the new content endpoint with its mapping). Without that context, the new feedback doc risks contradicting our own earlier asks and looking incoherent to the vendor.
2. **Your concerns on the API** — Pedro asked us to also surface anything you've been hitting in implementation (he mentioned you'd flagged missing pagination, for example). Add it to whatever doc Nishant starts.
3. **Open-topics spreadsheet** — Pedro wants us to move communication tracking with 11 Infotech to a shared spreadsheet (they drop requests, need chasing). You've been the one feeling the pain — happy for you to set the format, or Claudia can spin one up when she's back.

**Implementation status:**
- Keep going against the current spec for now — partial work is in. We're in the testing-credentials phase. We won't ask 11 Infotech to pause yet; the question of whether to is on the table but no decision.
- Wieland's framing for the cycle: 11 Infotech first API live is the team's #1 priority. Cycle 2 planning is in progress, and this is one of the three top topics (along with Wetu deprecation and catalog management).

**Open decisions to make this week:**
- (b) comprehensive feedback list vs (c) invoke the contract clause + ship our own spec — decided after the Pedro/Nishant feedback doc lands.
- Whether to pair you with someone permanently (Nishant is on it now; Leon was the alternate). Aliaksei will check in with you on this.

If anything's unclear, ping Aliaksei, Pedro, or Nishant directly. Welcome back.
