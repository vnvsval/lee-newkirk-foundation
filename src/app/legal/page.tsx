import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal & Policies",
  description:
    "Privacy, terms, donation policy, financial transparency, and nonprofit disclosures for The Lee Anne Newkirk Foundation.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: "This page will explain what information the foundation collects through this website (such as contact form submissions) and how it's used and protected. It's being drafted alongside the rest of the foundation's legal setup.",
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: "Terms governing use of this website will appear here once they've been reviewed.",
  },
  {
    id: "donation-policy",
    title: "Donation Policy",
    body: "Once online giving is active, this section will explain how donations are processed, how refunds are handled, and how gifts are directed. See the Donate page for the current, honest status of online giving.",
  },
  {
    id: "financial-transparency",
    title: "Financial Transparency",
    body: "As a new organization, The Lee Anne Newkirk Foundation doesn't yet have financial statements to publish. Once available, annual reports and financial summaries will be linked here.",
  },
  {
    id: "disclosures",
    title: "Nonprofit Disclosures",
    body: "The Lee Anne Newkirk Foundation's formal nonprofit status is still being established. This section will carry required disclosures — including state charitable-solicitation registration — once they apply.",
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal & Policies"
        description="These pages are being written carefully rather than quickly. Here's the honest status of each."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-ink">
                {section.title}
              </h2>
              <PlaceholderNotice label="In development" className="mt-4">
                <p>{section.body}</p>
              </PlaceholderNotice>
            </div>
          ))}

          <p className="text-sm text-ink-soft">
            Questions about any of these? Reach us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-semibold text-navy hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
