/**
 * Foundation-wide site configuration.
 *
 * This is the one file to edit for organization-level facts that show up in
 * multiple places (navigation, footer, metadata, structured data). Program
 * or campaign-specific content (like Fill the Rooms) lives in
 * `src/content/fill-the-rooms.ts` instead.
 *
 * Anything marked "PLACEHOLDER" is a stand-in that must be replaced with
 * real information before launch. See CONTENT_NEEDED.md for the full list.
 */

export const siteConfig = {
  orgName: "The Lee Newkirk Foundation",
  orgShortName: "Lee Newkirk Foundation",

  /** Primary production domain for the foundation site. */
  primaryDomain: "theleenewkirkfoundation.com",
  /** Campaign domain that rewrites into the /fill-the-rooms section. */
  campaignDomain: "filltherooms.org",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://theleenewkirkfoundation.com",

  tagline: "Continuing Lee Anne Newkirk's spirit of caring for our community.",

  description:
    "The Lee Newkirk Foundation carries forward Lee Anne Newkirk's care for her community through Fill the Rooms, an annual Christmas toy drive, and future programs that help neighbors in need.",

  // PLACEHOLDER — replace with a real inbox once one is set up.
  contactEmail: "hello@theleenewkirkfoundation.com",
  // PLACEHOLDER — replace with a real phone number, or remove the phone
  // link from the contact page if the foundation prefers email-only.
  contactPhone: null as string | null,

  // PLACEHOLDER — mailing address for drop-off / correspondence, if the
  // foundation wants one listed publicly.
  mailingAddress: null as string | null,

  social: {
    // PLACEHOLDER — fill in once accounts exist, or leave null to hide the link.
    facebook: null as string | null,
    instagram: null as string | null,
  },

  /**
   * Nonprofit status. Leave as "pending" until confirmed — this copy is
   * used verbatim in the footer and donate page, so it must never overstate
   * what's actually been filed/approved.
   */
  nonprofitStatus: "pending" as "pending" | "501c3",
  // PLACEHOLDER — EIN, once available, for the donate/footer disclosure.
  ein: null as string | null,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fill the Rooms", href: "/fill-the-rooms" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Updates", href: "/updates" },
  { label: "Donate", href: "/donate" },
];

export const footerNav: NavItem[] = [
  ...primaryNav.filter((item) => item.href !== "/"),
  { label: "Contact", href: "/contact" },
];
