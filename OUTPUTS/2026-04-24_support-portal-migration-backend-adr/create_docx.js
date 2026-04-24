const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak
} = require("docx");

// Helpers
const heading1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun(text)]
});

const heading2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun(text)]
});

const heading3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun(text)]
});

const para = (runs, opts = {}) => new Paragraph({
  ...opts,
  children: Array.isArray(runs) ? runs : [new TextRun(runs)]
});

const bold = (text) => new TextRun({ text, bold: true });
const text = (t) => new TextRun(t);
const italic = (t) => new TextRun({ text: t, italics: true });

const bullet = (runs, level = 0) => new Paragraph({
  numbering: { reference: "bullets", level },
  children: Array.isArray(runs) ? runs : [new TextRun(runs)]
});

const spacer = () => new Paragraph({ children: [] });

const hrule = () => new Paragraph({
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "CCCCCC", space: 1 } },
  children: []
});

// Metadata row helper
const metaRow = (label, value) => para([bold(label), text(value)]);

// Document
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 }
      },
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
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new TextRun({ text: "ADR: Backend Approach for Support Portal Migration", font: "Arial", size: 18, color: "888888" })],
          alignment: AlignmentType.RIGHT
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [new TextRun({ text: "Page ", font: "Arial", size: 18, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" })],
          alignment: AlignmentType.CENTER
        })]
      })
    },
    children: [
      // Title
      heading1("ADR: Backend Approach for Support Portal Migration"),
      spacer(),
      metaRow("Author: ", "Aliaksei Kliuchnikau"),
      metaRow("Date: ", "2026-04-24"),
      metaRow("Status: ", "Proposed"),
      metaRow("Reviewers: ", "Robert Wolf, Silvia de la Torre, Karolina Grabowska, Jakob Pupke, Markus Klemann"),
      spacer(),
      hrule(),
      spacer(),

      // Context
      heading2("Context"),
      para("We are migrating the authenticated customer area of the Support Portal (Lambus/Nuxt) into the CFA monorepo (Next.js/React, Fusion). The frontend migration approach is agreed upon. This ADR addresses where the server-side data aggregation logic should live."),
      spacer(),
      para([bold("What the Support Portal backend does today:")]),
      bullet("Fetches data from multiple sources (TripViz S3 JSON, Salesforce, Documents Dashboard, CM, Gecko API)"),
      bullet("Aggregates and transforms it for display"),
      bullet("All TypeScript, runs as server-side functions in Nitro (Nuxt\u2019s server layer)"),
      spacer(),
      para([bold("Current consumers: "), text("Support Portal web app only. No other service consumes this aggregation logic today.")]),
      spacer(),
      para([bold("Key constraints:")]),
      bullet([text("Foxes team (future owners) are frontend engineers \u2014 no backend (Ruby) capacity until June (when new Backend engineer joins). Jakob knows Ruby, but is not a part of the Foxes team and is fully busy with other commitments (notably Zoom migration, Infrastructure guild)")]),
      bullet([text("Markus (current developer of the Support Portal) knows TypeScript, not Ruby")]),
      bullet([text("Company direction: avoid unnecessary microservices, build on domain boundaries")]),
      bullet([text("Mobile app (Lambus) has its own tightly coupled implementation and is a proprietary Lambus product that is purchased by other Lambus customers (it is not Tourlane-tailored) \u2014 cannot reuse a shared service without significant rework on the Lambus side")]),
      bullet([text("Decision needed by April 27 for Cycle 2 planning")]),
      spacer(),
      hrule(),
      spacer(),

      // Options
      heading2("Options"),

      // Option 1
      heading3("Option 1: Server-side functions in CFA"),
      para("Handle all data fetching and transformation in CFA using Next.js server actions + libs/data/*."),
      spacer(),
      bullet([bold("TripViz: "), text("server-side call to TripViz S3 JSON, type mapping logic ported into CFA")]),
      bullet([bold("Documents: "), text("direct call to Documents Dashboard API from CFA")]),
      bullet([bold("Invoices: "), text("routed through CM (avoids adding a direct CFA \u2194 Salesforce connection)")]),
      spacer(),
      para([bold("Pros:")]),
      bullet("No new service to deploy or maintain"),
      bullet("Foxes team can own and review (TypeScript, same patterns they already use)"),
      bullet("Fastest to implement \u2014 Markus ports existing TS logic directly"),
      bullet("Aligns with existing CFA architecture (server actions + libs/data/*)"),
      bullet("Single deployment pipeline, no extra infra"),
      spacer(),
      para([bold("Cons:")]),
      bullet("Logic coupled to CFA \u2014 not reusable by other consumers. If a second consumer appears, refactoring needed."),
      spacer(),

      // Option 2
      heading3("Option 2: New aggregation service"),
      para("Create a standalone service that aggregates all data sources. CFA calls one endpoint."),
      spacer(),
      para([bold("Sub-option 2a \u2014 Ruby service:")]),
      bullet("Maintained by Foxes once BE engineer joins in June"),
      bullet("Aligns with Tourlane\u2019s backend language"),
      spacer(),
      para([bold("Sub-option 2b \u2014 TypeScript/Fastify service:")]),
      bullet("Markus can build it now"),
      bullet("Foxes are familiar with Fastify patterns"),
      spacer(),
      para([bold("Pros:")]),
      bullet("Reusable by future consumers \u2014 though there are no clear future consumers at this point. Mobile app is out of the equation (Lambus-owned, tightly coupled to their stack)."),
      bullet("Logic is independently deployable and scalable"),
      spacer(),
      para([bold("Cons:")]),
      bullet("New service to deploy, monitor, and maintain"),
      bullet("Only one consumer today \u2014 premature abstraction"),
      bullet("2a: no Ruby capacity until June, blocks migration timeline"),
      bullet("2b: adds a TypeScript service that FE team must maintain"),
      bullet("Roughly doubles backend migration effort vs. Option 1, adding significant time on top of the currently estimated 3\u20134 sprints"),
      spacer(),

      // Option 3
      heading3("Option 3: Everything into CM"),
      para("Route all data through CM \u2014 invoices, documents, and trip data. CM becomes the aggregation layer."),
      spacer(),
      para([bold("Pros:")]),
      bullet("CM already handles customer auth and Salesforce connection"),
      bullet("Centralized customer data access"),
      bullet("CFA only needs to verify login (already in place)"),
      spacer(),
      para([bold("Cons:")]),
      bullet("CM is a Ruby service \u2014 no Ruby capacity to build this now"),
      bullet("Overloads CM with view-specific aggregation logic that doesn\u2019t belong to the customer domain (e.g. trip visualization data has nothing to do with customer management)"),
      bullet("Increases scope and timeline significantly"),
      spacer(),
      hrule(),
      spacer(),

      // Decision
      heading2("Decision"),
      para([bold("Option 1 \u2014 server-side functions in CFA, invoices through CM.")]),
      spacer(),
      para([bold("Rationale:")]),
      bullet([text("The only con \u2014 "), italic("\u201CLogic coupled to CFA \u2014 not reusable by other consumers\u201D"), text(" \u2014 we consider a non-issue at this stage: only one consumer exists today. Building a separate service is premature. The current logic is view-specific backend-for-the-frontend code.")]),
      bullet("Fastest path to delivery given resource constraints (Markus, TypeScript, no Ruby capacity)."),
      bullet("Foxes team can own and maintain it \u2014 same language, same patterns, same repo."),
      bullet("If a second consumer emerges (mobile app, AI agent), we can extract into a service then. The code will already be cleanly organized in libs/data/*."),
      bullet([text("Invoices go through CM because: (a) CM already has the Salesforce connection, (b) we avoid adding a direct CFA \u2194 Salesforce dependency, (c) invoice data naturally fits the customer domain.")]),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outPath = "/sessions/trusting-hopeful-galileo/mnt/ClaudeCowork/OUTPUTS/2026-04-24_support-portal-migration-backend-adr/SupportPortalMigration_ADR-Backend-Approach.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Created:", outPath);
});
