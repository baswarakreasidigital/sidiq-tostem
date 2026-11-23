import { GOOGLE_MAPS_STUDIO_URL } from "@/data/portfolio";
import { STUDIO_IDENTITY } from "@/data/studio-info";

export const SITE_URL = "https://tostemlitech.com";

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: STUDIO_IDENTITY.studioName,
    legalName: STUDIO_IDENTITY.companyName,
    description:
      "Authorized Dealer TOSTEM Indonesia (PT Litech Alglassindo) — Showroom dan konsultasi pintu serta jendela aluminium pre-engineered Jepang untuk area Jabodetabek.",
    url: `${SITE_URL}/`,
    telephone: STUDIO_IDENTITY.phoneDisplay,
    image: `${SITE_URL}/images/alam-sutera-4.webp`,
    hasMap: GOOGLE_MAPS_STUDIO_URL,
    areaServed: STUDIO_IDENTITY.coverage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko The Element Blok C15 No. 25BC, Alam Sutera",
      addressLocality: "Tangerang",
      postalCode: "15320",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    brand: {
      "@type": "Brand",
      name: "TOSTEM",
    },
  };
}

export function buildFaqJsonLd(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: readonly { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildProductJsonLd({
  name,
  description,
  image,
  path,
  category,
}: {
  name: string;
  description: string;
  image: string;
  path: string;
  category?: string;
}) {
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    url: toAbsoluteUrl(path),
    category: category || "Pintu & Jendela Aluminium",
    brand: {
      "@type": "Brand",
      name: "TOSTEM",
    },
    manufacturer: {
      "@type": "Organization",
      name: "LIXIL TOSTEM",
    },
  };
}
