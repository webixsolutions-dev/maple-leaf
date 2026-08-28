import HomeCleaningHero from '../../services/homecleaning/HomeCleaningHero';
import HomeCleaningServicesGrid from '../../services/homecleaning/HomeCleaningServicesGrid';
import CleanerHomeSection from '../../services/homecleaning/CleanerHomeSection';
import HelpCTAStrip from '../../services/HelpCTAStrip';

const HomeCleaningServices = () => (
  <div className="font-montserrat bg-white pt-20 pb-0">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
      <HomeCleaningHero />
      <HomeCleaningServicesGrid />
      <CleanerHomeSection />
      <HelpCTAStrip />
    </div>
  </div>
);

export default HomeCleaningServices;
