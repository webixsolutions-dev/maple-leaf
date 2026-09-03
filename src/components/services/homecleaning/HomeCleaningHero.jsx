import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import { HOME_CLEANING_IMAGES } from './homeCleaningServicesAssets';

const HomeCleaningHero = () => (
  <section
    className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
    style={{ backgroundImage: `url('${HOME_CLEANING_IMAGES.hero}')` }}
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-full md:max-w-[52%] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
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
        <span className="text-[#1a2f4a]">Home </span>
        <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
          Cleaning Services
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.right}
            alt=""
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </span>
      </h1>

      <p className="text-sm md:text-base text-[#1a2f4a] leading-relaxed mt-4 max-w-md">
        Professional cleaning solutions that keep your home fresh, healthy, and
        sparkling clean.
      </p>
    </motion.div>
  </section>
);

export default HomeCleaningHero;
