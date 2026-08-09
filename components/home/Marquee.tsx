/**
 * Infinite horizontal service ticker rendered directly below the hero.
 * Pure CSS animation on a duplicated track — no JS, never pauses.
 */
const ITEMS = [
  "Web Design",
  "UI/UX Design",
  "Next.js Development",
  "Webflow",
  "WordPress",
  "Brand Strategy",
  "Conversion Optimization",
  "SEO",
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ITEMS.map((item) => (
        <span
          key={`${item}-${ariaHidden ? "b" : "a"}`}
          className="flex items-center whitespace-nowrap font-display text-sm font-medium text-dim"
        >
          <span className="px-6">{item}</span>
          <span className="text-violet" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Services ticker"
      className="overflow-hidden border-y border-line bg-coal py-4"
    >
      <div className="animate-marquee flex w-max">
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}
