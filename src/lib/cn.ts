/** Tiny classname combiner — avoids pulling in `clsx` for one use. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
