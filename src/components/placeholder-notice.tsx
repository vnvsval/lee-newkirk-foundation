import { cn } from "@/lib/cn";

/**
 * A visibly-marked placeholder for content that hasn't been supplied yet.
 * Never style this to look like real, finished copy — the dashed border
 * and label exist specifically so placeholder text is never mistaken for
 * a factual claim about the foundation.
 */
export function PlaceholderNotice({
  children,
  label = "Content needed",
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-dashed border-berry/40 bg-berry/5 p-6",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-berry">
        {label}
      </p>
      <div className="mt-2 text-sm text-ink-soft">{children}</div>
    </div>
  );
}
