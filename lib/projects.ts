import type { Project } from "@/types/project";

/**
 * Portfolio data — all eight projects with complete case-study content.
 * Client names are realistic fictional placeholders; swap in real client
 * data here and every card, filter, route, and case study updates.
 */

/** Filter pills shown on /portfolio (industries first, then platforms). */
export const PROJECT_FILTERS = [
  "All",
  "E-commerce",
  "B2B Services",
  "Healthcare",
  "SaaS",
  "Local Business",
  "Webflow",
  "Next.js",
  "WordPress",
] as const;

const artifact = (
  slug: string,
  n: 1 | 2 | 3,
  caption: string,
  alt: string,
  wide?: boolean,
) => ({
  src: `/images/projects/${slug}-process-${n}.svg`,
  caption,
  alt,
  ...(wide ? { wide } : {}),
});

export const PROJECTS: Project[] = [
  {
    slug: "auravelle",
    client: "Auravelle",
    description:
      "Luxury retail brand website with integrated shop and editorial blog.",
    industry: "E-commerce",
    tech: "Webflow",
    categories: ["E-commerce", "Webflow"],
    year: "2025",
    scope: "Strategy, Design, Build, CRO",
    liveUrl: "https://auravelle.smoothcuts.studio",
    thumbnail: "/images/projects/auravelle.svg",
    thumbnailAlt: "Auravelle luxury e-commerce website homepage shown in a dark storefront layout",
    featured: true,
    overview: [
      "Auravelle is a luxury retail brand selling handcrafted accessories to customers across three continents. Their products are photographed beautifully, priced confidently, and loved by reviewers — but their website told a completely different story.",
      "They came to SmoothCuts after watching paid traffic costs climb while online sales stayed flat. The brief was blunt: make the website feel as premium as the product, and make buying effortless. With their biggest seasonal campaign eight weeks away, the timeline had no slack.",
    ],
    challenge: {
      intro:
        "Our discovery audit surfaced a site that was actively working against the brand. The core problems we identified:",
      bullets: [
        "High mobile bounce rate — 71% of mobile visitors left within the first 15 seconds",
        "Checkout funnel spread across five steps with mandatory account creation",
        "Slow page loads — 6.2s average LCP on collection pages over 4G",
        "Visual identity diluted by an off-the-shelf theme that three competitors also used",
        "Unclear value proposition above the fold — visitors couldn't tell what Auravelle sold or why it mattered",
      ],
    },
    approach: [
      "We decided to rebuild the entire storefront around one idea: editorial commerce. Instead of a grid of products, the new homepage reads like a magazine spread — full-bleed imagery, confident typography, and product stories that earn the click before the shop asks for a sale.",
      "Our team re-architected the purchase journey from five steps to two. Guest checkout became the default, shipping costs surface before the cart, and every payment option is one tap. On collection pages, we replaced infinite scroll with curated edits — because luxury buyers browse with intent, not infinite patience.",
      "Finally, we engineered the front end for speed as a feature, not an afterthought: responsive imagery, zero render-blocking scripts, and a strict third-party script budget. The result is a site that feels instantaneous on the devices Auravelle's customers actually use.",
    ],
    process: [
      artifact("auravelle", 1, "Initial wireframe — collection page user flow", "Low-fidelity wireframe of the Auravelle collection page layout and user flow", true),
      artifact("auravelle", 2, "Mobile prototype — checkout flow, iteration 3", "Mobile prototype screens showing the two-step Auravelle checkout flow"),
      artifact("auravelle", 3, "Typography exploration — final editorial pairing", "Typography and color palette exploration for the Auravelle visual identity"),
    ],
    techStack: ["Webflow", "Figma", "Shopify Buy Button", "GSAP", "Klaviyo", "Google Analytics", "Hotjar"],
    techRationale:
      "Webflow gave the marketing team full editorial control over campaigns without developer bottlenecks, while the Shopify Buy Button preserved their existing inventory and fulfillment stack. GSAP powered the restrained motion design that makes the storefront feel alive without hurting performance.",
    results: {
      metrics: [
        { value: 38, prefix: "+", suffix: "%", label: "Checkout Conversion Rate" },
        { value: 97, suffix: "/100", label: "Page Speed Score" },
        { value: 52, prefix: "+", suffix: "%", label: "Avg. Session Time" },
      ],
      narrative:
        "Within 60 days of launch, Auravelle's checkout conversion rate climbed 38% and the seasonal campaign delivered its strongest revenue week in company history. Mobile bounce rate fell by a third, and the marketing team now publishes campaign pages independently — no developer required.",
    },
    testimonial: {
      quote:
        "SmoothCuts completely transformed how our business looks online. Within 60 days of launch, our inbound leads doubled. The team was professional, fast, and genuinely cared about our results.",
      name: "Amara Coyle",
      role: "CEO, Auravelle",
    },
  },
  {
    slug: "meridien-partners",
    client: "Meridien Partners",
    description:
      "B2B consulting firm website with gated resource library and CRM sync.",
    industry: "B2B Services",
    tech: "Next.js",
    categories: ["B2B Services", "Next.js"],
    year: "2025",
    scope: "Strategy, Design, Build, CRM Integration",
    liveUrl: "https://meridien.smoothcuts.studio",
    thumbnail: "/images/projects/meridien-partners.svg",
    thumbnailAlt: "Meridien Partners B2B consulting website with dark analytics dashboard aesthetic",
    featured: true,
    overview: [
      "Meridien Partners is a boutique management consultancy advising mid-market manufacturers. Their consultants win seven-figure engagements in boardrooms — but their website was losing them before the pitch ever happened.",
      "With referral-driven growth plateauing, leadership needed a digital presence that could build trust cold, capture qualified demand, and feed their CRM without manual admin. They came to SmoothCuts for a rebuild after two template-driven attempts failed to convert.",
    ],
    challenge: {
      intro:
        "Stakeholder interviews and analytics told a consistent story. The old site had credibility, but no engine:",
      bullets: [
        "Low lead conversion — 1,900 monthly visits produced fewer than 10 inquiries",
        "Inflexible legacy CMS forced every content change through an expensive retainer",
        "No middle-funnel content — nothing for visitors who weren't ready to book a call",
        "Page load times above 5 seconds on mobile, where 44% of traffic originated",
        "Disconnected tools: form submissions were manually re-typed into the CRM",
      ],
    },
    approach: [
      "We positioned Meridien as the thinking partner, not the vendor. The information architecture leads with the problems their clients actually search for, then routes each visitor toward a next step matched to their intent — read, download, or talk.",
      "Our team built a gated resource library as the conversion engine: high-value playbooks exchanged for an email, with every submission syncing instantly to their CRM and triggering the right follow-up sequence. Sales calls now start with context instead of cold questions.",
      "Visually, we leaned into editorial restraint — generous whitespace, a sharp serif-sans pairing, and data visualizations that communicate rigor. Every layout decision was tested against one question: does this make a skeptical CFO trust these people faster?",
    ],
    process: [
      artifact("meridien-partners", 1, "Initial wireframe — homepage user flow", "Low-fidelity wireframe mapping the Meridien Partners homepage user journey", true),
      artifact("meridien-partners", 2, "Mobile prototype — navigation system", "Mobile navigation prototype for the Meridien Partners resource library"),
      artifact("meridien-partners", 3, "Typography exploration — final selection", "Typography and color exploration for the Meridien Partners brand refresh"),
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Sanity CMS", "HubSpot CRM", "Vercel", "Figma"],
    techRationale:
      "Next.js on Vercel delivers sub-second loads and rock-solid SEO for a content-led growth strategy. Sanity gives consultants a publishing workflow they enjoy using, and the HubSpot integration eliminated manual data entry for every new lead.",
    results: {
      metrics: [
        { value: 3, prefix: "", suffix: "×", label: "Qualified Monthly Inquiries" },
        { value: 98, suffix: "/100", label: "Page Speed Score" },
        { value: 41, prefix: "+", suffix: "%", label: "Resource Downloads" },
      ],
      narrative:
        "Qualified monthly inquiries tripled within the first quarter, and the resource library now nurtures prospects the sales team used to chase manually. Meridien's partners report a measurable shift in call quality — prospects arrive already convinced of the firm's expertise.",
    },
    testimonial: {
      quote:
        "We'd worked with two other agencies before SmoothCuts. The difference was night and day. They delivered exactly what they promised, on time, and our page speed went from 48 to 97 on Google.",
      name: "Daniel Reyes",
      role: "Founder, Meridien Partners",
    },
  },
  {
    slug: "flowpilot",
    client: "Flowpilot",
    description:
      "SaaS marketing site with interactive product demo increasing trial signups.",
    industry: "SaaS",
    tech: "Next.js",
    categories: ["SaaS", "Next.js"],
    year: "2026",
    scope: "Strategy, Design, Build, Interactive Demo",
    liveUrl: "https://flowpilot.smoothcuts.studio",
    thumbnail: "/images/projects/flowpilot.svg",
    thumbnailAlt: "Flowpilot SaaS product marketing site with animated dashboard preview",
    featured: true,
    overview: [
      "Flowpilot is a workflow automation SaaS helping operations teams eliminate manual handoffs. The product is genuinely excellent — customers expand seats month over month — but the marketing site hid all of that behind generic SaaS-speak.",
      "Fresh off a funding round, the team had a growth target that paid ads alone couldn't reach profitably. They engaged SmoothCuts to rebuild the marketing site into their highest-performing acquisition channel, with a self-serve interactive demo as the centerpiece.",
    ],
    challenge: {
      intro:
        "Session recordings made the problem impossible to miss — visitors were leaving without ever understanding the product:",
      bullets: [
        "Trial signup conversion stalled at 0.8% despite growing traffic",
        "Value proposition buried under jargon — 'synergistic workflow enablement'",
        "No way to experience the product short of a 30-minute sales call",
        "Dense, wall-of-text feature pages with an 82% scroll-drop before the CTA",
        "Brand visuals indistinguishable from a dozen automation competitors",
      ],
    },
    approach: [
      "We rebuilt the messaging from customer interviews, not internal assumptions. The new headline states the outcome in the customer's words, and every section follows a problem → proof → action rhythm that keeps scanners moving toward the trial CTA.",
      "The centerpiece is an interactive product tour we designed and engineered directly into the site: a guided, clickable recreation of real workflows that lets visitors experience the product's core value in under 90 seconds — no signup, no sales call. It is now the single highest-converting element on the site.",
      "A distinct visual system — deep space tones, vivid accent gradients, motion that illustrates flow — separated Flowpilot from the sea of pastel SaaS templates and made screenshots instantly recognizable in the market.",
    ],
    process: [
      artifact("flowpilot", 1, "Initial wireframe — demo tour storyboard", "Storyboard wireframes for the Flowpilot interactive product demo tour", true),
      artifact("flowpilot", 2, "Mobile prototype — sign-up flow", "Mobile prototype of the Flowpilot trial signup flow"),
      artifact("flowpilot", 3, "Typography exploration — final selection", "Typography and palette exploration for the Flowpilot brand system"),
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "GSAP", "Sanity CMS", "Vercel", "Segment", "Hotjar"],
    techRationale:
      "Next.js delivers the instant loads paid traffic demands, while GSAP powers the interactive demo with frame-perfect motion. Sanity CMS lets the growth team ship landing-page experiments without engineering sprints.",
    results: {
      metrics: [
        { value: 112, prefix: "+", suffix: "%", label: "Trial Signup Rate" },
        { value: 4.2, decimals: 1, suffix: " min", label: "Avg. Demo Engagement" },
        { value: 67, prefix: "+", suffix: "%", label: "Organic Traffic Growth" },
      ],
      narrative:
        "Trial conversions more than doubled, and demo engagement data now feeds Flowpilot's sales team with intent signals they never had before. The interactive tour pays for itself monthly — it converts cold visitors at a rate paid ads never approached.",
    },
    testimonial: {
      quote:
        "The SmoothCuts team made the whole process completely painless. They understood our business immediately and built a site that actually converts visitors. Best investment we've made in years.",
      name: "Priya Nair",
      role: "Marketing Director, Flowpilot",
    },
  },
  {
    slug: "clearpath-health",
    client: "Clearpath Health",
    description:
      "Medical practice website with online booking and patient portal integration.",
    industry: "Healthcare",
    tech: "WordPress",
    categories: ["Healthcare", "WordPress"],
    year: "2024",
    scope: "Design, Build, Booking Integration, Accessibility",
    liveUrl: "https://clearpath.smoothcuts.studio",
    thumbnail: "/images/projects/clearpath-health.svg",
    thumbnailAlt: "Clearpath Health medical practice website with appointment booking interface",
    featured: false,
    overview: [
      "Clearpath Health is a multi-provider family practice serving a fast-growing suburban community. Their clinical care earns five-star reviews; their digital front door earned mostly phone calls from confused patients asking how to book.",
      "With two new physicians joining and front-desk staff drowning in scheduling calls, the practice needed a website that could absorb routine tasks, meet strict accessibility expectations, and reflect the calm professionalism of the clinic itself.",
    ],
    challenge: {
      intro:
        "Patient feedback and analytics pointed to real friction, especially for older patients and mobile users:",
      bullets: [
        "No online booking — every appointment required a phone call during office hours",
        "Mobile experience effectively unusable for the practice's 55+ patient segment",
        "Accessibility debt: contrast failures, missing labels, no keyboard navigation",
        "Provider bios out of date because the CMS was too painful to edit",
        "Location and insurance information scattered across six disconnected pages",
      ],
    },
    approach: [
      "We designed the new site around the three tasks patients actually need: book, prepare, get in touch. Each is reachable from every page in one tap, with accessible touch targets and plain-language labels tested with real patients — including the practice's oldest regulars.",
      "Online booking now syncs directly with the practice management system, and the patient portal login sits prominently in the header. Form flows were rebuilt to WCAG 2.1 AA: full keyboard support, clear error recovery, and contrast ratios that pass everywhere.",
      "For the staff, we rebuilt the WordPress admin experience itself — a custom block library means updating a provider bio, posting a clinic notice, or adding a location page takes minutes, not a support ticket. The site finally keeps up with the practice.",
    ],
    process: [
      artifact("clearpath-health", 1, "Initial wireframe — booking flow", "Low-fidelity wireframe of the Clearpath Health online booking flow", true),
      artifact("clearpath-health", 2, "Mobile prototype — patient navigation", "Mobile prototype of the Clearpath Health patient navigation pattern"),
      artifact("clearpath-health", 3, "Accessibility palette — WCAG pass/fail matrix", "Color palette accessibility matrix used for Clearpath Health design decisions"),
    ],
    techStack: ["WordPress", "Custom Blocks", "PHP", "Advanced Custom Fields", "Cloudflare", "Figma", "WAVE"],
    techRationale:
      "WordPress with a locked-down custom block suite gives non-technical staff safe, structured editing power. Cloudflare's edge caching and hardened configuration meet the security bar a healthcare site demands.",
    results: {
      metrics: [
        { value: 64, prefix: "", suffix: "%", label: "Bookings Now Self-Serve" },
        { value: 100, suffix: "/100", label: "Accessibility Score" },
        { value: 38, prefix: "−", suffix: "%", label: "Front-Desk Call Volume" },
      ],
      narrative:
        "Nearly two-thirds of appointments are now booked online, freeing the front desk to focus on the patients standing in front of them. The practice's accessibility audit now passes 100% of automated checks — and, more importantly, passes with the patients who need it most.",
    },
    testimonial: {
      quote:
        "Our oldest patients book appointments online now — that's the review that matters most to me. The site simply works, for everyone, every day.",
      name: "Dr. Lena Okafor",
      role: "Practice Director, Clearpath Health",
    },
  },
  {
    slug: "harborline",
    client: "Harborline Services",
    description:
      "Regional service business site with location pages and lead capture system.",
    industry: "Local Business",
    tech: "Webflow",
    categories: ["Local Business", "Webflow"],
    year: "2025",
    scope: "Strategy, Design, Build, Local SEO",
    liveUrl: "https://harborline.smoothcuts.studio",
    thumbnail: "/images/projects/harborline.svg",
    thumbnailAlt: "Harborline Services local business website with service area coverage layout",
    featured: false,
    overview: [
      "Harborline Services runs marine maintenance crews across three coastal cities. Their reputation travels by word of mouth at the marina — but when newcomers search for help online, Harborline was invisible beneath lead-gen directories and nationwide chains.",
      "The owners wanted qualified local demand they didn't have to buy back from directories. We rebuilt their web presence around local search dominance and friction-free quote requests.",
    ],
    challenge: {
      intro:
        "The old one-page site had been live since 2016, and it showed. What we were working against:",
      bullets: [
        "Zero organic visibility — no location pages, no local schema, no reviews on-site",
        "Quote requests buried in a generic contact page with a 9-field form",
        "No service-area clarity: visitors couldn't tell if Harborline served their marina",
        "Stock-photo-heavy design that eroded the trust their real work had earned",
        "Analytics never installed — every marketing decision was a guess",
      ],
    },
    approach: [
      "Our strategy was local-first: dedicated landing pages for each service city, structured data marking up every service and review, and location-specific proof — real crew photos, real boats, real testimonials from recognizable marinas.",
      "We compressed quote capture to three fields with click-to-call everywhere on mobile, then wired every submission into an instant SMS notification so the team can respond while competitors' emails sit unread.",
      "The visual direction celebrates the work: aerial drone photography, a rope-and-signal-flag design accent, and service cards organized the way customers think — by problem, not by internal org chart.",
    ],
    process: [
      artifact("harborline", 1, "Initial wireframe — location page template", "Wireframe of the repeatable Harborline location page template", true),
      artifact("harborline", 2, "Mobile prototype — tap-to-call journey", "Mobile prototype of Harborline's tap-to-call and quote request journey"),
      artifact("harborline", 3, "Brand exploration — nautical accent system", "Brand exploration of Harborline's nautical accent and color system"),
    ],
    techStack: ["Webflow", "Figma", "Schema.org JSON-LD", "Twilio SMS", "Google Analytics", "Google Business Profile"],
    techRationale:
      "Webflow keeps the marketing site fast and editable for the office manager who owns it, while Twilio SMS notifications cut the team's lead response time from days to minutes — the single biggest conversion lever in local services.",
    results: {
      metrics: [
        { value: 218, prefix: "+", suffix: "%", label: "Organic Local Traffic" },
        { value: 4.9, decimals: 1, suffix: "★", label: "Avg. Review Rating Shown" },
        { value: 9, prefix: "", suffix: " min", label: "Median Lead Response Time" },
      ],
      narrative:
        "Harborline now ranks in the local pack for every service city they operate in, and directory ad spend dropped by 60%. Quote volume doubled in peak season — with zero additional headcount.",
    },
    testimonial: {
      quote:
        "We stopped paying for leads we already earned. The site brings us the right customers from the right marinas, and responding takes minutes, not days.",
      name: "Marcus Hale",
      role: "Owner, Harborline Services",
    },
  },
  {
    slug: "ember-and-oak",
    client: "Ember & Oak",
    description:
      "Specialty food brand with custom WooCommerce storefront.",
    industry: "E-commerce",
    tech: "WordPress",
    categories: ["E-commerce", "WordPress"],
    year: "2024",
    scope: "Design, WooCommerce Build, Subscriptions",
    liveUrl: "https://emberandoak.smoothcuts.studio",
    thumbnail: "/images/projects/ember-and-oak.svg",
    thumbnailAlt: "Ember & Oak specialty food storefront with warm product photography layout",
    featured: false,
    overview: [
      "Ember & Oak roasts single-origin coffee and ships small-batch pantry goods to a loyal following built at farmers' markets. Demand outgrew the weekly market stall — but their handmade Squarespace shop couldn't handle subscriptions, bundles, or holiday surges.",
      "They asked SmoothCuts for a storefront as crafted as their product: one that could grow recurring revenue and survive the December spike without a support nightmare for the two-person team.",
    ],
    challenge: {
      intro:
        "Migration anxiety was real — the store could not go down during peak season. Beyond that, the old shop had real limits:",
      bullets: [
        "No subscription capability, locking the business out of recurring revenue",
        "Checkout abandonment above 78%, worst on mobile",
        "Holiday 2023 crash: the site went down for 11 hours on its biggest sales day",
        "Product photography trapped in a grid that made artisan goods look generic",
        "Inventory and shipping workflows held together by manual spreadsheets",
      ],
    },
    approach: [
      "We rebuilt the store on WooCommerce with a subscription-first architecture — roast clubs front and center, flexible intervals, and a customer portal where subscribers manage everything themselves.",
      "The visual system borrows from the roastery itself: warm neutrals, smoke-toned photography, and tasting-note typography that treats each product page like a wine label. Bundle builders let gift-buyers assemble boxes without support emails.",
      "Performance and resilience were engineered for the December spike: full-page edge caching, image pipelines that keep the photo-heavy product pages light, and a checkout we tuned field-by-field until mobile completion matched desktop.",
    ],
    process: [
      artifact("ember-and-oak", 1, "Initial wireframe — subscription flow", "Wireframe of the Ember & Oak subscription selection flow", true),
      artifact("ember-and-oak", 2, "Mobile prototype — product page", "Mobile prototype of the Ember & Oak product detail page"),
      artifact("ember-and-oak", 3, "Typography exploration — label system", "Typography system for Ember & Oak's product label-style product pages"),
    ],
    techStack: ["WordPress", "WooCommerce", "WooCommerce Subscriptions", "Stripe", "Cloudflare", "Figma", "Klaviyo"],
    techRationale:
      "WooCommerce delivers subscription flexibility without SaaS lock-in or revenue-share fees, and its ecosystem let us wire Stripe, Klaviyo, and shipping tools into workflows the two-person team can actually run.",
    results: {
      metrics: [
        { value: 41, prefix: "", suffix: "%", label: "Revenue Now Recurring" },
        { value: 29, prefix: "+", suffix: "%", label: "Checkout Completion" },
        { value: 0, suffix: " min", label: "Holiday Downtime (2024)" },
      ],
      narrative:
        "Recurring subscriptions now cover the roastery's fixed costs before a single one-off order ships. The 2024 holiday season was their biggest ever — with zero downtime and zero emergency calls.",
    },
    testimonial: {
      quote:
        "The site runs itself now. Subscription revenue covers our rent, and December didn't break anything for the first time ever.",
      name: "June Calloway",
      role: "Co-founder, Ember & Oak",
    },
  },
  {
    slug: "sterling-rooke",
    client: "Sterling & Rooke",
    description:
      "Professional services firm rebrand and full website redesign.",
    industry: "B2B Services",
    tech: "Webflow",
    categories: ["B2B Services", "Webflow"],
    year: "2025",
    scope: "Rebrand, Design, Build, Content Strategy",
    liveUrl: "https://sterlingrooke.smoothcuts.studio",
    thumbnail: "/images/projects/sterling-rooke.svg",
    thumbnailAlt: "Sterling & Rooke professional services website with refined editorial layout",
    featured: false,
    overview: [
      "Sterling & Rooke is a specialist executive search firm placing finance leadership across the country. Their candidate network is elite and their client outcomes are exceptional — their brand, sadly, said neither.",
      "After losing two competitive RFPs where the deciding committee cited the firm's 'dated digital presence', the partners commissioned a full rebrand and rebuild. Our mandate: look like what they are — the premium option.",
    ],
    challenge: {
      intro:
        "The brand problem was deeper than a website. What discovery surfaced:",
      bullets: [
        "Visual identity from 2011 — clip-art logo, stock handshake photography",
        "Messaging indistinguishable from every other search firm ('relationship-driven, results-focused')",
        "Zero thought-leadership presence despite partners with genuine expertise",
        "Website metrics flat for three consecutive years",
        "Inconsistent documents and decks produced ad hoc by every consultant",
      ],
    },
    approach: [
      "We led with brand strategy before touching pixels: positioning workshops produced a sharp point of view — 'the search firm CFOs recommend to CFOs' — that every headline now reinforces.",
      "The visual identity trades corporate blue for ink, bone, and a single signature violet; typography pairs a confident editorial serif with a precise grotesque. Custom case studies replace stock photography, written from real placement outcomes with client permission.",
      "The Webflow build ships with a component library and editorial guidelines, so consultants publish insights and proposals on-brand without design support. Consistency stopped depending on anyone's memory.",
    ],
    process: [
      artifact("sterling-rooke", 1, "Initial wireframe — editorial hub layout", "Wireframe of the Sterling & Rooke insights hub layout", true),
      artifact("sterling-rooke", 2, "Mobile prototype — case study reading", "Mobile prototype of the Sterling & Rooke case study reading experience"),
      artifact("sterling-rooke", 3, "Brand exploration — final visual identity", "Brand and typography exploration for the Sterling & Rooke identity"),
    ],
    techStack: ["Webflow", "Figma", "Webflow CMS", "Memberstack", "Google Analytics", "Ahrefs"],
    techRationale:
      "Webflow CMS powers a thought-leadership engine the partners actually use, and Memberstack gates salary-benchmark reports — turning the firm's proprietary data into its most effective lead magnet.",
    results: {
      metrics: [
        { value: 2, prefix: "", suffix: "×", label: "RFP Win Rate" },
        { value: 73, prefix: "+", suffix: "%", label: "Insights Readership" },
        { value: 11, prefix: "", suffix: "", label: "Enterprise Clients Won Post-Launch" },
      ],
      narrative:
        "The rebrand repositioned Sterling & Rooke where it belonged. Win rates doubled in competitive pitches, and the firm's salary-benchmark report — gated on the new site — now feeds a pipeline of CFO relationships that used to take years to build.",
    },
    testimonial: {
      quote:
        "For the first time, our brand matches our reputation. Clients mention the website unprompted in pitch meetings now.",
      name: "Eleanor Whitfield",
      role: "Managing Partner, Sterling & Rooke",
    },
  },
  {
    slug: "nimbusly",
    client: "Nimbusly",
    description:
      "Early-stage SaaS launch site with waitlist and investor deck section.",
    industry: "SaaS",
    tech: "Next.js",
    categories: ["SaaS", "Next.js"],
    year: "2026",
    scope: "Strategy, Brand, Build, Launch",
    liveUrl: "https://nimbusly.smoothcuts.studio",
    thumbnail: "/images/projects/nimbusly.svg",
    thumbnailAlt: "Nimbusly early-stage SaaS launch website with cloud-native product visual",
    featured: false,
    overview: [
      "Nimbusly is an early-stage startup building a cloud cost observability platform for lean engineering teams. Pre-launch and pre-revenue, they had eight weeks of runway-momentum to convert hiring-launch buzz into a waitlist that investors would take seriously.",
      "The founding team had deep engineering credibility and zero marketing surface. SmoothCuts was engaged to create the brand, the site, and the launch infrastructure in one compressed engagement.",
    ],
    challenge: {
      intro:
        "This was a launch from zero, with the clock running. The constraints we designed around:",
      bullets: [
        "No brand at all — not even a logo — with launch day already announced",
        "Founders' pitch lived only in a pitch deck; nothing was digestible publicly",
        "Waitlist needed to capture and qualify demand before the product existed",
        "Technical buyers (staff engineers) are famously allergic to marketing fluff",
        "Investor section needed to communicate traction without disclosed metrics",
      ],
    },
    approach: [
      "We treated the waitlist as a product, not a form: a clear problem statement for engineers who've been burned by surprise cloud bills, a working demo sandbox with simulated data, and a waitlist flow that asks one qualifying question instead of ten.",
      "The brand direction is deliberately engineering-native — mono accents, diagram-inspired visuals, and copy written like a good pull request: specific, honest, and free of adjectives. Skeptical staff engineers became the design system's toughest test audience.",
      "A passworded investor room shipped alongside the public launch: traction highlights, roadmap narrative, and the deck itself, all versioned and trackable. The founders now send one link instead of attaching stale PDFs to every follow-up email.",
    ],
    process: [
      artifact("nimbusly", 1, "Initial wireframe — launch page skeleton", "Wireframe of the Nimbusly launch page skeleton and waitlist flow", true),
      artifact("nimbusly", 2, "Mobile prototype — demo sandbox teaser", "Mobile prototype of the Nimbusly demo sandbox teaser"),
      artifact("nimbusly", 3, "Brand sprint — identity from zero", "Compressed brand sprint output for the Nimbusly identity"),
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "MDX", "Vercel", "PostHog", "Resend", "Figma"],
    techRationale:
      "Next.js with MDX lets the founding engineers ship technical blog content in the same Git workflow they already love. PostHog analytics and Resend transactional email complete a launch stack that costs nearly nothing to run at pre-seed scale.",
    results: {
      metrics: [
        { value: 4100, suffix: "+", label: "Waitlist Signups in 6 Weeks" },
        { value: 31, prefix: "", suffix: "%", label: "Signup Conversion Rate" },
        { value: 3, prefix: "", suffix: "", label: "Term Sheets Post-Launch" },
      ],
      narrative:
        "The launch converted hiring-page traffic into a 4,100-strong waitlist in six weeks — proof of demand that featured directly in fundraising conversations. Three term sheets followed within the quarter.",
    },
    testimonial: {
      quote:
        "SmoothCuts gave us a launch that made us look like the company we're becoming, not the company we were. Investors noticed immediately.",
      name: "Theo Lindqvist",
      role: "Co-founder & CEO, Nimbusly",
    },
  },
];

/* ---------- Data helpers ---------- */

/** All project slugs — used by generateStaticParams for the [slug] route. */
export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

/** Find a single project by slug (undefined when it doesn't exist). */
export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** The three projects featured on the homepage. */
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

/** Previous / next projects for case-study bottom navigation (wraps around). */
export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { prev, next };
}
