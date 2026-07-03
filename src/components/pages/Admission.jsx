import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle, 
  FaArrowRight, 
  FaChild, 
  FaUsers, 
  FaClock, 
  FaMapMarkerAlt,
  FaLeaf,
  FaSun,
  FaPhone,
  FaEnvelope,
  FaCalendar
} from 'react-icons/fa';

const Admissions = () => {
  const quickInfo = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Licensed Facility',
      description: 'Proudly licensed by Alberta Child Care Licensing.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Ages 15 Months–6 Years',
      description: 'Programs designed for infants, toddlers, and preschoolers.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Open Mon–Fri',
      description: '7:00 AM–6:00 PM. Full-day care with part-time options available.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Calgary, Alberta',
      description: 'Conveniently located and proudly part of the Calgary community.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200'
    },
  ];

  const steps = [
    { 
      number: '01', 
      title: 'Contact Us', 
      description: 'Reach out by phone, email, or online form. We\'re here to answer your questions.',
      image: 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=400&h=250&fit=crop'
    },
    { 
      number: '02', 
      title: 'Tour the Centre', 
      description: 'Visit our Calgary centre, meet our educators, and see our classrooms in action.',
      image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=400&h=250&fit=crop'
    },
    { 
      number: '03', 
      title: 'Submit Application', 
      description: 'Complete our application form and provide the required documents.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop'
    },
    { 
      number: '04', 
      title: 'Review & Availability', 
      description: 'We review your application and confirm program availability.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop'
    },
    { 
      number: '05', 
      title: 'Confirm Enrollment', 
      description: 'Secure your child\'s spot with the enrollment fee and receive your welcome package.',
      image: 'https://images.unsplash.com/photo-1588072432836-f100ac3a6f0c?w=400&h=250&fit=crop'
    },
    { 
      number: '06', 
      title: 'Prepare for First Day', 
      description: 'We\'ll guide you with orientation details so your child feels confident and excited to start!',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop'
    },
  ];

  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-yellow-50 py-16 md:py-24 relative overflow-hidden">
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
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaLeaf className="text-pink-600 text-xl" />
              <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-pink-100 px-4 py-1.5 rounded-full inline-block">
                Begin Your Montessori Journey
              </span>
              <FaSun className="text-yellow-500 text-xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 font-serif">
              Admissions <span className="text-pink-700">Made Simple</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              Maple Leaf Montessori is a licensed Montessori daycare in Calgary, open Monday–Friday 
              from <span className="text-pink-700 font-semibold">7:00 AM to 6:00 PM</span>, and caring for 
              children ages <span className="text-pink-700 font-semibold">15 months to 6 years</span>.
            </p>
            <p className="text-gray-600 mt-2">
              The next step is easy—contact our centre or submit the form on our Book a Tour page.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all flex items-center gap-2">
                  Contact Us
                  <FaPhone className="text-sm" />
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
                className={`${item.bg} ${item.border} border p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 text-center`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3 ${item.color}`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process with Images */}
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
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              Our Enrollment Process
            </h2>
            <p className="text-gray-600 mt-3">
              A simple, personalized process to welcome your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 shadow-md"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/book-tour">
              <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Begin Your Journey
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-pink-700 rounded-2xl py-12 px-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center text-white">
                <FaCheckCircle className="text-4xl text-pink-300 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Respect</h3>
              </div>
              <div className="text-center text-white">
                <FaLeaf className="text-4xl text-pink-300 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Learn</h3>
              </div>
              <div className="text-center text-white">
                <FaSun className="text-4xl text-pink-300 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Grow Thrive</h3>
              </div>
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
              Ready to Begin?
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
              We'd love to welcome your family to Maple Leaf Montessori. Let's take the next step together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/contact">
                <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Contact Us
                </button>
              </Link>
              <Link to="/book-tour">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all inline-flex items-center gap-2">
                  <FaCalendar className="text-sm" />
                  Book a Tour
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;