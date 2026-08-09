/**
 * Route-level loading UI — a lightweight branded skeleton shown while
 * async segments stream in.
 */
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 pt-[var(--nav-height)]">
      <div className="flex flex-col items-center gap-6" role="status" aria-live="polite">
        <span className="relative flex h-14 w-14">
          <span className="absolute inset-0 animate-ping rounded-full bg-violet/30" aria-hidden="true" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet/40 bg-card font-display text-xl font-extrabold text-violet">
            S
          </span>
        </span>
        <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-dim">
          Loading SmoothCuts…
        </p>
      </div>
    </main>
  );
}
