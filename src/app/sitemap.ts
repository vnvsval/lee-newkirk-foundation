import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { updates } from "@/content/updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteConfig.url}/fill-the-rooms`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/get-involved`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${siteConfig.url}/donate`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/updates`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const updateRoutes: MetadataRoute.Sitemap = updates.map((update) => ({
    url: `${siteConfig.url}/updates/${update.slug}`,
    lastModified: update.date,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...updateRoutes];
}
