import React, { useState, useEffect } from 'react';
import { IoCalendarOutline, IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles
import axios from 'axios';

const BookingPage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Booking'; 
  }, []);
  
  const [station, setStation] = useState('');  // Holds the typed input
  const [selectedStation, setSelectedStation] = useState(null); // Holds the selected station
  const [date, setDate] = useState(null); // Initial date state
  const [services, setServices] = useState([
    { id: 'cloak', name: 'Cloak Room Booking', availability: 0 },
    { id: 'wheelchair', name: 'Wheelchair Booking', availability: 0 },
    { id: 'coolie', name: 'Coolie Booking', availability: 0 }
  ]);
  const [stationSuggestions, setStationSuggestions] = useState([]); // Holds station suggestions
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Track errors
  const [noResults, setNoResults] = useState(false); // Track if no stations are found
  const navigate = useNavigate();

  // Fetch stations suggestions as the user types
  const fetchStationSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3000/station/`);
      
      if (response.data.length > 0) {
        setStationSuggestions(response.data); // The response should include station _id and name
        setNoResults(false); // Reset no results flag
      } else {
        setStationSuggestions([]);
        setNoResults(true); // Set flag if no matching stations are found
      }
    } catch (err) {
      setError("Error fetching station suggestions. Please try again.");
      setNoResults(false); // Clear no results if there’s an error
    }
  };

  // Function to fetch service availability data from the backend
  const fetchServiceData = async (stationId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/station/${stationId}/bookings`);
      const { coolieBookings, wheelchairBookings, cloakroomBookings } = response.data;

      // Update the availability in the services array
      setServices([
        { id: 'cloak', name: 'Cloak Room Booking', availability: cloakroomBookings.length },
        { id: 'wheelchair', name: 'Wheelchair Booking', availability: wheelchairBookings.length },
        { id: 'coolie', name: 'Coolie Booking', availability: coolieBookings.length }
      ]);

      setLoading(false);
    } catch (err) {
      setError('Error fetching service data. Please try again.');
      setLoading(false);
    }
  };

  // Fetch service availability when the selected station is updated
  useEffect(() => {
    if (selectedStation) {
      fetchServiceData(selectedStation._id);  // Assuming station ID is _id
    }
  }, [selectedStation]);

  // Handle station input change
  const handleStationInputChange = (e) => {
    const value = e.target.value;
    setStation(value);
    setError(''); // Clear error message on input change

    if (value.length > 2) {
      // Fetch station suggestions when input has more than 2 characters
      fetchStationSuggestions(value);
    } else {
      setStationSuggestions([]); // Clear suggestions if input is too short
      setNoResults(false); // Clear no results if input is too short
    }
  };

  // Handle station selection from suggestions
  const handleStationSelect = (station) => {
    setSelectedStation(station); // Set the selected station
    setStation(station.name); // Update the input value with the selected station's name
    setStationSuggestions([]); // Clear the suggestions after selection
    setError(''); // Clear any previous errors
  };

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

        <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-center mb-6 py-2 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
            Station Services
          </h2>

          {/* Station Input */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Station</label>
            <input
              type="text"
              value={station}
              onChange={handleStationInputChange}
              placeholder="Enter Station Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />

            {/* Station suggestions dropdown */}
            {stationSuggestions.length > 0 && (
              <ul className="border border-gray-300 bg-white mt-2 rounded-lg max-h-60 overflow-auto">
                {stationSuggestions.map((suggestion) => (
                  <li
                    key={suggestion._id}
                    onClick={() => handleStationSelect(suggestion)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}

            {/* Handle no results found */}
            {noResults && (
              <p className="text-red-500 mt-2">No stations found matching your search.</p>
            )}

            {/* Handle errors */}
            {error && (
              <p className="text-red-500 mt-2">{error}</p>
            )}
          </div>

          {/* Render Services */}
          {loading ? (
            <p>Loading services...</p>
          ) : error && !stationSuggestions.length ? (
            <p className="text-red-500">{error}</p>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
