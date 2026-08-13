"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRightIcon } from "@/components/ui/Icons";

/**
 * Homepage hero — 100vh, centered two-column layout.
 * Left: eyebrow label with blinking caret, gradient-word H1, tagline, CTAs,
 * and a social-proof micro-bar. Right: floating browser mockup with a glow.
 * GSAP handles the entrance timeline (imported here only — not globally).
 */

/** Grayscale placeholder logo marks for the trust row. */
const CLIENT_MARKS = ["UrbanBites Cafe & Bakery", "Aarya Handicrafts", "Dr. Sharma Dental", "Veloce Logistics", "Zenith Academy", "Aura Spa & Salon"];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Entrance timeline — fade/slide in labels, headline, sub, CTAs in sequence.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-reveal]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
        },
      );
      gsap.fromTo(
        "[data-hero-visual]",
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.45 },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-height)]"
    >
      {/* Subtle animated background: drifting gradient mesh + grid texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="animate-mesh absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-violet/[0.14] blur-[140px]" />
        <div
          className="animate-mesh absolute -bottom-48 -right-32 h-[520px] w-[520px] rounded-full bg-mint/[0.08] blur-[150px]"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-10">
        {/* ------------------------------ Copy column ------------------------------ */}
        <div>
          <p
            data-hero-reveal
            className="font-mono text-[13px] uppercase tracking-[0.12em] text-violet"
          >
            Web Design &amp; Development Studio
            <span className="animate-caret ml-1.5 inline-block h-[14px] w-[7px] translate-y-[2px] bg-violet" aria-hidden="true" />
          </p>

          <h1
            id="hero-heading"
            data-hero-reveal
            className="mt-6 font-display text-[clamp(52px,7vw,96px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-snow"
          >
            We Build{" "}
            <span className="gradient-text">Websites</span> That Work As Hard As
            You Do.
          </h1>

          <p
            data-hero-reveal
            className="mt-6 max-w-[520px] text-lg leading-relaxed text-mute md:text-xl"
          >
            SmoothCuts crafts high-performance, conversion-focused websites that
            turn visitors into paying customers. Clean. Fast. Effective.
          </p>

          {/* CTA row — primary action + ghost secondary */}
          <div data-hero-reveal className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="gradient-cta inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white shadow-[0_4px_20px_rgba(108,99,255,0.25)] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-btn-hover"
            >
              Start a Project
              <ArrowRightIcon size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-transparent px-8 py-4 text-base text-snow transition-colors duration-200 hover:border-violet hover:text-violet"
            >
              View Our Work
            </Link>
          </div>

          {/* Social proof micro-bar */}
          <div data-hero-reveal className="mt-12 border-t border-line pt-6">
            <p className="text-sm text-dim">Trusted by 30+ growing businesses</p>
            <ul className="mt-4 flex flex-wrap items-center gap-3" aria-label="Client logos">
              {CLIENT_MARKS.map((mark) => (
                <li
                  key={mark}
                  className="rounded border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-dim"
                >
                  {mark}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------------------- Visual anchor ----------------------------- */}
        <div data-hero-visual className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="animate-float">
            {/* Glow underneath the frame */}
            <div
              className="animate-glow pointer-events-none absolute -inset-6 rounded-[32px] shadow-glow-mockup"
              aria-hidden="true"
            />
            {/* Browser chrome frame */}
            <div className="relative overflow-hidden rounded-xl border border-line shadow-glow-mockup">
              <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" aria-hidden="true" />
                <span className="ml-3 flex-1 truncate rounded-md bg-base px-3 py-1 font-mono text-[11px] text-dim">
                  smoothcuts.online
                </span>
              </div>
              <Image
                src="/images/hero/hero-screen.svg"
                alt="Screenshot of a premium SmoothCuts-designed website with a dark hero, product dashboard, and conversion-focused layout"
                width={1440}
                height={900}
                priority
                quality={85}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
