import HomeCleaningHero from '../../services/homecleaning/HomeCleaningHero';
import HomeCleaningServicesGrid from '../../services/homecleaning/HomeCleaningServicesGrid';
import HelpCTAStrip from '../../services/HelpCTAStrip';
import HomeServiceIcon from '../../services/HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../../services/homeServicesAssets';

const HomeCleaningServices = () => (
  <div className="font-montserrat bg-white pt-20 pb-0">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
      <HomeCleaningHero />
      <HomeCleaningServicesGrid />
      <div className="relative">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.left}
          alt=""
          className="hidden lg:block absolute -left-2 -bottom-4 w-16 h-16 object-contain pointer-events-none z-10"
        />
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.right}
          alt=""
          className="hidden lg:block absolute -right-2 -bottom-4 w-16 h-16 object-contain pointer-events-none z-10"
        />
        <HelpCTAStrip variant="pink" />
      </div>
    </div>
  </div>
);

export default HomeCleaningServices;
