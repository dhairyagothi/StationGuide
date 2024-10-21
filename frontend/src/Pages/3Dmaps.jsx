import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';



const DMapPage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | 3D Map'; 
  }, []);
  const navigate = useNavigate();


const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    };
  return (
    <>
     <button onClick={HomeClick} className='absolute left-0 top-2'>
                <img src={backicon} alt="" className='h-[5vh]' />
            </button>
    <div className='h-full w-full text-6xl text-center font-bold justify-between p-44 text-white'>
      
      Making in Progress</div>

      </>
  )
} 

export default DMapPage;


