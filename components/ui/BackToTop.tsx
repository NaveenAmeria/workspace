"use client";

import { ArrowRightIcon } from "@/components/ui/Icons";

/**
 * Back-to-top control in the footer's legal row. Smoothly scrolls to the
 * top on click (respects prefers-reduced-motion) with a little hover lift
 * and arrow nudge.
 */
export default function BackToTop() {
  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group inline-flex items-center gap-2 text-[13px] text-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-violet"
    >
      Back to top
      <ArrowRightIcon
        size={16}
        className="-rotate-45 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </button>
  );
}
