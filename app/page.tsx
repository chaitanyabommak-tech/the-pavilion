import DisclaimerOverlay from "@/components/DisclaimerOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import RecreationZone from "@/components/RecreationZone";
import VillaConfigurations from "@/components/VillaConfigurations";
import MasterPlan from "@/components/MasterPlan";
import LocationAdvantage from "@/components/LocationAdvantage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <DisclaimerOverlay />
      <Navbar />

      <main id="main-content" role="main" className="pb-[130px] lg:pb-0">
        <Hero />
        <Gallery />
        <VillaConfigurations />
        <MasterPlan />
        <RecreationZone />
        <LocationAdvantage />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
