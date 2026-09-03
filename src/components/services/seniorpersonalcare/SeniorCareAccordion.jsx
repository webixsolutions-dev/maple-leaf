import { FiCheck, FiMinus, FiPlus } from 'react-icons/fi';
import IconPlaceholder from '../IconPlaceholder';
import { SENIOR_CARE_COLORS } from './seniorPersonalCareAssets';

const splitIntoColumns = (items, columnCount = 3) => {
  const perColumn = Math.ceil(items.length / columnCount);
  return Array.from({ length: columnCount }, (_, columnIndex) =>
    items.slice(columnIndex * perColumn, columnIndex * perColumn + perColumn)
  );
};

const SeniorCareAccordion = ({ services, openId, onToggle }) => (
  <div id="senior-care-details" className="mt-8 sm:mt-10 space-y-3">
    {services.map((service) => {
      const isOpen = openId === service.id;
      const theme = SENIOR_CARE_COLORS[service.color] ?? SENIOR_CARE_COLORS.pink;
      const columns = splitIntoColumns(service.includes ?? []);

      return (
        <div
          key={service.id}
          id={`senior-care-${service.id}`}
          className={`rounded-2xl overflow-hidden border transition-shadow ${
            isOpen
              ? `${theme.panelBorder} shadow-sm`
              : 'border-gray-200 bg-white hover:shadow-sm'
          }`}
        >
          <button
            type="button"
            onClick={() => onToggle(service.id)}
            aria-expanded={isOpen}
            className={`w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 text-left ${
              isOpen ? theme.headerBg : 'bg-white'
            }`}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${theme.iconBg}`}
              >
                <IconPlaceholder
                  src={service.icon}
                  alt=""
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </span>
              <span
                className={`font-heading font-bold text-sm sm:text-base ${
                  isOpen ? theme.accentText : 'text-[#1a2f4a]'
                }`}
              >
                {service.detailTitle}
              </span>
            </span>

            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                isOpen
                  ? `${theme.iconBg} text-white`
                  : 'border border-gray-300 text-gray-500 bg-white'
              }`}
              aria-hidden="true"
            >
              {isOpen ? <FiMinus className="text-lg" /> : <FiPlus className="text-lg" />}
            </span>
          </button>

          {isOpen && (
            <div className={`${theme.panel} px-4 sm:px-6 py-5 sm:py-6`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
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

              {service.notIncluded?.length > 0 && (
                <p className="mt-5 pt-4 border-t border-black/5 text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#1a2f4a]">Not included: </span>
                  {service.notIncluded.join(', ')}.
                </p>
              )}
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default SeniorCareAccordion;
