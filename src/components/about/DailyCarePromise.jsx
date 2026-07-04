import { motion } from 'framer-motion';
import { carePromise, fadeUp } from '../pages/About';
import { FaLeaf } from 'react-icons/fa';

const DailyCarePromise = () => {
  return (
    <div className="bg-pink-50/50 rounded-3xl p-5 sm:p-7">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
          <span>
            Our Daily <span className="text-[#c72a7a]">Care Promise</span>
          </span>
          <FaLeaf className="text-green-500 text-lg" />
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Thoughtful routines, nurturing care, and meaningful learning—every single day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {carePromise.map((item, index) => (
          <motion.div
            key={index}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5"
          >
            <span className="absolute top-4 right-4 text-sm opacity-70">
              {item.accent}
            </span>
            <div
              className={`w-11 h-11 ${item.iconBg} rounded-full flex items-center justify-center text-white text-base shadow-sm mb-3`}
            >
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 pr-5">
              {item.title}
            </h3>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyCarePromise;
