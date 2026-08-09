/** Type definitions for team members and about-page content. */

export interface TeamMember {
  name: string;
  /** Role title, e.g. "Founder & Creative Director". */
  role: string;
  /** Department tag pill, e.g. "Leadership". */
  department: string;
  bio: string;
  skills: string[];
  /** Light-hearted detail rendered in italics at the bottom of the card. */
  funFact: string;
}

/** Card in the "Eight People. Zero Compromises." differentiator grid. */
export interface Differentiator {
  icon: "bolt" | "calendar" | "target" | "chat";
  title: string;
  body: string;
}

/** One step of the "How We Work" process timeline. */
export interface ProcessStep {
  title: string;
  body: string;
}
