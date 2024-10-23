import React, { useState, useEffect } from 'react';
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SchedulePage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Schedule';
  }, []);

  const [trainNumber, setTrainNumber] = useState('22436');
  const [trainName, setTrainName] = useState('Vande Bharat');
  const [nextStation, setNextStation] = useState('Indore Jn.');
  const [services, setServices] = useState('-SELECT-');
  const [platformDetails, setPlatformDetails] = useState('Platform 3');
  const [coachDetails, setCoachDetails] = useState('A4');
  //const [date, setDate] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <div 
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
        }}
      />

      <div className="relative w-full px-4 py-8 z-10">
        <div className="w-full max-w-md mx-auto flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <IoArrowBack size={24} />
            <span className="text-lg font-medium ml-2">Back</span>
          </button>
        </div>

        <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-center mb-6 py-2 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
            Train Schedule
          </h2>

          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <IoSearchOutline className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Train Number</label>
              <div className="relative">
                <input
                  type="text"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <IoSearchOutline className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Train Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={trainName}
                  onChange={(e) => setTrainName(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <IoSearchOutline className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Next Station</label>
              <input
                type="text"
                value={nextStation}
                onChange={(e) => setNextStation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Services</label>
              <select
                value={services}
                onChange={(e) => setServices(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="-SELECT-">-SELECT-</option>
                {/* @Select-- Add more options for SELECT */}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Platform Details</label>
              <input
                type="text"
                value={platformDetails}
                onChange={(e) => setPlatformDetails(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

         <div>
  <label className="block text-gray-700 font-semibold mb-2">Coach Details</label>
  <select
    value={coachDetails}
    onChange={(e) => setCoachDetails(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    required
  >
    <option value="">Select a coach</option>
    <option value="GN">GN - Unreserved</option>
    <option value="SL">SL - Sleeper</option>
    <option value="3A">3A - AC 3-Tier</option>
    <option value="2A">2A - AC 2-Tier</option>
    <option value="1A">1A - First class AC</option>
    <option value="CC">CC - AC Chair Car</option>
    <option value="EC">EC - Executive Chair Car</option>
    <option value="EA">EA - Executive Anubhuti</option>
    <option value="2S">2S - Second Sitting</option>
    <option value="FC">FC - First Class</option>
  </select>
</div>


            {/* <div>
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <div className="relative">
                {/* <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/YY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  popperClassName="z-50"
                /> }
              </div>
            </div> */}
          </div>

          <button className="w-full py-2 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
