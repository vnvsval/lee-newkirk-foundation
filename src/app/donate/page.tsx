import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { DonateForm } from "@/components/donate-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support The Lee Newkirk Foundation and the Fill the Rooms Christmas toy drive.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give financially"
        title="Give with confidence"
        description="We're setting up online giving the right way — with a real nonprofit donation processor — rather than rushing it. Here's exactly where things stand."
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <DonateForm />
          </Reveal>

          <Reveal delay={80} className="space-y-6">
            <div>
              <Eyebrow>Where your gift goes</Eyebrow>
              <h2 className="mt-2 text-2xl font-semibold text-ink">
                Fill the Rooms, or the foundation&rsquo;s greatest need
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                You&rsquo;ll be able to direct your gift to this year&rsquo;s
                Fill the Rooms toy drive, or to the foundation&rsquo;s
                general fund to support future programs.
              </p>
            </div>

            <div>
              <Eyebrow>Nonprofit status</Eyebrow>
              <p className="mt-2 text-sm text-ink-soft">
                {siteConfig.nonprofitStatus === "501c3"
                  ? "The Lee Newkirk Foundation is a registered 501(c)(3) nonprofit organization."
                  : "The Lee Newkirk Foundation's formal nonprofit status is currently in progress. We'll update this page — including any tax-deductibility details — the moment it's confirmed."}
              </p>
            </div>

            <div>
              <Eyebrow>Want to give right now?</Eyebrow>
              <p className="mt-2 text-sm text-ink-soft">
                Online giving isn&rsquo;t connected yet, but we don&rsquo;t
                want that to stop a gift you&rsquo;re ready to make today.
                Contact us and we&rsquo;ll arrange it directly.
              </p>
              <Button href="/contact?topic=donate" variant="outline" className="mt-4">
                Contact us about giving now
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
