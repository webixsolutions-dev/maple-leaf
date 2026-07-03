import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProgramsPreview = () => {
  const programs = [
    {
      title: 'Infant Program',
      age: '15 months – 24 months',
      description: 'Nurturing care and gentle routines for your baby\'s early development.',
      link: '/programs/infant',
      bg: 'bg-blue-50'
    },
    {
      title: 'Toddler Program',
      age: '2 years – 3 years',
      description: 'Hands-on exploration, independence, and social skills for growing toddlers.',
      link: '/programs/toddler',
      bg: 'bg-green-50'
    },
    {
      title: 'Preschool / Montessori Casa',
      age: '3 years – 6 years',
      description: 'Prepared environment for confident learners ready for the future.',
      link: '/programs/preschool',
      bg: 'bg-warm-50'
    },
    {
      title: 'Before & After School Care',
      age: 'Kindergarten – Grade 6',
      description: 'Safe, supportive care with homework help and fun enrichment activities.',
      link: '/programs/after-school',
      bg: 'bg-purple-50'
    },
    {
      title: 'Summer Programs & Camps',
      age: 'Ages 2 – 6 years',
      description: 'Engaging themes, outdoor adventures, and hands-on learning all summer long!',
      link: '/programs/summer',
      bg: 'bg-yellow-50'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
            Programs for Every Stage of Early Learning
          </h2>
          <p className="text-gray-600 mt-3">
            At Maple Leaf Montessori, we offer licensed Montessori-based daycare and preschool programs 
            in Calgary for children ages 15 months to 6 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className={`${program.bg} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
              <h3 className="text-xl font-heading font-semibold text-gray-900">{program.title}</h3>
              <p className="text-sm text-primary-600 font-medium mt-1">{program.age}</p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{program.description}</p>
              <Link to={program.link} className="inline-flex items-center text-primary-600 font-medium mt-4 hover:text-primary-700 transition-colors">
                Learn More <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs">
            <button className="btn-primary">
              View All Programs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;