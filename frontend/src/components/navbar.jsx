import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaMoneyCheckAlt,  FaHandsHelping, FaBell, FaStar, FaCogs, FaInfoCircle, FaCreditCard } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Hamburger from '../Pages/hamburger';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleRating = (value) => {
    setRating(value);
  };

  const submitRating = () => {
    alert(`Thank you for rating us ${rating} out of 5! Comment: ${comment}`);
    setIsModalOpen(false);
    setRating(0);
    setComment('');
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle navigation to the pages
  const handlePaymentClick = () => {
    navigate('/payment');
    setIsOpen(false); // Close the sidebar after navigating
  };

  const handleHelpAndSupportClick = () => {
    navigate('/help-and-support');
    setIsOpen(false);
  };

  const handleEmergencyClick = () => {
    navigate('/emergency');
    setIsOpen(false);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    setIsOpen(false);
  };

  const handleAboutUsClick = () => {
    navigate('/about');
    setIsOpen(false);
  };
  const handleOpenSetting = () => {
    navigate('/Settings');
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      {/* Navigation Toggle for All Screens (Mobile and Larger Screens) */}
      <div className="flex items-center justify-between p-4 bg-blue-500">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl text-black" /> : <FaBars className="text-2xl text-white" />}
        </button>
      </div>

      {/* Sidebar Navigation (Covers 25% on larger screens, full width on mobile) */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-full lg:w-1/4`}>
        
        {/* Close Button inside Sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FaTimes className="mr-2 text-3xl text-black" />
          </button>
        </div>

        {/* Sidebar Menu Content */}
        <div className="flex flex-col items-center p-4 text-white bg-blue-500">
          {/* Profile Section */}
          <FaUser className="text-6xl" />
          <p className="mt-2 text-lg font-semibold">Yatree</p>
          <p className="text-sm">3.9 ★</p>
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          <ul className="space-y-4">
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handlePaymentClick}>
              <FaCreditCard className="mr-3 text-blue-300" />
              <span className="text-lg">Make a Payment</span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleHelpAndSupportClick}>
              <FaHandsHelping className="mr-3 text-blue-300" />
              <span className="text-lg">Help and Support</span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleEmergencyClick}>
              <FaBell className="mr-3 text-blue-300" />
              <span className="text-lg">Emergency</span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleAboutUsClick}>
              <FaInfoCircle className="mr-3 text-blue-300" />
              <span className="text-lg">About Us</span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleOpenModal}>
              <FaStar className="mr-3 text-blue-300" />
              <span className="text-lg">Rate Us</span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleOpenSetting}>
              <IoSettings className="mr-3 text-blue-300" />
              <span className="text-lg">Settings</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 text-sm text-center text-gray-500">
          App version 1.0.0.0
          
        </div>
      </div>

      {/* Rating Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-8 mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-bold text-center text-black">Rate Us</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`cursor-pointer text-2xl ${rating >= value ? 'text-blue-500' : 'text-gray-300'}`}
                  onClick={() => handleRating(value)}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              className="w-full p-2 mb-4 text-black border border-gray-300 rounded hover:border-blue-500"
              rows="4"
              placeholder="Write your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex justify-around">
              <button
                onClick={submitRating}
                className="px-4 py-2 font-semibold text-white transition-all duration-300 transform bg-blue-500 rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 text-gray-600 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
