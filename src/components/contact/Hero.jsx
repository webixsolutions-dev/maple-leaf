import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaSun,
  FaHeart,
  FaHome,
} from 'react-icons/fa';

const ContactHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#FFF5F7] border border-pink-100/80 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 relative z-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 bg-[#E0115F] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-xs mb-4">
            <FaHeart className="text-[9px] sm:text-xs" />
            <span>Where children learn, grow, and thrive</span>
          </div>

          <FaSun className="text-amber-400 text-3xl sm:text-4xl absolute top-0 right-4 hidden sm:block pointer-events-none" />

          <h1 className="font-serif font-bold leading-[1.1] mt-1">
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#0F172A] tracking-tight">
              Contact Us
            </span>
            <span className="mt-2 flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#E0115F] tracking-tight">
              Let&apos;s Connect
              <FaLeaf className="text-emerald-500 text-2xl sm:text-3xl -rotate-12 flex-shrink-0" />
            </span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mt-5 max-w-xl font-medium">
            Maple Leaf Montessori daycare is coming soon to Calgary! In the
            meantime, our Homecare Services are available now.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 max-w-xl">
            We&apos;d love to hear from you! Contact our team for any questions
            about our upcoming daycare, or to learn more about our homecare
            services and how we can support your family.
          </p>

          <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mt-8 w-full relative">
            <Link
              to="/our-services"
              className="bg-[#00A859] hover:bg-[#00924D] text-white px-5 sm:px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all flex-1 sm:flex-none whitespace-nowrap"
            >
              <FaHome className="text-lg flex-shrink-0" />
              <span>Avail Homecare Services</span>
            </Link>
            <FaHeart className="text-pink-400 text-xl hidden sm:block absolute -right-2 bottom-0" />
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white">
            <img
              src="/happywomen.webp"
              alt="Educator helping a child with Montessori toys at Maple Leaf Montessori"
              className="w-full h-auto object-cover rounded-2xl"
            />

            <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-md flex flex-col items-start gap-0.5">
              <p className="text-[#E0115F] font-extrabold text-sm leading-tight">
                Respect
              </p>
              <p className="text-sky-600 font-extrabold text-sm leading-tight">
                Learn
              </p>
              <p className="text-green-600 font-extrabold text-sm leading-tight">
                Grow
              </p>
              <p className="text-purple-600 font-extrabold text-sm leading-tight">
                Thrive
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactHero;
