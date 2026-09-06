import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { CHILD_CARE_IMAGES } from './childCareServicesAssets';

const ChildCareHero = () => (
  <section className="relative overflow-hidden rounded-3xl bg-[#faf8f5] lg:bg-transparent lg:min-h-[400px] flex flex-col lg:block">
    <div
      className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${CHILD_CARE_IMAGES.hero}')` }}
      aria-hidden="true"
    />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[52%] lg:min-h-[400px] lg:bg-transparent"
    >
      <Link
        to="/our-services"
        className="inline-flex items-center gap-2 text-[#1a2f4a] hover:text-[#c72a7a] font-medium text-sm mb-4 transition-colors self-start"
      >
        <FaArrowLeft className="text-xs" />
        Back to Homecare Services
      </Link>

      <p className="inline-flex items-center gap-2 text-[#c72a7a] italic text-sm md:text-base mb-4 font-heading">
        <HomeServiceIcon
          src={HOME_SERVICE_ICONS.ourMission}
          alt=""
          className="w-5 h-5 object-contain"
        />
        Trusted care in the comfort of home.
      </p>

      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
        <span className="text-[#1a2f4a]">Child Care</span>{' '}
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
        Safe, nurturing, and engaging care for your children, helping them learn,
        grow, and thrive.
      </p>
    </motion.div>

    <img
      src={CHILD_CARE_IMAGES.hero}
      alt="Child receiving nurturing care at home"
      className="lg:hidden w-full aspect-[5/4] sm:aspect-[16/10] object-cover object-right block shrink-0 leading-none"
    />
  </section>
);

export default ChildCareHero;
