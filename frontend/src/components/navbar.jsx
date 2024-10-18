import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaMoneyCheckAlt, FaHandsHelping, FaBell, FaCogs, FaInfoCircle } from 'react-icons/fa';
import Hamburger from '../Pages/hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaMoneyCheckAlt className="mr-3 text-blue-500" />
              <span className='text-lg'>Payment</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaHandsHelping className="mr-3 text-blue-500" />
              <span className='text-lg'>For a Friend</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaBell className="mr-3 text-blue-500" />
              <span className='text-lg'>Help and Support</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaBell className="mr-3 text-blue-500" />
              <span className='text-lg'>Emergency</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaCogs className="mr-3 text-blue-500" />
              <span className='text-lg'>Settings</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <FaInfoCircle className="mr-3 text-blue-500" />
              <span className='text-lg'>About Us</span>
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
