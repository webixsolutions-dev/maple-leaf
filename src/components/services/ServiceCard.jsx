import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServiceCard = ({ title, description, image, imageLabel, to, index = 0 }) => (
  <motion.article
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden"
  >
    {image ? (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl border-b-2 border-gray-100">
        <img
          src={image}
          alt={imageLabel}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <ImagePlaceholder
        aspectRatio="4/3"
        label={imageLabel}
        rounded="rounded-t-2xl rounded-b-none"
        className="w-full border-0 border-b-2"
      />
    )}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-5 py-2.5 rounded-xl mt-4 self-start transition-all shadow-sm hover:shadow-md"
      >
        Learn More →
      </Link>
    </div>
  </motion.article>
);

export default ServiceCard;
