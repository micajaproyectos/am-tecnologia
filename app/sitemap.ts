import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog-data";

const BASE = "https://www.amtecnologia.cl";

const SERVICE_SLUGS = [
  "landing-page",
  "one-page-corporativo",
  "ecommerce",
  "automatizaciones-ia",
  "app-web-saas",
];

const CITY_SLUGS = [
  "puerto-montt",
  "temuco",
  "valdivia",
  "osorno",
  "concepcion",
  "santiago",
  "coyhaique",
  "punta-arenas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/aparecer-en-google`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${BASE}/posicionamiento-google-${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...cityPages, ...blogIndex, ...blogPosts];
}
