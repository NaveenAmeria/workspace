/**
 * Central site configuration — contact details, URLs, and navigation.
 * Hardcoded content lives here (and in lib/projects.ts / lib/team.ts)
 * so it stays extractable and easy to replace.
 */

export const SITE = {
  name: "SmoothCuts",
  tagline: "Built for businesses that mean business.",
  positioning:
    "We Build Websites That Work As Hard As You Do — Custom Web Design & Development for Ambitious Small Businesses",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smoothcuts.studio",
  email: "hello@smoothcuts.studio",
  phone: "+1 (555) 013-4882",
  phoneHref: "tel:+15550134882",
  address: "Level 4, Startup Hub, Malviya Nagar, Jaipur, Rajasthan 302017",
  mapQuery: "Malviya Nagar, Jaipur, Rajasthan",
  foundingYear: 2019,
} as const;

/** Primary navigation links shown in the global navbar. */
export const NAV_LINKS = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
] as const;

/** Social profiles shown in the footer and contact trust card. */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/smoothcuts", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/smoothcuts", icon: "instagram" },
  { label: "Dribbble", href: "https://dribbble.com/smoothcuts", icon: "dribbble" },
  { label: "Twitter / X", href: "https://x.com/smoothcuts", icon: "x" },
] as const;

export type SocialIconName = (typeof SOCIAL_LINKS)[number]["icon"];
