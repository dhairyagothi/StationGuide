import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/StatioSarthi-error-404.png'
const Error = () => {
    const navigate = useNavigate();
    const LoginClick = () => {
        navigate('/'); // Navigates to the Home page
    };
    const RegisterClick = () => {
        navigate('/helpandsupport'); // Navigates to the Help & Support page
    };
  return (
   <div className='fixed h-[100vh] w-[100vw] bg-blue-100 z-50 items-center justify-center flex'>
    <div className=' h-[75vh] w-[75vw] text-center   '>
       <div className="heading h-[8vh] w-[75vw]">
       <h2 className='font-semibold text-[62px] mt-10 text-red-500'>404</h2>
       </div> 
       <div className="content h-[55vh] w-[75vw] items-center ">
       <div className="image h-[35vh] w-[75vw] ml-52 ">
        <img className='h-[35vh] w-[45vw]' src={image} alt="" />
       </div>
       <p className='text-2xl mb-2 font-mono '>
       <span className='mx-2'>Looks Like you're</span>
        <span className='text-blue-500'>on wrong Track</span> </p>
       <p>The line you're looking for is not available!</p>
       <div className="buttons mt-5">
       <button type="submit" onClick={LoginClick} className="w-[8vw] py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Home</button>
       <button type="submit" onClick={RegisterClick} className="w-[8vw] py-2 ml-8 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Help&Support</button>
       </div>
        </div> 
    </div>
   </div>
  );
};

export default Error;