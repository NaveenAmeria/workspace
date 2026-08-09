"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/lib/site";

/**
 * Global fixed navigation bar.
 * Transparent at the top of the page; transitions to a glassmorphic
 * bar (blur + border) after 80px of scroll. Collapses to a hamburger
 * that opens the full-screen MobileMenu below the md breakpoint.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Switch to the glass state after 80px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route changes and lock body scroll while open.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (href: string) =>
    href !== "/#services" && pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ease-out ${
          scrolled ? "glass-nav" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[var(--nav-height)] w-full max-w-7xl items-center justify-between px-5 md:px-8"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-snow transition-colors duration-150 hover:text-violet"
            aria-label="SmoothCuts — home"
          >
            SmoothCuts<span className="text-violet">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group relative py-2 text-[15px] transition-colors duration-150 ${
                    isActive(link.href)
                      ? "text-violet"
                      : "text-mute hover:text-snow"
                  }`}
                >
                  {link.label}
                  {/* Active / hover underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-violet transition-transform duration-200 ${
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="gradient-cta hidden rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-btn-hover md:inline-flex"
            >
              Start a Project
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-line text-snow md:hidden"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-5">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
