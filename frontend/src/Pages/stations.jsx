
import React, { useState , useEffect} from "react";

import { FaTrain } from "react-icons/fa"; // Using FontAwesome train icon
import { AiFillCaretDown, AiFillCaretUp, AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons for favorites
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg";
import { div, h1 } from "framer-motion/client";
import allStations from "../dataset/stations.js"


const RailwayStations = () => {

  useEffect(() => {
    document.title = 'Station Saarthi | Stations'; 
  }, []);


  // Comprehensive list of railway stations with zones

  const navigate = useNavigate();

  const HomeClick = () => {
    navigate("/"); // Navigates to the home page
  };

  const [stations, setStations] = useState(allStations);


  const zones = [
    ["All", "All"],
    ["ECOR", "EAST COAST RAILWAY"],
    ["ER", "EASTERN RAILWAY"],
    ["NCR", "NORTH CENTRAL RAILWAY"],
    ["NER", "NORTH EASTERN RAILWAY"],
    ["NFR", "NORTH FRONTIER RAILWAY"],
    ["NR", "NORTHERN RAILWAY"],
    ["NWR", "NORTH WESTERN RAILWAY"],
    ["SECR", "SOUTHEAST CENTRAL RAILWAY"],
    ["SCR", "SOUTH CENTRAL RAILWAY"],
    ["SER", "SOUTH EASTERN  RAILWAY"],
    ["SR", "SOUTHERN RAILWAY"],
    ["SWR", "SOUTH WESTERN RAILWAY"],
    ["WCR", "WEST CENTRAL RAILWAY"],
    ["WR", "WESTERN RAILWAY"],
    ["BR", "BANGLADESH RAILWAY"],
    ["CPT", "Kolkata Port Trust Rly."],
    ["DFCR", "DEDICATED FREIGHT CORRIDO"],
    ["CP", "CHENNAI PORT TRUSTRAILWAY"],
    ["CR", "CENTRAL RAILWAY"],
    ["ECR", "EAST CENTRAL RAILWAY"],
    ["NPLR", "NEPAL RAILWAY"],
    ["MRK", "METRO RAILWAY KOLKATA"],
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedZone, setSelectedZone] = useState("All");
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false); 

  // Function to toggle favorite stations
  const toggleFavorite = (station) => {
    if (favorites.includes(station)) {
      setFavorites(favorites.filter((fav) => fav !== station));
    } else {
      setFavorites([...favorites, station]);
      console.log(favorites);
    }
  };

  // Filter stations based on search term and selected state
  const filteredStations = stations.filter((station) => {
    const matchesSearch = station.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesState =
      selectedZone === "All" || station.zone === selectedZone;
    return matchesSearch && matchesState;
  });

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/all-stations")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        console.log(e);
        setStations(e);
      })
      .catch((err) => {
        console.log("Error in fetch : ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="relative bg-gray-100 h-screen">
        <div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin relative top-[50%] left-[50%]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div>
        <button onClick={HomeClick}>
          <img src={backicon} alt="" className="fixed left-[1vh] h-[9vh] w-auto" />
        </button>
      </div>
  
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Railway Stations</h1>
        <p className="mt-2 text-gray-600">
          Find and explore railway stations across India
        </p>
      </div>
  
      {/* Main Content: Stations Grid */}
      <div>
        {/* Search Bar and State Filter */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for a railway station..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="px-4 py-2 ml-4 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {zones.map((zone, index) => (
              <option key={index} value={zone[0]}>
                {zone[1]}
              </option>
            ))}
          </select>
        </div>
  
        {/* Stations Grid */}
        <div className="flex justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredStations.length > 0 ? (
              filteredStations.map((station, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 transition duration-200 bg-white rounded-lg shadow hover:shadow-lg"
                >
                  <div className="flex items-center">
                    <FaTrain className="w-6 h-6 mr-3 text-blue-500" />
                    <span className="font-medium text-gray-800">
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
              <div className="p-4 text-center text-gray-500 col-span-full">
                No stations found.
              </div>
            )}
          </div>
        </div>
      </div>
  
      {/* Favorites Section - Moved to the Last */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Favorite Stations</h2>
  
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {favorites.map((station, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 transition duration-200 bg-yellow-100 rounded-lg shadow hover:shadow-lg"
              >
                <div className="flex items-center">
                  <FaTrain className="w-6 h-6 mr-3 text-yellow-500" />
                  <span className="font-medium text-gray-800">{station}</span>
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
        ) : (
          <p className="text-gray-600">No favorite stations selected.</p>
        )}
      </div>
    </div>
  );
  
};

export default RailwayStations;
