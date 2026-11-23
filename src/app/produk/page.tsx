import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductExplorer from "@/components/ProductExplorer";
import { STUDIO_IDENTITY } from "@/data/studio-info";

export const metadata: Metadata = {
  title: "Pilihan Produk TOSTEM | Jendela & Pintu Aluminium — Studio Alam Sutera",
  description:
    "Eksplorasi seluruh seri jendela dan pintu aluminium TOSTEM: GRANTS, ATIS, WE 70, VIEW / VIEW Plus, WE PLUS, WE 40, pintu interior IN16, dan pintu utama GIESTA di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk",
  },
  openGraph: {
    title: "Pilihan Produk TOSTEM | TOSTEM Studio Alam Sutera",
    description:
      "Kenali detail setiap seri dan warna jendela serta pintu aluminium TOSTEM Indonesia.",
    url: "https://tostemlitech.com/produk",
    images: [{ url: "/images/KV_Grants-02.webp", width: 1200, height: 800 }],
  },
};

export default function ProdukPage() {
  return (
    <>
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
          <Link href="/rencanakan-kunjungan" className="header-cta">
            Rencanakan kunjungan <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>

      <main id="utama">
        <section id="produk" className="section products-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">PILIHAN UNTUK SETIAP RUANG</p>
                <h2>Buka lebih banyak kemungkinan.</h2>
              </div>
              <p className="section-description">
                Kenali detailnya. Temukan seri dan warna yang sesuai dengan
                ruang Anda.
              </p>
            </div>
            <ProductExplorer />
          </div>
        </section>

        <section className="closing">
          <div className="container">
            <p className="eyebrow">SEBUAH AWAL UNTUK RUANG YANG LEBIH BAIK</p>
            <h2>
              Temukan kemungkinan
              <br />
              untuk rumah Anda.
            </h2>
            <Link className="button dark" href="/rencanakan-kunjungan">
              Mulai percakapan <ArrowUpRight size={18} />
            </Link>
          </div>
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
            <a href="#produk">Produk</a>
            <Link href="/#kunjungi">Lokasi</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <a className="text-link" href="#produk">
            Jelajahi produk <ArrowUpRight size={16} />
          </a>
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
