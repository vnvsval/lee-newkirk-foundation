/**
 * Fill the Rooms campaign content.
 *
 * HOW TO EDIT THIS FILE (no coding experience needed):
 * 1. On GitHub, open this file and click the pencil icon ("Edit this file").
 * 2. Change the text between quotes. Leave the quotes, commas, and curly
 *    braces { } exactly where they are — those are just structure, not content.
 * 3. Scroll down and click "Commit changes." Vercel will publish the update
 *    automatically within a minute or two.
 *
 * Every list below (dates, locations, FAQs, partners, updates) can have
 * items added or removed by copying/deleting one whole { ... } block,
 * including its trailing comma.
 */

export type ImportantDate = {
  label: string;
  date: string; // e.g. "November 1, 2026" — kept as plain text so any format works.
  detail?: string;
};

export type DropOffLocation = {
  name: string;
  address: string;
  hours?: string;
  notes?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Partner = {
  name: string;
  description?: string;
  url?: string;
};

// PLACEHOLDER — real drop-off locations go here. Remove this placeholder
// entry once at least one real location is confirmed.
const dropOffLocations: DropOffLocation[] = [
  {
    name: "Drop-off locations coming soon",
    address: "We're finalizing this year's collection sites.",
    notes:
      "Want to host a box at your business or organization? Visit Get Involved to sign up.",
  },
];

// PLACEHOLDER — real business/community partners go here once confirmed.
// Never list a partner that hasn't agreed to be named publicly.
const partners: Partner[] = [];

export const fillTheRooms = {
  campaignName: "Fill the Rooms",
  parentOrg: "The Lee Newkirk Foundation",

  tagline: "A Christmas toy drive that fills rooms with hope.",

  intro:
    "Fill the Rooms is The Lee Newkirk Foundation's flagship Christmas program: a community-powered toy drive that fills rooms with gifts for local children and families who need a brighter holiday.",

  // PLACEHOLDER — a fuller paragraph describing the origin/purpose of the
  // program can replace or extend this once provided.
  about:
    "Every December, our community comes together to collect new, unwrapped toys and gifts so that no child in our area goes without something to open on Christmas morning. Fill the Rooms is organized in memory of Lee Anne Newkirk, whose care for this community inspired the foundation that bears her name.",

  howItWorks: [
    {
      title: "Toys are collected",
      description:
        "Community members, businesses, and volunteers donate new, unwrapped toys at drop-off locations around town throughout the collection period.",
    },
    {
      title: "Rooms are filled",
      description:
        "Volunteers sort and organize donations, filling designated rooms so families can select gifts that fit their children's ages and interests.",
    },
    {
      title: "Families are matched",
      description:
        "Local families in need are connected with the program ahead of the holidays. Details on how a family can request support are being finalized — see the FAQ below.",
    },
    {
      title: "Gifts go home",
      description:
        "Families pick up or receive gifts in time for Christmas, made possible entirely by donors, volunteers, and community partners.",
    },
  ],

  // PLACEHOLDER — confirm and update every date below before launch.
  importantDates: [
    {
      label: "Toy collection opens",
      date: "Date to be announced",
      detail: "Drop-off locations open for donations.",
    },
    {
      label: "Toy collection closes",
      date: "Date to be announced",
      detail: "Final day to donate toys for this year's drive.",
    },
    {
      label: "Room-filling & sorting",
      date: "Date to be announced",
      detail: "Volunteers sort and organize donated toys.",
    },
    {
      label: "Distribution to families",
      date: "Date to be announced",
      detail: "Gifts are delivered or picked up before Christmas.",
    },
  ] satisfies ImportantDate[],

  dropOffLocations,
  partners,

  faqs: [
    {
      question: "What kind of toys are needed?",
      answer:
        "New, unwrapped toys and gifts for children and teens of all ages. We'll post specific age-range and item needs here as this year's drive is finalized.",
    },
    {
      question: "Can I drop off used toys?",
      answer:
        "We ask for new, unwrapped items only, so every child receives a gift that's just for them.",
    },
    {
      question: "How can my family get help through Fill the Rooms?",
      answer:
        "We're finalizing the request process for this year. Please check back or contact us and we'll follow up as soon as it's ready.",
    },
    {
      question: "Can I donate money instead of toys?",
      answer:
        "Yes — monetary support helps cover gaps in specific age groups and program costs. See the Donate page for details on how giving will work this year.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "The Lee Newkirk Foundation's nonprofit status is in progress. We'll update this answer with specifics as soon as it's confirmed.",
    },
    {
      question: "How can my business get involved?",
      answer:
        "Businesses can host a collection box, sponsor the campaign, or promote the drive to customers. Visit Get Involved for details.",
    },
  ] satisfies FaqItem[],

  monetaryUse:
    "Monetary donations to Fill the Rooms go directly toward filling gaps in toy inventory (especially for older kids and teens), wrapping supplies, and the logistics of getting gifts to families. A detailed breakdown will be shared as the program grows.",
};
