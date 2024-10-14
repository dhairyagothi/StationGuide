

import React, { useState, useEffect } from 'react';
import { IoCalendarOutline, IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

const socket = io("http://localhost:3000");
const BookingPage = () => {
  const [station, setStation] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);
  const [date, setDate] = useState("");
  const [services, setServices] = useState([
    { id: "cloak", name: "Cloak Room Booking", availability: 0 },
    { id: "wheelchair", name: "Wheelchair Booking", availability: 0 },
    { id: "coolie", name: "Coolie Booking", availability: 0 },
  ]);
  const [stationSuggestions, setStationSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const fetchStationSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3000/station/`);
      if (response.data.length > 0) {
        setStationSuggestions(response.data);
        setNoResults(false);
      } else {
        setStationSuggestions([]);
        setNoResults(true);
      }
    } catch (err) {
      setError("Error fetching station suggestions. Please try again.");
      setNoResults(false);
    }
  };

  const fetchServiceData = async (stationId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/station/${stationId}/bookings`
      );
      const { coolieBookings, wheelchairBookings, cloakroomBookings } =
        response.data;

      setServices([
        {
          id: "cloak",
          name: "Cloak Room Booking",
          availability: cloakroomBookings.length,
        },
        {
          id: "wheelchair",
          name: "Wheelchair Booking",
          availability: wheelchairBookings.length,
        },
        {
          id: "coolie",
          name: "Coolie Booking",
          availability: coolieBookings.length,
        },

      ]);

      setLoading(false);
    } catch (err) {

      setError("Error fetching service data. Please try again.");

      setError('Error fetching service data. Please try again.');

      setLoading(false);
    }
  };


  useEffect(() => {
    if (selectedStation) {
      fetchServiceData(selectedStation._id);
    }
  }, [selectedStation]);

  const handleStationInputChange = (e) => {
    const value = e.target.value;
    setStation(value);
    setError("");

    if (value.length > 2) {
      fetchStationSuggestions(value);
    } else {
      setStationSuggestions([]);
      setNoResults(false);
    }
  };

  const handleStationSelect = (station) => {
    setSelectedStation(station);
    setStation(station.name);
    setStationSuggestions([]);
    setError("");
  };

  const handleBookNow = (serviceId) => {
    setSelectedService(serviceId);
    setFormData({});
  };

  const bookCloakroom = async () => {
    try {
      const requestBody = {
        station: selectedStation._id,
        items: formData.items,
        startDate: formData.startDate,
        endDate: formData.endDate,
        price: 100, // Set cloakroom price
      };

      await axios.post(`http://localhost:3000/api/bookCloakroom`, requestBody);
      alert("Cloakroom booking successful!");
    } catch (error) {
      alert(
        "Failed to complete the booking: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  const bookCoolie = async () => {
    try {
      const requestBody = {
        station: selectedStation._id,
        pickupLocation: formData.pickupLocation,
        departureLocation: formData.departureLocation,
        bookingDate: formData.bookingDate,
        bookingTime: formData.bookingTime,
        price: 250, // Set coolie price
      };

      await axios.post(`http://localhost:3000/api/bookCoolie`, requestBody);
      alert("Coolie booking successful!");
    } catch (error) {
      alert(
        "Failed to complete the booking: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  const bookWheelchair = async () => {
    try {
      const requestBody = {
        station: selectedStation._id,
        bookingDate: formData.bookingDate,
        bookingTime: formData.bookingTime,
        price: 200, // Set wheelchair price
      };

      await axios.post(`http://localhost:3000/api/bookWheelchair`, requestBody);
      alert("Wheelchair booking successful!");
    } catch (error) {
      alert(
        "Failed to complete the booking: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (selectedService === "bookCloakroom") {
      await bookCloakroom();
    } else if (selectedService === "bookCoolie") {
      await bookCoolie();
    } else if (selectedService === "bookWheelchair") {
      await bookWheelchair();
    }
  };

  const renderBookingForm = () => {
    return (
      <div className="bg-white border border-gray-300 shadow-lg p-6 mt-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-xl">
        {selectedService === "bookCloakroom" && (
          <>
            <h3 className="text-xl font-semibold mb-4">
              Cloak Room Booking Form
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Items</label>
                <input
                  type="text"
                  value={formData.items || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, items: e.target.value })
                  }
                  placeholder="Items"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Storage Start Date
                </label>
                <input
                  type="date"
                  value={formData.startDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Storage End Date
                </label>
                <input
                  type="date"
                  value={formData.endDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Charges
                </label>
                <input
                  type="number"
                  value={100}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}

        {selectedService === "bookCoolie" && (
          <>
            <h3 className="text-xl font-semibold mb-4">Coolie Booking Form</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={formData.pickupLocation || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupLocation: e.target.value })
                  }
                  placeholder="Pickup Location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Departure Location
                </label>
                <input
                  type="text"
                  value={formData.departureLocation || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      departureLocation: e.target.value,
                    })
                  }
                  placeholder="Departure Location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Booking Date
                </label>
                <input
                  type="date"
                  value={formData.bookingDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Booking Time
                </label>
                <input
                  type="time"
                  value={formData.bookingTime || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingTime: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Charges
                </label>
                <input
                  type="number"
                  value={250}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}

        {selectedService === "bookWheelchair" && (
          <>
            <h3 className="text-xl font-semibold mb-4">
              Wheelchair Booking Form
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Booking Date
                </label>
                <input
                  type="date"
                  value={formData.bookingDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Booking Time
                </label>
                <input
                  type="time"
                  value={formData.bookingTime || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingTime: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Charges
                </label>
                <input
                  type="number"
                  value={200}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 text-gray-700 hover:text-blue-600 transition duration-200"
      >
        <IoArrowBack className="mr-2" />
        Go Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Booking Page</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Search for a Station</label>
        <input
          type="text"
          value={station}
          onChange={handleStationInputChange}
          placeholder="Type to search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        {noResults && <p className="text-red-600">No results found.</p>}
      </div>

      {stationSuggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 shadow-md mt-2 rounded-lg">
          {stationSuggestions.map((suggestion) => (
            <li
              key={suggestion._id}
              onClick={() => handleStationSelect(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}

      {loading && <p className="text-blue-600">Loading services...</p>}

      <div className="flex flex-wrap justify-between mt-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-1 mb-4 mx-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-150 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
            <div className="flex">
              {service.availability > 0 ? (
                <span className="text-green-500 font-bold text-lg">●</span>
              ) : (
                <span className="text-red-500 font-bold text-lg">●</span>
              )}
              <p className="mt-1">Available: {service.availability}</p>
            </div>
            <button
              onClick={() => handleBookNow(`book${service.name.split(" ")[0]}`)}
              className={`mt-2 w-full py-2 text-white rounded-lg ${
                service.availability > 0
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={service.availability === 0}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedService && renderBookingForm()}
=======
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

        {/* Station Input */}
        <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-center mb-6 py-2 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
            Station Services
          </h2>

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
              />
              <IoCalendarOutline 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                size={20} 
              />
            </div>
          </div>

          {/* Render Services */}
          {loading ? (
            <p>Loading services...</p>
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
