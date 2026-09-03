import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { SENIOR_PERSONAL_CARE_SERVICES } from '../serviceDetailsData';
import ChildCareInfoCard from '../childcare/ChildCareInfoCard';
import { SENIOR_CARE_COLORS } from './seniorPersonalCareAssets';
import SeniorCareDetailPanel from './SeniorCareDetailPanel';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SeniorPersonalCareServicesSection = () => {
  const [openId, setOpenId] = useState(null);
  const panelRef = useRef(null);
  const openService =
    SENIOR_PERSONAL_CARE_SERVICES.find((service) => service.id === openId) ?? null;

  const handleLearnMore = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  useEffect(() => {
    if (openId && panelRef.current) {
      const timer = window.setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);

      return () => window.clearTimeout(timer);
    }
  }, [openId]);

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
          Our Senior & Personal Care Services
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.right}
            alt=""
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
        </h2>
      </motion.div>

      <div className="lg:w-[min(120%,calc(100vw-2rem))] lg:relative lg:left-1/2 lg:-translate-x-1/2">
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
          <div className="flex gap-3 sm:gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
            {SENIOR_PERSONAL_CARE_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="w-[252px] sm:w-[276px] lg:w-auto flex-shrink-0"
              >
                <ChildCareInfoCard
                  {...service}
                  index={index}
                  isOpen={openId === service.id}
                  onLearnMore={() => handleLearnMore(service.id)}
                  colorMap={SENIOR_CARE_COLORS}
                  detailsId="senior-care-details"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <SeniorCareDetailPanel
        ref={panelRef}
        service={openService}
        onClose={() => setOpenId(null)}
      />
    </section>
  );
};

export default SeniorPersonalCareServicesSection;
