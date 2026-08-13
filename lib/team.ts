import type { Differentiator, ProcessStep, TeamMember } from "@/types/team";

/**
 * Team member data — all eight SmoothCuts specialists.
 * Displayed on the About page team grid.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Naveen",
    role: "Founder & Creative Director",
    department: "Leadership",
    bio: "Founded SmoothCuts with one mission — build websites that actually grow businesses. With years of experience leading digital strategy across retail, SaaS, and professional services, Naveen sets the creative vision and client strategy for every project. If you've spoken to SmoothCuts, you've spoken to Naveen.",
    skills: ["Brand Strategy", "Creative Direction", "Client Relations"],
  },
  {
    name: "Sameer",
    role: "Account Director & Project Lead",
    department: "Strategy",
    bio: "The operational backbone of SmoothCuts. Sameer manages every client relationship from the first discovery call to launch day, ensuring projects stay on timeline, on budget, and above expectations. Zero projects have missed a deadline under their watch.",
    skills: ["Project Management", "Client Communication", "Agile Delivery"],
  },
  {
    name: "Piyush",
    role: "Content Strategist & Copywriter",
    department: "Strategy",
    bio: "Piyush turns what businesses do into compelling stories that convert. They craft website copy that speaks directly to target audiences and build content structures that guide visitors toward action. Great design without great copy is just art — Piyush makes sure it sells.",
    skills: ["UX Copywriting", "SEO Content", "Brand Messaging"],
  },
  {
    name: "Sparsh",
    role: "Lead UI/UX Designer",
    department: "Design",
    bio: "Architects every user experience from the ground up — wireframes, journey maps, and high-fidelity prototypes that form the foundation of every SmoothCuts build. Every layout is designed with one goal: move the right visitor to the right action with zero friction.",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
  },
  {
    name: "Parita",
    role: "Visual & Brand Designer",
    department: "Design",
    bio: "Responsible for visual identity systems, custom illustrations, iconography, and the aesthetic signature that makes SmoothCuts websites impossible to ignore. Parita ensures every pixel aligns with the client's brand while pushing creative standards forward.",
    skills: ["Brand Identity", "Visual Design", "Motion Graphics", "Figma"],
  },
  {
    name: "Himanshu",
    role: "Senior Front-End Engineer",
    department: "Engineering",
    bio: "Translates design files into pixel-perfect, lightning-fast front-end code. Specializing in React, Next.js, and modern CSS, Himanshu builds interfaces that look exactly like the designs and load in under two seconds. Performance is never optional.",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
  },
  {
    name: "Nirbhay",
    role: "Full-Stack Developer",
    department: "Engineering",
    bio: "Handles everything under the hood — CMS integrations, database architecture, API connections, and back-end logic. Nirbhay builds systems clients can manage independently long after launch, without needing a developer on speed dial.",
    skills: ["WordPress", "Webflow", "Sanity CMS", "Node.js", "REST APIs"],
  },
  {
    name: "Divyansh",
    role: "QA Engineer & Performance Specialist",
    department: "Quality Assurance",
    bio: "The last line of defense before any SmoothCuts website goes live. Divyansh runs exhaustive cross-device testing, performance audits, accessibility compliance checks, and technical SEO reviews. Nothing ships until it passes their standards.",
    skills: ["QA Testing", "Core Web Vitals", "Accessibility", "SEO Audit"],
  },
  {
    name: "Naveen Ameriya",
    role: "SEO & Digital Marketing Specialist",
    department: "Growth",
    bio: "Naveen ensures every website SmoothCuts builds is primed to rank and convert from day one. From technical SEO and keyword strategy to analytics setup and paid campaign foundations, they bridge the gap between a beautiful website and measurable business results.",
    skills: ["Technical SEO", "Google Analytics", "Keyword Research", "Paid Ads Strategy"],
  },
];

/** Differentiator cards — "Eight People. Zero Compromises." section. */
export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "bolt",
    title: "Senior-Only Execution",
    body: "Every project is handled directly by experienced specialists. No work is delegated to juniors or outsourced third parties.",
  },
  {
    icon: "calendar",
    title: "Deadline-Driven",
    body: "We've never missed a launch date. Every project kicks off with a fixed timeline that we commit to and always deliver.",
  },
  {
    icon: "target",
    title: "Outcome-Focused",
    body: "We don't optimize for awards. We optimize for leads, conversions, and measurable business growth.",
  },
  {
    icon: "chat",
    title: "Direct Access Always",
    body: "You'll communicate directly with the people building your website. No account managers. No middlemen.",
  },
];

/** Five-step process timeline shown on the About page. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Research",
    body: "We study your business, competitors, and target audience to craft a strategy that aligns every design decision with your goals.",
  },
  {
    title: "Wireframes & Design",
    body: "High-fidelity mockups and interactive prototypes — you see and approve everything before a single line of code is written.",
  },
  {
    title: "Development & Integration",
    body: "Clean, performant code built on modern frameworks. We handle frontend, backend, CMS setup, and third-party integrations.",
  },
  {
    title: "Testing & Optimization",
    body: "Rigorous cross-browser and mobile testing, page-speed optimization, and SEO checks to ensure a flawless launch.",
  },
  {
    title: "Launch & Growth Support",
    body: "We deploy, monitor, and remain on standby for updates, new features, and ongoing improvements as your business scales.",
  },
];
