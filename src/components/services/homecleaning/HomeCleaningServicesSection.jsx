import { useState } from 'react';
import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { HOME_CLEANING_SERVICES } from '../serviceDetailsData';
import ChildCareInfoCard from '../childcare/ChildCareInfoCard';
import { HOME_CLEANING_COLORS } from './homeCleaningServicesAssets';
import HomeCleaningAccordion from './HomeCleaningAccordion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HomeCleaningServicesSection = () => {
  const [openId, setOpenId] = useState('maid-services');

  const scrollToService = (id) => {
    window.setTimeout(() => {
      document
        .getElementById(`home-cleaning-${id}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
  };

  const handleLearnMore = (id) => {
    setOpenId(id);
    scrollToService(id);
  };

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1a2f4a] inline-flex items-center gap-3 flex-wrap justify-center">
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

      <div className="lg:w-[min(120%,calc(100vw-2rem))] lg:relative lg:left-1/2 lg:-translate-x-1/2">
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
          <div className="flex gap-3 sm:gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4">
            {HOME_CLEANING_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="w-[252px] sm:w-[276px] lg:w-auto flex-shrink-0"
              >
                <ChildCareInfoCard
                  {...service}
                  index={index}
                  isOpen={openId === service.id}
                  onLearnMore={() => handleLearnMore(service.id)}
                  colorMap={HOME_CLEANING_COLORS}
                  buttonTheme={HOME_CLEANING_COLORS.green}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomeCleaningAccordion
        services={HOME_CLEANING_SERVICES}
        openId={openId}
        onToggle={handleToggle}
      />
    </section>
  );
};

export default HomeCleaningServicesSection;
