import dynamic from "next/dynamic";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import ResultsSection from "@/components/ResultsSection";
import HowItWorks    from "@/components/HowItWorks";
import Coverage      from "@/components/Coverage";
import CTA           from "@/components/CTA";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal  from "@/components/ScrollReveal";
import { homeFaqs }  from "@/lib/home-faqs";

const Projects = dynamic(() => import("@/components/Projects"));
const FAQ      = dynamic(() => import("@/components/FAQ"));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.amtecnologia.cl/#faq",
  "mainEntity": homeFaqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar corporate />
      <main>
        <Hero />
        <ResultsSection />
        <Projects />
        <HowItWorks />
        <Coverage />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton offer="software" />
      <ScrollReveal />
    </>
  );
}
