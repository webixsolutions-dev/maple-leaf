import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import { CONTACT } from '../data/contactInfo';
import ContactHero from '../contact/Hero';
import ContactForm from '../contact/ContactForm';

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-[#E0115F]',
    title: 'Phone',
    detail: CONTACT.phone,
    href: `tel:${CONTACT.phoneTel}`,
    description: "We're happy to answer your questions.",
  },
  {
    icon: <FaEnvelope />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Email',
    detail: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    description:
      'Send us a message anytime. We typically reply within one business day.',
  },
  {
    icon: <FaClock />,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: 'Hours',
    detail: CONTACT.hours,
    description: "We're here to support your family.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <ContactHero />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 ${card.iconBg} ${card.iconColor} rounded-full flex items-center justify-center text-lg flex-shrink-0`}
              >
                {card.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-base">{card.title}</h4>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-sm font-semibold text-[#0F172A] mt-1 break-words hover:text-[#E0115F] transition-colors block"
                  >
                    {card.detail}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-[#0F172A] mt-1 break-words">
                    {card.detail}
                  </p>
                )}
                <p className="text-sm text-slate-600 leading-relaxed mt-1.5">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
