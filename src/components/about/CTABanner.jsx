import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../pages/About';
import { FaHeart, FaLeaf, FaSun, FaCalendarAlt } from 'react-icons/fa';

const CTABanner = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-pink-50 border border-pink-100 rounded-2xl px-5 sm:px-8 py-7"
    >
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex items-center gap-4 flex-shrink-0">
          <FaSun className="text-amber-400 text-3xl hidden sm:block" />
          <FaLeaf className="text-green-500 text-xl hidden sm:block" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Ready to meet{' '}
            <span className="text-[#e0115f]">Maple Leaf Montessori</span>?
          </h3>
        </div>

        <p className="flex-1 text-xs md:text-sm text-gray-700 leading-relaxed text-center lg:text-left lg:border-l lg:border-pink-200 lg:pl-6">
          We'd love to welcome your family and show you how we nurture
          curiosity, confidence, and a love of learning.
        </p>

        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            to="/book-a-tour"
            className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <FaCalendarAlt />
            Go to Book a Tour
          </Link>
          <FaHeart className="text-pink-400 text-xl hidden sm:block" />
          <FaLeaf className="text-[#e0115f] text-2xl -rotate-45 hidden sm:block" />
        </div>
      </div>
    </motion.div>
  );
};

export default CTABanner;