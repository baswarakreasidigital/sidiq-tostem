"use client";

import type { ReactNode } from "react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

interface WhatsAppLinkProps {
  className?: string;
  ctaLocation: string;
  productSeries?: string;
  message?: string;
  onAfterClick?: () => void;
  children: ReactNode;
}

export default function WhatsAppLink({
  className,
  ctaLocation,
  productSeries = "Konsultasi Umum",
  message = "Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi pintu & jendela aluminium serta jadwalkan kunjungan ke showroom. Terima kasih.",
  onAfterClick,
  children,
}: WhatsAppLinkProps) {
  const refCode = useRefCode();
  const fullMessage = refCode ? `${message} [Ref: ${refCode}]` : message;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        pushDataLayerEvent("whatsapp_click", {
          cta_location: ctaLocation,
          product_series: productSeries,
          conversion_tier: "primary",
        });
        onAfterClick?.();
      }}
    >
      {children}
    </a>
  );
}
