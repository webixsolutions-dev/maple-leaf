import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import ChildCareInfoCard from '../childcare/ChildCareInfoCard';
import { SENIOR_PERSONAL_CARE_ICONS } from './seniorPersonalCareAssets';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    title: 'Companionship',
    description: 'Meaningful companionship and emotional support.',
    icon: SENIOR_PERSONAL_CARE_ICONS.companionship,
    alt: 'Companionship',
    color: 'pink',
  },
  {
    title: 'Personal Care',
    description: 'Assistance with bathing, dressing, grooming & more.',
    icon: SENIOR_PERSONAL_CARE_ICONS.personalCare,
    alt: 'Personal Care',
    color: 'green',
  },
  {
    title: 'Transportation',
    description: 'Safe transportation to appointments, school & more.',
    icon: SENIOR_PERSONAL_CARE_ICONS.transportation,
    alt: 'Transportation',
    color: 'purple',
  },
  {
    title: 'Meal Preparation',
    description: 'Nutritious meals prepared with care and attention.',
    icon: SENIOR_PERSONAL_CARE_ICONS.mealPreparation,
    alt: 'Meal Preparation',
    color: 'orange',
  },
  {
    title: 'Light Housekeeping',
    description: 'Keeping your home clean, organized & comfortable.',
    icon: SENIOR_PERSONAL_CARE_ICONS.lightHousekeeping,
    alt: 'Light Housekeeping',
    color: 'blue',
  },
];

const SeniorPersonalCareServicesGrid = () => (
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
        Our Senior & Personal Care Services
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.right}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {services.map((service, index) => (
        <ChildCareInfoCard key={service.title} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default SeniorPersonalCareServicesGrid;
