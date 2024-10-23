import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();
    // Implement password recovery logic here
    setMessage(
      "If an account with that email exists, a password recovery link has been sent."
    );
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500'>
      <div className='w-full max-w-sm p-8 bg-white rounded-lg shadow-md'>
        <h2 className='py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl'>
          Password Recovery
        </h2>
        {message && (
          <p className='mb-4 text-center text-green-600 font-semibold'>
            {message}
          </p>
        )}
        <form noValidate onSubmit={handlePasswordRecovery}>
          <div className='mb-5'>
            <label
              className='flex gap-2 mb-2 font-semibold text-gray-700'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 mb-4 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105'
          >
            Recover Password
          </button>
        </form>
        <button
          onClick={handleBackToLogin}
          className='w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-gray-500 rounded-lg hover:bg-gray-600 hover:scale-105'
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default PasswordRecovery;
