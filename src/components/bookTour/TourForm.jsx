import { useState } from 'react';
import { FaHeart, FaLeaf, FaCalendarAlt, FaLock, FaChevronDown } from 'react-icons/fa';
import { ageGroups, programOptions, tourTimes } from '../data/bookTourData';

const TourForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    ageGroup: '',
    program: '',
    tourDate: '',
    tourTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Tour request submitted:', form);
    setSubmitted(true);
  };

  const inputClasses =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent';

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-7">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <FaHeart className="text-[#e0115f] text-4xl mb-4" />
          <h3 className="font-extrabold text-gray-900 text-xl">
            Your tour request has been sent!
          </h3>
          <p className="text-sm text-gray-600 mt-2 max-w-sm">
            We'll be in touch within one business day to confirm
            your visit. We look forward to welcoming you to Maple Leaf
            Montessori!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-7">
      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Parent/Guardian Name <span className="text-[#e0115f]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Email Address <span className="text-[#e0115f]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Phone Number <span className="text-[#e0115f]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Child's Age Group <span className="text-[#e0115f]">*</span>
            </label>
            <div className="relative">
              <select
                name="ageGroup"
                value={form.ageGroup}
                onChange={handleChange}
                className={`${inputClasses} appearance-none pr-10`}
              >
                <option value="">Select age group</option>
                {ageGroups.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Interested Program <span className="text-[#e0115f]">*</span>
            </label>
            <div className="relative">
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className={`${inputClasses} appearance-none pr-10`}
              >
                <option value="">Select a program</option>
                {programOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Preferred Tour Date <span className="text-[#e0115f]">*</span>
            </label>
            <input
              type="date"
              name="tourDate"
              value={form.tourDate}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2 sm:max-w-[calc(50%-10px)]">
            <label className="block text-xs font-bold text-gray-900 mb-2">
              Preferred Tour Time <span className="text-[#e0115f]">*</span>
            </label>
            <div className="relative">
              <select
                name="tourTime"
                value={form.tourTime}
                onChange={handleChange}
                className={`${inputClasses} appearance-none pr-10`}
              >
                <option value="">Select a time</option>
                {tourTimes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-900 mb-2">
            Message{' '}
            <span className="text-gray-500 font-normal">(Optional)</span>{' '}
            <FaLeaf className="inline text-green-500 text-xs ml-1" />
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us anything else that will help us prepare for your visit..."
            className={`${inputClasses} resize-y`}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#e0115f] hover:bg-[#c72a7a] text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <FaCalendarAlt />
          Book My Tour
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <FaLock className="text-green-600" />
          Your information is secure and will never be shared.
        </p>
      </div>
    </div>
  );
};

export default TourForm;