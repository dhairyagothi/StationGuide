// src/components/RailwayStations.jsx

import React, { useState } from "react";
import { FaTrain } from "react-icons/fa"; // Using FontAwesome train icon
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons for favorites
import backicon from "../assets/svg/backicon.svg";
import { useNavigate } from "react-router-dom";
const RailwayStations = () => {
  // Comprehensive list of railway stations
  const stations = [
    // A
    "Agartala Railway Station",
    "Agra Cantonment",
    "Ahmedabad Junction",
    "Ahmednagar",
    "Aizawl",
    "Ajmer Junction",
    "Akola Junction",
    "Alappuzha",
    "Aligarh Junction",
    "Allahabad Junction (Prayagraj)",
    "Almora",
    "Ambala Cantonment",
    "Ambarnath",
    "Amritsar Junction",
    "Anand Junction",
    "Anand Vihar Terminal",
    "Anantnag",
    "Angul",
    "Ankleshwar Junction",
    "Arakkonam Junction",
    // B
    "Bangalore City Railway Station",
    "Bareilly Junction",
    "Bhopal Junction",
    "Bhubaneswar Railway Station",
    "Bhilai Nagar",
    "Bikaner Junction",
    "Bilaspur Junction",
    "Bokaro Steel City",
    "Bangalore Cantt",
    "Bangalore East",
    "Bangalore South",
    "Bangalore West",
    "Balurghat Junction",
    "Bhubaneswar Station",
    "Bhuj Junction",
    "Bikaner City",
    "Bokaro Town",
    // C
    "Chandigarh Junction",
    "Chennai Central",
    "Chennai Egmore",
    "Chennai Park",
    "Chennai Port",
    "Chennai Tambaram",
    "Chitradurga",
    "Chittaranjan",
    "Coimbatore Junction",
    "Cochin Ernakulam Junction",
    "Cooch Behar Junction",
    "Coonoor",
    // D
    "Dabhoi Junction",
    "Darbhanga Junction",
    "Darjiling",
    "Darjeeling",
    "Dharwad Junction",
    "Dharmavaram",
    "Delhi Junction",
    "Delhi Cantt",
    "Delhi Sarai Rohilla",
    "Delhi Anand Vihar",
    "Delhi Rajdhani",
    "Dhanbad Junction",
    "Dhanera Junction",
    "Dibrugarh Junction",
    "Dibrugarh Town",
    "Dibrugarh Station",
    "Dharamshala Junction",
    "Dharamshala Railway Station",
    // E
    "Ernakulam Junction",
    // F
    // G
    "Gwalior Junction",
    "Gurgaon Junction",
    "Guwahati Junction",
    "Gaya Junction",
    "Howrah Junction",
    "Hubli Junction",
    "Hyderabad Deccan",
    // H
    "Hazaribagh Junction",
    // I
    "Indore Junction",
    // J
    "Jabalpur Junction",
    "Jaipur Junction",
    "Jalandhar City",
    "Jammu Tawi",
    "Jodhpur Junction",
    // K
    "Kanpur Central",
    "Kalyan Junction",
    "Kolkata Chitpur (Howrah)",
    "Kharagpur Junction",
    "Kota Junction",
    // L
    "Lucknow Charbagh",
    "Ludhiana Junction",
    // M
    "Madurai Junction",
    "Mangalore Junction",
    "Mumbai Central",
    "Mumbai CST (Chhatrapati Shivaji Maharaj Terminus)",
    "Mysore Junction",
    // N
    "Nagpur Junction",
    "Nanded Junction",
    "New Delhi Railway Station",
    // O
    // P
    "Patna Junction",
    "Pune Junction",
    "Patiala Junction",
    "Panvel Junction",
    "Quilon Junction",
    // R
    "Ranchi Junction",
    "Rajkot Junction",
    "Rourkela Junction",
    // S
    "Secunderabad Junction",
    "Siliguri Junction",
    "Sonebhadra",
    "Surat Junction",
    // T
    "Thiruvananthapuram Central",
    "Trivandrum Central",
    "Tirupati Railway Station",
    // U
    "Udaipur City",
    "Ujjain Junction",
    // V
    "Vadodara Junction",
    "Varanasi Junction",
    "Vellore Cantt",
    "Vijayawada Junction",
    "Visakhapatnam Junction",
    // W
    "West Bengal Howrah",
    // Y
    "Yeshvantpur Junction",
    "Yelahanka Junction",
    // Z
    "Ziyadpur Junction",

    // Add more stations as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  
  // Function to toggle favorite stations
  const toggleFavorite = (station) => {
    if (favorites.includes(station)) {
      setFavorites(favorites.filter((fav) => fav !== station));
    } else {
      setFavorites([...favorites, station]);
    }
  };
  const HomeClick = () => {
    navigate("/"); // Navigates to the home page
  };

  // Filter stations based on search term
  const filteredStations = stations.filter((station) =>
    station.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div>
        <button onClick={HomeClick}>
          <img
            src={backicon}
            alt=""
            srcset=""
            className="fixed left-[1vh] h-[9vh] w-auto"
          />
        </button>
      </div>
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Railway Stations</h1>
        <p className="text-gray-600 mt-2">
          Find and explore railway stations across India
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a railway station..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
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
                  <span className="text-gray-800 font-medium">{station}</span>
                </div>
                <button
                  onClick={() => toggleFavorite(station)}
                  className="text-yellow-500 focus:outline-none"
                  aria-label={
                    favorites.includes(station)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.includes(station) ? (
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
