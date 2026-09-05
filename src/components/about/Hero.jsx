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

const HeroBanner = () => {
  return (
    <>
      {/* Announcement Banner — matches Homepage */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FEFCE8] border border-[#FDE68A] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs text-slate-700"
      >
        <div className="flex items-center gap-3.5">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FEF08A] flex items-center justify-center text-amber-500">
            <FaSun className="text-xl" />
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-bold text-slate-900">
              Daycare Opening Soon in Calgary!
            </span>{' '}
            Our licensed Montessori daycare is preparing to open. In the meantime,
            Homecare Services are available now to support your family.
          </p>
        </div>

        <Link
          to="/our-services"
          className="bg-[#00A859] hover:bg-[#00924D] text-white px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xs transition-all flex-shrink-0 w-full sm:w-auto justify-center"
        >
          <FaHome className="text-base" />
          <span>Avail Homecare Services</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </motion.div>

      {/* Hero Container — matches Homepage */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
      >
        {/* Brighter Futures Together — decorative, between text & image */}
        <div
          className="hidden sm:block absolute left-[52%] lg:left-[54%] top-[22%] lg:top-[24%] z-20 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div
            className="text-[#3cb878] font-bold leading-[0.92] text-center"
            style={{
              fontFamily: '"Caveat", cursive',
              transform: 'rotate(-14deg)',
            }}
          >
            <span className="block text-[26px] sm:text-[30px] lg:text-[36px]">
              Brighter
            </span>
            <span className="block text-[26px] sm:text-[30px] lg:text-[36px]">
              Futures
            </span>
            <span className="block text-[26px] sm:text-[30px] lg:text-[36px]">
              Together
            </span>
          </div>
          <FaHeart
            className="text-[#E0115F]/50 text-base mt-0.5 ml-4"
            style={{ transform: 'rotate(-14deg)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 relative z-10 flex flex-col items-start">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FCE7F3] text-[#E0115F] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-pink-200/60 shadow-xs mb-4">
              <FaHeart className="text-[#E0115F] text-xs" />
              <span>Where children learn, grow, and thrive</span>
            </div>

            {/* Sun Icon */}
            <FaSun className="text-amber-400 text-3xl sm:text-4xl absolute top-0 right-4 hidden sm:block pointer-events-none" />

            {/* Main Heading */}
            <h1 className="font-serif font-bold leading-[1.1] mt-1">
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#0F172A] tracking-tight">
                About
              </span>
              <span className="mt-1 flex items-center gap-2 flex-wrap text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#E0115F] tracking-tight">
                Maple Leaf Montessori
                <FaLeaf className="text-emerald-500 text-2xl sm:text-3xl -rotate-12 flex-shrink-0" />
              </span>
              <span className="mt-1 block text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight">
                Daycare Coming Soon in Calgary
              </span>
            </h1>

            {/* Body Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-xl">
              Maple Leaf Montessori is preparing to open our licensed Montessori
              daycare in Calgary. In the meantime, our{' '}
              <span className="text-[#E0115F] font-semibold">
                Homecare Services are available now
              </span>
              , providing dependable support for children, seniors and households
              across Calgary.
            </p>

            {/* Action Buttons — side by side */}
            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mt-8 w-full">
              <Link
                to="/our-services"
                className="bg-[#E0115F] hover:bg-[#C72A7A] text-white px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all flex-1 sm:flex-none whitespace-nowrap"
              >
                <FaHome className="text-lg flex-shrink-0" />
                <span>Explore Homecare Services</span>
              </Link>
              <Link
                to="/programs"
                className="bg-white hover:bg-pink-50 border-2 border-[#E0115F] text-[#E0115F] px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-xs flex-1 sm:flex-none whitespace-nowrap"
              >
                <FaCalendarAlt className="text-lg flex-shrink-0" />
                <span>Learn About Our Daycare</span>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white">
              <img
                src="/aboutpics/01_about_hero.webp"
                alt="Educator guiding children at Maple Leaf Montessori"
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-md flex flex-col items-start gap-0.5">
                <p className="text-[#E0115F] font-extrabold text-sm leading-tight">
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
        </div>
      </motion.div>
    </>
  );
};

export default HeroBanner;
