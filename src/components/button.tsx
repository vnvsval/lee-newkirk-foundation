import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-navy text-paper hover:bg-navy-deep",
  gold: "bg-gold text-ink hover:brightness-95",
  berry: "bg-berry text-paper hover:bg-berry-deep",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-paper",
  "outline-light": "border-2 border-paper text-paper hover:bg-paper hover:text-ink",
  ghost: "text-navy hover:bg-navy/10",
} as const;

type Variant = keyof typeof variants;

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    href?: undefined;
    children: React.ReactNode;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { ...buttonProps } = rest as Omit<ButtonAsButton, "href">;
  return <button className={classes} {...buttonProps} />;
}
