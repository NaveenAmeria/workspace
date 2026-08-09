/**
 * Loading skeleton for case-study pages — mirrors the header layout so
 * the transition feels instant and layout-stable (helps CLS).
 */
export default function CaseStudyLoading() {
  return (
    <main className="mx-auto w-full max-w-[880px] px-5 pt-[calc(var(--nav-height)+64px)] md:px-8" role="status" aria-live="polite">
      <span className="sr-only">Loading case study…</span>
      <div className="h-4 w-40 animate-pulse rounded bg-card" />
      <div className="mt-6 h-16 w-3/4 animate-pulse rounded-lg bg-card" />
      <div className="mt-8 h-5 w-full animate-pulse rounded bg-card" />
      <div className="my-10 aspect-[16/10] max-h-[600px] w-full animate-pulse rounded-banner bg-card" />
      <div className="space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-card" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-card" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-card" />
      </div>
    </main>
  );
}
