import React, { useState } from 'react';
import logo from '../assets/stationsaarthi.svg'; // Import your logo

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
            {/* Logo, Title, and Tagline */}
            <div className="text-center mb-8">
                <img src={logo} alt="Station Saarthi Logo" className="mx-auto w-20 h-20" /> {/* Adjust width/height as needed */}
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Station Saarthi</h1>
                <p className="text-gray-500 mt-2">Your Trusted Platform Guide</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                {/* Username Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
