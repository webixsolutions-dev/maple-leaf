import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaHome,
  FaComments,
} from 'react-icons/fa';

const ProgramsHero = () => {
  return (
    <>
      {/* Announcement Banner */}
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
            Our licensed Montessori daycare is preparing to open. In the
            meantime,{' '}
            <Link
              to="/our-services"
              className="text-[#2563EB] font-semibold hover:underline"
            >
              Homecare Services
            </Link>{' '}
            are available now to support your family.
          </p>
        </div>
      </motion.div>

      {/* Hero Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 relative z-10 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#E0115F] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-xs mb-4">
              <FaHeart className="text-[9px] sm:text-xs" />
              <span>Where children learn, grow, and thrive</span>
            </div>

            <FaSun className="text-amber-400 text-3xl sm:text-4xl absolute top-0 right-4 hidden sm:block pointer-events-none" />

            <h1 className="font-serif font-bold leading-[1.1] mt-1">
              <span className="inline-flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#0F172A] tracking-tight">
                Programs
                <FaLeaf className="text-emerald-500 text-2xl sm:text-3xl -rotate-12 flex-shrink-0" />
              </span>
              <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] text-[#E0115F] tracking-tight leading-tight">
                Maple Leaf Montessori Daycare Coming Soon in Calgary
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-xl">
              Our Montessori daycare programs are currently being prepared, and
              we will share full program details soon. In the meantime, our{' '}
              <span className="text-[#E0115F] font-semibold">
                Homecare Services
              </span>{' '}
              are available now for children, seniors, individuals, and
              households across Calgary.
            </p>

            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mt-8 w-full">
              <Link
                to="/our-services"
                className="bg-[#E0115F] hover:bg-[#C72A7A] text-white px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all flex-1 sm:flex-none whitespace-nowrap"
              >
                <FaHome className="text-lg flex-shrink-0" />
                <span>Explore Homecare Services</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-pink-50 border-2 border-[#E0115F] text-[#E0115F] px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-xs flex-1 sm:flex-none whitespace-nowrap"
              >
                <FaComments className="text-lg flex-shrink-0" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white">
              <img
                src="/heroprogram.webp"
                alt="Child learning with Montessori materials at Maple Leaf Montessori"
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="hidden sm:flex absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-md flex-col items-start gap-0.5">
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

export default ProgramsHero;
