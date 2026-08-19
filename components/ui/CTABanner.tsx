import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/**
 * Gradient-bordered CTA banner used at the bottom of the About page and
 * above the case-study prev/next navigation. Subtle grid texture behind.
 */
interface CTABannerProps {
  headline: string;
  buttonLabel: string;
  href: string;
}

export default function CTABanner({ headline, buttonLabel, href }: CTABannerProps) {
  return (
    <Reveal>
      <div
        className="animate-gradient-pan relative overflow-hidden rounded-banner border border-violet/30 px-8 py-16 text-center md:p-16 xl:p-20 transition-shadow duration-300 hover:shadow-glow-violet"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(0,229,190,0.08) 50%, rgba(108,99,255,0.12) 100%)",
        }}
      >
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="animate-glow pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet/20 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] text-snow">
            {headline}
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={href}>{buttonLabel} →</Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
