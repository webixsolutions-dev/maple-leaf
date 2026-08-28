import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import ImagePlaceholder from '../ImagePlaceholder';
import IconPlaceholder from '../IconPlaceholder';

const ChildCareHero = () => (
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
          <IconPlaceholder size={16} shape="square" />
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
          Child Care{' '}
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
          Safe, nurturing, and engaging care for your children, helping them learn,
          grow, and thrive.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="p-6 sm:p-8 lg:p-10 md:pl-0"
      >
        <ImagePlaceholder
          aspectRatio="16/10"
          label="Caregiver playing blocks with child"
          rounded=""
          className="w-full rounded-tl-3xl rounded-br-[4rem] rounded-tr-[4rem] rounded-bl-3xl"
        />
      </motion.div>
    </div>
  </section>
);

export default ChildCareHero;
