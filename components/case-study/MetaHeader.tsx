import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

/**
 * Case-study header — breadcrumb trail, client name H1, the
 * industry / scope / year metadata row with dividers, the "Visit Live
 * Site" external link, and the full-width glowing hero image.
 */
export default function MetaHeader({ project }: { project: Project }) {
  return (
    <header className="pt-[calc(var(--nav-height)+64px)]">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="font-mono text-[13px] text-dim">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/portfolio" className="transition-colors hover:text-violet">
              Work
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronDownIcon size={14} className="-rotate-90" />
          </li>
          <li aria-current="page" className="text-mute">
            {project.client}
          </li>
        </ol>
      </nav>

      <Reveal>
        <h1 className="mt-6 font-display text-[clamp(44px,7vw,88px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-snow">
          {project.client}
        </h1>
      </Reveal>

      {/* Metadata row with dividers */}
      <Reveal delay={100}>
        <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-line py-5 text-[15px]">
          <div className="flex items-center gap-3">
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
              Industry
            </dt>
            <dd className="text-snow">{project.industry}</dd>
          </div>
          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
              Scope
            </dt>
            <dd className="text-snow">{project.scope}</dd>
          </div>
          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-dim">
              Year
            </dt>
            <dd className="text-snow">{project.year}</dd>
          </div>
          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-violet hover:underline"
          >
            Visit Live Site
            <ArrowRightIcon size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </dl>
      </Reveal>

      {/* Full-width hero image with soft violet glow */}
      <Reveal delay={200} className="my-10">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          width={1600}
          height={1000}
          priority
          quality={85}
          className="max-h-[600px] w-full rounded-banner border border-line object-cover shadow-[0_20px_80px_rgba(108,99,255,0.15)]"
        />
      </Reveal>
    </header>
  );
}
