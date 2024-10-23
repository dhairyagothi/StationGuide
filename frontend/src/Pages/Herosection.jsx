import React from 'react';
import './Herosection.css';
import logo from '../assets/stationsaarthi.svg';
import navigationsvg from '../assets/svg/navigation.svg';
import bookingsvg from '../assets/svg/bookings.svg';
import stationsvg from '../assets/svg/station.svg';
import noticationsvg from '../assets/svg/notification.svg';
import mapsvg from '../assets/svg/3dmap.svg';
import schedulesvg from '../assets/svg/schedule.svg';
import contributorsvg from '../assets/svg/contributor.svg';
import { useNavigate } from 'react-router-dom';
import chatbotsvg from '../assets/svg/chatbot.svg';
import Chatbot from '../components/chatbot';
import Navbar from '../components/navbar';
import HamburgerMenu from './HamburgerMenu'; // From HamburgerMenu branch
import Language from '../components/language'; // From main branch
import { FaUserAlt } from "react-icons/fa"; // From main branch
import Popup from '../components/popup'; // From main branch

const Herosection = () => {
    const navigate = useNavigate();

    const LoginClick = () => {
        navigate('/Login'); // Navigates to the login page
    };
    const RegisterClick = () => {
        navigate('/Register'); // Navigates to the login page
    };
    const StationCLick = () => {
        navigate('/Stations'); // Navigates to the Stations page
    };
    const UserCLick = () => {
        navigate('/user'); // Navigates to the user page
    };
    const NavigationCLick = () => {
        navigate('/Navigation'); // Navigates to the Navigation page
    };
    const BookingCLick = () => {
        navigate('/Booking'); // Navigates to the Booking page
    };
    const MapCLick = () => {
        navigate('/3DMap'); // Navigates to the 3D Map page
    };
    const ScheduleCLick = () => {
        navigate('/Schedule'); // Navigates to the Schedule page
    };
    const NotificationCLick = () => {
        navigate('/Notification'); // Navigates to the Notification page
    };
    const ContributorCLick = () => {
        navigate('/contributor'); // Navigates to the Contributor page
    };

    return (
        <>
            <div className='relative z-50 flex items-center justify-between'>
                <div><Navbar /></div>
                <div><HamburgerMenu /></div> {/* From HamburgerMenu branch */}
                <div className='flex items-center justify-center'>
                    <button type="submit" onClick={UserCLick} className="">
                        <FaUserAlt className='bg-blue-200 border-2 text-blue-600 border-blue-200 rounded-full w-[55px] h-[55px] p-2 shadow-lg' />
                    </button>
                </div>
            </div>

            <Language /> {/* From main branch */}
            
            <h1 className='pl-4 text-4xl font-black text-center text-white'>Namaste !! Yatree</h1>
            <div className="relative flex items-center justify-center bg-center bg-cover herosection">
                <div className='relative z-10 grid justify-items-center'>
                    <img src={logo} alt="" style={{ height: "40vh" }} />
                    <h1 className='text-2xl font-extrabold text-white text-center'>Station Saarthi : Your Platform Guide</h1>
                </div>
            </div>
            <br />

            <div className='grid grid-cols-3 gap-2 pb-10 mt-32 md:flex md:flex-row md:justify-evenly justify-items-center'>
                <div 
                    type="submit" 
                    onClick={ContributorCLick} 
                    className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer left-3 -bottom-8 md:-bottom-5"
                >
                    <img src={contributorsvg} alt="" className='bg-blue-200 border-2 border-blue-100 rounded-full w-[64px] h-[64px] p-2' />
                    <h1 className="text-xs font-bold text-black">Contributors</h1>
                </div>

                <div type="submit" onClick={NavigationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={navigationsvg} alt="" className='bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg' />
                    <button className="w-24 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>Navigation</h1>
                    </button>
                </div>
                <div type="submit" onClick={BookingCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={bookingsvg} alt="" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
                    <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>Booking</h1>
                    </button>
                </div>
                <div type="submit" onClick={StationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={stationsvg} alt="" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
                    <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>Station</h1>
                    </button>
                </div>
                <div type="submit" onClick={MapCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={mapsvg} alt="" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
                    <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>3D Map</h1>
                    </button>
                </div>
                <div type="submit" onClick={ScheduleCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={schedulesvg} alt="" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
                    <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>Schedule</h1>
                    </button>
                </div>
                <div type="submit" onClick={NotificationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
                    <img src={noticationsvg} alt="" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
                    <button className="w-24 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                        <h1 className='font-bold text-white'>Notification</h1>
                    </button>
                </div>
            </div>

            <div  
                className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer right-5 -bottom-8 md:-bottom-7"
            >
                <Popup />
                <Chatbot />
                <h1 className="text-xs font-bold text-black">Saarthi</h1>
            </div>
        </>
    );
};

export default Herosection;
