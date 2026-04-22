"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixelEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (link?.href?.includes("wa.me") || link?.href?.includes("api.whatsapp.com")) {
        window.fbq?.("track", "Lead", {
          value: 99990,
          currency: "CLP",
          content_name: "cotizar_pagina_web",
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
