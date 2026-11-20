import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import GrantsSubProductExplorer from "@/components/GrantsSubProductExplorer";
import {
  GRANTS_FEATURES,
  GRANTS_PERFORMANCE_ROWS,
} from "@/data/grants-catalog";
import { STANDARD_COLORS, STANDARD_COLOR_HEX } from "@/data/products";

export default function GrantsLandingContent({
  currentPath = "/produk/grants",
}: {
  currentPath?: string;
}) {
  return (
    <ProductLandingShell
      currentPath={currentPath}
      eyebrow="TOSTEM GRANTS SERIES · FLAGSHIP WINDOWS & DOORS"
      title="TOSTEM GRANTS. Kesempurnaan Pintu & Jendela Panorama."
      subtitle="Seri flagship aluminium pre-engineered Jepang untuk memaksimalkan bidang kaca dan cahaya alami. Tersedia dalam 21 tipe konfigurasi lengkap — mulai dari Window, Door, Flat Rail hingga tinggi 4,5 meter, sampai Corner Sliding tanpa tiang sudut — untuk hunian low-rise (GRANTS) maupun high-rise (GRANTS PLUS)."
      heroImage="/images/series-grants.webp"
      heroAlt="Sistem pintu dan jendela panorama TOSTEM GRANTS Series"
      defaultInterest="Pintu sliding GRANTS"
    >
      {/* 1. Ringkasan 4 Angka Kunci GRANTS */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>4,5 m</strong>
            <span>Tinggi maksimal Flat Rail Sliding Door (lebar hingga 12 m)</span>
          </div>
          <div className="grants-metric">
            <strong>2.000 Pa</strong>
            <span>Ketahanan angin GRANTS PLUS (ASTM E330) &amp; Air 300 Pa</span>
          </div>
          <div className="grants-metric">
            <strong>31,5 mm</strong>
            <span>Kapasitas ketebalan kaca (Single &amp; Double / Insulated Glass)</span>
          </div>
          <div className="grants-metric">
            <strong>40 Tahun</strong>
            <span>Ketahanan kilau warna lapisan anodized TEXGUARD</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama GRANTS dengan Foto Resmi */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">INOVASI &amp; DETAIL REKAYASA GRANTS</p>
          <h2>Dirancang untuk pandangan maksimal dan kenyamanan jangka panjang.</h2>
        </div>

        <div className="grants-features-grid">
          {GRANTS_FEATURES.map((feature) => (
            <article key={feature.id} className="grants-feature-card">
              <div className="grants-feature-media">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={861}
                  height={659}
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

      {/* 3. Explorer 21 Sub-Produk GRANTS (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG LENGKAP · 21 SUB-PRODUK GRANTS</p>
            <h2>Eksplorasi seluruh tipe jendela, pintu, flat rail &amp; corner sliding dalam satu halaman.</h2>
          </div>
          <GrantsSubProductExplorer />
        </div>
      </section>

      {/* 4. Perbandingan GRANTS vs GRANTS PLUS + Spesifikasi & Warna */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · GRANTS VS GRANTS PLUS</p>
          <h2>Dua standar performa untuk hunian low-rise (JIS) maupun bangunan bertingkat (ASTM).</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Varian GRANTS</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {GRANTS_PERFORMANCE_ROWS.map((row) => (
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
            <h3>Spesifikasi Profil GRANTS</h3>
            <dl className="lp-dl">
              <div>
                <dt>Ketebalan Kusen</dt>
                <dd>
                  101,6 mm (Window &amp; Out-Swing) · 120 mm (Sliding 2 rel) ·
                  178 mm (Sliding 3 rel)
                </dd>
              </div>
              <div>
                <dt>Tinggi Ambang Bawah</dt>
                <dd>50 mm (General) · Opsi Flat Rail rata lantai (trip-free)</dd>
              </div>
              <div>
                <dt>Kapasitas Kaca</dt>
                <dd>
                  Hingga 31,5 mm (mendukung Single Glass &amp; Double /
                  Insulated Glass)
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
