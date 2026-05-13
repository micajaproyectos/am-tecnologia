import dynamic from "next/dynamic";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import AboutService  from "@/components/AboutService";
import PainPoints    from "@/components/PainPoints";
import Services      from "@/components/Services";
import HowItWorks    from "@/components/HowItWorks";
import Coverage      from "@/components/Coverage";
import CTA           from "@/components/CTA";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal  from "@/components/ScrollReveal";

const Projects = dynamic(() => import("@/components/Projects"));
const FAQ      = dynamic(() => import("@/components/FAQ"));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.amtecnologia.cl/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una página web en Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con nosotros, $99.990 precio de lanzamiento — pago único. Lo que hacemos no es solo crear una página: es posicionar tu marca en Google para que tus clientes te encuentren cuando buscan lo que tú ofreces. Las agencias de marketing cobran entre $400.000 y $600.000 por este mismo resultado. Nosotros lo entregamos desde $99.990.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cómo hago para que mi negocio aparezca en Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos encargamos de todo el proceso: creamos la estructura de tu sitio, configuramos tu perfil en Google Maps, Google Analytics y Search Console, y optimizamos cada página para que Google entienda a qué clientes debes aparecer. Con la optimización incluida, tu marca ya puede empezar a recibir tráfico orgánico.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Necesito una página web para mi negocio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si quieres que tus clientes te encuentren en Google, sí. Hoy más del 80% de las personas busca en internet antes de comprar. Sin página web, esos clientes los encuentra tu competencia.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Necesito saber de tecnología?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nosotros nos encargamos de todo. Tú solo te preocupas de atender a tus nuevos clientes.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una página web con tienda online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una tienda online con Webpay y MercadoPago integrado parte desde $199.990 a $399.990 pago único. Incluye gestión de productos, carrito de compras y panel administrativo completo.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el proceso para contratar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es simple: escríbenos por WhatsApp con los detalles de tu negocio. En menos de 1 hora te enviamos una cotización. Si la apruebas, empezamos el mismo día.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Trabajan en todo Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Servimos empresas en Puerto Montt, Valdivia, Temuco, Rancagua, Santiago y todo Chile.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutService />
        <PainPoints />
        <Projects />
        <Services />
        <HowItWorks />
        <Coverage />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
