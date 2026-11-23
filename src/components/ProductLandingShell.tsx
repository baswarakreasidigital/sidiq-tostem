import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Consultation } from "@/components/StudioInteractive";
import WhatsAppLink from "@/components/WhatsAppLink";
import {
  DEDICATED_PRODUCT_PAGES,
  GOOGLE_MAPS_STUDIO_URL,
} from "@/data/portfolio";
import { STUDIO_IDENTITY } from "@/data/studio-info";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/seo";

interface ProductLandingShellProps {
  currentPath: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  defaultInterest: string;
  children: ReactNode;
}

export default function ProductLandingShell({
  currentPath,
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroAlt,
  defaultInterest,
  children,
}: ProductLandingShellProps) {
  const otherPages = DEDICATED_PRODUCT_PAGES.filter(
    (p) => p.href !== currentPath
  );

  const breadcrumbItems = currentPath.startsWith("/produk/")
    ? [
        { name: "Beranda", path: "/" },
        { name: "Produk TOSTEM", path: "/produk" },
        { name: title, path: currentPath },
      ]
    : [
        { name: "Beranda", path: "/" },
        { name: title, path: currentPath },
      ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems);
  const productJsonLd = buildProductJsonLd({
    name: title,
    description: subtitle,
    image: heroImage,
    path: currentPath,
    category: defaultInterest,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="TOSTEM Studio Alam Sutera, kembali ke beranda"
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
            <Link href="/#produk">Produk</Link>
            <Link href="/#portfolio">Portfolio</Link>
            <Link href="/#pengalaman">Pengalaman</Link>
            <Link href="/#kunjungi">Lokasi</Link>
          </nav>
          <WhatsAppLink
            className="header-cta"
            ctaLocation="product_header_cta"
            productSeries={defaultInterest}
            message={`Halo TOSTEM Studio Alam Sutera, saya sedang melihat ${title} dan ingin merencanakan kunjungan serta konsultasi produk. Terima kasih.`}
          >
            Rencanakan kunjungan <ArrowUpRight size={16} />
          </WhatsAppLink>
        </div>
      </header>

      <main className="lp-main">
        <div className="intro-strip lp-trust-bar" aria-label="Identitas resmi dealer">
          <div className="container">
            <p>{STUDIO_IDENTITY.dealerBadge}</p>
            <span className="strip-line" />
            <p>{STUDIO_IDENTITY.warranty}</p>
            <span className="strip-line" />
            <p>
              {STUDIO_IDENTITY.hours} · {STUDIO_IDENTITY.coverage}
            </p>
          </div>
        </div>

        <section className="lp-hero">
          <div className="container lp-hero-grid">
            <div className="lp-hero-copy">
              <Link href="/produk" className="lp-breadcrumb">
                <ArrowLeft size={14} /> Kembali ke semua produk TOSTEM
              </Link>
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="lp-subtitle">{subtitle}</p>
              <div className="lp-hero-actions">
                <WhatsAppLink
                  className="button dark"
                  ctaLocation="product_hero_cta"
                  productSeries={defaultInterest}
                  message={`Halo TOSTEM Studio Alam Sutera, saya ingin meminta estimasi harga & katalog untuk ${title}. Terima kasih.`}
                >
                  Minta Estimasi &amp; Katalog <ArrowUpRight size={18} />
                </WhatsAppLink>
                <a
                  className="text-link"
                  href={GOOGLE_MAPS_STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} /> Kunjungi Showroom Alam Sutera
                </a>
              </div>
            </div>
            <div className="lp-hero-media">
              <Image
                src={heroImage}
                alt={heroAlt}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {children}

        <section className="section container lp-consult-section">
          <Consultation defaultInterest={defaultInterest} />
        </section>

        <section className="lp-related">
          <div className="container">
            <p className="eyebrow">SOLUSI PRODUK TOSTEM LAINNYA</p>
            <h2>Eksplorasi seri lain di TOSTEM Studio Alam Sutera</h2>
            <div className="lp-related-grid">
              {otherPages.map((page) => (
                <Link key={page.href} href={page.href} className="lp-related-card">
                  <p className="eyebrow">{page.eyebrow}</p>
                  <h3>{page.title}</h3>
                  <p>{page.description}</p>
                  <span className="text-link">
                    Lihat detail seri <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-trust">
          <span>{STUDIO_IDENTITY.dealerBadge}</span>
          <span>{STUDIO_IDENTITY.warranty}</span>
          <span>Jam buka: {STUDIO_IDENTITY.hours}</span>
          <span>Area layanan: {STUDIO_IDENTITY.coverage}</span>
        </div>
        <div className="container footer-bottom">
          <span>© TOSTEM Studio Alam Sutera · PT Litech Alglassindo</span>
          <Link href={STUDIO_IDENTITY.privacyPath}>Kebijakan Privasi</Link>
          <a href="#top">Kembali ke atas ↑</a>
        </div>
      </footer>
    </>
  );
}
