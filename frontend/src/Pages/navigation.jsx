import React, { useState ,useEffect } from 'react';
import { FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';
import MapComponent from '../components/MapComponent';

const NavigationPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('Platform 3');
  useEffect(() => {
    document.title = 'Station Saarthi | Navigation'; 
  }, []);
  return (
    <div className='h-screen w-full bg-gray-200 p-4'>
      {/* Header */}
      <h1 className='text-3xl font-bold text-center text-gray-800 mt-4'>Navigation</h1>

      {/* Map Section */}
      <div className='relative bg-gray-300 h-72 w-full rounded-2xl shadow-lg overflow-hidden mt-6'>
       <MapComponent/>
      </div>

      {/* Input Fields */}
      <div className='bg-white p-6 rounded-2xl shadow-lg mx-2 mt-6'>
        <label className='block text-lg mb-2 text-gray-800'>From</label>
        <input 
          type='text' 
          value={from}
          onChange={(e) => setFrom(e.target.value)} 
          placeholder='Your Location' 
          className='w-full p-3 mb-4 rounded-md border border-gray-300 text-gray-900'
        />

        <label className='block text-lg mb-2 text-gray-800'>To</label>
        <input 
          type='text' 
          value={to}
          onChange={(e) => setTo(e.target.value)} 
          placeholder='Destination' 
          className='w-full p-3 mb-4 rounded-md border border-gray-300 text-gray-900'
        />

        <button className='bg-blue-600 w-full p-3 rounded-lg mt-4 text-white font-bold hover:bg-blue-700'>
          Find Route
        </button>
      </div>

      {/* Platform List */}
      <div className='bg-white p-4 rounded-2xl shadow-lg mx-2 mt-4'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='text-green-500 text-xl mr-3' />
            <div>
              <h3 className='text-lg font-bold text-gray-800'>Platform 1</h3>
              <p className='text-sm text-gray-600'>Rani Kamlapati Station - 5 min</p>
            </div>
          </div>
          <div className='text-blue-600 text-lg'>&#x27A4;</div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <FaExclamationTriangle className='text-red-500 text-xl mr-3' />
            <div>
              <h3 className='text-lg font-bold text-gray-800'>Platform 3</h3>
              <p className='text-sm text-gray-600'>Rani Kamlapati Station - Heavily Crowded</p>
            </div>
          </div>
          <div className='text-blue-600 text-lg'>&#x27A4;</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
