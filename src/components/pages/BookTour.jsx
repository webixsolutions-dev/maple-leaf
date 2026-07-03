import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendar, 
  FaClock, 
  FaUsers, 
  FaInfoCircle, 
  FaShieldAlt,
  FaLeaf,
  FaSun,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChild,
  FaBook,
  FaQuestionCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookTour = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    program: '',
    tourDate: '',
    tourTime: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Tour booked successfully! We will contact you within one business day.');
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childAge: '',
      program: '',
      tourDate: '',
      tourTime: '',
      message: '',
    });
  };

  const tourExpectations = [
    {
      icon: <FaCalendar className="text-2xl" />,
      title: 'Tour the Classrooms',
      description: 'Explore our thoughtfully prepared environments designed for hands-on learning.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'Meet Our Educators',
      description: 'Connect with our caring, AMI-trained teachers and learn about their approach.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: <FaBook className="text-2xl" />,
      title: 'Learn About Programs',
      description: 'Discover how our Montessori programs support each child\'s growth and development.',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaQuestionCircle className="text-2xl" />,
      title: 'Ask Questions',
      description: 'We\'re here to answer your questions and help you feel confident in your choice.',
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
                Book a Tour
              </span>
              <FaSun className="text-yellow-500 text-xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 font-serif">
              Schedule Your <span className="text-pink-700">Tour</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              We'd love to show you around! Fill out the form below and we'll be in touch to confirm your visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaUser className="inline mr-2 text-pink-600" />
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2 text-pink-600" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaPhone className="inline mr-2 text-pink-600" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaChild className="inline mr-2 text-pink-600" />
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
                        <option value="15-24months">15 months – 24 months</option>
                        <option value="2-3years">2 years – 3 years</option>
                        <option value="3-6years">3 years – 6 years</option>
                        <option value="k-6">Kindergarten – Grade 6</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaBook className="inline mr-2 text-pink-600" />
                        Interested Program *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="infant">Infant Program</option>
                        <option value="toddler">Toddler Program</option>
                        <option value="preschool">Preschool / Montessori Casa</option>
                        <option value="after-school">Before & After School Care</option>
                        <option value="summer">Summer Programs & Camps</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaCalendar className="inline mr-2 text-pink-600" />
                        Preferred Tour Date *
                      </label>
                      <input
                        type="date"
                        name="tourDate"
                        value={formData.tourDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaClock className="inline mr-2 text-pink-600" />
                        Preferred Tour Time *
                      </label>
                      <select
                        name="tourTime"
                        value={formData.tourTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="1pm">1:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us anything else that will help us prepare for your visit..."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full mt-6 bg-pink-700 text-white py-4 rounded-full font-semibold text-lg hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Book My Tour
                    <FaArrowRight className="text-sm" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-pink-50 rounded-2xl p-6 sticky top-24 border border-pink-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  What to Expect on Your Tour
                </h3>
                <div className="space-y-4">
                  {tourExpectations.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${item.bg} p-4 rounded-xl hover:shadow-md transition-all`}
                    >
                      <div className={`flex items-start gap-3 ${item.color}`}>
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-pink-200">
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-pink-700">We're Here for You</span>
                      <br />
                      <span className="text-xs text-gray-500">
                        Families typically receive a reply within <strong>one business day</strong>.
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      We look forward to welcoming you to Maple Leaf Montessori!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
              Ready to Visit <span className="text-pink-200">Maple Leaf Montessori</span>?
            </h2>
            <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto">
              We can't wait to meet your family and show you our beautiful learning environment.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <button className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  <FaPhone className="text-sm" />
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BookTour;