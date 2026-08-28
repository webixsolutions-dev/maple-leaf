import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { SENIOR_PERSONAL_CARE_IMAGES } from './seniorPersonalCareAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ComfortDignitySection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]"
    style={{ backgroundImage: `url('${SENIOR_PERSONAL_CARE_IMAGES.comfort}')` }}
  >
    <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[55%] min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
      <div className="flex items-start gap-3 mb-3">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.right}
          alt=""
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
        />
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1a2f4a]">
          Comfort, Dignity & Independence
        </h2>
      </div>
      <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed pl-11 sm:pl-12">
        We support your loved ones with compassionate care, helping them live
        safely and comfortably at home.
      </p>
    </div>
  </motion.section>
);

export default ComfortDignitySection;
