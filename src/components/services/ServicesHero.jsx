import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS, HOME_SERVICE_IMAGES } from './homeServicesAssets';

const badges = [
  {
    lines: ['Trusted', 'Caregivers'],
    icon: HOME_SERVICE_ICONS.trusted,
    alt: 'Trusted Caregivers',
  },
  {
    lines: ['Safe &', 'Reliable'],
    icon: HOME_SERVICE_ICONS.safeAndReliable,
    alt: 'Safe & Reliable',
  },
  {
    lines: ['Personalized', 'Support'],
    icon: HOME_SERVICE_ICONS.personalizedSupport,
    alt: 'Personalized Support',
  },
];

const ServicesHero = () => (
  <section
    className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
    style={{ backgroundImage: `url('${HOME_SERVICE_IMAGES.heroBackground}')` }}
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[52%] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
    >
      <p className="inline-flex items-center gap-2 text-[#c72a7a] italic text-sm md:text-base mb-4 font-heading">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.ourMission}
          alt=""
          className="w-5 h-5 object-contain"
        />
        Trusted care in the comfort of Home.
      </p>

      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
        <span className="text-[#1a2f4a]">Homecare</span>{' '}
        <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
          Services
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.right}
            alt=""
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </span>
      </h1>

      <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed mt-4 max-w-md">
        Compassionate, respectful, and dependable home-based services designed to
        support individuals and families in the comfort of home.
      </p>

      <div className="flex items-center mt-6 divide-x divide-pink-200">
        {badges.map((badge) => (
          <div
            key={badge.alt}
            className="flex items-center gap-3 px-4 sm:px-5 first:pl-0 last:pr-0"
          >
            <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
              <HomeServiceIcon
                src={badge.icon}
                alt={badge.alt}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
            </div>
            <div className="text-sm font-bold text-[#1a2f4a] leading-tight">
              {badge.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ServicesHero;
