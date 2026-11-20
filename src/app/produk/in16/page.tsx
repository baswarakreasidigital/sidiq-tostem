import type { Metadata } from "next";
import ProductLandingShell from "@/components/ProductLandingShell";
import In16SubProductExplorer from "@/components/In16SubProductExplorer";
import { IN16_COMPARISON_ROWS, IN16_USP_CARDS } from "@/data/in16-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

const IN16_COLORS = STANDARD_COLORS.filter((c) => c !== "Natural Silver");

export const metadata: Metadata = {
  title:
    "TOSTEM IN16 Interior Series | 11 Tipe Hanging Door, Swing Door & Partition — Alam Sutera",
  description:
    "Eksplorasi lengkap 11 tipe sistem pintu & partisi interior TOSTEM IN16: Hanging Door tanpa rel bawah (1–4 rel), Swing Door 16 mm, Fixed Divider, hingga Partition Door 2–6 panel. Hardware tersembunyi di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/produk/in16",
  },
  openGraph: {
    title:
      "TOSTEM IN16 Interior Series | 11 Tipe Pintu & Partisi Interior — Studio Alam Sutera",
    description:
      "Profil minimal 16 mm dengan concealed hardware dan flush glazing channel untuk transisi ruang interior yang halus dan terbuka.",
    url: "https://tostemlitech.com/produk/in16",
    images: [{ url: "/images/series-in16.webp", width: 1200, height: 800 }],
  },
};

export default function In16ProductPage() {
  return (
    <ProductLandingShell
      currentPath="/produk/in16"
      eyebrow="TOSTEM IN16 INTERIOR SERIES · PROFIL MINIMAL 16 MM"
      title="TOSTEM IN16. Ruang Terhubung dengan Halus dan Minimalis."
      subtitle="Seri interior terbaru TOSTEM dengan garis profil 16 mm, flush glazing channel, dan hardware tersembunyi — mencakup 11 tipe konfigurasi mulai dari IN16 Hanging Door, Swing Door, Fixed Divider, hingga Hanging & Partition Door untuk pembagian ruang yang mengalir."
      heroImage="/images/series-in16.webp"
      heroAlt="Sistem pintu dan partisi interior aluminium TOSTEM IN16 Series"
      defaultInterest="Pintu interior IN16"
    >
      {/* 1. Ringkasan 4 Angka Kunci IN16 */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>11 Tipe</strong>
            <span>IN16 Innovations (3), Hanging Door (4) &amp; Partition Door (4)</span>
          </div>
          <div className="grants-metric">
            <strong>16 mm</strong>
            <span>Profil bingkai, panel &amp; handle ultra-ramping tanpa sekrup terlihat</span>
          </div>
          <div className="grants-metric">
            <strong>Floor-Free</strong>
            <span>Opsi Hanging Door tanpa rel bawah untuk lantai rata tanpa hambatan</span>
          </div>
          <div className="grants-metric">
            <strong>5–10 mm</strong>
            <span>Dukungan kaca tunggal 5–10 mm &amp; kaca laminasi 3+3 / 4+4 mm</span>
          </div>
        </div>

        {/* 2. 3 Keunggulan Desain IN16 */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN DESAIN INTERIOR IN16</p>
          <h2>Bentuk dan fungsi dalam keseimbangan visual yang bersih.</h2>
        </div>

        <div className="lp-usp-grid">
          {IN16_USP_CARDS.map((card) => (
            <article key={card.index} className="lp-usp-card">
              <span className="lp-index">{card.index}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Explorer 11 Sub-Produk IN16 & Interior (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 11 SUB-PRODUK INTERIOR &amp; IN16</p>
            <h2>Eksplorasi seluruh tipe Hanging Door, Swing Door, Fixed Divider, dan Partition Door dalam satu halaman.</h2>
          </div>
          <In16SubProductExplorer />
        </div>
      </section>

      {/* 4. Perbandingan Sistem Interior + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">PERBANDINGAN SISTEM INTERIOR · KATALOG RESMI</p>
          <h2>Pilih mekanisme bukaan yang paling sesuai dengan denah dan karakter ruangan Anda.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Sistem Interior</th>
                <th>Kedalaman Kusen / Rel</th>
                <th>Sistem Ambang Bawah</th>
                <th>Spesifikasi Kaca</th>
              </tr>
            </thead>
            <tbody>
              {IN16_COMPARISON_ROWS.map((row) => (
                <tr key={row.system}>
                  <td>
                    <strong>{row.system}</strong>
                  </td>
                  <td>{row.frame}</td>
                  <td>{row.sill}</td>
                  <td>{row.glass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lp-spec-grid">
          <div className="lp-spec-box">
            <p className="eyebrow">DIMENSI PROFIL &amp; GARANSI</p>
            <h3>Spesifikasi Teknis IN16</h3>
            <dl className="lp-dl">
              <div>
                <dt>Hanging Door IN16</dt>
                <dd>1–4 rel: 52 / 98 / 144 / 190 mm (tanpa rel bawah)</dd>
              </div>
              <div>
                <dt>Swing Door &amp; Fixed Divider</dt>
                <dd>Kedalaman kusen 50 mm · Profil tampak 16 mm</dd>
              </div>
              <div>
                <dt>Garansi Resmi</dt>
                <dd>Sistem &amp; perangkat 5 tahun · Warna Anodized TEXGUARD</dd>
              </div>
            </dl>
          </div>

          <div className="lp-spec-box">
            <p className="eyebrow">PILIHAN WARNA ANODIZED TEXGUARD</p>
            <h3>5 Warna Resmi Seri IN16</h3>
            <p className="lp-note" style={{ marginTop: 0, marginBottom: 16 }}>
              Produk interior tidak mencantumkan peringkat uji cuaca eksterior.
              Seri IN16 tersedia dalam 5 warna Anodized TEXGUARD yang selaras
              dengan seri eksterior TOSTEM (sumber: katalog 2025, hlm. 111–124).
            </p>
            <div className="lp-swatches">
              {IN16_COLORS.map((color) => {
                const idx = STANDARD_COLORS.indexOf(color);
                return (
                  <div key={color} className="lp-swatch">
                    <span style={{ background: STANDARD_COLOR_HEX[idx] }} />
                    <span>{color}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </ProductLandingShell>
  );
}
