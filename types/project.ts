/** Type definitions for portfolio projects and case-study content. */

/** A single visual artifact shown in the case-study process gallery. */
export interface ProcessArtifact {
  /** Path to the image under /public. */
  src: string;
  caption: string;
  alt: string;
  /** When true, the tile spans both columns of the gallery. */
  wide?: boolean;
}

/** One measurable business outcome shown as a large callout block. */
export interface CaseMetric {
  /** Numeric value used by the count-up animation. */
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

/** Client testimonial embedded in the case-study page. */
export interface CaseTestimonial {
  quote: string;
  name: string;
  role: string;
}

/** Full project record — drives portfolio cards and case-study pages. */
export interface Project {
  slug: string;
  /** Client brand name (fictional placeholder). */
  client: string;
  /** One-line outcome-focused project description. */
  description: string;
  /** Industry category, e.g. "E-commerce" (also used for filtering). */
  industry: string;
  /** Primary technology, e.g. "Next.js" (also used for filtering). */
  tech: string;
  /** Filter categories this project belongs to. */
  categories: string[];
  year: string;
  scope: string;
  liveUrl: string;
  /** Card / hero thumbnail. */
  thumbnail: string;
  thumbnailAlt: string;
  /** Whether this project appears in the homepage "Selected Work" row. */
  featured: boolean;

  /* ---- Case-study long-form content ---- */
  overview: string[];
  challenge: {
    intro: string;
    bullets: string[];
  };
  approach: string[];
  process: ProcessArtifact[];
  techStack: string[];
  techRationale: string;
  results: {
    metrics: CaseMetric[];
    narrative: string;
  };
  testimonial: CaseTestimonial;
}
