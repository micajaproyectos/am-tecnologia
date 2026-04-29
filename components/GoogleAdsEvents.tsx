"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEY = "am_attribution";
const TRACKING_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Attribution = Partial<Record<(typeof TRACKING_PARAMS)[number], string>> & {
  landing_url?: string;
  captured_at?: string;
};

export default function GoogleAdsEvents() {
  useEffect(() => {
    captureAttribution();

    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (link?.href?.includes("wa.me") || link?.href?.includes("api.whatsapp.com")) {
        const ctaSource = link.dataset.ctaSource ?? "unknown";
        enrichWhatsAppMessage(link);

        window.gtag?.("event", "conversion", {
          send_to: "AW-18068672063/_M70CObOn6IcEL-c6KdD",
          value: 99990,
          currency: "CLP",
          cta_source: ctaSource,
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }

  if (Object.keys(attribution).length === 0) return;

  attribution.landing_url = window.location.href;
  attribution.captured_at = new Date().toISOString();

  try {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // If storage is unavailable, WhatsApp still works with the default message.
  }
}

function getAttribution(): Attribution {
  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function enrichWhatsAppMessage(link: HTMLAnchorElement) {
  const url = new URL(link.href);
  const attribution = getAttribution();
  const originalText =
    link.dataset.originalWhatsappText ??
    url.searchParams.get("text") ??
    "Hola, quiero cotizar mi web.";

  link.dataset.originalWhatsappText = originalText;

  const trackingParts = [`conversion_time: ${formatConversionTime(new Date())}`];
  if (attribution.gclid) trackingParts.unshift(`gclid: ${attribution.gclid}`);

  url.searchParams.set("text", `${trackingParts.join(". ")}. ${originalText}`);
  link.href = url.toString();
}

function formatConversionTime(date: Date) {
  const timezoneOffset = -date.getTimezoneOffset();
  const sign = timezoneOffset >= 0 ? "+" : "-";
  const absOffset = Math.abs(timezoneOffset);
  const offsetHours = pad(Math.floor(absOffset / 60));
  const offsetMinutes = pad(absOffset % 60);

  return [
    date.getFullYear(),
    "-",
    pad(date.getMonth() + 1),
    "-",
    pad(date.getDate()),
    " ",
    pad(date.getHours()),
    ":",
    pad(date.getMinutes()),
    ":",
    pad(date.getSeconds()),
    sign,
    offsetHours,
    ":",
    offsetMinutes,
  ].join("");
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}
