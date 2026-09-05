import HeroBanner from '../about/Hero';
import WhoWeAre from '../about/WhoWeAre';
import CTABanner from '../about/CTABanner';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <HeroBanner />
        <WhoWeAre />
        <CTABanner />
      </div>
    </div>
  );
};

export default AboutUs;
