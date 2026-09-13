# The Lee Anne Newkirk Foundation — Website

The public website for The Lee Anne Newkirk Foundation (legal name: Lee
Anne Newkirk Foundation, Inc.), created to carry forward Lee Anne
Newkirk's legacy of generosity. Its first program is **Fill the Rooms**,
a Christmas toy drive for children spending the holiday in the hospital.
The site is built so the foundation can add new programs later without a
redesign.

This README is written for both future developers and for whoever is
maintaining the content day-to-day — see **"Updating everyday content"**
below if that's you.

## What this is

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4
- **Content:** plain TypeScript data files under `src/content/` — no
  database or CMS. See "Updating everyday content" below.
- **Forms:** a real contact form (Server Action + optional email delivery
  via Resend) and a donation-page preview UI with no payment processor
  wired in yet (see `src/lib/donation-config.ts`).
- **Hosting:** built for Vercel, with `theleeannenewkirkfoundation.com` as
  the primary domain and `filltherooms.org` sharing the same deployment
  (see "Domains" below).

## Running it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

Other useful commands:

```bash
npm run build       # production build (also type-checks)
npm run start       # run the production build locally
npm run lint         # ESLint
npm run typecheck    # TypeScript, no build
```

## Project structure

```
src/
  app/                 Pages (App Router). One folder per route.
    contact/actions.ts Server Action that handles contact form submissions.
    legal/              "Legal & Policies" page — honest "in development"
                        status for privacy/terms/donation/financial pages.
  components/          Shared UI (header, footer, buttons, cards, forms).
  content/             Editable content: Fill the Rooms details, Lee's
                        story, updates, get-involved paths. Edit these,
                        not the pages.
  lib/                 Site-wide config, donation config, email sending.
  proxy.ts             Domain routing — see "Domains" below.
```

## Updating everyday content

You do **not** need to know how to code to update most of the site.
Everything that changes often lives in `src/content/`:

| What you want to change | Edit this file |
| --- | --- |
| Fill the Rooms dates, gift requirements, ages, hospital note, FAQs, partners | `src/content/fill-the-rooms.ts` |
| Lee's story (used on About + Fill the Rooms) | `src/content/lee-story.ts` |
| Campaign updates / news posts | `src/content/updates.ts` |
| "Get Involved" cards | `src/content/get-involved.ts` |
| Org name, legal name, email, social links, nav, legal page links | `src/lib/site-config.ts` |

Each file has comments at the top explaining exactly how to edit it. In
short: open the file on GitHub, click the pencil (✏️) icon, edit the text
between quotes, and click "Commit changes." Vercel rebuilds and publishes
the site automatically within a minute or two — no other steps needed.

**A note on hospital language:** `src/content/fill-the-rooms.ts` has a
`hospitalNote` field and an FAQ answer written very carefully. Do not
change them to say "official partner of," "benefiting," or "in
partnership with" any hospital until that relationship is explicitly
confirmed in writing — see the comment at the top of that file.

Anything not yet supplied (biography details, real dates, locations,
logos, hospital confirmation, etc.) is marked clearly as a placeholder
rather than invented. See [`CONTENT_NEEDED.md`](./CONTENT_NEEDED.md) for
the full list, organized by priority.

## Domains

The site is built to run as **one deployment** serving four domains:

- `theleeannenewkirkfoundation.com` and `www.theleeannenewkirkfoundation.com`
  — the primary foundation site.
- `filltherooms.org` and `www.filltherooms.org` — same deployment;
  visiting the homepage shows the Fill the Rooms campaign page instead
  (via `src/proxy.ts`, a server-side rewrite, not a redirect — the
  address bar keeps showing filltherooms.org). Every other page
  (`/about`, `/donate`, `/contact`, etc.) works identically on all four
  domains, and canonical URLs (`alternates.canonical` on every page)
  always point at the primary domain so search engines never see this as
  duplicate content.

All four domains are added to the same Vercel project (Project Settings →
Domains), each pointed at Vercel per its own DNS instructions.

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the
same variables in Vercel for production. Nothing is required for the site
to run — omitted variables just mean certain features (emailed contact
form submissions, live donations) stay in their "not yet configured"
state instead of failing.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata/sitemap. |
| `RESEND_API_KEY` | Enables emailing contact form submissions via [Resend](https://resend.com). Without it, submissions are logged server-side instead. |
| `CONTACT_FORM_TO_EMAIL` | Inbox that receives contact form emails. |
| `CONTACT_FORM_FROM_EMAIL` | Verified "from" address for outgoing mail. |
| `NEXT_PUBLIC_DONATION_CHECKOUT_URL` | Where "Give now" sends donors once a real donation processor is chosen (see `src/lib/donation-config.ts`). |

No API keys, secrets, or credentials are committed to this repository.

## Donations

No payment processor has been selected yet, the organization's nonprofit
status has not been established, and banking is not finalized — see
`src/lib/donation-config.ts` for exactly how to turn on real giving once
a processor is chosen (Stripe, Givebutter, Donorbox, and Every.org are
common nonprofit-friendly options). The Donate page currently shows a
fully-designed preview of the giving experience that does not move money,
and makes no tax-deductibility or 501(c)(3) claims.

## Deployment

This repo deploys on [Vercel](https://vercel.com):

1. Import the GitHub repository into a Vercel project (framework preset:
   Next.js — Vercel detects this automatically).
2. Add the environment variables above under Project Settings →
   Environment Variables.
3. Add all four domains listed above under Project Settings → Domains.
4. Every push to the default branch deploys to production; every other
   branch/PR gets its own preview URL automatically.

## Documentation

- [`CONTENT_NEEDED.md`](./CONTENT_NEEDED.md) — everything still needed
  from the foundation before/after launch, organized by priority.
- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) — what's done, in progress,
  and undecided. Read this first if you're picking up the project fresh.
