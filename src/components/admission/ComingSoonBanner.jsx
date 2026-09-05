import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

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
      className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[2rem] lg:aspect-[2.35/1] lg:max-h-[480px]"
    >
      <img
        src="/brightlearners.jpeg"
        alt=""
        aria-hidden="true"
        className="w-full h-auto block lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center"
      />

      <div className="relative z-10 flex items-center justify-center px-6 sm:px-10 py-10 md:py-12 lg:absolute lg:inset-0 lg:py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#0F172A] leading-tight">
            Admissions Information
            <br />
            <span className="text-[#E0115F]">Coming Soon</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-8 max-w-xl mx-auto">
            We are preparing our admission details, enrolment information, and
            updates for families. Until then, families can explore our currently
            available Homecare Services.
          </p>

          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 bg-[#E0115F] hover:bg-[#C72A7A] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <FaHome className="text-sm" />
            Explore Homecare Services
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ComingSoonBanner;
