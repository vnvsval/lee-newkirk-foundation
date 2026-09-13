import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { involvementPaths } from "@/content/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate toys, give financially, volunteer, host a collection site, or partner with The Lee Newkirk Foundation's Fill the Rooms campaign.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There's a place for you in this."
        description="Whatever you have to give — time, toys, a storefront, or a few dollars — there's a way to put it to use."
      />

      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {involvementPaths.map((path, index) => (
            <Reveal key={path.id} delay={index * 60}>
              <div
                id={path.id}
                className="flex h-full flex-col rounded-2xl border border-line bg-paper-dim p-6"
              >
                <h2 className="text-lg font-semibold text-ink">{path.title}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">
                  {path.description}
                </p>
                <Button
                  href={path.cta.href}
                  variant="outline"
                  className="mt-5 w-fit text-sm"
                >
                  {path.cta.label}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow className="text-gold-bright">Not sure where to start?</Eyebrow>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold sm:text-4xl">
              Tell us how you&rsquo;d like to help — we&rsquo;ll point you the
              right way.
            </h2>
          </div>
          <Button href="/contact" variant="gold">
            Contact us
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
