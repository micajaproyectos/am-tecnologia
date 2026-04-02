import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Projects      from "@/components/Projects";
import Services      from "@/components/Services";
import Process       from "@/components/Process";
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
        <Process />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
