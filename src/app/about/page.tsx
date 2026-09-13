import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { Button } from "@/components/button";
import { leeStory } from "@/content/lee-story";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Lee Anne Newkirk and why The Lee Anne Newkirk Foundation exists.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Community-led",
    description:
      "Every program starts with a real need we can see, not a template borrowed from somewhere else.",
  },
  {
    title: "Direct",
    description:
      "We aim to put donations — toys, time, and money — as directly as possible into the hands of the children and families they're meant for.",
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
        description={`${siteConfig.orgName} exists to continue something she started — not to mark that she's gone.`}
      />

      {/* Lee's story — kept separate from the foundation's mission below. */}
      <Section id="lee-story" tone="paper">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <Eyebrow>Lee&rsquo;s story</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Why this foundation carries her name
            </h2>
            <div className="mt-5 space-y-4 text-lg text-ink-soft">
              {leeStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <PlaceholderNotice label="More to come" className="mt-6">
              <p>
                This is the story as it&rsquo;s been shared with us so far.
                If Lee&rsquo;s family wants to add more — in their own
                words — this section will grow to hold it.
              </p>
            </PlaceholderNotice>
          </div>
          <PortraitPlaceholder />
        </Reveal>
      </Section>

      {/* The foundation's organizational mission — distinct from Lee's story. */}
      <Section tone="dim">
        <Reveal>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Carrying forward Lee&rsquo;s legacy of generosity
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            {siteConfig.orgName} brings toys, joy, and hope to children and
            families facing difficult circumstances. Our first program,{" "}
            <strong>Fill the Rooms</strong>, serves children spending
            Christmas in the hospital. As the foundation grows, we intend to
            take on new programs — but we&rsquo;re focused on building this
            first one well before we talk about what comes next.
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
              See who it serves, how toy donations will work, and how to
              take part in our inaugural campaign.
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
