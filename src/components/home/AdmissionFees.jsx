import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaBaby,
  FaChild,
  FaUserGraduate,
  FaCalendarCheck,
  FaSchool,
  FaFileAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const enrollmentSteps = [
  {
    icon: <FaCalendarCheck />,
    step: '1',
    stepBg: 'bg-pink-500',
    iconColor: 'text-pink-500',
    title: 'Book a Tour',
    description: 'Choose a time that works for you.',
  },
  {
    icon: <FaSchool />,
    step: '2',
    stepBg: 'bg-green-600',
    iconColor: 'text-green-600',
    title: 'Visit the Centre',
    description: 'Tour our classrooms and meet our educators.',
  },
  {
    icon: <FaFileAlt />,
    step: '3',
    stepBg: 'bg-purple-600',
    iconColor: 'text-purple-600',
    title: 'Submit Your Application',
    description: 'Complete the application and required forms.',
  },
  {
    icon: <FaCalendarAlt />,
    step: '4',
    stepBg: 'bg-sky-500',
    iconColor: 'text-sky-500',
    title: 'Confirm Start Date',
    description: "We'll confirm your child's start date.",
  },
];

const fullTimeRates = [
  {
    icon: <FaBaby />,
    title: 'Infant',
    age: '(0–18 Months)',
    price: '$1,200 – $1,400',
    cardBg: 'bg-pink-50',
    border: 'border-pink-100',
    iconBg: 'bg-pink-500',
    priceColor: 'text-pink-600',
  },
  {
    icon: <FaChild />,
    title: 'Toddler',
    age: '(18 Months–3 Years)',
    price: '$1,000 – $1,200',
    cardBg: 'bg-green-50',
    border: 'border-green-100',
    iconBg: 'bg-green-600',
    priceColor: 'text-green-700',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Preschool',
    age: '(3–6 Years)',
    price: '$950 – $1,100',
    cardBg: 'bg-purple-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-600',
    priceColor: 'text-purple-700',
  },
];

const partTimeRates = [
  {
    icon: <FaCalendarAlt />,
    title: '3 Days / Week',
    price: '$750 – $850',
    cardBg: 'bg-sky-50',
    border: 'border-sky-100',
    iconColor: 'text-sky-500',
    priceColor: 'text-sky-700',
  },
  {
    icon: <FaCalendarAlt />,
    title: '4 Days / Week',
    price: '$850 – $950',
    cardBg: 'bg-amber-50',
    border: 'border-amber-100',
    iconColor: 'text-amber-500',
    priceColor: 'text-amber-600',
  },
];

const testimonials = [
  {
    quote:
      'Maple Leaf Montessori feels like an extension of our family. The educators are kind, the environment is beautiful, and our daughter loves going every day!',
    name: '– Sarah M., Calgary',
    accent: <FaHeart className="text-pink-200 text-lg" />,
  },
  {
    quote:
      'The individualized attention and Montessori approach have helped our son become more confident and independent. Highly recommend!',
    name: '– Jason T., Calgary',
    accent: <FaLeaf className="text-green-300 text-lg" />,
  },
  {
    quote:
      'We love the outdoor time, healthy meals, and the daily communication with parents. Peace of mind knowing our child is in great hands.',
    name: '– Priya K., Calgary',
    accent: <FaHeart className="text-pink-200 text-lg" />,
  },
];

const centreInfo = [
  {
    icon: <FaMapMarkerAlt />,
    iconColor: 'text-sky-500',
    title: 'Calgary, Alberta',
    subtitle: null,
  },
  {
    icon: <FaClock />,
    iconColor: 'text-purple-500',
    title: 'Monday – Friday',
    subtitle: '7:00 AM – 6:00 PM',
  },
  {
    icon: <FaShieldAlt />,
    iconColor: 'text-green-600',
    title: 'Licensed Montessori Daycare',
    subtitle: 'A safe, nurturing, and inspiring place to learn and grow.',
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

const AdmissionsFees = () => {
  return (
    <section className="font-montserrat bg-white py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">

        {/* ============ TOP: HEADING + PROCESS  |  RATES ============ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* ---------- LEFT COLUMN ---------- */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            {/* Heading */}
            <div className="flex items-start gap-4">
              <FaSun className="text-amber-400 text-4xl mt-1 flex-shrink-0 hidden sm:block" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-flex items-center gap-2 flex-wrap">
                  Admissions &amp; Fees
                  <FaLeaf className="text-green-500 text-xl md:text-2xl" />
                </h2>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  A simple enrollment process, transparent pricing, and support
                  for Alberta families.
                </p>
              </div>
            </div>

            {/* Enrollment process */}
            <h3 className="text-base md:text-lg font-extrabold text-gray-900 mt-8 mb-5">
              Our Enrollment Process
            </h3>

            <div className="relative">
              {/* Dotted connector — desktop only */}
              <div className="hidden xl:block absolute top-[38px] left-[12%] right-[12%] border-t-2 border-dotted border-gray-300" />

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {enrollmentSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative z-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4"
                  >
                    <div className={`text-3xl ${item.iconColor} mb-3`}>
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`w-5 h-5 ${item.stepBg} rounded-full text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0`}
                      >
                        {item.step}
                      </span>
                      <h4 className="font-bold text-gray-900 text-xs leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------- RIGHT COLUMN: RATES ---------- */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            {/* Full-time rates */}
            <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-4">
              Full-Time Monthly Rates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
              {fullTimeRates.map((rate, index) => (
                <motion.div
                  key={index}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`${rate.cardBg} ${rate.border} border rounded-2xl p-4 text-center hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div
                      className={`w-9 h-9 ${rate.iconBg} rounded-full flex items-center justify-center text-white text-sm flex-shrink-0`}
                    >
                      {rate.icon}
                    </div>
                    <div className="text-left leading-tight">
                      <p className="font-bold text-gray-900 text-sm">
                        {rate.title}
                      </p>
                      <p className="text-[10px] text-gray-500">{rate.age}</p>
                    </div>
                  </div>
                  <p className={`font-extrabold text-lg ${rate.priceColor}`}>
                    {rate.price}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Part-time rates */}
            <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-4">
              Part-Time Monthly Rates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-5">
              {partTimeRates.map((rate, index) => (
                <motion.div
                  key={index}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`${rate.cardBg} ${rate.border} border rounded-2xl p-4 flex items-center justify-center gap-3 hover:shadow-md transition-shadow`}
                >
                  <FaCalendarAlt className={`text-2xl ${rate.iconColor}`} />
                  <div className="text-center">
                    <p className="font-bold text-gray-900 text-sm">
                      {rate.title}
                    </p>
                    <p className={`font-extrabold text-lg ${rate.priceColor}`}>
                      {rate.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Grant / subsidy notice */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex items-start gap-3"
            >
              <FaInfoCircle className="text-sky-500 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <span className="font-bold">
                  Alberta Child Care Affordability Grant
                </span>{' '}
                and subsidy programs may apply. Additional hours are billed at{' '}
                <span className="font-bold text-[#c72a7a]">$15 – $20 per hour.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ============ TESTIMONIALS + CENTRE INFO ============ */}
        <div className="bg-orange-50/60 rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

            {/* Testimonials */}
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
              >
                <FaQuoteLeft className="text-[#c72a7a] text-xl mb-3" />
                <p className="text-xs text-gray-700 leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-1 mt-3 text-[#c72a7a]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs font-semibold text-gray-800">{t.name}</p>
                  {t.accent}
                </div>
              </motion.div>
            ))}

            {/* Centre info + image */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-4 space-y-3 flex-1">
                {centreInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${index !== centreInfo.length - 1 ? 'pb-3 border-b border-gray-100' : ''}`}
                  >
                    <span className={`${info.iconColor} text-lg flex-shrink-0 mt-0.5`}>
                      {info.icon}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">
                        {info.title}
                      </p>
                      {info.subtitle && (
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                          {info.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <img
                src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=600&q=80"
                alt="Maple Leaf Montessori classroom"
                loading="lazy"
                className="w-full h-28 object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* ============ CTA BANNER ============ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-pink-50 border border-pink-100 rounded-2xl px-5 sm:px-8 py-7"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">

            {/* Left: heading with decorations */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <FaLeaf className="text-[#e0115f] text-4xl -rotate-45" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2">
                Ready to Book a Tour?
                <FaHeart className="text-pink-400 text-lg" />
              </h3>
            </div>

            {/* Middle: text */}
            <p className="flex-1 text-xs md:text-sm text-gray-700 leading-relaxed text-center lg:text-left">
              We&apos;d love to meet your family and show you what makes Maple
              Leaf Montessori a special place to grow. Complete the inquiry form
              on our Book a Tour page and we&apos;ll be in touch!
            </p>

            {/* Right: button + decorations */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                to="/book-a-tour"
                className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <FaCalendarAlt />
                Go to Book a Tour
              </Link>
              <FaLeaf className="text-green-500 text-2xl hidden sm:block" />
              <FaSun className="text-amber-400 text-2xl hidden sm:block" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AdmissionsFees;
