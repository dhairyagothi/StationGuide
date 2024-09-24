import React from 'react';
import './Herosection.css' ;
import logo from '../assets/stationsaarthi.svg';
// import img1 from '../assets/hero.png';
// import bg from '../assets/bg.png';
// import bgmobile from '../assets/bgmobile.png';
// import navigation from './navigation';
import { TfiAlignLeft } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';

   
const Herosection = () => {
    const navigate = useNavigate();

    const LoginClick = () => {
        navigate('/login'); // Navigates to the login page
    };
    const RegisterClick = () => {
        navigate('/Register'); // Navigates to the login page
    };
    return (
        <>
        <TfiAlignLeft className='fill-white h-[10vh] w-[6vh] font-extrabold ml-4'> <navigation/>   </TfiAlignLeft>
        <div className="flex items-center justify-center bg-center bg-cover herosection">
            <div className='grid justify-items-center'><img src={logo} alt="" srcset="" style={{height:"40vh" }}/>
            <h1 className='text-xl font-extrabold text-white'>Station Saarthi : Your Platform Guide</h1>
            </div>
            {/* <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" /> */}
        </div> 
        <br></br>
        <div className='flex items-center justify-center'>
            <button type="submit" onClick={LoginClick} className="w-20 bg-blue-500 text-white py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ">Login</button>
            <button type="submit" onClick={RegisterClick} className="w-20 bg-blue-500 text-white py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ml-8">Register</button>

        </div>
        </>
    );
};

export default Herosection;