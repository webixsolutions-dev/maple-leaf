import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaChild, 
  FaClock, 
  FaUsers, 
  FaMapMarkerAlt,
  FaLeaf,
  FaShieldAlt,
  FaHands,
  FaHeart,
  FaSun,
  FaStar
} from 'react-icons/fa';

const AboutUs = () => {
  // Quick Info Cards
  const quickInfo = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Licensed Facility',
      description: 'Licensed daycare operating in compliance with Alberta Child Care Standards.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Ages 15 Months–6 Years',
      description: 'Programs thoughtfully designed to support every stage of early development.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Open Mon–Fri',
      description: '7:00 AM – 6:00 PM. Convenient hours that support busy families.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Calgary, Alberta',
      description: 'Proudly serving families across Calgary and the surrounding areas.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200'
    },
  ];

  // Features Cards
  const features = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Montessori Philosophy',
      description: 'Child-led learning that builds independence, confidence, and a lifelong love of learning.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Safe Supervision & Ratio Compliance',
      description: 'Certified educators and strict ratios to ensure every child is seen and supported.',
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      icon: <FaHands className="text-3xl" />,
      title: 'Strong Parent Communication',
      description: 'Clear communication, updates, and partnerships that keep families connected.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Nurturing Classrooms',
      description: 'Beautiful, calm environments that inspire curiosity, creativity, and joyful discovery.',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      border: 'border-rose-200'
    },
  ];

  // Stats
  const stats = [
    { number: '100%', label: 'Licensed daycare' },
    { number: '100%', label: 'Structured daily operations' },
    { number: '100%', label: 'Family-focused learning' },
  ];

  return (
    <div className="pt-20">
      
      {/* Hero Section - About */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-yellow-50 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-10 right-10 text-pink-200/20">
          <FaLeaf className="text-[200px]" />
        </div>
        <div className="absolute bottom-10 left-10 text-yellow-200/20">
          <FaSun className="text-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-pink-100 px-4 py-1.5 rounded-full inline-block">
              About
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 font-serif">
              <span className="text-pink-700">Maple Leaf</span> Montessori
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              Maple Leaf Montessori Calgary is a licensed, facility-based Montessori daycare in Calgary, Alberta. 
              We provide a safe, structured, nurturing, and compliance-led early learning environment where 
              children ages <span className="text-pink-700 font-semibold">15 months to 6 years</span> can learn, grow, and thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link to="/programs">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all">
                  Explore Programs
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.bg} ${item.border} border p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-3 ${item.color}`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are / Features */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-1.5 rounded-full inline-block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              Our Approach
            </h2>
            <p className="text-gray-600 mt-3">
              Our approach combines Montessori principles with modern best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.bg} ${feature.border} border p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Start-up Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-pink-700 rounded-2xl py-12 px-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                A trusted Montessori start-up for Calgary families
              </h3>
              <p className="text-white/80 mt-2">
                Building strong foundations through quality care, thoughtful programs, and community trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-2">
                    <FaStar className="text-4xl text-pink-300" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <p className="text-white/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Ready to Meet <span className="text-pink-700">Maple Leaf Montessori</span>?
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
              We'd love to welcome your family. Book a tour and see our beautiful environment in person.
            </p>
            <div className="mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-10 py-3.5 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;