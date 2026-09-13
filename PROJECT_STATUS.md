# Project status

Last updated: 2026-09-13 (first build pass).

## Completed

- Next.js 16 / TypeScript / Tailwind v4 project scaffolded and configured
  (Turbopack, ESLint flat config, strict TypeScript).
- Design system established: warm cream/charcoal/navy foundation palette
  with a cranberry + evergreen accent pair for Fill the Rooms; Fraunces
  (serif) + Inter (sans) type; consistent spacing/section/button
  components.
- Pages built: Home, About, Fill the Rooms (full campaign landing page:
  what it is, how it works, drop-off/donate toys, volunteering, partners,
  monetary giving, important dates, FAQ w/ FAQPage structured data,
  updates), Get Involved, Donate (working preview UI, no processor
  connected), Contact (working form with Server Action, honeypot +
  timing anti-spam, optional Resend email delivery), Updates
  (list + detail pages).
- `src/proxy.ts` makes `filltherooms.org` and
  `theleenewkirkfoundation.com` share one deployment — the campaign
  domain's homepage rewrites to the Fill the Rooms page; every other
  route is identical on both domains.
- Content architecture: `src/content/*.ts` holds everything that changes
  often (dates, locations, FAQs, partners, updates, get-involved cards),
  editable directly on GitHub without touching page code.
- SEO: per-page metadata, Open Graph, sitemap.ts, robots.ts, Organization
  + FAQPage JSON-LD.
- Accessibility: semantic landmarks, skip-to-content link, visible focus
  states, keyboard-operable mobile nav (Escape to close, focus-visible
  rings), labeled form fields with error association, honest
  `prefers-reduced-motion` handling (CSS-driven, not JS-gated).
- Verified: `npm run typecheck`, `npm run lint`, and `npm run build` all
  pass clean. Manually tested in a running production build with
  Playwright: every route returns the right status code, the domain
  rewrite serves different content per host, the contact form actually
  submits (validates, rejects bot-fast submissions, logs/emails on
  success), the mobile nav opens/closes and traps no focus incorrectly,
  and no horizontal overflow or console errors at 390px or 1440px.
- `CONTENT_NEEDED.md` tracks every piece of real-world information the
  site is still waiting on, so placeholders never get mistaken for facts.

## Current state

The site is a complete, coherent first build — every page in the brief
exists and works, with real (not fabricated) copy everywhere information
was actually provided, and clearly-labeled placeholders everywhere it
wasn't. It has not yet been deployed to Vercel or connected to real
domains (see "Next priorities").

## Next priorities

1. **Deploy to Vercel and connect it to GitHub** so pushes to the default
   branch auto-deploy. (Needs the account owner to authorize/import the
   repo in Vercel — see the chat summary for exact steps.)
2. **Add both domains** (`theleenewkirkfoundation.com`,
   `filltherooms.org`) to the Vercel project once deployed.
3. Work through `CONTENT_NEEDED.md`, starting with the "Critical before
   launch" section (logo, favicon, Lee Anne's story, nonprofit status,
   this year's dates/locations, a donation processor decision).
4. Once a donation processor is chosen, wire it up per the instructions
   in `src/lib/donation-config.ts`.
5. Once `RESEND_API_KEY` (or an alternative) is available, contact form
   submissions will start arriving by email instead of only being logged.

## Unresolved decisions

- **Donation processor**: not yet chosen. This is a decision for the
  foundation (fees, ease of setup, and reporting differ across
  providers) — see the Donate page for the current no-processor-yet
  state.
- **Nonprofit status**: pending confirmation; the site intentionally
  avoids claiming 501(c)(3) status until it's real.
- **Fill the Rooms sub-brand**: currently expressed only through color
  (cranberry/evergreen) and typography. Whether it eventually gets its
  own logo/mark for print materials is up to the foundation.
