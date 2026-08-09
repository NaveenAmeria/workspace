import type { Differentiator, ProcessStep, TeamMember } from "@/types/team";

/**
 * Team member data — all eight SmoothCuts specialists.
 * Displayed on the About page team grid.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Member1",
    role: "Founder & Creative Director",
    department: "Leadership",
    bio: "Member1 founded SmoothCuts with one obsession — building websites that actually grow businesses. With over a decade of experience leading digital strategy for brands across retail, SaaS, and professional services, they set the creative vision and client strategy for every project. If you've spoken to SmoothCuts, you've spoken to Member1.",
    skills: ["Brand Strategy", "Creative Direction", "Client Relations"],
    funFact:
      "Starts every project with a whiteboard and ends it with a live site that exceeds expectations.",
  },
  {
    name: "Member2",
    role: "Account Director & Project Lead",
    department: "Strategy",
    bio: "Member2 is the operational backbone of SmoothCuts. They manage every client relationship from first discovery call to launch day celebration, ensuring projects stay on timeline, on budget, and above expectations. Zero projects have missed a deadline under their watch.",
    skills: ["Project Management", "Client Communication", "Agile Delivery"],
    funFact: "Runs on coffee and Notion. Probably has your project timeline memorized.",
  },
  {
    name: "Member3",
    role: "Content Strategist & Conversion Copywriter",
    department: "Strategy",
    bio: "Member3 turns what businesses do into compelling stories that convert. They lead all discovery sessions, craft website copy that speaks directly to target audiences, and build content architectures that guide visitors toward taking action. Great design without great copy is just art — Member3 makes sure it sells.",
    skills: ["UX Copywriting", "SEO Content", "Brand Messaging"],
    funFact:
      "Can rewrite your entire homepage value proposition in 20 minutes. Has done it. Will do it again.",
  },
  {
    name: "Member4",
    role: "Lead UI/UX Designer",
    department: "Design",
    bio: "Member4 architects every user experience from the ground up — building wireframes, user journey maps, and high-fidelity prototypes that serve as the foundation of every SmoothCuts build. Their layouts are designed with one goal: move the right visitor to the right action with zero friction.",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    funFact:
      "Has an almost obsessive hatred of unnecessary clicks. Every interaction is intentional.",
  },
  {
    name: "Member5",
    role: "Graphic & Brand Designer",
    department: "Design",
    bio: "Member5 is responsible for the visual identity systems, custom illustration, iconography, and the aesthetic signature that makes SmoothCuts websites impossible to ignore. They ensure every pixel aligns with the client's brand while pushing visual standards forward.",
    skills: ["Brand Identity", "Visual Design", "Motion Graphics", "Figma"],
    funFact: "Judges websites in the first 3 seconds. Yours will pass.",
  },
  {
    name: "Member6",
    role: "Senior Front-End Engineer",
    department: "Engineering",
    bio: "Member6 translates design files into pixel-perfect, lightning-fast front-end code. Specializing in React, Next.js, and modern CSS architecture, they build interfaces that look exactly like the designs and load in under 2.5 seconds. Performance is not negotiable.",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
    funFact:
      "Checks Core Web Vitals scores the way other people check the weather. Every morning.",
  },
  {
    name: "Member7",
    role: "Full-Stack CMS Developer",
    department: "Engineering",
    bio: "Member7 handles everything that powers the website under the hood — CMS integrations, database architecture, API connections, and back-end configurations. They build systems that clients can manage independently long after launch, without needing a developer on speed dial.",
    skills: ["WordPress", "Webflow", "Sanity CMS", "Node.js", "REST APIs"],
    funFact: "Can build a custom CMS dashboard that your least tech-savvy client will love.",
  },
  {
    name: "Member8",
    role: "QA Engineer & Performance Specialist",
    department: "Quality Assurance",
    bio: "Member8 is the last line of defense before any SmoothCuts website goes live. They run exhaustive cross-device testing, performance audits, WCAG accessibility compliance checks, and SEO technical reviews. Nothing ships until it passes their standards. Nothing ever fails after it does.",
    skills: ["QA Testing", "Core Web Vitals", "Accessibility", "SEO Audit"],
    funFact: "Has a 47-point pre-launch checklist. Uses all 47 points. Every single time.",
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
    title: "Discovery & Strategy",
    body: "We deep-dive into your business, audience, and goals before designing a single thing.",
  },
  {
    title: "Design & Prototyping",
    body: "Full wireframes and interactive prototypes in Figma — you approve before we build.",
  },
  {
    title: "Engineering & Build",
    body: "Pixel-perfect development on your chosen platform with clean, optimized code.",
  },
  {
    title: "QA & Performance Optimization",
    body: "Cross-device testing, Core Web Vitals tuning, and accessibility compliance before launch.",
  },
  {
    title: "Launch & Ongoing Support",
    body: "Go live with confidence. We stay available for support, updates, and growth iterations.",
  },
];
