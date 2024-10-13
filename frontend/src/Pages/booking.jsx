import React, { useState, useEffect } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

const BookingPage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Booking'; 
  }, []);
  
  const [station, setStation] = useState('');
  const [date, setDate] = useState(null); // Initial date state
  const navigate = useNavigate();

  const services = [
    { 
      id: 'cloak', 
      name: 'Cloak Room Booking', 
      availability: 20 
    },
    { 
      id: 'wheelchair', 
      name: 'Wheel Chair Booking', 
      availability: 5 
    },
    { 
      id: 'coolie', 
      name: 'Coolie Booking', 
      availability: 12 
    }
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Background wrapper */}
      <div 
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
        }}
      />

      {/* Content wrapper */}
      <div className="relative w-full px-4 py-8 z-10">
        {/* Back button container */}
        <div className="w-full max-w-md mx-auto flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <IoArrowBack size={24} />
            <span className="text-lg font-medium ml-2">Back</span>
          </button>
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-center mb-6 py-2 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
            Station Services
          </h2>

          {/* Station input */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Station</label>
            <input
              type="text"
              value={station}
              onChange={(e) => setStation(e.target.value)}
              placeholder="Enter Station Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Date input with calendar */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <div className="relative">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)} // Update date state
                dateFormat="dd/MM/yyyy" // Set your desired date format
                placeholderText="DD/MM/YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                popperClassName="z-50" // Adjust z-index of the date picker
                onClickOutside={() => setDate(null)} // Close calendar on outside click
              />
              <IoCalendarOutline 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                size={20} 
                onClick={() => setDate(new Date())} // Open calendar on icon click
                onMouseDown={(e) => e.preventDefault()} // Prevent input focus on icon click
              />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-800 font-semibold">{service.name}</h3>
                  <span className="text-green-500 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Available: {service.availability}
                  </span>
                </div>
                <button className="w-full py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
