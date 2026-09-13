import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

/** Compact hero used on interior pages (About, Get Involved, Donate, etc.) */
export function PageHero({
  eyebrow,
  title,
  description,
  tone = "navy",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "navy" | "berry";
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        tone === "navy" ? "bg-navy text-paper" : "bg-berry text-paper"
      )}
    >
      <Container>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-paper/85">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
