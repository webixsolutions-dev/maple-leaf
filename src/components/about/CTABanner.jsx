import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHome, FaArrowRight } from 'react-icons/fa';

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
      className="font-montserrat relative w-full overflow-hidden rounded-[28px] sm:rounded-[2rem] lg:aspect-[2.35/1] lg:max-h-[520px] -mt-8 sm:-mt-10 lg:-mt-12"
    >
      <img
        src="/Samecare.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-auto block lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center"
      />

      <div className="relative z-10 flex lg:absolute lg:inset-0 lg:items-start lg:pt-[10%] px-5 sm:px-8 lg:px-0 py-8 sm:py-10 lg:py-0">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-0 lg:items-start">
          {/* Left — Daycare Coming Soon */}
          <div className="relative pl-[15%] sm:pl-[18%] lg:pl-[33%] xl:pl-[35%] lg:pr-8 xl:pr-10">
            <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] font-bold text-[#1e3a5f] leading-tight">
              Maple Leaf Montessori
            </h3>
            <p className="font-heading text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] font-bold text-[#c72a7a] leading-tight mt-0.5">
              Daycare Coming Soon
            </p>

            <p className="text-sm md:text-base text-[#3d5a73] leading-relaxed max-w-md mt-4">
              A nurturing Montessori daycare is on the way to Calgary!
            </p>
          </div>

          {/* Right — Homecare Services */}
          <div className="relative lg:pl-8 xl:pl-10 lg:pr-[14%] xl:pr-[16%]">
            <div className="flex items-start gap-2 mb-3">
              <FaLeaf className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] font-bold text-green-600 leading-tight">
                  Homecare Services
                </h3>
                <p className="font-heading text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] font-bold text-[#1e3a5f] leading-tight mt-0.5">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTABanner;
