import type { Metadata } from "next";
import GrantsLandingContent from "@/components/GrantsLandingContent";

export const metadata: Metadata = {
  title:
    "TOSTEM GRANTS Series | Pintu & Jendela Aluminium Panorama — Studio Alam Sutera",
  description:
    "Eksplorasi lengkap 21 tipe TOSTEM GRANTS & GRANTS PLUS: Window Series, Door Series, Flat Rail hingga 4,5 m, dan Corner Sliding tanpa tiang. Performa hingga 2.000 Pa (ASTM) & kaca 31,5 mm. Authorized Dealer PT Litech Alglassindo.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/grants",
  },
  openGraph: {
    title: "TOSTEM GRANTS Series | Pintu & Jendela Panorama — Studio Alam Sutera",
    description:
      "21 tipe jendela & pintu aluminium flagship TOSTEM GRANTS (Low-Rise JIS & High-Rise ASTM). Coba langsung di Studio Alam Sutera.",
    url: "https://tostemlitech.com/produk/grants",
    images: [{ url: "/images/series-grants.webp", width: 1200, height: 800 }],
  },
};

export default function GrantsProductPage() {
  return <GrantsLandingContent currentPath="/produk/grants" />;
}
