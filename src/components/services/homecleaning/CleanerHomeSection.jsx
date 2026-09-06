import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { HOME_CLEANING_IMAGES } from './homeCleaningServicesAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CleanerHomeSection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-3xl bg-[#faf8f5] lg:bg-transparent lg:min-h-[300px] flex flex-col lg:block"
  >
    <div
      className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${HOME_CLEANING_IMAGES.cleanerHome}')` }}
      aria-hidden="true"
    />

    <div className="relative z-10 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[55%] lg:min-h-[300px]">
      <div className="flex items-start gap-3 mb-3">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.left}
          alt=""
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
        />
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1a2f4a]">
          A Cleaner Home. A Healthier You.
        </h2>
      </div>
      <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed pl-11 sm:pl-12">
        Professional cleaning services you can trust, so you can focus on what
        matters most.
      </p>
    </div>

    <img
      src={HOME_CLEANING_IMAGES.cleanerHome}
      alt="Professional cleaner maintaining a healthy home"
      className="lg:hidden w-full aspect-[5/4] sm:aspect-[16/10] object-cover object-right block shrink-0 leading-none"
    />
  </motion.section>
);

export default CleanerHomeSection;
