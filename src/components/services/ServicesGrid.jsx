import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS, HOME_SERVICE_IMAGES } from './homeServicesAssets';
import ServiceCard from './ServiceCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    title: 'Child Care Services',
    description: 'Nurturing, safe and reliable care for your little ones.',
    image: HOME_SERVICE_IMAGES.childCare,
    imageLabel: 'Caregiver playing with child',
    to: '/our-services/child-care',
  },
  {
    title: 'Senior & Personal Care',
    description: 'Compassionate care for seniors and individuals.',
    image: HOME_SERVICE_IMAGES.seniorPersonalCare,
    imageLabel: 'Caregiver with elderly woman',
    to: '/our-services/senior-personal-care',
  },
  {
    title: 'Home Cleaning Services',
    description: 'A clean and healthy home for your peace of mind.',
    image: HOME_SERVICE_IMAGES.homeCleaning,
    imageLabel: 'Caregiver cleaning a home',
    to: '/our-services/home-cleaning',
  },
];

const ServicesGrid = () => (
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
        Our Homecare Services
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.right}
          alt=""
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        We offer a range of home-based services to meet the unique needs of children,
        families, seniors, and individuals in your home.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {services.map((service, index) => (
        <ServiceCard key={service.to} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default ServicesGrid;
