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

      {/* Main Heading */}
      <h1 
        className="text-5xl font-bold text-blue-900 mb-12 text-center shadow-md">
        ABOUT US
      </h1>

      {/* Introduction Section */}
      <p 
        className="text-xl leading-relaxed text-center max-w-2xl mb-12 px-4">
        Welcome to{' '} 
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
          At{' '} 
          <span className="font-bold text-blue-600">
            StationSaarthi
          </span>, 
          our mission is to simplify the railway station experience by integrating advanced technology 
          and providing real-time, actionable information to every traveler. 
          We are committed to enhancing travel convenience for all.
        </p>
      </div>

      {/* Our Vision Section */}
      <div 
        className="w-full max-w-3xl p-8 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl 
        transition-transform transform hover:-translate-y-2 border border-blue-300">
        <h2 
          className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 
          border-blue-400 pb-2">
          Our Vision
        </h2>
        <p 
          className="text-lg leading-loose">
          Our vision is a future where every journey is hassle-free. 
          We strive to create a travel ecosystem that connects passengers, railways, and services 
          through seamless digital integration.
        </p>
      </div>

      {/* What We Offer Section */}
      <div 
        className="w-full max-w-3xl p-8 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl 
        transition-transform transform hover:-translate-y-2 border border-blue-300">
        <h2 
          className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 
          border-blue-400 pb-2">
          What We Offer
        </h2>
        <p 
          className="text-lg leading-loose">
          With{' '} 
          <span className="font-bold text-blue-600">
            StationSaarthi
          </span>, 
          you get access to:
          <ul 
            className="list-disc list-inside mt-4">
            <li>Real-time train updates and notifications</li>
            <li>Interactive station maps for easy navigation</li>
            <li>Personalized travel recommendations</li>
            <li>Multi-language support to cater to diverse passengers</li>
            <li>Accessible services for differently-abled travelers</li>
          </ul>
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div 
        className="w-full max-w-3xl p-8 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl 
        transition-transform transform hover:-translate-y-2 border border-blue-300">
        <h2 
          className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 
          border-blue-400 pb-2">
          Why Choose Us?
        </h2>
        <p 
          className="text-lg leading-loose">
          <span className="font-bold text-blue-600">
            StationSaarthi{' '}
          </span> 
          is more than a service; it's a commitment to revolutionizing your railway station experience. 
          We believe in technology's power to enhance every aspect of your journey, ensuring safety, 
          comfort, and convenience at every step.
        </p>
      </div>

      {/* Our Team Section */}
      <div 
        className="w-full max-w-3xl p-8 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl 
        transition-transform transform hover:-translate-y-2 border border-blue-300">
        <h2 
          className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 
          border-blue-400 pb-2">
          Meet the Team
        </h2>
        <p 
          className="text-lg leading-loose">
          Our diverse team of professionals is driven by a passion for innovation. 
          With expertise spanning technology, transportation, and user experience design, 
          we are dedicated to making railway stations smarter, more efficient, and more 
          enjoyable for every passenger.
        </p>
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-12 text-sm text-gray-600">
        <p>© 2024 StationSaarthi | All rights reserved</p>
      </div>
    </div>
  );
};

// Exporting the About component for use in other parts of the app
export default About;
