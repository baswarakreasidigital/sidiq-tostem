"use client";

import { useSyncExternalStore } from "react";

export interface AttributionData {
  gclid: string | null;
  refCode: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

const COOKIE_GCLID = "tostem_gclid";
const COOKIE_REF = "tostem_ref";
const STORAGE_KEY = "tostem_attribution_v1";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 hari

function setCookie(name: string, value: string, maxAge = COOKIE_MAX_AGE) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1] ?? "") : null;
}

function generateRefCode(seed?: string): string {
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) % 9000;
    }
    return `AS-${1000 + Math.abs(hash)}`;
  }
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `AS-${rand}`;
}

export function captureAttribution(): AttributionData {
  if (typeof window === "undefined") {
    return {
      gclid: null,
      refCode: null,
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    };
  }

  const params = new URLSearchParams(window.location.search);
  const urlGclid =
    params.get("gclid") || params.get("gbraid") || params.get("wbraid");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");

  const existing = getAttributionData();
  const gclid = urlGclid || existing.gclid;

  let refCode = existing.refCode;
  if (urlGclid) {
    refCode = generateRefCode(urlGclid);
  } else if (!refCode && (gclid || utmSource)) {
    refCode = generateRefCode(gclid || `${utmSource}-${Date.now()}`);
  }

  const next: AttributionData = {
    gclid,
    refCode,
    utmSource: utmSource || existing.utmSource,
    utmMedium: utmMedium || existing.utmMedium,
    utmCampaign: utmCampaign || existing.utmCampaign,
  };

  if (next.gclid) {
    setCookie(COOKIE_GCLID, next.gclid);
  }
  if (next.refCode) {
    setCookie(COOKIE_REF, next.refCode);
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Abaikan jika storage dibatasi browser
  }

  window.dispatchEvent(new Event("tostem-attribution"));

  return next;
}

const subscribeAttribution = (callback: () => void) => {
  window.addEventListener("tostem-attribution", callback);
  return () => window.removeEventListener("tostem-attribution", callback);
};

export function useRefCode(): string | null {
  return useSyncExternalStore(
    subscribeAttribution,
    () => getAttributionData().refCode,
    () => null
  );
}

export function getAttributionData(): AttributionData {
  if (typeof window === "undefined") {
    return {
      gclid: null,
      refCode: null,
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    };
  }

  let stored: Partial<AttributionData> = {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      stored = JSON.parse(raw) as Partial<AttributionData>;
    }
  } catch {
    stored = {};
  }

  return {
    gclid: getCookie(COOKIE_GCLID) || stored.gclid || null,
    refCode: getCookie(COOKIE_REF) || stored.refCode || null,
    utmSource: stored.utmSource || null,
    utmMedium: stored.utmMedium || null,
    utmCampaign: stored.utmCampaign || null,
  };
}

export function appendRefToMessage(message: string): string {
  const { refCode } = getAttributionData();
  if (!refCode) return message;
  if (message.includes(`[Ref: ${refCode}]`)) return message;
  return `${message} [Ref: ${refCode}]`;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayerEvent(
  event: string,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  const attribution = getAttributionData();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ref_code: attribution.refCode,
    gclid: attribution.gclid,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    ...payload,
  });
}
