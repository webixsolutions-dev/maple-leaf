import AdmissionsHero from '../admission/Hero';
import ComingSoonBanner from '../admission/ComingSoonBanner';
import InfoSection from '../admission/InfoSection';

const Admission = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <AdmissionsHero />
        <ComingSoonBanner />
        <InfoSection />
      </div>
    </div>
  );
};

export default Admission;
