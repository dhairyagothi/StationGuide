import React from 'react'; // Importing React
import { useNavigate } from 'react-router-dom'; // Importing navigation function
import backicon from '../assets/svg/backicon.svg'; // Importing back icon asset

// About component
const About = () => {
  // UseNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle home button click
  const HomeClick = () => {   
    // Navigates to the home page when back button is clicked
    navigate('/'); 
  };

  // Return JSX structure
  return (
    <div 
      className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br 
      from-blue-100 via-blue-200 to-blue-300 text-gray-800">
      
      {/* Back button to navigate to home */}
      <button 
        onClick={HomeClick} 
        className="absolute left-4 top-4">
        <img 
          src={backicon} 
          alt="Back" 
          className="h-12" />
      </button>

      <h1 
        className="text-5xl font-bold text-blue-900 mb-12 text-center shadow-md">
        ABOUT US
      </h1>

      {/* Introduction Section */}
      <p 
        className="text-xl leading-relaxed text-center max-w-2xl mb-12 px-4">
        Welcome to 
        <span className="font-bold text-blue-600"> 
          StationSaarthi
        </span>, 
        your one-stop platform designed to elevate your Indian Railway Station experience. 
        With cutting-edge technology and user-friendly design, we aim to provide smooth and efficient 
        travel assistance for all passengers.
      </p>

      {/* Our Mission Section */}
      <div 
        className="w-full max-w-3xl p-8 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl 
        transition-transform transform hover:-translate-y-2 border border-blue-300">
        <h2 
          className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 
          border-blue-400 pb-2">
          Our Mission
        </h2>
        <p 
          className="text-lg leading-loose">
          At 
          <span className="font-bold text-blue-600">
            StationSaarthi
          </span>, 
          our mission is to simplify the railway station experience by integrating advanced technology 
          and providing real-time, actionable information to every traveler. 
          We are committed to enhancing travel convenience for all.
        </p>
      </div>
    </div>
  );
};

// Exporting the About component for use in other parts of the app
export default About;
