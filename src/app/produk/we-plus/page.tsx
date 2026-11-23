import type { Metadata } from "next";
import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import WePlusSubProductExplorer from "@/components/WePlusSubProductExplorer";
import {
  WEPLUS_FEATURES,
  WEPLUS_PERFORMANCE_ROWS,
} from "@/data/weplus-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export const metadata: Metadata = {
  title: "TOSTEM WE PLUS | Jendela & Pintu High-Rise ASTM",
  description:
    "Eksplorasi 14 tipe TOSTEM WE PLUS untuk bangunan bertingkat: teruji ASTM 1.600 Pa, tinggi bukaan hingga 3 meter, di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/we-plus",
  },
  openGraph: {
    title: "TOSTEM WE PLUS | Jendela & Pintu High-Rise ASTM",
    description:
      "Sistem jendela dan pintu aluminium berstandar ASTM untuk bangunan bertingkat tinggi: ketahanan angin 1.600 Pa, kedap air 240 Pa, tinggi bukaan hingga 3 meter.",
    url: "https://tostemlitech.com/produk/we-plus",
    images: [{ url: "/images/series-weplus.webp", width: 1400, height: 974 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM WE PLUS | Jendela & Pintu High-Rise ASTM",
    description:
      "14 tipe jendela & pintu aluminium high-rise berstandar ASTM (1.600 Pa) di Studio Alam Sutera.",
    images: [{ url: "/images/series-weplus.webp", width: 1400, height: 974 }],
  },
};

export default function WePlusProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/we-plus"
      eyebrow="TOSTEM WE PLUS SERIES · STANDAR ASTM UNTUK HIGH-RISE"
      title="TOSTEM WE PLUS. Performa Tinggi untuk Bangunan Bertingkat."
      subtitle="Telah lolos pengujian ketat standar ASTM dan standar internal TOSTEM — menghadirkan 14 tipe konfigurasi dengan ketahanan angin 1.600 Pa, kedap air 240 Pa, serta pilihan bukaan tinggi hingga 3 meter untuk proyek high-rise, apartemen, dan hunian bertingkat."
      heroImage="/images/series-weplus.webp"
      heroAlt="Sistem jendela dan pintu aluminium TOSTEM WE PLUS Series pada bangunan bertingkat"
      defaultInterest="Jendela & pintu"
    >
      {/* 1. Ringkasan 4 Angka Kunci WE PLUS */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>14 Tipe</strong>
            <span>Konfigurasi Window (7), Sliding Door (3) &amp; Swing Door (4)</span>
          </div>
          <div className="grants-metric">
            <strong>1.600 Pa</strong>
            <span>Ketahanan tekanan angin ASTM E330 untuk lantai bertingkat</span>
          </div>
          <div className="grants-metric">
            <strong>240 Pa</strong>
            <span>Kedap air ASTM E300 &amp; kedap udara 10,7 m³/(h·m²)</span>
          </div>
          <div className="grants-metric">
            <strong>Tinggi 3 m</strong>
            <span>Proporsi bukaan tinggi hingga 3.000 mm · kusen 72 / 104 mm</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama WE PLUS */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN REKAYASA WE PLUS</p>
          <h2>Dirancang khusus menghadapi beban angin, hujan deras, dan standar keselamatan high-rise.</h2>
        </div>

        <div className="grants-features-grid">
          {WEPLUS_FEATURES.map((feature) => (
            <article key={feature.id} className="grants-feature-card">
              <div className="grants-feature-media">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={778}
                  height={593}
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

      {/* 3. Explorer 14 Sub-Produk WE PLUS (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 14 SUB-PRODUK WE PLUS</p>
            <h2>Eksplorasi seluruh tipe jendela, pintu geser, dan pintu ayun WE PLUS dalam satu halaman.</h2>
          </div>
          <WePlusSubProductExplorer />
        </div>
      </section>

      {/* 4. Data Performa Resmi ASTM + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · STANDAR ASTM &amp; JIS</p>
          <h2>Teruji laboratorium untuk keandalan struktur pada proyek bertingkat.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian WE PLUS</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {WEPLUS_PERFORMANCE_ROWS.map((row) => (
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

        <div className="lp-spec-grid">
          <div className="lp-spec-box">
            <p className="eyebrow">DIMENSI KUSEN &amp; KACA</p>
            <h3>Spesifikasi Profil WE PLUS</h3>
            <dl className="lp-dl">
              <div>
                <dt>Kedalaman Kusen</dt>
                <dd>72 mm · 104 mm (3 tracks sliding door)</dd>
              </div>
              <div>
                <dt>Tinggi Ambang Bawah</dt>
                <dd>35 mm (window &amp; swing) · 50 mm (sliding door)</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca</dt>
                <dd>5, 6, 8 mm (menyesuaikan spesifikasi beban angin proyek)</dd>
              </div>
              <div>
                <dt>Garansi Resmi</dt>
                <dd>Sistem &amp; komponen 5 tahun · Warna Anodized TEXGUARD</dd>
              </div>
            </dl>
          </div>

          <div className="lp-spec-box">
            <p className="eyebrow">PILIHAN WARNA ANODIZED TEXGUARD</p>
            <h3>6 Warna Resmi TOSTEM</h3>
            <p className="lp-note" style={{ marginTop: 0, marginBottom: 16 }}>
              Lapisan TEXGUARD menjaga kilau warna jangka panjang, tahan gores,
              dan mudah dirawat. Konfigurasi kaca dan dimensi mengikuti
              spesifikasi struktur proyek — konsultasikan shop drawing bersama
              tim teknis TOSTEM Studio Alam Sutera.
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
