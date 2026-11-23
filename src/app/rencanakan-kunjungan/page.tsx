import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Consultation } from "@/components/StudioInteractive";
import { STUDIO_IDENTITY } from "@/data/studio-info";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Ceritakan rencana Anda",
    description:
      "Bangun baru atau renovasi? Siapkan gambaran ruang, denah, dan kebutuhan utama Anda.",
  },
  {
    number: "02",
    title: "Eksplorasi di TOSTEM studio",
    description:
      "Kenali pilihan material dan mekanisme bukaan. Konfirmasikan display yang ingin Anda lihat.",
  },
  {
    number: "03",
    title: "Tentukan langkah berikutnya",
    description:
      "Bahas seri, spesifikasi, dan kebutuhan proyek sebelum meminta penawaran.",
  },
] as const;

export const metadata: Metadata = {
  title: "Rencanakan Kunjungan | TOSTEM Studio Alam Sutera",
  description:
    "Ajukan estimasi proyek, download katalog resmi, atau jadwalkan konsultasi langsung bersama tim TOSTEM Studio Alam Sutera (PT Litech Alglassindo).",
  alternates: {
    canonical: "https://tostemlitech.com/rencanakan-kunjungan",
  },
  openGraph: {
    title: "Rencanakan Kunjungan | TOSTEM Studio Alam Sutera",
    description:
      "Konsultasikan kebutuhan pintu dan jendela aluminium TOSTEM untuk hunian atau proyek Anda di Jabodetabek.",
    url: "https://tostemlitech.com/rencanakan-kunjungan",
    images: [{ url: "/images/alam-sutera-4.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rencanakan Kunjungan | TOSTEM Studio Alam Sutera",
    description:
      "Konsultasikan kebutuhan pintu dan jendela aluminium TOSTEM untuk hunian atau proyek Anda di Jabodetabek.",
    images: [{ url: "/images/alam-sutera-4.webp", width: 1200, height: 800 }],
  },
};

export default function RencanakanKunjunganPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Rencanakan Kunjungan", path: "/rencanakan-kunjungan" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="TOSTEM Studio Alam Sutera, beranda"
          >
            <Image
              src="/images/tostem-logo-b.svg"
              alt="TOSTEM"
              width={194}
              height={34}
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            <Link href="/#studio">Studio</Link>
            <Link href="/produk">Produk</Link>
            <Link href="/#portfolio">Portfolio</Link>
            <Link href="/#pengalaman">Pengalaman</Link>
            <Link href="/#kunjungi">Lokasi</Link>
          </nav>
          <a href="#rencana" className="header-cta">
            Rencanakan kunjungan <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main id="utama">
        <section className="section container process" id="konsultasi">
          <div className="section-head">
            <div>
              <p className="eyebrow">DARI INSPIRASI KE PILIHAN</p>
              <h1>
                Mari mulai dari
                <br />
                <span className="muted">ruang Anda.</span>
              </h1>
            </div>
            <p className="section-description">
              Tidak perlu punya semua jawabannya.
              <br />
              Bawa ide Anda, dan mulai dari sana.
            </p>
          </div>
          <div className="steps">
            {PROCESS_STEPS.map(({ number, title, description }) => (
              <article key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Consultation />
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <Link href="/" aria-label="TOSTEM, kembali ke beranda">
            <Image
              src="/images/tostem-logo-b.svg"
              alt="TOSTEM"
              width={194}
              height={34}
            />
          </Link>
          <p>
            Studio Alam Sutera
            <br />
            <span>Pintu &amp; jendela untuk kehidupan Anda.</span>
          </p>
          <nav aria-label="Navigasi footer">
            <Link href="/#studio">Studio</Link>
            <Link href="/produk">Produk</Link>
            <Link href="/#kunjungi">Lokasi</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <Link className="text-link" href="/produk">
            Jelajahi produk <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="container footer-trust">
          <span>{STUDIO_IDENTITY.dealerBadge}</span>
          <span>{STUDIO_IDENTITY.warranty}</span>
          <span>Jam buka: {STUDIO_IDENTITY.hours}</span>
          <span>Area layanan: Jabodetabek</span>
        </div>
        <div className="container footer-bottom">
          <span>© TOSTEM Studio Alam Sutera · PT Litech Alglassindo</span>
          <Link href={STUDIO_IDENTITY.privacyPath}>Kebijakan Privasi</Link>
          <a href="#utama">Kembali ke atas ↑</a>
        </div>
      </footer>
    </>
  );
}
