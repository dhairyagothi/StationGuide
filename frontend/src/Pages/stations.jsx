// src/components/RailwayStations.jsx

import React, { useState } from "react";
import { FaTrain } from "react-icons/fa"; // Using FontAwesome train icon
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons for favorites

const RailwayStations = () => {
  // Comprehensive list of railway stations with states
  const stations = [
    { name: "Agartala Railway Station", state: "Tripura" },
    { name: "Agra Cantonment", state: "Uttar Pradesh" },
    { name: "Ahmedabad Junction", state: "Gujarat" },
    { name: "Ahmednagar", state: "Maharashtra" },
    { name: "Aizawl", state: "Mizoram" },
    { name: "Ajmer Junction", state: "Rajasthan" },
    { name: "Akola Junction", state: "Maharashtra" },
    { name: "Alappuzha", state: "Kerala" },
    { name: "Aligarh Junction", state: "Uttar Pradesh" },
    { name: "Allahabad Junction (Prayagraj)", state: "Uttar Pradesh" },
    { name: "Almora", state: "Uttarakhand" },
    { name: "Ambala Cantonment", state: "Haryana" },
    { name: "Ambarnath", state: "Maharashtra" },
    { name: "Amritsar Junction", state: "Punjab" },
    { name: "Anand Junction", state: "Gujarat" },
    { name: "Anand Vihar Terminal", state: "Delhi" },
    { name: "Anantnag", state: "Jammu and Kashmir" },
    { name: "Angul", state: "Odisha" },
    { name: "Ankleshwar Junction", state: "Gujarat" },
    { name: "Arakkonam Junction", state: "Tamil Nadu" },
    { name: "Bangalore City Railway Station", state: "Karnataka" },
    { name: "Bareilly Junction", state: "Uttar Pradesh" },
    { name: "Bhopal Junction", state: "Madhya Pradesh" },
    { name: "Bhubaneswar Railway Station", state: "Odisha" },
    { name: "Bhilai Nagar", state: "Chhattisgarh" },
    { name: "Bikaner Junction", state: "Rajasthan" },
    { name: "Bilaspur Junction", state: "Chhattisgarh" },
    { name: "Bokaro Steel City", state: "Jharkhand" },
    { name: "Bangalore Cantt", state: "Karnataka" },
    { name: "Bangalore East", state: "Karnataka" },
    { name: "Bangalore South", state: "Karnataka" },
    { name: "Bangalore West", state: "Karnataka" },
    { name: "Balurghat Junction", state: "West Bengal" },
    { name: "Bhubaneswar Station", state: "Odisha" },
    { name: "Bhuj Junction", state: "Gujarat" },
    { name: "Bikaner City", state: "Rajasthan" },
    { name: "Bokaro Town", state: "Jharkhand" },
    { name: "Chandigarh Junction", state: "Chandigarh" },
    { name: "Chennai Central", state: "Tamil Nadu" },
    { name: "Chennai Egmore", state: "Tamil Nadu" },
    { name: "Chennai Park", state: "Tamil Nadu" },
    { name: "Chennai Port", state: "Tamil Nadu" },
    { name: "Chennai Tambaram", state: "Tamil Nadu" },
    { name: "Chitradurga", state: "Karnataka" },
    { name: "Chittaranjan", state: "West Bengal" },
    { name: "Coimbatore Junction", state: "Tamil Nadu" },
    { name: "Cochin Ernakulam Junction", state: "Kerala" },
    { name: "Cooch Behar Junction", state: "West Bengal" },
    { name: "Coonoor", state: "Tamil Nadu" },
    { name: "Dabhoi Junction", state: "Gujarat" },
    { name: "Darbhanga Junction", state: "Bihar" },
    { name: "Darjiling", state: "West Bengal" },
    { name: "Darjeeling", state: "West Bengal" },
    { name: "Dharwad Junction", state: "Karnataka" },
    { name: "Dharmavaram", state: "Andhra Pradesh" },
    { name: "Delhi Junction", state: "Delhi" },
    { name: "Delhi Cantt", state: "Delhi" },
    { name: "Delhi Sarai Rohilla", state: "Delhi" },
    { name: "Delhi Anand Vihar", state: "Delhi" },
    { name: "Delhi Rajdhani", state: "Delhi" },
    { name: "Dhanbad Junction", state: "Jharkhand" },
    { name: "Dhanera Junction", state: "Gujarat" },
    { name: "Dibrugarh Junction", state: "Assam" },
    { name: "Dibrugarh Town", state: "Assam" },
    { name: "Dibrugarh Station", state: "Assam" },
    { name: "Dharamshala Junction", state: "Himachal Pradesh" },
    { name: "Dharamshala Railway Station", state: "Himachal Pradesh" },
    { name: "Ernakulam Junction", state: "Kerala" },
    { name: "Gwalior Junction", state: "Madhya Pradesh" },
    { name: "Gurgaon Junction", state: "Haryana" },
    { name: "Guwahati Junction", state: "Assam" },
    { name: "Gaya Junction", state: "Bihar" },
    { name: "Howrah Junction", state: "West Bengal" },
    { name: "Hubli Junction", state: "Karnataka" },
    { name: "Hyderabad Deccan", state: "Telangana" },
    { name: "Hazaribagh Junction", state: "Jharkhand" },
    { name: "Indore Junction", state: "Madhya Pradesh" },
    { name: "Jabalpur Junction", state: "Madhya Pradesh" },
    { name: "Jaipur Junction", state: "Rajasthan" },
    { name: "Jalandhar City", state: "Punjab" },
    { name: "Jammu Tawi", state: "Jammu and Kashmir" },
    { name: "Jodhpur Junction", state: "Rajasthan" },
    { name: "Kanpur Central", state: "Uttar Pradesh" },
    { name: "Kalyan Junction", state: "Maharashtra" },
    { name: "Kolkata Chitpur (Howrah)", state: "West Bengal" },
    { name: "Kharagpur Junction", state: "West Bengal" },
    { name: "Kota Junction", state: "Rajasthan" },
    { name: "Lucknow Charbagh", state: "Uttar Pradesh" },
    { name: "Ludhiana Junction", state: "Punjab" },
    { name: "Madurai Junction", state: "Tamil Nadu" },
    { name: "Mangalore Junction", state: "Karnataka" },
    { name: "Mumbai Central", state: "Maharashtra" },
    {
      name: "Mumbai CST (Chhatrapati Shivaji Maharaj Terminus)",
      state: "Maharashtra",
    },
    { name: "Mysore Junction", state: "Karnataka" },
    { name: "Nagpur Junction", state: "Maharashtra" },
    { name: "Nanded Junction", state: "Maharashtra" },
    { name: "New Delhi Railway Station", state: "Delhi" },
    { name: "Patna Junction", state: "Bihar" },
    { name: "Pune Junction", state: "Maharashtra" },
    { name: "Patiala Junction", state: "Punjab" },
    { name: "Panvel Junction", state: "Maharashtra" },
    { name: "Quilon Junction", state: "Kerala" },
    { name: "Ranchi Junction", state: "Jharkhand" },
    { name: "Rajkot Junction", state: "Gujarat" },
    { name: "Rourkela Junction", state: "Odisha" },
    { name: "Secunderabad Junction", state: "Telangana" },
    { name: "Siliguri Junction", state: "West Bengal" },
    { name: "Sonebhadra", state: "Uttar Pradesh" },
    { name: "Surat Junction", state: "Gujarat" },
    { name: "Thiruvananthapuram Central", state: "Kerala" },
    { name: "Trivandrum Central", state: "Kerala" },
    { name: "Tirupati Railway Station", state: "Andhra Pradesh" },
    { name: "Udaipur City", state: "Rajasthan" },
    { name: "Ujjain Junction", state: "Madhya Pradesh" },
    { name: "Vadodara Junction", state: "Gujarat" },
    { name: "Varanasi Junction", state: "Uttar Pradesh" },
    { name: "Vellore Cantt", state: "Tamil Nadu" },
    { name: "Vijayawada Junction", state: "Andhra Pradesh" },
    { name: "Visakhapatnam Junction", state: "Andhra Pradesh" },
    { name: "West Bengal Howrah", state: "West Bengal" },
    { name: "Yeshvantpur Junction", state: "Karnataka" },
    { name: "Yelahanka Junction", state: "Karnataka" },
    { name: "Ziyadpur Junction", state: "Unknown" }, // Replace "Unknown" with the correct state if known
    // Add more stations as needed
  ];

  const states = [
    "All",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedState, setSelectedState] = useState("All");

  // Function to toggle favorite stations
  const toggleFavorite = (station) => {
    if (favorites.includes(station)) {
      setFavorites(favorites.filter((fav) => fav !== station));
    } else {
      setFavorites([...favorites, station]);
    }
  };

  // Filter stations based on search term and selected state
  const filteredStations = stations.filter((station) => {
    const matchesSearch = station.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesState =
      selectedState === "All" || station.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Railway Stations</h1>
        <p className="text-gray-600 mt-2">
          Find and explore railway stations across India
        </p>
      </div>

      {/* Search Bar and State Filter */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a railway station..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Stations Grid */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredStations.length > 0 ? (
            filteredStations.map((station, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                <div className="flex items-center">
                  <FaTrain className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-800 font-medium">
                    {station.name}
                  </span>
                </div>
                <button
                  onClick={() => toggleFavorite(station.name)}
                  className="text-yellow-500 focus:outline-none"
                  aria-label={
                    favorites.includes(station.name)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.includes(station.name) ? (
                    <AiFillStar className="w-5 h-5" />
                  ) : (
                    <AiOutlineStar className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full p-4 text-center text-gray-500">
              No stations found.
            </div>
          )}
        </div>
      </div>

      {/* Favorites Section (Optional) */}
      {favorites.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Favorite Stations
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {favorites.map((station, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition duration-200"
                >
                  <div className="flex items-center">
                    <FaTrain className="text-yellow-500 w-6 h-6 mr-3" />
                    <span className="text-gray-800 font-medium">{station}</span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(station)}
                    className="text-red-500 focus:outline-none"
                    aria-label="Remove from favorites"
                  >
                    <AiFillStar className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RailwayStations;
