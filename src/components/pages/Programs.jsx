import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSun, FaHeart, FaLeaf, FaHome, FaComments, FaArrowRight } from 'react-icons/fa';

/* Decorative SVG Components for 100% Pixel-Perfect Match */

const HeartDoodle = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 14L37 4" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 10L50 2" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M60 14L63 4" stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
    <path
      d="M50 85C50 85 15 60 15 35C15 22 25 15 37 15C44 15 48 19 50 23C52 19 56 15 63 15C75 15 85 22 85 35C85 60 50 85 50 85Z"
      stroke="#E0115F"
      strokeWidth="5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const BotanicalLeaves = ({ className = "w-24 h-28" }) => (
  <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 110 C35 70 50 40 70 10" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M35 80 C20 70 10 50 25 45 C35 45 42 60 38 75 Z" fill="#6EE7B7" opacity="0.85" />
    <path d="M48 55 C35 40 30 20 45 20 C55 25 55 45 48 55 Z" fill="#34D399" opacity="0.9" />
    <path d="M28 102 C15 95 10 80 20 75 C30 75 32 88 28 102 Z" fill="#FDE047" opacity="0.9" />
  </svg>
);

const WatercolorBadge = ({ lines, textColor = "text-emerald-600", rotate = "-rotate-3" }) => (
  <div className={`relative inline-block px-6 py-5 text-center transform ${rotate} transition-transform hover:scale-105 duration-300`}>
    <svg className="absolute inset-0 w-full h-full text-pink-200/90 -z-10 filter drop-shadow-xs" viewBox="0 0 180 110" preserveAspectRatio="none">
      <path d="M12,25 C35,8 80,4 130,12 C172,20 182,38 176,68 C170,96 135,108 85,104 C35,100 8,86 4,58 C0,30 12,25 12,25 Z" fill="currentColor" />
    </svg>
    <div className={`font-sans font-bold text-sm sm:text-base leading-tight tracking-wide ${textColor}`}>
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  </div>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const ProgramsPage = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ================= ANNOUNCEMENT BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FEFCE8] border border-[#FDE68A] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs text-slate-700"
        >
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FEF08A] flex items-center justify-center text-amber-500">
            <FaSun className="text-xl" />
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-bold text-slate-900">Daycare Opening Soon in Calgary!</span>{' '}
            Our licensed Montessori daycare is preparing to open. In the meantime, Homecare Services are available now to support your family.
          </p>
        </motion.div>

        {/* ================= SECTION 1: HERO CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 relative z-10 flex flex-col items-start">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 bg-[#FCE7F3] text-[#E0115F] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-pink-200/60 shadow-xs mb-4">
                <FaHeart className="text-[#E0115F] text-xs" />
                <span>Where children learn, grow, and thrive</span>
              </div>

              {/* Sun Icon */}
              <FaSun className="text-amber-400 text-3xl sm:text-4xl absolute top-0 right-4 hidden sm:block pointer-events-none" />

              {/* Main Heading H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-none flex items-center gap-3 flex-wrap mt-2">
                <span>Programs</span>
                <FaLeaf className="text-emerald-500 text-3xl sm:text-4xl -rotate-12 inline-block" />
              </h1>

              {/* Subheading H2 */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E0115F] leading-snug mt-3">
                Maple Leaf Montessori Daycare Coming Soon in Calgary
              </h2>

              {/* Body Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-5 max-w-xl">
                Our Montessori daycare programs are currently being prepared, and we will share full program details soon. In the meantime, our{' '}
                <Link to="/our-services" className="text-[#E0115F] font-semibold underline underline-offset-2 hover:text-[#C72A7A] transition-colors">
                  Homecare Services
                </Link>{' '}
                are available now for children, seniors, individuals, and households across Calgary.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
                <Link
                  to="/our-services"
                  className="bg-[#E0115F] hover:bg-[#C72A7A] text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <FaHome className="text-lg" />
                  <span>Explore Homecare Services</span>
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-pink-50 border-2 border-[#E0115F] text-[#E0115F] px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-xs w-full sm:w-auto"
                >
                  <FaComments className="text-lg" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white">
                <img
                  src="/heroprogram.webp"
                  alt="Maple Leaf Montessori Daycare Coming Soon"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= SECTION 2: PROGRAMS INFORMATION COMING SOON ================= */}
        <motion.div
          {...fadeUp}
          className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xs text-center"
        >
          {/* Top Left Decorative Heart & Rays */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 hidden sm:block">
            <HeartDoodle className="w-12 h-12" />
          </div>

          {/* Bottom Left Botanical Leaves */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 hidden sm:block pointer-events-none">
            <BotanicalLeaves className="w-20 h-24 sm:w-28 sm:h-32" />
          </div>

          {/* Right Brush Stroke Watercolor Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 hidden md:block pointer-events-none">
            <WatercolorBadge
              lines={["Bright", "Learners", "Brighter", "Tomorrows", "♡"]}
              textColor="text-emerald-600"
              rotate="rotate-6"
            />
          </div>

          {/* Center Content */}
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
                Programs Information
              </h2>
              <FaLeaf className="text-emerald-500 text-3xl sm:text-4xl -rotate-12 inline-block" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E0115F] mt-1">
              Coming Soon
            </h3>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              We are preparing our Maple Leaf Montessori daycare programs and will share full program details soon. Until then, families can explore our currently available Homecare Services.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/our-services"
                className="bg-[#E0115F] hover:bg-[#C72A7A] text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
              >
                <FaHome className="text-xl" />
                <span>Explore Homecare Services</span>
                <FaArrowRight className="text-base" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ================= SECTION 3: SPLIT COMPARISON BANNER ================= */}
        <motion.div
          {...fadeUp}
          className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-xs"
        >
          {/* Vertical Divider Line for desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px bg-pink-200/80"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 relative z-10">
            
            {/* Left Column: Daycare Coming Soon */}
            <div className="flex flex-col justify-between items-start relative pr-0 md:pr-4">
              <div>
                <span className="text-[#E0115F] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
                  SAME CARE. BRIGHTER TOMORROWS.
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight">
                  Maple Leaf Montessori Daycare <span className="text-[#E0115F]">Coming Soon</span>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed mt-4 max-w-md">
                  Our licensed Montessori daycare in Calgary is on the way, and we can't wait to welcome families soon.
                </p>
              </div>

              {/* Heart doodle top right of left column */}
              <div className="absolute top-0 right-0 hidden sm:block">
                <HeartDoodle className="w-10 h-10" />
              </div>

              {/* Grow Learn Belong badge at bottom */}
              <div className="mt-8">
                <WatercolorBadge
                  lines={["Grow", "Learn", "Belong", "♡"]}
                  textColor="text-emerald-600"
                  rotate="-rotate-3"
                />
              </div>
            </div>

            {/* Right Column: Homecare Services Available Now */}
            <div className="flex flex-col justify-between items-start relative pl-0 md:pl-4">
              {/* Sun icon top right of right column */}
              <div className="absolute top-0 right-0">
                <FaSun className="text-amber-400 text-3xl sm:text-4xl" />
              </div>

              <div>
                <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
                  SUPPORTING FAMILIES TODAY.
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight flex items-center gap-2 flex-wrap">
                  <span>Homecare Services Available Now</span>
                  <FaHome className="text-emerald-500 text-2xl sm:text-3xl inline-block" />
                </h2>

                <p className="text-slate-600 text-base leading-relaxed mt-4 max-w-md">
                  While our daycare programs are being prepared, our Homecare Services are available now for children, seniors, individuals, and households across Calgary.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between w-full">
                <Link
                  to="/our-services"
                  className="bg-[#00A859] hover:bg-[#00924D] text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
                >
                  <FaHome className="text-lg" />
                  <span>Explore Homecare Services</span>
                  <FaArrowRight className="text-sm" />
                </Link>

                {/* Botanical leaves bottom right */}
                <div className="hidden sm:block pointer-events-none">
                  <BotanicalLeaves className="w-16 h-20" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProgramsPage;
