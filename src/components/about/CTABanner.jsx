import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaLeaf, FaHome, FaArrowRight } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CTABanner = () => {
  return (
    <motion.section
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="font-montserrat relative overflow-hidden bg-[#fff5f5] border border-pink-100/80 rounded-[28px] px-6 sm:px-8 lg:px-10 py-8 md:py-10"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left — Daycare Coming Soon */}
        <div className="relative lg:pr-8 lg:border-r lg:border-pink-200/60">
          <div className="flex items-start gap-3 mb-4">
            <div className="relative flex-shrink-0 mt-1">
              <FaHeart className="text-[#c72a7a] text-xl" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[-20deg]" />
                <span className="w-0.5 h-2.5 bg-amber-400 rounded-full" />
                <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[20deg]" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-[#1e3a5f] leading-tight">
                Maple Leaf Montessori
              </h3>
              <p className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-[#c72a7a] leading-tight mt-0.5">
                Daycare Coming Soon
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-[#3d5a73] leading-relaxed max-w-md">
            A nurturing Montessori daycare is on the way to Calgary!
          </p>

          {/* Decorative leaves */}
          <div
            className="hidden sm:flex absolute bottom-0 left-0 gap-1 items-end opacity-80"
            aria-hidden="true"
          >
            <div className="w-7 h-9 bg-amber-300/70 rounded-full rounded-bl-none rotate-[-25deg]" />
            <div className="w-6 h-8 bg-green-300/60 rounded-full rounded-bl-none rotate-[-8deg]" />
            <div className="w-7 h-10 bg-teal-400/50 rounded-full rounded-bl-none rotate-[12deg]" />
          </div>
        </div>

        {/* Right — Homecare Services */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4c4d0]/40 rounded-full blur-xl pointer-events-none" aria-hidden="true" />

          <div className="flex items-start gap-2 mb-3">
            <FaLeaf className="text-green-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-green-600 leading-tight">
                Homecare Services
              </h3>
              <p className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-[#1e3a5f] leading-tight mt-0.5">
                Available Now
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-[#3d5a73] leading-relaxed mb-6 max-w-lg">
            While our daycare prepares to open, our Homecare Services are
            available now to support children, seniors, and households across
            Calgary.
          </p>

          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <FaHome className="text-sm" />
            Explore Homecare Services
            <FaArrowRight className="text-xs" />
          </Link>

          <FaHeart
            className="hidden sm:block absolute bottom-16 right-16 text-[#c72a7a]/40 text-sm"
            aria-hidden="true"
          />

          <p
            className="hidden lg:block absolute bottom-2 right-0 text-green-500 font-bold text-xl leading-snug pointer-events-none select-none"
            style={{
              fontFamily: '"Caveat", cursive',
              transform: 'rotate(-10deg)',
            }}
            aria-hidden="true"
          >
            Same Care
            <br />
            Brighter Tomorrows
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CTABanner;
