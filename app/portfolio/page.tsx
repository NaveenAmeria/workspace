import type { Metadata } from "next";
import FilterBar from "@/components/portfolio/FilterBar";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work | SmoothCuts Web Design Agency",
  description:
    "Browse SmoothCuts' portfolio of custom web design projects across e-commerce, B2B services, SaaS, and local businesses.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Our Work | SmoothCuts Web Design Agency",
    description:
      "Browse SmoothCuts' portfolio of custom web design projects across e-commerce, B2B services, SaaS, and local businesses.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main id="main-content">
      {/* Page header */}
      <header className="pb-16 pt-[calc(var(--nav-height)+88px)] md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Our Work" />
            <h1 className="mt-4 font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-snow">
              Projects Built to Perform.
            </h1>
            <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-mute">
              A curated selection of websites we&apos;ve built for businesses
              that needed more than a pretty homepage.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Sticky filters + 8-project grid */}
      <FilterBar projects={PROJECTS} />
    </main>
  );
}
