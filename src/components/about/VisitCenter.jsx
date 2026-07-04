import { motion } from 'framer-motion';
import { centreInfoLeft, centreInfoRight, fadeUp } from './../pages/About';
import { FaLeaf } from 'react-icons/fa';

const VisitCentre = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[220px] lg:min-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=900&q=80"
            alt="Maple Leaf Montessori classroom in Calgary"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
            <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
            <p className="text-sky-600 font-extrabold text-sm">Learn</p>
            <p className="text-green-600 font-extrabold text-sm">Grow</p>
            <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 inline-flex items-center gap-2 mb-5">
            Visit Our <span className="text-[#c72a7a]">Calgary Centre</span>
            <FaLeaf className="text-green-500 text-base" />
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 sm:divide-x sm:divide-dotted sm:divide-gray-200">
            <div className="space-y-4">
              {centreInfoLeft.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className={`${info.iconColor} text-lg flex-shrink-0 mt-0.5`}>
                    {info.icon}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 text-xs">{info.title}</p>
                    {info.subtitle && (
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                        {info.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 sm:pl-8">
              {centreInfoRight.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className={`${info.iconColor} text-lg flex-shrink-0 mt-0.5`}>
                    {info.icon}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 text-xs">{info.title}</p>
                    {info.subtitle && (
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                        {info.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitCentre;