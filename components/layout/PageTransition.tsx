"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Wraps the routed page content and remounts it whenever the pathname
 * changes, replaying a soft fade-up entrance (`.page-enter`). This makes
 * client-side navigation feel less abrupt without touching scroll
 * restoration (Next handles that after commit).
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
