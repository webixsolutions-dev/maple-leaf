import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaHome, FaArrowRight, FaLeaf } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MoreUpdatesComingSoon = () => {
  return (
    <section className="font-montserrat bg-[#fff8f8] py-14 md:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="relative flex-shrink-0 mt-1">
                <FaHeart className="text-[#c72a7a] text-xl" />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[-20deg]" />
                  <span className="w-0.5 h-2.5 bg-amber-400 rounded-full" />
                  <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[20deg]" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] leading-tight">
                More Updates{' '}
                <span className="inline-flex items-center gap-1.5">
                  <FaLeaf className="text-green-500 text-xl md:text-2xl" />
                </span>
                <br />
                <span className="text-[#c72a7a]">Coming Soon</span>
              </h2>
            </div>

            <div className="space-y-1 text-sm md:text-base text-[#3d5a73] leading-relaxed mb-7 max-w-xl">
              <p>Our Maple Leaf Montessori daycare is coming soon.</p>
              <p>More website updates will be added soon.</p>
              <p>
                In the meantime, our Homecare Services are available for
                children, seniors and households.
              </p>
            </div>

            <Link
              to="/our-services"
              className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaHome className="text-sm" />
              Explore Homecare Services
              <FaArrowRight className="text-xs" />
            </Link>
          </motion.div>

          {/* Right decorative */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:flex items-center justify-center min-w-[280px] min-h-[220px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 bg-[#f4c4d0]/50 rounded-full blur-sm" />
            </div>

            <div className="relative">
              <FaHeart className="absolute -top-6 left-8 text-[#c72a7a]/50 text-sm" />
              <p
                className="text-green-500 font-bold text-2xl leading-snug text-center"
                style={{
                  fontFamily: '"Caveat", cursive',
                  transform: 'rotate(-12deg)',
                }}
              >
                Same Care
                <br />
                Brighter
                <br />
                Tomorrows
              </p>
            </div>

            <div className="absolute bottom-0 right-0 flex gap-1 items-end">
              <div className="w-8 h-10 bg-amber-300/70 rounded-full rounded-bl-none rotate-[-25deg]" />
              <div className="w-7 h-9 bg-orange-300/60 rounded-full rounded-bl-none rotate-[-10deg]" />
              <div className="w-8 h-11 bg-green-400/50 rounded-full rounded-bl-none rotate-[15deg]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoreUpdatesComingSoon;
