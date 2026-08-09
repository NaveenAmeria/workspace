import type { Metadata } from "next";
import ProcessTimeline from "@/components/about/ProcessTimeline";
import TeamCard from "@/components/about/TeamCard";
import CTABanner from "@/components/ui/CTABanner";
import { BoltIcon, CalendarIcon, ChatIcon, TargetIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { DIFFERENTIATORS, TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "About SmoothCuts | Our Team & Process",
  description:
    "Meet the 8-person team behind SmoothCuts — designers, developers, and strategists obsessed with building websites that deliver real business results.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SmoothCuts | Our Team & Process",
    description:
      "Meet the 8-person team behind SmoothCuts — designers, developers, and strategists obsessed with building websites that deliver real business results.",
    url: "/about",
  },
};

const DIFFERENTIATOR_ICONS = {
  bolt: BoltIcon,
  calendar: CalendarIcon,
  target: TargetIcon,
  chat: ChatIcon,
} as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* 7.1 — Agency story */}
      <section aria-labelledby="story-heading" className="pb-[60px] pt-[calc(var(--nav-height)+88px)] md:pb-[100px]">
        <div className="mx-auto w-full max-w-[880px] px-5 md:px-8">
          <Reveal>
            <SectionLabel text="Our Story" />
            <h1
              id="story-heading"
              className="mt-4 font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-snow"
            >
              We&apos;re SmoothCuts.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-6 text-lg leading-[1.7] text-mute">
              <p>
                SmoothCuts was built on a simple belief — small businesses
                deserve websites that actually work for them. Not digital
                brochures. Not overpriced templates. Real, strategic websites
                that generate leads, build trust, and grow with the business.
              </p>
              <p>
                We&apos;re a team of eight specialists — designers, engineers,
                strategists, and perfectionists — who&apos;ve each dedicated
                their careers to one craft. No generalists. No outsourcing. No
                junior work shipped on your behalf. Every project gets our
                absolute best, because for us, a launched website isn&apos;t
                the finish line. Your results are.
              </p>
              <p>
                We work with a limited number of clients at any given time
                because we believe every business deserves our full attention.
                That&apos;s the SmoothCuts difference — boutique access with
                full agency capability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7.2 — Why a small team is an advantage */}
      <section aria-labelledby="advantage-heading" className="py-[60px] md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2
              id="advantage-heading"
              className="max-w-3xl font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              Eight People. Zero Compromises.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              Our size isn&apos;t a limitation. It&apos;s your competitive
              advantage.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = DIFFERENTIATOR_ICONS[item.icon];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="group h-full rounded-card border border-line bg-card p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-base text-mute transition-colors duration-300 group-hover:text-violet">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-snow">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-mute">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7.3 — Team grid */}
      <section aria-labelledby="team-heading" className="py-[60px] md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2
              id="team-heading"
              className="font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
            >
              Meet the Team
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              Eight specialists. One shared obsession with quality.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 80}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 — Process timeline */}
      <ProcessTimeline />

      {/* 7.5 — Bottom CTA banner */}
      <section className="py-[60px] md:py-20 xl:py-[120px]">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <CTABanner
            headline="Want a team this invested in your success?"
            buttonLabel="Start a Conversation"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}
