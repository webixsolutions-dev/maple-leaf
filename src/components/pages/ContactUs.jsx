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
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaChevronDown,
  FaChevronRight,
  FaPencilAlt,
  FaPaperPlane,
  FaChild,
  FaFileAlt,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    title: 'Phone',
    detail: '(403) 555-0123',
    description: "We're happy to answer your questions.",
  },
  {
    icon: <FaEnvelope />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Email',
    detail: 'hello@mapleleafmontessori.ca',
    description: 'Send us a message anytime. We typically reply within one business day.',
  },
  {
    icon: <FaClock />,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: 'Hours',
    detail: 'Mon–Fri 7:00 AM–6:00 PM',
    description: "We're open five days a week to support your family.",
  },
  {
    icon: <FaMapMarkerAlt />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Calgary Location',
    detail: '123 Aspen Hills Drive SW, Calgary, AB T3H 0N1',
    description: 'Conveniently located in the heart of Aspen Woods.',
  },
];

const helpTopics = [
  {
    icon: <FaChild />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    title: 'Programs & Age Groups',
    description: 'Learn about our Montessori programs for every stage of development.',
    link: '/programs',
  },
  {
    icon: <FaCalendarAlt />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Book a Tour',
    description: 'Visit our beautiful environment and meet our educators.',
    link: '/book-a-tour',
  },
  {
    icon: <FaFileAlt />,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: 'Enrollment Questions',
    description: 'Get answers about registration, requirements, and next steps.',
    link: '/admissions',
  },
  {
    icon: <FaHeart />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'General Support',
    description: "We're here to help with any other questions you may have.",
    link: '/contact',
  },
];

const ageGroups = [
  'Infant (15–24 months)',
  'Toddler (2–3 years)',
  'Preschool (3–6 years)',
  'Kindergarten – Grade 6',
];

const interests = [
  'Infant Program (Phase 4)',
  'Toddler Program',
  'Preschool / Montessori Casa',
  'Before & After School Care',
  'Summer Programs & Camps',
  'General Inquiry',
];

/* ------------------------------------------------------------------ */
/*  ANIMATION                                                          */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    ageGroup: '',
    interest: '',
    startDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: connect to your backend / email service
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="font-montserrat bg-white pt-20 pb-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10 md:space-y-12">

        {/* ================= HERO BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-pink-50"
        >
          <div className="grid md:grid-cols-2 items-stretch">

            {/* ---- Left content ---- */}
            <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl" />

              {/* Tagline pill */}
              <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs px-4 py-1.5 rounded-full self-start mb-4">
                <FaHeart className="text-[10px]" />
                We&apos;re Here to Help
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Contact Us
                <br />
                <span className="text-[#e0115f] inline-flex items-center gap-3">
                  Let&apos;s Connect
                  <FaLeaf className="text-green-500 text-2xl lg:text-3xl" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 max-w-md">
                Maple Leaf Montessori is a licensed Montessori daycare in
                Calgary, open Monday–Friday from 7:00 AM to 6:00 PM.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-3 max-w-md">
                We&apos;re here to help! Reach out to us with any questions
                about our programs, admissions, tours, or enrollment. We&apos;d
                love to hear from you.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Link
                  to="/book-a-tour"
                  className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <FaCalendarAlt />
                  Book a Tour
                </Link>
                <a
                  href="tel:+14035550123"
                  className="inline-flex items-center gap-2 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <FaPhoneAlt className="text-xs" />
                  Call Us
                </a>
                <FaHeart className="text-pink-400 text-2xl hidden sm:block" />
              </div>
            </div>

            {/* ---- Right image ---- */}
            <div className="relative min-h-[240px] md:min-h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&q=80"
                alt="Family meeting an educator at Maple Leaf Montessori"
                className="absolute inset-0 w-full h-full object-cover md:rounded-l-[60px]"
              />
              {/* Motto badge */}
              <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
                <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
                <p className="text-sky-600 font-extrabold text-sm">Learn</p>
                <p className="text-green-600 font-extrabold text-sm">Grow</p>
                <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CONTACT INFO CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5 flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 ${card.iconBg} ${card.iconColor} rounded-full flex items-center justify-center text-lg flex-shrink-0`}
              >
                {card.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
                <p className="text-xs font-semibold text-gray-800 mt-1 break-words">
                  {card.detail}
                </p>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1.5">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SEND US A MESSAGE ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-pink-50/50 rounded-3xl p-5 sm:p-8"
        >
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-flex items-center gap-3 flex-wrap">
              <span>
                Send Us a <span className="text-[#e0115f]">Message</span>
              </span>
              <FaLeaf className="text-green-500 text-xl" />
              <FaSun className="text-amber-400 text-xl" />
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Tell us how we can help your family.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8">

            {/* ---------- FORM ---------- */}
            <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <FaHeart className="text-[#e0115f] text-4xl mb-4" />
                  <h3 className="font-extrabold text-gray-900 text-xl">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-sm">
                    We&apos;ve received your inquiry and will get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Parent/Guardian Name <span className="text-[#e0115f]">*</span>
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e0115f] text-sm" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Email Address <span className="text-[#e0115f]">*</span>
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e0115f] text-sm" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Phone Number <span className="text-[#e0115f]">*</span>
                      </label>
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e0115f] text-sm" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(403) 555-0123"
                          className="w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Age group */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Child&apos;s Age Group <span className="text-[#e0115f]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="ageGroup"
                          value={form.ageGroup}
                          onChange={handleChange}
                          className="w-full appearance-none border border-pink-200 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        >
                          <option value="">Select age group</option>
                          {ageGroups.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e0115f] text-xs pointer-events-none" />
                      </div>
                    </div>

                    {/* Interested in */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Interested In <span className="text-[#e0115f]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="w-full appearance-none border border-pink-200 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        >
                          <option value="">Select a program or service</option>
                          {interests.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e0115f] text-xs pointer-events-none" />
                      </div>
                    </div>

                    {/* Start date */}
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-2">
                        Preferred Start Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="startDate"
                          value={form.startDate}
                          onChange={handleChange}
                          className="w-full border border-pink-200 rounded-xl pl-4 pr-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FaPencilAlt className="absolute left-4 top-4 text-[#e0115f] text-sm" />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us more about your family and how we can help..."
                        className="w-full border border-pink-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center pt-2">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <FaPaperPlane />
                      Send Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ---------- HOW CAN WE HELP SIDEBAR ---------- */}
            <div>
              <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4">
                How Can We Help?
              </h3>

              <div className="space-y-3">
                {helpTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Link
                      to={topic.link}
                      className="flex items-center gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 group"
                    >
                      <div
                        className={`w-12 h-12 ${topic.iconBg} ${topic.iconColor} rounded-full flex items-center justify-center text-lg flex-shrink-0`}
                      >
                        {topic.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-xs">
                          {topic.title}
                        </h4>
                        <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                          {topic.description}
                        </p>
                      </div>
                      <FaChevronRight className="text-[#e0115f] text-xs flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}

                {/* Highlighted card */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="flex items-center gap-4 bg-purple-50 border border-purple-100 rounded-2xl p-4"
                >
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    <FaClock />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xs">
                      We&apos;re Here for You
                    </h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                      Families typically receive a reply within one business day.
                    </p>
                  </div>
                  <FaHeart className="text-purple-400 text-lg flex-shrink-0" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* ---------- BOTTOM ACTIONS ---------- */}
          <div className="border-t border-pink-100 mt-8 pt-6 relative">
            <FaHeart className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-pink-50 px-1 text-pink-400 text-lg" />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@mapleleafmontessori.ca"
                className="inline-flex items-center gap-2 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
              >
                <FaEnvelope className="text-xs" />
                Email Us
              </a>
              <Link
                to="/book-a-tour"
                className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <FaCalendarAlt />
                Book a Tour
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactUs;
