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
 *
 * IMPORTANT — hospital language: `hospitalNote` and the FAQ answer about
 * hospital coordination are written carefully on purpose. Do not change
 * them to say "official partner of," "benefiting," or "in partnership
 * with" any hospital until that relationship is explicitly confirmed in
 * writing. Until then, "developing" / "intends to coordinate with" is the
 * accurate, honest framing.
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

export type AgeGroup = {
  label: string;
  note: string;
};

// PLACEHOLDER — real collection locations go here once confirmed. Remove
// this placeholder entry at that point.
const dropOffLocations: DropOffLocation[] = [
  {
    name: "Collection locations coming soon",
    address:
      "We're building our first Christmas campaign, and collection locations will be posted here as they're confirmed.",
    notes:
      "Interested in hosting a collection location at your business or organization? Visit Get Involved.",
  },
];

// PLACEHOLDER — real business/community partners go here once confirmed.
// Never list a partner that hasn't agreed to be named publicly, and never
// list a hospital here unless the relationship has been explicitly
// confirmed in writing.
const partners: Partner[] = [];

export const fillTheRooms = {
  campaignName: "Fill the Rooms",
  parentOrg: "The Lee Anne Newkirk Foundation",

  tagline: "Fill the rooms with toys, joy and hope.",

  ageRangeLabel: "Birth through age 18",

  intro:
    "Fill the Rooms is The Lee Anne Newkirk Foundation's first program: a Christmas toy drive for children and teens who have to spend the holiday in the hospital instead of at home.",

  // Why Christmas in a hospital is different, and what the program is
  // trying to accomplish. Kept honest about being a first-year program.
  about:
    "A hospital room doesn't feel like Christmas on its own. Fill the Rooms exists to change that — collecting new, unused, unwrapped toys and gifts so hospitalized children, from infants through teenagers, still get something to unwrap that was chosen with them in mind. This is our inaugural campaign, focused on building it well in the Pensacola, Florida area before we think about growing further.",

  // Careful, honest framing of where hospital coordination actually
  // stands — see the file header comment before editing this.
  hospitalNote:
    "The Lee Anne Newkirk Foundation is developing its inaugural Pensacola-area campaign and intends to coordinate with local pediatric care professionals, including those at Studer Family Children's Hospital at Ascension Sacred Heart, as those conversations continue. Fill the Rooms is not yet affiliated with, or endorsed by, any hospital — we'll update this page the moment that changes.",

  giftRequirements: ["New", "Unused", "Unwrapped"] as const,

  ageGroups: [
    {
      label: "Infants & toddlers",
      note: "Soft toys, board books, and sensory-friendly items.",
    },
    {
      label: "Young children",
      note: "Building sets, dolls, action figures, and creative play.",
    },
    {
      label: "Preteens",
      note: "Games, art supplies, and hobby kits.",
    },
    {
      label: "Teenagers",
      note: "Headphones, journals, gift cards, and things that don't feel babyish.",
    },
  ] satisfies AgeGroup[],

  howItWorks: [
    {
      title: "Toys are collected",
      description:
        "Community members and local businesses donate new, unused, unwrapped toys at collection locations as they're announced.",
    },
    {
      title: "Fill the Rooms sorts them",
      description:
        "Volunteers sort and organize donations by age group, so every gift matches a real child's stage of life — not just a general pile of toys.",
    },
    {
      title: "Gaps are filled",
      description:
        "Where donations run short in a given age group — teenagers especially — the foundation works to fill in the gaps so every child gets more than one gift to open.",
    },
    {
      title: "Hospital-approved distribution",
      description:
        "Gifts are delivered through a process coordinated with hospital staff, so they reach children safely and appropriately. We're building this process now, alongside our hospital conversations.",
    },
  ],

  // PLACEHOLDER — confirm and update every date below before launch.
  importantDates: [
    {
      label: "Toy collection opens",
      date: "Date to be announced",
      detail: "Collection locations open for donations.",
    },
    {
      label: "Toy collection closes",
      date: "Date to be announced",
      detail: "Final day to donate toys for this year's campaign.",
    },
    {
      label: "Sorting & inventory",
      date: "Date to be announced",
      detail: "Volunteers sort donated toys by age group.",
    },
    {
      label: "Distribution",
      date: "Date to be announced",
      detail: "Gifts reach children through a hospital-coordinated process.",
    },
  ] satisfies ImportantDate[],

  dropOffLocations,
  partners,

  faqs: [
    {
      question: "Who does Fill the Rooms help?",
      answer:
        "Children and teens, birth through age 18, who are spending Christmas in the hospital. Our inaugural campaign is focused on the Pensacola, Florida area.",
    },
    {
      question: "Is Fill the Rooms officially connected with a hospital?",
      answer:
        "Not yet. We're developing our inaugural Pensacola-area campaign and intend to coordinate with local pediatric care professionals, including those at Studer Family Children's Hospital at Ascension Sacred Heart, as those conversations continue. We'll share confirmed details here as soon as they're final.",
    },
    {
      question: "What kind of toys are needed?",
      answer:
        "New, unused, unwrapped toys and gifts for children and teens, birth through 18 — including things teenagers would actually want, not just toys for younger kids. We'll share more specific guidance as our first campaign takes shape.",
    },
    {
      question: "Can I drop off used toys?",
      answer:
        "No — we ask for new, unused, unwrapped items only, so every child receives something that feels like it was chosen just for them.",
    },
    {
      question: "How are children chosen to receive gifts?",
      answer:
        "Distribution will be coordinated with hospital staff, so gifts reach the children who need them. We're finalizing this process alongside our hospital conversations.",
    },
    {
      question: "Can I donate money instead of toys?",
      answer:
        "Financial gifts will help fill gaps in toy donations and cover program costs. Visit the Donate page for exactly where things stand — online giving isn't active yet.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Not yet. The Lee Anne Newkirk Foundation's nonprofit status has not been established, so we can't say donations are tax-deductible. We will not claim that until it's confirmed, and we'll update this page the moment it is.",
    },
    {
      question: "How can my business get involved?",
      answer:
        "Businesses can host a collection location or become a community partner. Visit Get Involved — we're building these relationships now, as our first campaign comes together.",
    },
  ] satisfies FaqItem[],

  monetaryUse:
    "Financial gifts to Fill the Rooms are intended to fill gaps in toy donations — especially for teenagers — and to help cover the costs of running the program well, so every child receives more than a single gift. Donation infrastructure isn't finalized yet; see the Donate page for where things currently stand.",
};
