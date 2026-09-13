import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { fillTheRooms } from "@/content/fill-the-rooms";
import { involvementPaths } from "@/content/get-involved";
import { getSortedUpdates } from "@/content/updates";
import Link from "next/link";

export default function HomePage() {
  const steps = fillTheRooms.howItWorks;
  const featuredPaths = involvementPaths.slice(0, 3);
  const latestUpdates = getSortedUpdates().slice(0, 2);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-navy text-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-berry/20 blur-3xl"
        />
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
            The Lee Newkirk Foundation
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
            One person&rsquo;s care for her community.
            <br />A foundation to carry it forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/85">
            The Lee Newkirk Foundation exists in memory of Lee Anne Newkirk.
            Our first program, <strong className="text-paper">Fill the Rooms</strong>,
            is a Christmas toy drive that fills rooms with gifts for local
            children and families this holiday season.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/fill-the-rooms#drop-off" variant="berry">
              Donate Toys
            </Button>
            <Button href="/get-involved" variant="outline-light">
              Get Involved
            </Button>
            <Button href="/fill-the-rooms" variant="gold">
              Support Fill the Rooms
            </Button>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why we exist                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="paper">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              This started because one person cared deeply.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Lee Anne Newkirk spent her life showing up for the people
              around her. The Lee Newkirk Foundation was created in her
              memory to continue that spirit — starting with a Christmas
              toy drive, and growing into whatever our community needs next.
            </p>
            <p className="mt-3 text-sm text-ink-soft/80">
              Her full story is still being written into these pages. Visit
              the About page for what we can share so far.
            </p>
            <Button href="/about" variant="outline" className="mt-6">
              Read her story
            </Button>
          </div>
          <div className="rounded-2xl border border-line bg-paper-dim p-8">
            <p className="font-serif text-2xl leading-snug text-navy">
              &ldquo;{fillTheRooms.tagline}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-berry">
              Fill the Rooms — our flagship program
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Fill the Rooms campaign intro                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="holly">
        <Reveal>
          <Eyebrow className="text-gold-bright">Fill the Rooms</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {fillTheRooms.intro}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-paper/15 bg-paper/5 p-6">
                <span className="font-serif text-3xl text-gold-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-paper/80">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Button href="/fill-the-rooms" variant="gold">
            Explore Fill the Rooms
          </Button>
          <Button href="/donate" variant="outline-light">
            Give financially
          </Button>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Ways to help                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="dim">
        <Reveal>
          <Eyebrow>Get involved</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            There&rsquo;s a place for you in this.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {featuredPaths.map((path, index) => (
            <Reveal key={path.id} delay={index * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-lg font-semibold text-ink">{path.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">
                  {path.description}
                </p>
                <Link
                  href={path.cta.href}
                  className="mt-4 text-sm font-semibold text-navy hover:underline"
                >
                  {path.cta.label} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Button href="/get-involved" variant="ghost">
            See every way to help →
          </Button>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Updates preview                                                  */}
      {/* ---------------------------------------------------------------- */}
      {latestUpdates.length > 0 && (
        <Section tone="paper">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <Eyebrow>What&rsquo;s new</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Campaign updates
              </h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-navy hover:underline">
              All updates →
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {latestUpdates.map((update, index) => (
              <Reveal key={update.slug} delay={index * 80}>
                <Link
                  href={`/updates/${update.slug}`}
                  className="block h-full rounded-2xl border border-line p-6 hover:border-navy"
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
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {update.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{update.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Closing CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="navy">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Fill a room this Christmas.
            </h2>
            <p className="mt-3 max-w-lg text-paper/80">
              Every toy, every hour, and every dollar helps this community
              take care of its own.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/donate" variant="gold">
              Donate now
            </Button>
            <Button href="/get-involved" variant="outline-light">
              Get involved
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
