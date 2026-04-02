import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Projects      from "@/components/Projects";
import Services      from "@/components/Services";
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
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
