import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useBrandingLogo } from '../data/branding';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logoSrc: currentLogo, logoAlt: currentLogoAlt } = useBrandingLogo();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-services', label: 'Our Services' },
    { path: '/programs', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={currentLogo} 
              alt={currentLogoAlt} 
              className="h-16 w-auto max-w-[180px] object-contain object-left sm:h-16 sm:w-auto sm:max-w-none md:h-20 md:w-auto"
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-[#c72a7a] font-medium transition-colors duration-300 relative group
                  ${isActive ? 'text-[#c72a7a]' : ''}`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c72a7a] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button - Pink Color */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#c72a7a] hover:text-[#b0256e] transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-gray-700 hover:text-[#c72a7a] font-medium transition-colors px-2 py-1.5 rounded-lg hover:bg-pink-50
                    ${isActive ? 'text-[#c72a7a] bg-pink-50' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
