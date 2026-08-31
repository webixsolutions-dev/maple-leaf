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
    className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]"
    style={{ backgroundImage: `url('${HOME_CLEANING_IMAGES.cleanerHome}')` }}
  >
    <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[55%] min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
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
  </motion.section>
);

export default CleanerHomeSection;
