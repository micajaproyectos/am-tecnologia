import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AM Tecnología — Posicionamiento en Google Chile",
    short_name: "AM Tecnología",
    description:
      "Ayudamos a empresas de Chile a aparecer en Google con su página web.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
