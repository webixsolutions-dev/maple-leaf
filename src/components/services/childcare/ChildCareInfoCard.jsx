import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import IconPlaceholder from '../IconPlaceholder';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ChildCareInfoCard = ({
  title,
  description,
  icon,
  alt,
  color,
  index,
  isOpen = false,
  onLearnMore,
}) => (
  <motion.article
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 text-center flex flex-col items-center h-full ${
      isOpen ? 'border-[#c72a7a] ring-1 ring-[#c72a7a]/20' : 'border-gray-100'
    }`}
  >
    <IconPlaceholder
      src={icon}
      alt={alt}
      color={color}
      className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
    />
    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed flex-1">{description}</p>

    {onLearnMore && (
      <button
        type="button"
        onClick={onLearnMore}
        aria-expanded={isOpen}
        aria-controls="service-detail-panel"
        className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-xs px-4 py-2 rounded-xl mt-4 transition-all shadow-sm hover:shadow-md"
      >
        Learn More
        <FiChevronDown
          className={`text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
    )}
  </motion.article>
);

export default ChildCareInfoCard;
