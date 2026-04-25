"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAdsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (link?.href?.includes("wa.me") || link?.href?.includes("api.whatsapp.com")) {
        window.gtag?.("event", "conversion", {
          send_to: "AW-18068672063/_M70C0bOn6IcEL-c6KdD",
          value: 99990,
          currency: "CLP",
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
