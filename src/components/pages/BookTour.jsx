import { motion } from 'framer-motion';
import { FaLeaf, FaCalendarAlt } from 'react-icons/fa';
import TourForm from '../bookTour/TourForm';
import WhatToExpect from '../bookTour/WhatToExpect';
import BookingSteps from '../bookTour/BookingSteps';
import FAQSection from '../bookTour/FAQSection';

const BookATour = () => {
  return (
    <div className="font-montserrat bg-pink-50/40 pt-20 pb-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 md:space-y-14">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="relative flex-shrink-0 hidden sm:block">
                <FaCalendarAlt className="text-[#e0115f] text-4xl" />
                <FaLeaf className="absolute -bottom-1 -right-1 text-[#e0115f] text-sm" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-flex items-center gap-2">
                  Schedule Your Tour
                  <FaLeaf className="text-green-500 text-xl" />
                </h1>
                <p className="text-sm md:text-base text-gray-600 mt-2 max-w-md">
                  We'd love to show you around! Fill out the form below
                  and we'll be in touch to confirm your visit.
                </p>
              </div>
            </div>
            <TourForm />
          </motion.div>
          <WhatToExpect />
        </div>
        <BookingSteps />
        <FAQSection />
      </div>
    </div>
  );
};

export default BookATour;