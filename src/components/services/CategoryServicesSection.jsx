import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import HomeServiceIcon from './HomeServiceIcon';
import { HOME_SERVICE_ICONS } from './homeServicesAssets';
import ChildCareInfoCard from './childcare/ChildCareInfoCard';
import ServiceDetailPanel from './ServiceDetailPanel';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CategoryServicesSection = ({ title, services, gridClassName }) => {
  const [openId, setOpenId] = useState(null);
  const panelRef = useRef(null);
  const openService = services.find((service) => service.id === openId) ?? null;

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
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-3 flex-wrap justify-center">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.left}
            alt=""
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
          {title}
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.right}
            alt=""
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
        </h2>
      </motion.div>

      <div className={gridClassName}>
        {services.map((service, index) => (
          <ChildCareInfoCard
            key={service.id}
            {...service}
            index={index}
            isOpen={openId === service.id}
            onLearnMore={() => handleLearnMore(service.id)}
          />
        ))}
      </div>

      <ServiceDetailPanel ref={panelRef} service={openService} />
    </section>
  );
};

export default CategoryServicesSection;
