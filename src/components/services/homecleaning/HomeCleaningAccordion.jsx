import { FiCheck, FiMinus, FiPlus } from 'react-icons/fi';
import IconPlaceholder from '../IconPlaceholder';
import { HOME_CLEANING_COLORS } from './homeCleaningServicesAssets';

const splitIntoColumns = (items, columnCount = 4) => {
  const perColumn = Math.ceil(items.length / columnCount);
  return Array.from({ length: columnCount }, (_, columnIndex) =>
    items.slice(columnIndex * perColumn, columnIndex * perColumn + perColumn)
  );
};

const HomeCleaningAccordion = ({ services, openId, onToggle }) => (
  <div id="home-cleaning-details" className="mt-8 sm:mt-10 bg-[#f5f5f5] rounded-2xl p-3 sm:p-4 space-y-2">
    {services.map((service) => {
      const isOpen = openId === service.id;
      const theme = HOME_CLEANING_COLORS[service.color] ?? HOME_CLEANING_COLORS.green;
      const columns = splitIntoColumns(service.includes ?? []);

      return (
        <div
          key={service.id}
          id={`home-cleaning-${service.id}`}
          className={`rounded-xl overflow-hidden border transition-shadow ${
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
              isOpen ? `${theme.header} text-white` : 'bg-white text-[#1a2f4a]'
            }`}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  isOpen ? 'bg-white/20' : theme.iconBg
                }`}
              >
                <IconPlaceholder
                  src={service.icon}
                  alt=""
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </span>
              <span className="font-bold text-sm sm:text-base truncate">
                {isOpen ? service.detailTitle : service.accordionLabel}
              </span>
            </span>

            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                isOpen
                  ? 'bg-white/20 text-white'
                  : 'border border-gray-300 text-gray-500'
              }`}
              aria-hidden="true"
            >
              {isOpen ? <FiMinus className="text-lg" /> : <FiPlus className="text-lg" />}
            </span>
          </button>

          {isOpen && (
            <div className={`${theme.panel} px-4 sm:px-6 py-5 sm:py-6`}>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2">
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

                {service.detailImage && (
                  <div className="lg:w-[220px] xl:w-[260px] shrink-0">
                    <img
                      src={service.detailImage}
                      alt="In-depth bathroom cleaning"
                      loading="lazy"
                      className="w-full h-full min-h-[160px] object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default HomeCleaningAccordion;
