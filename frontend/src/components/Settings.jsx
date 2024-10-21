import React from 'react';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';
const Settings = () => {
  const navigate = useNavigate();


const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    };
  return (
    <>
      <button onClick={HomeClick} className='absolute left-0 top-2'>
                <img src={backicon} alt="" className='h-[5vh]' />
            </button>
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-semibold text-blue-900">Settings Page</h1>
      
    </div>
    </>
  );
};

export default Settings;