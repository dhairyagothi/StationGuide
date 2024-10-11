import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaMoneyCheckAlt, FaHandsHelping, FaBell, FaCogs, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navigation Toggle (Visible only on small screens) */}
      <div className="bg-blue-500 flex items-center justify-between p-4 lg:hidden">
        <div className="text-white text-xl font-bold">Yatree</div>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-black text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </button>
      </div>

      {/* Sidebar Navigation for Mobile and Horizontal Navigation for Large Screens */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg w-full ransform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-full lg:bg-blue-500 lg:shadow-none`}>
        
        {/* For Larger Screens: Horizontal Sticky Menu */}
        <div className="hidden lg:flex items-center justify-between p-4 text-white sticky top-0 bg-blue-500 z-50 w-full">
          <div className="flex items-center gap-[100px] justify-between">
            <FaUser className="text-2xl" />
            <span className="text-xl font-semibold ">Yatree</span>
          </div>
          <nav className="w-full  gap-[400px]">
            <ul className="flex justify-between space-x-4 w-full gap-[105px]">
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-6 py-2 rounded">
                <FaMoneyCheckAlt className="mr-2" />
                <span>Payment</span>
              </li>
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-4 py-2 rounded">
                <FaHandsHelping className="mr-2" />
                <span>Friend</span>
              </li>
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-4 py-2 rounded">
                <FaBell className="mr-2" />
                <span>Support</span>
              </li>
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-4 py-2 rounded">
                <FaBell className="mr-2" />
                <span>Emergency</span>
              </li>
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-4 py-2 rounded">
                <FaCogs className="mr-2" />
                <span>Settings</span>
              </li>
              <li className="flex items-center justify-center w-full hover:bg-blue-600 px-4 py-2 rounded">
                <FaInfoCircle className="mr-2" />
                <span>AboutUs</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar for Mobile Screens */}
        <div className="lg:hidden">
          <div className="bg-blue-500 p-4 flex flex-col items-center text-white">
            {/* Profile Section */}
            <FaUser className="text-6xl" />
            <p className="mt-2 text-lg font-semibold">Yatree</p>
            <p className="text-sm">3.9 ★</p>
          </div>

          {/* Menu Items for Small Screens */}
          <nav className="mt-4">
            <ul className="space-y-4">
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaMoneyCheckAlt className="mr-3 text-blue-500" />
                <span>Payment</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaHandsHelping className="mr-3 text-blue-500" />
                <span>For a Friend</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaBell className="mr-3 text-blue-500" />
                <span>Help and Support</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaBell className="mr-3 text-blue-500" />
                <span>Emergency</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaCogs className="mr-3 text-blue-500" />
                <span>Settings</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FaInfoCircle className="mr-3 text-blue-500" />
                <span>About Us</span>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 w-full p-4 text-center text-gray-500 text-sm">
            App version 1.0.0.0
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
