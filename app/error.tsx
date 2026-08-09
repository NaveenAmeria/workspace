"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

/**
 * Global error boundary — catches runtime errors in route segments and
 * offers a recovery path without exposing internals in production.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-5 pt-[var(--nav-height)]">
      <div className="max-w-md text-center">
        <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-coral">
          Something went wrong
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-snow">
          We dropped a frame.
        </h1>
        <p className="mt-4 leading-relaxed text-mute">
          An unexpected error interrupted the page. Your work isn&apos;t lost —
          try again, or head back to safety.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={reset}>Try Again</Button>
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
