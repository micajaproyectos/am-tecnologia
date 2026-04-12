import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Projects      from "@/components/Projects";
import Services      from "@/components/Services";
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
        <Projects />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
