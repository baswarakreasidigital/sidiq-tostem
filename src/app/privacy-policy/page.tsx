import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { STUDIO_IDENTITY } from "@/data/studio-info";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | TOSTEM Studio Alam Sutera",
  description:
    "Kebijakan privasi pengelolaan data pengunjung, formulir estimasi proyek, dan penggunaan cookie di tostemlitech.com (PT Litech Alglassindo Jaya).",
  alternates: {
    canonical: "https://tostemlitech.com/privacy-policy",
  },
  openGraph: {
    title: "Kebijakan Privasi | TOSTEM Studio Alam Sutera",
    description:
      "Kebijakan privasi pengelolaan data pengunjung dan formulir proyek di tostemlitech.com (PT Litech Alglassindo Jaya).",
    url: "https://tostemlitech.com/privacy-policy",
    images: [{ url: "/images/alam-sutera-4.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan Privasi | TOSTEM Studio Alam Sutera",
    description:
      "Kebijakan privasi pengelolaan data pengunjung dan formulir proyek di tostemlitech.com.",
    images: [{ url: "/images/alam-sutera-4.webp", width: 1200, height: 800 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
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
          <Link href="/" className="header-cta">
            <ArrowLeft size={16} /> Kembali ke beranda
          </Link>
        </div>
      </header>

      <main className="legal-page">
        <div className="container legal-container">
          <p className="eyebrow">KEBIJAKAN PRIVASI · {STUDIO_IDENTITY.companyName.toUpperCase()}</p>
          <h1>Kebijakan Privasi</h1>
          <p className="legal-updated">
            Terakhir diperbarui: November 2026 · Berlaku untuk situs{" "}
            <strong>tostemlitech.com</strong>
          </p>

          <section className="legal-section">
            <h2>1. Identitas Pengelola Situs</h2>
            <p>
              Situs web <strong>tostemlitech.com</strong> dikelola secara resmi
              oleh <strong>{STUDIO_IDENTITY.companyName}</strong> selaku{" "}
              {STUDIO_IDENTITY.dealerBadge} yang mengoperasikan{" "}
              <strong>{STUDIO_IDENTITY.studioName}</strong> di{" "}
              {STUDIO_IDENTITY.address}.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami hanya mengumpulkan informasi yang Anda berikan secara
              sukarela saat mengajukan permintaan estimasi proyek, mengunduh
              katalog produk, atau menghubungi tim konsultan kami, termasuk:
            </p>
            <ul>
              <li>Nama lengkap dan nomor WhatsApp / telepon aktif.</li>
              <li>
                Informasi proyek seperti kota/lokasi proyek, kategori kebutuhan
                (bangun rumah, renovasi, atau proyek profesional), serta seri
                produk yang diminati.
              </li>
              <li>
                Dokumen denah atau foto bukaan apabila Anda memilih
                melampirkannya untuk keperluan estimasi awal.
              </li>
              <li>
                Data teknis kunjungan (seperti halaman yang diakses, perangkat,
                dan parameter kampanye iklan seperti <code>gclid</code> atau{" "}
                <code>UTM</code>) melalui cookie pihak pertama dan Google Tag
                Manager.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Penggunaan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan secara terbatas untuk:</p>
            <ul>
              <li>
                Menghubungi Anda kembali untuk konsultasi produk, penyampaian
                katalog resmi TOSTEM, estimasi harga, dan penjadwalan kunjungan
                showroom atau survei lokasi di area {STUDIO_IDENTITY.coverage}.
              </li>
              <li>
                Menghubungkan kode referensi konsultasi dengan sumber kampanye
                agar kami dapat mengukur efektivitas layanan dan iklan Google
                Ads secara akurat.
              </li>
              <li>
                Meningkatkan kualitas informasi produk dan pengalaman penggunaan
                situs web.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Cookie, Analitik &amp; Iklan (Google Ads)</h2>
            <p>
              Situs ini menggunakan Google Tag Manager, Google Analytics, dan
              pelacakan konversi Google Ads (termasuk penyimpanan parameter{" "}
              <code>gclid</code> pada cookie pihak pertama hingga 90 hari) untuk
              memahami interaksi pengunjung serta menayangkan informasi yang
              relevan melalui fitur pemasaran ulang (<em>remarketing</em>). Anda
              dapat mengatur atau menonaktifkan cookie kapan saja melalui
              pengaturan peramban Anda.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Perlindungan &amp; Kerahasiaan Data</h2>
            <p>
              <strong>{STUDIO_IDENTITY.companyName}</strong> tidak menjual,
              menyewakan, atau memperdagangkan data pribadi Anda kepada pihak
              ketiga mana pun. Data hanya diakses oleh tim sales dan teknis
              internal kami yang bertugas menindaklanjuti permintaan proyek
              Anda.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Hak Anda &amp; Kontak Resmi</h2>
            <p>
              Anda berhak meminta akses, pembaruan, atau penghapusan data
              pribadi yang pernah Anda kirimkan kepada kami. Untuk pertanyaan
              terkait kebijakan privasi ini, silakan hubungi:
            </p>
            <p>
              <strong>{STUDIO_IDENTITY.studioName}</strong>
              <br />
              {STUDIO_IDENTITY.companyName}
              <br />
              {STUDIO_IDENTITY.address}
              <br />
              WhatsApp Resmi: {STUDIO_IDENTITY.phoneDisplay}
              <br />
              Jam Operasional: {STUDIO_IDENTITY.hours}
            </p>
          </section>

          <div className="legal-back">
            <Link href="/" className="button dark">
              <ArrowLeft size={16} /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
