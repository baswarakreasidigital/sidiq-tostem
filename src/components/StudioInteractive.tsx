"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Menu,
  MessageCircle,
  Plus,
  Upload,
  X,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { STUDIO_IDENTITY } from "@/data/studio-info";
import {
  getAttributionData,
  pushDataLayerEvent,
  useRefCode,
} from "@/lib/tracking";

const GALLERY_ITEMS = [
  {
    image: "/images/alam-sutera-2.webp",
    label: "Mengenal material dan detail",
    alt: "Display sampel dan sistem pintu di dalam Studio Alam Sutera",
  },
  {
    image: "/images/alam-sutera-3.webp",
    label: "Melihat pilihan bukaan dari dekat",
    alt: "Area display produk di TOSTEM Studio Alam Sutera",
  },
  {
    image: "/images/alam-sutera-4.webp",
    label: "Ruang untuk berdiskusi",
    alt: "Meja diskusi dan display di Studio Alam Sutera",
  },
] as const;

const PROJECT_NEEDS = [
  "Membangun rumah",
  "Renovasi",
  "Proyek profesional",
] as const;

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#utama"
          aria-label="TOSTEM Studio Alam Sutera, beranda"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/tostem-logo-b.svg"
            alt="TOSTEM"
            width={194}
            height={34}
          />
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#studio">Studio</a>
          <a href="#produk">Produk</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pengalaman">Pengalaman</a>
          <a href="#kunjungi">Lokasi</a>
        </nav>
        <a href="#rencana" className="header-cta">
          Rencanakan kunjungan <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Navigasi mobile"
        >
          {(
            [
              ["Studio", "#studio"],
              ["Produk", "#produk"],
              ["Portfolio", "#portfolio"],
              ["Pengalaman studio", "#pengalaman"],
              ["Lokasi & kunjungan", "#kunjungi"],
              ["Pertanyaan umum", "#faq"],
            ] as const
          ).map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a
            href="#rencana"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Rencanakan kunjungan <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}

export function StudioGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (dialogOpen) {
      dialogRef.current?.showModal();
    } else if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }, [dialogOpen]);

  const step = (delta: number) =>
    setActiveIndex(
      (prev) => (prev + delta + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );

  const currentItem = GALLERY_ITEMS[activeIndex];

  return (
    <div className="gallery" data-reveal="true">
      <div className="gallery-main">
        <Image
          key={currentItem.image}
          src={currentItem.image}
          alt={currentItem.alt}
          width={1200}
          height={800}
          sizes="(max-width:600px) 100vw, 85vw"
        />
        <button
          ref={expandButtonRef}
          className="gallery-expand"
          onClick={() => setDialogOpen(true)}
          aria-label="Perbesar foto studio"
        >
          <Plus size={22} />
        </button>
        <div className="gallery-label">
          <span>GALERI TOSTEM STUDIO ALAM SUTERA</span>
          <p>{currentItem.label}</p>
        </div>
      </div>

      <div className="gallery-controls">
        <p aria-live="polite">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span> / 03</span>
        </p>
        <div className="gallery-progress" aria-label="Pilih foto studio">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.image}
              aria-label={`Lihat foto ${idx + 1}: ${item.label}`}
              aria-current={activeIndex === idx ? "true" : undefined}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
        <div className="gallery-arrows">
          <button aria-label="Foto sebelumnya" onClick={() => step(-1)}>
            <ChevronLeft size={20} />
          </button>
          <button aria-label="Foto berikutnya" onClick={() => step(1)}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label="Foto Studio Alam Sutera diperbesar"
        onCancel={() => setDialogOpen(false)}
        onClose={() => {
          setDialogOpen(false);
          expandButtonRef.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setDialogOpen(false);
          }
        }}
      >
        <button
          className="dialog-close"
          aria-label="Tutup foto"
          onClick={() => setDialogOpen(false)}
        >
          <X />
        </button>
        <Image
          src={currentItem.image}
          alt={currentItem.alt}
          width={1200}
          height={800}
        />
        <p>{currentItem.label}</p>
        <div className="dialog-arrows">
          <button aria-label="Foto sebelumnya" onClick={() => step(-1)}>
            <ChevronLeft />
          </button>
          <button aria-label="Foto berikutnya" onClick={() => step(1)}>
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </div>
  );
}

const PROJECT_CITIES = [
  "Alam Sutera / Tangerang",
  "Gading Serpong / BSD",
  "Jakarta Barat / Puri / PIK",
  "Jakarta Selatan / Pondok Indah / Bintaro",
  "Jakarta Lainnya",
  "Bekasi / Depok / Bogor",
  "Luar Jabodetabek",
] as const;

export function Consultation({
  defaultInterest = "Jendela & pintu",
}: {
  defaultInterest?: string;
} = {}) {
  const [mode, setMode] = useState<"form" | "whatsapp">("form");
  const [leadType, setLeadType] = useState<"estimasi" | "katalog">("estimasi");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [projectNeed, setProjectNeed] = useState<string>("Membangun rumah");
  const [interest, setInterest] = useState(defaultInterest);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectCity, setProjectCity] = useState<string>(PROJECT_CITIES[0]);
  const [floorplanName, setFloorplanName] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const refCode = useRefCode();

  useEffect(() => {
    const onProductChoice = (e: Event) => {
      const { detail } = e as CustomEvent<{ series: string; color: string }>;
      setSelectedProduct(`${detail.series} · ${detail.color}`);
    };
    window.addEventListener("product-choice", onProductChoice);
    return () => window.removeEventListener("product-choice", onProductChoice);
  }, []);

  const productSegment = selectedProduct
    ? `Pilihan produk yang diminati: ${selectedProduct}`
    : `Tertarik pada: ${interest}`;
  const refSuffix = refCode ? ` [Ref: ${refCode}]` : "";
  const whatsappText = `Halo TOSTEM Studio Alam Sutera, saya ingin merencanakan kunjungan ke TOSTEM Studio Alam Sutera. Kebutuhan proyek: ${projectNeed}. ${productSegment}. Mohon informasi jam operasional dan ketersediaan display. Terima kasih.${refSuffix}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  const submittedWhatsappText = `Halo TOSTEM Studio Alam Sutera, saya ${fullName.trim()} (${phone.trim()}) baru mengisi formulir ${leadType === "katalog" ? "Download Katalog TOSTEM" : "Permintaan Estimasi Proyek"} untuk area ${projectCity}. Kebutuhan: ${projectNeed}. ${productSegment}.${floorplanName ? ` Saya juga menyiapkan file denah (${floorplanName}).` : ""} Mohon dibantu tindak lanjut.${submittedRef ? ` [Ref: ${submittedRef}]` : ""}`;
  const submittedWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(submittedWhatsappText)}`;

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || trimmedPhone.length < 8) {
      setFormError("Mohon lengkapi nama lengkap dan nomor WhatsApp aktif Anda.");
      return;
    }

    setIsSubmitting(true);
    const attribution = getAttributionData();
    const activeRef =
      attribution.refCode || `AS-${Math.floor(1000 + Math.random() * 9000)}`;

    const payload = {
      lead_type: leadType,
      full_name: trimmedName,
      whatsapp: trimmedPhone,
      project_city: projectCity,
      project_need: projectNeed,
      product_interest: selectedProduct || interest,
      has_floorplan: Boolean(floorplanName),
      floorplan_filename: floorplanName,
      ref_code: activeRef,
      gclid: attribution.gclid,
      utm_source: attribution.utmSource,
      utm_medium: attribution.utmMedium,
      utm_campaign: attribution.utmCampaign,
      submitted_at: new Date().toISOString(),
    };

    const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Tetap lanjutkan agar konversi & fallback WA tidak terhambat
      }
    }

    pushDataLayerEvent("lead_form_submit", {
      conversion_tier: "primary",
      lead_type: leadType,
      project_city: projectCity,
      project_need: projectNeed,
      product_interest: selectedProduct || interest,
      has_floorplan: Boolean(floorplanName),
      ref_code: activeRef,
    });

    setSubmittedRef(activeRef);
    setIsSubmitting(false);
  };

  return (
    <div className="consultation" id="rencana" data-reveal="true">
      <div>
        <p className="eyebrow">RENCANAKAN LANGKAH PERTAMA</p>
        <h3>Apa rencana Anda?</h3>
        <p>
          Ajukan permintaan estimasi &amp; katalog resmi atau mulai konsultasi
          langsung bersama tim {STUDIO_IDENTITY.companyName}.
        </p>
        <p className="consult-meta">
          {STUDIO_IDENTITY.dealerBadge}
          <br />
          {STUDIO_IDENTITY.hours} · {STUDIO_IDENTITY.coverage}
        </p>
      </div>
      <div className="consultation-form">
        <div className="consult-tabs" role="tablist" aria-label="Pilih cara konsultasi">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "form"}
            onClick={() => setMode("form")}
          >
            <FileText size={15} />
            Minta Estimasi / Katalog
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "whatsapp"}
            onClick={() => setMode("whatsapp")}
          >
            <MessageCircle size={15} />
            Langsung via WhatsApp
          </button>
        </div>

        {selectedProduct && (
          <p className="selected-product">
            Pilihan Anda: <strong>{selectedProduct}</strong>
          </p>
        )}

        {mode === "form" ? (
          submittedRef ? (
            <div className="lead-success" role="status" aria-live="polite">
              <p className="eyebrow">PERMINTAAN DITERIMA · REF {submittedRef}</p>
              <h4>Terima kasih, {fullName.trim()}.</h4>
              <p>
                Permintaan{" "}
                <strong>
                  {leadType === "katalog"
                    ? "Download Katalog Resmi TOSTEM"
                    : "Estimasi Proyek"}
                </strong>{" "}
                Anda untuk area <strong>{projectCity}</strong> telah tercatat.
                Klik tombol di bawah untuk langsung menerima katalog atau
                mengirimkan file denah ke tim konsultan resmi kami di WhatsApp.
              </p>
              <div className="lead-success-actions">
                <a
                  className="button dark consult-button"
                  href={submittedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushDataLayerEvent("whatsapp_click", {
                      cta_location: "post_form_followup",
                      lead_type: leadType,
                      project_city: projectCity,
                      ref_code: submittedRef,
                      conversion_tier: "secondary",
                    })
                  }
                >
                  <MessageCircle size={18} strokeWidth={1.5} />
                  <span>
                    {leadType === "katalog"
                      ? "Terima Katalog via WhatsApp"
                      : "Lanjutkan Estimasi via WhatsApp"}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <button
                  type="button"
                  className="text-link lead-reset"
                  onClick={() => {
                    setSubmittedRef(null);
                    setFloorplanName(null);
                  }}
                >
                  Kirim permintaan lain
                </button>
              </div>
            </div>
          ) : (
            <form className="lead-form" onSubmit={handleLeadSubmit} noValidate>
              <fieldset>
                <legend>Jenis permintaan</legend>
                <div className="choice-row">
                  <button
                    type="button"
                    aria-pressed={leadType === "estimasi"}
                    onClick={() => setLeadType("estimasi")}
                  >
                    {leadType === "estimasi" && <Check size={14} />}
                    Minta Estimasi Proyek
                  </button>
                  <button
                    type="button"
                    aria-pressed={leadType === "katalog"}
                    onClick={() => setLeadType("katalog")}
                  >
                    {leadType === "katalog" && <Check size={14} />}
                    Download Katalog TOSTEM
                  </button>
                </div>
              </fieldset>

              <div className="lead-grid">
                <div className="lead-field">
                  <label className="select-label" htmlFor="lead-name">
                    Nama lengkap *
                  </label>
                  <input
                    id="lead-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Contoh: Budi Santoso"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="lead-field">
                  <label className="select-label" htmlFor="lead-phone">
                    Nomor WhatsApp *
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="0812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="lead-grid">
                <div className="lead-field">
                  <label className="select-label" htmlFor="lead-city">
                    Kota / area proyek *
                  </label>
                  <select
                    id="lead-city"
                    value={projectCity}
                    onChange={(e) => setProjectCity(e.target.value)}
                  >
                    {PROJECT_CITIES.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lead-field">
                  <label className="select-label" htmlFor="lead-interest">
                    Produk yang ingin dibahas
                  </label>
                  <select
                    id="lead-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option>Jendela &amp; pintu</option>
                    <option>Pintu sliding GRANTS</option>
                    <option>Jendela kedap suara (ATIS / VIEW Plus / WE 70)</option>
                    <option>Pintu utama GIESTA</option>
                    <option>Pintu interior IN16</option>
                    <option>Masih ingin eksplorasi</option>
                  </select>
                </div>
              </div>

              <fieldset>
                <legend>Kebutuhan proyek</legend>
                <div className="choice-row">
                  {PROJECT_NEEDS.map((need) => (
                    <button
                      type="button"
                      key={need}
                      aria-pressed={projectNeed === need}
                      onClick={() => setProjectNeed(need)}
                    >
                      {projectNeed === need && <Check size={14} />}
                      {need}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="lead-field">
                <label className="select-label" htmlFor="lead-floorplan">
                  Upload denah / foto bukaan (opsional)
                </label>
                <label className="lead-file" htmlFor="lead-floorplan">
                  <Upload size={15} />
                  <span>
                    {floorplanName
                      ? `Terpilih: ${floorplanName}`
                      : "Pilih file PDF / JPG / PNG (opsional)"}
                  </span>
                  <input
                    id="lead-floorplan"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFloorplanName(file ? file.name : null);
                    }}
                  />
                </label>
              </div>

              {formError && (
                <p className="lead-error" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="button dark consult-button"
                disabled={isSubmitting}
              >
                <FileText size={18} strokeWidth={1.5} />
                <span>
                  {isSubmitting
                    ? "Mengirim permintaan..."
                    : leadType === "katalog"
                      ? "Minta Katalog Resmi TOSTEM"
                      : "Kirim Permintaan Estimasi"}
                </span>
                <ArrowUpRight size={18} />
              </button>

              <p className="lead-consent">
                Dengan mengirim formulir ini, Anda menyetujui{" "}
                <Link href={STUDIO_IDENTITY.privacyPath}>
                  Kebijakan Privasi
                </Link>{" "}
                {STUDIO_IDENTITY.companyName}. Data Anda hanya digunakan untuk
                keperluan konsultasi proyek.
              </p>
            </form>
          )
        ) : (
          <>
            <fieldset>
              <legend>Kebutuhan proyek</legend>
              <div className="choice-row">
                {PROJECT_NEEDS.map((need) => (
                  <button
                    type="button"
                    key={need}
                    aria-pressed={projectNeed === need}
                    onClick={() => setProjectNeed(need)}
                  >
                    {projectNeed === need && <Check size={14} />}
                    {need}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="select-label" htmlFor="interest">
              Produk yang ingin dibahas
            </label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option>Jendela &amp; pintu</option>
              <option>Pintu interior</option>
              <option>Pintu utama</option>
              <option>Masih ingin eksplorasi</option>
            </select>
            <p className="selected-product">
              Terhubung dengan kontak resmi TOSTEM Studio Alam Sutera (
              {STUDIO_IDENTITY.phoneDisplay}) untuk konfirmasi jadwal kunjungan
              dan display studio.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                className="button dark consult-button"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushDataLayerEvent("whatsapp_click", {
                    cta_location: "consultation_wa",
                    project_need: projectNeed,
                    product_interest: selectedProduct || interest,
                    conversion_tier: "secondary",
                  })
                }
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#kunjungi">
                Lihat lokasi TOSTEM studio di peta <ArrowRight size={16} />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function MapPreview() {
  return (
    <div className="map-preview">
      <iframe
        loading="lazy"
        title="Peta TOSTEM Studio Alam Sutera"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2403115839443!2d106.6566353753121!3d-6.2320185610310155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbdc981d9d01%3A0x4f5da57c86d3072a!2sTOSTEM%20Studio%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1761106955892!5m2!1sen!2sid"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
