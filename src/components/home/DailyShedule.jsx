import { FaSun, FaMoon, FaCoffee, FaBook, FaApple, FaBed, FaPlay, FaHome } from 'react-icons/fa';

const DailySchedule = () => {
  const schedule = [
    {
      time: '7:00 – 9:00 AM',
      title: 'Arrival, Free Play, Breakfast',
      description: 'Warm greetings, free play and connections, followed by a healthy breakfast.',
      icon: <FaSun className="text-2xl text-yellow-500" />
    },
    {
      time: '9:00 – 11:00 AM',
      title: 'Montessori Programming, Outdoor Time',
      description: 'Hands-on learning in prepared environments and time to play outside.',
      icon: <FaBook className="text-2xl text-blue-500" />
    },
    {
      time: '11:00 – 1:00 PM',
      title: 'Lunch, Rest / Nap Periods',
      description: 'Nutritious lunch and rest time to recharge bodies and minds.',
      icon: <FaBed className="text-2xl text-purple-500" />
    },
    {
      time: '1:00 – 3:30 PM',
      title: 'Afternoon Programming, Snack, Outdoor Rotation',
      description: 'Engaging activities, healthy snack, and outdoor play or movement.',
      icon: <FaPlay className="text-2xl text-green-500" />
    },
    {
      time: '3:30 – 6:00 PM',
      title: 'Parent Pickup, Wind-Down Activities',
      description: 'Calm activities, daily recap, and secure hand-off to families.',
      icon: <FaHome className="text-2xl text-primary-600" />
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Daily Routine</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
            A Day at Maple Leaf Montessori
          </h2>
          <p className="text-gray-600 mt-3">
            A predictable routine that provides structure, balance, and joyful learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6 last:mb-0">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;