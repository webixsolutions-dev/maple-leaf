import { motion } from 'framer-motion';
import HomeServiceIcon from '../HomeServiceIcon';
import { CHILD_CARE_COLORS } from './childCareServicesAssets';

const DEFAULT_COLORS = CHILD_CARE_COLORS;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ChildCareInfoCard = ({
  title,
  description,
  icon,
  image,
  alt,
  color,
  colorMap = DEFAULT_COLORS,
  buttonTheme,
  index,
  isOpen = false,
  onLearnMore,
  detailsId = 'service-detail-panel',
}) => {
  const theme = colorMap[color] ?? colorMap.pink ?? DEFAULT_COLORS.pink;
  const learnMoreTheme = buttonTheme ?? theme;

  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden ${
        isOpen ? `ring-2 ${theme.ring}` : ''
      }`}
    >
      <div className="relative px-3 pt-3 pb-0">
        <div className="relative rounded-t-[14px] overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full aspect-[8/7] object-cover block"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-5 flex justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[72px] h-10 bg-white rounded-t-full -mb-1" />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[42%] z-10">
          <HomeServiceIcon
            src={icon}
            alt=""
            className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] object-contain drop-shadow-sm"
          />
        </div>
      </div>

      <div className="px-3 pt-8 pb-4 text-center flex flex-col flex-1">
        <h3 className="font-heading font-bold text-[#1a2f4a] text-[15px] sm:text-base leading-snug mb-1.5">
          {title}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#3d4f63] leading-relaxed flex-1 px-1">
          {description}
        </p>

        {onLearnMore && (
          <button
            type="button"
            onClick={onLearnMore}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            className={`inline-flex items-center gap-1.5 font-semibold text-[11px] sm:text-xs mt-3 mx-auto px-4 py-1.5 rounded-full border transition-all hover:opacity-90 ${learnMoreTheme.border} ${learnMoreTheme.accentText}`}
          >
            Learn More
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default ChildCareInfoCard;
