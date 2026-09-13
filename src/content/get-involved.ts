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
      "Drop off a new, unused, unwrapped toy at a collection location once this year's campaign is confirmed.",
    cta: { label: "See collection locations", href: "/fill-the-rooms#drop-off" },
  },
  {
    id: "give-money",
    title: "Give financially",
    description:
      "Financial gifts help fill the gaps toy donations can't — especially for teenagers.",
    cta: { label: "Go to Donate", href: "/donate" },
  },
  {
    id: "volunteer",
    title: "Volunteer your time",
    description:
      "Help sort toys, staff a collection location, or support distribution day. No experience necessary.",
    cta: { label: "Sign up to volunteer", href: "/contact?topic=volunteer" },
  },
  {
    id: "host-location",
    title: "Host a collection location",
    description:
      "Businesses, schools, churches, and community groups can host a Fill the Rooms collection location.",
    cta: { label: "Host a location", href: "/contact?topic=host-location" },
  },
  {
    id: "partner",
    title: "Become a community partner",
    description:
      "Sponsor the campaign, match donations, or help this reach more of the community as a business partner.",
    cta: { label: "Become a partner", href: "/contact?topic=partner" },
  },
  {
    id: "spread-the-word",
    title: "Support the campaign",
    description:
      "Share Fill the Rooms with your neighbors, coworkers, or congregation. Help us build our first Christmas campaign.",
    cta: { label: "Get in touch", href: "/contact?topic=promote" },
  },
];
