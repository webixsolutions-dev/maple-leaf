import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaStar,
  FaShieldAlt,
  FaChild,
  FaClock,
  FaMapMarkerAlt,
  FaSeedling,
  FaUsers,
  FaComments,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaSchool,
  FaQuoteLeft,
  FaAppleAlt,
} from 'react-icons/fa';

// ============================================
// QUICK INFO DATA
// ============================================
export const quickInfo = [
  {
    icon: <FaShieldAlt />,
    iconBg: 'bg-pink-500',
    title: 'Licensed Facility',
    description: 'Licensed daycare operating in compliance with Alberta Child Care Standards.',
  },
  {
    icon: <FaChild />,
    iconBg: 'bg-green-600',
    title: 'Ages 15 Months–6 Years',
    description: 'Programs thoughtfully designed to support every stage of early development.',
  },
  {
    icon: <FaClock />,
    iconBg: 'bg-amber-500',
    title: 'Open Mon–Fri 7:00 AM – 6:00 PM',
    description: 'Convenient hours that support busy families.',
  },
  {
    icon: <FaMapMarkerAlt />,
    iconBg: 'bg-sky-500',
    title: 'Calgary, Alberta',
    description: 'Proudly serving families across Calgary and the surrounding areas.',
  },
];

// ============================================
// FEATURES DATA
// ============================================
export const features = [
  {
    icon: <FaSeedling />,
    iconBg: 'bg-pink-500',
    title: 'Montessori Philosophy',
    description: 'Child-led learning that builds independence, confidence, and a lifelong love of learning.',
    accent: <FaLeaf className="text-pink-400" />,
  },
  {
    icon: <FaUsers />,
    iconBg: 'bg-sky-500',
    title: 'Safe Supervision & Ratio Compliance',
    description: 'Certified educators and strict ratios to ensure every child is seen and supported.',
    accent: <FaHeart className="text-sky-400" />,
  },
  {
    icon: <FaComments />,
    iconBg: 'bg-amber-500',
    title: 'Strong Parent Communication',
    description: 'Clear communication, updates, and partnerships that keep families connected.',
    accent: <FaSun className="text-amber-400" />,
  },
  {
    icon: <FaHandHoldingHeart />,
    iconBg: 'bg-purple-600',
    title: 'Nurturing Classrooms',
    description: 'Beautiful, calm environments that inspire curiosity, creativity, and joyful discovery.',
    accent: <FaStar className="text-purple-400" />,
  },
];

// ============================================
// STATS DATA
// ============================================
export const stats = [
  {
    icon: <FaShieldAlt />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    numberColor: 'text-pink-600',
    number: '100%',
    label: 'Licensed daycare',
    description: 'Fully licensed and compliant with Alberta standards.',
  },
  {
    icon: <FaSchool />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    numberColor: 'text-green-600',
    number: '100%',
    label: 'Structured daily operations',
    description: 'Predictable routines and enriching activities every day.',
  },
  {
    icon: <FaUsers />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    numberColor: 'text-purple-600',
    number: '100%',
    label: 'Family-focused learning',
    description: "We partner with families to support each child's growth.",
  },
];

// ============================================
// CARE PROMISE DATA
// ============================================
export const carePromise = [
  {
    icon: <FaClock />,
    iconBg: 'bg-pink-500',
    title: 'Balanced Daily Schedules',
    description: 'Predictable routines that balance structured learning, play, rest, and healthy meals.',
    accent: <FaHeart className="text-pink-400" />,
  },
  {
    icon: <FaUsers />,
    iconBg: 'bg-green-600',
    title: 'Safe & Smooth Transitions',
    description: 'Warm greetings and calm transitions help children feel secure and ready to learn.',
    accent: <FaLeaf className="text-green-500" />,
  },
  {
    icon: <FaAppleAlt />,
    iconBg: 'bg-amber-500',
    title: 'Healthy Habits, Happy Children',
    description: "Nutritious meals, active play, and rest time support your child's well-being.",
    accent: <FaSun className="text-amber-400" />,
  },
  {
    icon: <FaStar />,
    iconBg: 'bg-purple-600',
    title: 'Joyful Learning, Every Day',
    description: 'Hands-on activities spark curiosity and build confidence in a fun, engaging way.',
    accent: <FaHeart className="text-pink-400" />,
  },
  {
    icon: <FaShieldAlt />,
    iconBg: 'bg-sky-500',
    title: 'Dependable Care, Peace of Mind',
    description: 'Qualified educators, safe environments, and open communication you can trust.',
    accent: <FaLeaf className="text-green-500" />,
  },
];

// ============================================
// TESTIMONIALS DATA
// ============================================
export const testimonials = [
  {
    quote: 'Maple Leaf Montessori has been a blessing for our family. Our daughter comes home happy, confident, and excited to share what she learned each day.',
    name: '– Victoria M., Calgary',
    starColor: 'text-pink-500',
    accent: <FaHeart className="text-pink-300 text-lg" />,
  },
  {
    quote: 'The educators are truly caring and the environment is so calm and nurturing. We love the communication and updates throughout the day.',
    name: '– Daniel R., Calgary',
    starColor: 'text-green-500',
    accent: <FaLeaf className="text-green-400 text-lg" />,
  },
  {
    quote: 'From the moment we toured, we felt at home. The Montessori approach has helped our son grow in independence and curiosity every day.',
    name: '– Priya K., Calgary',
    starColor: 'text-purple-500',
    accent: <FaHeart className="text-purple-300 text-lg" />,
  },
];

// ============================================
// CENTRE INFO DATA
// ============================================
export const centreInfoLeft = [
  {
    icon: <FaMapMarkerAlt />,
    iconColor: 'text-pink-500',
    title: 'Calgary, Alberta',
    subtitle: null,
  },
  {
    icon: <FaClock />,
    iconColor: 'text-pink-500',
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

export const centreInfoRight = [
  {
    icon: <FaComments />,
    iconColor: 'text-amber-500',
    title: 'Strong Parent Communication',
    subtitle: 'Daily updates, photos, and open communication.',
  },
  {
    icon: <FaUsers />,
    iconColor: 'text-sky-500',
    title: 'Experienced & Caring Educators',
    subtitle: 'Passionate professionals who truly care.',
  },
  {
    icon: <FaLeaf />,
    iconColor: 'text-green-600',
    title: 'Safe, Nurturing Environment',
    subtitle: 'Certified, secure, and designed for your child.',
  },
];

// ============================================
// ANIMATION
// ============================================
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};