import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaCalendar, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const Fees = () => {
  const fullTimeRates = [
    { program: 'Infant Program', age: '15 months – 24 months', price: '$1,200 – $1,400' },
    { program: 'Toddler Program', age: '2 years – 3 years', price: '$1,000 – $1,200' },
    { program: 'Preschool Program', age: '3 years – 6 years', price: '$950 – $1,100' },
  ];

  const partTimeRates = [
    { days: '3 Days / Week', price: '$750 – $850' },
    { days: '4 Days / Week', price: '$850 – $950' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Fees, Rates & <span className="text-primary-600">Admission Information</span>
            </h1>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
              Transparent fees, clear requirements, and everything you need to know for a smooth start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Full Time */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Full-Time Monthly Rates</h3>
              <p className="text-sm text-gray-500 mb-6">Up to 9 hours daily</p>
              <div className="space-y-4">
                {fullTimeRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-semibold text-gray-900">{rate.program}</p>
                      <p className="text-sm text-gray-500">{rate.age}</p>
                    </div>
                    <span className="text-primary-600 font-bold">{rate.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Part Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Part-Time Monthly Rates</h3>
              <p className="text-sm text-gray-500 mb-6">Up to 6 hours daily</p>
              <div className="space-y-4">
                {partTimeRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <p className="font-semibold text-gray-900">{rate.days}</p>
                    <span className="text-primary-600 font-bold">{rate.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-start space-x-3">
              <FaInfoCircle className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Important Notes</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• No half-day rates available</li>
                  <li>• Part-time care requires minimum 3 full days/week</li>
                  <li>• Drop-in care may be offered subject to availability</li>
                  <li>• Additional hours billed at $15 – $20/hour</li>
                  <li>• Rates may align with Alberta Child Care Affordability Grant and subsidy programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Documents Needed */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Documents & Information Needed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Child's basic details (name, date of birth, address)",
                "Parent/Guardian contact details",
                "Emergency contacts",
                "Medical and allergy information",
                "Preferred care schedule (full-time or part-time)",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              We're here to help! If you have any questions or need assistance with enrollment, our team is happy to support you.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link to="/book-tour">
              <button className="btn-primary">
                Book a Tour
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">
              Why Families Choose Our Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FaCheckCircle className="text-3xl text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Montessori-Led Learning</h4>
              <p className="text-sm text-gray-600 mt-1">Child-centered, hands-on learning that builds independence and confidence.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FaDollarSign className="text-3xl text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Licensed & Trusted</h4>
              <p className="text-sm text-gray-600 mt-1">Fully licensed and regulated to ensure your child's safety and well-being.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FaCalendar className="text-3xl text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Structured Routines</h4>
              <p className="text-sm text-gray-600 mt-1">Consistent daily rhythms that support focus, behavior, and lifelong learning.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <FaCheckCircle className="text-3xl text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Strong Parent Communication</h4>
              <p className="text-sm text-gray-600 mt-1">Open communication, updates, and regular check-ins with families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white">
            Ready to Find the Right Program for Your Child?
          </h2>
          <p className="text-white/90 text-lg mt-3 max-w-2xl mx-auto">
            We'd love to show you around! Book a tour to meet our educators, explore our classrooms, and find the perfect fit for your family.
          </p>
          <Link to="/book-tour">
            <button className="mt-6 bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Book a Tour
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fees;
