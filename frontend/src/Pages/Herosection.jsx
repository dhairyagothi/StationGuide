import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";

import "./Herosection.css";
import logo from "../assets/stationsaarthi.svg";
import navigationsvg from "../assets/svg/navigation.svg";
import bookingsvg from "../assets/svg/bookings.svg";
import stationsvg from "../assets/svg/station.svg";
import noticationsvg from "../assets/svg/notification.svg";
import mapsvg from "../assets/svg/3dmap.svg";
import schedulesvg from "../assets/svg/schedule.svg";
import contributorsvg from "../assets/svg/contributor.svg";

import HamburgerMenu from "./hamburger";
import Chatbot from "../components/chatbot";
import Navbar from "../components/navbar";
import Language from "../components/language";
import Popup from "../components/popup";

const Herosection = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const optionsRef = useRef(null); // Reference to the options section

  const navigateTo = (path) => () => navigate(path);

  const toggleExpanded = () => setExpanded(!expanded);

  // Scroll to the options section when expanded
  useEffect(() => {
    if (expanded && optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded]);

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Navbar Section */}
      <div className="relative z-50 flex items-center justify-between p-4">
        <Navbar />
        <button
          onClick={navigateTo("/user")}
          className="flex items-center justify-center"
        >
          <FaUserAlt className="bg-blue-200 border-2 text-blue-600 border-blue-200 rounded-full w-[55px] h-[55px] p-2 shadow-lg" />
        </button>
        <HamburgerMenu />
      </div>

      {/* Language and Greeting */}
      <Language />
      <h1
        className="text-4xl md:text-4xl font-extrabold text-center mt-4 drop-shadow-lg"
        style={{
          color: "#FFFFFF",
          textShadow: "4px 2px 6px rgba(254, 254, 254, 0.7)",
          opacity: 0,
          animation: "fadeSlideIn 1s ease-out forwards",
        }}
      >
        Namaste !! Yatree
      </h1>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center bg-center bg-cover py-16 herosection">
        <img src={logo} alt="Platform Logo" style={{ height: "40vh" }} />
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mt-6 drop-shadow-lg"
          style={{
            color: "#f5eac4",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            opacity: 0,
            animation: "fadeSlideUp 1s ease-out forwards",
            animationDelay: "0.5s",
          }}
        >
          Station Saarthi: Your Platform Guide
        </h2>
      </div>

      {/* Expandable Options Section */}
      <div className="flex flex-col items-center mt-12">
        <button
          onClick={toggleExpanded}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          {expanded ? <FaArrowUp size={24} /> : <FaArrowDown size={24} />}
          <span className="ml-2 font-bold">
            {expanded ? "Hide Options" : "Show Options"}
          </span>
        </button>

        {expanded && (
          <div
            ref={optionsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-white rounded-lg shadow-lg"
          >
            <OptionButton
              onClick={navigateTo("/contributor")}
              iconSrc={contributorsvg}
              color="bg-purple-500"
              label="Contributors"
            />
            <OptionButton
              onClick={navigateTo("/Navigation")}
              iconSrc={navigationsvg}
              color="bg-green-500"
              label="Navigation"
            />
            <OptionButton
              onClick={navigateTo("/Booking")}
              iconSrc={bookingsvg}
              color="bg-red-500"
              label="Booking"
            />
            <OptionButton
              onClick={navigateTo("/Stations")}
              iconSrc={stationsvg}
              color="bg-blue-500"
              label="Station"
            />
            <OptionButton
              onClick={navigateTo("/3DMap")}
              iconSrc={mapsvg}
              color="bg-orange-500"
              label="3D Map"
            />
            <OptionButton
              onClick={navigateTo("/Schedule")}
              iconSrc={schedulesvg}
              color="bg-indigo-500"
              label="Schedule"
            />
            <OptionButton
              onClick={navigateTo("/Notification")}
              iconSrc={noticationsvg}
              color="bg-teal-500"
              label="Notification"
            />
          </div>
        )}
      </div>

      {/* Fixed Chatbot Icon */}
      <div className="fixed flex flex-col items-center justify-center right-5 bottom-10">
        <Popup />
        <Chatbot />
        <h1 className="text-xs font-bold text-black">Saarthi</h1>
      </div>
    </>
  );
};

// Helper component for option buttons
const OptionButton = ({ onClick, iconSrc, color, label }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center justify-center cursor-pointer transition-transform hover:translate-y-2 duration-300 p-4 rounded-lg ${color}`}
  >
    <img
      src={iconSrc}
      alt=""
      className="w-[64px] h-[64px] p-2 rounded-full shadow-lg"
    />
    <h1 className="text-sm font-bold text-white mt-2">{label}</h1>
  </div>
);

export default Herosection;
