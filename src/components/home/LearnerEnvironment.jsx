import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBaby, 
  FaChild, 
  FaUsers, 
  FaHome, 
  FaArrowRight,
  FaLeaf,
  FaSun
} from 'react-icons/fa';

const LearningEnvironment = () => {
  const rooms = [
    {
      icon: <FaBaby className="text-pink-700 text-3xl" />,
      title: 'INFANT ROOM',
      spaces: '8 Spaces',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaChild className="text-pink-700 text-3xl" />,
      title: 'TODDLER ROOM',
      spaces: '12 Spaces',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaHome className="text-pink-700 text-3xl" />,
      title: 'COMMON AREAS',
      spaces: 'Office / Play Space / etc.',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaUsers className="text-pink-700 text-3xl" />,
      title: 'PRESCHOOL ROOM',
      spaces: '20 Spaces',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaBaby className="text-pink-700 text-3xl" />,
      title: 'NEW INFANT ROOM',
      spaces: '8 Spaces (Phase 4)',
      bg: 'bg-pink-100'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-pink-50 px-4 py-1.5 rounded-full inline-block">
            Our Learning Environment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
            Where Curiosity Grows Every Day
          </h2>
          <p className="text-gray-600 mt-3">
            Our classrooms and common areas are designed to inspire independence, creativity, 
            and a love of learning in every child.
          </p>
          <div className="mt-4">
            <Link to="/programs">
              <button className="text-pink-700 font-semibold hover:text-pink-800 transition-colors inline-flex items-center gap-2">
                Explore Programs
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${room.bg} p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 border border-pink-200`}
            >
              <div className="mb-3">{room.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{room.title}</h3>
              <p className="text-sm text-pink-700 font-medium">{room.spaces}</p>
            </motion.div>
          ))}
        </div>

        {/* ============ CTA SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-pink-50 rounded-2xl p-8 md:p-12 shadow-sm border border-pink-100 relative overflow-hidden"
        >
          {/* Decorative Leaf & Sun in Background */}
          <div className="absolute -top-10 -right-10 text-pink-200/20">
            <FaLeaf className="text-[150px]" />
          </div>
          <div className="absolute -bottom-10 -left-10 text-yellow-200/20">
            <FaSun className="text-[150px]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              Discover a daycare where curiosity grows every day.
            </h3>
            <div className="mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-10 py-3.5 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LearningEnvironment;