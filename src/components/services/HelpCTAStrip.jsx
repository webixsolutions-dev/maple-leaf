import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HelpCTAStrip = () => (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 sm:p-6"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-center">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-[#c72a7a]">
          <FaPhoneAlt className="text-lg" />
        </div>
        <div>
          <h3 className="font-bold text-[#c72a7a] text-sm leading-snug">
            We&apos;re Here to Help
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mt-1">
            Let us bring trusted care to your home.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-[#c72a7a]">
          <FaPhoneAlt className="text-lg" />
        </div>
        <a href="tel:+14035421610" className="font-bold text-gray-900 text-sm hover:text-[#c72a7a] transition-colors">
          (403) 542-1610
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-[#c72a7a]">
          <FaEnvelope className="text-lg" />
        </div>
        <a
          href="mailto:Mapleleafmontessori11@gmail.com"
          className="font-bold text-gray-900 text-sm break-all hover:text-[#c72a7a] transition-colors"
        >
          Mapleleafmontessori11@gmail.com
        </a>
      </div>

      <div className="flex justify-start xl:justify-end">
        <Link
          to="/book-tour"
          className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <FaCalendarCheck className="text-sm" />
          Book a Free Consultation
        </Link>
      </div>
    </div>
  </motion.section>
);

export default HelpCTAStrip;
