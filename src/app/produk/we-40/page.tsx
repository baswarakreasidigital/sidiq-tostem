import type { Metadata } from "next";
import ProductLandingShell from "@/components/ProductLandingShell";
import We40SubProductExplorer from "@/components/We40SubProductExplorer";
import { WE40_PERFORMANCE_ROWS, WE40_USP_CARDS } from "@/data/we40-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export const metadata: Metadata = {
  title: "TOSTEM WE 40 Series | Jendela Pre-Engineered 41 mm",
  description:
    "Eksplorasi 5 tipe jendela TOSTEM WE 40 berprofil ramping 41 mm dan standar JIS 500 Pa untuk perumahan, cluster, dan renovasi di Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/we-40",
  },
  openGraph: {
    title: "TOSTEM WE 40 Series | Jendela Pre-Engineered 41 mm",
    description:
      "Kualitas TOSTEM untuk keseharian dan proyek residensial: profil ramping 41 mm, standar JIS 500 Pa, dan 5 konfigurasi jendela lengkap.",
    url: "https://tostemlitech.com/produk/we-40",
    images: [{ url: "/images/series-we40.webp", width: 971, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOSTEM WE 40 Series | Jendela Pre-Engineered 41 mm",
    description:
      "5 tipe jendela aluminium pre-engineered 41 mm standar JIS 500 Pa di Studio Alam Sutera.",
    images: [{ url: "/images/series-we40.webp", width: 971, height: 1200 }],
  },
};

export default function We40ProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/we-40"
      eyebrow="TOSTEM WE 40 SERIES · KUALITAS STANDAR JEPANG UNTUK KESEHARIAN"
      title="TOSTEM WE 40. Presisi Pabrikan untuk Hunian & Proyek Residensial."
      subtitle="Menghadirkan kualitas pre-engineered TOSTEM dengan profil ramping 41 mm dan standar pengujian JIS — mencakup 5 tipe jendela (Single Sliding, Center Sliding FSSF, Casement, Awning, dan Fixed Window) yang efisien untuk perumahan, cluster, maupun renovasi menyeluruh."
      heroImage="/images/series-we40.webp"
      heroAlt="Jendela aluminium TOSTEM WE 40 Series pada ruang keluarga modern"
      defaultInterest="Jendela & pintu"
    >
      {/* 1. Ringkasan 4 Angka Kunci WE 40 */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>5 Tipe</strong>
            <span>Single Sliding, Center Sliding FSSF, Casement, Awning &amp; Fixed</span>
          </div>
          <div className="grants-metric">
            <strong>41 mm</strong>
            <span>Kedalaman kusen ramping dengan tinggi ambang bawah 35 mm</span>
          </div>
          <div className="grants-metric">
            <strong>500 Pa</strong>
            <span>Ketahanan angin JIS A 1515 (hingga 800 Pa) &amp; air W-1: 100 Pa</span>
          </div>
          <div className="grants-metric">
            <strong>5–6 mm</strong>
            <span>Ketebalan kaca dengan glazing channel / glazing bead presisi</span>
          </div>
        </div>

        {/* 2. 3 Keunggulan Utama WE 40 */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN SERI WE 40</p>
          <h2>Standar mutu pabrikan TOSTEM yang efisien untuk pengadaan hunian maupun proyek.</h2>
        </div>

        <div className="lp-usp-grid">
          {WE40_USP_CARDS.map((card) => (
            <article key={card.index} className="lp-usp-card">
              <span className="lp-index">{card.index}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Explorer 5 Sub-Produk WE 40 (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 5 SUB-PRODUK WE 40</p>
            <h2>Eksplorasi seluruh tipe jendela WE 40 beserta rentang ukuran katalog dalam satu halaman.</h2>
          </div>
          <We40SubProductExplorer />
        </div>
      </section>

      {/* 4. Data Performa Resmi JIS + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · STANDAR JIS (KATALOG 2025, HLM. 94–95)</p>
          <h2>Performa cuaca terukur untuk kenyamanan hunian bertingkat rendah.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian WE 40</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {WE40_PERFORMANCE_ROWS.map((row) => (
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
            <h3>Spesifikasi Profil WE 40</h3>
            <dl className="lp-dl">
              <div>
                <dt>Kedalaman Kusen</dt>
                <dd>41 mm</dd>
              </div>
              <div>
                <dt>Tinggi Ambang Bawah</dt>
                <dd>35 mm</dd>
              </div>
              <div>
                <dt>Ketebalan Kaca</dt>
                <dd>5, 6 mm (glazing channel / glazing bead untuk Fixed Window)</dd>
              </div>
            </dl>
          </div>

          <div className="lp-spec-box">
            <p className="eyebrow">PILIHAN WARNA ANODIZED TEXGUARD</p>
            <h3>6 Warna Resmi TOSTEM</h3>
            <p className="lp-note" style={{ marginTop: 0, marginBottom: 16 }}>
              Lapisan TEXGUARD menjaga kilau warna minimal 40 tahun, tahan
              gores, dan mudah dibersihkan. Sumber spesifikasi: TOSTEM Product
              Catalog 2025, hlm. 94–95.
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
