import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaBaby, 
  FaChild, 
  FaUsers, 
  FaBook, 
  FaStar, 
  FaClock,
  FaGraduationCap,
  FaHands,
  FaHeart,
  FaLeaf,
  FaSun,
  FaCalendar,
  FaHome
} from 'react-icons/fa';

const Programs = () => {
  const programs = [
    {
      icon: <FaBaby className="text-3xl" />,
      title: 'Infant Program',
      subtitle: '(Phase 4)',
      age: '15 months - 24 months',
      description: 'Nurturing care and early exploration in a calm, responsive environment.',
      image: 'https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?w=400&h=250&fit=crop',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:shadow-blue-100'
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Toddler Program',
      subtitle: '',
      age: '2 years - 3 years',
      description: 'Encouraging independence, movement, and curiosity through hands-on learning.',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989c?w=400&h=250&fit=crop',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:shadow-purple-100'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Preschool / Montessori Casa',
      subtitle: '',
      age: '3 years - 6 years',
      description: 'Building confidence, critical thinking, and academic readiness in a Montessori environment.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      hover: 'hover:shadow-pink-100'
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Before & After School Care',
      subtitle: '',
      age: 'Kindergarten - Grade 6',
      description: 'Safe, engaging care with homework support, play, and enrichment activities.',
      image: 'https://images.unsplash.com/photo-1588072432836-f100ac3a6f0c?w=400&h=250&fit=crop',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      hover: 'hover:shadow-yellow-100'
    },
    {
      icon: <FaCalendar className="text-3xl" />,
      title: 'Summer Programs & Camps',
      subtitle: '',
      age: 'Ages 2 - 6 years',
      description: 'Fun, themed camps and enrichment programs all summer long!',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop',
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-200',
      hover: 'hover:shadow-red-100'
    },
  ];

  const highlights = [
    {
      icon: <FaBook className="text-3xl" />,
      title: 'Montessori-Led Learning',
      description: 'Authentic Montessori curriculum that fosters independence, focus, and a love of learning.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Age-Appropriate Development',
      description: 'Programs designed to support each child\'s growth across social, emotional, cognitive, and physical milestones.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: <FaHands className="text-3xl" />,
      title: 'Hands-On Discovery',
      description: 'Children learn by doing through sensory-rich activities and real world experiences.',
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Strong Parent Communication',
      description: 'We partner with families through open, engaging communication and regular updates.',
      color: 'text-red-500',
      bg: 'bg-red-50'
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
            <div className="flex items-center justify-center gap-2 text-pink-600 mb-2">
              <FaLeaf className="text-xl" />
              <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-pink-100 px-4 py-1.5 rounded-full inline-block">
                Our Programs
              </span>
              <FaSun className="text-xl text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 font-serif">
              Programs for Every Stage of <span className="text-pink-700">Early Learning</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              At Maple Leaf Montessori, we offer licensed Montessori-based daycare and preschool programs 
              in Calgary for children ages <span className="text-pink-700 font-semibold">15 months to 6 years</span>. 
              Our safe, structured, and nurturing environment supports hands-on learning, independence, 
              and a lifelong love of discovery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/book-tour">
                <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link to="/admissions">
                <button className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition-all">
                  View Admissions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid - Cards with Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${program.bg} ${program.border} border rounded-2xl overflow-hidden hover:shadow-xl ${program.hover} transition-all hover:-translate-y-2`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon Badge on Image */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md">
                    <div className={`${program.color}`}>
                      {program.icon}
                    </div>
                  </div>
                  {/* Age Badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white text-sm font-medium">
                      <FaClock className="text-pink-300" />
                      <span>{program.age}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    {program.title}
                    {program.subtitle && (
                      <span className="text-xs text-pink-600 font-medium">{program.subtitle}</span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{program.description}</p>
                  
                  {/* Age Display */}
                  <div className="mt-3 flex items-center gap-2 text-pink-600 text-xs font-semibold bg-pink-100 px-3 py-1 rounded-full inline-flex">
                    <FaClock />
                    <span>{program.age}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs at a Glance */}
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
              Our Programs at a Glance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
              Why Families Love Our Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.bg} p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-pink-700 rounded-2xl py-12 px-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              Ready to Find the Right Program for Your Child?
            </h2>
            <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto">
              We'd love to show you around! Book a tour to meet our educators, explore our classrooms, 
              and find the perfect fit for your family.
            </p>
            <div className="mt-6">
              <Link to="/book-tour">
                <button className="bg-white text-pink-700 px-10 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                  Book a Tour
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Programs;