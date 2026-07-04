import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaBaby,
  FaChild,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaSeedling,
  FaHandPaper,
  FaComments,
  FaArrowRight,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  DATA (content from programs_page documentation)                    */
/* ------------------------------------------------------------------ */

const programs = [
  {
    icon: <FaBaby />,
    title: 'Infant Program',
    subtitle: '(Phase 4)',
    age: '15 months – 24 months',
    description:
      'Nurturing care and early exploration in a calm, responsive environment.',
    iconBg: 'bg-pink-500',
    cardBg: 'bg-pink-50',
    border: 'border-pink-100',
    ageColor: 'text-pink-600',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
  },
  {
    icon: <FaChild />,
    title: 'Toddler Program',
    subtitle: '',
    age: '2 years – 3 years',
    description:
      'Encouraging independence, movement, and curiosity through hands-on learning.',
    iconBg: 'bg-amber-500',
    cardBg: 'bg-amber-50',
    border: 'border-amber-100',
    ageColor: 'text-amber-600',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Preschool / Montessori Casa',
    subtitle: '',
    age: '3 years – 6 years',
    description:
      'Building confidence, critical thinking, and academic readiness in a Montessori environment.',
    iconBg: 'bg-purple-600',
    cardBg: 'bg-purple-50',
    border: 'border-purple-100',
    ageColor: 'text-purple-600',
    image:
      'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=500&q=80',
  },
  {
    icon: <FaBriefcase />,
    title: 'Before & After School Care',
    subtitle: '',
    age: 'Kindergarten – Grade 6',
    description:
      'Safe, engaging care with homework support, play, and enrichment activities.',
    iconBg: 'bg-green-600',
    cardBg: 'bg-green-50',
    border: 'border-green-100',
    ageColor: 'text-green-700',
    image:
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&q=80',
  },
  {
    icon: <FaSun />,
    title: 'Summer Programs & Camps',
    subtitle: '',
    age: 'Ages 2 – 6 years',
    description: 'Fun, themed camps and enrichment programs all summer long!',
    iconBg: 'bg-sky-500',
    cardBg: 'bg-sky-50',
    border: 'border-sky-100',
    ageColor: 'text-sky-600',
    image:
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&q=80',
  },
];

const highlights = [
  {
    icon: <FaSeedling />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    title: 'Montessori-Led Learning',
    description:
      'Authentic Montessori curriculum that fosters independence, focus, and a love of learning.',
  },
  {
    icon: <FaLeaf />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Age-Appropriate Development',
    description:
      "Programs designed to support each child's growth across social, emotional, cognitive, and physical milestones.",
  },
  {
    icon: <FaHandPaper />,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: 'Hands-On Discovery',
    description:
      'Children learn by doing through sensory-rich activities and real world experiences.',
  },
  {
    icon: <FaComments />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Strong Parent Communication',
    description:
      'We partner with families through open, ongoing communication and regular updates.',
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION                                                          */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const ProgramsPage = () => {
  return (
    <div className="font-montserrat bg-white pt-20 pb-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10 md:space-y-12">

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
              <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl" />

              {/* Tagline pill */}
              <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs px-4 py-1.5 rounded-full self-start mb-4">
                <FaHeart className="text-[10px]" />
                Where Curiosity Grows Every Day
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Programs for Every
                <br />
                <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
                  Stage of Early Learning
                  <FaLeaf className="text-green-500 text-2xl lg:text-3xl" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 max-w-md">
                At Maple Leaf Montessori, we offer licensed Montessori-based
                daycare and preschool programs in Calgary for children ages{' '}
                <span className="text-[#c72a7a] font-semibold">
                  15 months to 6 years
                </span>
                . Our safe, structured, and nurturing environment supports
                hands-on learning, independence, and a lifelong love of
                discovery.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to="/book-a-tour"
                  className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <FaCalendarAlt />
                  Book a Tour
                </Link>
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <FaLeaf className="text-xs" />
                  View Admissions
                </Link>
              </div>
            </div>

            {/* ---- Right image ---- */}
            <div className="relative min-h-[240px] md:min-h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80"
                alt="Educator guiding children at Maple Leaf Montessori"
                className="absolute inset-0 w-full h-full object-cover md:rounded-l-[60px]"
              />
              {/* Motto badge */}
              <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
                <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
                <p className="text-sky-600 font-extrabold text-sm">Learn</p>
                <p className="text-green-600 font-extrabold text-sm">Grow</p>
                <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= PROGRAM CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${program.cardBg} ${program.border} border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-4 flex flex-col group`}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-11 h-11 ${program.iconBg} rounded-full flex items-center justify-center text-white text-base flex-shrink-0 shadow-sm`}
                >
                  {program.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug pt-1">
                  {program.title}{' '}
                  {program.subtitle && (
                    <span className="text-[#c72a7a] text-xs font-semibold">
                      {program.subtitle}
                    </span>
                  )}
                </h3>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-3">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Description */}
              <p className="text-[11px] text-gray-600 leading-relaxed flex-1">
                {program.description}
              </p>

              {/* Age badge */}
              <div
                className={`inline-flex items-center gap-1.5 mt-3 text-xs font-bold ${program.ageColor}`}
              >
                <FaClock className="text-[11px]" />
                {program.age}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= OUR PROGRAMS AT A GLANCE ================= */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 sm:p-7">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-3 flex-wrap justify-center">
              <FaSun className="text-amber-400 text-xl" />
              <span>
                Our Programs <span className="text-[#c72a7a]">at a Glance</span>
              </span>
              <FaHeart className="text-pink-400 text-lg" />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-4 flex items-start gap-3"
              >
                <div
                  className={`w-11 h-11 ${item.iconBg} ${item.iconColor} rounded-full flex items-center justify-center text-lg flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xs leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-pink-50 border border-pink-100 rounded-2xl px-5 sm:px-8 py-7"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex items-center gap-4 flex-shrink-0">
              <FaLeaf className="text-[#e0115f] text-3xl -rotate-45" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
                Ready to Find the Right Program for{' '}
                <span className="text-[#e0115f]">Your Child?</span>
              </h3>
            </div>

            <p className="flex-1 text-xs md:text-sm text-gray-700 leading-relaxed text-center lg:text-left lg:border-l lg:border-pink-200 lg:pl-6">
              We&apos;d love to show you around! Book a tour to meet our
              educators, explore our classrooms, and find the perfect fit for
              your family.
            </p>

            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                to="/book-a-tour"
                className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <FaCalendarAlt />
                Book a Tour
                <FaArrowRight className="text-xs" />
              </Link>
              <FaSun className="text-amber-400 text-2xl hidden sm:block" />
              <FaLeaf className="text-green-500 text-xl hidden sm:block" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProgramsPage;
