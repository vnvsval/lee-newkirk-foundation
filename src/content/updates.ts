/**
 * Campaign updates / foundation news.
 *
 * HOW TO ADD A NEW UPDATE:
 * 1. Copy one whole block below, from the opening { to the closing },
 * 2. Paste it right after the opening bracket `[` so it becomes the newest
 *    (top) entry.
 * 3. Change the `slug` (a short, url-safe id — letters, numbers, hyphens
 *    only, no spaces), `title`, `date`, `summary`, and `body`.
 * 4. `body` is a list of paragraphs — one line of text per paragraph.
 * 5. Commit the change on GitHub; the site rebuilds automatically.
 *
 * Keep newest updates at the top of the array.
 */

export type Update = {
  slug: string;
  title: string;
  /** ISO date string, e.g. "2026-09-01" — used for sorting and display. */
  date: string;
  summary: string;
  body: string[];
};

export const updates: Update[] = [
  {
    slug: "welcome-to-the-foundation",
    title: "The Lee Anne Newkirk Foundation is online",
    date: "2026-09-13",
    summary:
      "Our website is live, and we're building our inaugural Fill the Rooms campaign for hospitalized kids in the Pensacola area this Christmas.",
    body: [
      "Welcome to the new home for The Lee Anne Newkirk Foundation. This site is where you'll find out how Fill the Rooms works, who it serves, how to donate toys, how to volunteer, and how to support the foundation as it grows.",
      "We're a brand-new foundation building our very first Christmas campaign, so you'll see a few 'coming soon' notes scattered through the site as collection locations, dates, and hospital coordination are confirmed. We'd rather tell you the truth about what's still in progress than make up information to fill space.",
      "Check back here for updates as our first campaign takes shape, or follow along on our social channels once they're announced.",
    ],
  },
];

/** Updates sorted newest-first, regardless of the order they were entered. */
export function getSortedUpdates(): Update[] {
  return [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getUpdateBySlug(slug: string): Update | undefined {
  return updates.find((update) => update.slug === slug);
}
