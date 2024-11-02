import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaHandsHelping, FaBell, FaStar, FaCreditCard, FaInfoCircle } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleRating = (value) => {
    setRating(value);
  };

  // Function to get the token from cookies or local storage (you can adjust based on where you store the token)
  const getToken = () => {
    return localStorage.getItem('accessToken'); // Example: if stored in localStorage
  };

  const submitRating = async () => {
    const token = getToken(); // Retrieve token

    // Check if token exists before making the API call
    if (!token) {
      alert("Unauthorized. Please log in first.");
      return;
    }

    // Prepare the request payload
    const feedbackData = {
      rating,
      comment,
    };

    try {
      // Make the API call to submit feedback using axios
      const response = await axios.post('/api/feedback', feedbackData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      alert(`Thank you for rating us ${rating} out of 5! Comment: ${comment}`);
      setIsModalOpen(false);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting your feedback. Please try again.');
    }
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
  const handleOpenComplain =() =>{
    navigate('/complain');
    setIsOpen(false);
  }

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

        {/* Google Translate widget with dynamic z-index */}
        <div
          id="google_element"
          className="google-translate-container"
          style={{
            position: 'fixed',
            top: '-40px',          // Adjust top positioning as needed
            left: '60px',        // Adjust right positioning as needed
            zIndex: isOpen ? -1 : 10,  // Lower z-index when sidebar is open
          }}
        >
          <style jsx>
            {`
        .goog-te-combo {
          display: inline-block;
          background-color: white;
          border: 3px solid blue;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          outline: none;
          color: black;
          font-weight: 500;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        }
        .goog-te-combo:hover {
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.8);
        }
        .goog-logo-link, .goog-te-gadget > span > a {
          display: none !important;
        }
        .goog-te-gadget .goog-te-combo {
          color: blue;
        }
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }
        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: "Translate";
          color: #c01c1c;
        }
        .goog-te-banner-frame, .goog-te-menu-frame {
          display: none !important;
        }
        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none;
          box-shadow: none;
        }
      `}
          </style>
        </div>
      </div>


      {/* Sidebar Navigation (Covers 25% on larger screens, full width on mobile) */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-[70%] lg:w-1/4`}>

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
          <p className="text-sm">5.0 ★</p>
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
              <span className="text-lg"> Feedback </span>
            </li>

            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleOpenComplain}>
              <FaStar className="mr-3 text-blue-300" />
              <span className="text-lg"> Complain </span>
            </li>
            <li className="flex items-center px-4 py-2 text-black cursor-pointer hover:text-white hover:bg-blue-600" onClick={handleSettingsClick}>
              <IoSettings className="mr-3 text-blue-300" />
              <span className="text-lg">Settings</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 text-sm text-center text-gray-500">
        <p>© {new Date().getFullYear()} Station Saarthi.All rights reserved.</p>
          <a
            href="/privacy-policy"
            onClick={() => {
              navigate('/privacy-policy');
              setIsOpen(false);
            }}
            className="block mb-2 text-blue-500 hover:underline"
          >
            Privacy and Policy
          </a>
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
