import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { StarIcon } from "@/components/ui/Icons";

/**
 * Homepage testimonials — three outcome-focused client quotes with
 * gold star ratings and gradient avatar initials. Content matches the
 * featured projects (Auravelle, Meridien Partners, Flowpilot).
 */

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SmoothCuts completely transformed how our business looks online. Within 60 days of launch, our inbound leads doubled. The team was professional, fast, and genuinely cared about our results.",
    name: "Amara Coyle",
    title: "CEO, Auravelle",
  },
  {
    quote:
      "We'd worked with two other agencies before SmoothCuts. The difference was night and day. They delivered exactly what they promised, on time, and our page speed went from 48 to 97 on Google.",
    name: "Daniel Reyes",
    title: "Founder, Meridien Partners",
  },
  {
    quote:
      "The SmoothCuts team made the whole process completely painless. They understood our business immediately and built a site that actually converts visitors. Best investment we've made in years.",
    name: "Priya Nair",
    title: "Marketing Director, Flowpilot",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-[60px] md:py-20 xl:py-[120px]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel text="What Clients Say" />
          <h2
            id="testimonials-heading"
            className="mt-4 max-w-3xl font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
          >
            Results Speak. Our Clients Speak Louder.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-card px-8 py-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
                {/* 5-star rating */}
                <div
                  className="flex gap-1 text-gold"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon key={star} size={18} />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1 text-[16px] leading-relaxed text-snow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  {/* Avatar placeholder — initials on brand gradient */}
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #6C63FF 0%, #00E5BE 100%)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-snow">{t.name}</span>
                    <span className="block text-sm text-mute">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
