import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight, FaLeaf } from 'react-icons/fa';

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
          {/* Left content — heart & sparkles are in the background image */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative z-10 pl-10 sm:pl-14 lg:pl-16 xl:pl-20"
          >
            <h2 className="font-heading text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-[#1e3a5f] leading-[1.2] mb-5">
              More Updates
              <br />
              <span className="relative inline-block text-[#c72a7a]">
                Coming Soon
                <FaLeaf
                  className="absolute -top-4 sm:-top-5 left-[calc(100%-0.25rem)] text-green-500 text-base sm:text-lg"
                  aria-hidden="true"
                />
              </span>
            </h2>

            <div className="space-y-0.5 text-sm md:text-[15px] text-[#3d5a73] leading-relaxed mb-7 max-w-md lg:max-w-lg">
              <p>Our Maple Leaf Montessori daycare is coming soon.</p>
              <p>More website updates will be added soon.</p>
              <p>
                In the meantime, our Homecare Services are available for
                children, seniors and households.
              </p>
            </div>

            <Link
              to="/our-services"
              className="inline-flex items-center gap-3 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm sm:text-[15px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaHome className="text-base flex-shrink-0" />
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
