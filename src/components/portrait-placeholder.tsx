/**
 * Reserved space for a real photograph of Lee Anne Newkirk. Deliberately
 * NOT a stock photo — using one would mislead visitors into thinking
 * they're looking at Lee. Replace this component's usage with a real
 * <Image> once a photo is supplied (see CONTENT_NEEDED.md).
 */
export function PortraitPlaceholder() {
  return (
    <div
      className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-navy/25 bg-paper-dim p-8 text-center"
      role="img"
      aria-label="Photograph of Lee Anne Newkirk — not yet added"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-12 w-12 text-navy/40"
        aria-hidden="true"
      >
        <circle cx="12" cy="8.5" r="3.25" />
        <path d="M5 20c0-3.5 3.13-6 7-6s7 2.5 7 6" />
      </svg>
      <p className="text-xs font-semibold uppercase tracking-widest text-navy/50">
        Photo coming soon
      </p>
      <p className="max-w-[16rem] text-xs text-ink-soft/70">
        A photograph of Lee will go here once the family shares one.
      </p>
    </div>
  );
}
