import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUser,
  FaChevronDown,
  FaPencilAlt,
  FaPaperPlane,
  FaHome,
} from 'react-icons/fa';
import { CONTACT } from '../data/contactInfo';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const homecareServicesOptions = [
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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const ContactUs = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* ================= HERO CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 relative z-10 flex flex-col items-start">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 bg-[#FCE7F3] text-[#E0115F] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-pink-200/60 shadow-xs mb-4">
                <FaHeart className="text-[#E0115F] text-xs" />
                <span>Where children learn, grow, and thrive</span>
              </div>

              {/* Sun Icon */}
              <FaSun className="text-amber-400 text-3xl sm:text-4xl absolute top-0 right-4 hidden sm:block pointer-events-none" />

              {/* Main Heading H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-none mt-1">
                Contact Us
              </h1>

              {/* Subheading H2 */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E0115F] leading-tight flex items-center gap-3 mt-2">
                <span>Let&apos;s Connect</span>
                <FaLeaf className="text-emerald-500 text-3xl sm:text-4xl -rotate-12 inline-block" />
              </h2>

              {/* Body Paragraphs */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-xl">
                Maple Leaf Montessori daycare is coming soon to Calgary! In the meantime, our Homecare Services are available now.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 max-w-xl">
                We&apos;d love to hear from you! Contact our team for any questions about our upcoming daycare, or to learn more about our homecare services and how we can support your family.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
                <Link
                  to="/our-services"
                  className="bg-[#00A859] hover:bg-[#00924D] text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <FaHome className="text-lg" />
                  <span>Avail Homecare Services</span>
                </Link>
                
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="bg-white hover:bg-pink-50 border-2 border-[#E0115F] text-[#E0115F] px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-xs w-full sm:w-auto"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span>Call Us</span>
                </a>

                <FaHeart className="text-[#E0115F] text-2xl hidden sm:block ml-1" />
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white">
                <img
                  src="/happywomen.webp"
                  alt="Contact Maple Leaf Montessori"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= CONTACT INFO CARDS ================= */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="bg-white border border-pink-100/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">Phone</h3>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-bold text-[#0F172A] hover:text-[#E0115F] transition-colors block mt-0.5">
                {CONTACT.phone}
              </a>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                We&apos;re happy to answer your questions.
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-pink-100/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center text-xl flex-shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">Email</h3>
              <a href={`mailto:${CONTACT.email}`} className="text-sm font-bold text-[#0F172A] hover:text-[#E0115F] transition-colors block mt-0.5 break-all">
                {CONTACT.email}
              </a>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                Send us a message anytime. We typically reply within one business day.
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white border border-pink-100/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center text-xl flex-shrink-0">
              <FaClock />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">Hours</h3>
              <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                {CONTACT.hours}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                We&apos;re here to support your family.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= SEND US A MESSAGE FORM ================= */}
        <motion.div
          {...fadeUp}
          className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
        >
          {/* Header */}
          <div className="text-left mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] inline-flex items-center gap-3 flex-wrap">
              <span>Send Us a <span className="text-[#E0115F]">Message</span></span>
              <FaLeaf className="text-emerald-500 text-2xl sm:text-3xl -rotate-12 inline-block" />
              <FaSun className="text-amber-400 text-2xl sm:text-3xl inline-block" />
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Tell us how we can help your family.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-pink-100/60 max-w-4xl">
            {submitted ? (
              <div className="text-center py-12">
                <FaHeart className="text-[#E0115F] text-5xl mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-[#0F172A]">Thank you for reaching out!</h3>
                <p className="text-slate-600 mt-2">We have received your message and will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-2">
                      Name <span className="text-[#E0115F]">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full border border-pink-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Email Address */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-2">
                      Email Address <span className="text-[#E0115F]">*</span>
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full border border-pink-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Phone Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-2">
                      Phone Number <span className="text-[#E0115F]">*</span>
                    </label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-sm" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={CONTACT.phone}
                        className="w-full border border-pink-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 4: Interested In */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-2">
                      Interested In <span className="text-[#E0115F]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="interest"
                        required
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full appearance-none border border-pink-200 rounded-2xl pl-4 pr-10 py-3.5 text-sm sm:text-base text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                      >
                        <option value="">Select a homecare service</option>
                        {homecareServicesOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0115F] text-xs pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Field 5: Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-2">
                    Message <span className="text-[#E0115F]">*</span>
                  </label>
                  <div className="relative">
                    <FaPencilAlt className="absolute left-4 top-4 text-[#E0115F] text-sm" />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full border border-pink-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 resize-y focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#E0115F] hover:bg-[#C72A7A] text-white px-9 py-4 rounded-2xl font-bold text-base sm:text-lg inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <FaPaperPlane className="text-base" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactUs;
