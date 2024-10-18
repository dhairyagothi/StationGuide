import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaMoneyCheckAlt, FaHandsHelping, FaBell, FaCogs, FaInfoCircle, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 text-center text-gray-500 text-sm">
          App version 1.0.0.0
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
