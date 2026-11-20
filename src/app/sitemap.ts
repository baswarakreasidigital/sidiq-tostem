import type { MetadataRoute } from "next";
import { PRODUCT_SERIES } from "@/data/products";

export const dynamic = "force-static";

const BASE_URL = "https://tostemlitech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = PRODUCT_SERIES.map((series) => ({
    url: `${BASE_URL}${series.landingHref}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${BASE_URL}/images/${series.image}`],
  }));

  return [
    {
      url: `${BASE_URL}/`,
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
      url: `${BASE_URL}/jendela-kedap-suara`,
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
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
