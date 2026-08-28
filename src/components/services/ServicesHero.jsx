import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS } from './homeServicesAssets';
import ImagePlaceholder from './ImagePlaceholder';

const badges = [
  {
    label: 'Trusted Caregivers',
    icon: HOME_SERVICE_ICONS.trusted,
    alt: 'Trusted Caregivers',
  },
  {
    label: 'Safe & Reliable',
    icon: HOME_SERVICE_ICONS.safeAndReliable,
    alt: 'Safe & Reliable',
  },
  {
    label: 'Personalized Support',
    icon: HOME_SERVICE_ICONS.personalizedSupport,
    alt: 'Personalized Support',
  },
];

const ServicesHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white rounded-3xl">
    <div className="grid md:grid-cols-2 items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
      >
        <p className="inline-flex items-center gap-2 text-[#c72a7a] italic text-sm md:text-base mb-4">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourMission}
            alt=""
            className="w-5 h-5 object-contain"
          />
          Trusted care in the comfort of Home.
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
          Homecare{' '}
          <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
            Services
            <HomeServiceIcon
              src={HOME_SERVICE_ICONS.ourVision}
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
          </span>
        </h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4 max-w-md">
          Compassionate, respectful, and dependable home-based services designed to
          support individuals and families in the comfort of home.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 mt-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <HomeServiceIcon
                src={badge.icon}
                alt={badge.alt}
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain flex-shrink-0"
              />
              <span className="text-sm font-semibold text-gray-900">{badge.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="p-6 sm:p-8 lg:p-10 md:pl-0"
      >
        <ImagePlaceholder
          aspectRatio="16/10"
          label="Caregiver with senior photo"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);

export default ServicesHero;
