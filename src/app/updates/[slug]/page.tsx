import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { getUpdateBySlug, updates } from "@/content/updates";

export function generateStaticParams() {
  return updates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);
  if (!update) return {};
  return {
    title: update.title,
    description: update.summary,
  };
}

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={new Date(update.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        title={update.title}
      />

      <Section tone="paper">
        <div className="mx-auto max-w-2xl space-y-5 text-lg text-ink-soft">
          {update.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Link href="/updates" className="text-sm font-semibold text-navy hover:underline">
            ← All updates
          </Link>
        </div>
      </Section>
    </>
  );
}
