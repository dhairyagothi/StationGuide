// src/components/RailwayStations.jsx

import React, { useState } from 'react';
import { FaTrain } from 'react-icons/fa'; // Using FontAwesome train icon
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // Star icons for favorites

const RailwayStations = () => {
    // Comprehensive list of railway stations
    const stations = [
        'Mumbai Central',
        'Chhatrapati Shivaji Maharaj Terminus',
        'Delhi Junction',
        'Kolkata Chitpur',
        'Bangalore City',
        'Hyderabad Deccan',
        'Ahmedabad Junction',
        'Chennai Central',
        'Pune Junction',
        'Lucknow Charbagh',
        'Jaipur Junction',
        'Kanpur Central',
        'Nagpur Junction',
        'Surat Junction',
        'Patna Junction',
        'Indore Junction',
        'Vadodara Junction',
        'Bhopal Junction',
        'Guwahati Junction',
        'Amritsar Junction',
        'Secunderabad Junction',
        'Vijayawada Junction',
        'Cochin Ernakulam Junction',
        'Howrah Junction',
        'Dibrugarh Junction',
        'Thiruvananthapuram Central',
        'Visakhapatnam Junction',
        'Udaipur City',
        'Gwalior Junction',
        'Agra Cantonment',
        'Bareilly Junction',
        'Jammu Tawi',
        'Bhubaneswar',
        'Dehradun',
        'Mysore Junction',
        'Hubli Junction',
        'Kota Junction',
        'Srinagar Junction',
        'Varanasi Junction',
        'Allahabad Junction',
        'Mangalore Junction',
        'Bareilly Junction',
        'Amritsar Cantonment',
        'Jabalpur Junction',
        'Kalyan Junction',
        'Gurgaon Junction',
        'Bilaspur Junction',
        'Ranchi Junction',
        'Ujjain Junction',
        'Coimbatore Junction',
        'Tirupati',
        'Guntur Junction',
        'Kota Junction',
        'Siliguri Junction',
        'Nanded Junction',
        'Bikaner Junction',
        'Madurai Junction',
        'Rourkela Junction',
        'Jodhpur Junction',
        'Shri Mata Vaishno Devi Katra Railway Station',
        // Add more stations as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);

    // Function to toggle favorite stations
    const toggleFavorite = (station) => {
        if (favorites.includes(station)) {
            setFavorites(favorites.filter((fav) => fav !== station));
        } else {
            setFavorites([...favorites, station]);
        }
    };

    // Filter stations based on search term
    const filteredStations = stations.filter((station) =>
        station.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Railway Stations</h1>
                <p className="text-gray-600 mt-2">Find and explore railway stations across India</p>
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
                                    aria-label={favorites.includes(station) ? "Remove from favorites" : "Add to favorites"}
                                >
                                    {favorites.includes(station) ? <AiFillStar className="w-5 h-5" /> : <AiOutlineStar className="w-5 h-5" />}
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full p-4 text-center text-gray-500">No stations found.</div>
                    )}
                </div>
            </div>

            {/* Favorites Section (Optional) */}
            {favorites.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Favorite Stations</h2>
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
