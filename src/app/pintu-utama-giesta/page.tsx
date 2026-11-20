import type { Metadata } from "next";
import Image from "next/image";
import ProductLandingShell from "@/components/ProductLandingShell";
import GiestaSubProductExplorer from "@/components/GiestaSubProductExplorer";
import {
  GIESTA_FEATURES,
  GIESTA_PERFORMANCE_ROWS,
} from "@/data/giesta-catalog";

export const metadata: Metadata = {
  title:
    "Pintu Utama Aluminium GIESTA TOSTEM | 10 Model & Simulasi Warna Online — Alam Sutera",
  description:
    "Eksplorasi lengkap 10 model Pintu Utama TOSTEM GIESTA (P01–P03, D01–D03, G01–G04) beserta simulasi warna motif kayu & metalik online, sistem 2 kunci 3 kait, dan performa JIS S-2 1.200 Pa di TOSTEM Studio Alam Sutera.",
  alternates: {
    canonical: "https://tostemlitech.com/pintu-utama-giesta",
  },
  openGraph: {
    title:
      "Pintu Utama Aluminium GIESTA TOSTEM | 10 Model & Simulasi Warna Online",
    description:
      "Coba 10 model dan hingga 8 pilihan warna motif kayu & metalik pintu utama GIESTA secara langsung. Authorized Dealer TOSTEM Indonesia — PT Litech Alglassindo.",
    url: "https://tostemlitech.com/pintu-utama-giesta",
    images: [{ url: "/images/series-giesta.webp", width: 1200, height: 800 }],
  },
};

export default function PintuUtamaGiestaPage() {
  return (
    <ProductLandingShell
      currentPath="/pintu-utama-giesta"
      eyebrow="TOSTEM GIESTA · PINTU UTAMA PREMIUM"
      title="Pintu Utama GIESTA. Estetika Kayu dengan Ketahanan Baja & Aluminium Jepang."
      subtitle="Hadirkan kesan pertama yang hangat, modern, dan aman pada fasad rumah Anda — eksplorasi 10 model desain (P01–P03, D01–D03, G01–G04) dengan simulasi warna langsung, perlindungan anti rayap, serta sistem keamanan 2 kunci 3 kait sabit."
      heroImage="/images/series-giesta.webp"
      heroAlt="Pintu utama aluminium motif kayu TOSTEM GIESTA"
      defaultInterest="Pintu utama GIESTA"
    >
      {/* 1. Ringkasan 4 Angka Kunci GIESTA */}
      <section className="section container lp-spec-section">
        <div className="grants-metrics">
          <div className="grants-metric">
            <strong>10 Model</strong>
            <span>Pilihan desain P-Series (3), D-Series (3) &amp; G-Series (4)</span>
          </div>
          <div className="grants-metric">
            <strong>101,6 mm</strong>
            <span>Kedalaman kusen kokoh dengan inti panel baja berinsulasi</span>
          </div>
          <div className="grants-metric">
            <strong>1.200 Pa</strong>
            <span>Ketahanan angin JIS S-2 / ASTM &amp; kedap air W-2 (150 Pa)</span>
          </div>
          <div className="grants-metric">
            <strong>2 Kunci 3 Kait</strong>
            <span>Double lock + triple sickle latches, reversible key &amp; anti-pinch</span>
          </div>
        </div>

        {/* 2. 6 Fitur Rekayasa Utama GIESTA */}
        <div className="lp-section-head grants-features-head">
          <p className="eyebrow">KEUNGGULAN KEAMANAN &amp; KENYAMANAN GIESTA</p>
          <h2>Dirancang untuk melindungi keluarga dari cuaca tropis, rayap, hingga upaya pembobolan.</h2>
        </div>

        <div className="grants-features-grid">
          {GIESTA_FEATURES.map((feature) => (
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

      {/* 3. Explorer & Simulator 10 Model GIESTA (1 Halaman Tanpa Pindah Route) */}
      <section className="grants-catalog-band">
        <div className="container">
          <div className="lp-section-head">
            <p className="eyebrow">KATALOG &amp; SIMULASI WARNA · 10 MODEL GIESTA</p>
            <h2>Pilih seri desain dan coba warna motif kayu atau metalik secara langsung dalam satu halaman.</h2>
          </div>
          <GiestaSubProductExplorer />
        </div>
      </section>

      {/* 4. Data Performa Resmi JIS/ASTM + Spesifikasi Profil */}
      <section className="section container lp-spec-section">
        <div className="lp-section-head">
          <p className="eyebrow">DATA PERFORMA RESMI · STANDAR JIS &amp; ASTM</p>
          <h2>Kekokohan pintu utama teruji untuk iklim tropis dan hunian modern.</h2>
        </div>

        <div className="grants-table-wrap">
          <table className="grants-table">
            <thead>
              <tr>
                <th>Tipe Bukaan GIESTA</th>
                <th>Ketahanan Angin</th>
                <th>Kedap Air</th>
                <th>Kedap Udara</th>
                <th>Insulasi Suara</th>
              </tr>
            </thead>
            <tbody>
              {GIESTA_PERFORMANCE_ROWS.map((row) => (
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
            <p className="eyebrow">DIMENSI KUSEN &amp; AMBANG</p>
            <h3>Spesifikasi Profil GIESTA</h3>
            <dl className="lp-dl">
              <div>
                <dt>Kedalaman Kusen</dt>
                <dd>101,6 mm</dd>
              </div>
              <div>
                <dt>Ambang Out-Swing</dt>
                <dd>50 mm (kedap air W-2: 150 Pa · udara A-4)</dd>
              </div>
              <div>
                <dt>Ambang In-Swing</dt>
                <dd>Luar 30 mm / dalam 14 mm</dd>
              </div>
            </dl>
          </div>

          <div className="lp-spec-box">
            <p className="eyebrow">GARANSI &amp; FINISHING RESMI</p>
            <h3>Motif Kayu &amp; Metalik Tahan Cuaca</h3>
            <dl className="lp-dl">
              <div>
                <dt>Garansi Sistem &amp; Komponen</dt>
                <dd>5 Tahun resmi TOSTEM Indonesia</dd>
              </div>
              <div>
                <dt>Garansi Warna (Discoloration)</dt>
                <dd>10 Tahun (sumber: katalog 2025, hlm. 131–139)</dd>
              </div>
              <div>
                <dt>Catatan Sampel Fisik</dt>
                <dd>
                  Warna layar hanya ilustrasi. Lihat sampel motif kayu &amp;
                  metalik asli di TOSTEM Studio Alam Sutera.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </ProductLandingShell>
  );
}
