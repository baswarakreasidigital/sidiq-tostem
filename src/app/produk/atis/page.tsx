import type { Metadata } from "next";
import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import AtisSubProductExplorer from "@/components/AtisSubProductExplorer";
import { ATIS_FEATURES, ATIS_PERFORMANCE_ROWS } from "@/data/atis-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export const metadata: Metadata = {
  title: "TOSTEM ATIS Series | Jendela & Pintu Minimalis",
  description:
    "Eksplorasi 17 tipe TOSTEM ATIS & ATIS PLUS dengan concealed hardware, mullion 40 mm, dan Smart Invisible Insect Screen di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/atis",
  },
  openGraph: {
    title: "TOSTEM ATIS Series | Jendela & Pintu Minimalis",
    description:
      "17 tipe jendela & pintu aluminium TOSTEM ATIS (Low-Rise JIS & High-Rise ASTM 2.000 Pa) dengan concealed hardware dan Smart Insect Screen.",
    url: "https://tostemlitech.com/produk/atis",
    images: [{ url: "/images/series-atis.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM ATIS Series | Jendela & Pintu Minimalis",
    description:
      "17 tipe jendela & pintu aluminium TOSTEM ATIS dengan concealed hardware di Studio Alam Sutera.",
    images: [{ url: "/images/series-atis.webp", width: 1200, height: 800 }],
  },
};

export default function AtisProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/atis"
      eyebrow="TOSTEM ATIS SERIES · STREAMLINED DESIGN & CONCEALED HARDWARE"
      title="TOSTEM ATIS. Detail Minimal. Fungsi Maksimal."
      subtitle="Lebih dari sekadar bingkai jendela — ATIS memadukan estetika bersih 'photo frame on the wall' dengan hardware tersembunyi, mullion ramping 40 mm, serta Smart Invisible Insect Screen dalam 17 konfigurasi jendela dan pintu untuk hunian low-rise (ATIS) maupun high-rise (ATIS PLUS)."
      heroImage="/images/series-atis.webp"
      heroAlt="Sistem jendela dan pintu aluminium minimalis TOSTEM ATIS Series"
      defaultInterest="Jendela kedap suara (ATIS / VIEW Plus / WE 70)"
    >
      {/* 1. Ringkasan 4 Angka Kunci ATIS */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>40 mm</strong>
            <span>Slim mullion ramping yang menjaga tampilan tetap bersih</span>
          </div>
          <div className="grants-metric">
            <strong>2.000 Pa</strong>
            <span>Ketahanan angin ATIS PLUS (ASTM E330) &amp; Air 300 Pa</span>
          </div>
          <div className="grants-metric">
            <strong>30 dB*</strong>
            <span>Insulasi suara hingga T-2 (30 dB) dengan kaca &amp; tipe tertentu</span>
          </div>
          <div className="grants-metric">
            <strong>40% Tipis</strong>
            <span>Kawat Smart Invisible Screen: 20% lebih jernih &amp; 20% lebih sejuk</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama ATIS dengan Foto Resmi */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">INOVASI &amp; DETAIL REKAYASA ATIS</p>
          <h2>Teknologi tersembunyi di dalam garis bingkai yang tenang.</h2>
        </div>

        <div className="grants-features-grid">
          {ATIS_FEATURES.map((feature) => (
            <article key={feature.id} className="grants-feature-card">
              <div className="grants-feature-media">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="grants-feature-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Explorer 17 Sub-Produk ATIS (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 17 SUB-PRODUK ATIS</p>
            <h2>Eksplorasi seluruh tipe jendela, pintu geser &amp; pintu ayun ATIS dalam satu halaman.</h2>
          </div>
          <AtisSubProductExplorer />
        </div>
      </section>

      {/* 4. Perbandingan ATIS vs ATIS PLUS + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · ATIS VS ATIS PLUS</p>
          <h2>Standar performa terukur untuk hunian low-rise (JIS) dan proyek high-rise (ASTM).</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian ATIS</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {ATIS_PERFORMANCE_ROWS.map((row) => (
                <tr key={row.variant}>
                  <td>
                    <strong>{row.variant}</strong>
                  </td>
                  <td>{row.wind}</td>
                  <td>{row.water}</td>
                  <td>{row.air}</td>
                  <td>{row.sound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lp-note" style={{ marginTop: 0, marginBottom: 24 }}>
          *T-2: 30 dB berlaku untuk tipe jendela dan spesifikasi kaca tertentu
          pada pengujian standar JIS A 1416.
        </p>

        <div className="lp-spec-grid">
          <div className="lp-spec-box">
            <p className="eyebrow">DIMENSI KUSEN &amp; KACA</p>
            <h3>Spesifikasi Profil ATIS</h3>
            <dl className="lp-dl">
              <div>
                <dt>Ketebalan Kusen</dt>
                <dd>88 mm · 131,5 mm (3 tracks sliding)</dd>
              </div>
              <div>
                <dt>Tinggi Ambang Bawah</dt>
                <dd>55 mm (opsi Flat Attachment lepas-pasang pada sliding)</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca</dt>
                <dd>
                  5, 6, 8–15,52 dan 22 mm (hingga 24 / 26 mm untuk Fixed Window)
                </dd>
              </div>
            </dl>
          </div>

          <div className="lp-spec-box">
            <p className="eyebrow">PILIHAN WARNA ANODIZED TEXGUARD</p>
            <h3>6 Warna Resmi TOSTEM</h3>
            <p className="lp-note" style={{ marginTop: 0, marginBottom: 16 }}>
              Lapisan TEXGUARD menjaga kilau warna minimal 40 tahun, tahan
              gores, dan mudah dibersihkan. Tersertifikasi JIS H 8602, JIS H
              4100, AAMA 612, dan ISO 9001/14001.
            </p>
            <div className="lp-swatches">
              {STANDARD_COLORS.map((color, idx) => (
                <div key={color} className="lp-swatch">
                  <span style={{ background: STANDARD_COLOR_HEX[idx] }} />
                  <span>{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ProductLandingShell>
  );
}
