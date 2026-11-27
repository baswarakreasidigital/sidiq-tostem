import type { Metadata } from "next";
import GrantsLandingContent from "@/components/GrantsLandingContent";

export const metadata: Metadata = {
  title: "TOSTEM GRANTS Series | Pintu & Jendela Panorama",
  description:
    "Eksplorasi 21 tipe TOSTEM GRANTS & GRANTS PLUS: Flat Rail 4,5 m, Corner Sliding tanpa tiang, performa hingga 2.000 Pa. Authorized Dealer Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/grants",
  },
  openGraph: {
    title: "TOSTEM GRANTS Series | Pintu & Jendela Panorama",
    description:
      "21 tipe jendela & pintu aluminium flagship TOSTEM GRANTS. Authorized Dealer TOSTEM Indonesia — PT Litech Alglassindo Jaya.",
    url: "https://tostemlitech.com/produk/grants",
    images: [{ url: "/images/series-grants.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM GRANTS Series | Pintu & Jendela Panorama",
    description:
      "21 tipe jendela & pintu aluminium flagship TOSTEM GRANTS di Studio Alam Sutera.",
    images: [{ url: "/images/series-grants.webp", width: 1200, height: 800 }],
  },
};

export default function GrantsSlidingDoorAliasPage() {
  return <GrantsLandingContent currentPath="/produk/grants" />;
}
