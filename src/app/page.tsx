import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PartnerCTA from "@/components/PartnerCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col selection:bg-[#2563EB]/30 selection:text-white">
      <BackgroundFX />
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <PartnerCTA />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
