import React, { useState, useEffect } from "react";
import { FaTrain } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg";
import allStations from "../dataset/stations.js";

const RailwayStations = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Stations';
  }, []);

  const navigate = useNavigate();
  const HomeClick = () => {
    navigate("/"); // Navigates to the home page
  };

  const [stations, setStations] = useState(allStations);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedZone, setSelectedZone] = useState("All");
  const [loading, setLoading] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [stationsPerPage] = useState(30); // Increased the number of stations per page to 20

  // Define the zones array
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
    ["DFCR", "DEDICATED FREIGHT CORRIDOR"],
    ["CP", "CHENNAI PORT TRUSTRAILWAY"],
    ["CR", "CENTRAL RAILWAY"],
    ["ECR", "EAST CENTRAL RAILWAY"],
    ["NPLR", "NEPAL RAILWAY"],
    ["MRK", "METRO RAILWAY KOLKATA"],
  ];

  // Function to toggle favorite stations
  const toggleFavorite = (station) => {
    if (favorites.includes(station)) {
      setFavorites(favorites.filter((fav) => fav !== station));
    } else {
      setFavorites([...favorites, station]);
    }
  };

  // Filter stations based on search term and selected zone
  const filteredStations = stations.filter((station) => {
    const matchesSearch = station.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesState =
      selectedZone === "All" || station.zone === selectedZone;
    return matchesSearch && matchesState;
  });

  // Paginate stations: get the stations to display for the current page
  const indexOfLastStation = currentPage * stationsPerPage;
  const indexOfFirstStation = indexOfLastStation - stationsPerPage;
  const currentStations = filteredStations.slice(indexOfFirstStation, indexOfLastStation);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredStations.length / stationsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next and previous button clicks
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Get pagination buttons (limit the number of visible page numbers)
  const getPaginationRange = () => {
    const range = [];
    const maxButtonsToShow = 5; // Limit to 5 page numbers shown at once

    // Display the first page, last page, and some pages in between
    let start = Math.max(currentPage - Math.floor(maxButtonsToShow / 2), 1);
    let end = Math.min(start + maxButtonsToShow - 1, totalPages);

    // Adjust the range if there are too few pages before the current page
    if (end - start + 1 < maxButtonsToShow) {
      start = Math.max(end - maxButtonsToShow + 1, 1);
    }

    // Push the page numbers into the range array
    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/all-stations")
      .then((e) => e.json())
      .then((e) => {
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
      <div className="relative h-screen bg-gray-100">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin relative top-[50%] left-[50%]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div>
        <button onClick={HomeClick} className="absolute left-0 top-2">
          <img src={backicon} alt="" className="h-[5vh]" />
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
            {currentStations.length > 0 ? (
              currentStations.map((station, index) => (
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

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md disabled:opacity-50"
          >
            Prev
          </button>

          {getPaginationRange().map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Your Favorite Stations</h2>
  
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
