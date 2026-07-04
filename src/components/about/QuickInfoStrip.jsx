import { motion } from 'framer-motion';
import { quickInfo, fadeUp } from '../pages/About';

const QuickInfoStrip = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 sm:p-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {quickInfo.map((item, index) => (
          <motion.div
            key={index}
            {...fadeUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={`flex items-start gap-4 ${index !== quickInfo.length - 1 ? 'xl:border-r xl:border-gray-100 xl:pr-5' : ''}`}
          >
            <div
              className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center text-white text-lg flex-shrink-0 shadow-sm`}
            >
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickInfoStrip;