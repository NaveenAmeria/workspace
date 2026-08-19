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
      "The speed at which we can now respond to leads has fundamentally changed our closing rate. The site looks exactly as premium as the properties we sell.",
    name: "Vikram Desai",
    title: "Managing Partner, Royal Milestone",
  },
  {
    quote:
      "Our front desk is finally calm, and we're seeing a steady stream of new patients from the neighborhood. The digital transformation has been incredible.",
    name: "Dr. Amit Sharma",
    title: "Lead Dentist, Sharma Dental",
  },
  {
    quote:
      "The tracking portal alone saved us hundreds of man-hours. Our corporate clients love the transparency and the self-serve invoice dashboard.",
    name: "Sanjay Patel",
    title: "Operations Head, Veloce Logistics",
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
              <figure className="group flex h-full flex-col rounded-card border border-line bg-card px-8 py-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
                {/* 5-star rating */}
                <div
                  className="flex gap-1 text-gold"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon
                      key={star}
                      size={18}
                      className="animate-star-pop"
                      style={{ animationDelay: `${star * 60}ms` }}
                    />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1 text-[16px] leading-relaxed text-snow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  {/* Avatar placeholder — initials on brand gradient */}
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(108,99,255,0.45)]"
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
