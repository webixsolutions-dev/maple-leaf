import { FaCheckCircle, FaChild, FaClock, FaUsers } from 'react-icons/fa';

const QuickInfo = () => {
  const items = [
    {
      icon: <FaCheckCircle className="text-pink-700 text-xl" />,
      bg: 'bg-pink-100',
      title: 'Licensed Facility',
      description: 'Licensed daycare operating in compliance with Alberta Child Care Standards.'
    },
    {
      icon: <FaChild className="text-pink-600 text-xl" />,
      bg: 'bg-pink-100',
      title: 'Ages 15 Months–6 Years',
      description: 'Programs thoughtfully designed to support every stage of early development.'
    },
    {
      icon: <FaClock className="text-pink-600 text-xl" />,
      bg: 'bg-pink-100',
      title: 'Open Mon–Fri',
      description: '7:00 AM – 6:00 PM. Convenient hours that support busy families.'
    },
    {
      icon: <FaUsers className="text-pink-600 text-xl" />,
      bg: 'bg-pink-100',
      title: 'Calgary, Alberta',
      description: 'Proudly serving families across Calgary and the surrounding areas.'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
              <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;