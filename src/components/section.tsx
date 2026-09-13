import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

const tones = {
  paper: "bg-paper text-ink",
  dim: "bg-paper-dim text-ink",
  navy: "bg-navy text-paper",
  berry: "bg-berry text-paper",
  holly: "bg-holly text-paper",
} as const;

export function Section({
  id,
  tone = "paper",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-widest text-berry",
        className
      )}
    >
      {children}
    </p>
  );
}
