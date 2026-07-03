import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaChild, 
  FaCheckCircle, 
  FaClock, 
  FaUsers, 
  FaMapMarkerAlt,
  FaLeaf,
  FaSun
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const infoCards = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Licensed Facility',
      description: 'Licensed daycare operating in compliance with Alberta Child Care Standards.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:shadow-blue-100'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Ages 15 Months–6 Years',
      description: 'Programs thoughtfully designed to support every stage of early development.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      hover: 'hover:shadow-green-100'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Open Mon–Fri',
      description: '7:00 AM – 6:00 PM. Convenient hours that support busy families.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:shadow-purple-100'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Calgary, Alberta',
      description: 'Proudly serving families across Calgary and the surrounding areas.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      hover: 'hover:shadow-pink-100'
    },
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-yellow-50 min-h-screen flex items-center pt-20 relative overflow-hidden">
      
      {/* ============ BACKGROUND LEAVES & SUNS ============ */}
      
      {/* Large Leaf - Top Right */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
        animate={{ opacity: 0.15, rotate: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-10 -right-10 text-pink-300"
      >
        <FaLeaf className="text-[200px] md:text-[300px] lg:text-[400px]" />
      </motion.div>

      {/* Large Sun - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -bottom-20 -left-20 text-yellow-300"
      >
        <FaSun className="text-[200px] md:text-[300px] lg:text-[400px]" />
      </motion.div>

      {/* Medium Leaf - Top Left */}
      <motion.div
        initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
        animate={{ opacity: 0.1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-20 left-10 text-green-300 hidden md:block"
      >
        <FaLeaf className="text-[100px] md:text-[150px]" />
      </motion.div>

      {/* Medium Sun - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-20 right-10 text-yellow-300 hidden md:block"
      >
        <FaSun className="text-[100px] md:text-[150px]" />
      </motion.div>

      {/* Small Leaf - Center Right */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 0.08, rotate: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/2 right-20 transform -translate-y-1/2 text-pink-400 hidden lg:block"
      >
        <FaLeaf className="text-[80px]" />
      </motion.div>

      {/* Small Sun - Center Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-1/3 left-20 text-yellow-400 hidden lg:block"
      >
        <FaSun className="text-[80px]" />
      </motion.div>

      {/* Extra Small Decorations */}
      <div className="absolute top-40 right-40 text-pink-200/20 hidden xl:block">
        <FaLeaf className="text-6xl" />
      </div>
      <div className="absolute bottom-40 left-40 text-yellow-200/20 hidden xl:block">
        <FaSun className="text-6xl" />
      </div>

      {/* Floating animated leaves */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 right-60 text-green-300/10 hidden xl:block"
      >
        <FaLeaf className="text-5xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-60 left-60 text-yellow-300/10 hidden xl:block"
      >
        <FaSun className="text-5xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-full relative z-10">
        
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
          

            {/* Heading with Leaf and Sun Icons */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif">
              <span className="flex items-center gap-2 flex-wrap">
                Where children{' '}
                <FaLeaf className="text-green-500 text-3xl md:text-4xl inline-block" />
              </span>
              <span className="text-pink-700">learn</span>,{' '}
              <span className="text-pink-600">grow</span>, and{' '}
              <span className="text-pink-700">thrive</span>
              <FaSun className="text-yellow-500 text-3xl md:text-4xl inline-block ml-2" />
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Maple Leaf Montessori Calgary is a licensed, facility-based Montessori daycare in Calgary, Alberta. 
              We provide a safe, structured, nurturing, and compliance-led early learning environment where 
              children ages <span className="text-pink-700 font-semibold">15 months to 6 years</span> can learn, grow, and thrive.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link to="/programs">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3.5 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all">
                  Explore Programs
                </button>
              </Link>
            </div>

            {/* Tagline with Leaf */}
            <div className="flex items-center gap-2 text-pink-600 font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full inline-flex">
              <FaLeaf className="text-green-500" />
              <span>Where Curiosity Grows Every Day</span>
              <FaSun className="text-yellow-500" />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop" 
                alt="Maple Leaf Montessori"
                className="w-full h-[400px] object-cover"
              />
              {/* Leaf Decoration on Image */}
              <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md">
                <FaLeaf className="text-green-500 text-xl" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/80 rounded-full p-2 shadow-md">
                <FaSun className="text-yellow-500 text-xl" />
              </div>
            </div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <FaChild className="text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Happy Children</p>
                    <p className="text-xs text-gray-500">Learning through play</p>
                  </div>
                </div>
                <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <FaLeaf className="text-green-500 text-xs" />
                  Licensed
                  <FaSun className="text-yellow-500 text-xs" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Info Cards - Different Colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`${card.bg} ${card.border} border p-6 rounded-2xl hover:shadow-lg ${card.hover} transition-all hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Decorative Leaf/Sun in background */}
              <div className="absolute -top-6 -right-6 opacity-10">
                {index % 2 === 0 ? (
                  <FaLeaf className="text-6xl text-green-300" />
                ) : (
                  <FaSun className="text-6xl text-yellow-300" />
                )}
              </div>
              <div className={`w-14 h-14 ${card.bg} rounded-full flex items-center justify-center mb-3 ${card.color} relative z-10`}>
                {card.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-base relative z-10">{card.title}</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed relative z-10">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;