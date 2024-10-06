import React from 'react';
import './Herosection.css' ;
import logo from '../assets/stationsaarthi.svg';
import navigationsvg from '../assets/svg/navigation.svg';
// import navigation from './navigation';
import bookingsvg from '../assets/svg/bookings.svg';
import stationsvg from '../assets/svg/station.svg';
import noticationsvg from '../assets/svg/notification.svg';
import mapsvg from '../assets/svg/3dmap.svg';
import schedulesvg from '../assets/svg/schedule.svg';
import searchsvg from '../assets/svg/search.svg';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './hamburger';

   
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
        
        <div className='relative z-50 flex items-center justify-between'>
        <div><HamburgerMenu /></div>
        </div>
        <h1 className='pl-4 text-2xl font-extrabold text-center text-white '>Namaste !! Yatree </h1>
        <div className="relative flex items-center justify-center bg-center bg-cover herosection">
           
            <div className='relative z-10 grid justify-items-center'>
                <img src={logo} alt="" srcset="" style={{height:"40vh" }}/>
                <h1 className='text-xl font-extrabold text-white'>Station Saarthi : Your Platform Guide</h1>
            </div>
            {/* <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" /> */}
        </div> 
        <br></br>
        <div className='flex items-center justify-center'>
            <button type="submit" onClick={LoginClick} className="w-20 py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Login</button>
            <button type="submit" onClick={RegisterClick} className="w-20 py-2 ml-8 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Register</button>
        </div>

        // In Herosection.jsx - update only the booking div in the grid section:

<div className='grid grid-cols-3 gap-4 mt-32 md:flex md:flex-row md:justify-evenly justify-items-center'>
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8'>
        <img src={navigationsvg} alt="" srcset="" className='bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2' /> 
        <h1 className='font-bold text-black'>Navigation</h1>
    </div>
    {/* Only this div is modified to add onClick */}
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8' onClick={() => navigate('/booking')}>
        <img src={bookingsvg} alt="" srcset="" className= "bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2" /> 
        <h1 className='font-bold text-black'>Booking</h1>
    </div>
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8'>
        <img src={stationsvg} alt="" srcset="" className = "bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2" />  
        <h1 className='font-bold text-black'>Station</h1>
    </div>
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8'>
        <img src={mapsvg} alt="" srcset="" className = "bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2" /> 
        <h1 className='font-bold text-black'>3D Map</h1>
    </div>
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8'>
        <img src={schedulesvg} alt="" srcset="" className = "bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2" /> 
        <h1 className='font-bold text-black'>Schedule</h1>
    </div>
    <div className='flex flex-col items-center justify-center rounded-full cursor-pointer my-auto py-8'>
        <img src={noticationsvg} alt="" srcset="" className = "bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2" /> 
        <h1 className='font-bold text-black'>Notification</h1>
    </div>
</div>
        </>
    );
};

export default Herosection;
