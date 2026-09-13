# Content needed

This is the full list of real information the site is waiting on. Nothing
below has been guessed at or invented — every gap is filled with a clearly
labeled placeholder until it's replaced with the real thing (see the
`PlaceholderNotice` boxes on the live site, and the `PLACEHOLDER` comments
in `src/content/` and `src/lib/site-config.ts`).

Nothing here is blocking further development — the site is built and
keeps moving forward with placeholders in place. This list is for
whenever the foundation has the real information ready.

## Critical before launch

- **Foundation logo** — the site currently uses a text-only wordmark
  ("The Lee Newkirk Foundation"). A real logo file (SVG preferred) should
  replace this in the header and footer.
- **Favicon** — the site is currently using the default Next.js favicon.
  Needs a real one, ideally derived from the logo.
- **Lee Anne Newkirk's story** — the About page has a clearly marked
  placeholder where her biography/story belongs, in whatever words the
  family is comfortable sharing publicly.
- **Nonprofit status** — is The Lee Newkirk Foundation a registered
  501(c)(3)? If so, the EIN and confirmation, so the site can state
  tax-deductibility accurately. If not yet, that's fine — the site
  currently says status is "in progress" rather than claiming something
  untrue.
- **Contact email** — currently a placeholder
  (`hello@theleenewkirkfoundation.com`) in `src/lib/site-config.ts`. Needs
  to be a real, monitored inbox.
- **This year's Fill the Rooms dates** — collection start/end, sorting
  day, and distribution day. Currently "Date to be announced" in
  `src/content/fill-the-rooms.ts`.
- **At least one real drop-off location** — address and hours. Currently
  showing a "coming soon" placeholder.
- **Donation processor decision** — which nonprofit donation platform to
  use (e.g. Stripe, Givebutter, Donorbox, Every.org). Until decided, the
  Donate page shows a working preview that doesn't move money.

## Important

- **Photography** — real photos of past drives, volunteers, or the
  community (the site intentionally avoids stock photography, so real
  images matter more here than usual).
- **Fill the Rooms visual identity** — a dedicated logo/mark for the
  campaign (beyond the color accent already used) if the foundation wants
  one for flyers, collection boxes, shirts, and signage.
- **Social media accounts** — Facebook/Instagram links (`src/lib/site-config.ts`),
  or confirmation there are none yet.
- **Phone number** — optional; currently hidden until provided.
- **Mailing address** — optional; only needed if the foundation wants one
  listed publicly.
- **Business/community partners** — names (and logos, if available) of
  confirmed sponsors/partners, once they've agreed to be named publicly.
- **Family request process** — how a family in need actually requests
  help through Fill the Rooms. The FAQ currently says this is "being
  finalized."
- **Volunteer sign-up process** — right now, "volunteer" routes to the
  contact form. If a dedicated sign-up form or scheduling tool is wanted
  later, that's a small addition.

## Optional / future

- **Analytics** — a privacy-conscious analytics tool (e.g. Vercel
  Analytics, Plausible) can be added later; nothing is installed yet.
- **Additional foundation programs** — beyond Fill the Rooms, as the
  foundation takes on new initiatives.
- **Email newsletter** — if the foundation wants one, it can hook into
  the same "Updates" content already in place.
- **Custom 404/error illustration** — currently text-based and on-brand,
  but could be enhanced later.
