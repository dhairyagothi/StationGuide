// @tailwind base;
// @tailwind components;
// @tailwind utilities;

import React, {useState} from 'react';
import { Calendar, ArrowLeft, Component } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Booking=() =>{
    //State variables
    const [station, setStation]= useState('');
    const [date, setDate]= useState('');
    const navigate= useNavigate();

    const services = [
        { 
            id: 'cloak', 
            name: 'Cloak Room Booking', 
            availability: 20 
        },
        { 
            id: 'wheelchair', 
            name: 'Wheel Chair Booking', 
            availability: 5 
        },
        { 
            id: 'coolie', 
            name: 'Coolie Booking', 
            availability: 12 
        }
];
    
    return(
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue to-blue-5000 px-4 py-8">
            {/*Main container*/}
            <div className='w-full max-w-wd flex items-center mb-6'>
                <button
                onClick={()=> navigate(-1)} 
                className='flex item-center text-white hover:text-blue-200 transition-colors'>
                <ArrowLeft size={24}/>
                <span className="text-lg font-medium ml-2">Back</span>
                </button>
            </div>
                        {/*Main COntent Card starts here*/}
            <div className='w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-md p-6 backdrop-blur-sm'>
                <h2 className='text-xl font-bold text-center mb-6 py-2 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm'>
                    Station Services
                </h2>           
                {/* Staion update and inputs */}
                <div className='mb-5'>
                    <label className='block text-gray-700 font-semibold mb-2'>Station</label>
                    <input
                        type="text"
                        value={station}
                        onChange={(e) => setStation(e.target.value)}
                        placeholder='Enter Station Name'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        />
                    </div>

                {/*Date input */}
                <div className='mb-6'>
                    <label className='block text-grey-700 font-semibold mb-2'>Date</label>
                    <div className='relative'>
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder='DD/MM/YY'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none foucs:ring-2 focus:ring-blue-500 transition duration-300'
                        />
                        <Calendar className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>

                        </div> 

                        {/*Services are here */}
                        <div className="space-y-4">
                            {services.map((service) => (
                                <div 
                                    key={service.id}
                                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-gray-800 font-semibold">{service.name}</h3>
                                        <span className="text-green-500 text-sm flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                            Available: {service.availability}
                                        </span>
                                    </div>
                                    <button 
                                        className="w-full py-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            ))}
                        </div>                  
                    </div>     

            </div>

    </div>

    );
};
export default Booking;
