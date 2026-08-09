# SmoothCuts — Web Design & Development Agency Portfolio

A complete, production-ready boutique agency website built with **Next.js 15 (App Router)**, **TypeScript (strict mode)**, **Tailwind CSS v3**, the **Intersection Observer API**, and **GSAP** (hero entrance only — imported where used, never bundled globally).

> **We Build Websites That Work As Hard As You Do.**

---

## Pages

| Route                  | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `/`                    | Homepage — hero, marquee, selected work, services, stats, testimonials, consultation form |
| `/portfolio`           | Filterable 8-project grid (industry + tech filters)            |
| `/portfolio/[slug]`    | Long-form case study ×8 (SSG via `generateStaticParams`)       |
| `/about`               | Agency story, differentiators, 8-person team grid, process timeline |
| `/contact`             | Two-column contact form + trust card, FAQ accordion            |
| `/sitemap.xml`         | Auto-generated sitemap (`app/sitemap.ts`)                      |
| `/robots.txt`          | Auto-generated robots file (`app/robots.ts`)                   |

A **standalone single-file HTML build** of the homepage (embedded CSS + vanilla JS, CDN fonts only) lives at `standalone/smoothcuts-homepage.html` for stakeholder previews or static hosting.

---

## Quick Start

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:3000
```

### Production

```bash
npm run build      # type-check, lint, SSG every route
npm start          # serve the production build
```

### Other scripts

```bash
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck    # tsc --noEmit (strict mode)
node scripts/generate-images.mjs   # regenerate SVG artwork in public/images
```

---

## Environment Variables

| Variable               | Required | Default                        | Purpose                                   |
| ---------------------- | -------- | ------------------------------ | ----------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | `https://smoothcuts.studio`    | Canonical base URL for metadata, OG tags, sitemap, and JSON-LD |

Create `.env.local` to override:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Deploying to Vercel (zero-config)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** the repo. Framework is auto-detected.
3. Add `NEXT_PUBLIC_SITE_URL` in **Project → Settings → Environment Variables**.
4. Deploy. All pages are static (SSG) — build completes in seconds.

Any Node/static host works too: `npm run build && npm start`.

---

## Architecture

```
app/                  App Router routes + metadata + sitemap/robots
components/
  layout/             Navbar, MobileMenu, Footer
  home/               Hero, Marquee, FeaturedProjects, Services, StatsBar,
                      Testimonials, ContactForm
  portfolio/          FilterBar (client), ProjectCard
  case-study/         MetaHeader, MetricBlock, ProcessGallery
  about/              TeamCard, ProcessTimeline
  contact/            FAQAccordion
  ui/                 Button, TagPill, SectionLabel, GradientText,
                      Reveal (IO animations), CountUp, CTABanner, Icons
lib/                  site.ts (contact/nav), projects.ts, team.ts
types/                project.ts, team.ts
public/images/        Generated SVG artwork + OG cover (public/images/og)
standalone/           Single-file HTML homepage build
scripts/              generate-images.mjs (regenerates SVG artwork)
```

**Design tokens** are defined once in `app/globals.css` (`:root` RGB triplets)
and consumed by `tailwind.config.ts`, so the palette has a single source of
truth (e.g. `text-violet`, `bg-card`, `border-line`).

---

## Performance & Quality Notes

- **SSG everywhere** — all 18 routes prerendered at build time.
- **`next/font`** self-hosts Syne, DM Sans, and JetBrains Mono (zero CLS).
- **`next/image`** for every image; hero/art assets ship as hand-crafted local
  SVG (sharp at any DPR, tiny transfer). OG cover is a 1200×630 JPG.
- **Accessibility (WCAG 2.1 AA):** skip-to-content link, landmark roles, full
  keyboard flow, visible `:focus-visible` styles, labelled form fields,
  `aria-expanded` on the hamburger/FAQ, and `prefers-reduced-motion` disables
  every animation sitewide.
- **SEO:** unique `generateMetadata` per page, OG + Twitter cards, JSON-LD
  (`Organization` on `/`, `LocalBusiness` on `/contact`, `BreadcrumbList` on
  every case study).

### Swap in real content

- **Projects / case studies:** edit `lib/projects.ts` (cards, filters, routes,
  and case-study pages all derive from this file).
- **Team members & process:** edit `lib/team.ts`.
- **Contact details / nav:** edit `lib/site.ts`.
- **Form submissions:** wire the submit handler in
  `components/home/ContactForm.tsx` to your CRM or email endpoint (a success
  state is already implemented).
- **Artwork:** replace the SVGs via `scripts/generate-images.mjs` or drop real
  screenshots into `public/images/projects/` using the same filenames.
