import React, { useState, useEffect } from 'react';
import { IoCalendarOutline, IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

const BookingPage = () => {
  const [station, setStation] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);
  const [date, setDate] = useState(null); // Date initialized as null
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

  // Fetch station suggestions
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

  // Fetch service data for the selected station
  const fetchServiceData = async (stationId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/station/${stationId}/bookings`
      );
      const { coolieBookings, wheelchairBookings, cloakroomBookings } = response.data;

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
      setLoading(false);
    }
  };

  // Update service data when the selected station changes
  useEffect(() => {
    if (selectedStation) {
      fetchServiceData(selectedStation._id);
    }
  }, [selectedStation]);

  // Handle station input change
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

  // Handle station selection from suggestions
  const handleStationSelect = (station) => {
    setSelectedStation(station);
    setStation(station.name);
    setStationSuggestions([]);
    setError("");
  };

  // Handle booking action based on selected service
  const handleBookNow = (serviceId) => {
    setSelectedService(serviceId);
    setFormData({});
  };

  // Booking methods (Cloakroom, Coolie, Wheelchair)
  const bookCloakroom = async () => {
    try {
      const requestBody = {
        station: selectedStation._id,
        items: formData.items,
        startDate: formData.startDate,
        endDate: formData.endDate,
        price: 100,
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
        price: 250,
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
        price: 200,
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

  // Handle form submission based on selected service
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (selectedService === "cloak") {
      await bookCloakroom();
    } else if (selectedService === "coolie") {
      await bookCoolie();
    } else if (selectedService === "wheelchair") {
      await bookWheelchair();
    }
  };

  // Render booking form for selected service
  const renderBookingForm = () => {
    if (!selectedService) return null;

    if (selectedService === "cloak") {
      return (
        <form onSubmit={handleFormSubmit} className="mt-4">
          <h2 className="text-xl font-bold">Cloak Room Booking</h2>
          <label>
            Number of items:
            <input
              type="number"
              value={formData.items || ""}
              onChange={(e) => setFormData({ ...formData, items: e.target.value })}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            Start Date:
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            End Date:
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Submit Booking
          </button>
        </form>
      );
    } else if (selectedService === "coolie") {
      return (
        <form onSubmit={handleFormSubmit} className="mt-4">
          <h2 className="text-xl font-bold">Coolie Booking</h2>
          <label>
            Pickup Location:
            <input
              type="text"
              value={formData.pickupLocation || ""}
              onChange={(e) =>
                setFormData({ ...formData, pickupLocation: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            Departure Location:
            <input
              type="text"
              value={formData.departureLocation || ""}
              onChange={(e) =>
                setFormData({ ...formData, departureLocation: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            Booking Date:
            <DatePicker
              selected={formData.bookingDate}
              onChange={(date) =>
                setFormData({ ...formData, bookingDate: date })
              }
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            Booking Time:
            <input
              type="time"
              value={formData.bookingTime || ""}
              onChange={(e) =>
                setFormData({ ...formData, bookingTime: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Submit Booking
          </button>
        </form>
      );
    } else if (selectedService === "wheelchair") {
      return (
        <form onSubmit={handleFormSubmit} className="mt-4">
          <h2 className="text-xl font-bold">Wheelchair Booking</h2>
          <label>
            Booking Date:
            <DatePicker
              selected={formData.bookingDate}
              onChange={(date) =>
                setFormData({ ...formData, bookingDate: date })
              }
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label>
            Booking Time:
            <input
              type="time"
              value={formData.bookingTime || ""}
              onChange={(e) =>
                setFormData({ ...formData, bookingTime: e.target.value })
              }
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Submit Booking
          </button>
        </form>
      );
    }
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
              onClick={() => handleBookNow(service.id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {renderBookingForm()}
    </div>
  );
};

export default BookingPage;
