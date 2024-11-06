import React from 'react'; // Importing React
import { useNavigate } from 'react-router-dom'; // Importing navigation function
import backicon from '../assets/svg/backicon.svg'; // Importing back icon asset
import TeamSection from '../components/TeamSection';
import Stats from '../components/Stats';
// About component
const AboutUs = () => {
  // UseNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle home button click
  const HomeClick = () => {   
    // Navigates to the home page when back button is clicked
    navigate('/'); 
  };
  return (
    <div className="w-full mx-auto p-8 bg-gray-100 text-gray-800">
      <button 
        onClick={HomeClick} 
        className="absolute left-4 top-4">
        <img 
          src={backicon} 
          alt="Back" 
          className="h-12" />
      </button>
      {/* Hero Section */}
      <section className="text-center mb-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Station Saarthi</h2>
        <h3 className="bg-gray-900 rounded-lg text-blue-500 text-sm inline-block py-1 px-3 mt-2 font-semibold">
          Elevate Your Railway Station Experience
        </h3>
        <p className="text-lg mt-4 text-gray-600">
          StationSaarthi is your one-stop platform designed to elevate your Indian Railway Station
          experience. With cutting-edge technology and user-friendly design, we aim to provide
          smooth and efficient travel assistance for all passengers.
        </p>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="flex flex-col md:flex-row gap-6 mb-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-1/2 transition-transform duration-300 hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Our Mission</h4>
          <p className="text-gray-700">
            At <b>StationSaarthi</b>, our mission is to simplify the railway station experience by
            integrating advanced technology and providing real-time, actionable information to every
            traveler. We are committed to enhancing travel convenience for all.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center w-full md:w-1/2 transition-transform duration-300 hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h4>
          <p className="text-gray-700">
            Our vision is a future where every journey is hassle-free. We strive to create a travel
            ecosystem that connects passengers, railways, and services through seamless digital
            integration.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <div className="text-center my-4 mb-12 max-w-5xl mx-auto">
        <h2 className="text-blue-600 text-3xl font-bold mb-8">What We Offer</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-x-8 md:space-y-0">
          <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 text-5xl mb-4">
              <i className="fas fa-train"></i>
            </div>
            <h3 className="text-black text-xl font-bold mb-2">Real-Time Train Updates</h3>
            <p className="text-gray-600">
              Stay informed with live train schedules and notifications for timely travel assistance.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 text-5xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-black text-xl font-bold mb-2">Interactive Station Maps</h3>
            <p className="text-gray-600">
              Navigate the station effortlessly with detailed maps, making it easier to find your way.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 text-5xl mb-4">
              <i className="fas fa-assistive-listening-systems"></i>
            </div>
            <h3 className="text-black text-xl font-bold mb-2">Accessible Services</h3>
            <p className="text-gray-600">
              Our platform ensures accessible services, providing support for differently-abled travelers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto mb-12">
  <h2 className="text-center text-3xl font-bold text-blue-600 mb-4">Why Choose StationSaarthi?</h2>
  <p className="text-center text-lg text-gray-700 mb-8">
    With <span className="font-bold">StationSaarthi</span>, you’re not just navigating a station — you're embracing a revolutionary approach to travel. Our platform is designed to streamline your experience, providing you with essential resources, convenience, and tailored support.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
      <h3 className="text-black text-xl font-bold mb-2">Smart Journey Planning</h3>
      <p className="text-gray-700">Plan your trips efficiently with our smart journey planning tools and suggestions.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
      <h3 className="text-black text-xl font-bold mb-2">User-Friendly Interface</h3>
      <p className="text-gray-700">Enjoy a seamless experience with our intuitive and easy-to-use platform.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
      <h3 className="text-black text-xl font-bold mb-2">Community Support</h3>
      <p className="text-gray-700">Join a community of travelers to share experiences, tips, and support for a better journey.</p>
    </div>
  </div>
</div>


<div className="bg-white p-4 rounded-lg shadow-md max-w-5xl mx-auto mb-12">
<h2 className="text-center text-3xl font-bold text-blue-600 mb-4">Our Stats</h2>
<Stats/>
</div>
      {/* Meet the Team Section */}
      <section className="text-center mb-12 max-w-5xl mx-auto">
        
        
        <TeamSection />
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 text-gray-500 text-sm max-w-5xl mx-auto">
        <p>© 2024 StationSaarthi | All rights reserved</p>
      </footer>
    </div>
  );
}

export default AboutUs;
