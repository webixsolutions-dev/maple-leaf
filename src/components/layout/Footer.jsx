import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaYoutube,
  FaCanadianMapleLeaf,
} from 'react-icons/fa';
import { CONTACT } from '../data/contactInfo';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
];

const homecareServices = [
  { label: 'Child Care Services', to: '/our-services/child-care' },
  { label: 'Senior & Personal Care', to: '/our-services/senior-personal-care' },
  { label: 'Home Support Services', to: '/our-services' },
  { label: 'Cleaning Services', to: '/our-services/home-cleaning' },
  { label: 'View All Services', to: '/our-services' },
];

const socialLinks = [
  { label: 'Facebook', href: CONTACT.facebook, Icon: FaFacebookF },
  { label: 'Instagram', href: CONTACT.instagram, Icon: FaInstagram },
  { label: 'Pinterest', href: CONTACT.pinterest, Icon: FaPinterest },
  { label: 'YouTube', href: CONTACT.youtube, Icon: FaYoutube },
];

const FooterLogo = () => (
  <div className="flex flex-col items-start">
    <FaCanadianMapleLeaf className="text-[#c72a7a] text-3xl mb-1" />
    <div className="leading-tight">
      <span className="text-xl font-extrabold text-[#1e3a5f]">maple </span>
      <span className="text-xl font-extrabold text-[#c72a7a]">leaf</span>
    </div>
    <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase mt-0.5">
      montessori
    </span>
  </div>
);

const Footer = () => {
  return (
    <footer className="font-montserrat mt-auto">
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Logo */}
            <div>
              <FooterLogo />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#1e3a5f] font-bold text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-[#4a7ab0] hover:text-[#c72a7a] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Homecare Services */}
            <div>
              <h3 className="text-[#1e3a5f] font-bold text-sm mb-4">Homecare Services</h3>
              <ul className="space-y-2.5">
                {homecareServices.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.to}
                      className="text-sm text-[#4a7ab0] hover:text-[#c72a7a] transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-[#1e3a5f] font-bold text-sm mb-4">Contact Info</h3>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-sm text-[#4a7ab0]">
                  <FaPhone className="text-[#c72a7a] shrink-0 text-sm" />
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="hover:text-[#c72a7a] transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#4a7ab0]">
                  <FaEnvelope className="text-[#c72a7a] shrink-0 text-sm" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-[#c72a7a] transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#4a7ab0]">
                  <FaClock className="text-[#c72a7a] shrink-0 text-sm" />
                  {CONTACT.hours}
                </li>
              </ul>

              <div className="flex items-center gap-2.5 mt-5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c72a7a] text-white transition-colors hover:bg-[#b0256e]"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#c72a7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <p>© 2025 Maple Leaf Montessori. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
