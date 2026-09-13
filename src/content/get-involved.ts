/**
 * "Get Involved" pathways. Each of these becomes a card/section on the
 * Get Involved page. Add or edit entries the same way as other content
 * files — see comments in fill-the-rooms.ts for the general pattern.
 */

export type InvolvementPath = {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export const involvementPaths: InvolvementPath[] = [
  {
    id: "donate-toys",
    title: "Donate toys",
    description:
      "Drop off a new, unwrapped toy at one of our collection locations during the Fill the Rooms drive.",
    cta: { label: "See drop-off locations", href: "/fill-the-rooms#drop-off" },
  },
  {
    id: "give-money",
    title: "Give financially",
    description:
      "Monetary gifts fill the gaps toy donations can't — especially for teens and specific needs.",
    cta: { label: "Go to Donate", href: "/donate" },
  },
  {
    id: "volunteer",
    title: "Volunteer your time",
    description:
      "Help sort toys, staff a drop-off site, or support distribution day. No experience necessary.",
    cta: { label: "Sign up to volunteer", href: "/contact?topic=volunteer" },
  },
  {
    id: "host-location",
    title: "Host a collection site",
    description:
      "Businesses, schools, churches, and community groups can host a Fill the Rooms collection box.",
    cta: { label: "Host a location", href: "/contact?topic=host-location" },
  },
  {
    id: "partner",
    title: "Become a partner",
    description:
      "Sponsor the campaign, match donations, or help us reach more of the community as a business partner.",
    cta: { label: "Become a partner", href: "/contact?topic=partner" },
  },
  {
    id: "spread-the-word",
    title: "Help spread the word",
    description:
      "Share the campaign with your neighbors, coworkers, or congregation. Awareness fills rooms too.",
    cta: { label: "Get in touch", href: "/contact?topic=promote" },
  },
];
