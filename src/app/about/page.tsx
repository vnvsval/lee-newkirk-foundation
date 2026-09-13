import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Lee Anne Newkirk and why The Lee Newkirk Foundation exists.",
};

const values = [
  {
    title: "Community-led",
    description:
      "Every program starts with a real need we see in our own community, not a template borrowed from somewhere else.",
  },
  {
    title: "Direct impact",
    description:
      "We aim to put donations — toys, time, and money — as directly as possible into the hands of families who need them.",
  },
  {
    title: "Honest, always",
    description:
      "We'd rather tell you a page is still being finished than fill it with information that isn't true yet.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the foundation"
        title="In memory of Lee Anne Newkirk"
        description="The Lee Newkirk Foundation exists to continue what one person started: showing up for this community."
      />

      <Section tone="paper">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Her story</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Who Lee Anne Newkirk was
            </h2>
            <p className="mt-4 text-ink-soft">
              This page is reserved for Lee Anne Newkirk&rsquo;s story — who
              she was, what she cared about, and why her family and
              community chose to build a foundation in her name. We want
              this told right, in her family&rsquo;s words, rather than
              guessed at.
            </p>
          </div>
          <PlaceholderNotice>
            <p>
              Biography, photos, and any details the family would like
              shared publicly go here. Until then, this section stays
              clearly marked rather than filled with invented details.
            </p>
          </PlaceholderNotice>
        </Reveal>
      </Section>

      <Section tone="dim">
        <Reveal>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Continuing Lee Anne&rsquo;s spirit of caring for our community.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            The Lee Newkirk Foundation was created to carry that spirit
            forward through direct, community-focused programs. Our first is{" "}
            <strong>Fill the Rooms</strong>, an annual Christmas toy drive.
            As the foundation grows, we intend to take on new programs that
            answer real needs in our community throughout the year.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Meet the first program: Fill the Rooms
            </h2>
            <p className="mt-3 max-w-lg text-paper/80">
              See how this year&rsquo;s Christmas toy drive works, and how
              to take part.
            </p>
          </div>
          <Button href="/fill-the-rooms" variant="gold">
            Explore Fill the Rooms
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
