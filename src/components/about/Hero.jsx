import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaLeaf,
  FaSun,
  FaCalendarAlt,
  FaHome,
  FaStar,
} from 'react-icons/fa';

const TopAnnouncementBanner = () => (
  <div className="bg-[#fef9ee] border-b border-amber-100/60">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5">
        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
          <FaSun className="text-amber-400 text-xl sm:text-2xl flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm md:text-[15px] leading-relaxed text-[#4a6b8a]">
            <span className="font-bold text-[#1e3a5f]">
              Daycare Opening Soon in Calgary!
            </span>{' '}
            Our licensed Montessori daycare is preparing to open. In the meantime,
            Homecare Services are available now to support your family.
          </p>
        </div>
        <Link
          to="/our-services"
          className="inline-flex items-center gap-2 bg-[#008f4c] hover:bg-[#007a42] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0 self-start lg:self-auto"
        >
          <FaHome className="text-sm" />
          Avail Homecare Services
          <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  </div>
);

const HeroBanner = () => {
  return (
    <section className="font-montserrat bg-white">
      <TopAnnouncementBanner />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] bg-[#fdf0ed] shadow-sm"
        >
          <div className="grid md:grid-cols-2 items-stretch">
            {/* Left content */}
            <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl opacity-90" />

              <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs px-4 py-1.5 rounded-full self-start mb-5">
                <FaHeart className="text-[10px]" />
                Where children learn, grow, and thrive
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.12] text-[#1e3a5f]">
                About
                <br />
                Maple Leaf Montessori
              </h1>

              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#1e3a5f] inline-flex items-center gap-2 flex-wrap">
                Daycare Coming Soon in Calgary
                <FaLeaf className="text-green-500 text-xl lg:text-2xl" />
              </p>

              <p className="text-sm md:text-base text-[#3d5a73] leading-relaxed mt-5 max-w-md">
                Maple Leaf Montessori is preparing to open our licensed Montessori
                daycare in Calgary. In the meantime, our{' '}
                <span className="text-[#c72a7a] font-semibold">
                  Homecare Services are available now
                </span>
                , providing dependable support for children, seniors and households
                across Calgary.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link
                  to="/our-services"
                  className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaHome className="text-sm" />
                  Explore Homecare Services
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#c72a7a] text-[#c72a7a] hover:bg-[#c72a7a] hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
                >
                  <FaCalendarAlt className="text-sm" />
                  Learn About Our Daycare
                </Link>
              </div>

              {/* Brighter Futures Together */}
              <div
                className="hidden sm:block absolute bottom-6 left-6 lg:left-10 pointer-events-none select-none"
                aria-hidden="true"
              >
                <div
                  className="text-[#3cb878] font-bold leading-[0.92]"
                  style={{
                    fontFamily: '"Caveat", cursive',
                    transform: 'rotate(-8deg)',
                  }}
                >
                  <span className="block text-[26px] sm:text-[30px] lg:text-[34px]">
                    Brighter Futures Together
                  </span>
                </div>
                <FaHeart className="text-[#c72a7a]/45 text-base mt-1 ml-2" />
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[260px] md:min-h-full">
              <img
                src="/aboutpics/01_about_hero.webp"
                alt="Educator guiding children at Maple Leaf Montessori"
                className="absolute inset-0 w-full h-full object-cover md:rounded-l-[48px]"
              />
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <FaStar className="text-amber-400 text-[10px]" />
                  <p className="text-[#c72a7a] font-extrabold text-sm leading-none">
                    Respect
                  </p>
                </div>
                <p className="text-sky-600 font-extrabold text-sm leading-tight">
                  Learn
                </p>
                <p className="text-green-600 font-extrabold text-sm leading-tight">
                  Grow
                </p>
                <p className="text-purple-600 font-extrabold text-sm leading-tight">
                  Thrive
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
