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
    "Support The Lee Anne Newkirk Foundation and the Fill the Rooms Christmas toy drive.",
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
                  ? "The Lee Anne Newkirk Foundation is a registered 501(c)(3) nonprofit organization."
                  : "The Lee Anne Newkirk Foundation's formal nonprofit status is currently in progress. We'll update this page — including any tax-deductibility details — the moment it's confirmed."}
              </p>
            </div>

            <div>
              <Eyebrow>Want to give right now?</Eyebrow>
              <p className="mt-2 text-sm text-ink-soft">
                We&rsquo;re a brand-new organization and are still setting
                up our donation infrastructure and banking, so we&rsquo;re
                not able to accept financial gifts directly yet. Let us
                know you&rsquo;re interested, and we&rsquo;ll follow up the
                moment giving is ready.
              </p>
              <Button href="/contact?topic=donate" variant="outline" className="mt-4">
                Let us know you&rsquo;re interested
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
