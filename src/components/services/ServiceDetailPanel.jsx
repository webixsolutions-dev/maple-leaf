import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceDetailPanel = forwardRef(({ service }, ref) => (
  <AnimatePresence mode="wait">
    {service && (
      <motion.div
        ref={ref}
        key={service.id}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <div className="mt-6 bg-[#fdf8f3] border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
            {service.detailTitle}
          </h3>

          {service.summaryOnly ? (
            <p className="text-sm text-gray-600 leading-relaxed">{service.summary}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.includes?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1a2f4a] text-sm mb-3">What&apos;s Included</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="text-[#c72a7a] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.notIncluded?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1a2f4a] text-sm mb-3">
                    Typically Not Included
                  </h4>
                  <ul className="space-y-2">
                    {service.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="text-gray-400 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
));

ServiceDetailPanel.displayName = 'ServiceDetailPanel';

export default ServiceDetailPanel;
