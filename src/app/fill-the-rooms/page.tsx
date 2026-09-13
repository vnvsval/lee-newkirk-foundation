import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { JsonLd } from "@/components/json-ld";
import { fillTheRooms } from "@/content/fill-the-rooms";
import { leeStory } from "@/content/lee-story";
import { getSortedUpdates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Fill the Rooms",
  description: fillTheRooms.intro,
  // This page is also what filltherooms.org's homepage rewrites to (see
  // src/proxy.ts). Pinning the canonical URL to the primary domain tells
  // search engines there's one authoritative page, not duplicate content
  // living at two URLs.
  alternates: { canonical: "/fill-the-rooms" },
};

export default function FillTheRoomsPage() {
  const updates = getSortedUpdates().slice(0, 3);
  const hasRealLocations = fillTheRooms.dropOffLocations.some(
    (loc) => loc.name !== "Collection locations coming soon"
  );
  const hasPartners = fillTheRooms.partners.length > 0;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: fillTheRooms.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />

      <PageHero
        eyebrow={fillTheRooms.parentOrg}
        title={fillTheRooms.campaignName}
        description={fillTheRooms.tagline}
        tone="berry"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#drop-off" variant="gold">
            Donate toys
          </Button>
          <Button href="#give" variant="outline-light">
            Give financially
          </Button>
          <Button href="#volunteer" variant="outline-light">
            Volunteer
          </Button>
        </div>
      </PageHero>

      {/* Why Christmas in a hospital is different */}
      <Section tone="paper">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why this matters</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A hospital room doesn&rsquo;t feel like Christmas on its own
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{fillTheRooms.about}</p>
        </Reveal>
      </Section>

      {/* How Fill the Rooms began */}
      <Section id="origin" tone="dim">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>How it began</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              This started with one family&rsquo;s Christmas
            </h2>
            <p className="mt-4 text-ink-soft">{leeStory.shortSummary}</p>
            <Link
              href="/about#lee-story"
              className="mt-4 inline-block text-sm font-semibold text-navy hover:underline"
            >
              Read Lee&rsquo;s full story →
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="font-serif text-2xl leading-snug text-navy">
              &ldquo;{fillTheRooms.tagline}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-berry">
              {fillTheRooms.parentOrg}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Who it serves / hospital coordination status */}
      <Section tone="paper">
        <Reveal className="max-w-3xl">
          <Eyebrow>Who it serves</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {fillTheRooms.ageRangeLabel}, spending Christmas in the hospital
          </h2>
          <p className="mt-4 text-ink-soft">{fillTheRooms.hospitalNote}</p>
        </Reveal>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="dim">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            From donation to a child&rsquo;s bedside
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fillTheRooms.howItWorks.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <span className="font-serif text-3xl text-berry">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Donate toys / gift requirements / collection locations */}
      <Section id="drop-off" tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>Donate toys</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Every gift must be new, unused, and unwrapped
          </h2>
          <p className="mt-4 text-ink-soft">
            That way every child gets to unwrap something that was chosen
            for them.{" "}
            <Link href="/contact" className="font-semibold text-navy hover:underline">
              Contact us
            </Link>{" "}
            if you&rsquo;d like to donate before collection locations are
            announced.
          </p>
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap gap-3" delay={80}>
          {fillTheRooms.giftRequirements.map((req) => (
            <span
              key={req}
              className="rounded-full border border-berry/30 bg-berry/5 px-4 py-2 text-sm font-semibold text-berry"
            >
              {req}
            </span>
          ))}
        </Reveal>

        <div className="mt-10">
          {hasRealLocations ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fillTheRooms.dropOffLocations.map((location) => (
                <div
                  key={location.name}
                  className="rounded-2xl border border-line bg-paper-dim p-6"
                >
                  <h3 className="font-semibold text-ink">{location.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{location.address}</p>
                  {location.hours && (
                    <p className="mt-1 text-sm text-ink-soft">{location.hours}</p>
                  )}
                  {location.notes && (
                    <p className="mt-2 text-xs text-ink-soft/80">{location.notes}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <PlaceholderNotice label="Collection locations coming soon">
              <p>
                We&rsquo;re building our first Christmas campaign, and
                collection locations will be posted here as they&rsquo;re
                confirmed.
              </p>
              <p className="mt-2">
                Interested in hosting a collection location?{" "}
                <Link
                  href="/contact?topic=host-location"
                  className="font-semibold text-berry hover:underline"
                >
                  Let us know
                </Link>
                .
              </p>
            </PlaceholderNotice>
          )}
        </div>
      </Section>

      {/* Age inclusivity */}
      <Section id="ages" tone="holly">
        <Reveal>
          <Eyebrow className="text-gold-bright">Every age counts</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {fillTheRooms.ageRangeLabel} — teenagers included
          </h2>
          <p className="mt-4 max-w-2xl text-paper/85">
            It&rsquo;s easy for toy drives to default to gifts for young
            kids. Fill the Rooms is built for every age in the hospital,
            teenagers included — these are general ideas to help you shop,
            not an official hospital wish list.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fillTheRooms.ageGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 80}>
              <div className="h-full rounded-2xl border border-paper/15 bg-paper/5 p-6">
                <h3 className="text-lg font-semibold">{group.label}</h3>
                <p className="mt-2 text-sm text-paper/80">{group.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Volunteering */}
      <Section id="volunteer" tone="paper">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Volunteer</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Give a few hours, change a Christmas morning
            </h2>
            <p className="mt-4 text-ink-soft">
              Volunteers will sort toys, staff collection locations, and
              help with distribution day. No experience is necessary — just
              a few hours and a willingness to help.
            </p>
          </div>
          <Button href="/contact?topic=volunteer" variant="berry" className="w-fit">
            Sign up to volunteer
          </Button>
        </Reveal>
      </Section>

      {/* Business & community partners */}
      <Section id="partners" tone="dim">
        <Reveal className="max-w-2xl">
          <Eyebrow>Businesses & community partners</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Help us build our first Christmas campaign
          </h2>
        </Reveal>

        <div className="mt-10">
          {hasPartners ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fillTheRooms.partners.map((partner) => (
                <li
                  key={partner.name}
                  className="rounded-2xl border border-line bg-paper p-6"
                >
                  <p className="font-semibold text-ink">{partner.name}</p>
                  {partner.description && (
                    <p className="mt-1 text-sm text-ink-soft">
                      {partner.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <PlaceholderNotice label="Partners coming soon">
              <p>
                This year&rsquo;s business and community partners will be
                listed here as they join the campaign. We only name
                partners who&rsquo;ve agreed to be featured publicly.
              </p>
              <p className="mt-2">
                Want your business listed here?{" "}
                <Link
                  href="/contact?topic=partner"
                  className="font-semibold text-navy hover:underline"
                >
                  Become a partner
                </Link>
                .
              </p>
            </PlaceholderNotice>
          )}
        </div>
      </Section>

      {/* Monetary support */}
      <Section id="give" tone="paper">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Give financially</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Money fills the gaps toys can&rsquo;t
            </h2>
            <p className="mt-4 text-ink-soft">{fillTheRooms.monetaryUse}</p>
          </div>
          <Button href="/donate" variant="berry" className="w-fit">
            Go to the Donate page
          </Button>
        </Reveal>
      </Section>

      {/* Campaign status */}
      <Section id="dates" tone="dim">
        <Reveal>
          <Eyebrow>Campaign status</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            Where this year&rsquo;s campaign stands
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {fillTheRooms.importantDates.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5"
            >
              <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-berry" />
              <div>
                <p className="font-semibold text-ink">{item.label}</p>
                <p className="text-sm text-berry">{item.date}</p>
                {item.detail && (
                  <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="paper">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            Common questions
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper-dim">
          {fillTheRooms.faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="flex-none text-xl text-navy transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Campaign updates */}
      <Section id="updates" tone="dim">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <Eyebrow>Campaign updates</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Latest news
            </h2>
          </div>
          <Link href="/updates" className="text-sm font-semibold text-navy hover:underline">
            All updates →
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {updates.map((update) => (
            <Link
              key={update.slug}
              href={`/updates/${update.slug}`}
              className="block rounded-2xl border border-line bg-paper p-6 hover:border-navy"
            >
              <time
                dateTime={update.date}
                className="text-xs font-semibold uppercase tracking-wide text-berry"
              >
                {new Date(update.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <h3 className="mt-2 font-semibold text-ink">{update.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{update.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-lg text-3xl font-semibold sm:text-4xl">
            Help us build our first Christmas campaign
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/get-involved" variant="gold">
              Get involved
            </Button>
            <Button href="/donate" variant="outline-light">
              Donate
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
