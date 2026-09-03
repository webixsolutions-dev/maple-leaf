import {
  FiMinus,
  FiPlus,
  FiUser,
  FiBookOpen,
  FiTruck,
  FiShoppingBag,
  FiHeart,
} from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import IconPlaceholder from '../IconPlaceholder';
import { CHILD_CARE_COLORS } from './childCareServicesAssets';

const CATEGORY_ICONS = {
  care: FiUser,
  education: FiBookOpen,
  transport: FiTruck,
  household: FiShoppingBag,
  health: FiHeart,
};

const ChildCareAccordion = ({ services, openId, onToggle }) => (
  <div id="child-care-details" className="mt-8 sm:mt-10 space-y-3">
    {services.map((service) => {
      const isOpen = openId === service.id;
      const theme = CHILD_CARE_COLORS[service.color] ?? CHILD_CARE_COLORS.pink;

      return (
        <div
          key={service.id}
          id={`child-care-${service.id}`}
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
                {isOpen ? service.detailTitle : service.accordionLabel ?? service.title}
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
              {service.summaryOnly ? (
                <p className="text-sm text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
                  {service.description}
                </p>
              ) : (
                <div className="overflow-x-auto pb-1 lg:overflow-visible -mx-1 px-1">
                  <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-5 lg:gap-3 xl:gap-4 min-w-0 lg:min-w-full">
                    {service.categories?.map((category) => {
                      const CategoryIcon = CATEGORY_ICONS[category.icon] ?? FiUser;

                      return (
                        <div key={category.title} className="min-w-0 flex-1 lg:basis-0">
                          <div className="flex items-start gap-2 mb-3">
                            <CategoryIcon
                              className={`text-base mt-0.5 shrink-0 ${theme.accentText}`}
                              aria-hidden="true"
                            />
                            <h4 className="font-bold text-[#1a2f4a] text-xs sm:text-[13px] leading-snug">
                              {category.title}
                            </h4>
                          </div>
                          <ul className="space-y-1.5 pl-1">
                            {category.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-600 leading-relaxed"
                              >
                                <span className={`mt-0.5 shrink-0 font-bold ${theme.bullet}`}>
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {service.familyProvides && (
                <p className="mt-5 pt-4 border-t border-black/5 text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  {service.familyProvides}
                </p>
              )}

              {service.notIncluded?.length > 0 && (
                <div className="mt-5 pt-4 border-t border-black/5 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <HiOutlineLockClosed className="text-[#4caf50] text-lg" aria-hidden="true" />
                    <span className="font-bold text-[#1a2f4a] text-xs sm:text-sm whitespace-nowrap">
                      Typically Not Included (Unless Agreed Upon)
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
          )}
        </div>
      );
    })}
  </div>
);

export default ChildCareAccordion;
