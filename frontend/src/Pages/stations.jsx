
import React, { useState , useEffect} from "react";

import { FaTrain } from "react-icons/fa"; // Using FontAwesome train icon
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons for favorites
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

  // const stations = [
  //   { name: "Agartala Railway Station (AGTL)", state: "Tripura" },
  //   { name: "Agra Cantonment (AGC)", state: "Uttar Pradesh" },
  //   { name: "Ahmedabad Junction (ADI)", state: "Gujarat" },
  //   { name: "Ahmednagar (ANG)", state: "Maharashtra" },
  //   { name: "Aizawl (AZS)", state: "Mizoram" },
  //   { name: "Ajmer Junction (AII)", state: "Rajasthan" },
  //   { name: "Akola Junction (AK)", state: "Maharashtra" },
  //   { name: "Alappuzha (ALLP)", state: "Kerala" },
  //   { name: "Aligarh Junction (ALJN)", state: "Uttar Pradesh" },
  //   { name: "Allahabad Junction (Prayagraj)", state: "Uttar Pradesh" },
  //   { name: "Almora (ALM)", state: "Uttarakhand" },
  //   { name: "Ambala Cantonment (UMB)", state: "Haryana" },
  //   { name: "Ambarnath (ABH)", state: "Maharashtra" },
  //   { name: "Amritsar Junction (ASR)", state: "Punjab" },
  //   { name: "Anand Junction (ANND)", state: "Gujarat" },
  //   { name: "Anand Vihar Terminal (ANVT)", state: "Delhi" },
  //   { name: "Anantnag (ANT)", state: "Jammu and Kashmir" },
  //   { name: "Angul (ANGL)", state: "Odisha" },
  //   { name: "Ankleshwar Junction (AKV)", state: "Gujarat" },
  //   { name: "Arakkonam Junction (AK)", state: "Tamil Nadu" },
  //   { name: "Aurangabad (ABD)", state: "Maharastra" },
  //   { name: "Ayodhya (AY)", state: "Uttar Pradesh" },
  //   { name: "Bangalore City Railway Station (SBC)", state: "Karnataka" },
  //   { name: "Bareilly Junction (BE)", state: "Uttar Pradesh" },
  //   { name: "Bhopal Junction (BPL)", state: "Madhya Pradesh" },
  //   { name: "Bhubaneswar Railway Station (BBS)", state: "Odisha" },
  //   { name: "Bhilai Nagar (BIA)", state: "Chhattisgarh" },
  //   { name: "Bikaner Junction (BNK)", state: "Rajasthan" },
  //   { name: "Bilaspur Junction (BSP)", state: "Chhattisgarh" },
  //   { name: "Bokaro Steel City (BKSC)", state: "Jharkhand" },
  //   { name: "Bangalore Cantt (BNC)", state: "Karnataka" },
  //   { name: "Bangalore East (BNCE)", state: "Karnataka" },
  //   { name: "Bangalore South (BNCS)", state: "Karnataka" },
  //   { name: "Bangalore West (BNCW)", state: "Karnataka" },
  //   { name: "Balurghat Junction (BGQ)", state: "West Bengal" },
  //   { name: "Belgaum (BGM)", state: "Karnataka" },
  //   { name: "Bhuj Junction (BHJ)", state: "Gujarat" },
  //   { name: "Baroda (BRC)", state: "Gujarat" },
  //   { name: "Bikaner City (BNK)", state: "Rajasthan" },
  //   { name: "Bokaro Town (BKOT)", state: "Jharkhand" },
  //   { name: "Chandigarh Junction (CDG)", state: "Chandigarh" },
  //   { name: "Chennai Central (MAS)", state: "Tamil Nadu" },
  //   { name: "Chennai Egmore (EMU)", state: "Tamil Nadu" },
  //   { name: "Chennai Park (CPK)", state: "Tamil Nadu" },
  //   { name: "Chennai Port (CPT)", state: "Tamil Nadu" },
  //   { name: "Chennai Tambaram (TBM)", state: "Tamil Nadu" },
  //   { name: "Chitradurga (CDT)", state: "Karnataka" },
  //   { name: "Chittaranjan (CRJ)", state: "West Bengal" },
  //   { name: "Coimbatore Junction (CBE)", state: "Tamil Nadu" },
  //   { name: "Cochin Ernakulam Junction (ERS)", state: "Kerala" },
  //   { name: "Cooch Behar Junction (COB)", state: "West Bengal" },
  //   { name: "Coonoor (ONR)", state: "Tamil Nadu" },
  //   { name: "Dabhoi Junction (DB)", state: "Gujarat" },
  //   { name: "Darbhanga Junction (DBG)", state: "Bihar" },
  //   { name: "Dadar Western (DDR)", state: "Maharashtra" },
  //   { name: "Darjeeling (DJ)", state: "West Bengal" },
  //   { name: "Dharwad Junction (DWR)", state: "Karnataka" },
  //   { name: "Dharmavaram (DMM)", state: "Andhra Pradesh" },
  //   { name: "Delhi Junction (DLI)", state: "Delhi" },
  //   { name: "Delhi Cantt (DEC)", state: "Delhi" },
  //   { name: "Delhi Sarai Rohilla (DEE)", state: "Delhi" },
  //   { name: "Delhi Anand Vihar (ANVR)", state: "Delhi" },
  //   { name: "Delhi Rajdhani (NDLS)", state: "Delhi" },
  //   { name: "Dhanbad Junction (DHN)", state: "Jharkhand" },
  //   { name: "Dhanera Junction (DHR)", state: "Gujarat" },
  //   { name: "Dibrugarh Junction (DBR)", state: "Assam" },
  //   { name: "Dibrugarh Town (DBRT)", state: "Assam" },
  //   { name: "Dibrugarh Station(DBRG)", state: "Assam" },
  //   { name: "Dharamshala Junction ", state: "Himachal Pradesh" },
  //   { name: "Dharamshala Railway Station (DHM)", state: "Himachal Pradesh" },
  //   { name: "Ernakulam Junction (ERK)", state: "Kerala" },
  //   { name: "Gwalior Junction (GWL)", state: "Madhya Pradesh" },
  //   { name: "Gurgaon Junction (GGN)", state: "Haryana" },
  //   { name: "Guwahati Junction (GHY)", state: "Assam" },
  //   { name: "Gaya Junction (GAYA)", state: "Bihar" },
  //   { name: "Howrah Junction (HWH)", state: "West Bengal" },
  //   { name: "Hubli Junction (UBL)", state: "Karnataka" },
  //   { name: "Hyderabad Deccan (HYB)", state: "Telangana" },
  //   { name: "Hazaribagh Junction (HZB)", state: "Jharkhand" },
  //   { name: "Hazart Nizamuddin (NZM)", state: "Delhi" },
  //   { name: "Indore Junction (INDB)", state: "Madhya Pradesh" },
  //   { name: "Itarsi Junction (ET)", state: "Madhya Pradesh" },
  //   { name: "Jabalpur Junction (JBP)", state: "Madhya Pradesh" },
  //   { name: "Jaipur Junction (JP)", state: "Rajasthan" },
  //   { name: "Jalandhar City (JUC)", state: "Punjab" },
  //   { name: "Jammu Tawi (JAT)", state: "Jammu and Kashmir" },
  //   { name: "Jodhpur Junction (JOD)", state: "Rajasthan" },
  //   { name: "Kanpur Central (CNB)", state: "Uttar Pradesh" },
  //   { name: "Kalyan Junction (KYN)", state: "Maharashtra" },
  //   { name: "Kolkata Chitpur (Howrah)", state: "West Bengal" },
  //   { name: "Kharagpur Junction (KGP)", state: "West Bengal" },
  //   { name: "Kota Junction (KOTA)", state: "Rajasthan" },
  //   { name: "Lucknow Charbagh (LKO)", state: "Uttar Pradesh" },
  //   { name: "Ludhiana Junction (LDH)", state: "Punjab" },
  //   { name: "Madurai Junction (MDU)", state: "Tamil Nadu" },
  //   { name: "Mangalore Junction (MAJN)", state: "Karnataka" },
  //   { name: "Mumbai Central (MMCT)", state: "Maharashtra" },
  //   {
  //     name: "Mumbai CST (Chhatrapati Shivaji Maharaj Terminus)",
  //     state: "Maharashtra",
  //   },
  //   { name: "Mysore Junction (MYS)", state: "Karnataka" },
  //   { name: "Mathura Junction (MTJ)", state: "Uttar Pradesh" },
  //   { name: "Nagpur Junction (NGP)", state: "Maharashtra" },
  //   { name: "Nanded Junction (NED)", state: "Maharashtra" },
  //   { name: "New Delhi Railway Station (NDLS)", state: "Delhi" },
  //   { name: "Patna Junction (PNBE)", state: "Bihar" },
  //   { name: "Pune Junction (PUNE)", state: "Maharashtra" },
  //   { name: "Patiala Junction (PTA)", state: "Punjab" },
  //   { name: "Panvel Junction (PNVL)", state: "Maharashtra" },
  //   { name: "Panki Railway Station (PNK)", state: "Uttar Pradesh" },
  //   { name: "Panipat Junction (PNP)", state: "Haryana" },
  //   { name: "Quilon Junction (QLN)", state: "Kerala" },
  //   { name: "Ranchi Junction (RNC)", state: "Jharkhand" },
  //   { name: "Rajkot Junction (RJT)", state: "Gujarat" },
  //   { name: "Rourkela Junction (ROU)", state: "Odisha" },
  //   { name: "Rohtak Junction (ROK)", state: "Haryana" },
  //   { name: "Rewari Junction (RE)", state: "Haryana" },
  //   { name: "Secunderabad Junction (SC)", state: "Telangana" },
  //   { name: "Siliguri Junction (SGUJ)", state: "West Bengal" },
  //   { name: "Sonebhadra (SBP)", state: "Uttar Pradesh" },
  //   { name: "Surat Junction (ST)", state: "Gujarat" },
  //   { name: "Thiruvananthapuram Central (TVC)", state: "Kerala" },
  //   { name: "Trivandrum Central (TVC)", state: "Kerala" },
  //   { name: "Tirupati Railway Station (TPTY)", state: "Andhra Pradesh" },
  //   { name: "Thanjavur Junction (TJ)", state: "Tamil Nadu" },
  //   { name: "Udaipur City (UDZ)", state: "Rajasthan" },
  //   { name: "Ujjain Junction (UJN)", state: "Madhya Pradesh" },
  //   { name: "Vadodara Junction (BRC)", state: "Gujarat" },
  //   { name: "Varanasi Junction (VNS)", state: "Uttar Pradesh" },
  //   { name: "Vellore Cantt (VLCY)", state: "Tamil Nadu" },
  //   { name: "Vijayawada Junction (BZA)", state: "Andhra Pradesh" },
  //   { name: "Visakhapatnam Junction (VSKP)", state: "Andhra Pradesh" },
  //   { name: "West Bengal Howrah (HWH)", state: "West Bengal" },
  //   { name: "Wayanad (WY)", state: "Kerala" },
  //   { name: "Warangal (WL)", state: "Telangana" },
  //   { name: "Yeshvantpur Junction (YPR)", state: "Karnataka" },
  //   { name: "Yelahanka Junction (YNK)", state: "Karnataka" },
  //   { name: "Ziyadpur Junction (ZYP)", state: "Uttar Pradesh" }, // Replace "Unknown" with the correct state if known
  //   // Add more stations as needed
  // ];

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
          <img
            src={backicon}
            alt=""
            srcSet=""
            className="fixed left-[1vh] h-[9vh] w-auto"
          />
        </button>
      </div>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Railway Stations</h1>
        <p className="mt-2 text-gray-600">
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

      {/* Favorites Section (Optional) */}
      {favorites.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Your Favorite Stations
          </h2>
          <div className="flex justify-center">
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default RailwayStations;
