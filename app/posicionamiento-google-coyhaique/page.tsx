import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageTemplate from "@/components/CityPageTemplate";
import { getCityBySlug } from "@/lib/cities-data";

const city = getCityBySlug("coyhaique");

export const metadata: Metadata = city
  ? {
      title: city.metaTitle,
      description: city.metaDescription,
      alternates: {
        canonical: `https://www.amtecnologia.cl/posicionamiento-google-coyhaique`,
      },
    }
  : {};

export default function Page() {
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.amtecnologia.cl/posicionamiento-google-coyhaique`,
    name: "AM Tecnología",
    description: city.metaDescription,
    url: "https://www.amtecnologia.cl",
    telephone: "+56985660954",
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "City", name: city.name },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Providencia",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    priceRange: "",
  };

  return <CityPageTemplate city={city} jsonLd={jsonLd} />;
}
