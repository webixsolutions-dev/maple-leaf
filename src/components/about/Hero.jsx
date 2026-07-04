import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaLeaf, FaSun, FaCalendarAlt } from 'react-icons/fa';

const HeroBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl bg-pink-50"
    >
      <div className="grid md:grid-cols-2 items-stretch">
        {/* Left content */}
        <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl" />

          <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs px-4 py-1.5 rounded-full self-start mb-4">
            <FaHeart className="text-[10px]" />
            Where children learn, grow, and thrive
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            About
            <br />
            <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
              Maple Leaf Montessori
              <FaLeaf className="text-green-500 text-2xl lg:text-3xl" />
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 max-w-md">
            Maple Leaf Montessori Calgary is a licensed, facility-based
            Montessori daycare in Calgary, Alberta. We provide a safe,
            structured, nurturing, and compliance-led early learning
            environment where children ages{' '}
            <span className="text-[#c72a7a] font-semibold">
              15 months to 6 years
            </span>{' '}
            can learn, grow, and thrive.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/book-a-tour"
              className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <FaCalendarAlt />
              Book a Tour
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <FaLeaf className="text-xs" />
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative min-h-[240px] md:min-h-[340px]">
          <img
            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80"
            alt="Educator guiding children at Maple Leaf Montessori"
            className="absolute inset-0 w-full h-full object-cover md:rounded-l-[60px]"
          />
          <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
            <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
            <p className="text-sky-600 font-extrabold text-sm">Learn</p>
            <p className="text-green-600 font-extrabold text-sm">Grow</p>
            <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;