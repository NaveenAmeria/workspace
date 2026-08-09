import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

/**
 * Homepage "Selected Work" — three featured project cards in a
 * 3 → 2 → 1 column grid, with a header row linking to the full portfolio.
 */
export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section aria-labelledby="featured-heading" className="py-[60px] md:py-20 xl:py-[120px]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="featured-heading"
              className="font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              Selected Work
            </h2>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 pb-2 text-base font-medium text-violet hover:underline"
            >
              View All Projects
              <ArrowRightIcon size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
