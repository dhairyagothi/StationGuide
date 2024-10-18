import React from 'react';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';
const Emergency = () => {
  const navigate = useNavigate();


const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    };
  return (
    <>
     <button onClick={HomeClick} className='absolute top-0 left-0'>
                <img src={backicon} alt="" className='h-[9vh]' />
            </button>
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-semibold text-blue-900">Emergency Page</h1>
    </div>
    </>
  );
};

export default Emergency;