import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaHome,
  FaArrowRight,
  FaSun,
} from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const InfoSection = () => {
  return (
    <motion.section
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-white border border-pink-100/80 rounded-[28px] sm:rounded-[2rem] px-6 sm:px-8 lg:px-10 py-8 md:py-10"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left — Daycare Coming Soon */}
        <div className="relative lg:pr-8 lg:border-r lg:border-pink-200/60">
          <p className="text-[#E0115F] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Same Care. Brighter Tomorrows.
          </p>

          <div className="flex items-start gap-3 mb-4">
            <div className="flex-1">
              <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-[1.65rem] text-[#0F172A] leading-tight">
                Maple Leaf Montessori Daycare
              </h3>
              <p className="font-serif font-bold text-xl sm:text-2xl md:text-[1.65rem] text-[#E0115F] leading-tight mt-0.5">
                Coming Soon
              </p>
            </div>
            <div className="relative flex-shrink-0 mt-1" aria-hidden="true">
              <FaHeart className="text-[#E0115F] text-xl" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[-20deg]" />
                <span className="w-0.5 h-2.5 bg-amber-400 rounded-full" />
                <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[20deg]" />
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
            Our licensed Montessori daycare in Calgary is on the way, and we
            can&apos;t wait to welcome families soon.
          </p>

          {/* Decorative script text */}
          <div
            className="hidden sm:block absolute bottom-0 right-4 lg:right-8 pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 bg-[#f4c4d0]/35 rounded-full blur-sm" />
              </div>
              <FaHeart className="absolute -top-2 left-4 text-[#E0115F]/40 text-xs" />
              <p
                className="relative text-[#3cb878] font-bold text-xl leading-snug"
                style={{
                  fontFamily: '"Caveat", cursive',
                  transform: 'rotate(-10deg)',
                }}
              >
                Grow Learn
                <br />
                Belong
              </p>
            </div>
          </div>
        </div>

        {/* Right — Homecare Available Now */}
        <div className="relative">
          <FaSun
            className="absolute top-0 right-0 text-amber-400 text-2xl sm:text-3xl pointer-events-none"
            aria-hidden="true"
          />

          <p className="text-[#00A859] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Supporting Families Today.
          </p>

          <div className="flex items-start gap-2 mb-4">
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-[1.65rem] text-[#0F172A] leading-tight">
              Homecare Services Available Now
            </h3>
            <FaHome className="text-[#00A859] text-xl mt-1 flex-shrink-0" />
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-lg">
            While our daycare admissions are being prepared, our Homecare
            Services are available now for children, seniors, individuals, and
            households across Calgary.
          </p>

          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 bg-[#00A859] hover:bg-[#00924D] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <FaHome className="text-sm" />
            Explore Homecare Services
            <FaArrowRight className="text-xs" />
          </Link>

          {/* Bottom-right leaves */}
          <div
            className="hidden sm:flex absolute bottom-0 right-0 gap-1 items-end pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-7 h-9 bg-amber-300/70 rounded-full rounded-bl-none rotate-[-25deg]" />
            <div className="w-6 h-8 bg-green-300/60 rounded-full rounded-bl-none rotate-[-8deg]" />
            <div className="w-7 h-10 bg-teal-400/50 rounded-full rounded-bl-none rotate-[12deg]" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
