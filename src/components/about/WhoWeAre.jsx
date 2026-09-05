import { motion } from 'framer-motion';
import {
  FaHeart,
  FaLeaf,
  FaSun,
  FaStar,
  FaSeedling,
  FaUsers,
  FaComments,
  FaHandHoldingHeart,
} from 'react-icons/fa';

const cards = [
  {
    image: '/aboutpics/02_montessori_philosophy.webp',
    title: 'Montessori Philosophy',
    description:
      'Child-led learning that builds independence, confidence, and a lifelong love of learning.',
    icon: <FaSeedling className="text-white text-lg" />,
    iconBg: 'bg-[#f06a9a]',
    accent: <FaLeaf className="text-pink-300 text-sm" />,
  },
  {
    image: '/aboutpics/03_safe_supervision_caring_support.webp',
    title: 'Safe Supervision & Caring Support',
    description:
      'Certified educators and compassionate care that ensure every child is seen, supported, and encouraged.',
    icon: <FaUsers className="text-white text-lg" />,
    iconBg: 'bg-[#5ec9e8]',
    accent: <FaHeart className="text-sky-300 text-sm" />,
  },
  {
    image: '/aboutpics/04_strong_parent_communication.webp',
    title: 'Strong Parent Communication',
    description:
      'Clear communication, updates, and partnerships that keep families informed and connected.',
    icon: <FaComments className="text-white text-lg" />,
    iconBg: 'bg-[#f0c040]',
    accent: <FaSun className="text-amber-300 text-sm" />,
  },
  {
    image: '/aboutpics/05_nurturing_environments.webp',
    title: 'Nurturing Environments',
    description:
      'Beautiful, calm spaces designed to inspire curiosity, creativity, and joyful discovery.',
    icon: <FaHandHoldingHeart className="text-white text-lg" />,
    iconBg: 'bg-[#b8a0d8]',
    accent: <FaStar className="text-purple-300 text-sm" />,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const WhoWeAre = () => {
  return (
    <section className="font-montserrat bg-white py-2 md:py-4">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] inline-flex items-center justify-center gap-2 flex-wrap">
          Who We Are
          <FaHeart className="text-purple-400 text-lg" />
        </h2>
        <p className="text-sm md:text-base text-[#5a7a96] mt-3 leading-relaxed">
          Our approach combines Montessori principles with modern best practices
          and a deep commitment to supporting families.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative bg-white border border-[#f3d4dc] rounded-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow overflow-hidden flex flex-col"
          >
            <div className="relative flex-shrink-0">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-[168px] lg:h-[178px] object-cover"
              />
              <div
                className={`absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-[46px] h-[46px] ${card.iconBg} rounded-full flex items-center justify-center shadow-md ring-[5px] ring-white`}
              >
                {card.icon}
              </div>
            </div>

            <div className="pt-9 pb-7 px-4 lg:px-5 text-center flex-1 flex flex-col">
              <h3 className="font-heading text-[15px] lg:text-base font-bold text-[#1e3a5f] mb-2.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-[11px] lg:text-xs text-[#5a7a96] leading-relaxed">
                {card.description}
              </p>
            </div>

            <span className="absolute bottom-3 right-3 opacity-80" aria-hidden="true">
              {card.accent}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
