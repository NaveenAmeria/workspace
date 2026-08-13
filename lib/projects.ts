import type { Project } from "@/types/project";

/** Filter pills shown on /portfolio (industries first, then platforms). */
export const PROJECT_FILTERS = [
  "All",
  "E-commerce",
  "Healthcare",
  "Food & Beverage",
  "Education",
  "Real Estate",
  "Logistics",
  "Shopify",
  "WordPress",
  "Next.js",
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
    slug: "spicewood-organics",
    client: "Spicewood Organics",
    description: "E-commerce Web Application & Brand Portal for D2C Organic Spices.",
    industry: "E-commerce",
    tech: "Shopify",
    categories: ["E-commerce", "Shopify"],
    year: "2025",
    scope: "Strategy, Design, Build, Shopify Configuration",
    liveUrl: "https://spicewoodorganics.com",
    thumbnail: "/images/projects/img1.png",
    thumbnailAlt: "Spicewood Organics ecommerce storefront",
    featured: false,
    overview: [
      "Spicewood Organics is a D2C brand from Kochi bringing authentic, organic spices to health-conscious consumers. Their handcrafted products had a strong local following, but their digital presence was holding back nationwide expansion.",
      "They needed a platform that could handle recurring subscriptions, direct customer support via WhatsApp, and seamless delivery integration to scale their business across India.",
    ],
    challenge: {
      intro: "The brand struggled with a fragmented tech stack and high drop-off rates:",
      bullets: [
        "Inability to offer recurring subscriptions for their popular spice boxes",
        "Manual shipping management that took hours every day",
        "High cart abandonment due to limited localized payment options",
        "Disjointed customer support causing delays in query resolutions",
        "Slow mobile experience affecting their primary traffic source",
      ],
    },
    approach: [
      "We built a high-performance custom Shopify theme tailored to their brand aesthetics, integrating advanced subscription models for their recurring spice box deliveries.",
      "To streamline operations, we integrated Shiprocket for automated shipping labels and Razorpay for seamless local payment options like UPI and NetBanking.",
      "A direct WhatsApp order integration was implemented to offer instant support and capture orders from less tech-savvy customers directly.",
    ],
    process: [
      artifact("auravelle", 1, "Initial wireframe — subscription box workflow", "Wireframe for subscription flow", true),
      artifact("auravelle", 2, "Mobile checkout prototype", "Mobile checkout prototype with UPI"),
      artifact("auravelle", 3, "Brand typography and color palette", "Spicewood Organics brand identity"),
    ],
    techStack: ["Shopify", "Liquid", "Tailwind CSS", "Razorpay API", "Shiprocket", "WhatsApp Business API"],
    techRationale: "Shopify provided a robust, scalable backend for e-commerce, while Tailwind CSS allowed us to rapidly build a custom, highly performant front-end. Razorpay and Shiprocket APIs were essential for localizing the checkout and logistics for the Indian market.",
    results: {
      metrics: [
        { value: 140, prefix: "+", suffix: "%", label: "Monthly D2C Sales" },
        { value: 22, prefix: "-", suffix: "%", label: "Cart Abandonment Rate" },
        { value: 90, prefix: "", suffix: " Days", label: "To Achieve Target ROI" },
      ],
      narrative: "Within 90 days of launch, direct-to-consumer sales grew by 140%, and the cart abandonment rate dropped significantly thanks to UPI integration. The team now spends 80% less time on manual shipping logistics.",
    },
    testimonial: {
      quote: "The new website completely changed our business trajectory. SmoothCuts understood exactly what we needed to scale across India.",
      name: "Rahul Menon",
      role: "Founder, Spicewood Organics",
    },
  },
  {
    slug: "royal-milestone",
    client: "Royal Milestone Real Estate",
    description: "Property Listing Portal & CRM Integration for premium advisory.",
    industry: "Real Estate",
    tech: "Next.js",
    categories: ["Real Estate", "Next.js"],
    year: "2025",
    scope: "Platform Build, CRM Architecture, UX Design",
    liveUrl: "https://royalmilestone.com",
    thumbnail: "/images/projects/img6.png",
    thumbnailAlt: "Royal Milestone real estate property listing portal",
    featured: true,
    overview: [
      "Royal Milestone is a premier real estate advisory in Pune specializing in luxury residential and commercial properties. Their agents represent high-value listings, but their legacy website felt cheap and static.",
      "They required a modern property portal with advanced filtering, immersive media capabilities, and a direct pipeline into their sales team's HubSpot CRM.",
    ],
    challenge: {
      intro: "They needed to deliver a luxury browsing experience while optimizing the sales funnel:",
      bullets: [
        "Clunky property search that frustrated high-net-worth buyers",
        "Disjointed lead management causing delayed responses to hot inquiries",
        "No platform capability to showcase premium 360-degree virtual tours",
        "Slow load times impacting image-heavy property portfolios",
      ],
    },
    approach: [
      "We engineered a blazing-fast Next.js frontend with a dynamic filtering system, allowing buyers to instantly sort by budget, location, configuration, and amenities without page reloads.",
      "A direct API integration was built to feed every inquiry straight from the property page into HubSpot, instantly routing leads to the appropriate agent.",
      "To elevate the luxury feel, we integrated a seamless 360-degree virtual tour embed system, allowing immersive property walkthroughs directly on the listing pages.",
    ],
    process: [
      artifact("ember-and-oak", 1, "Dynamic property filter UI", "Property search filtering wireframe", true),
      artifact("ember-and-oak", 2, "360 tour integration", "Virtual tour integration prototype"),
      artifact("ember-and-oak", 3, "HubSpot API data flow", "CRM lead routing architecture"),
    ],
    techStack: ["Next.js", "Tailwind CSS", "Firebase", "HubSpot API"],
    techRationale: "Next.js was essential for high-performance rendering of image-heavy property listings. Firebase provided a flexible backend for rapidly updating property databases, while the HubSpot API ensured no lead was ever dropped.",
    results: {
      metrics: [
        { value: 60, prefix: "+", suffix: "%", label: "Qualified Buyer Inquiries" },
        { value: 15, prefix: "<", suffix: " min", label: "Sales Response Time" },
        { value: 24, prefix: "from ", suffix: " hr", label: "Previous Response Time" },
      ],
      narrative: "The instant CRM routing dropped sales response times from 24 hours to under 15 minutes, directly contributing to a 60% increase in qualified inquiries progressing to site visits.",
    },
    testimonial: {
      quote: "The speed at which we can now respond to leads has fundamentally changed our closing rate. The site looks exactly as premium as the properties we sell.",
      name: "Vikram Desai",
      role: "Managing Partner, Royal Milestone",
    },
  },
  {
    slug: "sharma-dental",
    client: "Dr. Sharma Dental & Implant Center",
    description: "Clinic Management & Patient Booking Portal.",
    industry: "Healthcare",
    tech: "Next.js",
    categories: ["Healthcare", "Next.js"],
    year: "2025",
    scope: "Design, Application Build, Local SEO",
    liveUrl: "https://sharmadental.clinic",
    thumbnail: "/images/projects/img3.png",
    thumbnailAlt: "Dr. Sharma Dental online booking portal",
    featured: true,
    overview: [
      "Dr. Sharma Dental & Implant Center is a prominent multispecialty clinic in South Delhi. While their clinical reputation was stellar, their patient onboarding process was entirely manual and phone-based.",
      "They needed a modern digital front door that could handle appointment scheduling, provide post-care resources, and attract local patients through search.",
    ],
    challenge: {
      intro: "The clinic's growth was bottlenecked by administrative overhead and poor search visibility:",
      bullets: [
        "Front desk overwhelmed by routine scheduling and rescheduling calls",
        "No digital patient portal for sharing post-treatment care instructions",
        "Poor local SEO rendering them invisible to nearby high-intent searches",
        "Paper-based invoicing that lacked a modern patient experience",
      ],
    },
    approach: [
      "We engineered a custom patient portal using Next.js, featuring real-time online appointment scheduling integrated directly with the clinic's Google Calendar.",
      "A secure patient dashboard was built to deliver basic post-treatment care guides, treatment summaries, and digital invoices to reduce paper waste and inquiries.",
      "We executed a hyper-local SEO strategy, optimizing site architecture and content specifically for high-value dental search terms in South Delhi neighborhoods.",
    ],
    process: [
      artifact("clearpath-health", 1, "Appointment booking calendar", "Calendar integration wireframe", true),
      artifact("clearpath-health", 2, "Patient portal dashboard", "Patient dashboard UI prototype"),
      artifact("clearpath-health", 3, "Local SEO content mapping", "Content strategy for local search"),
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Google Calendar API"],
    techRationale: "Next.js delivered the blazing-fast performance needed for high SEO rankings. A Node.js and PostgreSQL backend provided a secure and scalable foundation for managing patient booking data.",
    results: {
      metrics: [
        { value: 1, prefix: "#", suffix: "", label: "Local Google Maps Ranking" },
        { value: 35, prefix: "-", suffix: "%", label: "Walk-in Wait Times" },
        { value: 50, prefix: "+", suffix: "%", label: "Online Bookings" },
      ],
      narrative: "By automating scheduling and dominating local search, the clinic saw a 35% reduction in wait times and achieved the #1 spot on Google Maps for key South Delhi dental queries.",
    },
    testimonial: {
      quote: "Our front desk is finally calm, and we're seeing a steady stream of new patients from the neighborhood. The digital transformation has been incredible.",
      name: "Dr. Amit Sharma",
      role: "Lead Dentist, Sharma Dental",
    },
  },
  {
    slug: "urbanbites",
    client: "UrbanBites Cafe & Bakery",
    description: "Direct Delivery Web App & Interactive Menu to bypass aggregators.",
    industry: "Food & Beverage",
    tech: "Next.js",
    categories: ["Food & Beverage", "Next.js"],
    year: "2024",
    scope: "PWA Development, Order Management System",
    liveUrl: "https://urbanbites.cafe",
    thumbnail: "/images/projects/img4.png",
    thumbnailAlt: "UrbanBites web app interface",
    featured: false,
    overview: [
      "UrbanBites is a boutique cafe and cloud kitchen in Bengaluru. Like many restaurants, their profit margins were being heavily eroded by 20-30% commissions from third-party delivery aggregators.",
      "They needed a direct ordering platform that offered an experience as smooth as the aggregators, encouraging their loyal customer base to order directly.",
    ],
    challenge: {
      intro: "The goal was to reclaim margins without sacrificing the user experience:",
      bullets: [
        "Unsustainable commission fees to third-party delivery apps",
        "Lack of direct customer data and remarketing capability",
        "Inefficient in-dine ordering process during peak cafe hours",
        "Need for real-time order tracking to match aggregator standards",
      ],
    },
    approach: [
      "We built a Progressive Web App (PWA) using the MERN stack, delivering an app-like ordering experience directly through the browser without requiring App Store downloads.",
      "For dine-in customers, we implemented a QR-code scannable digital menu that routes orders directly to the kitchen display system.",
      "We integrated an automated SMS notification system via Twilio to provide live status updates, from prep to out-for-delivery, ensuring customers were always in the loop.",
    ],
    process: [
      artifact("flowpilot", 1, "PWA ordering experience", "Mobile ordering flow wireframe", true),
      artifact("flowpilot", 2, "Kitchen display system interface", "Order management dashboard UI"),
      artifact("flowpilot", 3, "QR digital menu design", "Digital menu layout and interactions"),
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "PWA", "Twilio API"],
    techRationale: "The MERN stack allowed for rapid full-stack development with real-time capabilities necessary for order tracking. The PWA approach ensured maximum reach with minimal friction for end-users.",
    results: {
      metrics: [
        { value: 18, prefix: "", suffix: "%", label: "Saved in Commission Fees" },
        { value: 25, prefix: "", suffix: "%", label: "Direct Orders (Weekday)" },
        { value: 100, prefix: "", suffix: "%", label: "Customer Data Ownership" },
      ],
      narrative: "The app successfully shifted a quarter of their weekday delivery volume to the direct channel, saving 18% in aggregator fees and allowing them to build a proprietary customer database for the first time.",
    },
    testimonial: {
      quote: "Getting our customers to order directly felt impossible until we launched this PWA. It's just as fast as the big apps, and we keep our margins.",
      name: "Sneha Reddy",
      role: "Owner, UrbanBites Cafe",
    },
  },
  {
    slug: "zenith-academy",
    client: "Zenith Career Academy",
    description: "Student Portal & Online Assessment Platform for test prep.",
    industry: "Education",
    tech: "WordPress",
    categories: ["Education", "WordPress"],
    year: "2024",
    scope: "LMS Integration, API Development, UX Design",
    liveUrl: "https://zenithacademy.in",
    thumbnail: "/images/projects/img5.png",
    thumbnailAlt: "Zenith Career Academy LMS interface",
    featured: false,
    overview: [
      "Zenith Career Academy in Kota is a premier test preparation institute. They needed to transition from offline-only classrooms to a hybrid model with robust digital infrastructure.",
      "The requirement was a comprehensive Learning Management System capable of hosting heavy video content and conducting large-scale timed mock tests concurrently.",
    ],
    challenge: {
      intro: "Transitioning a traditional coaching institute online presented several technical scale challenges:",
      bullets: [
        "Inability to securely host and stream proprietary video lectures",
        "Need for a robust exam engine that prevents cheating and handles concurrent users",
        "Heavy administrative load managing enrollments and fee collections manually",
        "Lack of detailed performance analytics for students and parents",
      ],
    },
    approach: [
      "We deployed WordPress paired with LearnDash LMS to create a structured curriculum environment, utilizing AWS S3 for secure, cost-effective, and scalable video hosting.",
      "A custom automated mock test engine was developed, featuring strict timers, automated scoring, and detailed performance breakdown analytics reports post-exam.",
      "Integrated Razorpay for seamless batch fee collection and study material purchases, fully automating the student onboarding process.",
    ],
    process: [
      artifact("harborline", 1, "Custom test engine interface", "Exam engine wireframe", true),
      artifact("harborline", 2, "Student analytics dashboard", "Performance analytics UI"),
      artifact("harborline", 3, "Video curriculum layout", "LearnDash course layout"),
    ],
    techStack: ["WordPress", "LearnDash LMS", "MySQL", "AWS S3", "Razorpay"],
    techRationale: "WordPress + LearnDash provided a feature-rich educational foundation quickly. AWS S3 was critical for handling high-bandwidth video streaming without crashing the main application server during peak study hours.",
    results: {
      metrics: [
        { value: 1500, prefix: "+", suffix: "", label: "Active Students Onboarded" },
        { value: 40, prefix: "-", suffix: "%", label: "Administrative Workload" },
        { value: 2, prefix: "", suffix: "", label: "Academic Cycles Supported" },
      ],
      narrative: "The platform seamlessly handled over 1,500 continuous student sessions, dropping the administrative burden of enrollment and testing by 40%.",
    },
    testimonial: {
      quote: "Our digital transition was flawless. The testing engine works beautifully even when hundreds of students log in at the same time.",
      name: "Rajesh Kumar",
      role: "Director, Zenith Career Academy",
    },
  },
  {
    slug: "aarya-handicrafts",
    client: "Aarya Handicrafts & Handlooms",
    description: "Global E-commerce Platform & B2B Wholesale Catalog.",
    industry: "E-commerce",
    tech: "WordPress",
    categories: ["E-commerce", "WordPress"],
    year: "2024",
    scope: "Design, WooCommerce Build, B2B Integration",
    liveUrl: "https://aaryahandicrafts.in",
    thumbnail: "/images/projects/img2.png",
    thumbnailAlt: "Aarya Handicrafts B2B and B2C portal",
    featured: false,
    overview: [
      "Based in Jaipur, Aarya Handicrafts preserves traditional Rajasthani block printing. They cater to both individual retail customers and international B2B wholesale buyers.",
      "Their previous digital presence failed to showcase the intricate details of their crafts and lacked the technical functionality to handle international B2B inquiries effectively.",
    ],
    challenge: {
      intro: "Aarya needed a platform that could serve two completely different audiences without friction:",
      bullets: [
        "No dual-currency support, complicating international sales",
        "Low-resolution imagery that failed to capture the artisanal quality",
        "Manual, time-consuming process for generating wholesale catalogs",
        "B2B inquiries were handled entirely through unstructured emails",
        "Website lacked the cultural storytelling essential to their brand value",
      ],
    },
    approach: [
      "We built a robust WooCommerce platform with a custom dual-currency checkout system (INR for domestic, USD for international) powered by Stripe and Razorpay.",
      "The site features a high-resolution visual gallery to showcase intricate craft details, paired with rich storytelling about the artisans behind the products.",
      "For wholesale buyers, we implemented a dedicated B2B inquiry flow that automatically generates PDF catalogs based on selected product categories.",
    ],
    process: [
      artifact("meridien-partners", 1, "Wholesale inquiry flow", "B2B inquiry wireframe", true),
      artifact("meridien-partners", 2, "Product gallery interaction", "High-res gallery prototype"),
      artifact("meridien-partners", 3, "Checkout currency toggle", "Dual-currency checkout design"),
    ],
    techStack: ["WordPress", "WooCommerce", "Custom PHP", "Stripe", "Razorpay"],
    techRationale: "WordPress and WooCommerce provided the flexibility to build a hybrid B2C/B2B platform. Custom PHP was used to handle the dynamic PDF catalog generation and complex currency routing logic.",
    results: {
      metrics: [
        { value: 12, prefix: "", suffix: "", label: "Intl. Wholesale Buyers Onboarded" },
        { value: 300, prefix: "+", suffix: "%", label: "Digital Catalog Views" },
        { value: 6, prefix: "", suffix: " Months", label: "To Achieve B2B Growth" },
      ],
      narrative: "The automated B2B tools transformed their wholesale pipeline. In just 6 months, they onboarded 12 new international buyers, while digital catalog views skyrocketed by 300%.",
    },
    testimonial: {
      quote: "SmoothCuts built us a platform that beautifully tells our story while solving complex international sales challenges. Our wholesale process is finally automated.",
      name: "Meera Singh",
      role: "Director, Aarya Handicrafts",
    },
  },
  {
    slug: "veloce-logistics",
    client: "Veloce Regional Logistics",
    description: "Corporate Website & Shipment Tracking System for B2B freight.",
    industry: "Logistics",
    tech: "Other",
    categories: ["Logistics"],
    year: "2024",
    scope: "Web App Build, API Development, UI Design",
    liveUrl: "https://velocelogistics.in",
    thumbnail: "/images/projects/img7.png",
    thumbnailAlt: "Veloce Logistics shipment tracking portal",
    featured: true,
    overview: [
      "Veloce operates a vast B2B freight and courier network centered in Ahmedabad. Their operations were solid, but their customer-facing technology was severely outdated.",
      "Corporate clients were constantly tying up phone lines to check shipment statuses and request quotes. Veloce needed a digital overhaul to offer self-serve tools to their enterprise customers.",
    ],
    challenge: {
      intro: "Customer support overhead was crippling operational efficiency:",
      bullets: [
        "Thousands of calls weekly just to check consignment delivery status",
        "Sales team wasting hours generating basic freight cost estimates manually",
        "No digital repository for corporate clients to access GST invoices",
        "Outdated brand image affecting enterprise sales pitches",
      ],
    },
    approach: [
      "We built a robust web application using Laravel and Vue.js, featuring a real-time consignment tracking portal integrated with their internal dispatch APIs.",
      "An automated freight cost estimator tool was developed, allowing business clients to calculate rates instantly based on weight, volume, and route matrices.",
      "We launched a secure corporate client dashboard where partners can log in, view booking histories, and download GST invoices on demand.",
    ],
    process: [
      artifact("sterling-rooke", 1, "Consignment tracking interface", "Shipment tracking UI wireframe", true),
      artifact("sterling-rooke", 2, "Automated freight estimator", "Freight calculator logic and UI"),
      artifact("sterling-rooke", 3, "Corporate invoice dashboard", "Client dashboard prototype"),
    ],
    techStack: ["Laravel", "Vue.js", "MySQL", "REST APIs"],
    techRationale: "Laravel provides a rock-solid, secure backend capable of handling complex enterprise business logic and API integrations, while Vue.js allowed us to build highly reactive client-side dashboards.",
    results: {
      metrics: [
        { value: 50, prefix: "-", suffix: "%", label: "Tracking Support Calls" },
        { value: 30, prefix: "+", suffix: "", label: "Enterprise Clients Onboarded" },
        { value: 100, prefix: "", suffix: "%", label: "Invoice Automation" },
      ],
      narrative: "By empowering clients with self-serve tools, Veloce halved their customer support call volume within weeks and leveraged the new professional portal to confidently onboard 30+ new enterprise accounts.",
    },
    testimonial: {
      quote: "The tracking portal alone saved us hundreds of man-hours. Our corporate clients love the transparency and the self-serve invoice dashboard.",
      name: "Sanjay Patel",
      role: "Operations Head, Veloce Logistics",
    },
  },
  {
    slug: "earthly-essentials",
    client: "Earthly Essentials",
    description: "Brand Web Store & Content Hub for Natural Skincare.",
    industry: "E-commerce",
    tech: "Webflow",
    categories: ["E-commerce", "Webflow"],
    year: "2025",
    scope: "Design, Webflow Build, Headless Commerce",
    liveUrl: "https://earthlyessentials.co",
    thumbnail: "/images/projects/img8.png",
    thumbnailAlt: "Earthly Essentials skincare web store",
    featured: false,
    overview: [
      "Earthly Essentials formulates Ayurvedic beauty and natural skincare products in Dehradun. Their products require education — customers need to know which herbs solve their specific skin concerns.",
      "They needed a website that blurred the line between an editorial wellness blog and a high-converting e-commerce store, providing personalized guidance at scale.",
    ],
    challenge: {
      intro: "Standard e-commerce grids were failing to communicate the product's value and nuances:",
      bullets: [
        "High bounce rate on product pages due to lack of educational context",
        "Customers unsure which products matched their specific skin types",
        "Inflexible Shopify themes restricting their editorial content layout",
        "Heavy imagery causing unacceptable mobile load times",
      ],
    },
    approach: [
      "We utilized Webflow to design a visual-first, highly editorial layout, embedding Shopify Lite buy buttons directly within content-rich articles and guides (a headless commerce approach).",
      "We engineered an interactive 'Skin Type Quiz' using Custom JS that analyzes user inputs to recommend a personalized daily product regimen.",
      "Extensive optimization techniques were applied to imagery and assets, ensuring the media-heavy site loaded in under 1.5 seconds on mobile networks.",
    ],
    process: [
      artifact("nimbusly", 1, "Skin Type Quiz logic flow", "Quiz interaction flowchart", true),
      artifact("nimbusly", 2, "Editorial product integration", "Blog-to-cart layout design"),
      artifact("nimbusly", 3, "Mobile speed optimization", "Component breakdown for performance"),
    ],
    techStack: ["Webflow", "Shopify Lite", "Custom JS", "Figma"],
    techRationale: "Webflow provided the absolute design freedom required for the editorial layouts, while Shopify Lite handled the secure, robust e-commerce backend seamlessly via embedded headless widgets.",
    results: {
      metrics: [
        { value: 68, prefix: "", suffix: "%", label: "Quiz Completion Rate" },
        { value: 24, prefix: "", suffix: "%", label: "Quiz-to-Buyer Conversion" },
        { value: 1.5, prefix: "<", suffix: "s", label: "Mobile Load Time" },
      ],
      narrative: "The 'Skin Type Quiz' became an instant growth engine. With a 68% completion rate and a staggering 24% of those users converting to buyers, the personalized approach proved highly lucrative.",
    },
    testimonial: {
      quote: "The interactive quiz is doing the work of a seasoned beauty consultant. The way our content flows directly into purchases is exactly what we envisioned.",
      name: "Priyanka Joshi",
      role: "Founder, Earthly Essentials",
    },
  },
];

/* ---------- Data helpers ---------- */

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { prev, next };
}
