import DisclaimerOverlay from "@/components/DisclaimerOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GalleryDB from "@/components/GalleryDB";
import RecreationZone from "@/components/RecreationZone";
import VillaConfigurations from "@/components/VillaConfigurations";
import MasterPlan from "@/components/MasterPlan";
import CleanSlate from "@/components/CleanSlate";
import EastFacingSection from "@/components/EastFacingSection";
import WestFacingSection from "@/components/WestFacingSection";
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
        <GalleryDB />
        <VillaConfigurations />
        <MasterPlan />
        <CleanSlate />
        <EastFacingSection />
        <WestFacingSection />
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
