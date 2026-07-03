import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLeaf,
  FaSun
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Top Section - Logo & Description */}
        <div className="mb-12 pb-8 border-b border-pink-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Logo with Image */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img 
                src={logo} 
                alt="Maple Leaf Montessori Logo" 
                className="w-50 h-20 object-contain"
              />
             
            </Link>
            
            <p className="text-sm text-gray-600 max-w-md text-center md:text-left">
              Nurturing young minds through authentic Montessori education in a safe, 
              respectful, and inspiring environment.
            </p>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-pink-700 font-bold text-lg mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-700 transition-colors text-sm text-gray-600">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Programs</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-pink-700 font-bold text-lg mb-4 font-serif">Programs</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/programs/infant" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Infant Program (Phase 4)</Link>
              </li>
              <li>
                <Link to="/programs/toddler" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Toddler Program (2 - 3 Years)</Link>
              </li>
              <li>
                <Link to="/programs/preschool" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Preschool / Casa Program (3 - 6 Years)</Link>
              </li>
              <li>
                <Link to="/programs/after-school" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Before & After School Care</Link>
              </li>
              <li>
                <Link to="/programs/summer" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Summer Programs & Camps</Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-pink-700 font-bold text-lg mb-4 font-serif">Admissions</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/admissions" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Enrollment Process</Link>
              </li>
              <li>
                <Link to="/fees" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Fees & Rates</Link>
              </li>
              <li>
                <Link to="/admissions/policies" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Policies</Link>
              </li>
              <li>
                <Link to="/admissions/forms" className="hover:text-pink-700 transition-colors text-sm text-gray-600">Forms & Documents</Link>
              </li>
              <li>
                <Link to="/admissions/faqs" className="hover:text-pink-700 transition-colors text-sm text-gray-600">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-pink-700 font-bold text-lg mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="text-pink-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">(403) 555-0123</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-pink-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">hello@mapleleafmontessori.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">123 Aspen Hills Drive SW<br />Calgary, AB T3H 0N1</span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-600">Mon - Fri: 7:00 AM - 6:00 PM</span>
                  <br />
                  <span className="text-sm text-gray-400">Closed Weekends & Statutory Holidays</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">Follow Us</span>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-pink-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-pink-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-pink-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110 group"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-pink-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                © 2025 Maple Leaf Montessori |{' '}
                <Link to="/privacy" className="hover:text-pink-700 transition-colors">Privacy Policy</Link>
                {' | '}
                <Link to="/terms" className="hover:text-pink-700 transition-colors">Terms of Use</Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;