import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { getSortedUpdates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Campaign updates, announcements, and news from The Lee Newkirk Foundation.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  const updates = getSortedUpdates();

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Updates"
        description="Announcements, campaign results, and foundation news, as they happen."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-2xl divide-y divide-line">
          {updates.map((update, index) => (
            <Reveal key={update.slug} delay={index * 60}>
              <Link
                href={`/updates/${update.slug}`}
                className="block py-6 first:pt-0 hover:opacity-80"
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
                <h2 className="mt-2 text-xl font-semibold text-ink">
                  {update.title}
                </h2>
                <p className="mt-2 text-ink-soft">{update.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
