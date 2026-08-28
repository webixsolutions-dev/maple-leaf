import ServicesHero from '../services/ServicesHero';
import ServicesGrid from '../services/ServicesGrid';
import VisionMissionSection from '../services/VisionMissionSection';
import HelpCTAStrip from '../services/HelpCTAStrip';

const OurServices = () => (
  <div className="font-montserrat bg-white pt-20 pb-0">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
      <ServicesHero />
      <ServicesGrid />
      <VisionMissionSection />
      <HelpCTAStrip />
    </div>
  </div>
);

export default OurServices;
