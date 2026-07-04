import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaCalendarCheck } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      label: 'Programs', 
      dropdown: true,
      items: [
        { path: '/programs/infant', label: 'Infant Program (Phase 4)' },
        { path: '/programs/toddler', label: 'Toddler Program (2-3 Years)' },
        { path: '/programs/preschool', label: 'Preschool / Montessori Casa' },
        { path: '/programs/after-school', label: 'Before & After School Care' },
        { path: '/programs/summer', label: 'Summer Programs & Camps' },
      ]
    },
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
              src={logo} 
              alt="Maple Leaf Montessori Logo" 
              className="h-20 w-60 object-contain sm:h-16 sm:w-auto md:h-20 md:w-auto"
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-[#c72a7a] font-medium transition-colors duration-300 relative group"
                    onMouseEnter={() => setProgramsDropdown(true)}
                    onMouseLeave={() => setProgramsDropdown(false)}
                  >
                    <span>{link.label}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${
                      programsDropdown ? 'rotate-180' : ''
                    }`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c72a7a] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-gray-700 hover:text-[#c72a7a] font-medium transition-colors duration-300 relative group
                      ${isActive ? 'text-[#c72a7a]' : ''}`
                    }
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c72a7a] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                )}

                {/* Programs Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100 transition-all duration-300 ${
                      programsDropdown 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setProgramsDropdown(true)}
                    onMouseLeave={() => setProgramsDropdown(false)}
                  >
                    {link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#c72a7a] transition-colors"
                        onClick={() => setProgramsDropdown(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book a Tour Button - Right */}
          <div className="hidden md:block">
            <Link to="/book-tour">
              <button className="bg-[#c72a7a] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#b0256e] transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <FaCalendarCheck className="text-sm" />
                Book a Tour
              </button>
            </Link>
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
                <div key={index}>
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-[#c72a7a] font-medium transition-colors px-2 py-1.5 rounded-lg hover:bg-pink-50">
                        {link.label}
                        <FaChevronDown className="text-xs group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="pl-4 mt-1 space-y-1">
                        {link.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block text-sm text-gray-600 hover:text-[#c72a7a] hover:bg-pink-50 px-3 py-2 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block text-gray-700 hover:text-[#c72a7a] font-medium transition-colors px-2 py-1.5 rounded-lg hover:bg-pink-50
                        ${isActive ? 'text-[#c72a7a] bg-pink-50' : ''}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <Link to="/book-tour" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-[#c72a7a] text-white px-6 py-2.5 rounded-2xl font-semibold hover:bg-[#b0256e] transition-all mt-2 flex items-center justify-center gap-2">
                  <FaCalendarCheck className="text-sm" />
                  Book a Tour
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;