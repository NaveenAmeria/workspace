/**
 * SmoothCuts artwork generator.
 * Writes all local SVG imagery (project thumbnails, case-study process
 * artifacts, hero mockup screen) into public/images/. SVGs keep the
 * bundle tiny, look sharp at any DPR, and stay perfectly on-brand.
 * Run with: node scripts/generate-images.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images");

/* Brand tokens */
const C = {
  base: "#0A0A0F",
  coal: "#111118",
  card: "#1A1A24",
  line: "#2A2A38",
  snow: "#F0F0F8",
  mute: "#9898B0",
  dim: "#5A5A72",
};

/* Per-project accent pair for the mock UI artwork */
const PALETTES = {
  auravelle: ["#C9A86A", "#8B85FF"],
  "meridien-partners": ["#6C63FF", "#00E5BE"],
  flowpilot: ["#00E5BE", "#6C63FF"],
  "clearpath-health": ["#5EB1EF", "#00E5BE"],
  harborline: ["#00B8D9", "#6C63FF"],
  "ember-and-oak": ["#E8A15C", "#FF6B6B"],
  "sterling-rooke": ["#8B85FF", "#C9A86A"],
  nimbusly: ["#7AA2FF", "#00E5BE"],
};

const KINDS = {
  auravelle: "ecommerce",
  "meridien-partners": "b2b",
  flowpilot: "saas",
  "clearpath-health": "health",
  harborline: "local",
  "ember-and-oak": "ecommerce",
  "sterling-rooke": "b2b",
  nimbusly: "saas",
};

const NAMES = {
  auravelle: "auravelle.com",
  "meridien-partners": "meridienpartners.com",
  flowpilot: "flowpilot.io",
  "clearpath-health": "clearpathhealth.com",
  harborline: "harborlineservices.com",
  "ember-and-oak": "emberandoak.com",
  "sterling-rooke": "sterlingrooke.com",
  nimbusly: "nimbusly.app",
};

/* ------------------------------ helpers ---------------------------------- */

const defs = (a, b) => `
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <linearGradient id="cardfade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.card}"/><stop offset="1" stop-color="${C.coal}"/>
    </linearGradient>
  </defs>`;

/** Rounded "text bar" placeholder. */
const bar = (x, y, w, h, fill, o = 1, r = h / 2) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" opacity="${o}"/>`;

/** Site-wide chrome: top nav row inside a "screenshot". */
function navRow(a, domain, w = 1504) {
  return `
  <g>
    ${bar(48, 44, 34, 34, "url(#accent)", 1, 9)}
    ${bar(100, 54, 120, 13, C.snow, 0.92)}
    ${bar(w - 560, 52, 66, 10, C.dim)}
    ${bar(w - 470, 52, 66, 10, C.dim)}
    ${bar(w - 380, 52, 66, 10, C.dim)}
    ${bar(w - 292, 44, 122, 30, C.card)}
    ${bar(w - 268, 55, 74, 8, C.mute)}
    <text x="${w - 48}" y="60" text-anchor="end" font-family="monospace" font-size="13" fill="${C.dim}">${domain}</text>
  </g>`;
}

/* ------------------------- hero mockup screen ----------------------------- */

function heroScreen() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900" viewBox="0 0 1440 900">
  ${defs("#6C63FF", "#00E5BE")}
  <rect width="1440" height="900" fill="${C.base}"/>
  ${Array.from({ length: 26 }, (_, i) => `<line x1="${i * 58}" y1="0" x2="${i * 58}" y2="900" stroke="#ffffff" stroke-opacity="0.025"/>`).join("")}
  ${Array.from({ length: 17 }, (_, i) => `<line x1="0" y1="${i * 58}" x2="1440" y2="${i * 58}" stroke="#ffffff" stroke-opacity="0.025"/>`).join("")}
  <circle cx="1180" cy="180" r="260" fill="#6C63FF" opacity="0.13"/>
  <circle cx="1220" cy="620" r="200" fill="#00E5BE" opacity="0.08"/>
  ${navRow("#6C63FF", "yourbusiness.com", 1440)}
  <g>
    ${bar(48, 150, 210, 22, "#6C63FF", 0.35)}
    ${bar(48, 200, 560, 44, C.snow, 0.95, 10)}
    ${bar(48, 258, 470, 44, "url(#accent)", 1, 10)}
    ${bar(48, 316, 520, 44, C.snow, 0.95, 10)}
    ${bar(48, 392, 420, 12, C.mute)}
    ${bar(48, 416, 380, 12, C.mute)}
    <rect x="48" y="470" width="160" height="48" rx="10" fill="url(#accent)"/>
    ${bar(78, 488, 100, 12, "#FFFFFF")}
    <rect x="224" y="470" width="160" height="48" rx="10" fill="none" stroke="${C.line}" stroke-width="1.5"/>
    ${bar(254, 488, 100, 12, C.mute)}
  </g>
  <g>
    <rect x="760" y="150" width="632" height="560" rx="18" fill="url(#cardfade)" stroke="${C.line}"/>
    <rect x="788" y="182" width="280" height="18" rx="9" fill="${C.snow}" opacity="0.9"/>
    ${bar(788, 216, 200, 10, C.mute)}
    <rect x="788" y="258" width="176" height="120" rx="12" fill="${C.base}" stroke="${C.line}"/>
    <rect x="988" y="258" width="176" height="120" rx="12" fill="${C.base}" stroke="${C.line}"/>
    <rect x="1188" y="258" width="176" height="120" rx="12" fill="${C.base}" stroke="${C.line}"/>
    ${bar(812, 330, 90, 26, "url(#accent)", 0.9)}
    ${bar(1012, 330, 90, 26, "url(#accent)", 0.9)}
    ${bar(1212, 330, 90, 26, "url(#accent)", 0.9)}
    ${bar(812, 286, 120, 10, C.mute)}
    ${bar(1012, 286, 120, 10, C.mute)}
    ${bar(1212, 286, 120, 10, C.mute)}
    <rect x="788" y="412" width="576" height="240" rx="12" fill="${C.base}" stroke="${C.line}"/>
    <polyline points="812,608 890,560 968,586 1046,510 1124,540 1202,470 1280,498 1340,440" fill="none" stroke="#00E5BE" stroke-width="3" stroke-linecap="round"/>
    <polyline points="812,620 890,600 968,610 1046,580 1124,594 1202,560 1280,574 1340,548" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    ${bar(788, 668, 140, 10, C.dim)}
  </g>
  <g>
    ${bar(48, 600, 300, 14, C.snow, 0.85)}
    ${bar(48, 630, 240, 10, C.mute)}
    ${bar(48, 668, 96, 34, C.card)}
    ${bar(160, 668, 96, 34, C.card)}
    ${bar(272, 668, 96, 34, C.card)}
    ${bar(66, 680, 52, 9, C.mute)}
    ${bar(178, 680, 52, 9, C.mute)}
    ${bar(290, 680, 52, 9, C.mute)}
  </g>
  <rect x="0" y="870" width="1440" height="30" fill="${C.coal}"/>
  ${bar(48, 880, 120, 9, C.dim)}
  ${bar(220, 880, 90, 9, C.dim)}
  ${bar(360, 880, 90, 9, C.dim)}
</svg>`;
}

/* --------------------------- project thumbnails --------------------------- */

function productCards(x, y, accent) {
  return [0, 1, 2]
    .map((i) => {
      const cx = x + i * 200;
      return `<rect x="${cx}" y="${y}" width="180" height="210" rx="12" fill="${C.card}" stroke="${C.line}"/>
      <rect x="${cx + 14}" y="${y + 14}" width="152" height="110" rx="8" fill="url(#accent)" opacity="${0.35 + i * 0.15}"/>
      ${bar(cx + 14, y + 142, 120, 11, C.snow, 0.85)}
      ${bar(cx + 14, y + 164, 70, 9, C.mute)}
      <rect x="${cx + 14}" y="${y + 184}" width="64" height="16" rx="8" fill="${accent}" opacity="0.9"/>
      `;
    })
    .join("");
}

function saasPanel(x, y) {
  const bars = [42, 78, 60, 110, 92, 140, 124];
  return `
  <rect x="${x}" y="${y}" width="600" height="300" rx="14" fill="${C.card}" stroke="${C.line}"/>
  ${bar(x + 24, y + 22, 160, 14, C.snow, 0.9)}
  ${bar(x + 24, y + 46, 110, 9, C.mute)}
  ${bars
    .map((h, i) => `<rect x="${x + 40 + i * 76}" y="${y + 250 - h}" width="44" height="${h}" rx="7" fill="${i === 5 ? "url(#accent)" : C.line}"/>`)
    .join("")}
  <line x1="${x + 32}" y1="${y + 252}" x2="${x + 568}" y2="${y + 252}" stroke="${C.line}"/>
  `;
}

function healthPanel(x, y) {
  const days = Array.from({ length: 25 }, (_, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    const hot = i === 7 || i === 13;
    return `<rect x="${x + 24 + col * 82}" y="${y + 70 + row * 44}" width="66" height="30" rx="7" fill="${hot ? "url(#accent)" : C.base}" stroke="${C.line}"/>`;
  }).join("");
  return `
  <rect x="${x}" y="${y}" width="470" height="320" rx="14" fill="${C.card}" stroke="${C.line}"/>
  ${bar(x + 24, y + 24, 190, 15, C.snow, 0.9)}
  <circle cx="${x + 428}" cy="${y + 32}" r="11" fill="url(#accent)"/>
  ${days}
  `;
}

function localPanel(x, y) {
  return `
  <rect x="${x}" y="${y}" width="470" height="300" rx="14" fill="${C.card}" stroke="${C.line}"/>
  ${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${x + 24 + c * 146}" y="${y + 24 + r * 90}" width="130" height="74" rx="8" fill="${C.base}" stroke="${C.line}"/>`).join("")).join("")}
  <circle cx="${x + 200}" cy="${y + 148}" r="12" fill="url(#accent)"/>
  <circle cx="${x + 340}" cy="${y + 210}" r="8" fill="url(#accent)" opacity="0.7"/>
  <circle cx="${x + 110}" cy="${y + 76}" r="8" fill="url(#accent)" opacity="0.7"/>
  `;
}

function b2bPanel(x, y) {
  return `
  <rect x="${x}" y="${y}" width="600" height="130" rx="14" fill="${C.card}" stroke="${C.line}"/>
  ${[0, 1, 2].map((i) => `
    ${bar(x + 26 + i * 196, y + 28, 60, 24, "url(#accent)", 0.95)}
    ${bar(x + 26 + i * 196, y + 68, 120, 9, C.mute)}
    ${bar(x + 26 + i * 196, y + 88, 90, 9, C.dim)}
  `).join("")}
  ${[0, 1, 2].map((r) => `
    <rect x="${x}" y="${y + 160 + r * 58}" width="600" height="46" rx="10" fill="${C.card}" stroke="${C.line}"/>
    <circle cx="${x + 26}" cy="${y + 183 + r * 58}" r="10" fill="${C.line}"/>
    ${bar(x + 48, y + 174 + r * 58, 220 - r * 40, 10, C.mute)}
    ${bar(x + 520, y + 176 + r * 58, 56, 9, C.dim)}
  `).join("")}
  `;
}

function thumbnail(slug) {
  const [a, b] = PALETTES[slug];
  const kind = KINDS[slug];
  const domain = NAMES[slug];

  let panel = "";
  if (kind === "ecommerce") panel = productCards(864, 360, a);
  else if (kind === "b2b") panel = b2bPanel(864, 340);
  else if (kind === "saas") panel = saasPanel(864, 330);
  else if (kind === "health") panel = healthPanel(864, 330);
  else panel = localPanel(864, 330);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  ${defs(a, b)}
  <rect width="1600" height="1000" fill="${C.coal}"/>
  <circle cx="1420" cy="120" r="300" fill="${a}" opacity="0.10"/>
  <circle cx="150" cy="900" r="280" fill="${b}" opacity="0.08"/>
  ${navRow(a, domain)}
  <g>
    ${bar(48, 168, 190, 20, a, 0.4)}
    ${bar(48, 214, 620, 50, C.snow, 0.95, 10)}
    ${bar(48, 282, 520, 50, "url(#accent)", 1, 10)}
    ${bar(48, 360, 480, 12, C.mute)}
    ${bar(48, 386, 420, 12, C.mute)}
    <rect x="48" y="436" width="150" height="44" rx="9" fill="url(#accent)"/>
    ${bar(76, 452, 92, 12, "#FFFFFF")}
    <rect x="214" y="436" width="150" height="44" rx="9" fill="none" stroke="${C.line}" stroke-width="1.5"/>
    ${bar(242, 452, 92, 12, C.mute)}
    ${bar(48, 540, 700, 1, C.line, 1, 0)}
    ${[0, 1, 2].map((i) => `
      ${bar(48 + i * 240, 576, 34, 34, C.card, 1, 9)}
      ${bar(96 + i * 240, 582, 120, 10, C.snow, 0.85)}
      ${bar(96 + i * 240, 602, 90, 8, C.mute)}
    `).join("")}
  </g>
  ${panel}
  <rect x="0" y="920" width="1600" height="80" fill="${C.card}"/>
  ${bar(48, 952, 34, 34, "url(#accent)", 1, 9)}
  ${bar(100, 962, 110, 12, C.snow, 0.9)}
  ${bar(1300, 956, 250, 30, C.base)}
  ${bar(1330, 967, 190, 9, C.mute)}
</svg>`;
}

/* --------------------------- process artifacts ---------------------------- */

/** 1 — low-fi wireframe: dashed structure boxes. */
function wireframe(slug) {
  const [a] = PALETTES[slug];
  const box = (x, y, w, h, label) => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="${C.dim}" stroke-dasharray="7 6" stroke-width="1.5"/>
    <text x="${x + 14}" y="${y + 26}" font-family="monospace" font-size="14" fill="${C.dim}">${label}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  ${defs(a, "#00E5BE")}
  <rect width="1600" height="1000" fill="${C.base}"/>
  ${Array.from({ length: 20 }, (_, i) => `<line x1="0" y1="${i * 52}" x2="1600" y2="${i * 52}" stroke="#ffffff" stroke-opacity="0.03"/>`).join("")}
  ${box(60, 60, 1480, 90, "01 · NAV")}
  ${box(60, 190, 700, 320, "02 · HERO / VALUE PROP")}
  ${box(800, 190, 740, 320, "03 · PRIMARY VISUAL")}
  ${box(60, 550, 470, 200, "04 · PROOF")}
  ${box(565, 550, 470, 200, "05 · OFFER")}
  ${box(1070, 550, 470, 200, "06 · CTA")}
  ${box(60, 790, 1480, 150, "07 · FOOTER / TRUST")}
  <circle cx="1480" cy="255" r="26" fill="none" stroke="${a}" stroke-width="2"/>
  <path d="M1470 255h20M1480 245v20" stroke="${a}" stroke-width="2"/>
  <text x="60" y="975" font-family="monospace" font-size="15" fill="${C.dim}">wireframe — low fidelity · v3 approved</text>
</svg>`;
}

/** 2 — mobile prototypes: two phone frames. */
function mobileProto(slug) {
  const [a, b] = PALETTES[slug];
  const phone = (x, accentShift) => `
  <rect x="${x}" y="120" width="360" height="720" rx="44" fill="${C.card}" stroke="${C.line}" stroke-width="2"/>
  <rect x="${x + 16}" y="136" width="328" height="688" rx="32" fill="${C.base}"/>
  <rect x="${x + 140}" y="152" width="80" height="18" rx="9" fill="${C.line}"/>
  ${bar(x + 40, 210, 120, 12, accentShift ? "url(#accent)" : C.snow, 0.9)}
  ${bar(x + 40, 250, 260, 10, C.dim)}
  ${bar(x + 40, 268, 220, 10, C.dim)}
  <rect x="${x + 40}" y="310" width="280" height="150" rx="14" fill="url(#accent)" opacity="${accentShift ? 0.75 : 0.35}"/>
  <rect x="${x + 40}" y="486" width="280" height="56" rx="12" fill="${C.base}" stroke="${C.line}"/>
  ${bar(x + 60, 507, 150, 13, C.mute)}
  <rect x="${x + 40}" y="562" width="280" height="56" rx="12" fill="${C.base}" stroke="${C.line}"/>
  ${bar(x + 60, 583, 180, 13, C.mute)}
  <rect x="${x + 40}" y="660" width="280" height="52" rx="12" fill="url(#accent)"/>
  ${bar(x + 120, 681, 120, 11, "#FFFFFF")}
  <rect x="${x + 40}" y="756" width="280" height="40" rx="10" fill="none" stroke="${C.line}"/>
  ${bar(x + 150, 770, 60, 10, C.dim)}
  `;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  ${defs(a, b)}
  <rect width="1600" height="1000" fill="${C.coal}"/>
  <circle cx="1300" cy="200" r="240" fill="${a}" opacity="0.08"/>
  ${phone(300, false)}
  ${phone(940, true)}
  <path d="M700 460h180M850 430l36 30-36 30" fill="none" stroke="${C.dim}" stroke-width="2"/>
  <text x="800" y="925" text-anchor="middle" font-family="monospace" font-size="15" fill="${C.dim}">mobile prototype — interaction pass · tap targets ≥ 48px</text>
</svg>`;
}

/** 3 — typography / palette exploration. */
function typeBoard(slug) {
  const [a, b] = PALETTES[slug];
  const swatch = (x, y, fill, label) => `
    <rect x="${x}" y="${y}" width="170" height="120" rx="14" fill="${fill}"/>
    <text x="${x + 14}" y="${y + 100}" font-family="monospace" font-size="13" fill="${fill === C.base ? C.mute : "#0A0A0F"}">${label}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  ${defs(a, b)}
  <rect width="1600" height="1000" fill="${C.base}"/>
  <text x="110" y="360" font-family="Georgia, serif" font-size="320" font-weight="700" fill="${C.snow}">Aa</text>
  <text x="430" y="360" font-family="monospace" font-size="30" fill="url(#accent)">/ display</text>
  ${bar(110, 460, 480, 30, C.snow, 0.95, 8)}
  ${bar(110, 510, 400, 20, C.mute, 1, 8)}
  ${bar(110, 550, 330, 14, C.dim, 1, 7)}
  ${bar(110, 584, 260, 14, C.dim, 1, 7)}
  <text x="110" y="700" font-family="monospace" font-size="16" fill="${C.dim}">H1 64/68 — body 17/30 — tracking −0.02em</text>
  ${swatch(900, 140, a, "ACCENT A")}
  ${swatch(1090, 140, b, "ACCENT B")}
  ${swatch(1280, 140, C.card, "SURFACE")}
  ${swatch(900, 300, C.snow, "TEXT")}
  ${swatch(1090, 300, C.mute, "MUTED")}
  ${swatch(1280, 300, C.base, "BASE")}
  <rect x="900" y="480" width="550" height="180" rx="16" fill="${C.card}" stroke="${C.line}"/>
  <text x="924" y="530" font-family="monospace" font-size="15" fill="${C.dim}">CONTRAST CHECKS</text>
  ${bar(924, 556, 200, 12, C.snow, 1)}
  <text x="1140" y="567" font-family="monospace" font-size="14" fill="#00E5BE">AA ✓ 12.6:1</text>
  ${bar(924, 590, 200, 12, C.mute, 1)}
  <text x="1140" y="601" font-family="monospace" font-size="14" fill="#00E5BE">AA ✓ 7.1:1</text>
  ${bar(924, 624, 200, 12, C.dim, 1)}
  <text x="1140" y="635" font-family="monospace" font-size="14" fill="#00E5BE">AA ✓ 4.6:1</text>
  <text x="800" y="925" text-anchor="middle" font-family="monospace" font-size="15" fill="${C.dim}">typography + palette — final selection</text>
</svg>`;
}

/* --------------------------------- run ------------------------------------ */

const files = [
  ["hero/hero-screen.svg", heroScreen()],
  ...Object.keys(PALETTES).flatMap((slug) => [
    [`projects/${slug}.svg`, thumbnail(slug)],
    [`projects/${slug}-process-1.svg`, wireframe(slug)],
    [`projects/${slug}-process-2.svg`, mobileProto(slug)],
    [`projects/${slug}-process-3.svg`, typeBoard(slug)],
  ]),
];

for (const [rel, svg] of files) {
  const target = join(OUT, rel);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, svg, "utf8");
}

console.log(`Generated ${files.length} SVG assets in ${OUT}`);
