# Content needed

This is the full list of real information the site is waiting on. Nothing
below has been guessed at or invented — every gap is filled with a clearly
labeled placeholder until it's replaced with the real thing (see the
`PlaceholderNotice` boxes and portrait placeholder on the live site, and
the `PLACEHOLDER` comments in `src/content/` and `src/lib/site-config.ts`).

Nothing here is blocking further development — the site is built and
keeps moving forward with placeholders in place. This list is for
whenever the foundation has the real information ready. Nothing on this
list should be filled in with a guess, a stock photo, or invented
specifics — see each item's note for why.

## Critical before public launch

- **Final logo** — the site currently uses a text-only wordmark. A real
  logo file (SVG preferred) should replace it in the header, footer, and
  favicon.
- **Lee Anne Newkirk photographs** — the About page has a clearly marked
  "photo coming soon" placeholder (never a stock photo standing in for
  her) where a real photograph belongs.
- **Final biography review** — `src/content/lee-story.ts` reflects the
  origin story as provided so far. Before this is treated as final,
  public-facing copy, the family should review it for accuracy and
  comfort with what's shared.
- **Hospital approval / coordination** — Fill the Rooms currently
  describes itself as "developing" a relationship with Studer Family
  Children's Hospital at Ascension Sacred Heart, and explicitly states no
  hospital has endorsed or partnered with the campaign yet. This is the
  single most important thing to update once real coordination begins —
  see the warning comment at the top of `src/content/fill-the-rooms.ts`
  before changing that language.
- **Contact email** — currently a placeholder
  (`hello@theleeannenewkirkfoundation.com`) in `src/lib/site-config.ts`.
  Needs to be a real, monitored inbox.
- **Donation processor decision** — which nonprofit donation platform to
  use (e.g. Stripe, Givebutter, Donorbox, Every.org). Until decided, the
  Donate page shows a working preview that doesn't move money.
- **501(c)(3) status** — not yet established. The site currently states
  this honestly and makes no tax-deductibility claims. Do not change that
  language without a determination letter in hand.
- **Banking** — an organizational bank account is needed before any
  donation processor can actually deposit funds.

## Needed for 2026 campaign

- **Expected Christmas census** — an estimate of how many hospitalized
  children the inaugural campaign expects to serve, once available from
  hospital conversations. Used for gift-target planning, not yet
  published as a public number.
- **Hospital wish list / gift guidance** — once hospital coordination is
  further along, any specific item guidance they provide (allowed items,
  safety restrictions, etc.). The current "Every age counts" section on
  the Fill the Rooms page is explicitly general guidance, not an official
  wish list — don't present hospital-specific guidance as general
  guidance or vice versa.
- **Collection locations** — at least one confirmed address/hours.
  Currently a "coming soon" placeholder in
  `src/content/fill-the-rooms.ts`.
- **Campaign dates** — collection start/end, sorting day, and
  distribution day. Currently "Date to be announced."
- **Gift-target confirmation** — internal planning aims for a handful of
  meaningful gifts per child (a mix of one anchor gift, a couple of
  medium gifts, and a couple of smaller/comfort items), subject to
  hospital guidance. This is intentionally not published as a specific
  promised number on the site; only publish a number once it's confirmed
  and framed as a goal, not a guarantee.

## Branding / media

- **Fill the Rooms visual identity** — a dedicated logo/mark for the
  campaign (beyond the color accent already used) if the foundation wants
  one for flyers, collection boxes, shirts, and signage.
- **Photography** — real photos of collection drives, volunteers, or the
  community once they exist (the site intentionally avoids stock
  photography).
- **Social media accounts** — Facebook/Instagram links
  (`src/lib/site-config.ts`), or confirmation there are none yet.

## Legal / compliance

- **Florida charitable-solicitation requirements** — registration (or
  exemption) needed before actively soliciting donations from the public
  in Florida; a legal/compliance review should confirm what applies.
- **Privacy Policy, Terms of Use, Donation Policy, Financial
  Transparency, Nonprofit Disclosures** — all five have honest
  "in development" placeholders at `/legal`. None should be filled in
  with generic or fabricated legal text; each needs proper legal review
  for this jurisdiction.
- **Board / officer information approved for publication** — if the
  foundation wants to name board members or officers publicly, that list
  needs explicit sign-off from each person before it's published.
- **Public mailing address** — optional; only needed if the foundation
  wants one listed publicly (currently hidden).

## Nice to have

- **Phone number** — optional; currently hidden until provided.
- **Business/community partners** — names (and logos, if available) of
  confirmed sponsors/partners, once they've agreed to be named publicly.
  Never list a partner — or a hospital — before they've agreed to it in
  writing.
- **Analytics** — a privacy-conscious analytics tool (e.g. Vercel
  Analytics, Plausible) can be added later; nothing is installed yet.

## Future

- **Additional foundation programs** — beyond Fill the Rooms, once the
  foundation is ready to discuss them publicly. Do not add or hint at
  hypothetical future programs before that.
- **Email newsletter** — if the foundation wants one, it can hook into
  the same "Updates" content already in place.
- **Age-grouped gift guide UI** — the Fill the Rooms page's age-group
  section is written so it could grow into an interactive gift-picker
  later; not built yet, and shouldn't be until there's real (not
  invented) guidance to put in it.
