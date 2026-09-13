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
    title: "The Lee Newkirk Foundation is online",
    date: "2026-09-13",
    summary:
      "Our website is live and Fill the Rooms planning for this year's toy drive is underway.",
    body: [
      "Welcome to the new home for The Lee Newkirk Foundation. This site will be the place to find out how Fill the Rooms works, where to drop off toys, how to volunteer, and how to support the foundation's growing work in our community.",
      "We're a brand-new foundation, so you'll see a few 'details coming soon' notes scattered through the site as dates, locations, and partners are confirmed. We'd rather tell you the truth about what's still in progress than make up information to fill space.",
      "Check back here for updates as the Fill the Rooms collection period approaches, or follow along on our social channels once they're announced.",
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
