import React, { useState } from 'react';
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SchedulePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [trainDetails, setTrainDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchTrain = async () => {
    if (!searchQuery) {
      setError('Please enter a train number to search');
      return;
    }

    setLoading(true);
    setError(null);

    const apiKey = ""; // Enter your Indian Rail API key
    const options = {
      method: 'GET',
      url: `https://indianrailapi.com/api/v2/TrainSchedule/apikey/${apiKey}/TrainNumber/${searchQuery}`,
    };

    try {
      const response = await axios.request(options);
      console.log("API Response Data:", response.data);

      if (response.data.ResponseCode === "200") {
        setTrainDetails(response.data.Route);
      } else {
        setError('No train details found');
      }
    } catch (error) {
      console.error(error);
      setError(error.message || 'An error occurred while fetching the train details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <div className="relative w-full px-4 py-8 flex items-center justify-center flex-col">
        <div className="w-full max-w-md mx-auto flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="text-white">
            <IoArrowBack size={24} />
            <span className="text-lg font-medium ml-2">Back</span>
          </button>
        </div>

        <div className="w-9/12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-center mb-6">Train Schedule</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Search by Train Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter train number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg"
              />
              <IoSearchOutline onClick={searchTrain} className="absolute right-3 top-2.5 cursor-pointer" size={20} />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {loading && <p>Loading...</p>}
          {trainDetails && (
            <div className="space-y-4">
              {trainDetails.map((stop) => (
                <div key={stop.SerialNo} className="border-b py-2">
                  <h3 className="font-semibold">{stop.StationName} ({stop.StationCode})</h3>
                  <p>Arrival Time: {stop.ArrivalTime}</p>
                  <p>Departure Time: {stop.DepartureTime}</p>
                  <p>Distance: {stop.Distance} km</p>
                </div>
              ))}
            </div>
          )}

          <button className="w-full py-2 mt-6 bg-blue-500 text-white" onClick={searchTrain}>
            Search Train
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
