import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MetaHeader from "@/components/case-study/MetaHeader";
import MetricBlock from "@/components/case-study/MetricBlock";
import ProcessGallery from "@/components/case-study/ProcessGallery";
import CTABanner from "@/components/ui/CTABanner";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import TagPill from "@/components/ui/TagPill";
import {
  getAdjacentProjects,
  getAllSlugs,
  getProject,
} from "@/lib/projects";
import { SITE } from "@/lib/site";

/**
 * Case-study detail page — one statically generated page per project.
 * All eight sections from the long-form template render for every slug.
 */

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every case study at build time (SSG). */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const headline = `${project.client} Case Study | SmoothCuts`;
  const description = `See how SmoothCuts helped ${project.client} achieve ${project.results.metrics[0].label.toLowerCase()} gains with a custom web design and development project.`;

  return {
    title: headline,
    description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: headline,
      description,
      url: `/portfolio/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  /** BreadcrumbList structured data for this case study. */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Work",
        item: `${SITE.url}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.client,
        item: `${SITE.url}/portfolio/${project.slug}`,
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article>
        {/* 6.1 — Metadata header (breadcrumb, H1, meta row, hero image) */}
        <div className="mx-auto w-full max-w-[880px] px-5 md:px-8">
          <MetaHeader project={project} />
        </div>

        {/* 6.2 — Executive summary */}
        <section aria-labelledby="overview-heading" className="mx-auto w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Overview" />
            <h2 id="overview-heading" className="sr-only">
              Overview
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-mute">
              {project.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 6.3 — Problem framing */}
        <section aria-labelledby="challenge-heading" className="mx-auto mt-24 w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="The Challenge" />
            <h2
              id="challenge-heading"
              className="mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              What Wasn&apos;t Working
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-mute">
              {project.challenge.intro}
            </p>
            <ul className="bullet-list mt-6">
              {project.challenge.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 6.4 — Strategic solution */}
        <section aria-labelledby="approach-heading" className="mx-auto mt-24 w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Our Approach" />
            <h2
              id="approach-heading"
              className="mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              How We Solved It
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-mute">
              {project.approach.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 6.5 — Process documentation */}
        <section aria-labelledby="process-heading" className="mx-auto mt-24 w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="The Process" />
            <h2
              id="process-heading"
              className="mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              From Concept to Launch
            </h2>
          </Reveal>
          <div className="mt-10">
            <ProcessGallery artifacts={project.process} />
          </div>
        </section>

        {/* 6.6 — Technology stack */}
        <section aria-labelledby="stack-heading" className="mx-auto mt-24 w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Tech Stack" />
            <h2
              id="stack-heading"
              className="mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              Tools We Used
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Technologies used">
              {project.techStack.map((tool) => (
                <li key={tool}>
                  <TagPill variant="mint" className="px-3.5 py-2 text-[13px]">
                    {tool}
                  </TagPill>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[17px] leading-[1.7] text-mute">
              {project.techRationale}
            </p>
          </Reveal>
        </section>

        {/* 6.7 — Measurable outcomes (full-width band) */}
        <section
          aria-labelledby="results-heading"
          className="mt-24 border-y border-line bg-coal py-20"
        >
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionLabel text="The Results" />
              <h2
                id="results-heading"
                className="mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
              >
                What Changed After Launch
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {project.results.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 80}>
                  <MetricBlock metric={metric} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mx-auto mt-12 max-w-[720px] text-center text-[17px] leading-[1.7] text-mute">
                {project.results.narrative}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 6.8 — Client pull-quote testimonial */}
        <section aria-label="Client testimonial" className="py-20 md:py-24">
          <div className="mx-auto w-full max-w-[880px] px-5 md:px-8">
            <Reveal>
              <SectionLabel text="Client Words" />
              <figure className="mt-8">
                <blockquote className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -top-10 -left-2 select-none font-display text-[120px] font-extrabold leading-none text-violet/40"
                  >
                    &ldquo;
                  </span>
                  <p className="relative font-display text-[clamp(24px,3vw,36px)] font-medium leading-[1.35] tracking-[-0.01em] text-snow">
                    {project.testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-xl font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #6C63FF 0%, #00E5BE 100%)",
                    }}
                  >
                    {project.testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-snow">
                      {project.testimonial.name}
                    </span>
                    <span className="block text-mute">
                      {project.testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* 6.9 — CTA banner + prev/next navigation */}
        <div className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8">
          <CTABanner
            headline="Want results like these?"
            buttonLabel="Start Your Project"
            href="/contact"
          />

          <nav
            aria-label="More case studies"
            className="mt-14 flex items-center justify-between gap-4"
          >
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group inline-flex min-h-12 items-center gap-2.5 font-medium text-violet hover:underline"
            >
              <ArrowLeftIcon
                size={18}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              <span>
                <span className="sr-only">Previous Project: </span>
                <span className="block text-sm font-normal text-dim">Previous Project</span>
                {prev.client}
              </span>
            </Link>
            <Link
              href={`/portfolio/${next.slug}`}
              className="group inline-flex min-h-12 items-center gap-2.5 text-right font-medium text-violet hover:underline"
            >
              <span>
                <span className="sr-only">Next Project: </span>
                <span className="block text-sm font-normal text-dim">Next Project</span>
                {next.client}
              </span>
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
