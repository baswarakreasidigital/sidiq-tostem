"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Film,
  Maximize2,
  MessageCircle,
  X,
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { WHATSAPP_NUMBER } from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

export default function PortfolioShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string>(
    PORTFOLIO_PROJECTS[0].id
  );
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const refCode = useRefCode();

  const project =
    PORTFOLIO_PROJECTS.find((p) => p.id === activeProjectId) ??
    PORTFOLIO_PROJECTS[0];

  const filteredPhotos =
    activeTab === "all"
      ? project.photos
      : project.photos.filter((photo) => photo.category === activeTab);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIdx(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIdx((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIdx((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIdx, filteredPhotos.length]);

  const baseMessage = `Halo TOSTEM Studio Alam Sutera, saya melihat portfolio ${project.title} dan ingin konsultasi kebutuhan jendela/pintu aluminium untuk proyek kami. Terima kasih.`;
  const whatsappMessage = refCode
    ? `${baseMessage} [Ref: ${refCode}]`
    : baseMessage;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const activeLightboxPhoto =
    lightboxIdx !== null ? filteredPhotos[lightboxIdx] : null;

  return (
    <div className="portfolio-showcase">
      <div className="section-head">
        <div>
          <p className="eyebrow">PORTFOLIO PROYEK NYATA</p>
          <h2>
            Terpasang nyata di
            <br />
            <span className="muted">hunian klien kami.</span>
          </h2>
        </div>
        <div
          className="portfolio-project-switcher"
          role="tablist"
          aria-label="Pilih proyek portfolio TOSTEM"
        >
          {PORTFOLIO_PROJECTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={project.id === item.id}
              onClick={() => {
                setActiveProjectId(item.id);
                setActiveTab("all");
                setLightboxIdx(null);
              }}
            >
              <span className="portfolio-project-index">0{idx + 1}</span>
              <span className="portfolio-project-copy">
                <strong>{item.tabTitle}</strong>
                <small>{item.tabMeta}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-project-header">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
          <p className="portfolio-project-desc">
            {project.subtitle}
            {project.note ? ` (${project.note})` : ""}
          </p>
        </div>
        <a
          className="button dark"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            pushDataLayerEvent("whatsapp_click", {
              cta_location: `portfolio_${project.id}`,
              product_series: `Portfolio ${project.title}`,
              conversion_tier: "secondary",
            })
          }
        >
          <MessageCircle size={17} strokeWidth={1.5} />
          <span>Konsultasi Proyek Serupa</span>
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="portfolio-specs">
        {project.specs.map((spec) => (
          <div key={spec.label} className="portfolio-spec-item">
            <span>{spec.label}</span>
            <strong>{spec.value}</strong>
          </div>
        ))}
      </div>

      <div
        className="portfolio-tabs"
        role="tablist"
        aria-label={`Filter foto portfolio ${project.title}`}
      >
        {project.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setLightboxIdx(null);
            }}
          >
            <span>{tab.label}</span>
            <small>{tab.count}</small>
          </button>
        ))}
      </div>

      <div className="portfolio-photo-grid">
        {filteredPhotos.map((photo, index) => (
          <article key={photo.id} className="portfolio-photo-card">
            <button
              type="button"
              className="portfolio-photo-trigger"
              onClick={() => setLightboxIdx(index)}
              aria-label={`Perbesar foto ${photo.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.image}
                alt={photo.alt}
                width={800}
                height={535}
                loading="lazy"
                decoding="async"
              />
              <span className="portfolio-zoom-badge" aria-hidden="true">
                <Maximize2 size={14} />
              </span>
            </button>
            <div className="portfolio-photo-meta">
              <h4>{photo.title}</h4>
              <p>{photo.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {project.videos.length > 0 && (
        <div className="portfolio-videos-block">
          <div className="portfolio-videos-head">
            <div>
              <p className="eyebrow">
                <Film
                  size={13}
                  style={{ verticalAlign: "-2px", marginRight: 6 }}
                />
                VIDEO TOUR PROYEK
              </p>
              <h3>Video Dokumentasi {project.title}</h3>
            </div>
          </div>

          <div className="portfolio-video-grid">
            {project.videos.map((video) => (
              <figure key={video.id} className="portfolio-video-card">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Browser Anda tidak mendukung pemutar video HTML5.
                </video>
                <figcaption>
                  <strong>{video.title}</strong>
                  <span>{video.subtitle}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {activeLightboxPhoto && lightboxIdx !== null && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxPhoto.title}
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="portfolio-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-lightbox-close"
              onClick={() => setLightboxIdx(null)}
              aria-label="Tutup pratinjau"
            >
              <X size={20} />
            </button>
            <div className="portfolio-lightbox-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeLightboxPhoto.image}
                alt={activeLightboxPhoto.alt}
              />
            </div>
            <div className="portfolio-lightbox-bar">
              <div>
                <strong>{activeLightboxPhoto.title}</strong>
                <p>{activeLightboxPhoto.caption}</p>
              </div>
              <div className="portfolio-lightbox-nav">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + filteredPhotos.length) %
                        filteredPhotos.length
                    )
                  }
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft size={18} />
                </button>
                <span>
                  {lightboxIdx + 1} / {filteredPhotos.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((lightboxIdx + 1) % filteredPhotos.length)
                  }
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
