"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import {
  IN16_SUBPRODUCTS,
  IN16_SUBPRODUCT_TABS,
  type In16SubProduct,
} from "@/data/in16-catalog";
import {
  STANDARD_COLORS,
  STANDARD_COLOR_HEX,
  WHATSAPP_NUMBER,
} from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

const IN16_COLORS = STANDARD_COLORS.filter((c) => c !== "Natural Silver");

export default function In16SubProductExplorer() {
  const [activeTab, setActiveTab] =
    useState<In16SubProduct["category"]>("in16");
  const [selectedId, setSelectedId] = useState<string>(IN16_SUBPRODUCTS[0].id);
  const [selectedColor, setSelectedColor] = useState<string>("Natural Black");
  const refCode = useRefCode();

  const tabItems = IN16_SUBPRODUCTS.filter(
    (item) => item.category === activeTab
  );
  const activeItem =
    tabItems.find((item) => item.id === selectedId) ?? tabItems[0];

  const handleTabChange = (nextTab: In16SubProduct["category"]) => {
    setActiveTab(nextTab);
    const firstInTab = IN16_SUBPRODUCTS.find((i) => i.category === nextTab);
    if (firstInTab) {
      setSelectedId(firstInTab.id);
    }
  };

  const baseMessage = `Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi seri Interior IN16 (${activeItem.name}) warna ${selectedColor}. Mohon informasi spesifikasi, estimasi harga, dan ketersediaan display di Alam Sutera. Terima kasih.`;
  const whatsappMessage = refCode
    ? `${baseMessage} [Ref: ${refCode}]`
    : baseMessage;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const syncToConsultationForm = () => {
    window.dispatchEvent(
      new CustomEvent("product-choice", {
        detail: {
          series: `IN16 · ${activeItem.shortName}`,
          color: selectedColor,
        },
      })
    );
  };

  return (
    <div className="grants-explorer" id="sub-produk">
      <div
        className="grants-tabs"
        role="tablist"
        aria-label="Kategori sub-produk Interior IN16"
      >
        {IN16_SUBPRODUCT_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
          >
            <span>{tab.label}</span>
            <small>{tab.count} tipe</small>
          </button>
        ))}
      </div>

      <div
        className="grants-selector-grid"
        aria-label="Pilih tipe sub-produk Interior IN16"
      >
        {tabItems.map((item) => (
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
                src={item.image}
                alt={item.name}
                width={180}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span>{item.shortName}</span>
          </button>
        ))}
      </div>

      <article className="grants-detail-stage" aria-live="polite">
        <div className="grants-detail-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={activeItem.image}
            src={activeItem.image}
            alt={`Ilustrasi teknis TOSTEM Interior IN16 ${activeItem.name}`}
            width={800}
            height={700}
            loading="lazy"
            decoding="async"
          />
          <p className="grants-media-caption">
            Ilustrasi konfigurasi {activeItem.name} · Tersedia 5 warna Anodized
            TEXGUARD
          </p>
        </div>

        <div className="grants-detail-copy">
          <p className="eyebrow">
            TOSTEM INTERIOR IN16 ·{" "}
            {IN16_SUBPRODUCT_TABS.find((t) => t.id === activeItem.category)
              ?.label.toUpperCase()}
          </p>
          <h3>{activeItem.name}</h3>
          <p className="grants-detail-summary">{activeItem.summary}</p>

          <dl className="lp-dl grants-dl">
            <div>
              <dt>Ketebalan Kusen / Rel</dt>
              <dd>{activeItem.frameDepth}</dd>
            </div>
            <div>
              <dt>Aplikasi &amp; Konfigurasi</dt>
              <dd>{activeItem.sizeRange}</dd>
            </div>
            <div>
              <dt>Spesifikasi Kaca</dt>
              <dd>{activeItem.glassSpec}</dd>
            </div>
          </dl>

          <ul className="grants-highlights">
            {activeItem.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <fieldset className="detail-colors grants-colors">
            <legend>
              Pilihan warna TEXGUARD / <strong>{selectedColor}</strong>
            </legend>
            <div>
              {IN16_COLORS.map((color) => {
                const idx = STANDARD_COLORS.indexOf(color);
                return (
                  <button
                    key={color}
                    type="button"
                    aria-pressed={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span style={{ background: STANDARD_COLOR_HEX[idx] }} />
                    {color}
                  </button>
                );
              })}
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
                  cta_location: "in16_subproduct_explorer",
                  product_series: `IN16 · ${activeItem.shortName}`,
                  product_color: selectedColor,
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
              <span>Minta estimasi tipe ini di form</span>
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
