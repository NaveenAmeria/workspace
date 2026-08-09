import type { ReactNode } from "react";

/**
 * Inline text span with the brand display gradient
 * (electric violet → cyan-mint) applied via background-clip.
 */
export default function GradientText({ children }: { children: ReactNode }) {
  return <span className="gradient-text">{children}</span>;
}
