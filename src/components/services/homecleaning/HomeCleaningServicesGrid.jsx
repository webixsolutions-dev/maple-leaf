import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import ChildCareInfoCard from '../childcare/ChildCareInfoCard';
import { HOME_CLEANING_ICONS } from './homeCleaningServicesAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    title: 'Maid Services',
    description: 'General cleaning and household maintenance.',
    icon: HOME_CLEANING_ICONS.maidServices,
    alt: 'Maid Services',
    color: 'pink',
  },
  {
    title: 'House Cleaning',
    description: 'Thorough cleaning for a fresh and healthy home.',
    icon: HOME_CLEANING_ICONS.houseCleaning,
    alt: 'House Cleaning',
    color: 'green',
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning for a cleaner, healthier environment.',
    icon: HOME_CLEANING_ICONS.carpetCleaning,
    alt: 'Carpet Cleaning',
    color: 'purple',
  },
  {
    title: 'Window and Gutter Cleaning',
    description: 'Sparkling windows and clean gutters for a safer home.',
    icon: HOME_CLEANING_ICONS.windowAndGutterCleaning,
    alt: 'Window and Gutter Cleaning',
    color: 'orange',
  },
];

const HomeCleaningServicesGrid = () => (
  <section>
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-8"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-3 flex-wrap justify-center">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.left}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
        Our Home Cleaning Services
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.right}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {services.map((service, index) => (
        <ChildCareInfoCard key={service.title} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default HomeCleaningServicesGrid;
