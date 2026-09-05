import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronDown,
  FaPencilAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { CONTACT } from '../data/contactInfo';

const homecareServices = [
  'Full-Time Nannies',
  'Part-Time Nannies',
  'Live-In Nannies',
  'Babysitters',
  'Senior Companionship',
  'Senior & Personal Care',
  'Transportation Services',
  'Meal Preparation',
  'Light Housekeeping',
  'Maid Services',
  'House Cleaning',
  'Carpet Cleaning',
  'Window & Gutter Cleaning',
];

const inputClass =
  'w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-10"
    >
      <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-7 lg:p-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0F172A] inline-flex items-center gap-3 flex-wrap">
            <span>
              Send Us a <span className="text-[#E0115F]">Message</span>
            </span>
            <FaLeaf className="text-emerald-500 text-xl" />
            <FaSun className="text-amber-400 text-xl" />
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Tell us how we can help your family.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <FaHeart className="text-[#E0115F] text-4xl mb-4" />
            <h3 className="font-serif font-bold text-gray-900 text-xl">
              Thank you for reaching out!
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              We&apos;ve received your inquiry and will get back to you within
              one business day.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Name <span className="text-[#E0115F]">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Email Address <span className="text-[#E0115F]">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Phone Number <span className="text-[#E0115F]">*</span>
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={CONTACT.phone}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Interested In */}
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">
                  Interested In <span className="text-[#E0115F]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full appearance-none border border-pink-200 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  >
                    <option value="">Select a homecare service</option>
                    {homecareServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-xs pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">
                Message <span className="text-[#E0115F]">*</span>
              </label>
              <div className="relative">
                <FaPencilAlt className="absolute left-4 top-4 text-[#E0115F] text-sm" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 bg-[#E0115F] hover:bg-[#C72A7A] text-white font-bold text-sm sm:text-base px-10 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <FaPaperPlane />
                Send Inquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
