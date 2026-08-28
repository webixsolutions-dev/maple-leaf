import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { HOME_SERVICE_ICONS } from '../homeServicesAssets';
import ImagePlaceholder from '../ImagePlaceholder';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HappyChildrenSection = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden bg-pink-50 rounded-3xl p-6 sm:p-8"
  >
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-start gap-3 mb-3">
          <HomeServiceIcon
            src={HOME_SERVICE_ICONS.ourVision}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            Happy Children. Peace of Mind.
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          We provide trusted, professional care so your children feel safe,
          supported, and loved — right at home.
        </p>
      </div>

      <ImagePlaceholder
        aspectRatio="4/3"
        label="Child hugging a teddy bear"
        className="w-full"
      />
    </div>
  </motion.section>
);

export default HappyChildrenSection;
