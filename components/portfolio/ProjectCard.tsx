import Image from "next/image";
import type { Project } from "@/types/project";
import TagPill from "@/components/ui/TagPill";

/**
 * Portfolio project card — full-bleed 16/10 thumbnail, tag pills,
 * client name, and a one-line outcome description. Display-only
 * (case study data is preserved in the codebase for future use).
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group block overflow-hidden rounded-card border border-line bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          width={1600}
          height={1000}
          quality={85}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Card body */}
      <div className="p-5 md:px-6 md:pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <TagPill>{project.industry}</TagPill>
          <TagPill variant="mint">{project.tech}</TagPill>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-snow">
          {project.client}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-mute">
          {project.description}
        </p>
      </div>
    </div>
  );
}
