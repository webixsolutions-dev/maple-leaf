import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaUsers, FaLeaf } from 'react-icons/fa';

const cards = [
  {
    image: '/homepics/02_compassionate_care.webp',
    title: 'Compassionate Care',
    description:
      'Care and support designed around the unique needs of children, seniors and families.',
    icon: <FaHeart className="text-white text-lg" />,
    iconBg: 'bg-[#f06a9a]',
  },
  {
    image: '/homepics/03_dependable_support.webp',
    title: 'Dependable Support',
    description:
      'Reliable services that help families manage everyday care and household responsibilities.',
    icon: <FaShieldAlt className="text-white text-lg" />,
    iconBg: 'bg-[#5ec9a0]',
  },
  {
    image: '/homepics/04_family_focused_approach.webp',
    title: 'Family-Focused Approach',
    description:
      'Strong relationships, respect and open communication are at the centre of everything we do.',
    icon: <FaUsers className="text-white text-lg" />,
    iconBg: 'bg-[#f0c040]',
  },
  {
    image: '/homepics/05_growing_with_community.webp',
    title: 'Growing With Our Community',
    description:
      'Our Homecare Services are available today while our Montessori daycare prepares for its upcoming opening.',
    icon: <FaLeaf className="text-white text-lg" />,
    iconBg: 'bg-[#b8a0d8]',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const WhyFamiliesChoose = () => {
  return (
    <section className="font-montserrat bg-white py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] inline-flex items-center justify-center gap-2 flex-wrap">
            Why Families Choose Maple Leaf
            <span className="text-lg" aria-hidden="true">💜</span>
          </h2>
          <p className="text-sm md:text-base text-[#5a7a96] mt-3 font-medium">
            Compassionate care. Trusted support. A brighter tomorrow.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-4 lg:gap-5 items-stretch">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-[#f3d4dc] rounded-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow overflow-hidden flex flex-col flex-1 min-w-0"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFamiliesChoose;
