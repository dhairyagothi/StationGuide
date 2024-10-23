import React, { useState , useEffect } from 'react'; 
import logo from '../assets/stationsaarthi.svg'; // Import your logo 
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg'; // Assuming you have a back icon


const User = () => {
    useEffect(() => {
        document.title = 'Station Saarthi | UserPage'; 
      }, []);
   
    const navigate = useNavigate();
    
    const RegisterClick = () => {
        navigate('/Register'); // Navigates to the User page
    };
    const LoginClick = () => {
        navigate('/Login'); // Navigates to the User page
    };
    
    const HomeClick = () => {   
        navigate('/'); // Navigates to the home page
    };
    
  

    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-5000">
            {/* Logo and Title */} 
            <button onClick={HomeClick} className='absolute left-0 top-2'>
                <img src={backicon} alt="" className='h-[5vh]' />
            </button>
            <div className="mb-10 text-center">
                <h1 className="mt-4 text-4xl font-bold text-gray-800">Welcome To </h1>
            </div>
            <div className="mb-10 text-center">
                <img src={logo} alt="Station Saarthi Logo" className="w-20 mx-auto h-22" />
                <h1 className="mt-4 text-4xl font-bold text-gray-800">Station Saarthi</h1>
                <p className="mt-2 text-lg text-gray-600">Your Trusted Platform Guide</p>
            </div>
            
            <div className='w-full max-w-sm p-8 bg-white rounded-lg shadow-md flex flex-col items-center gap-4'>
<span> <p className=" text-center text-gray-600">
                Already have an account?{' '}
            </p>
</span>
            <button type="submit" onClick={LoginClick} className="w-40 py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Login</button>

            <p className=" text-center text-gray-600">
                Don't have an account?{' '}
            </p> 
            <button type="submit" onClick={RegisterClick} className="w-40 py-2  font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Register</button>
            </div>

           
          
        </div>  
    ); 
}; 

export default User;