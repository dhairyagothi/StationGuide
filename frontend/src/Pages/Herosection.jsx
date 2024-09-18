import React from 'react';
import './Herosection.css'; // Import the CSS file for styling
import img1 from '../assets/hero.png';
import bg from '../assets/bg.png';
import bgmobile from '../assets/bgmobile.png';
const Herosection = () => {
    return (
        <>
        <div className="flex items-center justify-center bg-center bg-cover herosection">
            <img src={img1} alt="Image" style={{height:"100vh" ,width : "100vw"}}/>
            <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" />
        </div>
        </>
    );
};

export default Herosection;