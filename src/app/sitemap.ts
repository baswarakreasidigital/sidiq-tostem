import type { MetadataRoute } from "next";
import { PRODUCT_SERIES } from "@/data/products";

export const dynamic = "force-static";

const BASE_URL = "https://tostemlitech.com";

function toCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = PRODUCT_SERIES.map((series) => ({
    url: toCanonicalUrl(series.landingHref),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${BASE_URL}/images/${series.image}`],
  }));

  return [
    {
      url: toCanonicalUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${BASE_URL}/images/KV_Grants-02.webp`,
        `${BASE_URL}/images/alam-sutera-1.webp`,
        `${BASE_URL}/images/alam-sutera-2.webp`,
        `${BASE_URL}/images/alam-sutera-3.webp`,
        `${BASE_URL}/images/alam-sutera-4.webp`,
        `${BASE_URL}/images/series-grants.webp`,
        `${BASE_URL}/images/series-atis.webp`,
        `${BASE_URL}/images/series-we70.webp`,
        `${BASE_URL}/images/series-view.webp`,
        `${BASE_URL}/images/series-in16.webp`,
        `${BASE_URL}/images/series-giesta.webp`,
      ],
    },
    {
      url: toCanonicalUrl("/produk"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${BASE_URL}/images/series-grants.webp`,
        `${BASE_URL}/images/series-atis.webp`,
        `${BASE_URL}/images/series-we70.webp`,
        `${BASE_URL}/images/series-view.webp`,
        `${BASE_URL}/images/series-in16.webp`,
        `${BASE_URL}/images/series-giesta.webp`,
        `${BASE_URL}/images/series-weplus.webp`,
        `${BASE_URL}/images/series-we40.webp`,
      ],
    },
    {
      url: toCanonicalUrl("/rencanakan-kunjungan"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${BASE_URL}/images/alam-sutera-4.webp`],
    },
    {
      url: toCanonicalUrl("/jendela-kedap-suara"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${BASE_URL}/images/series-atis.webp`,
        `${BASE_URL}/images/series-view.webp`,
        `${BASE_URL}/images/series-we70.webp`,
      ],
    },
    ...productEntries,
    {
      url: toCanonicalUrl("/privacy-policy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
