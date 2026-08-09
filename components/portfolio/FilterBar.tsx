"use client";

import { useCallback, useRef, useState } from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { PROJECT_FILTERS } from "@/lib/projects";
import type { Project } from "@/types/project";

/**
 * Sticky portfolio filter bar + project grid (client component).
 * Clicking a pill fades non-matching cards out and fades matches in
 * (opacity + scale, 250ms). The bar sticks just below the fixed navbar
 * and scrolls horizontally on mobile with the scrollbar hidden.
 */

/** How long the fade-out takes before cards are removed from the grid. */
const SWAP_DURATION_MS = 250;

export default function FilterBar({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof PROJECT_FILTERS)[number]>("All");
  const [visible, setVisible] = useState<Project[]>(projects);
  const [hiding, setHiding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyFilter = useCallback(
    (filter: (typeof PROJECT_FILTERS)[number]) => {
      if (filter === active) return;
      if (timerRef.current) clearTimeout(timerRef.current);

      setActive(filter);
      // Phase 1: fade everything out…
      setHiding(true);
      // Phase 2: …then swap in the matching set and fade back in.
      timerRef.current = setTimeout(() => {
        setVisible(
          filter === "All"
            ? projects
            : projects.filter((p) => p.categories.includes(filter)),
        );
        requestAnimationFrame(() => setHiding(false));
      }, SWAP_DURATION_MS);
    },
    [active, projects],
  );

  return (
    <>
      {/* Sticky filter pills */}
      <div className="sticky top-[var(--nav-height)] z-40 border-b border-line bg-base/95 py-4 backdrop-blur-[16px]">
        <div
          role="group"
          aria-label="Filter projects"
          className="no-scrollbar mx-auto flex w-full max-w-7xl gap-3 overflow-x-auto px-5 md:flex-wrap md:px-8"
        >
          {PROJECT_FILTERS.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => applyFilter(filter)}
                aria-pressed={isActive}
                className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-violet bg-violet text-white"
                    : "border-line bg-transparent text-mute hover:border-violet hover:text-violet"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered project grid */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {visible.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <div
                key={project.slug}
                className={`filter-item ${hiding ? "is-hiding" : ""}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-mute">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </>
  );
}
