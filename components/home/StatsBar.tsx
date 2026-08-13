import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

/**
 * Full-width proof bar — four gradient count-up metrics with dividers,
 * rendered on a soft violet → mint tinted background band.
 */

interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 30, suffix: "+", label: "Projects Launched" },
  { value: 9, label: "In-House Experts" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
  { value: 4.8, decimals: 1, suffix: "★", label: "Client Rating" },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Agency statistics"
      className="border-y border-line py-16"
      style={{
        background:
          "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,229,190,0.08) 100%)",
      }}
    >
      <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-10 px-5 md:px-8 xl:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-4 text-center ${
              i > 0 ? "xl:border-l xl:border-line" : ""
            } ${i % 2 === 1 ? "border-l border-line xl:border-l" : ""}`}
          >
            <Reveal delay={i * 80}>
              <dd className="font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-none tracking-tight">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="gradient-text"
                />
              </dd>
              <dt className="mt-3 text-sm text-mute">{stat.label}</dt>
            </Reveal>
          </div>
        ))}
      </dl>
    </section>
  );
}
