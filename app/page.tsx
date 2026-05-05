import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import PainPoints    from "@/components/PainPoints";
import Projects      from "@/components/Projects";
import Services      from "@/components/Services";
import HowItWorks    from "@/components/HowItWorks";
import FAQ           from "@/components/FAQ";
import CTA           from "@/components/CTA";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal  from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Projects />
        <Services />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
