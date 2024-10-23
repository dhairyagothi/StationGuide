import React, { useState, useEffect } from 'react';
import railwaysImage from '../assets/railways.png';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');

  // Auto-close popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      alert(`Welcome! To Station Saarthi. May you have a wonderful journey, ${email}`);
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 flex items-center justify-center bg-[rgba(252,249,249,0.8)] z-[100000] rounded-lg shadow-lg w-[400px] p-5">
        <div className="relative flex flex-col w-full bg-[#f0eeee] rounded-lg overflow-hidden">
          <button
            className="absolute top-3 right-3 text-black font-bold text-2xl z-[1001]"
            onClick={handleClose}
          >
            X
          </button>
          <div className="w-full p-6">
            <img src={railwaysImage} alt="Railways" className="w-full h-full object-cover rounded-1/2" />
          </div>
          <div className="w-full p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-[#131010] mb-2">Welcome to Station Saarthi</h1>
            <h2 className="text-lg font-semibold text-center text-[#261d1d] mb-4">Travel without stress. Sign in now!</h2>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <input
                type="email"
                id="popup-email"
                className="p-2 w-4/5 border border-gray-400 rounded-md mb-4 text-base"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-4/5 p-2 bg-blue-600 text-white rounded-md text-base font-bold cursor-pointer"
              >
                Sign me up!
              </button>
            </form>
            <p className="text-xs text-center text-[#0e0a0a] mt-4">
              By signing in, I agree to Station Saarthi's{' '}
              <a href="#" className="text-blue-500">Terms of Service</a> and{' '}
              <a href="#" className="text-blue-500">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
