import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBaby, 
  FaChild, 
  FaGraduationCap, 
  FaHome, 
  FaCalendar, 
  FaArrowRight,
  FaClock,
  FaBook,
  FaPaintBrush,
  FaCalculator,
  FaFlask,
  FaMusic,
  FaHeart,
  FaRunning,
  FaLeaf,
  FaSun,
  FaHands,
  FaLanguage,
  FaPencilRuler,
  FaMicroscope,
  FaPalette,
  FaUsers,
  FaWalking
} from 'react-icons/fa';

const ProgramsPreview = () => {
  const programs = [
    {
      icon: <FaBaby className="text-3xl" />,
      title: 'Infant Program',
      description: 'Nurturing care and gentle routines for your baby\'s early development.',
      color: 'text-[#c72a7a]',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      link: '/programs/infant'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Toddler Program',
      description: 'Hands-on exploration, independence, and social skills for growing toddlers.',
      color: 'text-[#c72a7a]',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      link: '/programs/toddler'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Preschool / Montessori Casa',
      description: 'Prepared environment for confident learners ready for the future.',
      color: 'text-[#c72a7a]',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      link: '/programs/preschool'
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Before & After School Care',
      description: 'Safe, supportive care with homework help and fun enrichment activities.',
      color: 'text-[#c72a7a]',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      link: '/programs/after-school'
    },
    {
      icon: <FaCalendar className="text-3xl" />,
      title: 'Summer Programs & Camps',
      description: 'Engaging themes, outdoor adventures, and hands-on learning all summer long!',
      color: 'text-[#c72a7a]',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      link: '/programs/summer'
    },
  ];

  const schedule = [
    {
      time: '7:00 – 9:00 AM',
      title: 'Arrival, Free Play, Breakfast',
      description: 'Warm greetings, free play and connections, followed by a healthy breakfast.',
      icon: <FaSun className="text-[#c72a7a] text-2xl" />
    },
    {
      time: '9:00 – 11:00 AM',
      title: 'Montessori Programming, Outdoor Time',
      description: 'Hands-on learning in prepared environments and time to play outside.',
      icon: <FaBook className="text-[#c72a7a] text-2xl" />
    },
    {
      time: '11:00 – 1:00 PM',
      title: 'Lunch, Rest / Nap Periods',
      description: 'Nutritious lunch and rest time to recharge bodies and minds.',
      icon: <FaClock className="text-[#c72a7a] text-2xl" />
    },
    {
      time: '1:00 – 3:30 PM',
      title: 'Afternoon Programming, Snack, Outdoor Rotation',
      description: 'Engaging activities, healthy snack, and outdoor play or movement.',
      icon: <FaRunning className="text-[#c72a7a] text-2xl" />
    },
    {
      time: '3:30 – 6:00 PM',
      title: 'Parent Pickup, Wind-Down Activities',
      description: 'Calm activities, daily recap, and secure hand-off to families.',
      icon: <FaHome className="text-[#c72a7a] text-2xl" />
    },
  ];

  // ============ WHAT CHILDREN EXPERIENCE - SINGLE ROW ============
  const experiences = [
    { 
      icon: <FaHands className="text-xl" />, 
      label: 'Practical Life Skills',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      icon: <FaLanguage className="text-xl" />, 
      label: 'Early Literacy',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    { 
      icon: <FaCalculator className="text-xl" />, 
      label: 'Mathematics',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    { 
      icon: <FaFlask className="text-xl" />, 
      label: 'Science & STEM',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    { 
      icon: <FaMusic className="text-xl" />, 
      label: 'Arts & Music',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    { 
      icon: <FaHeart className="text-xl" />, 
      label: 'Social Growth',
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    { 
      icon: <FaRunning className="text-xl" />, 
      label: 'Motor Skills',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
  ];

  return (
    <div>
      
      {/* ============ PROGRAMS SECTION ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-[#c72a7a] font-semibold text-sm uppercase tracking-wider bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              Programs for Every Stage <span className="text-[#c72a7a]">🎉</span>
            </h2>
            <p className="text-gray-600 mt-3">
              Nurturing growth, confidence, and curiosity at every age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${program.bg} ${program.border} border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${program.bg} rounded-full flex items-center justify-center mb-4 ${program.color}`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                <Link to={program.link}>
                  <button className={`mt-4 ${program.color} font-semibold text-sm hover:underline flex items-center gap-1 transition-all`}>
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DAILY SCHEDULE SECTION ============ */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-[#c72a7a] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-1.5 rounded-full inline-block">
              Daily Routine
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              A Day at Maple Leaf Montessori
            </h2>
            <p className="text-gray-600 mt-3">
              A predictable routine that provides structure, balance, and joyful learning.
            </p>
          </motion.div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-[#c72a7a]">{item.time}</span>
                    <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT CHILDREN EXPERIENCE - SINGLE ROW ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="text-[#c72a7a] font-semibold text-sm uppercase tracking-wider bg-pink-50 px-4 py-1.5 rounded-full inline-block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              What Children Experience <span className="text-[#c72a7a]">🎈</span>
            </h2>
            <p className="text-gray-600 mt-3">
              A holistic approach that builds the foundation for lifelong success.
            </p>
          </motion.div>

          {/* Single Row - All items in one line */}
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`${item.bg} px-4 py-3 rounded-xl text-center hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 flex items-center gap-2`}
              >
                <div className={`${item.color} text-xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                <p className={`text-xs font-medium ${item.color} whitespace-nowrap`}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramsPreview;