import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Services from "@/components/home/Services";
import StatsBar from "@/components/home/StatsBar";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "SmoothCuts | Web Design & Development for Growing Businesses",
  description:
    "SmoothCuts is a boutique web design agency building high-performance, conversion-focused websites for ambitious small businesses.",
  alternates: { canonical: "/" },
};

/** Organization structured data for rich search results. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.positioning,
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
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Services />
      <StatsBar />
      <Testimonials />

      {/* Inline consultation form */}
      <section
        aria-labelledby="brief-heading"
        className="py-[60px] md:py-20 xl:py-[120px]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-[720px] rounded-banner border border-line bg-coal p-7 md:p-12">
              <SectionLabel text="Start a Project" />
              <h2
                id="brief-heading"
                className="mt-4 font-display text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
              >
                Tell Us About Your Business.
              </h2>
              <p className="mb-9 mt-4 text-lg leading-relaxed text-mute">
                Fill out the brief below and we&apos;ll get back to you within 1
                business day with a clear plan.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
