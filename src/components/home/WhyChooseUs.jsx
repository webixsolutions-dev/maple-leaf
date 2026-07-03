import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaLeaf, 
  FaUsers, 
  FaComments, 
  FaHands, 
  FaHeart,
  FaCheckCircle
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Licensed Facility',
      description: 'Fully licensed and regulated to ensure your child\'s safety and well-being.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:shadow-blue-100'
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Montessori-Led Learning',
      description: 'Certified Montessori educators guiding each child\'s natural curiosity and growth.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      hover: 'hover:shadow-green-100'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Safe Supervision & Ratio Compliance',
      description: 'Strict staff-to-child ratios and daily safety protocols you can trust.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:shadow-purple-100'
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: 'Parent Communication',
      description: 'Open, transparent communication and daily updates that keep you connected.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      hover: 'hover:shadow-yellow-100'
    },
    {
      icon: <FaHands className="text-3xl" />,
      title: 'Hands-On Activities',
      description: 'Practical life, sensory, and academic activities that build confidence and skills.',
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-200',
      hover: 'hover:shadow-red-100'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Calm & Nurturing Classrooms',
      description: 'Peaceful, thoughtfully designed spaces that support focus, comfort, and joy.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      hover: 'hover:shadow-pink-100'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider bg-pink-50 px-4 py-1.5 rounded-full inline-block">
            Why Families Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
            Where Curiosity Grows Every Day
          </h2>
          <p className="text-gray-600 mt-3">
            Our licensed Montessori daycare in Calgary provides a safe, structured, and nurturing 
            environment where children ages <span className="text-pink-700 font-semibold">15 months to 6 years</span> grow, explore, and thrive.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bg} ${feature.border} border p-6 rounded-2xl hover:shadow-lg ${feature.hover} transition-all hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;