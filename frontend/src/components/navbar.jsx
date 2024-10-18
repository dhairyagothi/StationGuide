import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaMoneyCheckAlt, FaHandsHelping, FaBell, FaStar, FaCogs, FaInfoCircle, FaCreditCard } from 'react-icons/fa';
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
    navigate('/about-us');
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      {/* Navigation Toggle for All Screens (Mobile and Larger Screens) */}
      <div className="bg-blue-500 flex items-center justify-between p-4">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-black text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </button>
      </div>

      {/* Sidebar Navigation (Covers 25% on larger screens, full width on mobile) */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-full lg:w-1/4`}>
        
        {/* Close Button inside Sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FaTimes className="text-black text-3xl mr-2" />
          </button>
        </div>

        {/* Sidebar Menu Content */}
        <div className="bg-blue-500 p-4 flex flex-col items-center text-white">
          {/* Profile Section */}
          <FaUser className="text-6xl" />
          <p className="mt-2 text-lg font-semibold">Yatree</p>
          <p className="text-sm">3.9 ★</p>
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          <ul className="space-y-4">
            <li className="flex items-center px-4 py-2 bg-amber-500 text-white cursor-pointer hover:bg-amber-600" onClick={handlePaymentClick}>
              <FaCreditCard className="mr-3 text-white" />
              <span className="text-lg">Make a Payment</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleHelpAndSupportClick}>
              <FaHandsHelping className="mr-3 text-blue-500" />
              <span className="text-lg">Help and Support</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleEmergencyClick}>
              <FaBell className="mr-3 text-blue-500" />
              <span className="text-lg">Emergency</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleAboutUsClick}>
              <FaInfoCircle className="mr-3 text-blue-500" />
              <span className="text-lg">About Us</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleOpenModal}>
              <FaStar className="mr-3 text-blue-500" />
              <span className="text-lg">Rate Us</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 text-center text-gray-500 text-sm">
          App version 1.0.0.0
          
        </div>
      </div>

      {/* Rating Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mx-auto">
            <h2 className="text-lg font-bold mb-4 text-center text-black">Rate Us</h2>
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
              className="w-full border text-black border-gray-300 hover:border-blue-500 rounded p-2 mb-4"
              rows="4"
              placeholder="Write your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex justify-around">
              <button
                onClick={submitRating}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:bg-blue-600"
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
