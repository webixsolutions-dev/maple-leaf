import ProgramsHero from '../programs/Hero';
import ComingSoonBanner from '../programs/ComingSoonBanner';
import InfoSection from '../programs/InfoSection';

const ProgramsPage = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <ProgramsHero />
        <ComingSoonBanner />
        <InfoSection />
      </div>
    </div>
  );
};

export default ProgramsPage;
