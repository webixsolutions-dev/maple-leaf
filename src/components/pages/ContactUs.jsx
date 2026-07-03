import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaArrowRight,
  FaLeaf,
  FaSun,
  FaUser,
  FaCalendar,
  FaChild,
  FaBook,
  FaHome,
  FaQuestionCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    interestedIn: '',
    startDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within one business day.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      interestedIn: '',
      startDate: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      details: '(403) 555-0123',
      description: "We're happy to answer your questions.",
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      details: 'hello@mapleleafmontessori.ca',
      description: 'Send us a message anytime. We typically reply within one business day.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Hours',
      details: 'Mon–Fri 7:00 AM–6:00 PM',
      description: "We're open five days a week to support your family.",
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Calgary Location',
      details: '123 Aspen Hills Drive SW, Calgary, AB T3H 0N1',
      description: 'Conveniently located in the heart of Aspen Woods.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
  ];

  const helpOptions = [
    {
      icon: <FaBook className="text-2xl" />,
      title: 'Programs & Age Groups',
      description: 'Learn about our Montessori programs for every stage of development.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <FaHome className="text-2xl" />,
      title: 'Book a Tour',
      description: 'Visit our beautiful environment and meet our educators.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: <FaQuestionCircle className="text-2xl" />,
      title: 'Enrollment Questions',
      description: 'Get answers about registration, requirements, and next steps.',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaUser className="text-2xl" />,
      title: 'General Support',
      description: "We're here to help with any other questions you may have.",
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
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
                We're Here to Help
              </span>
              <FaSun className="text-yellow-500 text-xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 font-serif">
              Contact <span className="text-pink-700">Us</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              Maple Leaf Montessori is a licensed Montessori daycare in Calgary, open Monday–Friday 
              from <span className="text-pink-700 font-semibold">7:00 AM to 6:00 PM</span>. 
              We're here to help! Reach out to us with any questions about our programs, admissions, tours, or enrollment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <a href="tel:+14035550123">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all flex items-center gap-2">
                  <FaPhone className="text-sm" />
                  Call Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${info.bg} p-6 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-100`}
              >
                <div className={`w-14 h-14 ${info.bg} rounded-full flex items-center justify-center mx-auto mb-3 ${info.color}`}>
                  {info.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{info.title}</h4>
                <p className={`${info.color} font-medium mt-1 text-sm`}>{info.details}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Help Section */}
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
              Send Us a Message
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              Let's Connect
            </h2>
            <p className="text-gray-600 mt-3">
              Tell us how we can help your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(403) 555-0123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Child's Age Group *
                      </label>
                      <select
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select age group</option>
                        <option value="infant">Infant (15-24 months)</option>
                        <option value="toddler">Toddler (2-3 years)</option>
                        <option value="preschool">Preschool (3-6 years)</option>
                        <option value="after-school">After School (K-6)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested In *
                      </label>
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select a program or service</option>
                        <option value="infant">Infant Program</option>
                        <option value="toddler">Toddler Program</option>
                        <option value="preschool">Preschool / Montessori Casa</option>
                        <option value="after-school">Before & After School Care</option>
                        <option value="summer">Summer Programs & Camps</option>
                        <option value="tour">Book a Tour</option>
                        <option value="enrollment">Enrollment Questions</option>
                        <option value="general">General Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your family and how we can help..."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-6 bg-pink-700 text-white py-3.5 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    Send Inquiry
                    <FaArrowRight className="text-sm" />
                  </button>
                </form>
              </div>
            </div>

            {/* Help Section */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  How Can We Help?
                </h3>
                <div className="space-y-4">
                  {helpOptions.map((item, index) => (
                    <div key={index} className={`${item.bg} p-4 rounded-xl hover:shadow-md transition-all`}>
                      <div className={`flex items-center gap-3 ${item.color}`}>
                        {item.icon}
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 pl-9">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-pink-700">We're Here for You</span>
                      <br />
                      <span className="text-xs text-gray-500">Families typically receive a reply within one business day.</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <a href="mailto:hello@mapleleafmontessori.ca">
                    <button className="w-full border-2 border-pink-700 text-pink-700 px-4 py-2.5 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all flex items-center justify-center gap-2 text-sm">
                      <FaEnvelope />
                      Email Us
                    </button>
                  </a>
                  <Link to="/book-tour">
                    <button className="w-full bg-pink-700 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-pink-800 transition-all flex items-center justify-center gap-2 text-sm">
                      <FaHome />
                      Book a Tour
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5!2d-114.15!3d51.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f8e8a3b3e3b%3A0x3b3e3b3e3b3e3b3e!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maple Leaf Montessori Location"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              Ready to Connect With Maple Leaf Montessori?
            </h2>
            <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto">
              We'd love to hear from your family! Reach out today by phone, email, or complete our Book a Tour form.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/book-tour">
                <button className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  <FaHome />
                  Book a Tour
                </button>
              </Link>
              <a href="tel:+14035550123">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  <FaPhone />
                  Call Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;