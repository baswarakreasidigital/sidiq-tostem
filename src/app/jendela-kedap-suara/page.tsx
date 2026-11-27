import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import ProductLandingShell from "@/components/ProductLandingShell";
import WhatsAppLink from "@/components/WhatsAppLink";
import { PRODUCT_SERIES } from "@/data/products";

const WINDOW_SERIES = PRODUCT_SERIES.filter((s) =>
  ["ATIS", "VIEW / VIEW Plus", "WE 70"].includes(s.name)
);

export const metadata: Metadata = {
  title: "Jendela Aluminium Kedap Suara & Anti Bocor TOSTEM",
  description:
    "Bandingkan jendela aluminium Jepang kedap suara & anti bocor TOSTEM: ATIS, VIEW Plus (kaca ganda 28 mm), dan WE 70 di Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/jendela-kedap-suara",
  },
  openGraph: {
    title: "Jendela Aluminium Kedap Suara & Anti Bocor TOSTEM",
    description:
      "Bandingkan spesifikasi teknis ATIS, VIEW Plus, dan WE 70. Authorized Dealer TOSTEM Indonesia — PT Litech Alglassindo Jaya.",
    url: "https://tostemlitech.com/jendela-kedap-suara",
    images: [{ url: "/images/series-atis.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jendela Aluminium Kedap Suara & Anti Bocor TOSTEM",
    description:
      "Perbandingan jendela kedap suara & anti bocor hujan tropis TOSTEM ATIS, VIEW Plus, dan WE 70.",
    images: [{ url: "/images/series-atis.webp", width: 1200, height: 800 }],
  },
};

export default function JendelaKedapSuaraPage() {
  return (
    <ProductLandingShell
      currentPath="/jendela-kedap-suara"
      eyebrow="JENDELA ALUMINIUM JEPANG · ATIS · VIEW PLUS · WE 70"
      title="Jendela Aluminium Kedap Suara & Anti Bocor untuk Hunian Tropis."
      subtitle="Kurangi kebisingan jalan raya dan lindungi interior dari rembesan hujan deras melalui sistem pre-engineered TOSTEM dengan kerapatan udara hingga A-4 dan pilihan kaca ganda."
      heroImage="/images/series-atis.webp"
      heroAlt="Jendela aluminium kedap suara TOSTEM ATIS dengan profil ramping"
      defaultInterest="Jendela kedap suara (ATIS / VIEW Plus / WE 70)"
    >
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">PERBANDINGAN 3 SERI JENDELA TOSTEM</p>
          <h2>Pilih performa sesuai lokasi dan kebutuhan ruang Anda.</h2>
        </div>

        <div className="lp-compare-grid">
          {WINDOW_SERIES.map((series) => (
            <article key={series.name} className="lp-compare-card">
              <div className="lp-compare-media">
                <Image
                  src={`/images/${series.image}`}
                  alt={`Jendela aluminium TOSTEM seri ${series.name}`}
                  width={800}
                  height={533}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="lp-compare-body">
                <p className="eyebrow">{series.tag.toUpperCase()}</p>
                <h3>{series.name}</h3>
                <p>{series.text}</p>
                <dl className="lp-dl">
                  {series.spec.map((item) => {
                    const [label, value] = item.split("|");
                    return (
                      <div key={item}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    );
                  })}
                  <div>
                    <dt>Performa</dt>
                    <dd>{series.performance}</dd>
                  </div>
                </dl>
                <p className="lp-note">{series.note}</p>
                <div className="lp-compare-actions">
                  <WhatsAppLink
                    className="button dark"
                    ctaLocation="jendela_kedap_suara_card"
                    productSeries={series.name}
                    message={`Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi jendela kedap suara seri ${series.name}. Mohon informasi spesifikasi dan estimasi harga. Terima kasih.`}
                  >
                    <MessageCircle size={16} strokeWidth={1.6} />
                    <span>Konsultasikan {series.name}</span>
                    <ArrowUpRight size={16} />
                  </WhatsAppLink>
                  <Link className="text-link" href={series.landingHref}>
                    <span>Lihat detail {series.name}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ProductLandingShell>
  );
}
