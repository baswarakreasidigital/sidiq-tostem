"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { pushDataLayerEvent, useRefCode } from "@/lib/tracking";

export default function FloatingWhatsApp() {
  const refCode = useRefCode();
  const baseMessage =
    "Halo TOSTEM Studio Alam Sutera, saya ingin konsultasi pintu & jendela aluminium TOSTEM. Terima kasih.";
  const fullMessage = refCode ? `${baseMessage} [Ref: ${refCode}]` : baseMessage;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Konsultasi langsung via WhatsApp TOSTEM Studio Alam Sutera"
      onClick={() =>
        pushDataLayerEvent("whatsapp_click", {
          cta_location: "floating_whatsapp",
          product_series: "Floating Button",
          conversion_tier: "primary",
        })
      }
    >
      <MessageCircle size={22} strokeWidth={1.9} />
      <span>Chat WhatsApp</span>
    </a>
  );
}
