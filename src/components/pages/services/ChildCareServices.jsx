import ChildCareHero from '../../services/childcare/ChildCareHero';
import ChildCareServicesGrid from '../../services/childcare/ChildCareServicesGrid';
import HappyChildrenSection from '../../services/childcare/HappyChildrenSection';
import HelpCTAStrip from '../../services/HelpCTAStrip';

const ChildCareServices = () => (
  <div className="font-montserrat bg-white pt-20 pb-14">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
      <ChildCareHero />
      <ChildCareServicesGrid />
      <HappyChildrenSection />
      <HelpCTAStrip />
    </div>
  </div>
);

export default ChildCareServices;
