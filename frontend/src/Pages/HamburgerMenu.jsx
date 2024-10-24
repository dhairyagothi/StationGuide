import React, { useState } from "react";
import {
  FaCreditCard,
  FaLifeRing,
  FaExclamationTriangle,
  FaInfoCircle,
  FaComment,
  FaCog,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "hidden" : "fixed left-5 top-5 z-50"
        } cursor-pointer flex flex-col justify-between w-8 h-5`}
        onClick={toggleMenu}
      >
        <div className="h-0.5 w-full bg-white"></div>
        <div className="h-0.5 w-full bg-white"></div>
        <div className="h-0.5 w-full bg-white"></div>
      </div>

      {isOpen && (
        <div className="w-1/4 h-screen bg-white fixed top-0 left-0 z-50 flex flex-col">
          <div className="bg-blue-600 text-white p-5 flex flex-col items-center justify-center h-36 relative">
            <img
              className="rounded-full mb-2 mt-2 w-12 h-12"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              alt="profile"
            />
            <h3 className="mt-1 text-lg">Yatree</h3>
            <p className="text-sm">5.0 ★</p>
            <span
              className="absolute right-5 top-5 cursor-pointer"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>

          <ul className="list-none p-0 m-0">
            <li className="py-3 px-5 text-lg flex items-center">
              <FaCreditCard className="mr-5 text-blue-600" />
              <a href="/payment" className="flex items-center text-black">
                Make a Payment
              </a>
            </li>
            <li className="py-3 px-5 text-lg flex items-center">
              <FaLifeRing className="mr-5 text-blue-600" />
              <a href="/help-and-support" className="flex items-center text-black">
                Help and Support
              </a>
            </li>
            <li className="py-3 px-5 text-lg flex items-center">
              <FaExclamationTriangle className="mr-5 text-blue-600" />
              <a href="/emergency" className="flex items-center text-black">
                Emergency
              </a>
            </li>
            <li className="py-3 px-5 text-lg flex items-center">
              <FaInfoCircle className="mr-5 text-blue-600" />
              <a href="/about" className="flex items-center text-black">
                About Us
              </a>
            </li>
            <li className="py-3 px-5 text-lg flex items-center">
              <FaComment className="mr-5 text-blue-600" />
              <a href="/feedback" className="flex items-center text-black">
                Feedback
              </a>
            </li>
            <li className="py-3 px-5 text-lg flex items-center">
              <FaCog className="mr-5 text-blue-600" />
              <a href="/settings" className="flex items-center text-black">
                Settings
              </a>
            </li>
          </ul>

          <div className="mt-auto p-5 text-center">
            <a href="/privacy-policy" className="text-blue-600">
              Privacy and Policy
            </a>
            <p className="text-xs text-gray-500 mt-2">App version 1.0.0.0</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
