import Hero from '../home/Hero';
import WhyFamiliesChoose from '../home/WhyFamiliesChoose';
import MoreUpdatesComingSoon from '../home/MoreUpdatesComingSoon';

const Home = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <Hero />
      </div>
      <WhyFamiliesChoose />
      <MoreUpdatesComingSoon />
    </div>
  );
};

export default Home;
