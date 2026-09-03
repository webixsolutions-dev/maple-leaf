import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarCheck } from 'react-icons/fa';
import HomeServiceIcon from './HomeServiceIcon';
import { CONTACT } from '../data/contactInfo';
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HelpCTAStrip = ({ variant = 'default' }) => {
  const isPink = variant === 'pink';

  return (
  <motion.section
    {...fadeUp}
    transition={{ duration: 0.6 }}
    className={`rounded-3xl shadow-sm p-5 sm:p-6 ${
      isPink
        ? 'bg-[#fdf0f5] border border-[#f5d5e3]'
        : 'bg-white border border-gray-100'
    }`}
  >
    <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between gap-4 sm:gap-3 lg:gap-5">
      <div className="flex items-start gap-3 sm:gap-4 shrink-0">
        <HomeServiceIcon
          src="/call.svg"
          alt="Phone"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
        />
        <div>
          <h3 className="font-bold text-[#c72a7a] text-sm leading-snug">
            We&apos;re Here to Help
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mt-0.5 sm:mt-1">
            Let us bring trusted care to your home.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <HomeServiceIcon
          src="/call.svg"
          alt="Phone"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
        />
        <a href={`tel:${CONTACT.phoneTel}`} className="font-bold text-gray-900 text-sm whitespace-nowrap hover:text-[#c72a7a] transition-colors">
          {CONTACT.phone}
        </a>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 shrink-0 min-w-0">
        <HomeServiceIcon
          src="/mail.svg"
          alt="Email"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
        />
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-bold text-gray-900 text-sm truncate hover:text-[#c72a7a] transition-colors"
        >
          {CONTACT.email}
        </a>
      </div>

      <div className="shrink-0">
        <Link
          to="/book-tour"
          className="inline-flex items-center gap-2 bg-[#c72a7a] hover:bg-[#b0256e] text-white font-semibold text-sm px-5 sm:px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap"
        >
          <FaCalendarCheck className="text-sm" />
          Book a Free Consultation
        </Link>
      </div>
    </div>
  </motion.section>
  );
};

export default HelpCTAStrip;
