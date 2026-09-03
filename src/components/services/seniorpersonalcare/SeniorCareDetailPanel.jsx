import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiMinus } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import HomeServiceIcon from '../HomeServiceIcon';
import { SENIOR_CARE_COLORS } from './seniorPersonalCareAssets';

const splitIntoColumns = (items, columnCount = 3) => {
  const perColumn = Math.ceil(items.length / columnCount);
  return Array.from({ length: columnCount }, (_, columnIndex) =>
    items.slice(columnIndex * perColumn, columnIndex * perColumn + perColumn)
  );
};

const SeniorCareDetailPanel = forwardRef(({ service, onClose }, ref) => {
  const theme = service
    ? (SENIOR_CARE_COLORS[service.color] ?? SENIOR_CARE_COLORS.pink)
    : null;
  const columns = splitIntoColumns(service?.includes ?? []);

  return (
    <AnimatePresence mode="wait">
      {service && theme && (
        <motion.div
          ref={ref}
          key={service.id}
          id="senior-care-details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div
            className={`mt-6 rounded-2xl overflow-hidden border-2 ${theme.panelBorder} shadow-sm bg-white`}
          >
            <div
              className={`${theme.headerBg} border-b ${theme.headerBorder} flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <HomeServiceIcon
                  src={service.icon}
                  alt=""
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
                />
                <h3
                  className={`font-heading font-bold text-sm sm:text-base leading-snug ${theme.accentText}`}
                >
                  {service.detailTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Collapse details"
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${theme.border} ${theme.accentText} hover:opacity-80`}
              >
                <FiMinus className="text-base" />
              </button>
            </div>

            <div className={`${theme.panel} px-4 sm:px-6 py-6 sm:py-8`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {columns.map((column, columnIndex) => (
                  <ul key={columnIndex} className="space-y-2.5">
                    {column.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] sm:text-sm text-[#1a2f4a] leading-relaxed"
                      >
                        <FiCheck
                          className={`mt-0.5 shrink-0 text-base ${theme.accentText}`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {service.notIncluded?.length > 0 && (
              <div className="bg-[#f5f0e6] px-4 sm:px-6 py-3.5 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 border-t border-[#e8dfc8]">
                <div className="flex items-center gap-2 shrink-0">
                  <HiOutlineLockClosed className="text-[#4caf50] text-lg" aria-hidden="true" />
                  <span className="font-bold text-[#1a2f4a] text-xs sm:text-sm whitespace-nowrap">
                    Not included
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                  {service.notIncluded.map((item, i) => (
                    <span key={item}>
                      {i > 0 && (
                        <span className={`font-bold mx-1.5 ${theme.bullet}`}>•</span>
                      )}
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SeniorCareDetailPanel.displayName = 'SeniorCareDetailPanel';

export default SeniorCareDetailPanel;
