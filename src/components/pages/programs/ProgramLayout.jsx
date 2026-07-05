import { Link } from 'react-router-dom';
import {
  FaCalendarCheck,
  FaChevronRight,
  FaChild,
  FaUserFriends,
  FaClock,
  FaRegClock,
  FaPhoneAlt,
} from 'react-icons/fa';
import { programsList } from './programsData';

/**
 * Shared layout for all Programs dropdown pages.
 * Pass one program object from programsData and it renders
 * the full page: hero, quick facts, overview, highlights,
 * daily schedule, other programs, and Book-a-Tour CTA.
 */
const ProgramLayout = ({ program }) => {
  const {
    id,
    icon: ProgramIcon,
    tagline,
    title,
    ageRange,
    ratio,
    hours,
    heroDescription,
    overview,
    highlights,
    schedule,
  } = program;

  const otherPrograms = programsList.filter((p) => p.id !== id);

  return (
    <main className="pt-20 bg-white">
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50">
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#c72a7a]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#c72a7a]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-[#c72a7a] transition-colors">
              Home
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span>Programs</span>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#c72a7a] font-medium">{title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white text-[#c72a7a] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm border border-pink-100 mb-4">
              <ProgramIcon />
              {tagline}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              {title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/book-tour">
                <button className="bg-[#c72a7a] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#b0256e] transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                  <FaCalendarCheck />
                  Book a Tour
                </button>
              </Link>
              <Link to="/admissions">
                <button className="bg-white text-[#c72a7a] border-2 border-[#c72a7a] px-7 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all flex items-center gap-2">
                  Admissions Info
                  <FaChevronRight className="text-xs" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Quick Facts Bar ============ */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          <QuickFact icon={FaChild} label="Age Group" value={ageRange} />
          <QuickFact icon={FaUserFriends} label="Class Ratio" value={ratio} />
          <QuickFact icon={FaClock} label="Program Hours" value={hours} />
        </div>
      </section>

      {/* ============ Overview ============ */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About This Program
        </h2>
        <div className="w-16 h-1 bg-[#c72a7a] rounded-full mx-auto mb-6" />
        <p className="text-gray-600 leading-relaxed text-lg">{overview}</p>
      </section>

      {/* ============ Highlights Grid ============ */}
      <section className="bg-pink-50/60 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Program Highlights
          </h2>
          <div className="w-16 h-1 bg-[#c72a7a] rounded-full mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#c72a7a] flex items-center justify-center text-xl mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Daily Schedule ============ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          A Day in the Program
        </h2>
        <div className="w-16 h-1 bg-[#c72a7a] rounded-full mx-auto mb-12" />

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {schedule.map((slot, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 hover:bg-pink-50/50 transition-colors ${
                idx !== schedule.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-2 sm:w-40 flex-shrink-0 text-[#c72a7a] font-semibold text-sm">
                <FaRegClock />
                {slot.time}
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {slot.activity}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          * Sample schedule — daily routines flex with children’s needs and the weather.
        </p>
      </section>

      {/* ============ Other Programs ============ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Explore Other Programs
          </h2>
          <div className="w-16 h-1 bg-[#c72a7a] rounded-full mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherPrograms.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.id}
                  to={p.path}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-pink-200 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#c72a7a] flex items-center justify-center text-lg mb-4 group-hover:bg-[#c72a7a] group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-[#c72a7a] transition-colors mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{p.ageRange}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#c72a7a]">
                    Learn more
                    <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-[#c72a7a] rounded-3xl px-8 py-14 text-center">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-14 -right-10 w-64 h-64 bg-white/10 rounded-full" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Come See Our Classroom in Action
            </h2>
            <p className="text-pink-100 max-w-2xl mx-auto mb-8">
              The best way to know if we’re the right fit for your family is to
              visit. Book a tour, meet our educators, and watch the children at
              work and play.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-tour">
                <button className="bg-white text-[#c72a7a] px-8 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all shadow-md flex items-center gap-2">
                  <FaCalendarCheck />
                  Book a Tour
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                  <FaPhoneAlt className="text-sm" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const QuickFact = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 px-6 py-5">
    <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#c72a7a] flex items-center justify-center text-xl flex-shrink-0">
      <Icon />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
        {label}
      </p>
      <p className="text-gray-800 font-semibold text-sm md:text-base">
        {value}
      </p>
    </div>
  </div>
);

export default ProgramLayout;
