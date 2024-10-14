import React, { useEffect } from 'react'; // Make sure to import useEffect

const SchedulePage = () => {
  useEffect(() => {
    document.title = 'Station Saarthi | Schedule'; // Set the page title
  }, []);

  return (
    <div className='h-full w-full text-6xl text-center font-bold justify-between p-44 text-white'>
      Making in Progress
    </div>
  );
};

export default SchedulePage;
