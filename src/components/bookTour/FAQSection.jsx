import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSun, FaLeaf, FaPhoneAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { faqs, fadeUp } from '../data/bookTourData';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 mb-6">
          Frequently Asked Questions
          <FaSun className="text-amber-400 text-xl" />
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-bold text-gray-900 text-sm">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-500 text-xs flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === index && (
                <p className="px-5 pb-4 text-xs text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-5 text-xs text-gray-700">
          <FaLeaf className="text-green-500" />
          <span>Still have questions? We're happy to help!</span>
          <a
            href="tel:+14035550123"
            className="inline-flex items-center gap-1.5 text-[#e0115f] font-semibold underline underline-offset-2"
          >
            <FaPhoneAlt className="text-[10px]" />
            Call Us
          </a>
          <span>or</span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[#e0115f] font-semibold underline underline-offset-2"
          >
            <FaEnvelope className="text-[10px]" />
            Send Us a Message
          </Link>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative rounded-3xl overflow-hidden shadow-lg min-h-[280px] lg:min-h-[380px]"
      >
        <img
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&q=80"
          alt="Family visiting Maple Leaf Montessori"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
          <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
          <p className="text-sky-600 font-extrabold text-sm">Learn</p>
          <p className="text-green-600 font-extrabold text-sm">Grow</p>
          <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;