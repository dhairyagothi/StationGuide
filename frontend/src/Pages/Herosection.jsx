
import React, { useEffect, useState } from "react";
import "./Herosection.css";
import logo from "../assets/stationsaarthi.svg";
import navigationsvg from "../assets/svg/navigation.svg";
import bookingsvg from "../assets/svg/bookings.svg";
import stationsvg from "../assets/svg/station.svg";
import noticationsvg from "../assets/svg/notification.svg";
import mapsvg from "../assets/svg/3dmap.svg";
import schedulesvg from "../assets/svg/schedule.svg";
import contributorsvg from "../assets/svg/contributor.svg";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./hamburger";
import Chatbot from "../components/chatbot";
import Navbar from "../components/navbar";
import Language from "../components/language";
import { FaUserAlt, FaArrowUp } from "react-icons/fa";
import Popup from "../components/popup";

const Herosection = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  // Navigation functions
  const LoginClick = () => navigate("/Login");
  const RegisterClick = () => navigate("/Register");
  const StationCLick = () => navigate("/Stations");
  const UserCLick = () => navigate("/user");
  const NavigationCLick = () => navigate("/Navigation");
  const BookingCLick = () => navigate("/Booking");
  const MapCLick = () => navigate("/3DMap");
  const ScheduleCLick = () => navigate("/Schedule");
  const NotificationCLick = () => navigate("/Notification");
  const ContributorCLick = () => navigate("/contributor");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
import searchsvg from "../assets/svg/search.svg";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./hamburger";
import contributorsvg from "../assets/svg/contributor.svg";
import chatbotsvg from "../assets/svg/chatbot.svg";
import Chatbot from "../components/chatbot";
import Navbar from "../components/navbar";
import Language from "../components/language";
import { FaUserAlt } from "react-icons/fa";
import Popup from "../components/popup";
import GoogleTranslate from "./GoogleTranslate";

const Herosection = () => {
  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/Login"); // Navigates to the login page
  };
  const RegisterClick = () => {
    navigate("/Register"); // Navigates to the login page
  };
  const StationCLick = () => {
    navigate("/Stations"); // Navigates to the login page
  };
  const UserCLick = () => {
    navigate("/user"); // Navigates to the login page
  };
  const NavigationCLick = () => {
    navigate("/Navigation"); // Navigates to the login page
  };
  const BookingCLick = () => {
    navigate("/Booking"); // Navigates to the login page
  };
  const MapCLick = () => {
    navigate("/3DMap"); // Navigates to the login page
  };
  const ScheduleCLick = () => {
    navigate("/Schedule"); // Navigates to the login page
  };
  const NotificationCLick = () => {
    navigate("/Notification"); // Navigates to the login page
  };
  const ContributorCLick = () => {
    navigate("/contributor"); // Navigates to the login page
  };

  return (
    <>
      <div className="relative z-50 flex items-center justify-between gap-[88vw]">
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <div>
            <HamburgerMenu />
          </div>

          <button type="submit" onClick={UserCLick} className="">
            <FaUserAlt className="bg-blue-200 border-2 text-blue-600 border-blue-200 rounded-full w-[55px] h-[55px] p-2 shadow-lg mr-2" />
          </button>
        </div>
      </div>

      <Language />

      {/* Greeting Text */}
      <h1
        className="pl-4 text-4xl font-black text-center text-slate-100 mt-12"
        style={{
          textShadow: "4px 2px 4px rgba(0, 0, 0, 0.7)", // Adds a soft shadow for readability
          opacity: 0,
          animation: "fadeInSlideDown 1s ease-out forwards", // Subtle animation effect
        }}
      >
        Namaste !! Yatree
      </h1>

      {/* Hero Section */}
      <div className="relative flex items-center justify-center bg-center bg-cover herosection">
        <div className="relative z-10 grid justify-items-center">
          <img
            src={logo}
            alt="Station Saarthi Logo"
            style={{ height: "40vh" }}
          />
          <h2
            className="text-2xl font-extrabold text-zinc-300 text-center mt-4"
            style={{
              textShadow: "6px 2px 6px rgba(0, 0, 0, 0.7)", // Similar shadow effect for consistency
              opacity: 0,
              animation: "fadeInSlideUp 1s ease-out forwards",
              animationDelay: "0.5s", // Delay for staggered effect
            }}
          >
            Station Saarthi: Your Platform Guide
          </h2>
        </div>
      </div>

      <br />

      <div
        className="translate relative z-50 flex items-center"
        style={{ marginLeft: "70px", top: "-100px" }}
      >
        <GoogleTranslate />
      </div>

      <h1 className="pl-4 text-4xl font-black text-center text-white ">
        Namaste !! Yatree{" "}
      </h1>
      <div className="relative flex items-center justify-center bg-center bg-cover herosection">
        <div className="relative z-10 grid justify-items-center">
          <img src={logo} alt="" srcset="" style={{ height: "40vh" }} />
          <h1 className="text-2xl font-extrabold text-white text-center">
            Station Saarthi : Your Platform Guide
          </h1>
        </div>
        {/* <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" /> */}
      </div>
      <br></br>

      <div className="grid grid-cols-3 gap-2 pb-10 mt-32 md:flex md:flex-row md:justify-evenly justify-items-center ">
        <div
          type="submit"
          onClick={ContributorCLick}

          className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer  left-3 -bottom-8 md:-bottom-5"
        >
          <img
            src={contributorsvg}
            alt=""
    className="
      bg-blue-200 border-2 border-blue-100 rounded-full 
      w-[64px] h-[64px] p-2
    "
          />
          <h1 className="text-xs font-bold text-black">Contributors</h1>
        </div>

        <div
          type="submit"
          onClick={NavigationCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300"
        >
          <img
            src={navigationsvg}
            alt=""
       srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg"
          />
          <button className="w-24 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            <h1 className="font-bold text-white">Navigation</h1>
          </button>
        </div>
        <div
          type="submit"
          onClick={BookingCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300"
        >
          <img
            src={bookingsvg}
            alt=""
            srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg "
          />
          <button
            type="submit"
            onClick={BookingCLick}
            className="w-20 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            <h1 className="font-bold text-white">Booking</h1>
          </button>
        </div>
        <div
          type="submit"
          onClick={StationCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300"
        >
          <img
            src={stationsvg}
            alt=""
srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg"
          />
          <button className="w-20 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            <h1 className="font-bold text-white">Station</h1>
          </button>
        </div>
        <div
          type="submit"
          onClick={MapCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300 "
        >
        >
          <img
            src={mapsvg}
            alt=""
 srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg"
          />{" "}
          <button
            type="submit"
            onClick={MapCLick}
            className="w-20 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            {" "}
            <h1 className="font-bold text-white">3D Map</h1>
          </button>
        </div>

        <div
          type="submit"
          onClick={ScheduleCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300"
        >
          <img
            src={schedulesvg}
            alt=""
 srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg"
          />
          <button
            type="submit"
            onClick={ScheduleCLick}
            className="w-20 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            {" "}
            <h1 className="font-bold text-white">Schedule</h1>
          </button>
        </div>

        <div
          type="submit"
          onClick={NotificationCLick}
          className="flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300"
        >
          <img
            src={noticationsvg}
            alt=""
srcset=""
            className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg "
          />{" "}
          <button
            type="submit"
            onClick={NotificationCLick}
            className="w-24 py-1 mt-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            {" "}
            <h1 className="font-bold text-white">Notification</h1>
          </button>
        </div>
      </div>

      <div className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer  right-5 -bottom-8 md:-bottom-7">

        <Popup />
        <Chatbot />
        <h1 className="text-xs font-bold text-black">Saarthi</h1>
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-16 bg-blue-500 text-white w-12 h-12 rounded-full shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Herosection;
