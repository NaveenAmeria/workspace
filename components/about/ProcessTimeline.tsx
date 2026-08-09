import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/team";

/**
 * "How We Work" — five-step process displayed as a horizontal timeline
 * with connector lines on desktop, stacked vertically on mobile.
 * Steps animate in left-to-right with a sequential stagger.
 */
export default function ProcessTimeline() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-coal py-[60px] md:py-20 xl:py-[120px]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel text="Our Process" />
          <h2
            id="process-heading"
            className="mt-4 font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-snow"
          >
            How We Work
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
            A proven 5-step process every SmoothCuts project follows.
          </p>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-10 xl:flex-row xl:gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="relative flex-1 xl:px-5 xl:first:pl-0 xl:last:pr-0">
              <Reveal direction="left" delay={i * 120}>
                {/* Connector line (desktop) */}
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-5 top-7 hidden h-px w-10 bg-line xl:block"
                  />
                )}
                {/* Gradient step number */}
                <span className="gradient-text font-display text-5xl font-extrabold leading-none tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mute">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
