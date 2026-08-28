import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { CHILD_CARE_ICONS } from './childCareServicesAssets';
import ChildCareInfoCard from './ChildCareInfoCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    title: 'Full-time Nannies',
    description: 'Dedicated full-time care for your children with love and attention.',
    icon: CHILD_CARE_ICONS.fullTimeNannies,
    alt: 'Full-time Nannies',
    color: 'pink',
  },
  {
    title: 'Part-time Nannies',
    description: "Flexible part-time care that fits your family's schedule.",
    icon: CHILD_CARE_ICONS.partTimeNannies,
    alt: 'Part-time Nannies',
    color: 'green',
  },
  {
    title: 'Live-in Nannies',
    description: 'Round-the-clock support and care right in your home.',
    icon: CHILD_CARE_ICONS.liveInNannies,
    alt: 'Live-in Nannies',
    color: 'purple',
  },
  {
    title: 'Babysitters',
    description: 'Safe and engaging care for your children when you need it.',
    icon: CHILD_CARE_ICONS.babysitters,
    alt: 'Babysitters',
    color: 'orange',
  },
  {
    title: 'In-home Support',
    description: 'Reliable assistance with daily living activities at home.',
    icon: CHILD_CARE_ICONS.inHomeSupport,
    alt: 'In-home Support',
    color: 'blue',
  },
];

const ChildCareServicesGrid = () => (
  <section>
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-8"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-3 flex-wrap justify-center">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.ourVision}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
        Our Child Care Services
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.ourVision}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {services.map((service, index) => (
        <ChildCareInfoCard key={service.title} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ChildCareServicesGrid;
