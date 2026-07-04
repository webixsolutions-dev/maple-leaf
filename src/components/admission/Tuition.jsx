import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiCalendar,
  FiXCircle,
  FiClock,
  FiDollarSign,
  FiUserCheck,
  FiArrowRight
} from 'react-icons/fi';
import { 
  FaBaby, 
  FaChild, 
  FaGraduationCap, 
  FaHandsHelping, 
  FaShieldAlt, 
  FaHeart,
  FaLeaf,
  FaSun
} from 'react-icons/fa';

const Tuition = () => {
  const fullTime = [
    { icon: FaBaby, name: 'Infant Program', sub: '(Phase 4)', price: '$1,200 – $1,400', color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: FaChild, name: 'Toddler Program', sub: '(2 – 3 years)', price: '$1,000 – $1,200', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: FaGraduationCap, name: 'Preschool Program', sub: '(3 – 6 years)', price: '$950 – $1,100', color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const partTime = [
    { name: '3 Days / Week', price: '$750 – $850' },
    { name: '4 Days / Week', price: '$850 – $950' },
  ];

  const notes = [
    { icon: FiXCircle, text: 'No half-day rates.', color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: FiCalendar, text: 'Part-time care requires a minimum of 3 full days per week.', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: FiClock, text: 'Drop-in care may be offered subject to availability.', color: 'text-green-500', bg: 'bg-green-50' },
    { icon: FiDollarSign, text: 'Additional hours are billed at $15 – $20 per hour.', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: FiUserCheck, text: 'Rates may align with Alberta Child Care Affordability Grant and subsidy programs.', color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const whyUs = [
    { icon: FaHandsHelping, title: 'Montessori-Led Learning', body: 'Child-centered, hands-on learning that builds independence, confidence, and a love of discovery.', color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: FaShieldAlt, title: 'Licensed & Trusted', body: 'Fully licensed and regulated to ensure your child\'s safety, well-being, and development.', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: FiCalendar, title: 'Structured Routines', body: 'Consistent daily rhythms that support focus, behavior, and lifelong learning.', color: 'text-green-500', bg: 'bg-green-50' },
    { icon: FaHeart, title: 'Strong Parent Communication', body: 'We partner with families through open communication, updates, and regular check-ins.', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: FaHeart, title: 'Nurturing Classrooms', body: 'Warm, inclusive spaces where children feel safe, supported, and encouraged to thrive.', color: 'text-purple-500', bg: 'bg-purple-50' },
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
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <FaSun className="text-[#c72a7a] text-2xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat">
              Tuition, Enrollment &amp; <span className="text-[#c72a7a]">Next Steps</span>
            </h2>
          </div>
          <p className="text-gray-600 mt-2 font-montserrat">Transparent pricing. Flexible options. Quality care you can trust.</p>
        </motion.div>

        {/* Three Columns */}
        <div className="grid lg:grid-cols-[1fr_1fr_0.8fr] gap-6 mb-16">
          
          {/* Full Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
          >
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-1 font-montserrat">
              <FiCalendar className="text-[#c72a7a]" /> Full-Time Monthly Rates
            </h3>
            <p className="text-gray-500 text-xs mb-4 font-montserrat">(Up to 9 hours/day)</p>
            <div className="space-y-3">
              {fullTime.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-center justify-between bg-pink-50/50 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center justify-center w-9 h-9 rounded-full ${p.bg} ${p.color}`}>
                        <Icon />
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm font-montserrat">{p.name}</p>
                        <p className="text-gray-500 text-xs font-montserrat">{p.sub}</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 text-sm whitespace-nowrap font-montserrat">{p.price}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Part Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
          >
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-1 font-montserrat">
              <FiCalendar className="text-[#c72a7a]" /> Part-Time Monthly Rates
            </h3>
            <p className="text-gray-500 text-xs mb-4 font-montserrat">(Up to 6 hours/day)</p>
            <div className="space-y-3">
              {partTime.map((p, i) => (
                <div key={i} className="flex items-center justify-between bg-green-50/50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-500">
                      <FiCalendar />
                    </span>
                    <p className="font-semibold text-gray-900 text-sm font-montserrat">{p.name}</p>
                  </div>
                  <span className="font-bold text-gray-900 text-sm whitespace-nowrap font-montserrat">{p.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
          >
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 font-montserrat">
              Important Notes <FaHeart className="text-[#c72a7a]" />
            </h3>
            <ul className="space-y-3">
              {notes.map((n, i) => {
                const Icon = n.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`flex items-center justify-center w-7 h-7 rounded-full ${n.bg} ${n.color} shrink-0 mt-0.5 text-xs`}>
                      <Icon />
                    </span>
                    <p className="text-gray-600 text-sm leading-snug font-montserrat">{n.text}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Why Families Choose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center flex items-center justify-center gap-3 font-montserrat">
            <FaLeaf className="text-[#c72a7a] text-xl" /> Why Families Choose <span className="text-[#c72a7a]">Our Programs</span>
            <FaHeart className="text-[#c72a7a] text-xl" />
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <span className={`flex items-center justify-center w-11 h-11 rounded-full ${w.bg} ${w.color} text-lg mb-3`}>
                    <Icon />
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-1 font-montserrat">{w.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed font-montserrat">{w.body}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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
              Ready to Find <span className="text-[#c72a7a]">the Right Program</span> for Your Child?
            </h3>
            <p className="text-gray-600 text-sm mt-1 font-montserrat">
              We'd love to show you around! Book a tour to meet our educators, explore our classrooms, and find the
              perfect fit for your family.
            </p>
          </div>
          
          <Link to="/book-tour" className="relative z-10">
            <button className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-pink-800 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-montserrat">
              <FiCalendar /> Book a Tour
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Tuition;