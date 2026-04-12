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
      if (link?.href?.includes("wa.me")) {
        window.fbq?.("track", "Contact");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
