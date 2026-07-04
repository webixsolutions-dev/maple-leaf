// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import {
//   FaLeaf,
//   FaSun,
//   FaHeart,
//   FaStar,
//   FaShieldAlt,
//   FaChild,
//   FaClock,
//   FaMapMarkerAlt,
//   FaSeedling,
//   FaUsers,
//   FaComments,
//   FaHandHoldingHeart,
//   FaCalendarAlt,
//   FaSchool,
//   FaQuoteLeft,
//   FaAppleAlt,
//   FaSmile,
// } from 'react-icons/fa';

// /* ------------------------------------------------------------------ */
// /*  DATA                                                               */
// /* ------------------------------------------------------------------ */

// const quickInfo = [
//   {
//     icon: <FaShieldAlt />,
//     iconBg: 'bg-pink-500',
//     title: 'Licensed Facility',
//     description:
//       'Licensed daycare operating in compliance with Alberta Child Care Standards.',
//   },
//   {
//     icon: <FaChild />,
//     iconBg: 'bg-green-600',
//     title: 'Ages 15 Months–6 Years',
//     description:
//       'Programs thoughtfully designed to support every stage of early development.',
//   },
//   {
//     icon: <FaClock />,
//     iconBg: 'bg-amber-500',
//     title: 'Open Mon–Fri 7:00 AM – 6:00 PM',
//     description: 'Convenient hours that support busy families.',
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     iconBg: 'bg-sky-500',
//     title: 'Calgary, Alberta',
//     description:
//       'Proudly serving families across Calgary and the surrounding areas.',
//   },
// ];

// const features = [
//   {
//     icon: <FaSeedling />,
//     iconBg: 'bg-pink-500',
//     title: 'Montessori Philosophy',
//     description:
//       'Child-led learning that builds independence, confidence, and a lifelong love of learning.',
//     accent: <FaLeaf className="text-pink-400" />,
//   },
//   {
//     icon: <FaUsers />,
//     iconBg: 'bg-sky-500',
//     title: 'Safe Supervision & Ratio Compliance',
//     description:
//       'Certified educators and strict ratios to ensure every child is seen and supported.',
//     accent: <FaHeart className="text-sky-400" />,
//   },
//   {
//     icon: <FaComments />,
//     iconBg: 'bg-amber-500',
//     title: 'Strong Parent Communication',
//     description:
//       'Clear communication, updates, and partnerships that keep families connected.',
//     accent: <FaSun className="text-amber-400" />,
//   },
//   {
//     icon: <FaHandHoldingHeart />,
//     iconBg: 'bg-purple-600',
//     title: 'Nurturing Classrooms',
//     description:
//       'Beautiful, calm environments that inspire curiosity, creativity, and joyful discovery.',
//     accent: <FaStar className="text-purple-400" />,
//   },
// ];

// const stats = [
//   {
//     icon: <FaShieldAlt />,
//     iconBg: 'bg-pink-100',
//     iconColor: 'text-pink-500',
//     numberColor: 'text-pink-600',
//     number: '100%',
//     label: 'Licensed daycare',
//     description: 'Fully licensed and compliant with Alberta standards.',
//   },
//   {
//     icon: <FaSchool />,
//     iconBg: 'bg-green-100',
//     iconColor: 'text-green-600',
//     numberColor: 'text-green-600',
//     number: '100%',
//     label: 'Structured daily operations',
//     description: 'Predictable routines and enriching activities every day.',
//   },
//   {
//     icon: <FaUsers />,
//     iconBg: 'bg-purple-100',
//     iconColor: 'text-purple-600',
//     numberColor: 'text-purple-600',
//     number: '100%',
//     label: 'Family-focused learning',
//     description: "We partner with families to support each child's growth.",
//   },
// ];

// const carePromise = [
//   {
//     icon: <FaClock />,
//     iconBg: 'bg-pink-500',
//     title: 'Balanced Daily Schedules',
//     description:
//       'Predictable routines that balance structured learning, play, rest, and healthy meals.',
//     accent: <FaHeart className="text-pink-400" />,
//   },
//   {
//     icon: <FaUsers />,
//     iconBg: 'bg-green-600',
//     title: 'Safe & Smooth Transitions',
//     description:
//       'Warm greetings and calm transitions help children feel secure and ready to learn.',
//     accent: <FaLeaf className="text-green-500" />,
//   },
//   {
//     icon: <FaAppleAlt />,
//     iconBg: 'bg-amber-500',
//     title: 'Healthy Habits, Happy Children',
//     description:
//       "Nutritious meals, active play, and rest time support your child's well-being.",
//     accent: <FaSun className="text-amber-400" />,
//   },
//   {
//     icon: <FaStar />,
//     iconBg: 'bg-purple-600',
//     title: 'Joyful Learning, Every Day',
//     description:
//       'Hands-on activities spark curiosity and build confidence in a fun, engaging way.',
//     accent: <FaHeart className="text-pink-400" />,
//   },
//   {
//     icon: <FaShieldAlt />,
//     iconBg: 'bg-sky-500',
//     title: 'Dependable Care, Peace of Mind',
//     description:
//       'Qualified educators, safe environments, and open communication you can trust.',
//     accent: <FaLeaf className="text-green-500" />,
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       'Maple Leaf Montessori has been a blessing for our family. Our daughter comes home happy, confident, and excited to share what she learned each day.',
//     name: '– Victoria M., Calgary',
//     starColor: 'text-pink-500',
//     accent: <FaHeart className="text-pink-300 text-lg" />,
//   },
//   {
//     quote:
//       'The educators are truly caring and the environment is so calm and nurturing. We love the communication and updates throughout the day.',
//     name: '– Daniel R., Calgary',
//     starColor: 'text-green-500',
//     accent: <FaLeaf className="text-green-400 text-lg" />,
//   },
//   {
//     quote:
//       'From the moment we toured, we felt at home. The Montessori approach has helped our son grow in independence and curiosity every day.',
//     name: '– Priya K., Calgary',
//     starColor: 'text-purple-500',
//     accent: <FaHeart className="text-purple-300 text-lg" />,
//   },
// ];

// const centreInfoLeft = [
//   {
//     icon: <FaMapMarkerAlt />,
//     iconColor: 'text-pink-500',
//     title: 'Calgary, Alberta',
//     subtitle: null,
//   },
//   {
//     icon: <FaClock />,
//     iconColor: 'text-pink-500',
//     title: 'Monday – Friday',
//     subtitle: '7:00 AM – 6:00 PM',
//   },
//   {
//     icon: <FaShieldAlt />,
//     iconColor: 'text-green-600',
//     title: 'Licensed Montessori Daycare',
//     subtitle: 'A safe, nurturing, and inspiring place to learn and grow.',
//   },
// ];

// const centreInfoRight = [
//   {
//     icon: <FaComments />,
//     iconColor: 'text-amber-500',
//     title: 'Strong Parent Communication',
//     subtitle: 'Daily updates, photos, and open communication.',
//   },
//   {
//     icon: <FaUsers />,
//     iconColor: 'text-sky-500',
//     title: 'Experienced & Caring Educators',
//     subtitle: 'Passionate professionals who truly care.',
//   },
//   {
//     icon: <FaLeaf />,
//     iconColor: 'text-green-600',
//     title: 'Safe, Nurturing Environment',
//     subtitle: 'Certified, secure, and designed for your child.',
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  ANIMATION                                                          */
// /* ------------------------------------------------------------------ */

// const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// /* ------------------------------------------------------------------ */
// /*  COMPONENT                                                          */
// /* ------------------------------------------------------------------ */

// const AboutUs = () => {
//   return (
//     <div className="font-montserrat bg-white pt-20 pb-14">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">

//         {/* ================= HERO BANNER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative overflow-hidden rounded-3xl bg-pink-50"
//         >
//           <div className="grid md:grid-cols-2 items-stretch">

//             {/* ---- Left content ---- */}
//             <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
//               <FaSun className="hidden lg:block absolute top-8 right-10 text-amber-400 text-4xl" />

//               {/* Tagline pill */}
//               <div className="inline-flex items-center gap-2 bg-pink-100 text-[#c72a7a] font-semibold text-[11px] md:text-xs px-4 py-1.5 rounded-full self-start mb-4">
//                 <FaHeart className="text-[10px]" />
//                 Where children learn, grow, and thrive
//               </div>

//               {/* Heading */}
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
//                 About
//                 <br />
//                 <span className="text-[#e0115f] inline-flex items-center gap-3 flex-wrap">
//                   Maple Leaf Montessori
//                   <FaLeaf className="text-green-500 text-2xl lg:text-3xl" />
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 max-w-md">
//                 Maple Leaf Montessori Calgary is a licensed, facility-based
//                 Montessori daycare in Calgary, Alberta. We provide a safe,
//                 structured, nurturing, and compliance-led early learning
//                 environment where children ages{' '}
//                 <span className="text-[#c72a7a] font-semibold">
//                   15 months to 6 years
//                 </span>{' '}
//                 can learn, grow, and thrive.
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-wrap gap-3 mt-6">
//                 <Link
//                   to="/book-a-tour"
//                   className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
//                 >
//                   <FaCalendarAlt />
//                   Book a Tour
//                 </Link>
//                 <Link
//                   to="/programs"
//                   className="inline-flex items-center gap-2 border-2 border-[#e0115f] text-[#e0115f] hover:bg-[#e0115f] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
//                 >
//                   <FaLeaf className="text-xs" />
//                   Explore Programs
//                 </Link>
//               </div>
//             </div>

//             {/* ---- Right image ---- */}
//             <div className="relative min-h-[240px] md:min-h-[340px]">
//               <img
//                 src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80"
//                 alt="Educator guiding children at Maple Leaf Montessori"
//                 className="absolute inset-0 w-full h-full object-cover md:rounded-l-[60px]"
//               />
//               {/* Motto badge */}
//               <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
//                 <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
//                 <p className="text-sky-600 font-extrabold text-sm">Learn</p>
//                 <p className="text-green-600 font-extrabold text-sm">Grow</p>
//                 <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= QUICK INFO STRIP ================= */}
//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 0.6 }}
//           className="bg-white border border-gray-100 rounded-3xl shadow-sm p-5 sm:p-6"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//             {quickInfo.map((item, index) => (
//               <motion.div
//                 key={index}
//                 {...fadeUp}
//                 transition={{ duration: 0.45, delay: index * 0.08 }}
//                 className={`flex items-start gap-4 ${index !== quickInfo.length - 1 ? 'xl:border-r xl:border-gray-100 xl:pr-5' : ''}`}
//               >
//                 <div
//                   className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center text-white text-lg flex-shrink-0 shadow-sm`}
//                 >
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 text-sm leading-snug">
//                     {item.title}
//                   </h4>
//                   <p className="text-xs text-gray-600 leading-relaxed mt-1">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* ================= WHO WE ARE ================= */}
//         <div>
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-8"
//           >
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2">
//               Who We Are
//               <FaHeart className="text-purple-400 text-lg" />
//             </h2>
//             <p className="text-sm md:text-base text-gray-600 mt-2">
//               Our approach combines Montessori principles with modern best
//               practices.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 {...fadeUp}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5"
//               >
//                 <div className="flex items-start gap-3 mb-3">
//                   <div
//                     className={`w-11 h-11 ${feature.iconBg} rounded-full flex items-center justify-center text-white text-base flex-shrink-0 shadow-sm`}
//                   >
//                     {feature.icon}
//                   </div>
//                   <h3 className="font-bold text-gray-900 text-sm leading-snug pt-1">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 {/* Corner accent */}
//                 <span className="absolute bottom-3 right-3 text-sm opacity-70">
//                   {feature.accent}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ================= TRUSTED START-UP ================= */}
//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden bg-orange-50 rounded-3xl p-6 sm:p-8"
//         >
//           <FaHeart className="absolute top-5 right-6 text-pink-400 text-lg" />
//           <FaLeaf className="absolute top-12 right-10 text-green-500 text-sm" />

//           <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-center">
//             {/* Left heading */}
//             <div>
//               <div className="flex items-start gap-3">
//                 <FaSun className="text-amber-400 text-3xl flex-shrink-0 mt-1" />
//                 <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
//                   A trusted Montessori start-up for{' '}
//                   <span className="text-[#c72a7a]">Calgary</span> families
//                   <FaLeaf className="inline ml-2 text-green-500 text-base" />
//                 </h3>
//               </div>
//               <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
//                 Building strong foundations through quality care, thoughtful
//                 programs, and community trust.
//               </p>
//             </div>

//             {/* Right stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   {...fadeUp}
//                   transition={{ duration: 0.45, delay: index * 0.08 }}
//                   className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5"
//                 >
//                   <div
//                     className={`w-12 h-12 ${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center text-xl mb-3`}
//                   >
//                     {stat.icon}
//                   </div>
//                   <p className={`text-2xl font-extrabold ${stat.numberColor}`}>
//                     {stat.number}
//                   </p>
//                   <p className="font-bold text-gray-900 text-xs mt-0.5">
//                     {stat.label}
//                   </p>
//                   <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
//                     {stat.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= OUR DAILY CARE PROMISE ================= */}
//         <div className="bg-pink-50/50 rounded-3xl p-5 sm:p-7">
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-8"
//           >
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
//               <span>
//                 Our Daily <span className="text-[#c72a7a]">Care Promise</span>
//               </span>
//               <FaLeaf className="text-green-500 text-lg" />
//             </h2>
//             <p className="text-sm md:text-base text-gray-600 mt-2">
//               Thoughtful routines, nurturing care, and meaningful
//               learning—every single day.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//             {carePromise.map((item, index) => (
//               <motion.div
//                 key={index}
//                 {...fadeUp}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="relative bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5"
//               >
//                 {/* Corner accent */}
//                 <span className="absolute top-4 right-4 text-sm opacity-70">
//                   {item.accent}
//                 </span>
//                 <div
//                   className={`w-11 h-11 ${item.iconBg} rounded-full flex items-center justify-center text-white text-base shadow-sm mb-3`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 pr-5">
//                   {item.title}
//                 </h3>
//                 <p className="text-[11px] text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ================= LOVED BY CALGARY FAMILIES ================= */}
//         <div>
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-8"
//           >
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
//               <span>
//                 Loved by <span className="text-[#c72a7a]">Calgary Families</span>
//               </span>
//               <FaHeart className="text-purple-400 text-lg" />
//             </h2>
//             <p className="text-sm md:text-base text-gray-600 mt-2">
//               Real stories from parents who trust us with what matters most.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
//             {testimonials.map((t, index) => (
//               <motion.div
//                 key={index}
//                 {...fadeUp}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
//               >
//                 <div className="flex items-start gap-3 flex-1">
//                   <FaQuoteLeft className={`${t.starColor} text-xl flex-shrink-0`} />
//                   <p className="text-xs text-gray-700 leading-relaxed">
//                     {t.quote}
//                   </p>
//                 </div>
//                 <div className={`flex items-center justify-center gap-1 mt-4 ${t.starColor}`}>
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="text-xs" />
//                   ))}
//                 </div>
//                 <div className="flex items-center justify-between mt-2">
//                   <p className="text-xs font-semibold text-gray-800 mx-auto">
//                     {t.name}
//                   </p>
//                   <span className="absolute" />
//                   {t.accent}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ================= VISIT OUR CALGARY CENTRE ================= */}
//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 0.6 }}
//           className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
//         >
//           <div className="grid lg:grid-cols-2">

//             {/* Image */}
//             <div className="relative min-h-[220px] lg:min-h-[300px]">
//               <img
//                 src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=900&q=80"
//                 alt="Maple Leaf Montessori classroom in Calgary"
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-md text-right leading-tight">
//                 <p className="text-[#e0115f] font-extrabold text-sm">Respect</p>
//                 <p className="text-sky-600 font-extrabold text-sm">Learn</p>
//                 <p className="text-green-600 font-extrabold text-sm">Grow</p>
//                 <p className="text-purple-600 font-extrabold text-sm">Thrive</p>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="p-6 sm:p-8">
//               <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 inline-flex items-center gap-2 mb-5">
//                 Visit Our <span className="text-[#c72a7a]">Calgary Centre</span>
//                 <FaLeaf className="text-green-500 text-base" />
//               </h2>

//               <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 sm:divide-x sm:divide-dotted sm:divide-gray-200">
//                 {/* Left column */}
//                 <div className="space-y-4">
//                   {centreInfoLeft.map((info, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <span
//                         className={`${info.iconColor} text-lg flex-shrink-0 mt-0.5`}
//                       >
//                         {info.icon}
//                       </span>
//                       <div>
//                         <p className="font-bold text-gray-900 text-xs">
//                           {info.title}
//                         </p>
//                         {info.subtitle && (
//                           <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
//                             {info.subtitle}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Right column */}
//                 <div className="space-y-4 sm:pl-8">
//                   {centreInfoRight.map((info, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <span
//                         className={`${info.iconColor} text-lg flex-shrink-0 mt-0.5`}
//                       >
//                         {info.icon}
//                       </span>
//                       <div>
//                         <p className="font-bold text-gray-900 text-xs">
//                           {info.title}
//                         </p>
//                         {info.subtitle && (
//                           <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
//                             {info.subtitle}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= CTA BANNER ================= */}
//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden bg-pink-50 border border-pink-100 rounded-2xl px-5 sm:px-8 py-7"
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-6">

//             {/* Left decorations + heading */}
//             <div className="flex items-center gap-4 flex-shrink-0">
//               <FaSun className="text-amber-400 text-3xl hidden sm:block" />
//               <FaLeaf className="text-green-500 text-xl hidden sm:block" />
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
//                 Ready to meet{' '}
//                 <span className="text-[#e0115f]">Maple Leaf Montessori</span>?
//               </h3>
//             </div>

//             {/* Middle text */}
//             <p className="flex-1 text-xs md:text-sm text-gray-700 leading-relaxed text-center lg:text-left lg:border-l lg:border-pink-200 lg:pl-6">
//               We&apos;d love to welcome your family and show you how we nurture
//               curiosity, confidence, and a love of learning.
//             </p>

//             {/* Right button + decorations */}
//             <div className="flex items-center gap-4 flex-shrink-0">
//               <Link
//                 to="/book-a-tour"
//                 className="inline-flex items-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
//               >
//                 <FaCalendarAlt />
//                 Go to Book a Tour
//               </Link>
//               <FaHeart className="text-pink-400 text-xl hidden sm:block" />
//               <FaLeaf className="text-[#e0115f] text-2xl -rotate-45 hidden sm:block" />
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// ============================================
// AboutUs.jsx - Main Component
// ============================================
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  FaSmile,
} from 'react-icons/fa';

// Import sub-components
import HeroBanner from '../about/Hero';
import QuickInfoStrip from '../about/QuickInfoStrip';
import WhoWeAre from '../about/WhoWeAre';
import TrustedStartup from '../about/TrustedStartup';
import DailyCarePromise from '../about/DailyCarePromise';
import Testimonials from '../about/Testominals';
import VisitCentre from '../about/VisitCenter';
import CTABanner from '../about/CTABanner';

// ============================================
// DATA
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

// ============================================
// MAIN COMPONENT
// ============================================
const AboutUs = () => {
  return (
    <div className="font-montserrat bg-white pt-20 pb-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
        
        <HeroBanner />
        <QuickInfoStrip />
        <WhoWeAre />
        <TrustedStartup />
        <DailyCarePromise />
        <Testimonials />
        <VisitCentre />
        <CTABanner />
        
      </div>
    </div>
  );
};

export default AboutUs;