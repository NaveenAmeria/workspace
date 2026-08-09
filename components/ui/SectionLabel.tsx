/**
 * Mono eyebrow label used above section headlines, e.g. "WHAT WE DO".
 * JetBrains Mono 13px, violet, wide letter-spacing, with a leading dash.
 */
interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[13px] uppercase tracking-[0.12em] text-violet ${className}`}
    >
      <span className="mr-3 inline-block h-px w-6 translate-y-[-3px] bg-violet" aria-hidden="true" />
      {text}
    </p>
  );
}
