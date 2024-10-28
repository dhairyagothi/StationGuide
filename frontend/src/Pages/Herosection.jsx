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
import chatbotsvg from '../assets/svg/chatbot.svg';
import { useNavigate } from 'react-router-dom';
import Chatbot from '../components/chatbot';
import Navbar from '../components/navbar';
import HamburgerMenu from './HamburgerMenu';
import Language from '../components/language';
import { FaUserAlt } from "react-icons/fa";
import Popup from '../components/popup';

const Herosection = () => {
  const navigate = useNavigate();

  const LoginClick = () => navigate('/Login');
  const RegisterClick = () => navigate('/Register');
  const StationCLick = () => navigate('/Stations');
  const UserCLick = () => navigate('/user');
  const NavigationCLick = () => navigate('/Navigation');
  const BookingCLick = () => navigate('/Booking');
  const MapCLick = () => navigate('/3DMap');
  const ScheduleCLick = () => navigate('/Schedule');
  const NotificationCLick = () => navigate('/Notification');
  const ContributorCLick = () => navigate('/contributor');

  return (
    <>
      <div className='relative z-50 flex items-center justify-between'>
        <Navbar />
        <div className='flex items-center justify-center'>
          <HamburgerMenu />
          <button type="submit" onClick={UserCLick} className="ml-[1300px]">
            <FaUserAlt className='bg-blue-200 border-2 text-blue-600 border-blue-200 rounded-full w-[55px] h-[55px] p-2 shadow-lg' />
          </button>
        </div>
      </div>

      <Language />

      <h1 className='pl-4 text-4xl font-black text-center text-white'>Namaste !! Yatree</h1>
      <div className="relative flex items-center justify-center bg-center bg-cover herosection">
        <div className='relative z-10 grid justify-items-center'>
          <img src={logo} alt="Station Saarthi Logo" style={{ height: "40vh" }} />
          <h1 className='text-2xl font-extrabold text-white text-center'>Station Saarthi : Your Platform Guide</h1>
        </div>
      </div>
      <br />

      <div className='grid grid-cols-3 gap-2 pb-10 mt-32 md:flex md:flex-row md:justify-evenly justify-items-center'>
        <div type="submit" onClick={ContributorCLick} className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer left-3 -bottom-8 md:-bottom-5">
          <img src={contributorsvg} alt="Contributors Icon" className='bg-blue-200 border-2 border-blue-100 rounded-full w-[64px] h-[64px] p-2' />
          <h1 className="text-xs font-bold text-black">Contributors</h1>
        </div>

        <div type="submit" onClick={NavigationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={navigationsvg} alt="Navigation Icon" className='bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg' />
          <button className="w-24 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>Navigation</h1>
          </button>
        </div>

        <div type="submit" onClick={BookingCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={bookingsvg} alt="Booking Icon" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
          <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>Booking</h1>
          </button>
        </div>

        <div type="submit" onClick={StationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={stationsvg} alt="Station Icon" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
          <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>Station</h1>
          </button>
        </div>

        <div type="submit" onClick={MapCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={mapsvg} alt="3D Map Icon" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
          <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>3D Map</h1>
          </button>
        </div>

        <div type="submit" onClick={ScheduleCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={schedulesvg} alt="Schedule Icon" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
          <button className="w-20 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>Schedule</h1>
          </button>
        </div>

        <div type="submit" onClick={NotificationCLick} className='flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer transition-all hover:translate-y-2 duration-300'>
          <img src={noticationsvg} alt="Notification Icon" className="bg-blue-200 border-2 border-blue-200 rounded-full w-[64px] h-[64px] p-2 shadow-lg" />
          <button className="w-24 py-1 mt-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
            <h1 className='font-bold text-white'>Notification</h1>
          </button>
        </div>
      </div>

      <div className="fixed flex flex-col items-center justify-center py-8 my-auto rounded-full cursor-pointer right-5 -bottom-8 md:-bottom-7">
        <Popup />
        <Chatbot />
        <h1 className="text-xs font-bold text-black">Saarthi</h1>
      </div>
    </>
  );
};

export default Herosection;
