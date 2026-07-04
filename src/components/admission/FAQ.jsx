import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiUserPlus,
  FiCalendar,
  FiDollarSign,
  FiClipboard,
  FiClock,
  FiMapPin,
  FiChevronDown,
  FiPhone,
  FiArrowRight
} from 'react-icons/fi';
import { FaLeaf, FaSun, FaHeart } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      n: '01',
      icon: FiUserPlus,
      q: 'How do I enroll at Maple Leaf Montessori?',
      a: 'Our enrollment process is simple! Contact us or book a tour, submit your application and documents, then confirm your spot.',
      color: 'text-pink-500',
      bg: 'bg-pink-50'
    },
    {
      n: '02',
      icon: FiCalendar,
      q: 'When can my child start?',
      a: 'Start dates are flexible! We have intake opportunities throughout the year based on availability in each program.',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      n: '03',
      icon: FiDollarSign,
      q: 'Are subsidies or financial assistance available?',
      a: 'Yes! We accept Alberta Child Care Affordability Grant and offer guidance on subsidy options for eligible families.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      n: '04',
      icon: FiClipboard,
      q: 'What should I bring for registration?',
      a: 'You\'ll need your child\'s birth certificate, immunization record, and Alberta Health Care number. We\'ll share the full list after your tour.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    {
      n: '05',
      icon: FiClock,
      q: 'Do you offer part-time care options?',
      a: 'Yes! We offer both full-day and part-time schedules to support your family\'s needs and routine.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      n: '06',
      icon: FiMapPin,
      q: 'How do I book a tour?',
      a: 'You can book a tour online through our website or give us a call. We\'d love to show you around!',
      color: 'text-pink-500',
      bg: 'bg-pink-50'
    },
  ];

  function FaqItem({ item, index }) {
    const [open, setOpen] = useState(false);
    const Icon = item.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100"
      >
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex items-start gap-3 text-left focus-ring rounded"
        >
          <span className={`flex items-center justify-center w-10 h-10 rounded-full ${item.bg} ${item.color} shrink-0 relative`}>
            <Icon />
            <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#c72a7a] text-white text-[10px] font-bold flex items-center justify-center">
              {item.n}
            </span>
          </span>
          <span className="flex-1">
            <span className="block font-semibold text-gray-900 text-sm font-montserrat">{item.q}</span>
            {open && <span className="block text-gray-600 text-sm mt-2 leading-relaxed font-montserrat">{item.a}</span>}
          </span>
          <FiChevronDown
            className={`text-[#c72a7a] mt-1 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </motion.div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <FaSun className="text-[#c72a7a] text-2xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">
              Frequently <span className="text-[#c72a7a]">Asked</span> Questions
            </h2>
            <FaLeaf className="text-[#c72a7a] text-2xl" />
          </div>
          <p className="text-gray-600 mt-2 font-montserrat">Everything you need to know about admissions to Maple Leaf Montessori.</p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {faqs.map((f, index) => (
            <FaqItem key={f.n} item={f} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-pink-50/80 rounded-2xl p-6 md:p-8 shadow-sm border border-pink-100 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute -top-10 -right-10 text-pink-200/20">
            <FaLeaf className="text-[100px]" />
          </div>
          <div className="absolute -bottom-10 -left-10 text-yellow-200/20">
            <FaSun className="text-[100px]" />
          </div>

          <div className="w-full sm:w-40 h-32 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 shrink-0 flex items-center justify-center text-gray-400 text-xs text-center px-2 relative z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&h=200&fit=crop"
              alt="Classroom"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 relative z-10">
            <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2 font-montserrat">
              We're Here to <span className="text-[#c72a7a]">Help You</span> Join Our Community
              <FaHeart className="text-[#c72a7a] text-base" />
            </h3>
            <p className="text-gray-600 text-sm mt-1 font-montserrat">
              Have questions or ready to take the next step? Our team is here to support you. Contact us today or book
              a tour to explore our beautiful learning environment.
            </p>
          </div>
          
          <div className="flex gap-3 shrink-0 relative z-10">
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 border-2 border-[#c72a7a] text-[#c72a7a] font-semibold px-5 py-2.5 rounded-full hover:bg-pink-50 transition-all font-montserrat text-sm">
                <FiPhone /> Contact Us
              </button>
            </Link>
            <Link to="/book-tour">
              <button className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-pink-800 text-white font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg font-montserrat text-sm">
                <FiCalendar /> Book a Tour
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;