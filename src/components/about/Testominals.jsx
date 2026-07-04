import { motion } from 'framer-motion';
import { testimonials, fadeUp } from '../pages/About';
import { FaHeart, FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
          <span>
            Loved by <span className="text-[#c72a7a]">Calgary Families</span>
          </span>
          <FaHeart className="text-purple-400 text-lg" />
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Real stories from parents who trust us with what matters most.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
          >
            <div className="flex items-start gap-3 flex-1">
              <FaQuoteLeft className={`${t.starColor} text-xl flex-shrink-0`} />
              <p className="text-xs text-gray-700 leading-relaxed">
                {t.quote}
              </p>
            </div>
            <div className={`flex items-center justify-center gap-1 mt-4 ${t.starColor}`}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xs" />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs font-semibold text-gray-800 mx-auto">
                {t.name}
              </p>
              {t.accent}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;