import type { Metadata } from "next";
import FAQAccordion from "@/components/contact/FAQAccordion";
import ContactForm from "@/components/home/ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SOCIAL_ICONS,
} from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Project | Contact SmoothCuts",
  description:
    "Ready to build a website that works? Contact SmoothCuts and get a response within 1 business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Contact SmoothCuts",
    description:
      "Ready to build a website that works? Contact SmoothCuts and get a response within 1 business day.",
    url: "/contact",
  },
};

/** LocalBusiness structured data for local search visibility. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "Boutique web design and development agency building high-performance, conversion-focused websites for small businesses.",
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 4, Startup Hub, Malviya Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302017",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$$$",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Page header */}
      <header className="pb-16 pt-[calc(var(--nav-height)+88px)] md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Get in Touch" />
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-snow">
              Let&apos;s Build Something That Actually Works.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              Tell us about your project. We respond to every inquiry within 1
              business day.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Two-column layout — form + trust signals */}
      <section aria-label="Contact form and information" className="pb-[60px] md:pb-20 xl:pb-[120px]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 xl:grid-cols-5">
          {/* Left column (60%) — contact form */}
          <Reveal className="xl:col-span-3">
            <div className="rounded-banner border border-line bg-coal p-7 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          {/* Right column (40%) — trust signals */}
          <Reveal delay={120} className="xl:col-span-2">
            <aside className="rounded-card border border-line bg-card p-8 md:p-12 xl:p-10">
              <h2 className="font-mono text-[13px] uppercase tracking-[0.12em] text-violet">
                Contact Info
              </h2>

              <ul className="mt-7 space-y-6 text-[15px]">
                <li className="flex gap-4">
                  <MapPinIcon size={20} className="mt-0.5 shrink-0 text-dim" />
                  <div>
                    <p className="font-medium text-snow">Office</p>
                    <p className="mt-1 text-mute">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MailIcon size={20} className="mt-0.5 shrink-0 text-dim" />
                  <div>
                    <p className="font-medium text-snow">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 inline-block text-violet hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <PhoneIcon size={20} className="mt-0.5 shrink-0 text-dim" />
                  <div>
                    <p className="font-medium text-snow">Phone</p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1 inline-block text-mute transition-colors hover:text-violet"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ClockIcon size={20} className="mt-0.5 shrink-0 text-dim" />
                  <div>
                    <p className="font-medium text-snow">Response Time</p>
                    <p className="mt-1 text-mint">
                      We respond to all inquiries within 1 business day.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Office map embed */}
              <div className="mt-8 overflow-hidden rounded-lg border border-line">
                <iframe
                  title={`Map showing the SmoothCuts office — ${SITE.address}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[200px] w-full border-0 bg-base"
                />
              </div>

              {/* Social links */}
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-dim">
                  Follow Along
                </p>
                <ul className="mt-4 flex items-center gap-2" aria-label="Social profiles">
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
                          <Icon size={24} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-line bg-coal py-[60px] md:py-20 xl:py-[120px]"
      >
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2
              id="faq-heading"
              className="font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              Common Questions
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
