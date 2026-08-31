import { motion } from 'framer-motion';
import IconPlaceholder from '../IconPlaceholder';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ChildCareInfoCard = ({ title, description, icon, alt, color, index }) => (
  <motion.article
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 text-center flex flex-col items-center"
  >
    <IconPlaceholder
      src={icon}
      alt={alt}
      color={color}
      className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
    />
    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
  </motion.article>
);

export default ChildCareInfoCard;
