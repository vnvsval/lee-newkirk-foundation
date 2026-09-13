# Project status

Last updated: 2026-09-13 (content, UX, and credibility pass).

## Infrastructure — operational

- **GitHub is the source of truth.** All work happens on
  `claude/lee-newkirk-foundation-site-jzgmxe`; pushes there are what
  Vercel deploys from.
- **Vercel deployment is operational.** The project builds and deploys
  successfully from this repository.
- **Domains connected:**
  - `theleeannenewkirkfoundation.com` — primary foundation site.
  - `www.theleeannenewkirkfoundation.com` — primary foundation site.
  - `filltherooms.org` — campaign domain.
  - `www.filltherooms.org` — campaign domain.
- **Domain-routing behavior** (`src/proxy.ts`): on `filltherooms.org` or
  `www.filltherooms.org`, only the homepage (`/`) is rewritten — server-
  side, not a redirect, so the address bar keeps showing the campaign
  domain — to serve the Fill the Rooms page. Every other path (`/about`,
  `/donate`, `/contact`, `/get-involved`, `/updates`, `/legal`, etc.)
  resolves identically across all four domains, because it's the same
  deployment, not a second site. Every page's metadata sets
  `alternates.canonical` to the primary domain, so the page served twice
  (Fill the Rooms, at both `filltherooms.org/` and
  `theleeannenewkirkfoundation.com/fill-the-rooms`) is never read by
  search engines as duplicate content.

## Completed this pass

- **Organization rename**: public name is now "The Lee Anne Newkirk
  Foundation," legal name "Lee Anne Newkirk Foundation, Inc." — both live
  in `src/lib/site-config.ts` as the single source of truth, referenced
  everywhere (nav, footer, metadata, JSON-LD) rather than hardcoded per
  page.
- **Lee's real origin story** now lives in `src/content/lee-story.ts` and
  is told once, in full, on the About page (`/about#lee-story`), with a
  short teaser + link from the homepage and the Fill the Rooms page —
  rather than three different retellings.
- **About page restructured** to clearly separate Lee's personal story
  from the foundation's organizational mission, with a tasteful,
  clearly-labeled "photo coming soon" placeholder (not a stock photo)
  reserved for a real photograph of Lee.
- **Fill the Rooms page rebuilt** around the requested narrative: why
  Christmas in a hospital is different, how the program began, who it
  serves (birth–18, hospitalized children), gift requirements (new,
  unused, unwrapped), an explicit age-inclusivity section that doesn't
  treat teenagers as an afterthought, how collection/volunteering/
  partnering will work, honest campaign status, FAQ, and campaign
  updates.
- **Hospital language is deliberately careful everywhere it appears**:
  the site states the foundation is *developing* its inaugural
  Pensacola-area campaign and *intends to coordinate with* local
  pediatric care professionals, including those at Studer Family
  Children's Hospital at Ascension Sacred Heart — and explicitly says no
  hospital has endorsed or partnered with the campaign yet. No hospital
  logos are used.
- **Homepage rebuilt** around a clearer hierarchy: who Lee was / why the
  foundation exists → what Fill the Rooms is and who it helps → how it
  will work → how to get involved → updates → closing CTA.
- **Get Involved, Donate, Contact, Updates** copy updated for the new org
  name and the honest current status of donations (no processor
  connected, no tax-deductibility or 501(c)(3) claims, no banking yet —
  visitors who want to give right now are invited to register interest,
  not told a gift will be "arranged directly").
- **New `/legal` page**: Privacy Policy, Terms of Use, Donation Policy,
  Financial Transparency, and Nonprofit Disclosures, each with an honest
  "in development" status rather than fabricated legal text. Linked from
  the footer alongside a legal-name disclosure line.
- **`CONTENT_NEEDED.md` reorganized** into Critical before public launch
  / Needed for 2026 campaign / Branding & media / Legal & compliance /
  Nice to have / Future.
- Verified: `npm run typecheck`, `npm run lint`, and `npm run build` all
  pass clean after every change in this pass.

## Current state

The site accurately represents a new, honest, in-formation nonprofit with
a real and meaningful reason to exist. No fabricated facts, statistics,
partners, testimonials, or hospital affiliation appear anywhere on the
live site. Every placeholder is visibly marked as such.

## Next priorities

1. Work through `CONTENT_NEEDED.md`, starting with "Critical before
   public launch" — logo, Lee's photo(s), family review of her story,
   hospital coordination, a real contact inbox, a donation processor
   decision, 501(c)(3) status, and banking.
2. Once hospital coordination is confirmed in writing, update
   `hospitalNote` and the related FAQ in
   `src/content/fill-the-rooms.ts` — and only then.
3. Once a donation processor is chosen, wire it up per the instructions
   in `src/lib/donation-config.ts`.
4. Once `RESEND_API_KEY` (or an alternative) is available, contact form
   submissions will start arriving by email instead of only being logged.
5. Florida charitable-solicitation review, alongside real legal review of
   the five `/legal` sections.

## Unresolved decisions

- **Donation processor**: not yet chosen.
- **Nonprofit status**: not yet established; the site intentionally
  avoids claiming 501(c)(3) status or tax-deductibility until it's real.
- **Hospital relationship**: in early, unconfirmed discussion. Nothing on
  the site implies partnership or endorsement.
- **Gift-target number** ("about five gifts per child," internally): kept
  out of public copy as an unconfirmed internal planning figure — see
  `CONTENT_NEEDED.md` "Needed for 2026 campaign."
- **Fill the Rooms sub-brand**: currently expressed only through color
  (cranberry/evergreen) and typography. Whether it eventually gets its
  own logo/mark for print materials is up to the foundation.
