import DisclaimerOverlay from "@/components/DisclaimerOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import VillaConfigurations from "@/components/VillaConfigurations";
import MasterPlan from "@/components/MasterPlan";
import Amenities from "@/components/Amenities";
import LocationAdvantage from "@/components/LocationAdvantage";
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
        <Amenities />
        <LocationAdvantage />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
