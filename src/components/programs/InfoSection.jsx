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
      className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[2rem] lg:aspect-[2.35/1] lg:max-h-[520px]"
    >
      <img
        src="/montsori.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center lg:h-[115%] lg:-translate-y-[10%]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white/95 lg:hidden pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 px-5 sm:px-8 pb-8 pt-32 sm:pt-36 min-h-[560px] sm:min-h-[600px] flex flex-col justify-end lg:absolute lg:inset-0 lg:min-h-0 lg:flex lg:items-center lg:justify-center lg:px-[5%] lg:py-6 lg:pt-6">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-0 lg:items-center">
          {/* Left — Daycare Coming Soon */}
          <div className="relative lg:pr-8 lg:border-r lg:border-pink-200/60">
            <p className="text-[#E0115F] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Same Care. Brighter Tomorrows.
            </p>

            <div className="flex items-start gap-3 mb-4 sm:mb-5">
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.15rem] text-[#0F172A] leading-[1.15]">
                  Maple Leaf Montessori Daycare
                </h3>
                <p className="font-serif font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.15rem] text-[#E0115F] leading-[1.15] mt-1">
                  Coming Soon
                </p>
              </div>
              <div className="relative flex-shrink-0 mt-1" aria-hidden="true">
                <FaHeart className="text-[#E0115F] text-xl sm:text-2xl" />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[-20deg]" />
                  <span className="w-0.5 h-2.5 bg-amber-400 rounded-full" />
                  <span className="w-0.5 h-2 bg-amber-400 rounded-full rotate-[20deg]" />
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              Our licensed Montessori daycare in Calgary is on the way, and we
              can&apos;t wait to welcome families soon.
            </p>
          </div>

          {/* Right — Homecare Available Now */}
          <div className="relative lg:pl-8">
            <FaSun
              className="absolute -top-1 right-0 text-amber-400 text-2xl sm:text-3xl pointer-events-none"
              aria-hidden="true"
            />

            <p className="text-[#00A859] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 pr-10">
              Supporting Families Today.
            </p>

            <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-5">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.15rem] text-[#0F172A] leading-[1.15]">
                Homecare Services Available Now
              </h3>
              <FaHome className="text-[#00A859] text-xl sm:text-2xl mt-1 flex-shrink-0" />
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 sm:mb-6 max-w-lg">
              While our daycare programs are being prepared, our Homecare Services
              are available now for children, seniors, individuals, and
              households across Calgary.
            </p>

            <Link
              to="/our-services"
              className="inline-flex items-center gap-2.5 bg-[#00A859] hover:bg-[#00924D] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaHome className="text-base" />
              Explore Homecare Services
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoSection;
