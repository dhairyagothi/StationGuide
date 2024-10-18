import React, { useState } from "react";
import stations from "../dataset/stations"; // Adjust the path as necessary

const StationSearch = ({ onSelectStation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStations, setFilteredStations] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = stations.filter((station) =>
        station.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStations(filtered);
    } else {
      setFilteredStations([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a station..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      {filteredStations.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-lg">
          {filteredStations.map((station) => (
            <li
              key={station.id}
              onClick={() => onSelectStation(station)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {station.name} - {station.code} ({station.zone})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationSearch;
