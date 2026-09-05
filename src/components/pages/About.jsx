import HeroBanner from '../about/Hero';
import WhoWeAre from '../about/WhoWeAre';
import CTABanner from '../about/CTABanner';

const AboutUs = () => {
  return (
    <div className="font-montserrat bg-white pt-20 pb-14">
      <HeroBanner />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14 mt-4 md:mt-6">
        <WhoWeAre />
        <CTABanner />
      </div>
    </div>
  );
};

export default AboutUs;
