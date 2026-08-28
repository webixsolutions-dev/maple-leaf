import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS } from './homeServicesAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const VisionMissionSection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden bg-pink-50 rounded-3xl p-6 sm:p-8"
  >
    <div className="grid md:grid-cols-2 gap-8 md:gap-0">
      <div className="md:border-r md:border-pink-200 md:pr-8">
        <div className="flex items-start gap-3 mb-3">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourVision}
            alt="Our Vision"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <h2 className="text-xl sm:text-2xl font-extrabold text-green-600">Our Vision</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          To make every home a place of comfort, support, dignity, and well-being.
        </p>
      </div>

      <div className="md:pl-8">
        <div className="flex items-start gap-3 mb-3">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourMission}
            alt="Our Mission"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#c72a7a]">Our Mission</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Our mission is to make a meaningful difference in the lives of individuals
          and families by providing safe, respectful, and dependable home-based services.
        </p>
      </div>
    </div>

    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 opacity-20 pointer-events-none">
      <HomeServiceIcon
        src={HOME_SERVICE_ICONS.ourVision}
        alt=""
        className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
      />
    </div>
  </motion.section>
);

export default VisionMissionSection;
