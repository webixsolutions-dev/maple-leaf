import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSun, FaLeaf, FaEnvelope } from 'react-icons/fa';
import { expectations, fadeUp } from '../data/bookTourData';
import { iconMap } from '../data/icons';

const WhatToExpect = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 inline-flex items-center gap-2 mb-5">
        What to Expect on Your Tour
        <FaSun className="text-amber-400 text-lg" />
      </h2>

      <div className="space-y-4">
        {expectations.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 ${item.iconBg} ${item.iconColor} rounded-full flex items-center justify-center text-xl flex-shrink-0`}
                >
                  <IconComponent />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              {item.buttonText && (
                <Link to={item.buttonLink} className="mt-3 ml-[72px]">
                  <button className="text-[#e0115f] font-semibold text-xs hover:text-[#c72a7a] transition-colors inline-flex items-center gap-1">
                    {item.buttonText} →
                  </button>
                </Link>
              )}
            </motion.div>
          );
        })}

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="relative flex items-start gap-4 bg-sky-50 border border-sky-100 rounded-2xl p-5"
        >
          <FaLeaf className="absolute top-4 right-4 text-green-500 text-lg" />
          <div className="w-14 h-14 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
            <FaEnvelope />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">
              We're Here for You
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mt-1">
              Families typically receive a reply within{' '}
              <span className="text-sky-600 font-bold">
                one business day.
              </span>{' '}
              We look forward to welcoming you to Maple Leaf Montessori!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatToExpect;