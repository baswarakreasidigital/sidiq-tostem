"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import {
  GIESTA_SUBPRODUCTS,
  GIESTA_SUBPRODUCT_TABS,
  type GiestaSubProduct,
} from "@/data/giesta-catalog";
import { giestaSimulatorColors } from "@/data/giesta-colors";
import { WHATSAPP_NUMBER } from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

const GIESTA_SWATCH_HEX: Record<string, string> = {
  BC: "#C8A67D", // Turin Pine
  CB: "#8A654B", // CREA Moca
  ED: "#5C4030", // CREA Rusk
  HC: "#A66B3F", // Teak
  HB: "#4C3528", // Chestnut
  AG: "#5E5247", // Autumn Brown
  FA: "#B9BDC0", // Polish Silver
  FW: "#ECECE9", // Silky White
};

export default function GiestaSubProductExplorer() {
  const [activeTab, setActiveTab] =
    useState<GiestaSubProduct["category"]>("p-series");
  const [selectedId, setSelectedId] = useState<string>(
    GIESTA_SUBPRODUCTS[0].id
  );
  const [selectedColorCode, setSelectedColorCode] = useState<string>("HC");
  const refCode = useRefCode();

  const tabItems = GIESTA_SUBPRODUCTS.filter(
    (item) => item.category === activeTab
  );
  const activeItem =
    tabItems.find((item) => item.id === selectedId) ?? tabItems[0];

  const availableSwatches =
    giestaSimulatorColors[activeItem.modelCode] ?? giestaSimulatorColors.P01;
  const activeSwatch =
    availableSwatches.find((s) => s.code === selectedColorCode) ??
    availableSwatches[0];

  const handleTabChange = (nextTab: GiestaSubProduct["category"]) => {
    setActiveTab(nextTab);
    const firstInTab = GIESTA_SUBPRODUCTS.find((i) => i.category === nextTab);
    if (firstInTab) {
      setSelectedId(firstInTab.id);
    }
  };

  const baseMessage = `Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi Pintu Utama GIESTA ${activeItem.name} warna ${activeSwatch.name}. Mohon informasi spesifikasi, estimasi harga, dan ketersediaan display di Alam Sutera. Terima kasih.`;
  const whatsappMessage = refCode
    ? `${baseMessage} [Ref: ${refCode}]`
    : baseMessage;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const syncToConsultationForm = () => {
    window.dispatchEvent(
      new CustomEvent("product-choice", {
        detail: {
          series: `GIESTA · ${activeItem.modelCode}`,
          color: activeSwatch.name,
        },
      })
    );
  };

  return (
    <div className="grants-explorer" id="sub-produk">
      <div
        className="grants-tabs"
        role="tablist"
        aria-label="Kategori model pintu utama GIESTA"
      >
        {GIESTA_SUBPRODUCT_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
          >
            <span>{tab.label}</span>
            <small>{tab.count} model</small>
          </button>
        ))}
      </div>

      <div
        className="grants-selector-grid"
        aria-label="Pilih model pintu utama GIESTA"
      >
        {tabItems.map((item) => {
          const itemSwatches =
            giestaSimulatorColors[item.modelCode] ?? giestaSimulatorColors.P01;
          const thumbSwatch =
            itemSwatches.find((s) => s.code === selectedColorCode) ??
            itemSwatches[0];
          return (
            <button
              key={item.id}
              type="button"
              className="grants-selector-card"
              aria-pressed={activeItem.id === item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <div className="grants-selector-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbSwatch.image}
                  alt={`TOSTEM GIESTA ${item.name}`}
                  width={180}
                  height={150}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span>{item.shortName}</span>
            </button>
          );
        })}
      </div>

      <article className="grants-detail-stage" aria-live="polite">
        <div className="grants-detail-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={activeSwatch.image}
            src={activeSwatch.image}
            alt={`Simulasi TOSTEM GIESTA ${activeItem.name} warna ${activeSwatch.name}`}
            width={800}
            height={700}
            loading="lazy"
            decoding="async"
          />
          <p className="grants-media-caption">
            Simulasi {activeItem.name} · Warna {activeSwatch.name} (klik warna di
            samping untuk ganti pratinjau langsung)
          </p>
        </div>

        <div className="grants-detail-copy">
          <p className="eyebrow">
            TOSTEM GIESTA ·{" "}
            {GIESTA_SUBPRODUCT_TABS.find((t) => t.id === activeItem.category)
              ?.label.toUpperCase()}
          </p>
          <h3>{activeItem.name}</h3>
          <p className="grants-detail-summary">{activeItem.summary}</p>

          <dl className="lp-dl grants-dl">
            <div>
              <dt>Kedalaman Kusen</dt>
              <dd>{activeItem.frameDepth}</dd>
            </div>
            <div>
              <dt>Tinggi Ambang Bawah</dt>
              <dd>{activeItem.sillSpec}</dd>
            </div>
            <div>
              <dt>Pilihan Finishing</dt>
              <dd>{activeItem.finishType}</dd>
            </div>
          </dl>

          <ul className="grants-highlights">
            {activeItem.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <fieldset className="detail-colors grants-colors">
            <legend>
              Simulasi warna {activeItem.modelCode} /{" "}
              <strong>{activeSwatch.name}</strong>
            </legend>
            <div>
              {availableSwatches.map((swatch) => (
                <button
                  key={swatch.code}
                  type="button"
                  aria-pressed={activeSwatch.code === swatch.code}
                  onClick={() => setSelectedColorCode(swatch.code)}
                >
                  <span
                    style={{
                      background: GIESTA_SWATCH_HEX[swatch.code] ?? "#8A654B",
                    }}
                  />
                  {swatch.name}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grants-detail-actions">
            <a
              className="button dark"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                syncToConsultationForm();
                pushDataLayerEvent("whatsapp_click", {
                  cta_location: "giesta_subproduct_explorer",
                  product_series: `GIESTA · ${activeItem.modelCode}`,
                  product_color: activeSwatch.name,
                  conversion_tier: "secondary",
                });
              }}
            >
              <MessageCircle size={17} strokeWidth={1.5} />
              <span>Konsultasikan {activeItem.shortName}</span>
              <ArrowUpRight size={17} />
            </a>
            <a
              className="text-link"
              href="#rencana"
              onClick={syncToConsultationForm}
            >
              <span>Minta estimasi model ini di form</span>
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
