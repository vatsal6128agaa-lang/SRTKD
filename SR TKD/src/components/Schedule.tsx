
import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const Schedule = () => {
  const [todayIndex, setTodayIndex] = useState<number>(0);
  
  // Get today's day index (0 for Monday, 6 for Sunday)
  useEffect(() => {
    const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
    // Convert to our format (0 for Monday, 6 for Sunday)
    const adjustedIndex = today === 0 ? 6 : today - 1;
    setTodayIndex(adjustedIndex);
  }, []);
  
  const days = [
    { name: 'Mon', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Tue', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Wed', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Thu', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Fri', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Sat', opens: '06:30 am', closes: '09:30 pm', status: 'open' },
    { name: 'Sun', opens: '', closes: '', status: 'closed' },
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-tkd-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Training Hours</h2>
          </div>
          <div className="w-32 h-1 bg-tkd-red my-2 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Our dedicated training facility is open six days a week with flexible hours to accommodate your schedule.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-7 gap-4 reveal">
          {days.map((day, index) => (
            <div
              key={`schedule-${day.name}`}
              className={`border rounded-lg bg-white p-6 text-center transition-all duration-300 ${
                todayIndex === index 
                  ? 'shadow-lg border-tkd-red border-2 scale-105' 
                  : 'shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`text-xl font-bold mb-4 ${todayIndex === index ? 'text-tkd-red' : 'text-gray-800'}`}>
                {day.name}
                {todayIndex === index && <span className="ml-2 text-sm font-normal text-tkd-red">(Today)</span>}
              </div>
              
              {day.status === 'open' ? (
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-600 text-sm">Opens</div>
                    <div className="text-lg font-bold text-gray-800">{day.opens}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Closes</div>
                    <div className="text-lg font-bold text-gray-800">{day.closes}</div>
                  </div>
                </div>
              ) : (
                <div className="text-lg font-bold text-tkd-red py-4">Closed</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-600 italic">
          Class times vary throughout the day. Contact us for specific class schedules.
        </div>
      </div>
    </section>
  );
};

export default Schedule;
