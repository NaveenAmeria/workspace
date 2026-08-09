import Link from "next/link";
import { SOCIAL_ICONS } from "@/components/ui/Icons";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

/**
 * Global footer — brand, navigation, services, and contact columns,
 * followed by the legal bottom row.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-line bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-extrabold tracking-tight text-snow transition-colors hover:text-violet"
            >
              SmoothCuts<span className="text-violet">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-mute">
              {SITE.tagline}
            </p>
            <ul className="mt-6 flex items-center gap-3" aria-label="Social profiles">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`SmoothCuts on ${social.label}`}
                      className="flex h-11 w-11 items-center justify-center text-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-violet"
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2 — Navigation */}
          <nav aria-label="Footer pages">
            <h2 className="font-mono text-[13px] uppercase tracking-[0.12em] text-dim">
              Pages
            </h2>
            <ul className="mt-5 space-y-3">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/portfolio">Work</FooterLink></li>
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </nav>

          {/* Column 3 — Services */}
          <nav aria-label="Footer services">
            <h2 className="font-mono text-[13px] uppercase tracking-[0.12em] text-dim">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              <li><FooterLink href="/#services">Web Design</FooterLink></li>
              <li><FooterLink href="/#services">Development</FooterLink></li>
              <li><FooterLink href="/#services">SEO &amp; Performance</FooterLink></li>
              <li><FooterLink href="/#services">Maintenance</FooterLink></li>
            </ul>
          </nav>

          {/* Column 4 — Contact */}
          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.12em] text-dim">
              Get in Touch
            </h2>
            <address className="mt-5 space-y-3 text-[15px] not-italic text-mute">
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-violet"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-violet"
                >
                  {SITE.phone}
                </a>
              </p>
              <p className="max-w-[240px]">{SITE.address}</p>
            </address>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[13px] text-dim md:flex-row md:items-center md:justify-between">
          <p>© {year} SmoothCuts. All rights reserved.</p>
          <p>Built by SmoothCuts. Obviously.</p>
        </div>
      </div>
    </footer>
  );
}

/** Shared styling for footer text links. */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[15px] text-mute transition-colors duration-150 hover:text-violet"
    >
      {children}
    </Link>
  );
}
