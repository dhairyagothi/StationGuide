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
    </div>
  );
};

// Exporting the About component for use in other parts of the app
export default About;
