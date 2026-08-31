import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS, HOME_SERVICE_IMAGES } from './homeServicesAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const VisionMissionSection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-6 sm:p-8 lg:p-10"
    style={{ backgroundImage: `url('${HOME_SERVICE_IMAGES.visionMissionBackground}')` }}
  >
    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12">
      <div className="md:pr-8">
        <div className="flex items-start gap-3 mb-3">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourVision}
            alt="Our Vision"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-green-600">
            Our Vision
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed">
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
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#c72a7a]">
            Our Mission
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed">
          Our mission is to make a meaningful difference in the lives of individuals
          and families by providing safe, respectful, and dependable home-based services.
          We are dedicated to meeting the changing needs of those we serve while promoting
          independence, wellness, dignity, and a strong sense of belonging within the
          home and community.
        </p>
      </div>
    </div>
  </motion.section>
);

export default VisionMissionSection;
