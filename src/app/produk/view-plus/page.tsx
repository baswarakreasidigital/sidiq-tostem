import type { Metadata } from "next";
import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import ViewSubProductExplorer from "@/components/ViewSubProductExplorer";
import { VIEW_FEATURES, VIEW_PERFORMANCE_ROWS } from "@/data/view-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export const metadata: Metadata = {
  title:
    "TOSTEM VIEW / VIEW Plus Series | 18 Tipe Jendela & Pintu Kaca Ganda — Alam Sutera",
  description:
    "Eksplorasi lengkap 18 tipe TOSTEM VIEW & VIEW Plus: Sliding Window, Casement, Awning, Fixed, Corner Fixed, Louver, Sliding Door hingga tinggi 3 meter, serta Swing Door. Pilihan kaca tunggal 5–8 mm (850 Pa) dan kaca ganda 28 mm (1.600 Pa) di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/view-plus",
  },
  openGraph: {
    title:
      "TOSTEM VIEW / VIEW Plus Series | 18 Tipe Jendela & Pintu — Studio Alam Sutera",
    description:
      "Pandangan terbuka dengan pilihan kaca tunggal (VIEW · 850 Pa) dan kaca ganda 28 mm untuk insulasi suara & efisiensi energi (VIEW Plus · 1.600 Pa).",
    url: "https://tostemlitech.com/produk/view-plus",
    images: [{ url: "/images/series-view.webp", width: 1200, height: 800 }],
  },
};

export default function ViewPlusProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/view-plus"
      eyebrow="TOSTEM VIEW & VIEW PLUS · VISIBILITAS & INSULASI ENERGI"
      title="TOSTEM VIEW / VIEW Plus. Pandangan Terbuka, Ruang Lebih Nyaman."
      subtitle="Dirancang untuk menikmati pemandangan dengan bukaan hingga tinggi 3 meter — tersedia dalam 18 tipe konfigurasi dengan pilihan kaca tunggal standar JIS (VIEW · 850 Pa) hingga kaca ganda 28 mm untuk hemat energi dan redam suara (VIEW Plus · 1.600 Pa)."
      heroImage="/images/series-view.webp"
      heroAlt="Sistem jendela dan pintu aluminium TOSTEM VIEW dan VIEW Plus Series"
      defaultInterest="Jendela kedap suara (ATIS / VIEW Plus / WE 70)"
    >
      {/* 1. Ringkasan 4 Angka Kunci VIEW / VIEW Plus */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>18 Tipe</strong>
            <span>Konfigurasi Window (9), Sliding Door (5) &amp; Swing Door (4)</span>
          </div>
          <div className="grants-metric">
            <strong>Hingga 28 mm</strong>
            <span>Kaca ganda VIEW Plus (8 + 12 + 8 mm) · Kaca VIEW 5, 6, 8 mm</span>
          </div>
          <div className="grants-metric">
            <strong>850 / 1.600 Pa</strong>
            <span>Ketahanan tekanan angin VIEW (850 Pa) &amp; VIEW Plus (1.600 Pa)</span>
          </div>
          <div className="grants-metric">
            <strong>Tinggi 3 m</strong>
            <span>Opsi bukaan pintu geser hingga 3.000 mm · kusen 72 / 104 mm</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama VIEW / VIEW Plus */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN REKAYASA VIEW / VIEW PLUS</p>
          <h2>Detail presisi untuk ketenangan, keamanan, dan efisiensi energi jangka panjang.</h2>
        </div>

        <div className="grants-features-grid">
          {VIEW_FEATURES.map((feature) => (
            <article key={feature.id} className="grants-feature-card">
              <div className="grants-feature-media">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={862}
                  height={660}
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

      {/* 3. Explorer 18 Sub-Produk VIEW / VIEW Plus (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 18 SUB-PRODUK VIEW / VIEW PLUS</p>
            <h2>Eksplorasi seluruh tipe jendela, pintu geser, dan pintu ayun dalam satu halaman.</h2>
          </div>
          <ViewSubProductExplorer />
        </div>
      </section>

      {/* 4. Perbandingan VIEW vs VIEW Plus + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">PERBANDINGAN VIEW VS VIEW PLUS · KATALOG RESMI</p>
          <h2>Pilih tingkat kaca dan ketahanan angin sesuai orientasi dan kebutuhan ruang Anda.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian Seri</th>
                <th>Kedalaman Kusen</th>
                <th>Spesifikasi Kaca</th>
                <th>Ketahanan Angin</th>
                <th>Keunggulan Utama</th>
              </tr>
            </thead>
            <tbody>
              {VIEW_PERFORMANCE_ROWS.map((row) => (
                <tr key={row.variant}>
                  <td>
                    <strong>{row.variant}</strong>
                  </td>
                  <td>{row.frame}</td>
                  <td>{row.glass}</td>
                  <td>{row.wind}</td>
                  <td>{row.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lp-spec-grid">
          <div className="lp-spec-box">
            <p className="eyebrow">DIMENSI KUSEN &amp; KACA</p>
            <h3>Spesifikasi Profil VIEW / VIEW Plus</h3>
            <dl className="lp-dl">
              <div>
                <dt>Kedalaman Kusen</dt>
                <dd>72 mm · 104 mm (3 tracks sliding door)</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca VIEW</dt>
                <dd>5, 6, 8 mm (single glass)</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca VIEW Plus</dt>
                <dd>28 mm (8 mm + rongga udara 12 mm + 8 mm · insulated double glass)</dd>
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
              Lapisan TEXGUARD menjaga kilau warna minimal 40 tahun, tahan
              gores, dan mudah dibersihkan. VIEW dan VIEW Plus memiliki
              spesifikasi berbeda (sumber: katalog 2025, hlm. 95–97).
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
