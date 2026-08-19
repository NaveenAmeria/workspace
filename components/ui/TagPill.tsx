import type { ReactNode } from "react";

/**
 * Small mono tag pill used for industry/tech labels on cards and
 * case-study tech stacks. Two treatments: violet (default) and mint,
 * matching the portfolio filter pill family.
 */
interface TagPillProps {
  children: ReactNode;
  variant?: "violet" | "mint";
  className?: string;
}

export default function TagPill({
  children,
  variant = "violet",
  className = "",
}: TagPillProps) {
  const styles =
    variant === "mint"
      ? "border-mint/30 bg-mint/10 text-mint hover:border-mint/70"
      : "border-violet/30 bg-violet/[0.12] text-violet hover:border-violet/70";

  return (
    <span
      className={`inline-block rounded border px-2.5 py-1 font-mono text-[12px] leading-none transition-all duration-200 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
