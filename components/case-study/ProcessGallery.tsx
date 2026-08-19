import Image from "next/image";
import type { ProcessArtifact } from "@/types/project";
import Reveal from "@/components/ui/Reveal";

/**
 * Case-study process documentation gallery — a 2-column grid of visual
 * artifacts (wireframes, prototypes, type explorations) with mono captions.
 * Artifacts flagged `wide` span the full row.
 */
export default function ProcessGallery({
  artifacts,
}: {
  artifacts: ProcessArtifact[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {artifacts.map((item, i) => (
        <Reveal
          key={item.src}
          delay={i * 80}
          className={item.wide ? "sm:col-span-2" : ""}
        >
          <figure className="group">
            <div className="shine-sweep overflow-hidden rounded-card border border-line transition-colors duration-300 group-hover:border-violet/50">
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1000}
                quality={85}
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[13px] text-dim transition-colors duration-300 group-hover:text-violet">
              {item.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
