"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import {
  WE40_SUBPRODUCTS,
  WE40_SUBPRODUCT_TABS,
  type We40SubProduct,
} from "@/data/we40-catalog";
import {
  STANDARD_COLORS,
  STANDARD_COLOR_HEX,
  WHATSAPP_NUMBER,
} from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

type TabId = "all" | We40SubProduct["category"];

export default function We40SubProductExplorer() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [selectedId, setSelectedId] = useState<string>(WE40_SUBPRODUCTS[0].id);
  const [selectedColor, setSelectedColor] = useState<string>("Natural Black");
  const refCode = useRefCode();

  const tabItems =
    activeTab === "all"
      ? WE40_SUBPRODUCTS
      : WE40_SUBPRODUCTS.filter((item) => item.category === activeTab);
  const activeItem =
    tabItems.find((item) => item.id === selectedId) ?? tabItems[0];

  const handleTabChange = (nextTab: TabId) => {
    setActiveTab(nextTab);
    const nextList =
      nextTab === "all"
        ? WE40_SUBPRODUCTS
        : WE40_SUBPRODUCTS.filter((i) => i.category === nextTab);
    if (nextList[0] && !nextList.some((i) => i.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  const baseMessage = `Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi seri WE 40 (${activeItem.name}) warna ${selectedColor}. Mohon informasi spesifikasi, estimasi harga, dan ketersediaan untuk proyek/hunian kami. Terima kasih.`;
  const whatsappMessage = refCode
    ? `${baseMessage} [Ref: ${refCode}]`
    : baseMessage;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const syncToConsultationForm = () => {
    window.dispatchEvent(
      new CustomEvent("product-choice", {
        detail: {
          series: `WE 40 · ${activeItem.shortName}`,
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
        aria-label="Kategori sub-produk WE 40"
      >
        {WE40_SUBPRODUCT_TABS.map((tab) => (
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
        aria-label="Pilih tipe sub-produk WE 40"
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
            alt={`Ilustrasi teknis TOSTEM WE 40 ${activeItem.name}`}
            width={800}
            height={700}
            loading="lazy"
            decoding="async"
          />
          <p className="grants-media-caption">
            Ilustrasi konfigurasi {activeItem.name} · Tersedia 6 warna Anodized
            TEXGUARD
          </p>
        </div>

        <div className="grants-detail-copy">
          <p className="eyebrow">
            TOSTEM WE 40 ·{" "}
            {activeItem.category === "sliding"
              ? "SLIDING WINDOW"
              : "CASEMENT, AWNING & FIXED"}
          </p>
          <h3>{activeItem.name}</h3>
          <p className="grants-detail-summary">{activeItem.summary}</p>

          <dl className="lp-dl grants-dl">
            <div>
              <dt>Ketebalan Kusen</dt>
              <dd>{activeItem.frameDepth}</dd>
            </div>
            <div>
              <dt>Rentang Ukuran Katalog</dt>
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
              {STANDARD_COLORS.map((color, idx) => (
                <button
                  key={color}
                  type="button"
                  aria-pressed={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                >
                  <span style={{ background: STANDARD_COLOR_HEX[idx] }} />
                  {color}
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
                  cta_location: "we40_subproduct_explorer",
                  product_series: `WE 40 · ${activeItem.shortName}`,
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
