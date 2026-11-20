"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { giestaSimulatorColors } from "@/data/giesta-colors";
import {
  GIESTA_COLOR_HEX,
  GIESTA_DETAIL_GROUPS,
  GIESTA_METALLIC_COLORS,
  GIESTA_SIM_GROUPS,
  GIESTA_WOOD_COLORS,
  PRODUCT_CATEGORIES,
  PRODUCT_SERIES,
  STANDARD_COLORS,
  STANDARD_COLOR_HEX,
  WHATSAPP_NUMBER,
} from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

export function GiestaSimulator() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [model, setModel] = useState("P01");
  const [colorCode, setColorCode] = useState("BC");
  const refCode = useRefCode();

  const swatches = giestaSimulatorColors[model];
  const activeSwatch = swatches.find((s) => s.code === colorCode) ?? swatches[0];

  const selectModel = (nextModel: string) => {
    setModel(nextModel);
    if (!giestaSimulatorColors[nextModel].some((s) => s.code === colorCode)) {
      setColorCode("BC");
    }
  };

  const baseWhatsappText = `Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi pintu GIESTA model ${model} warna ${activeSwatch.name} di TOSTEM Studio Alam Sutera. Mohon informasi estimasi dan ketersediaan display. Terima kasih.`;
  const whatsappText = refCode
    ? `${baseWhatsappText} [Ref: ${refCode}]`
    : baseWhatsappText;

  return (
    <section className="giesta-sim" aria-label="Simulator warna GIESTA">
      <header className="sim-heading">
        <p className="eyebrow">GIESTA · SIMULASI WARNA</p>
        <h3>Temukan karakter pintu Anda.</h3>
        <p>
          Pilih desain, coba warnanya, lalu diskusikan pilihan Anda dengan
          studio.
        </p>
      </header>

      <div className="sim-layout">
        <div className="sim-models">
          <h4>01 / Pilih desain</h4>
          <div className="sim-tabs" aria-label="Gaya pintu">
            {GIESTA_SIM_GROUPS.map((group, idx) => (
              <button
                key={group.name}
                aria-pressed={groupIndex === idx}
                onClick={() => {
                  setGroupIndex(idx);
                  selectModel(group.models[0]);
                }}
              >
                {group.name}
              </button>
            ))}
          </div>
          <div className="sim-cards">
            {GIESTA_SIM_GROUPS[groupIndex].models.map((m) => (
              <button
                key={m}
                aria-pressed={model === m}
                onClick={() => selectModel(m)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/giesta/${m}-BC.png`}
                  width={90}
                  height={150}
                  loading="lazy"
                  decoding="async"
                  alt={`Desain pintu ${m}`}
                />
                <span>{m}</span>
              </button>
            ))}
          </div>
        </div>

        <figure className="sim-preview">
          <div className="sim-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeSwatch.image}
              src={activeSwatch.image}
              alt={`Simulasi pintu GIESTA ${model} warna ${activeSwatch.name}`}
              width={299}
              height={509}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption aria-live="polite">
            <strong>GIESTA {model}</strong>
            <span>{activeSwatch.name}</span>
          </figcaption>
          <p>Tampak luar · Pintu tunggal · Visual tanpa handle</p>
        </figure>

        <div className="sim-options">
          <h4>02 / Pilih warna</h4>
          <p>
            {swatches.length} pilihan warna untuk {model}
          </p>
          <div className="sim-swatches">
            {swatches.map((swatch) => (
              <button
                key={swatch.code}
                aria-pressed={activeSwatch.code === swatch.code}
                onClick={() => setColorCode(swatch.code)}
              >
                <span className="sim-swatch-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={swatch.image}
                    alt=""
                    width={40}
                    height={65}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span>{swatch.name}</span>
                {activeSwatch.code === swatch.code && (
                  <span aria-hidden="true">✓</span>
                )}
              </button>
            ))}
          </div>
          <a
            className="button dark"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("product-choice", {
                  detail: {
                    series: `GIESTA ${model}`,
                    color: activeSwatch.name,
                  },
                })
              );
              pushDataLayerEvent("whatsapp_click", {
                cta_location: "giesta_simulator",
                product_series: `GIESTA ${model}`,
                product_color: activeSwatch.name,
                conversion_tier: "secondary",
              });
            }}
          >
            <span>Konsultasikan pilihan ini</span>
            <ArrowUpRight size={17} />
          </a>
          <Link href="/pintu-utama-giesta" className="text-link detail-lp-link">
            <span>Buka halaman lengkap Pintu Utama GIESTA</span>
            <ArrowRight size={16} />
          </Link>
          <p className="sim-disclaimer">
            Pilihan warna mengikuti simulator GIESTA. Warna layar dapat berbeda
            dari produk asli. Konfirmasikan finishing, handle dan ketersediaan
            dengan Studio Alam Sutera.
          </p>
          <details className="detail-spec">
            <summary>Spesifikasi &amp; performa seri</summary>
            <p>
              Kedalaman kusen 101,6 mm. Ambang out-swing 50 mm; in-swing 30 mm
              di luar / 14 mm di dalam.
            </p>
            <p>
              Angin S-2: 1.200 Pa · Air W-2: 150 Pa · Udara A-4. Performa
              mengikuti konfigurasi yang diuji; konfirmasikan kesesuaian model
              sebelum pemesanan.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default function ProductExplorer() {
  const [giestaModel, setGiestaModel] = useState("P01");
  const [isDesktop, setIsDesktop] = useState(false);
  const refCode = useRefCode();

  useEffect(() => {
    const mq = window.matchMedia("(min-width:1000px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const [seriesIndex, setSeriesIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Natural Black");

  const activeSeries = PRODUCT_SERIES[seriesIndex];
  const isUnverifiedModel = ["D04", "G05", "C01"].includes(giestaModel);
  const allGiestaColors = [...GIESTA_WOOD_COLORS, ...GIESTA_METALLIC_COLORS];

  const availableColors: string[] =
    activeSeries.name === "GIESTA"
      ? isUnverifiedModel
        ? []
        : [
            ...GIESTA_WOOD_COLORS,
            ...(["P01", "P02", "P03", "G02", "G03", "G04"].includes(giestaModel)
              ? GIESTA_METALLIC_COLORS
              : []),
          ]
      : STANDARD_COLORS.filter(
          (c) => activeSeries.name !== "IN16" || c !== "Natural Silver"
        );

  const selectSeries = (idx: number) => {
    setSeriesIndex(idx);
    setGiestaModel("P01");
    setSelectedColor(
      PRODUCT_SERIES[idx].name === "GIESTA" ? "Turin Pine" : "Natural Black"
    );
  };

  const baseWhatsappText = `Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi produk ${activeSeries.name}${activeSeries.name === "GIESTA" ? ` ${giestaModel}` : ""} warna ${selectedColor} di TOSTEM Studio Alam Sutera. Mohon informasi spesifikasi dan ketersediaan display. Terima kasih.`;
  const whatsappText = refCode
    ? `${baseWhatsappText} [Ref: ${refCode}]`
    : baseWhatsappText;

  return (
    <div className="detail-explorer">
      <div className="detail-nav">
        <div className="detail-categories" aria-label="Kategori produk">
          {PRODUCT_CATEGORIES.map((category, idx) => (
            <button
              key={category}
              aria-pressed={activeSeries.category === idx}
              onClick={() =>
                selectSeries(
                  PRODUCT_SERIES.findIndex((s) => s.category === idx)
                )
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="detail-series" aria-label="Seri produk">
          {PRODUCT_SERIES.map(
            (series, idx) =>
              series.category === activeSeries.category && (
                <button
                  key={series.name}
                  aria-pressed={seriesIndex === idx}
                  onClick={() => selectSeries(idx)}
                >
                  {series.name}
                </button>
              )
          )}
        </div>
      </div>

      {activeSeries.name === "GIESTA" ? (
        <GiestaSimulator />
      ) : (
        <div className="detail-grid" key={activeSeries.name}>
          <div className="detail-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${activeSeries.image}`}
              alt={`Referensi visual ${activeSeries.name}`}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <div className="detail-usps">
              {activeSeries.usp.map((item, idx) => {
                const [title, desc] = item.split("|");
                return (
                  <article key={item}>
                    <small>0{idx + 1}</small>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="detail-info">
            <header>
              <h3>{activeSeries.name}</h3>
              <p>{activeSeries.tag}</p>
            </header>
            <p>{activeSeries.text}</p>

            <details className="detail-spec" open={isDesktop || undefined}>
              <summary>Spesifikasi</summary>
              <dl>
                {activeSeries.spec.map((item) => {
                  const [label, value] = item.split("|");
                  return (
                    <div key={item}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  );
                })}
              </dl>
            </details>

            <details className="detail-spec" open={isDesktop || undefined}>
              <summary>Performa</summary>
              <p>{activeSeries.performance}</p>
              <small>{activeSeries.note}</small>
            </details>

            {activeSeries.name === "GIESTA" && (
              <div className="giesta-models">
                <h4>Pilih desain GIESTA</h4>
                <p>
                  14 referensi desain. Pilih model untuk melihat pilihan
                  finishing yang terdokumentasi.
                </p>
                {GIESTA_DETAIL_GROUPS.map((group) => (
                  <div key={group.name}>
                    <h5>{group.name}</h5>
                    <div className="giesta-model-grid">
                      {group.models.map((m) => (
                        <button
                          key={m}
                          aria-pressed={giestaModel === m}
                          onClick={() => {
                            setGiestaModel(m);
                            setSelectedColor(
                              ["D04", "G05", "C01"].includes(m)
                                ? "Finishing perlu dikonfirmasi"
                                : "Turin Pine"
                            );
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/images/giesta-${m.toLowerCase()}.jpg`}
                            alt={`Pintu GIESTA model ${m}`}
                            width={120}
                            height={210}
                            loading="lazy"
                          />
                          <span>{m}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <p className="model-note">
                  Model terpilih: <strong>{giestaModel}</strong>.{" "}
                  {isUnverifiedModel
                    ? "Pilihan finishing model ini belum terverifikasi dalam katalog 2025. Konsultasikan dengan studio."
                    : "Pilihan di bawah mengikuti tabel finishing model pada katalog 2025."}
                  {" Foto model merupakan referensi desain, bukan simulasi warna terpilih."}
                </p>
              </div>
            )}

            <fieldset className="detail-colors">
              <legend>
                Pilihan warna / <strong>{selectedColor}</strong>
              </legend>
              <div>
                {availableColors.map((color) => {
                  const swatchHex =
                    activeSeries.name === "GIESTA"
                      ? GIESTA_COLOR_HEX[
                          allGiestaColors.indexOf(
                            color as (typeof allGiestaColors)[number]
                          )
                        ]
                      : STANDARD_COLOR_HEX[
                          STANDARD_COLORS.indexOf(
                            color as (typeof STANDARD_COLORS)[number]
                          )
                        ];
                  return (
                    <button
                      key={color}
                      aria-pressed={selectedColor === color}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span style={{ background: swatchHex }} />
                      {color}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <a
              className="button dark detail-cta"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                const seriesLabel =
                  activeSeries.name === "GIESTA"
                    ? `GIESTA ${giestaModel}`
                    : activeSeries.name;
                window.dispatchEvent(
                  new CustomEvent("product-choice", {
                    detail: {
                      series: seriesLabel,
                      color: selectedColor,
                    },
                  })
                );
                pushDataLayerEvent("whatsapp_click", {
                  cta_location: "product_explorer",
                  product_series: seriesLabel,
                  product_color: selectedColor,
                  conversion_tier: "secondary",
                });
              }}
            >
              <span>
                Konsultasikan {activeSeries.name}
                {activeSeries.name === "GIESTA" ? ` ${giestaModel}` : ""} ·{" "}
                {selectedColor}
              </span>
              <ArrowUpRight size={17} />
            </a>
            <Link
              href={activeSeries.landingHref}
              className="text-link detail-lp-link"
            >
              <span>Lihat halaman lengkap {activeSeries.name}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <p className="product-note">
        Foto seri bersumber dari TOSTEM Product Summary 2025; spesifikasi dari
        Product Catalog 2025. Nilai performa mengikuti tipe, ukuran, kaca dan
        konfigurasi pengujian, bukan jaminan setiap pemasangan. Warna layar
        hanya ilustrasi dan dapat berbeda dari sampel fisik. Konfirmasikan
        sampel, konfigurasi dan ketersediaan kepada TOSTEM studio.
      </p>
    </div>
  );
}
