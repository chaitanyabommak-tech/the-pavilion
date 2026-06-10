import DisclaimerOverlay from "@/components/DisclaimerOverlay";
import Navbar from "@/components/Navbar";
import HeroDB from "@/components/HeroDB";
import GalleryDB from "@/components/GalleryDB";
import RecreationZoneDB from "@/components/RecreationZoneDB";
import VillaConfigurationsDB from "@/components/VillaConfigurationsDB";
import MasterPlanDB from "@/components/MasterPlanDB";
import CleanSlateDB from "@/components/CleanSlateDB";
import EastFacingSectionDB from "@/components/EastFacingSectionDB";
import WestFacingSectionDB from "@/components/WestFacingSectionDB";
import LocationAdvantageDB from "@/components/LocationAdvantageDB";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FooterDB from "@/components/FooterDB";
import FloatingCTADB from "@/components/FloatingCTADB";

// Force dynamic rendering - no caching!
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <>
      <DisclaimerOverlay />
      <Navbar />

      <main id="main-content" role="main" className="pb-[130px] lg:pb-0">
        <HeroDB />
        <GalleryDB />
        <VillaConfigurationsDB />
        <MasterPlanDB />
        <CleanSlateDB />
        <EastFacingSectionDB />
        <WestFacingSectionDB />
        <RecreationZoneDB />
        <LocationAdvantageDB />
        <FAQ />
        <Contact />
      </main>

      <FooterDB />
      <FloatingCTADB />
    </>
  );
}
