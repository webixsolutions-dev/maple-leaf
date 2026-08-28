import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { SENIOR_PERSONAL_CARE_IMAGES, SERVICE_PHOTO_RADIUS } from './seniorPersonalCareAssets';
import ServicePhoto from '../childcare/ServicePhoto';

const SeniorPersonalCareHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white rounded-3xl">
    <div className="grid md:grid-cols-2 items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
      >
        <Link
          to="/our-services"
          className="inline-flex items-center gap-2 text-gray-900 hover:text-[#c72a7a] font-medium text-sm mb-4 transition-colors self-start"
        >
          <FaArrowLeft className="text-xs" />
          Back to Homecare Services
        </Link>

        <p className="inline-flex items-center gap-2 text-[#c72a7a] italic text-sm md:text-base mb-4">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourMission}
            alt=""
            className="w-5 h-5 object-contain"
          />
          Trusted care in the comfort of Home.
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
          Senior & Personal{' '}
          <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
            Care
            <HomeServiceIcon
              src={HOME_SERVICE_ICONS.right}
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
          </span>
        </h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4 max-w-md">
          Compassionate and respectful care to support seniors and individuals in
          their daily lives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="p-6 sm:p-8 lg:p-10 md:pl-0"
      >
        <ServicePhoto
          src={SENIOR_PERSONAL_CARE_IMAGES.hero}
          alt="Caregiver with elderly woman"
          label="Caregiver with elderly woman"
          aspectRatio="16/10"
          rounded={SERVICE_PHOTO_RADIUS}
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);

export default SeniorPersonalCareHero;
