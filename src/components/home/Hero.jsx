import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaHome,
  FaShieldAlt,
  FaGraduationCap,
  FaUsers,
  FaComments,
  FaHandPaper,
  FaTree,
  FaBaby,
  FaChild,
  FaChalkboardTeacher,
  FaDesktop,
  FaCouch,
  FaCalendarAlt,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const infoCards = [
  {
    icon: <FaShieldAlt />,
    title: 'Licensed Facility',
    description:
      "Fully licensed and regulated to ensure your child's safety and well-being.",
    iconBg: 'bg-pink-500',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Montessori-Led Learning',
    description:
      "Certified Montessori educators guiding each child's natural curiosity and growth.",
    iconBg: 'bg-green-600',
  },
  {
    icon: <FaUsers />,
    title: 'Safe Supervision & Ratio Compliance',
    description: 'Strict staff-to-child ratios and daily safety protocols you can trust.',
    iconBg: 'bg-blue-500',
  },
  {
    icon: <FaComments />,
    title: 'Parent Communication',
    description:
      'Open, transparent communication and daily updates that keep you connected.',
    iconBg: 'bg-orange-500',
  },
  {
    icon: <FaHandPaper />,
    title: 'Hands-On Activities',
    description:
      'Practical life, sensory, and academic activities that build confidence and skills.',
    iconBg: 'bg-lime-600',
  },
  {
    icon: <FaTree />,
    title: 'Calm & Nurturing Classrooms',
    description:
      'Peaceful, thoughtfully designed spaces that support focus, comfort, and joy.',
    iconBg: 'bg-purple-600',
  },
];

const rooms = [
  {
    icon: <FaBaby />,
    name: 'INFANT ROOM',
    detail: '8 Spaces',
    bg: 'bg-amber-100',
    border: 'border-amber-300',
    text: 'text-amber-900',
    area: 'infant',
  },
  {
    icon: <FaChild />,
    name: 'TODDLER ROOM',
    detail: '12 Spaces',
    bg: 'bg-orange-200',
    border: 'border-orange-300',
    text: 'text-orange-900',
    area: 'toddler',
  },
  {
    icon: <FaDesktop />,
    name: 'COMMON AREAS',
    detail: 'Office / Play Space / etc.',
    bg: 'bg-sky-200',
    border: 'border-sky-300',
    text: 'text-sky-900',
    area: 'common',
  },
  {
    icon: <FaChalkboardTeacher />,
    name: 'PRESCHOOL ROOM',
    detail: '20 Spaces',
    bg: 'bg-green-200',
    border: 'border-green-300',
    text: 'text-green-900',
    area: 'preschool',
  },
  {
    icon: <FaCouch />,
    name: 'NEW INFANT ROOM',
    detail: '8 Spaces (Phase 4)',
    bg: 'bg-yellow-100',
    border: 'border-yellow-300',
    text: 'text-yellow-900',
    area: 'newinfant',
  },
];

/* ------------------------------------------------------------------ */
/*  BANNERS                                                            */
/* ------------------------------------------------------------------ */

const HomecareButton = ({ className = '' }) => (
  <Link
    to="/our-services"
    className={`inline-flex items-center gap-2 bg-[#008f4c] hover:bg-[#007a42] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0 ${className}`}
  >
    <FaHome className="text-sm" />
    Avail Homecare Services
  </Link>
);

const TopAnnouncementBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#fef9ee] border border-amber-100 rounded-2xl px-4 sm:px-6 py-3.5"
  >
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5">
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
        <FaSun className="text-amber-400 text-xl sm:text-2xl flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
          <span className="font-bold text-[#5c3d2e]">
            Daycare Opening Soon in Calgary!
          </span>{' '}
          Our licensed Montessori daycare is preparing to open. In the meantime,
          Homecare Services are available now to support your family.
        </p>
      </div>
      <HomecareButton />
    </div>
  </motion.div>
);

const BottomHomecareBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    className="bg-green-50 border border-green-200 rounded-2xl px-4 sm:px-6 py-4 sm:py-5"
  >
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#008f4c] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
          <FaHome className="text-white text-base sm:text-lg" />
        </div>
        <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
          <span className="font-bold text-[#1a5c34]">
            Homecare Services Available Now!
          </span>{' '}
          While our daycare prepares to open, our Homecare Services are here to
          support your child&apos;s growth and well-being at home.
        </p>
      </div>
      <HomecareButton />
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const Hero = () => {
  return (
    <section className="font-montserrat relative overflow-hidden bg-white pt-24 md:pt-28 pb-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-12 md:space-y-12">

        {/* ================= HERO BLOCK (banners + hero card) ================= */}
        <div className="space-y-4">

        {/* ================= TOP ANNOUNCEMENT BANNER ================= */}
        <TopAnnouncementBanner />

        {/* ================= HERO BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-pink-50"
        >
          <div className="grid md:grid-cols-2 items-stretch">

            {/* ---- Left content ---- */}
            <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Decorative sun near heading */}
              <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl" />

              {/* Tagline pill */}
              <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs uppercase tracking-wide px-4 py-1.5 rounded-full self-start mb-4">
                <FaHeart className="text-[10px]" />
                Where Curiosity Grows Every Day
              </div>

              {/* Heading */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Maple Leaf Montessori
                <br />
                <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
                  Daycare Opening Soon
                  <FaLeaf className="text-green-500 text-2xl lg:text-3xl" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 max-w-md">
                Our licensed Montessori daycare is preparing to welcome families
                in Calgary. In the meantime, you can access our trusted{' '}
                <span className="text-[#e0115f] font-semibold">
                  Homecare Services
                </span>{' '}
                for compassionate, dependable in-home support.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Link
                  to="/our-services"
                  className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <FaHome className="text-sm" />
                  Explore Homecare Services
                </Link>
                <Link
                  to="/book-tour"
                  className="inline-flex items-center gap-2.5 bg-white border-2 border-[#e0115f] text-[#e0115f] hover:bg-pink-50 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all"
                >
                  <FaCalendarAlt className="text-base flex-shrink-0" />
                  <span className="leading-tight">
                    <span className="block font-bold">Book a Tour</span>
                    <span className="block text-[10px] font-normal opacity-80">
                      Be the first to know
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* ---- Right image ---- */}
            <div className="relative min-h-[240px] md:min-h-[320px]">
              <img
                src="/heroupdated.webp"
                alt="Montessori classroom at Maple Leaf Montessori"
                className="absolute inset-0 w-full h-full object-cover md:rounded-l-[60px]"
              />
              {/* Motto badge on image */}
              <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
                <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
                <p className="text-sky-600 font-extrabold text-sm">Learn</p>
                <p className="text-green-600 font-extrabold text-sm">Grow</p>
                <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= BOTTOM HOMECARE BANNER ================= */}
        <BottomHomecareBanner />

        </div>

        {/* ================= WHY FAMILIES CHOOSE US ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" rounded-3xl p-5 sm:p-7"
        >
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 inline-flex items-center gap-2 mb-6">
            Why Families Choose Us
            <FaHeart className="text-purple-400 text-lg" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-4"
              >
                <div className="flex items-start gap-3">
                  {/* Colored circle icon */}
                  <div
                    className={`w-10 h-10 ${card.iconBg} rounded-full flex items-center justify-center text-white text-base flex-shrink-0 shadow-sm`}
                  >
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs leading-snug pt-1">
                    {card.title}
                  </h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-2.5">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= OUR LEARNING ENVIRONMENT ================= */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-center">

          {/* ---- Left text ---- */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 leading-tight">
              Our Learning
              <br className="hidden lg:block" /> Environment
              <FaLeaf className="text-green-500 text-xl" />
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Our classrooms and common areas are designed to inspire
              independence, creativity, and a love of learning in every child.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 mt-5 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              <FaLeaf className="text-xs" />
              Explore Programs
            </Link>
          </motion.div>

          {/* ---- Right floor plan ---- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border-4 border-gray-400 rounded-2xl overflow-hidden bg-white shadow-lg"
          >
            {/* Floor-plan grid:
                mobile  -> stacked
                md+     -> 3 columns: [infant/toddler] [common] [preschool/newinfant] */}
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Column 1 — Infant + Toddler */}
              <div className="grid grid-rows-2 border-b md:border-b-0 md:border-r-2 border-gray-300">
                {[rooms[0], rooms[1]].map((room, i) => (
                  <div
                    key={i}
                    className={`${room.bg} ${i === 0 ? 'border-b-2 border-gray-300' : ''} p-4 md:p-5 flex flex-col items-center justify-center text-center gap-1.5 min-h-[110px]`}
                  >
                    <div className={`text-2xl ${room.text}`}>{room.icon}</div>
                    <p className={`font-extrabold text-sm ${room.text}`}>
                      {room.name}
                    </p>
                    <p className={`text-xs ${room.text} opacity-80`}>
                      {room.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 2 — Common Areas (full height) */}
              <div
                className={`${rooms[2].bg} border-b md:border-b-0 md:border-r-2 border-gray-300 p-4 md:p-5 flex flex-col items-center justify-center text-center gap-2 min-h-[140px]`}
              >
                <div className={`text-3xl ${rooms[2].text}`}>{rooms[2].icon}</div>
                <p className={`font-extrabold text-base ${rooms[2].text}`}>
                  {rooms[2].name}
                </p>
                <p className={`text-xs ${rooms[2].text} opacity-80`}>
                  {rooms[2].detail}
                </p>
              </div>

              {/* Column 3 — Preschool + New Infant */}
              <div className="grid grid-rows-2">
                {[rooms[3], rooms[4]].map((room, i) => (
                  <div
                    key={i}
                    className={`${room.bg} ${i === 0 ? 'border-b-2 border-gray-300' : ''} p-4 md:p-5 flex flex-col items-center justify-center text-center gap-1.5 min-h-[110px]`}
                  >
                    <div className={`text-2xl ${room.text}`}>{room.icon}</div>
                    <p className={`font-extrabold text-sm ${room.text}`}>
                      {room.name}
                    </p>
                    <p className={`text-xs ${room.text} opacity-80`}>
                      {room.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
