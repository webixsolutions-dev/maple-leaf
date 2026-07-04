import { motion } from 'framer-motion';
import { FaSun, FaLeaf } from 'react-icons/fa';
import { bookingSteps, fadeUp } from '../data/bookTourData';
import { iconMap } from '../data/icons';

const BookingSteps = () => {
  return (
    <div>
      <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-3">
          <FaSun className="text-amber-400 text-xl" />
          How Booking Works
          <FaLeaf className="text-green-500 text-lg" />
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2 ml-0 sm:ml-9">
          A simple, parent-friendly process to visit our centre.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden xl:block absolute top-[70px] left-[12%] right-[12%] border-t-2 border-dashed border-green-400" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {bookingSteps.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative z-10 ${item.cardBg} rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 text-center`}
              >
                <span
                  className={`absolute top-4 left-4 w-6 h-6 ${item.stepBg} rounded-full text-white text-[11px] font-bold flex items-center justify-center`}
                >
                  {item.step}
                </span>
                <div
                  className={`w-16 h-16 ${item.iconBg} ${item.iconColor} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 ring-4 ring-white`}
                >
                  <IconComponent />
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;