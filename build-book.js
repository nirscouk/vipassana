const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
        BorderStyle, WidthType, ShadingType, PageNumber, PageBreak } = require("docx");
const buildContent = require("./book-body");
const fs = require("fs");

const FONT = "Georgia";
const SANS = "Calibri";
const INK = "1A1A1A";
const MUTED = "4A4A4A";
const ACCENT = "3D4A3A";
const GOLD = "8A7348";
const RULE = "C4B89A";
const CREAM = "F4F0E6";
const ROW_ALT = "F7F4EC";

const PAGE_W = 8640;  // 6"
const PAGE_H = 12960; // 9"
const MARGIN = { top: 1080, right: 1080, bottom: 1080, left: 1080 };
const CW = PAGE_W - MARGIN.left - MARGIN.right; // 6480

const thin = { style: BorderStyle.SINGLE, size: 4, color: RULE };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 200, before: opts.before ?? 0, line: 312 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    indent: opts.first ? { firstLine: 360 } : opts.indent,
    children: [new TextRun({ text, font: FONT, size: opts.size || 22, italics: opts.i, bold: opts.b, color: opts.color || INK })],
  });
}

function runs(items, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 200, before: opts.before ?? 0, line: 312 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    indent: opts.first ? { firstLine: 360 } : undefined,
    children: items.map((it) =>
      typeof it === "string"
        ? new TextRun({ text: it, font: FONT, size: 22, color: INK })
        : new TextRun({ text: it.t, font: FONT, size: it.size || 22, italics: it.i, bold: it.b, color: it.color || INK })
    ),
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    pageBreakBefore: true,
    spacing: { before: 0, after: 280 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 8 } },
    children: [new TextRun({ text, font: SANS, size: 36, bold: true, color: ACCENT })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, font: SANS, size: 26, bold: true, color: ACCENT })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: SANS, size: 22, bold: true, italics: true, color: GOLD })],
  });
}

function epigraph(quote, attr) {
  return [
    new Paragraph({
      spacing: { before: 200, after: 80, line: 300 },
      alignment: AlignmentType.CENTER,
      indent: { left: 360, right: 360 },
      children: [new TextRun({ text: quote, font: FONT, size: 20, italics: true, color: MUTED })],
    }),
    new Paragraph({
      spacing: { after: 360 },
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: attr, font: SANS, size: 16, color: GOLD })],
    }),
  ];
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 80, line: 288 },
    children: [new TextRun({ text, font: FONT, size: 21, color: INK })],
  });
}

function spacer(after = 200) {
  return new Paragraph({ spacing: { after }, children: [] });
}

function cell(text, w, opts = {}) {
  return new TableCell({
    borders,
    width: { size: w, type: WidthType.DXA },
    shading: { fill: opts.fill || "FFFFFF", type: ShadingType.CLEAR },
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
    children: [
      new Paragraph({
        children: [new TextRun({ text, font: SANS, size: opts.size || 18, bold: !!opts.b, color: opts.color || INK })],
      }),
    ],
  });
}

function table(headers, rows) {
  const n = headers.length;
  const col = Math.floor(CW / n);
  const widths = Array(n).fill(col);
  widths[n - 1] = CW - col * (n - 1);
  const head = new TableRow({
    children: headers.map((h, i) => cell(h, widths[i], { b: true, fill: "3D4A3A", color: "F4F0E6", size: 17 })),
  });
  const body = rows.map((r, ri) =>
    new TableRow({
      children: r.map((c, i) => cell(String(c), widths[i], { fill: ri % 2 ? ROW_ALT : "FFFFFF", size: 17 })),
    })
  );
  return new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: widths,
    rows: [head, ...body],
  });
}

function caption(text) {
  return new Paragraph({
    spacing: { before: 60, after: 280 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, font: SANS, size: 16, italics: true, color: MUTED })],
  });
}

function practiceTitle(text) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 10 } },
    children: [new TextRun({ text, font: SANS, size: 20, bold: true, color: GOLD, characterSpacing: 60 })],
  });
}

const pageProps = {
  page: { size: { width: PAGE_W, height: PAGE_H }, margin: MARGIN },
};

const header = new Header({
  children: [
    new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
      spacing: { after: 120 },
      children: [
        new TextRun({ text: "PATH TO ENLIGHTENMENT", font: SANS, size: 16, color: GOLD, characterSpacing: 80 }),
      ],
    }),
  ],
});

const footer = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
      children: [
        new TextRun({ text: "—  ", font: FONT, size: 16, color: GOLD }),
        new TextRun({ children: [PageNumber.CURRENT], font: SANS, size: 18, color: ACCENT }),
        new TextRun({ text: "  —", font: FONT, size: 16, color: GOLD }),
      ],
    }),
  ],
});

const blankHeader = new Header({ children: [new Paragraph({ children: [] })] });
const blankFooter = new Footer({ children: [new Paragraph({ children: [] })] });

const { front, body } = buildContent({
  p, h1, h2, h3, epigraph, bullet, spacer, table, caption, practiceTitle,
  Paragraph, TextRun, PageBreak, AlignmentType, BorderStyle,
  FONT, SANS, ACCENT, GOLD, MUTED, INK,
});



const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: SANS, color: ACCENT },
        paragraph: { spacing: { before: 0, after: 280 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: SANS, color: ACCENT },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, italics: true, font: SANS, color: GOLD },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [
    {
      properties: pageProps,
      headers: { default: blankHeader },
      footers: { default: blankFooter },
      children: front,
    },
    {
      properties: pageProps,
      headers: { default: header },
      footers: { default: footer },
      children: body,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("D:/Projects/vipassana/Path to Enlightenment.docx", buffer);
  console.log("Wrote Path to Enlightenment.docx", buffer.length);
});
