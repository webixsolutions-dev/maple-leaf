import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, location, rating, text }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-1 text-yellow-400 mb-3">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;