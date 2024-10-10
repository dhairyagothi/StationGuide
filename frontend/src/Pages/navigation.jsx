import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { stationsData } from './stationdata';

const NavigationPage = () => {
  const [departure, setDeparture] = useState('');  // Departure station
  const [destination, setDestination] = useState('');  // Destination station
  const [trains, setTrains] = useState([]);  // Trains available between stations
  const [error, setError] = useState('');  // Error message

  // Handle search for trains between stations
  const handleSearch = () => {
    setError('');  // Clear any previous errors
    setTrains([]);  // Clear previous results

    if (!stationsData[departure] || !stationsData[destination]) {
      setError('Invalid station(s) entered.');
      return;
    }

    const availableTrains = stationsData[departure].trains.filter(
      (train) => train.destination === destination
    );

    if (availableTrains.length > 0) {
      setTrains(availableTrains);  // Set the available trains
    } else {
      setError('No trains available between these stations.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Search Inputs for Departure and Destination */}
      <div className="flex items-center w-full max-w-lg mb-6">
        <input
          type="text"
          placeholder="Enter Departure Station"
          className="flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}  // Update departure input
        />
        <input
          type="text"
          placeholder="Enter Destination Station"
          className="flex-grow p-4 border border-gray-300 focus:outline-none"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}  // Update destination input
        />
        <button
          className="p-4 bg-blue-600 text-white rounded-r-lg"
          onClick={handleSearch}  // Trigger the search
        >
          <FaSearch />
        </button>
      </div>

      {/* Show Trains Available */}
      {trains.length > 0 ? (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trains Available:</h2>
          <ul>
            {trains.map((train, index) => (
              <li key={index} className="flex justify-between items-center border-b py-4">
                <div>
                  <span className="font-medium text-gray-800">{train.name}</span>
                  <span className="text-sm text-gray-600 ml-2">({train.number})</span>
                </div>
                <div className="text-lg text-blue-600">{train.time}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default NavigationPage;
