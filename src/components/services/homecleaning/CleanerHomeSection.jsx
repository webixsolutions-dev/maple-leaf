import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import ServicePhoto from '../childcare/ServicePhoto';
import { HOME_CLEANING_IMAGES, SERVICE_PHOTO_RADIUS } from './homeCleaningServicesAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CleanerHomeSection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden bg-pink-50 rounded-3xl p-6 sm:p-8"
  >
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-start gap-3 mb-3">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourVision}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            A Cleaner Home. A Healthier You.
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Professional cleaning services you can trust, so you can focus on what
          matters most.
        </p>
      </div>

      <ServicePhoto
        src={HOME_CLEANING_IMAGES.cleanerHome}
        alt="Bright living room with sofa and plants"
        label="Bright living room with sofa and plants"
        aspectRatio="4/3"
        rounded={SERVICE_PHOTO_RADIUS}
        className="w-full"
      />
    </div>
  </motion.section>
);

export default CleanerHomeSection;
