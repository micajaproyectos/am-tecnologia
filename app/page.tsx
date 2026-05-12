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

export default function Home() {
  return (
    <>
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
