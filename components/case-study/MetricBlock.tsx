import CountUp from "@/components/ui/CountUp";
import type { CaseMetric } from "@/types/project";

/**
 * Single large-format results metric used in the case-study
 * "What Changed After Launch" band — gradient count-up number
 * above a supporting label.
 */
export default function MetricBlock({ metric }: { metric: CaseMetric }) {
  return (
    <div className="group rounded-card border border-line bg-card px-8 py-10 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet hover:shadow-glow-violet">
      <p className="font-display text-[clamp(44px,5vw,64px)] font-extrabold leading-none tracking-tight transition-transform duration-300 ease-out group-hover:scale-110">
        <CountUp
          value={metric.value}
          decimals={metric.decimals}
          prefix={metric.prefix}
          suffix={metric.suffix}
          className="gradient-text"
        />
      </p>
      <p className="mt-4 text-base text-mute">{metric.label}</p>
      {metric.sublabel && (
        <p className="mt-1 font-mono text-[13px] text-dim">{metric.sublabel}</p>
      )}
    </div>
  );
}
