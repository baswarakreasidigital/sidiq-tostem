"use client";

import type { ReactNode } from "react";
import { STUDIO_IDENTITY } from "@/data/studio-info";
import { pushDataLayerEvent } from "@/lib/tracking";

interface PhoneLinkProps {
  className?: string;
  ctaLocation: string;
  children?: ReactNode;
}

export default function PhoneLink({
  className,
  ctaLocation,
  children,
}: PhoneLinkProps) {
  const telHref = `tel:${STUDIO_IDENTITY.phoneDisplay.replace(/[^+\d]/g, "")}`;

  return (
    <a
      className={className}
      href={telHref}
      onClick={() =>
        pushDataLayerEvent("phone_click", {
          cta_location: ctaLocation,
          conversion_tier: "primary",
        })
      }
    >
      {children ?? STUDIO_IDENTITY.phoneDisplay}
    </a>
  );
}
