# The Lee Newkirk Foundation — Website

The public website for The Lee Newkirk Foundation, created in memory of Lee
Anne Newkirk. Its flagship program is **Fill the Rooms**, an annual
Christmas toy drive. The site is built so the foundation can add new
programs later without a redesign.

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
- **Hosting:** built for Vercel, with `theleenewkirkfoundation.com` as the
  primary domain and `filltherooms.org` sharing the same deployment (see
  "Domains" below).

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
  components/          Shared UI (header, footer, buttons, cards, forms).
  content/             Editable content: Fill the Rooms details, updates,
                        get-involved paths. Edit these, not the pages.
  lib/                 Site-wide config, donation config, email sending.
  proxy.ts             Domain routing — see "Domains" below.
```

## Updating everyday content

You do **not** need to know how to code to update most of the site.
Everything that changes often lives in `src/content/`:

| What you want to change | Edit this file |
| --- | --- |
| Fill the Rooms dates, drop-off locations, FAQs, partners | `src/content/fill-the-rooms.ts` |
| Campaign updates / news posts | `src/content/updates.ts` |
| "Get Involved" cards | `src/content/get-involved.ts` |
| Org name, email, social links, nav | `src/lib/site-config.ts` |

Each file has comments at the top explaining exactly how to edit it. In
short: open the file on GitHub, click the pencil (✏️) icon, edit the text
between quotes, and click "Commit changes." Vercel rebuilds and publishes
the site automatically within a minute or two — no other steps needed.

Anything not yet supplied (biography, real dates, locations, logos, etc.)
is marked clearly as a placeholder rather than invented. See
[`CONTENT_NEEDED.md`](./CONTENT_NEEDED.md) for the full list of what's
still needed, organized by priority.

## Domains

The site is built to run as **one deployment** serving both domains:

- `theleenewkirkfoundation.com` — the main foundation site.
- `filltherooms.org` — same site; visiting the homepage shows the Fill
  the Rooms campaign page instead (via `src/proxy.ts`, a server-side
  rewrite). Every other page (`/about`, `/donate`, `/contact`, etc.)
  works identically on both domains.

To finish wiring this up: add both domains to the same Vercel project
(Project Settings → Domains) and point each domain's DNS at Vercel as
instructed there. See `PROJECT_STATUS.md` for what's outstanding.

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

No payment processor has been selected yet — see `src/lib/donation-config.ts`
for exactly how to turn on real giving once one is chosen (Stripe, Givebutter,
Donorbox, and Every.org are common nonprofit-friendly options). The Donate
page currently shows a fully-designed preview of the giving experience that
does not move money.

## Deployment

This repo is set up to deploy on [Vercel](https://vercel.com):

1. Import the GitHub repository into a new Vercel project (framework
   preset: Next.js — Vercel detects this automatically).
2. Add the environment variables above under Project Settings →
   Environment Variables.
3. Every push to the default branch deploys to production; every other
   branch/PR gets its own preview URL automatically.

## Documentation

- [`CONTENT_NEEDED.md`](./CONTENT_NEEDED.md) — everything still needed
  from the foundation before/after launch, organized by priority.
- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) — what's done, in progress,
  and undecided. Read this first if you're picking up the project fresh.
