const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, ExternalHyperlink,
  HeadingLevel, BorderStyle, WidthType, ShadingType, PageNumber, PageBreak
} = require("docx");

// Reusable styles
const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, font: "Arial", size: 20 })] })]
  });
}

function cell(children, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: Array.isArray(children) ? children : [new Paragraph({ children: [new TextRun({ text: children, font: "Arial", size: 20 })] })]
  });
}

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 200 }, children: [new TextRun({ text, bold: true, font: "Arial", size: 32 })] });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 280, after: 160 }, children: [new TextRun({ text, bold: true, font: "Arial", size: 26 })] });
}

function heading3(text) {
  return new Paragraph({ spacing: { before: 200, after: 120 }, children: [new TextRun({ text, bold: true, font: "Arial", size: 22 })] });
}

function para(runs, opts = {}) {
  const children = runs.map(r => {
    if (typeof r === "string") return new TextRun({ text: r, font: "Arial", size: 22 });
    return new TextRun({ font: "Arial", size: 22, ...r });
  });
  return new Paragraph({ spacing: { after: 120 }, ...opts, children });
}

function bullet(runs, level = 0) {
  const children = runs.map(r => {
    if (typeof r === "string") return new TextRun({ text: r, font: "Arial", size: 22 });
    return new TextRun({ font: "Arial", size: 22, ...r });
  });
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 80 },
    children
  });
}

function spacer() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

function hrule() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "CCCCCC", space: 1 } },
    children: []
  });
}

// Workstream helper
function workstream(number, title, items) {
  const children = [heading3(`${number}. ${title}`)];
  for (const item of items) {
    children.push(bullet([{ text: `${item.label}: `, bold: true }, item.value]));
    if (item.subitems) {
      for (const sub of item.subitems) {
        children.push(bullet([sub], 1));
      }
    }
  }
  return children;
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1F3864" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "2E75B6" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
        ]
      },
      {
        reference: "numbers",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        ]
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new TextRun({ text: "Decision Proposal: Support Portal Migration", font: "Arial", size: 18, color: "888888", italics: true })],
          alignment: AlignmentType.RIGHT
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Page ", font: "Arial", size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" })
          ]
        })]
      })
    },
    children: [
      // Title
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Decision Proposal", font: "Arial", size: 40, bold: true, color: "1F3864" })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({ text: "Support Portal Migration into the Tourlane Stack", font: "Arial", size: 32, color: "2E75B6" })]
      }),

      // Metadata
      para([{ text: "Author: ", bold: true }, "Aliaksei Kliuchnikau"]),
      para([{ text: "Date: ", bold: true }, "2026-03-26"]),
      para([{ text: "Audience: ", bold: true }, "Engineering Leadership, Product Management (Foxes, Lambus, Flamingo)"]),
      para([{ text: "Status: ", bold: true }, "Draft \u2014 for alignment before C2 2026 planning"]),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Reference: ", bold: true, font: "Arial", size: 22 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "[Internal] February 2026: Traveler Crossing <> Support Portal <> Customer Portal", font: "Arial", size: 22, style: "Hyperlink" })],
            link: "https://docs.google.com/document/d/1cM8j6DnG7WAx_cdY0VhDjoWqxevO8uzCXENAf-CA5E0/edit?tab=t.0"
          })
        ]
      }),

      hrule(),

      // Executive Summary
      heading1("Executive Summary"),
      para(["This proposal recommends migrating the Support Portal fully into Tourlane\u2019s CFA monorepo (Option 4, sub-option B) and transferring case deflection ownership to the Foxes team."]),
      para(["After deeper investigation, this project is larger than initially anticipated. It will not be completed by the end of Cycle 1. The migration is not just a code rewrite \u2014 it requires design work (Fusion redesign), onboarding (Markus into CFA and Fusion), CMS migration (Strapi v5 to Contentful), and QA investment, on top of the frontend and backend rewrite itself. A concrete plan with a realistic estimate and timeline can only be produced after the general approach is decided \u2014 it is not possible to do both this week."]),
      para([{ text: "What needs to be decided now (before C2 planning in ~2 weeks):", bold: true }]),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Migration approach: ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "Do we go with full migration into CFA (sub-option B, recommended) or partial migration of authenticated features only (sub-option A)?", font: "Arial", size: 22 }),
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Case deflection ownership \u2014 this is the key decision. ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "The Foxes team should own case deflection as part of the User Portal. This must be explicitly agreed upon \u2014 it unblocks C2 roadmap planning for both teams. Note: the Foxes PM acknowledges that as the User Portal grows in complexity, ownership may eventually be split by phase (e.g., Foxes for pre-booking, Flamingo for post-booking). Regardless of future team structure, tech and content ownership should remain with Tourlane.", font: "Arial", size: 22 }),
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Contractual review with Lambus: ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "Are there IP or licensing blockers to migrating the codebase? This gates sub-option B and must be answered ASAP.", font: "Arial", size: 22 }),
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Design capacity: ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "Can Tourlane Design take on the Fusion redesign? Without proper design specs, Markus would have to make design decisions during migration that will likely require a rewrite afterwards \u2014 something we want to avoid.", font: "Arial", size: 22 }),
        ]
      }),
      spacer(),
      para([{ text: "What we solve after the decision is made:", bold: true }]),
      bullet(["Detailed migration plan, timeline, and phasing."]),
      bullet(["QA approach and capacity allocation (no dedicated QA exists \u2014 this will be a joint effort)."]),
      bullet(["CMS migration scope (which features depend on Strapi and need to move to Contentful)."]),
      bullet(["Contentful ownership and support for migration."]),
      bullet(["Admin area: migrate to CFA or keep separate."]),
      spacer(),
      para(["The rest of this document provides the full analysis, workstream breakdown, and the complete list of decisions requested."]),

      hrule(),

      // Problem Statement
      heading1("Problem Statement"),
      para(["Tourlane is building a User Portal (owned by the Foxes team) that will replace Traveller Crossing. In parallel, the Support Portal (built and maintained by Lambus, with Flamingo involvement) provides authenticated self-service features \u2014 trip overview, invoices, app download, and a contact/ticket flow \u2014 that overlap significantly with the User Portal\u2019s intended scope."]),
      para(["As of today, the two portals are converging on the same user surface but diverge on tech stack (NuxtJS/Vue vs. NextJS/React), design system (custom Vue components vs. Fusion), CMS (Strapi v5 vs. Contentful), and team ownership. This creates friction in four areas:"]),

      bullet([{ text: "Ownership conflict on \u201Ccase deflection.\u201D ", bold: true }, "Both portals touch the self-service experience. There is no agreed owner for the case deflection initiative going into C2 2026."]),
      bullet([{ text: "Fragmented user experience. ", bold: true }, "The Support Portal does not use Fusion (Tourlane\u2019s design system), so authenticated users move between two visually inconsistent experiences."]),
      bullet([{ text: "Engineering inefficiency. ", bold: true }, "Maintaining two separate stacks for overlapping functionality doubles the cost of changes and limits cross-team contribution."]),
      bullet([{ text: "External codebase ownership. ", bold: true }, "The Support Portal codebase is owned by Lambus, an external company. Tourlane does not have access to or IP ownership of this codebase, which creates a strategic dependency on a third party for a core customer-facing product."]),

      spacer(),
      para(["A decision is needed before C2 planning begins (~2 weeks from now) to unblock roadmap alignment and resource allocation. C2 planning will be heavily influenced by the ownership of the \u201Ccase deflection\u201D area, which makes this decision a prerequisite for both teams\u2019 roadmaps."]),

      hrule(),

      // Background
      heading1("Background: Options Explored So Far"),
      para(["Hans\u2019s original document outlined three options. A fourth was proposed by Karolina (Foxes team). Below is a brief recap \u2014 the full analysis is in the referenced Google Doc."]),

      para([{ text: "Option 1 \u2014 Reuse Support Portal as-is (NuxtJS). ", bold: true }, "Foxes would adopt the NuxtJS stack. Rejected: imposes a learning curve on the Foxes team, blocks Fusion reuse, and locks Tourlane into a non-standard stack."]),
      para([{ text: "Option 2 \u2014 Split guest/authenticated; rewrite authenticated to NextJS. ", bold: true }, "Keep the guest-facing Support Portal (FAQ, contact form) in NuxtJS; rewrite the authenticated area to NextJS. Hans\u2019s recommendation. Good pragmatic middle ground, but leaves the guest-facing portal outside the Tourlane stack indefinitely."]),
      para([{ text: "Option 3 \u2014 Keep portals separate; build User Portal from scratch. ", bold: true }, "No migration. Rejected: months of delay, loss of existing feature parity, context loss for users."]),
      para([{ text: "Option 4 \u2014 Migrate Support Portal into the CFA monorepo (Karolina\u2019s proposal). ", bold: true }, "Full migration of the Support Portal into the CFA monorepo as a package, using React/NextJS and Fusion. This is the evolution of Option 2 that the Foxes team supports."]),

      hrule(),

      // Recommendation
      heading1("Recommendation: Option 4, with two sub-options"),
      para(["This proposal recommends Option 4 \u2014 migrating the Support Portal into the CFA monorepo \u2014 and presents two sub-options for how far the migration goes."]),

      heading2("Sub-option A: Partial migration (authenticated features only)"),
      para(["Migrate only the user-authenticated parts of the Support Portal (trip overview, invoices, finance, app download, etc.) into the User Portal within CFA. Leave the remaining guest-facing Support Portal (FAQ pages, contact/ticket submission form) running as a standalone thin application in its current Lambus-maintained stack."]),
      para([{ text: "When this makes sense: ", bold: true }, "If there are contractual or timeline constraints that make full migration impractical in the near term, or if the guest-facing support experience is considered low-priority and stable enough to leave as-is."]),
      para([{ text: "Tradeoffs:", bold: true }]),
      bullet(["Faster initial delivery \u2014 smaller migration scope."]),
      bullet(["Two systems remain in production: the thin guest-facing Support Portal (Lambus stack) and the User Portal (CFA)."]),
      bullet(["The guest-facing portal still won\u2019t use Fusion, so there\u2019s a UX seam between the unauthenticated support experience and the authenticated portal."]),
      bullet(["CMS split remains: Strapi for the guest portal, Contentful for everything in CFA."]),
      bullet(["Ongoing (quite minimal) maintenance burden on the Lambus stack."]),

      heading2("Sub-option B: Full migration (recommended)"),
      para(["Migrate the entire Support Portal \u2014 both guest-facing and authenticated \u2014 into the CFA monorepo. The support-specific features (FAQ, ticket submission) become a package within CFA, built on Fusion and backed by Contentful instead of Strapi."]),
      para([{ text: "Why this is recommended:", bold: true }]),
      bullet(["After migrating the authenticated features, what remains in the Support Portal is a thin shell (FAQ + ticket form). The marginal effort to migrate this too is low relative to the benefit."]),
      bullet(["Eliminates the Strapi v5 dependency entirely \u2014 one CMS (Contentful) for all customer-facing content."]),
      bullet(["Unified UX end-to-end: users never leave the Fusion design system."]),
      bullet(["Single codebase, single deployment pipeline, built the Tourlane way \u2014 familiar to every engineer at Tourlane, which simplifies future extensions and ownership transfers."]),
      bullet(["Full and clear IP ownership \u2014 the entire customer-facing portal codebase lives within Tourlane, removing the strategic dependency on Lambus."]),
      bullet(["Removes ongoing maintenance cost of a separate Lambus-hosted application."]),

      spacer(),
      para([{ text: "Prerequisite to validate: ", bold: true }, "Contractual terms with Lambus must be reviewed to confirm there are no IP or licensing restrictions on migrating the full Support Portal codebase into Tourlane\u2019s own repository. This should be clarified before committing to sub-option B over A."]),

      hrule(),

      // Case Deflection
      heading1("Key Decision: Case Deflection Ownership"),
      para(["Independent of the migration sub-option, a critical decision is needed on who owns the ", { text: "case deflection", bold: true }, " business initiative going forward."]),
      para([{ text: "Proposal: The Foxes team owns case deflection as part of the User Portal.", bold: true }]),
      para(["Rationale:"]),
      bullet(["The product vision (outlined by Magdalena and Karolina in the referenced doc) is clear: the User Portal is where customers find answers independently; the Support Portal is the fallback when self-service isn\u2019t enough. Case deflection is fundamentally a User Portal concern \u2014 the richer the portal, the fewer support cases."]),
      bullet(["After migration, the support-specific logic (ticket submission, FAQ) becomes a component within the Foxes-owned codebase. Splitting ownership of case deflection across teams when the code lives in one place creates unnecessary coordination overhead."]),
      bullet(["The Foxes team is already planning C2 around self-service capabilities (payment schedules, invoices, booking confirmations, travel documents). Case deflection is the natural extension."]),

      spacer(),
      para(["This frees up the Flamingo and Lambus teams from Support Portal responsibilities entirely, allowing them to focus on their primary priority \u2014 the Booking Platform. The Foxes team takes full ownership of the customer-facing portal area, including case deflection."]),
      para(["Note: the Foxes PM acknowledges that as the User Portal grows in complexity, ownership may eventually be split by phase \u2014 e.g., Foxes for pre-booking and Flamingo for post-booking. Regardless of future team structure, tech and content ownership should remain with Tourlane."]),
      para(["This ownership shift should be explicitly agreed upon by Product (Karolina, Kristina) and Engineering leadership before C2 planning begins."]),

      hrule(),

      // Migration Workstreams
      heading1("Migration Workstreams"),
      para(["The migration is not just a code rewrite \u2014 it requires planning, design, onboarding, and only then the actual rework. The workstreams below reflect this sequencing. This is a multi-cycle effort; it will not be done by the end of C1."]),
      para([{ text: "Known milestones:", bold: true }]),
      bullet([{ text: "Markus available: ", bold: true }, "~2 weeks from now (Kristina confirmed 2 weeks is the bare minimum as he\u2019s busy finishing current commitments)."]),
      bullet([{ text: "C2 planning: ", bold: true }, "~2 weeks from now."]),
      bullet([{ text: "C2 start: ", bold: true }, "~4 weeks from now. Markus can move to full-time on the migration."]),

      // Workstream 1
      ...workstream("1", "Contractual and IP review", [
        { label: "What", value: "Review contractual terms with Lambus to confirm there are no IP or licensing restrictions on migrating the Support Portal codebase into Tourlane\u2019s CFA monorepo." },
        { label: "Who", value: "Veronica." },
        { label: "Prerequisite for", value: "This gates sub-option B. If contractual blockers exist, the recommendation falls back to sub-option A (partial migration only)." },
        { label: "Risks", value: "This is on the critical path \u2014 delay here delays the entire decision and all downstream work." },
        { label: "Decision needed", value: "Are there IP or licensing constraints? Must be answered ASAP." },
      ]),

      // Workstream 2
      ...workstream("2", "Design: Redesign to Fusion", [
        { label: "What", value: "The Support Portal UI must be redesigned to conform to Fusion (Tourlane\u2019s design system). This is not a 1:1 port of existing screens \u2014 it requires design work to ensure migrated features feel native within the User Portal. Covers both authenticated features and guest-facing features (if sub-option B)." },
        { label: "Who", value: "Tourlane Design team (recommended)." },
        { label: "Prerequisite for", value: "Frontend migration \u2014 Markus cannot rewrite screens without Fusion specs to build against. Design work can potentially start now from existing Support Portal screens (no code dependency) and should be ahead of or at least in parallel with onboarding." },
        { label: "Risks", value: "" , subitems: [
          "Design capacity is unconfirmed. If Tourlane Design cannot take this on, it becomes the critical bottleneck for the entire migration.",
          "No design stakeholder has been formally involved in this discussion yet."
        ]},
        { label: "Decision needed", value: "Can Tourlane Design take on the Fusion redesign? This must be confirmed before C2 planning." },
      ]),

      // Workstream 3
      ...workstream("3", "Onboarding Markus to CFA and Fusion", [
        { label: "What", value: "Markus is experienced with React/NextJS (confirmed). He needs structured onboarding on the Fusion design system and CFA monorepo conventions/structure to ensure the migrated code respects all conventions of the target system." },
        { label: "Who", value: "Foxes team provides onboarding support. They have committed to this and are ready to provide an isolated CFA environment." },
        { label: "Prerequisite for", value: "Frontend migration. Markus should not start writing migration PRs before understanding the target system\u2019s conventions." },
        { label: "Risks", value: "Onboarding needs to be structured \u2014 ad-hoc support alone may not be sufficient for a codebase and design system Markus hasn\u2019t worked with before." },
      ]),

      // Workstream 4
      ...workstream("4", "Frontend migration (Vue/NuxtJS \u2192 React/NextJS in CFA)", [
        { label: "What", value: "Rewrite the Support Portal frontend from NuxtJS/Vue to NextJS/React within the CFA monorepo. Authenticated features (trip overview, invoices, finance, app download) are migrated first; guest-facing features (FAQ, contact form) follow if sub-option B is chosen." },
        { label: "Who", value: "Markus (primary). Markus submits PRs into the CFA monorepo; Foxes review on a rolling basis. This runs in parallel with the Foxes\u2019 own Traveller Crossing \u2192 User Portal migration (confirmed \u2014 no blocking dependency). Foxes are ready to receive a high volume of PRs." },
        { label: "Prerequisite for", value: "QA, decommissioning of the old Support Portal." },
        { label: "Depends on", value: "Onboarding complete, Fusion design specs available for the screens being migrated." },
        { label: "Risks", value: "", subitems: [
          "Markus is the single point of execution. If his availability shifts, the entire migration shifts.",
          "This is the bulk of the work \u2014 scope depends on how many screens and features exist in the authenticated and guest-facing areas."
        ]},
      ]),

      // Workstream 5
      ...workstream("5", "Backend / API migration", [
        { label: "What", value: "The Support Portal has existing API connections to Trip Planner, Salesforce (if option B is chosen), the App, and Documents Dashboard. These integrations need to be verified and potentially re-wired within the CFA context." },
        { label: "Who", value: "Markus, with support from the Foxes team on CFA-side patterns." },
        { label: "Runs alongside", value: "Frontend migration \u2014 each feature\u2019s API connections are migrated as the frontend for that feature moves to CFA." },
        { label: "Risks", value: "Most API connections may transfer cleanly if endpoints remain the same. Risk is low but needs verification per integration." },
      ]),

      // Workstream 6
      ...workstream("6", "CMS migration (Strapi v5 \u2192 Contentful)", [
        { label: "What", value: "The Support Portal uses Strapi v5 as its CMS. It is not yet clear which features depend on CMS-driven content. If any CMS-driven content belongs to the authenticated user experience (e.g., help articles, FAQs surfaced within the portal), it needs to migrate to Contentful even under sub-option A. Under sub-option B, all CMS content migrates. This includes content modeling in Contentful, data migration, and updating the frontend to consume Contentful APIs." },
        { label: "Who", value: "Needs to be determined \u2014 likely Markus with guidance from whoever owns Contentful at Tourlane." },
        { label: "Depends on", value: "Contentful owner identified and available to support. Understanding of what exactly is CMS-driven in the current Support Portal." },
        { label: "Risks", value: "", subitems: [
          "Contentful ownership at Tourlane is unclear. Markus will need guidance on content modeling and migration patterns.",
          "The scope of CMS usage in the Support Portal is not yet assessed \u2014 it may be limited to FAQ pages or it may be more pervasive. This needs investigation before migration planning."
        ]},
        { label: "Decisions needed", value: "Identify the Contentful owner at Tourlane. Clarify which Support Portal features depend on Strapi to determine CMS migration scope." },
      ]),

      // Workstream 7
      ...workstream("7", "QA", [
        { label: "What", value: "Migrated features need testing within the CFA context \u2014 regression testing against existing Support Portal functionality, plus integration testing within the User Portal flow. End-to-end QA before decommissioning the old Support Portal." },
        { label: "Who", value: "Tourlane does not have a dedicated QA function. This will require a joint effort on the Tourlane side \u2014 the teams involved (Foxes, Flamingo) will need to invest time into testing the migration." },
        { label: "Depends on", value: "Frontend migration delivering testable features." },
        { label: "Risks", value: "", subitems: [
          "Without dedicated QA, testing effort falls on engineers and managers already allocated to other work. This needs to be accounted for in planning.",
          "Test coverage of the existing Support Portal is unclear. If there are no existing strong automated tests coverage, the manual testing effort may be significant."
        ]},
        { label: "Decision needed", value: "Who contributes to QA effort and how much capacity is allocated? Must be agreed before migration work begins." },
      ]),

      // Workstream 8
      ...workstream("8", "Admin area", [
        { label: "What", value: "The Support Portal includes an admin area (impersonation, support request tracking) that is already built in NextJS. A decision is needed on whether this also moves into CFA or remains separate." },
        { label: "Who", value: "To be determined." },
        { label: "Risks", value: "Low. The admin area is already in NextJS, so migration effort would be smaller if needed. Not on the critical path." },
        { label: "Decision needed", value: "Should the admin area move into CFA or remain a separate application?" },
      ]),

      hrule(),

      // Decisions table
      heading1("Decisions Requested"),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [450, 3200, 3376, 2000],
        rows: [
          new TableRow({
            children: [
              headerCell("#", 450),
              headerCell("Decision", 3200),
              headerCell("Proposed answer", 3376),
              headerCell("Decide by", 2000),
            ]
          }),
          new TableRow({ children: [
            cell("1", 450), cell("Which migration option?", 3200),
            cell("Option 4, sub-option B (full migration into CFA)", 3376),
            cell("Before C2 planning (~2 weeks)", 2000)
          ]}),
          new TableRow({ children: [
            cell("2", 450), cell("Who owns case deflection?", 3200),
            cell("Foxes team, as part of User Portal", 3376),
            cell("Before C2 planning (~2 weeks)", 2000)
          ]}),
          new TableRow({ children: [
            cell("3", 450), cell("Are there contractual blockers to full migration?", 3200),
            cell("To be validated with Lambus", 3376),
            cell("ASAP \u2014 gates sub-option B", 2000)
          ]}),
          new TableRow({ children: [
            cell("4", 450), cell("Who does Design for the migration?", 3200),
            cell("Tourlane Design team", 3376),
            cell("Before C2 planning", 2000)
          ]}),
          new TableRow({ children: [
            cell("5", 450), cell("Who contributes to QA and with how much capacity?", 3200),
            cell("Joint effort across Tourlane teams \u2014 to be agreed", 3376),
            cell("Before migration work begins", 2000)
          ]}),
          new TableRow({ children: [
            cell("6", 450), cell("Who owns Contentful and can support CMS migration?", 3200),
            cell("To be identified", 3376),
            cell("Before CMS migration begins", 2000)
          ]}),
          new TableRow({ children: [
            cell("7", 450), cell("Admin area: migrate to CFA or keep separate?", 3200),
            cell("To be decided", 3376),
            cell("During C2", 2000)
          ]}),
        ]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/sessions/trusting-hopeful-galileo/mnt/ClaudeCowork/OUTPUTS/2026-03-26_support-portal-migration-proposal/SupportPortalMigration_Decision-Proposal.docx", buffer);
  console.log("DOCX created successfully");
});
