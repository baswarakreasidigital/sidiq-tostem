import type { Metadata } from "next";
import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import We70SubProductExplorer from "@/components/We70SubProductExplorer";
import { WE70_FEATURES, WE70_PERFORMANCE_ROWS } from "@/data/we70-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export const metadata: Metadata = {
  title: "TOSTEM WE 70 Series | 26 Tipe Jendela & Pintu",
  description:
    "Eksplorasi 26 tipe TOSTEM WE 70: Sliding, Casement, Louver, Airflow Door, hingga Folding Door berstandar JIS Jepang di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/we-70",
  },
  openGraph: {
    title: "TOSTEM WE 70 Series | 26 Tipe Jendela & Pintu",
    description:
      "Pilihan terlengkap jendela dan pintu aluminium TOSTEM untuk hunian sehari-hari: 26 konfigurasi termasuk Folding Door & Airflow Door.",
    url: "https://tostemlitech.com/produk/we-70",
    images: [{ url: "/images/series-we70.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM WE 70 Series | 26 Tipe Jendela & Pintu",
    description:
      "26 tipe jendela dan pintu aluminium TOSTEM WE 70 berstandar JIS Jepang di Studio Alam Sutera.",
    images: [{ url: "/images/series-we70.webp", width: 1200, height: 800 }],
  },
};

export default function We70ProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/we-70"
      eyebrow="TOSTEM WE 70 SERIES · KUALITAS JEPANG UNTUK KESEHARIAN"
      title="TOSTEM WE 70. Pilihan Terlengkap untuk Seluruh Ruang Rumah."
      subtitle="Menghadirkan standar kualitas pre-engineered TOSTEM dengan ragam konfigurasi terbanyak — 26 tipe mulai dari jendela geser, casement, louver, pintu geser, pintu ayun, Airflow Door, hingga Folding Door anti-jepit jari."
      heroImage="/images/series-we70.webp"
      heroAlt="Sistem jendela dan pintu aluminium TOSTEM WE 70 Series"
      defaultInterest="Jendela kedap suara (ATIS / VIEW Plus / WE 70)"
    >
      {/* 1. Ringkasan 4 Angka Kunci WE 70 */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>26 Tipe</strong>
            <span>Konfigurasi Window, Sliding, Swing, Airflow &amp; Folding Door</span>
          </div>
          <div className="grants-metric">
            <strong>72 / 104 mm</strong>
            <span>Kedalaman kusen ringkas (2 rel &amp; 3 rel) dengan ambang 35 mm</span>
          </div>
          <div className="grants-metric">
            <strong>500–800 Pa</strong>
            <span>Ketahanan angin standar JIS A 1515 &amp; kedap air W-2 (150 Pa)</span>
          </div>
          <div className="grants-metric">
            <strong>Hingga 16P</strong>
            <span>Opsi Folding Door hinge-less anti-jepit jari hingga lebar 12 m</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama WE 70 */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN FUNGSIONAL WE 70</p>
          <h2>Detail praktis yang dirancang untuk pemakaian harian jangka panjang.</h2>
        </div>

        <div className="grants-features-grid">
          {WE70_FEATURES.map((feature) => (
            <article key={feature.id} className="grants-feature-card">
              <div className="grants-feature-media">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={891}
                  height={680}
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

      {/* 3. Explorer 26 Sub-Produk WE 70 (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 26 SUB-PRODUK WE 70</p>
            <h2>Eksplorasi seluruh tipe jendela, pintu geser, swing, airflow &amp; folding door dalam satu halaman.</h2>
          </div>
          <We70SubProductExplorer />
        </div>
      </section>

      {/* 4. Data Performa Resmi + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · STANDAR JIS</p>
          <h2>Keseimbangan performa cuaca dan efisiensi untuk hunian modern.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian WE 70</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {WE70_PERFORMANCE_ROWS.map((row) => (
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
            <h3>Spesifikasi Profil WE 70</h3>
            <dl className="lp-dl">
              <div>
                <dt>Ketebalan Kusen</dt>
                <dd>72 mm · 104 mm (3 tracks sliding)</dd>
              </div>
              <div>
                <dt>Tinggi Ambang Bawah</dt>
                <dd>35 mm (opsi floor finish &amp; flat sill untuk Folding Door)</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca</dt>
                <dd>5, 6, 8 mm (glazing channel / glazing bead sesuai tipe)</dd>
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
