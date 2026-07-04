import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiPhone,
  FiHome,
  FiClipboard,
  FiUsers,
  FiCheckCircle,
  FiUserCheck,
  FiCalendar,
  FiArrowRight
} from 'react-icons/fi';
import { FaLeaf, FaSun } from 'react-icons/fa';

const EnrollmentProcess = () => {
  const steps = [
    { 
      n: '01', 
      icon: FiPhone, 
      title: 'Contact Us', 
      body: 'Reach out by phone, email, or online form. We\'re here to answer your questions.' 
    },
    { 
      n: '02', 
      icon: FiHome, 
      title: 'Tour the Centre', 
      body: 'Visit our Calgary centre, meet our educators, and see our classrooms in action.' 
    },
    { 
      n: '03', 
      icon: FiClipboard, 
      title: 'Submit Application', 
      body: 'Complete our application form and provide the required documents.' 
    },
    { 
      n: '04', 
      icon: FiUsers, 
      title: 'Review & Availability', 
      body: 'We review your application and confirm program availability.' 
    },
    { 
      n: '05', 
      icon: FiCheckCircle, 
      title: 'Confirm Enrollment', 
      body: 'Secure your child\'s spot with the enrollment fee and receive your welcome package.' 
    },
    { 
      n: '06', 
      icon: FiUserCheck, 
      title: 'Prepare for First Day', 
      body: 'We\'ll guide you with orientation details so your child feels confident and excited to start!' 
    },
  ];

  const highlights = [
    { 
      icon: FiUsers, 
      title: 'Guided Enrollment', 
      body: 'Our team is here to support you through each step with care and clarity.' 
    },
    { 
      icon: FiCheckCircle, 
      title: 'Clear Process', 
      body: 'Transparent steps and support every step of the way.' 
    },
    { 
      icon: FiUsers, 
      title: 'Family Communication', 
      body: 'Stay connected with regular updates, photos, and open communication.' 
    },
  ];

  const iconColors = [
    'bg-pink-100 text-[#c72a7a]',
    'bg-orange-100 text-orange-500',
    'bg-green-100 text-green-500',
    'bg-purple-100 text-purple-500',
    'bg-blue-100 text-blue-500',
    'bg-pink-100 text-[#c72a7a]',
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
          <div className="flex items-center justify-center gap-3">
            <FaLeaf className="text-[#c72a7a] text-2xl" />
            <span className="text-[#c72a7a] font-semibold text-sm uppercase tracking-wider bg-pink-50 px-4 py-1.5 rounded-full inline-block font-montserrat">
              Our Enrollment Process
            </span>
            <FaSun className="text-[#c72a7a] text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-montserrat">
            A simple, personalized process to welcome your family.
          </h2>
        </motion.div>

        {/* Steps Grid - 6 Cards in Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                {/* Step Number */}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#c72a7a] text-white text-xs font-bold flex items-center justify-center">
                  {step.n}
                </span>
                
                {/* Icon */}
                <div className={`w-12 h-12 ${iconColors[index]} rounded-2xl flex items-center justify-center text-2xl mb-3`}>
                  <Icon />
                </div>
                
                <h3 className="font-bold text-gray-900 text-sm font-montserrat">{step.title}</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed font-montserrat">{step.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colors = [
              'bg-orange-100 text-orange-500',
              'bg-pink-100 text-[#c72a7a]',
              'bg-green-100 text-green-500'
            ];
            return (
              <div
                key={index}
                className="flex items-start gap-3 bg-pink-50/50 rounded-2xl p-4 border border-pink-100"
              >
                <div className={`w-10 h-10 ${colors[index]} rounded-xl flex items-center justify-center flex-shrink-0 text-xl`}>
                  <Icon />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-montserrat">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-0.5 font-montserrat">{item.body}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-pink-50/80 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-pink-100 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute -top-10 -right-10 text-pink-200/20">
            <FaLeaf className="text-[100px]" />
          </div>
          <div className="absolute -bottom-10 -left-10 text-yellow-200/20">
            <FaSun className="text-[100px]" />
          </div>

          <div className="relative z-10">
            <h3 className="font-bold text-gray-900 text-xl font-montserrat">Ready to Begin?</h3>
            <p className="text-gray-600 text-sm mt-1 font-montserrat">
              We'd love to welcome your family to Maple Leaf Montessori. Let's take the next step together.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 relative z-10">
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 border-2 border-[#c72a7a] text-[#c72a7a] font-semibold px-5 py-2.5 rounded-full hover:bg-[#c72a7a] hover:text-white transition-all font-montserrat text-sm">
                <FiPhone /> Contact Us
              </button>
            </Link>
            <Link to="/book-tour">
              <button className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-pink-800 text-white font-semibold px-5 py-2.5 rounded-full transition-all font-montserrat text-sm shadow-md hover:shadow-lg">
                <FiCalendar /> Book a Tour
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EnrollmentProcess;