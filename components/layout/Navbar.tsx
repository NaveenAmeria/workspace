"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const progressRef = useRef<HTMLDivElement>(null);

  // Switch to the glass state after 80px of scroll and update the
  // scroll-progress bar along the header's bottom edge.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Throttle the progress bar update to animation frames.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = progressRef.current;
        if (!el) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        el.style.transform = `scaleX(${progress})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
            SmoothCuts<span className="animate-dot text-violet">.</span>
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

        {/* Scroll progress bar along the header's bottom edge */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-[2px] overflow-hidden transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0"
            style={{
              background:
                "linear-gradient(90deg, rgb(var(--color-violet)), rgb(var(--color-mint)))",
            }}
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
