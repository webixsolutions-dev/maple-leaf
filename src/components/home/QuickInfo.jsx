import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaChair,
  FaShapes,
  FaTree,
  FaBriefcase,
  FaArrowRight,
  FaLeaf,
  FaSun,
  FaBookOpen,
  FaUtensils,
  FaHeart,
  FaHandHoldingHeart,
  FaBook,
  FaFlask,
  FaMusic,
  FaUsers,
  FaRunning,
  FaCalendarAlt,
  FaCanadianMapleLeaf,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const programs = [
  {
    icon: <FaChair />,
    title: 'Infant Program',
    description:
      "Nurturing care and gentle routines for your baby's early development.",
    iconBg: 'bg-amber-500',
    cardBg: 'bg-amber-50',
    border: 'border-amber-100',
    linkColor: 'text-amber-500 hover:text-amber-600',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
  },
  {
    icon: <FaShapes />,
    title: 'Toddler Program',
    description:
      'Hands-on exploration, independence, and social skills for growing toddlers.',
    iconBg: 'bg-green-600',
    cardBg: 'bg-green-50',
    border: 'border-green-100',
    linkColor: 'text-green-600 hover:text-green-700',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&q=80',
  },
  {
    icon: <FaTree />,
    title: 'Preschool / Montessori Casa',
    description: 'Prepared environment for confident learners ready for the future.',
    iconBg: 'bg-purple-600',
    cardBg: 'bg-purple-50',
    border: 'border-purple-100',
    linkColor: 'text-purple-600 hover:text-purple-700',
    image:
      'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=400&q=80',
  },
  {
    icon: <FaBriefcase />,
    title: 'Before & After School Care',
    description:
      'Safe, supportive care with homework help and fun enrichment activities.',
    iconBg: 'bg-blue-500',
    cardBg: 'bg-blue-50',
    border: 'border-blue-100',
    linkColor: 'text-blue-500 hover:text-blue-600',
    image:
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&q=80',
  },
  {
    icon: <FaSun />,
    title: 'Summer Programs & Camps',
    description:
      'Engaging themes, outdoor adventures, and hands-on learning all summer long!',
    iconBg: 'bg-teal-500',
    cardBg: 'bg-teal-50',
    border: 'border-teal-100',
    linkColor: 'text-teal-500 hover:text-teal-600',
    image:
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&q=80',
  },
];

const schedule = [
  {
    icon: <FaSun />,
    iconBg: 'bg-pink-500',
    time: '7:00 – 9:00 AM',
    timeColor: 'text-pink-500',
    title: 'Arrival, Free Play, Breakfast',
    description:
      'Warm greetings, free play and connections, followed by a healthy breakfast.',
  },
  {
    icon: <FaBookOpen />,
    iconBg: 'bg-amber-500',
    time: '9:00 – 11:00 AM',
    timeColor: 'text-amber-500',
    title: 'Montessori Programming, Outdoor Time',
    description:
      'Hands-on learning in prepared environments and time to play outside.',
  },
  {
    icon: <FaUtensils />,
    iconBg: 'bg-lime-600',
    time: '11:00 – 1:00 PM',
    timeColor: 'text-lime-600',
    title: 'Lunch, Rest / Nap Periods',
    description: 'Nutritious lunch and rest time to recharge bodies and minds.',
  },
  {
    icon: <FaLeaf />,
    iconBg: 'bg-sky-500',
    time: '1:00 – 3:30 PM',
    timeColor: 'text-sky-500',
    title: 'Afternoon Programming, Snack, Outdoor Rotation',
    description:
      'Engaging activities, healthy snack, and outdoor play or movement.',
  },
  {
    icon: <FaHeart />,
    iconBg: 'bg-purple-500',
    time: '3:30 – 6:00 PM',
    timeColor: 'text-purple-500',
    title: 'Parent Pickup, Wind-Down Activities',
    description:
      'Calm activities, daily recap, and secure hand-off to families.',
  },
];

const experiences = [
  { icon: <FaHandHoldingHeart className="text-pink-500" />, label: 'Practical Life Skills' },
  { icon: <FaBook className="text-amber-500" />, label: 'Early Literacy & Language' },
  { icon: <span className="font-bold text-lime-600 text-2xl tracking-wide">123</span>, label: 'Mathematics' },
  { icon: <FaFlask className="text-sky-500" />, label: 'Science & STEM' },
  { icon: <FaMusic className="text-purple-500" />, label: 'Creative Arts & Music' },
  { icon: <FaUsers className="text-pink-500" />, label: 'Social & Emotional Growth' },
  { icon: <FaRunning className="text-teal-500" />, label: 'Fine & Gross Motor Skills' },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const Programs = () => {
  return (
    <section className="py-14 md:py-16 bg-white font-montserrat">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* ============ HEADING ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-flex items-center justify-center gap-2 flex-wrap">
            <span>
              Programs for <span className="text-[#c72a7a]">Every Stage</span>
            </span>
            <FaLeaf className="text-green-500 text-xl md:text-2xl" />
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Nurturing growth, confidence, and curiosity at every age.
          </p>
        </motion.div>

        {/* ============ PROGRAM CARDS ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 mb-16 md:mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border ${program.border} ${program.cardBg} shadow-sm hover:shadow-lg transition-all duration-300 group flex min-h-[190px]`}
            >
              {/* Left content */}
              <div className="relative z-10 p-4 flex flex-col w-[62%]">
                <div
                  className={`w-11 h-11 ${program.iconBg} rounded-full flex items-center justify-center text-white text-lg shadow-md mb-3`}
                >
                  {program.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
                  {program.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-600 flex-1">
                  {program.description}
                </p>
                <Link
                  to="/programs"
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold mt-3 ${program.linkColor} transition-colors`}
                >
                  Learn More
                  <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right image */}
              <div className="absolute right-0 top-0 h-full w-[45%]">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_35%)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ A DAY AT — TIMELINE ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            A Day at <span className="text-[#c72a7a]">Maple Leaf Montessori</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            A predictable routine that provides structure, balance, and joyful learning.
          </p>
        </motion.div>

        <div className="relative mb-16 md:mb-20">
          {/* Dotted connector line — desktop only */}
          <div className="hidden xl:block absolute top-[26px] left-[10%] right-[10%] border-t-2 border-dotted border-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-5">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle icon */}
                <div
                  className={`relative z-10 w-[52px] h-[52px] ${item.iconBg} rounded-full flex items-center justify-center text-white text-xl shadow-md mb-4 ring-4 ring-white`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 w-full flex-1">
                  <p className={`text-xs font-bold ${item.timeColor} mb-1`}>
                    {item.time}
                  </p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============ WHAT CHILDREN EXPERIENCE ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-flex items-center justify-center gap-2 flex-wrap">
            <span>
              What Children <span className="text-[#c72a7a]">Experience</span>
            </span>
            <FaSun className="text-amber-400 text-xl md:text-2xl" />
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            A holistic approach that builds the foundation for lifelong success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-4 mb-16 md:mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-100 transition-all p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[120px]"
            >
              <div className="text-3xl flex items-center justify-center h-9">
                {exp.icon}
              </div>
              <p className="text-xs font-bold text-gray-900 leading-snug">
                {exp.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ============ CTA BANNER ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-pink-50 rounded-2xl px-5 sm:px-8 py-7 md:py-8"
        >
          {/* Decorative heart / leaf shape (right side) */}
          <FaHeart className="hidden md:block absolute -right-6 -bottom-8 text-pink-100 text-[160px] rotate-12 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-6">
            {/* Maple leaf icon */}
            <FaCanadianMapleLeaf className="text-[#c72a7a] text-5xl flex-shrink-0" />

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900">
                Explore our programs and plan your child&apos;s{' '}
                <span className="text-[#c72a7a]">next step.</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                We&apos;d love to welcome you for a tour and answer your questions.
              </p>
            </div>

            {/* Button */}
            <Link
              to="/book-a-tour"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <FaCalendarAlt />
              Book a Tour
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Programs;
