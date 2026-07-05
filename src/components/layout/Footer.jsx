import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
];

const programs = [
  { label: 'Infant Program', to: '/programs/infant' },
  { label: 'Toddler Program', to: '/programs/toddler' },
  { label: 'Preschool / Casa', to: '/programs/preschool' },
  { label: 'Before & After School Care', to: '/programs/after-school' },
  { label: 'Summer Programs', to: '/programs/summer' },
];

const admissions = [
  { label: 'Book a Tour', to: '/book-tour' },
  { label: 'Enrollment Process', to: '/admissions' },
  { label: 'Fees & Information', to: '/fees' },
  { label: 'Parent Resources', to: '/admissions/resources' },
  { label: 'FAQs', to: '/admissions/faqs' },
];

const Footer = () => {
  return (
    <footer>
      {/* Top section */}
      <div className=" bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-start">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1 flex items-center gap-2">
              <img
                src={logo}
                alt="Maple Leaf Montessori"
                className="w-80 h-50 "
              />
             
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-gray-600 hover:text-[#c72a7a] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-3">Programs</h3>
              <ul className="space-y-2">
                {programs.map((p) => (
                  <li key={p.label}>
                    <Link to={p.to} className="text-sm text-gray-600 hover:text-[#c72a7a] transition-colors">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm mb-3">Admissions</h3>
              <ul className="space-y-2">
                {admissions.map((a) => (
                  <li key={a.label}>
                    <Link to={a.to} className="text-sm text-gray-600 hover:text-[#c72a7a] transition-colors">
                      {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-gray-900 font-bold text-sm mb-3">Contact Info</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-[#c72a7a] mt-0.5 shrink-0" />
                  <span>
                    1234 Maple Leaf Lane SW
                    <br />
                    Calgary, Alberta&nbsp;&nbsp;T2P 2M5
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <FaPhone className="text-[#c72a7a] shrink-0" />
                  (403) 555-0123
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <FaEnvelope className="text-[#c72a7a] shrink-0" />
                  hello@mapleleafmontessori.ca
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="text-[#c72a7a] shrink-0" />
                  Mon – Fri: 7:00 AM – 6:00 PM
                </li>
              </ul>
            </div>

            {/* Book a Tour button */}
            <div className="col-span-2 md:col-span-1 flex md:justify-end">
              <Link to="/book-tour">
                <button className="flex items-center gap-2 bg-[#c72a7a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#b0256e] transition-colors shadow-sm whitespace-nowrap">
                  <FaRegCalendarAlt className="text-sm" />
                  Book a Tour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#c72a7a] text-white/90">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <p>© 2025 Maple Leaf Montessori. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
