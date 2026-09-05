import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaHome,
  FaCalendarAlt,
  FaArrowRight,
} from 'react-icons/fa';

const HomecareButton = ({ className = '' }) => (
  <Link
    to="/our-services"
    className={`inline-flex items-center gap-2 bg-[#008f4c] hover:bg-[#007a42] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0 ${className}`}
  >
    <FaHome className="text-sm" />
    Avail Homecare Services
    <FaArrowRight className="text-xs" />
  </Link>
);

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
        <HomecareButton />
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="font-montserrat relative bg-[#fdf8f6]">
      <TopAnnouncementBanner />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-14 md:pt-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left content */}
          <div className="relative pr-20 sm:pr-28 lg:pr-36">
            <FaSun className="absolute top-0 right-6 sm:right-12 lg:right-24 text-amber-400 text-3xl lg:text-4xl opacity-90" />

            <div className="inline-flex items-center gap-2 bg-[#c72a7a] text-white font-semibold text-[10px] md:text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              <FaHeart className="text-[9px]" />
              Where Curiosity Grows Every Day
            </div>

            <h1 className="font-heading font-bold leading-[1.15]">
              <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-[#1e3a5f] whitespace-nowrap">
                Maple Leaf Montessori
              </span>
              <span className="mt-1 flex items-center gap-2 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-[#c72a7a] whitespace-nowrap">
                Daycare Opening Soon
                <FaLeaf className="text-green-500 text-xl lg:text-2xl flex-shrink-0" />
              </span>
            </h1>

            <div className="relative mt-5 max-w-md">
              <p className="text-sm md:text-base text-[#3d5a73] leading-relaxed">
                Our licensed Montessori daycare is preparing to welcome families
                in Calgary. In the meantime, our{' '}
                <span className="text-[#c72a7a] font-semibold">
                  Homecare Services
                </span>{' '}
                are available now, providing dependable support for children,
                seniors and households.
              </p>
            </div>

            {/* Brighter Futures Together — diagonal decorative text */}
            <div
              className="hidden sm:block absolute right-0 lg:right-2 top-[52%] lg:top-[56%] pointer-events-none select-none"
              aria-hidden="true"
            >
              <div
                className="text-[#3cb878] font-bold leading-[0.92] text-center"
                style={{
                  fontFamily: '"Caveat", cursive',
                  transform: 'rotate(-16deg)',
                }}
              >
                <span className="block text-[30px] sm:text-[34px] lg:text-[40px]">
                  Brighter
                </span>
                <span className="block text-[30px] sm:text-[34px] lg:text-[40px]">
                  Futures
                </span>
                <span className="block text-[30px] sm:text-[34px] lg:text-[40px]">
                  Together
                </span>
              </div>
              <FaHeart
                className="text-[#c72a7a]/45 text-lg mt-1 ml-6"
                style={{ transform: 'rotate(-16deg)' }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-10 lg:mt-12">
              <Link
                to="/our-services"
                className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaHome className="text-sm" />
                Explore Homecare Services
              </Link>
              <span
                className="inline-flex items-center gap-2 bg-white border-2 border-[#c72a7a] text-[#c72a7a] font-semibold text-sm px-6 py-2.5 rounded-full"
              >
                <FaCalendarAlt className="text-sm" />
                Daycare Coming Soon
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/homepics/01_hero_daycare.webp"
                alt="Child learning with colorful blocks at Maple Leaf Montessori"
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-md flex flex-col items-start gap-0.5">
                <p className="text-[#c72a7a] font-extrabold text-sm leading-tight">
                  Respect
                </p>
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

export default Hero;
