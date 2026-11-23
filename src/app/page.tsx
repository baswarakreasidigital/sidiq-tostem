import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Layers,
  MapPin,
  MoveHorizontal,
  ScanLine,
  ShieldCheck,
  Volume2,
  Wind,
} from "lucide-react";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ProductExplorer from "@/components/ProductExplorer";
import {
  Consultation,
  MapPreview,
  Navigation,
  StudioGallery,
} from "@/components/StudioInteractive";
import StudioStory from "@/components/StudioStory";
import WhatsAppLink from "@/components/WhatsAppLink";
import { GOOGLE_MAPS_STUDIO_URL } from "@/data/portfolio";
import { STUDIO_IDENTITY } from "@/data/studio-info";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TOSTEM Studio Alam Sutera | Pintu & Jendela Aluminium",
  description:
    "Authorized Dealer TOSTEM Indonesia (PT Litech Alglassindo). Temukan pintu & jendela aluminium bergaransi resmi di Studio Alam Sutera untuk area Jabodetabek.",
  alternates: {
    canonical: "https://tostemlitech.com/",
  },
};

const EXPERIENCE_POINTS = [
  {
    icon: MoveHorizontal,
    title: "Kenali cara bukaannya",
    description:
      "Pahami perbedaan mekanisme bukaan dan kesesuaiannya dengan aktivitas di rumah.",
  },
  {
    icon: Layers,
    title: "Perhatikan setiap detail",
    description:
      "Eksplorasi tampilan profil, pilihan material, dan karakter finishing dari dekat.",
  },
  {
    icon: ScanLine,
    title: "Bicarakan kebutuhan ruang",
    description:
      "Bawa denah atau inspirasi untuk memulai pembahasan pilihan produk yang sesuai.",
  },
] as const;

const PERFORMANCE_ITEMS = [
  {
    icon: Wind,
    title: "Ketahanan terhadap tekanan angin",
    description:
      "Pertimbangkan sistem yang sesuai dengan lokasi dan kondisi bangunan.",
  },
  {
    icon: Droplets,
    title: "Ketahanan terhadap air",
    description:
      "Perhatikan perlindungan bukaan terhadap masuknya air hujan.",
  },
  {
    icon: ShieldCheck,
    title: "Kerapatan udara",
    description:
      "Kenali peran sambungan dan seal dalam mengurangi kebocoran udara.",
  },
  {
    icon: Volume2,
    title: "Insulasi suara",
    description:
      "Diskusikan konfigurasi sistem dan kaca untuk kebutuhan akustik ruang.",
  },
] as const;

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

const FAQ_ITEMS = [
  {
    question: "Apakah saya perlu membuat janji sebelum datang?",
    answer:
      "Sebaiknya hubungi TOSTEM studio alam sutera terlebih dahulu untuk memastikan jam operasional Studio Alam Sutera, ketersediaan tim, dan produk yang ingin Anda lihat.",
  },
  {
    question: "Apa yang perlu saya siapkan untuk konsultasi?",
    answer:
      "Bawa denah, perkiraan ukuran bukaan, foto ruangan, atau referensi desain. Jika masih di tahap awal, mulai dari kebutuhan ruang dan rencana pembangunan atau renovasi Anda.",
  },
  {
    question: "Apakah semua seri tersedia di TOSTEM studio alam sutera?",
    answer:
      "Pilihan display dapat berbeda dari keseluruhan katalog. Konfirmasikan seri dan konfigurasi yang ingin Anda lihat sebelum berkunjung.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi harga?",
    answer:
      "Harga bergantung pada seri, ukuran, konfigurasi bukaan, kaca, finishing, dan kebutuhan pemasangan. Sampaikan kebutuhan proyek untuk mendapatkan penawaran yang sesuai.",
  },
  {
    question: "Bagaimana dengan performa dan garansi produk?",
    answer:
      "Performa dan ketentuan garansi mengikuti seri serta konfigurasi produk. Minta spesifikasi dan ketentuan garansi tertulis untuk produk yang Anda pilih.",
  },
] as const;

export default function Home() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();
  const faqJsonLd = buildFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a className="skip-link" href="#utama">
        Langsung ke konten
      </a>
      <Navigation />
      <main id="utama">
        <section className="hero" aria-labelledby="hero-title">
          <picture className="hero-picture">
            <source
              media="(min-width: 600px)"
              srcSet="/images/KV_Grants-02.webp"
              type="image/webp"
            />
            <img
              className="hero-image"
              src="/images/tostem-hero-mobile.webp"
              alt="Bukaan kaca lebar TOSTEM pada hunian modern"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </picture>
          <div className="hero-shade" />
          <div className="hero-content container">
            <div className="eyebrow">TOSTEM STUDIO ALAM SUTERA</div>
            <h1 id="hero-title">
              Ruang lebih terbuka.
              <br />
              Hidup lebih dekat.
            </h1>
            <p>
              Temukan pintu dan jendela aluminium yang menyatukan desain,
              kenyamanan, dan cerita rumah Anda.
            </p>
            <div className="hero-actions">
              <WhatsAppLink
                className="button light"
                ctaLocation="home_hero_cta"
                message="Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi pintu & jendela aluminium serta merencanakan kunjungan ke showroom. Terima kasih."
              >
                Rencanakan kunjungan <ArrowUpRight size={18} />
              </WhatsAppLink>
              <a className="text-link light-link" href="#produk">
                Jelajahi produk <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-bottom hero-bottom-container container">
            <span>DESAIN JEPANG. UNTUK KEHIDUPAN ANDA.</span>
            <div className="hero-bottom-right">
              <span className="hero-credit">Inspirasi ruang · GRANTS</span>
              <a href="#studio" aria-label="Gulir ke tentang TOSTEM studio">
                <span>JELAJAHI</span>
                <span className="scroll-line" />
              </a>
            </div>
          </div>
        </section>

        <div className="intro-strip" aria-label="Identitas resmi dealer">
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

        <StudioStory />

        <section id="produk" className="section products-section">
          <div className="container">
            <div className="section-head" data-reveal="true">
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

        <section id="portfolio" className="section portfolio-section">
          <div className="container">
            <PortfolioShowcase />
          </div>
        </section>

        <section id="pengalaman" className="section container experience">
          <div className="experience-head" data-reveal="true">
            <p className="eyebrow">RASAKAN LANGSUNG</p>
            <h2>
              Lebih dari melihat.
              <br />
              <span className="muted">Temukan yang terasa tepat.</span>
            </h2>
            <p className="body-copy">
              Detail yang sulit dijelaskan lewat layar, lebih mudah dipahami saat
              Anda berada di TOSTEM studio alam sutera.
            </p>
          </div>
          <StudioGallery />
          <div className="experience-points">
            {EXPERIENCE_POINTS.map(({ icon: Icon, title, description }) => (
              <article key={title} data-reveal="true">
                <Icon size={28} strokeWidth={1.2} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="performance-section" id="kualitas">
          <div className="container performance-grid">
            <div data-reveal="true">
              <p className="eyebrow">DESAIN YANG BEKERJA UNTUK ANDA</p>
              <h2>
                Keindahan terlihat.
                <br />
                <span>Kenyamanan terasa.</span>
              </h2>
              <p className="body-copy">
                Di balik profil yang bersih, ada detail performa yang perlu Anda
                pertimbangkan untuk hunian.
              </p>
              <a href="#produk" className="text-link light-link">
                Kenali pilihan produk <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="performance-list">
              {PERFORMANCE_ITEMS.map(({ icon: Icon, title, description }) => (
                <article key={title} data-reveal="true">
                  <Icon size={25} strokeWidth={1.2} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
              <p className="performance-note">
                Performa berbeda menurut seri, ukuran, jenis kaca, konfigurasi,
                dan pemasangan. Konsultasikan spesifikasi produk yang dipilih.
              </p>
            </div>
          </div>
        </section>

        <section className="section container process" id="konsultasi">
          <div className="section-head" data-reveal="true">
            <div>
              <p className="eyebrow">DARI INSPIRASI KE PILIHAN</p>
              <h2>
                Mari mulai dari
                <br />
                <span className="muted">ruang Anda.</span>
              </h2>
            </div>
            <p className="section-description">
              Tidak perlu punya semua jawabannya.
              <br />
              Bawa ide Anda, dan mulai dari sana.
            </p>
          </div>
          <div className="steps">
            {PROCESS_STEPS.map(({ number, title, description }) => (
              <article key={number} data-reveal="true">
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Consultation />
        </section>

        <section className="visit-section" id="kunjungi">
          <div className="container visit-grid">
            <div className="visit-photo" data-reveal="true">
              <Image
                src="/images/alam-sutera-1.webp"
                alt="Fasad asli TOSTEM Studio Alam Sutera di Ruko The Element"
                width={1200}
                height={1500}
                sizes="(max-width: 600px) 100vw, 45vw"
              />
            </div>
            <div className="visit-copy" data-reveal="true">
              <p className="eyebrow">SAMPAI JUMPA DI TOSTEM STUDIO</p>
              <h2>
                Ide Anda.
                <br />
                Ruang kami.
                <br />
                <span className="muted">Mari bertemu.</span>
              </h2>
              <div className="address">
                <MapPin size={22} strokeWidth={1.4} />
                <div>
                  <h3>TOSTEM Studio Alam Sutera</h3>
                  <p>
                    Ruko The Element Blok C15 No. 25BC
                    <br />
                    Tangerang 15320, Indonesia
                  </p>
                </div>
              </div>
              <p className="visit-note">
                <strong>{STUDIO_IDENTITY.dealerBadge}</strong>
                <br />
                {STUDIO_IDENTITY.hoursDetail} · {STUDIO_IDENTITY.coverageDetail}.
              </p>
              <div className="visit-actions">
                <a
                  className="button dark"
                  href={GOOGLE_MAPS_STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Petunjuk arah &amp; Ulasan Google <ArrowUpRight size={18} />
                </a>
                <WhatsAppLink
                  className="text-link"
                  ctaLocation="home_visit_cta"
                  message="Halo TOSTEM Studio Alam Sutera, saya ingin menanyakan jadwal kunjungan ke showroom Alam Sutera. Terima kasih."
                >
                  Tanyakan kunjungan <ArrowRight size={18} />
                </WhatsAppLink>
              </div>
              <MapPreview />
            </div>
          </div>
        </section>

        <section className="section container faq-section" id="faq">
          <div data-reveal="true">
            <p className="eyebrow">SEBELUM ANDA BERKUNJUNG</p>
            <h2>
              Hal yang mungkin
              <br />
              <span className="muted">ingin Anda ketahui.</span>
            </h2>
          </div>
          <div className="faqs">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing">
          <div className="container" data-reveal="true">
            <p className="eyebrow">SEBUAH AWAL UNTUK RUANG YANG LEBIH BAIK</p>
            <h2>
              Temukan kemungkinan
              <br />
              untuk rumah Anda.
            </h2>
            <WhatsAppLink
              className="button dark"
              ctaLocation="home_closing_cta"
              message="Halo TOSTEM Studio Alam Sutera, saya ingin mulai konsultasi kebutuhan pintu & jendela untuk rumah kami. Terima kasih."
            >
              Mulai percakapan <ArrowUpRight size={18} />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <Link href="/" aria-label="TOSTEM, kembali ke awal">
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
            <a href="#studio">Studio</a>
            <a href="#produk">Produk</a>
            <a href="#kunjungi">Lokasi</a>
            <a href="#faq">FAQ</a>
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
          <Link href="/produk">Semua Produk</Link>
          <Link href="/rencanakan-kunjungan">Rencanakan Kunjungan</Link>
          <Link href="/produk/grants">GRANTS Series</Link>
          <Link href="/jendela-kedap-suara">Jendela Kedap Suara</Link>
          <Link href="/pintu-utama-giesta">Pintu GIESTA</Link>
          <Link href={STUDIO_IDENTITY.privacyPath}>Kebijakan Privasi</Link>
          <a href="#utama">Kembali ke atas ↑</a>
        </div>
      </footer>

      <div className="mobile-dock">
        <a href="#kunjungi">
          <MapPin size={18} />
          Lokasi studio
        </a>
        <WhatsAppLink
          ctaLocation="mobile_dock_cta"
          message="Halo TOSTEM Studio Alam Sutera, saya ingin merencanakan kunjungan dan konsultasi produk TOSTEM. Terima kasih."
        >
          Rencanakan kunjungan <ArrowUpRight size={16} />
        </WhatsAppLink>
      </div>
    </>
  );
}
