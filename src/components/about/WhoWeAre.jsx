import { motion } from 'framer-motion';
import { features, fadeUp } from '../pages/About';
import { FaHeart } from 'react-icons/fa';

const WhoWeAre = () => {
  return (
    <div>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2">
          Who We Are
          <FaHeart className="text-purple-400 text-lg" />
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Our approach combines Montessori principles with modern best practices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-11 h-11 ${feature.iconBg} rounded-full flex items-center justify-center text-white text-base flex-shrink-0 shadow-sm`}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug pt-1">
                {feature.title}
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            <span className="absolute bottom-3 right-3 text-sm opacity-70">
              {feature.accent}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;