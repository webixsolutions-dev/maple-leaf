import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    { number: '100%', label: 'Licensed daycare' },
    { number: '100%', label: 'Structured daily operations' },
    { number: '100%', label: 'Family-focused learning' },
  ];

  return (
    <section className="py-16 bg-pink-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-2">
                <FaCheckCircle className="text-4xl text-pink-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
              <p className="text-white/80 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;