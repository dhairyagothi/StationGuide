import React, { useState } from 'react';
import logo from '../assets/stationsaarthi.svg'; // Ensure the path is correct

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-5000 px-4">
            {/* Logo and Title */}
            <div className="text-center mb-6">
                <img src={logo} alt="Station Saarthi Logo" className="mx-auto w-20 h-22 mb-2" />
                <h1 className="text-2xl font-bold text-gray-800">Station Saarthi</h1>
                <p className="text-gray-700 mt-1 text-sm">Your Trusted Platform Guide</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                {/* Register Heading */}
                <h2 className="text-xl font-bold text-center mb-4 py-1 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
                    Register
                </h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                    />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm"
                >
                    Register
                </button>
            </form>

            {/* Already have an account link */}
            <p className="mt-4 text-gray-700 text-sm">
                Already have an account?{' '}
                <a href="/Login" className="text-blue-500 font-medium hover:underline transition duration-300 transform hover:scale-105">
                    Log in
                </a>
            </p>
        </div>
    );
};

export default Register;