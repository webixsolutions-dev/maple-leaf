import SeniorPersonalCareHero from '../../services/seniorpersonalcare/SeniorPersonalCareHero';
import SeniorPersonalCareServicesGrid from '../../services/seniorpersonalcare/SeniorPersonalCareServicesGrid';
import ComfortDignitySection from '../../services/seniorpersonalcare/ComfortDignitySection';
import HelpCTAStrip from '../../services/HelpCTAStrip';

const SeniorPersonalCare = () => (
  <div className="font-montserrat bg-white pt-20 pb-0">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
      <SeniorPersonalCareHero />
      <SeniorPersonalCareServicesGrid />
      <ComfortDignitySection />
      <HelpCTAStrip />
    </div>
  </div>
);

export default SeniorPersonalCare;
