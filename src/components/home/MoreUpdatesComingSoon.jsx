import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MoreUpdatesComingSoon = () => {
  return (
    <section
      className="font-montserrat relative overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20 bg-[#f0f9f4]"
      style={{
        backgroundImage: 'url(/homebanner.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
          {/* Left content — aligned with heart in background image */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative z-10 pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-8 pt-6 sm:pt-8"
          >
            <h2 className="font-heading text-[1.85rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-[1.15] mb-5 mt-[5%]">
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                More Updates
                <img
                  src="/right.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain inline-block flex-shrink-0 -mt-1"
                />
              </span>
              <br />
              <span className="text-[#c72a7a]">Coming Soon</span>
            </h2>

            <div className="space-y-1 text-base sm:text-lg md:text-xl text-[#3d5a73] leading-relaxed mb-8 max-w-lg lg:max-w-xl">
              <p>Our Maple Leaf Montessori daycare is coming soon.</p>
              <p>More website updates will be added soon.</p>
              <p>
                In the meantime, our Homecare Services are available for
                children, seniors and households.
              </p>
            </div>

            <Link
              to="/our-services"
              className="inline-flex items-center gap-3 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-base sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaHome className="text-lg flex-shrink-0" />
              <span>Explore Homecare Services</span>
              <FaArrowRight className="text-sm flex-shrink-0" />
            </Link>
          </motion.div>

          {/* Right — script text overlays the pink wash in the background */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:flex items-center justify-center lg:justify-end lg:pr-6 xl:pr-14 pointer-events-none select-none"
            aria-hidden="true"
          >
            <p
              className="text-[#3cb878] font-bold text-[30px] xl:text-[34px] leading-[0.92]"
              style={{
                fontFamily: '"Caveat", cursive',
                transform: 'rotate(-12deg)',
              }}
            >
              <span className="block">Same Care</span>
              <span className="block">Brighter</span>
              <span className="block">Tomorrows</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoreUpdatesComingSoon;
