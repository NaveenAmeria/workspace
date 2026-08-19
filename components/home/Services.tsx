import {
  CodeIcon,
  PenIcon,
  RocketIcon,
  SearchIcon,
  WrenchIcon,
} from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import type { ComponentType, SVGProps } from "react";

/** Icon components from ui/Icons accept an optional pixel `size`. */
type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

/**
 * Homepage "Core Services" section — five phase-numbered service cards
 * covering the full engagement lifecycle (Discovery → Maintenance).
 */

interface Service {
  icon: IconComponent;
  title: string;
  description: string;
  phase: string;
}

const SERVICES: Service[] = [
  {
    icon: SearchIcon,
    title: "Discovery & Strategy",
    description:
      "Deep-dive audience research, sitemap architecture, user flow mapping, and conversion copywriting that sets the foundation for everything we build.",
    phase: "Phase 01",
  },
  {
    icon: PenIcon,
    title: "UI/UX Design",
    description:
      "Responsive interface wireframing, custom component libraries, and interactive Figma prototypes you can test before a single line of code is written.",
    phase: "Phase 02",
  },
  {
    icon: CodeIcon,
    title: "Web Engineering",
    description:
      "Pixel-perfect front-end development, CMS integration, clean semantic code, and back-end configurations built to last.",
    phase: "Phase 03",
  },
  {
    icon: RocketIcon,
    title: "Performance & SEO",
    description:
      "Technical on-page SEO, image optimization, Core Web Vitals tuning, and mobile performance optimization before every launch.",
    phase: "Phase 04",
  },
  {
    icon: WrenchIcon,
    title: "Ongoing Maintenance",
    description:
      "Post-launch technical support, security updates, cloud hosting management, and continuous conversion rate improvements.",
    phase: "Phase 05",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-[var(--nav-height)] bg-coal py-[60px] md:py-20 xl:py-[120px]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel text="What We Do" />
          <h2
            id="services-heading"
            className="mt-4 max-w-3xl font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
          >
            End-to-End Web Solutions For Growing Businesses
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
            From strategy to launch — we handle every layer of your website so
            you can focus on running your business.
          </p>
        </Reveal>

        {/* 3 cards on row 1, 2 on row 2 (desktop); stacked on mobile */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 80}>
                <article className="group h-full rounded-card border border-line bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-base text-mute transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-violet/40 group-hover:bg-violet/[0.08] group-hover:text-violet">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-[12px] text-dim transition-colors duration-300 group-hover:text-violet">
                      {service.phase}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(22px,2.5vw,26px)] font-bold tracking-tight text-snow">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
