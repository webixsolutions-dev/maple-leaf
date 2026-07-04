import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, 
  FiPhone, 
  FiShield, 
  FiUsers, 
  FiClock, 
  FiMapPin,
  FiArrowRight
} from 'react-icons/fi';
import { FaLeaf, FaSun, FaHeart } from 'react-icons/fa';

const Hero = () => {
  const facts = [
    {
      icon: FiShield,
      title: 'Licensed Facility',
      body: 'Proudly licensed by Alberta Child Care Licensing.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: FiUsers,
      title: 'Ages 15 Months–6 Years',
      body: 'Programs designed for infants, toddlers, and preschoolers.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: FiClock,
      title: 'Open Mon–Fri 7:00 AM–6:00 PM',
      body: 'Full-day care with part-time options available.',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      icon: FiMapPin,
      title: 'Calgary, Alberta',
      body: 'Conveniently located and proudly part of the Calgary community.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 text-pink-200/20">
        <FaLeaf className="text-[300px]" />
      </div>
      <div className="absolute -bottom-20 -left-20 text-yellow-200/20">
        <FaSun className="text-[300px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 w-full relative z-10">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline */}
            <span className="inline-flex items-center gap-2 bg-pink-50 text-[#c72a7a] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 font-montserrat">
              <FaHeart className="text-[#c72a7a]" />
              Begin Your Montessori Journey
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-montserrat">
              Admissions
              <br />
              <span className="text-[#c72a7a]">Made Simple</span>
              <FaSun className="text-3xl mt-2 inline-block ml-3 text-[#c72a7a]" />
            </h1>

            {/* Description */}
            <p className="mt-5 text-gray-600 leading-relaxed max-w-md font-montserrat">
              Maple Leaf Montessori is a licensed Montessori daycare in Calgary, open
              Monday–Friday from 7:00 AM to 6:00 PM, and caring for children ages 15
              months to 6 years.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed max-w-md font-montserrat">
              The next step is easy — contact our centre or submit the form on our{' '}
              <Link to="/book-tour" className="text-[#c72a7a] font-semibold underline underline-offset-2">
                Book a Tour
              </Link>{' '}
              page.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book-tour">
                <button className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-pink-800 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all font-montserrat">
                  <FiCalendar /> Book a Tour
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 border-2 border-[#c72a7a] text-[#c72a7a] font-semibold px-6 py-3 rounded-xl hover:bg-pink-50 transition-all font-montserrat">
                  <FiPhone /> Contact Us
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop"
                alt="Maple Leaf Montessori"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <p className="text-xs text-gray-600 font-montserrat font-semibold">
                  Respect · Learn · Grow · Thrive
                </p>
              </div>
            </div>
            <FaLeaf className="absolute -bottom-3 -left-3 text-5xl text-[#c72a7a]/20 rotate-12" />
          </motion.div>
        </div>

        {/* Facts Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-11 h-11 ${fact.bg} rounded-2xl flex items-center justify-center text-2xl mb-3 ${fact.color}`}>
                  <Icon />
                </div>
                <h3 className="font-bold text-gray-900 text-sm font-montserrat">{fact.title}</h3>
                <p className="text-xs text-gray-600 mt-1 leading-snug font-montserrat">{fact.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;