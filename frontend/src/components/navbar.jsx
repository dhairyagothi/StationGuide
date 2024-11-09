import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaHandsHelping, FaBell, FaStar, FaCreditCard, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ThemeToggle from "../components/ThemeToggle"
import axios from 'axios';  // Import axios

import GoogleTranslate from "../Pages/GoogleTranslate";
 

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
  const handleFaqClick = () => {
    navigate('/Faq');
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

 
  return (
    <>
      {/* Top Horizontal Navbar */}
      
      <div className="flex items-center justify-between p-4 bg-white shadow-md space-x-20 overflow-x-auto">
        <div className="flex items-center space-x-4">
          <FaUser className="text-3xl text-blue-500" />
          <span className="text-lg font-semibold">Yatree</span>
        </div>
        
        <nav className="flex items-center space-x-8 text-gray-700 ">
          <div onClick={() => handleNavigation('/payment')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaCreditCard className="inline mr-1" />
            <span>Make a Payment</span>
          </div>
          <div onClick={() => handleNavigation('/help-and-support')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaHandsHelping className="inline mr-1" />
            <span>Help and Support</span>
          </div>
          <div onClick={() => handleNavigation('/emergency')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaBell className="inline mr-1" />
            <span>Emergency</span>
          </div>
          <div onClick={() => handleNavigation('/about')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaInfoCircle className="inline mr-1" />
            <span>About Us</span>
          </div>
          <div onClick={handleOpenModal} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaStar className="inline mr-1" />
            <span>Feedback</span>
          </div>
          <div onClick={() => handleNavigation('/complain')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaStar className="inline mr-0" />
            <span>Complain</span>
          </div>
          <div onClick={() => handleNavigation('/settings')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <IoSettings className="inline mr-1" />
            <span>Settings</span>
          </div>
          <div onClick={() => handleNavigation('/Faq')} className="flex items-center cursor-pointer hover:text-blue-500 whitespace-nowrap">
            <FaQuestionCircle className="inline mr-1" />
            <span>FAQ</span>
          </div>
          {/* <div className='mr-80'></div> */}
          {/* <span><GoogleTranslate /></span> */}
          <ThemeToggle />  
        </nav>

        {/* Privacy Policy
        <a
          href="/privacy-policy"
          onClick={() => handleNavigation('/privacy-policy')}
          className="text-blue-500 hover:underline"
        >
          Privacy Policy
        </a> */}
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
