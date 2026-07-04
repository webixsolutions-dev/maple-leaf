import { motion } from 'framer-motion';
import { stats, fadeUp } from '../pages/About';
import { FaHeart, FaLeaf, FaSun } from 'react-icons/fa';

const TrustedStartup = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-orange-50 rounded-3xl p-6 sm:p-8"
    >
      <FaHeart className="absolute top-5 right-6 text-pink-400 text-lg" />
      <FaLeaf className="absolute top-12 right-10 text-green-500 text-sm" />

      <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-center">
        <div>
          <div className="flex items-start gap-3">
            <FaSun className="text-amber-400 text-3xl flex-shrink-0 mt-1" />
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
              A trusted Montessori start-up for{' '}
              <span className="text-[#c72a7a]">Calgary</span> families
              <FaLeaf className="inline ml-2 text-green-500 text-base" />
            </h3>
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
            Building strong foundations through quality care, thoughtful programs, and community trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div
                className={`w-12 h-12 ${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center text-xl mb-3`}
              >
                {stat.icon}
              </div>
              <p className={`text-2xl font-extrabold ${stat.numberColor}`}>
                {stat.number}
              </p>
              <p className="font-bold text-gray-900 text-xs mt-0.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedStartup;