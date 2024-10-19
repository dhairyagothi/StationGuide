import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';




const About = () => {
  const navigate = useNavigate();


const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    };

  return (
    <div className="about-container">
       <button onClick={HomeClick} className='absolute top-0 left-0'>
                <img src={backicon} alt="" className='h-[9vh]' />
            </button>
      <h1>ABOUT US</h1>
      <p>
        Welcome to <span className="highlight">StationSaarthi</span>, your comprehensive navigation and assistance platform designed to revolutionize the Indian Railway Station experience. We combine advanced technology with user-centric design to ensure seamless travel for everyone.
      </p>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To provide the best user experience through cutting-edge technology and innovative design. 
          We aim to deliver high-quality services that meet the needs of our customers.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where technology makes lives easier, bridging the gap between users and 
          solutions through seamless experiences and intuitive design.
        </p>
      </div>
      <div className="about-section">
        <h2>What We Offer</h2>
        <p>
          From live train updates to navigation within railway stations, <span className="highlight">StationSaarthi</span> aims to be your ultimate travel companion. Our platform offers features like personalized recommendations, multi-language support, and much more.
        </p>
      </div>
      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          We believe in the power of technology to transform everyday experiences. With <span className="highlight">StationSaarthi</span>, you can say goodbye to the stress of traveling and embrace a new way of exploring India’s vast railway network.
        </p>
      </div>
    </div>
  );
};

export default About;