export const expectations = [
  {
    icon: 'FaChalkboardTeacher',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    title: 'Tour the Classrooms',
    description:
      'Explore our thoughtfully prepared environments designed for hands-on learning.',
    buttonText: 'Learn About Our Curriculum',
    buttonLink: '/programs',
  },
  {
    icon: 'FaUsers',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Meet Our Educators',
    description:
      'Connect with our caring, AMI-trained teachers and learn about their approach.',
    buttonText: 'Learn About Our Educators',
    buttonLink: '/about',
  },
  {
    icon: 'FaBook',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Learn About Our Bookstore',
    description:
      'Discover our bookshop, our curriculum, our approach to learning, and how we help children develop their skills and knowledge.',
    buttonText: 'Ask Questions',
    buttonLink: '/contact',
  },
  {
    icon: 'FaQuestion',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: "We're Here",
    description:
      'Families typically have questions about our curriculum, our approach to learning, and how we help children develop their skills and knowledge.',
    buttonText: 'Learn About Our Bookstore',
    buttonLink: '/programs',
  },
];

export const bookingSteps = [
  {
    step: '1',
    stepBg: 'bg-pink-500',
    icon: 'FaEnvelope',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
    cardBg: 'bg-pink-50',
    title: 'Contact Us or Submit Form',
    description:
      "Fill out the short form or give us a call. Tell us a bit about your family and what you're looking for.",
  },
  {
    step: '2',
    stepBg: 'bg-amber-500',
    icon: 'FaCalendarAlt',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    cardBg: 'bg-amber-50',
    title: 'We Confirm Your Tour',
    description:
      "We'll reach out to schedule a convenient time and answer any initial questions you may have.",
  },
  {
    step: '3',
    stepBg: 'bg-green-600',
    icon: 'FaMapPin',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    cardBg: 'bg-green-50',
    title: 'Visit the Centre',
    description:
      'Come experience our warm, prepared environment and see Montessori in action.',
  },
  {
    step: '4',
    stepBg: 'bg-purple-600',
    icon: 'FaUsers',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    cardBg: 'bg-purple-50',
    title: 'Explore Programs',
    description:
      "Learn about our programs, curriculum, daily routines, and how we support your child's growth.",
  },
  {
    step: '5',
    stepBg: 'bg-sky-500',
    icon: 'FaLeaf',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-500',
    cardBg: 'bg-sky-50',
    title: 'Start Your Enrollment Journey',
    description:
      "We'll guide you through the enrollment steps and help your child feel right at home.",
  },
];

export const faqs = [
  {
    question: 'What age groups do you serve?',
    answer:
      'We serve children from 15 months to 6 years across our Infant, Toddler, and Preschool / Montessori Casa programs, plus Before & After School Care for Kindergarten to Grade 6.',
  },
  {
    question: 'How long is a tour?',
    answer:
      'Tours typically take 30–45 minutes, giving you time to see our classrooms, meet our educators, and ask any questions you may have.',
  },
  {
    question: 'Can I bring my child?',
    answer:
      'Absolutely! We encourage you to bring your child so they can experience the environment and we can get to know each other.',
  },
  {
    question: 'Do you offer part-time care?',
    answer:
      'Yes! We offer flexible part-time (3 or 4 days per week) and full-time programs to meet the needs of your family.',
  },
  {
    question: 'How soon will I hear back?',
    answer:
      'We typically respond within one business day during regular business hours, Monday to Friday.',
  },
];

export const ageGroups = [
  'Infant (15–24 months)',
  'Toddler (2–3 years)',
  'Preschool (3–6 years)',
  'Kindergarten – Grade 6',
];

export const programOptions = [
  'Infant Program (Phase 4)',
  'Toddler Program',
  'Preschool / Montessori Casa',
  'Before & After School Care',
  'Summer Programs & Camps',
];

export const tourTimes = [
  'Morning (9:00 – 11:00 AM)',
  'Midday (11:00 AM – 1:00 PM)',
  'Afternoon (1:00 – 4:00 PM)',
  'Late Afternoon (4:00 – 6:00 PM)',
];

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};