import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaHandsHelping, FaBell, FaStar, FaCreditCard, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import { notification } from 'antd'; // Import notification from antd

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const navigate = useNavigate(); 

  const handleRating = (value) => {
    setRating(value);
  };

  const getToken = () => {
    return localStorage.getItem('accessToken');
  };

  const submitRating = async () => {
    const token = getToken(); 

    if (!token) {
      notification.error({
        message: (
          <span style={{ fontWeight: 'bold', fontSize: '22px' }}>
            Unauthorized
          </span>
        ),
        description: (
          <span style={{ fontWeight: 600, fontSize: '16px' }}>
            Please log in first to submit feedback.
          </span>
        ),
        duration: 3, 
      });
      return;
    }
    

    const feedbackData = {
      rating,
      comment,
    };

    try {
      const response = await axios.post('/api/feedback', feedbackData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      notification.success({
        message: (
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
            {`Thank you for rating us ${rating} out of 5!`}
          </span>
        ),
        description: (
          <span style={{ fontWeight: 600, fontSize: '16px' }}>
            {comment ? `Comment: ${comment}` : 'No comment provided.'}
          </span>
        ),
        duration: 3, 
      });
      
      
      setIsModalOpen(false);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      notification.error({
        message: (
          <span style={{ fontWeight: 'bold', fontSize: '22px' }}>
            Feedback Submission Failed
          </span>
        ),
        description: (
          <span style={{ fontWeight: 600, fontSize: '18px' }}>
            An error occurred while submitting your feedback. Please try again.
          </span>
        ),
        duration: 3, 
      });
      
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handlePaymentClick = () => {
    navigate('/payment');
    setIsOpen(false);
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

  const handleOpenComplain = () => {
    navigate('/complain');
    setIsOpen(false);
  };

  const handleFaqClick = () => {
    navigate('/Faq');
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-blue-500 dark:bg-black">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl text-black" /> : <FaBars className="text-2xl text-white" />}
        </button>

        <div
          id="google_element"
          className="google-translate-container"
          style={{
            position: 'fixed',
            top: '-40px',
            left: '60px',
            zIndex: isOpen ? -1 : 10,
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

      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-[70%] lg:w-1/4 flex flex-col`}>

        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FaTimes className="text-3xl text-black" />
          </button>
        </div>

        <div className="flex flex-col items-center p-6 text-white bg-blue-500">
          <FaUser className="text-6xl mb-2" />
          <p className="text-lg font-semibold">Yatree</p>
          <p className="text-sm">5.0 ★</p>
        </div>

        <div className="flex-grow overflow-y-auto">
          <nav className="mt-6">
            <ul className="space-y-4 px-6">
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handlePaymentClick}>
                <FaCreditCard className="mr-3 text-blue-300" />
                <span className="text-lg">Make a Payment</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleHelpAndSupportClick}>
                <FaHandsHelping className="mr-3 text-blue-300" />
                <span className="text-lg">Help and Support</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleEmergencyClick}>
                <FaBell className="mr-3 text-blue-300" />
                <span className="text-lg">Emergency</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleAboutUsClick}>
                <FaInfoCircle className="mr-3 text-blue-300" />
                <span className="text-lg">About Us</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleOpenModal}>
                <FaStar className="mr-3 text-blue-300" />
                <span className="text-lg">Feedback</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleOpenComplain}>
                <FaStar className="mr-3 text-blue-300" />
                <span className="text-lg">Complain</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleSettingsClick}>
                <IoSettings className="mr-3 text-blue-300" />
                <span className="text-lg">Settings</span>
              </li>
              <li className="flex items-center text-black cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-md" onClick={handleFaqClick}>
                <FaQuestionCircle className="mr-3 text-blue-300" />
                <span className="text-lg">FAQ</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="p-4 text-sm text-center text-gray-500 bg-white">
          <p>© {new Date().getFullYear()} Station Saarthi. All rights reserved.</p>
          <a
            href="/privacy-policy"
            onClick={() => {
              navigate('/privacy-policy');
              setIsOpen(false);
            }}
            className="block mt-2 text-blue-500 hover:underline"
          >
            Privacy and Policy
          </a>
          <span>App version 1.0.0.0</span>
        </div>
      </div>

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
