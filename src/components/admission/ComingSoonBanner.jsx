import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaHome, FaArrowRight, FaLeaf } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ComingSoonBanner = () => {
  return (
    <motion.section
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-white border border-pink-100/80 rounded-[28px] sm:rounded-[2rem] px-6 sm:px-10 lg:px-14 py-10 md:py-14 text-center"
    >
      {/* Top-left heart */}
      <div
        className="absolute top-6 left-6 sm:top-8 sm:left-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative">
          <FaHeart className="text-[#E0115F] text-xl sm:text-2xl" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
            <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[-20deg]" />
            <span className="w-0.5 h-2.5 bg-amber-400 rounded-full" />
            <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[20deg]" />
          </div>
        </div>
      </div>

      {/* Top-right leaf */}
      <FaLeaf
        className="absolute top-6 right-6 sm:top-8 sm:right-10 text-green-500 text-lg sm:text-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom-left leaves */}
      <div
        className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 flex gap-1 items-end pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-7 h-9 bg-amber-300/70 rounded-full rounded-bl-none rotate-[-25deg]" />
        <div className="w-6 h-8 bg-green-300/60 rounded-full rounded-bl-none rotate-[-8deg]" />
        <div className="w-7 h-10 bg-teal-400/50 rounded-full rounded-bl-none rotate-[12deg]" />
      </div>

      {/* Right decorative script text */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-[#f4c4d0]/40 rounded-full blur-sm" />
          </div>
          <FaHeart className="absolute -top-4 left-6 text-[#E0115F]/40 text-sm" />
          <p
            className="relative text-[#3cb878] font-bold text-2xl leading-snug text-center"
            style={{
              fontFamily: '"Caveat", cursive',
              transform: 'rotate(-12deg)',
            }}
          >
            Bright Learners
            <br />
            Brighter
            <br />
            Tomorrows
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F172A] leading-tight">
          Admissions Information
          <br />
          <span className="text-[#E0115F]">Coming Soon</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 mb-8">
          We are preparing our admission details, enrolment information, and
          updates for families. Until then, families can explore our currently
          available Homecare Services.
        </p>

        <Link
          to="/our-services"
          className="inline-flex items-center gap-2 bg-[#E0115F] hover:bg-[#C72A7A] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <FaHome className="text-sm" />
          Explore Homecare Services
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </motion.section>
  );
};

export default ComingSoonBanner;
