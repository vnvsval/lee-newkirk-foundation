import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Lee Newkirk Foundation about volunteering, partnerships, donations, or Fill the Rooms.",
  // Canonical stays query-string-free even though ?topic= pre-fills the
  // form — those variants shouldn't be indexed as separate pages.
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions about Fill the Rooms, volunteering, partnerships, or anything else — send us a message."
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <ContactForm initialTopic={topic} />

          <div>
            <Eyebrow>Prefer email?</Eyebrow>
            <p className="mt-2 text-ink-soft">
              Reach us directly at{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-semibold text-navy hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
            {siteConfig.contactPhone && (
              <p className="mt-2 text-ink-soft">
                Or call {siteConfig.contactPhone}.
              </p>
            )}
            <p className="mt-6 text-sm text-ink-soft/80">
              We&rsquo;re a small, community-run foundation, so replies may
              take a few days — thank you for your patience.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
