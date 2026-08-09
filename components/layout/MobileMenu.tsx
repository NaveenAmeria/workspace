"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/site";

/**
 * Full-screen mobile navigation overlay with a glassmorphic background.
 * Links stack vertically with ≥48px tap targets; closes via the top-right
 * button, the Escape key, or route change (handled in Navbar).
 */
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Allow closing with the Escape key for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`glass fixed inset-0 z-[999] flex flex-col bg-base/95 transition-all duration-300 md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Close button — top right */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        className="absolute right-5 top-4 flex h-11 w-11 items-center justify-center rounded-lg border border-line text-snow transition-colors hover:border-violet hover:text-violet"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center px-8">
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              className={`transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="block min-h-12 py-3 font-display text-3xl font-bold tracking-tight text-snow transition-colors duration-150 hover:text-violet"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`mt-10 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="gradient-cta flex min-h-12 w-full items-center justify-center rounded-lg py-4 text-base font-medium text-white"
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </div>
  );
}
