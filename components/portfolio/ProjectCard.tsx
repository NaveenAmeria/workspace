import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ArrowRightIcon } from "@/components/ui/Icons";
import TagPill from "@/components/ui/TagPill";

/**
 * Portfolio project card — full-bleed 16/10 thumbnail with a hover
 * overlay ("View Case Study →" slides up), tag pills, client name,
 * and a one-line outcome description. The whole card is a link.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-card border border-line bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet focus-visible:-translate-y-1"
      aria-label={`View the ${project.client} case study`}
    >
      {/* Thumbnail + hover overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          width={1600}
          height={1000}
          quality={85}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-base/85 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="gradient-cta inline-flex translate-y-4 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
            View Case Study
            <ArrowRightIcon size={16} />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:px-6 md:pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <TagPill>{project.industry}</TagPill>
          <TagPill variant="mint">{project.tech}</TagPill>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-snow transition-colors duration-200 group-hover:text-violet">
          {project.client}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-mute">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
