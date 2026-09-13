import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { JsonLd } from "@/components/json-ld";
import { fillTheRooms } from "@/content/fill-the-rooms";
import { getSortedUpdates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Fill the Rooms",
  description: fillTheRooms.intro,
};

export default function FillTheRoomsPage() {
  const updates = getSortedUpdates().slice(0, 3);
  const hasRealLocations = fillTheRooms.dropOffLocations.some(
    (loc) => loc.name !== "Drop-off locations coming soon"
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

      {/* What it is */}
      <Section tone="paper">
        <Reveal className="max-w-3xl">
          <Eyebrow>What it is</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A community-powered Christmas toy drive
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{fillTheRooms.about}</p>
        </Reveal>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="dim">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            From donation to delivered gift
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

      {/* Donate toys / drop-off locations */}
      <Section id="drop-off" tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>Donate toys</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Drop off a new, unwrapped toy
          </h2>
          <p className="mt-4 text-ink-soft">
            Bring new, unwrapped toys and gifts to any of the locations
            below during the collection period. Can&rsquo;t make it to a
            drop-off site?{" "}
            <Link href="/contact" className="font-semibold text-navy hover:underline">
              Contact us
            </Link>{" "}
            to arrange a pickup.
          </p>
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
            <PlaceholderNotice label="Locations coming soon">
              <p>
                This year&rsquo;s drop-off locations are still being
                confirmed. Once businesses and organizations sign on as
                hosts, their addresses and hours will appear here.
              </p>
              <p className="mt-2">
                Want to host a collection box?{" "}
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

      {/* Volunteering */}
      <Section id="volunteer" tone="holly">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow className="text-gold-bright">Volunteer</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Give a few hours, change a Christmas morning
            </h2>
            <p className="mt-4 text-paper/85">
              Volunteers sort toys, staff drop-off locations, and help pack
              and distribute gifts to families. No experience is
              necessary — just a few hours and a willingness to help.
            </p>
          </div>
          <Button href="/contact?topic=volunteer" variant="gold" className="w-fit">
            Sign up to volunteer
          </Button>
        </Reveal>
      </Section>

      {/* Business & community partners */}
      <Section id="partners" tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>Community partners</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Businesses and organizations behind the drive
          </h2>
        </Reveal>

        <div className="mt-10">
          {hasPartners ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fillTheRooms.partners.map((partner) => (
                <li
                  key={partner.name}
                  className="rounded-2xl border border-line bg-paper-dim p-6"
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
      <Section id="give" tone="dim">
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

      {/* Important dates */}
      <Section id="dates" tone="paper">
        <Reveal>
          <Eyebrow>Important dates</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            This year&rsquo;s timeline
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {fillTheRooms.importantDates.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-line bg-paper-dim p-5"
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
      <Section id="faq" tone="dim">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            Common questions
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper">
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
      <Section id="updates" tone="paper">
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
              className="block rounded-2xl border border-line p-6 hover:border-navy"
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
            Ready to help fill a room this Christmas?
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
