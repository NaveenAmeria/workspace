import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

/** Custom 404 — keeps the brand voice and routes users to key pages. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 pt-[var(--nav-height)]">
      <div className="max-w-md text-center">
        <p className="gradient-text font-display text-[96px] font-extrabold leading-none tracking-tight">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-snow">
          This page missed the cut.
        </h1>
        <p className="mt-4 leading-relaxed text-mute">
          The page you&apos;re looking for was moved, renamed, or never existed.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/portfolio" variant="ghost">
            View Our Work
          </Button>
        </div>
      </div>
    </main>
  );
}
