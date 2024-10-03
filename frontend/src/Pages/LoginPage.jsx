import React, { useState } from 'react';
import logo from '../assets/stationsaarthi.svg'; // Import your logo
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Fetch the login API from the backend
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include'
        })
        .then(res => {
            // Check if the response is OK (status 200-299)
            if (res.ok) {
                return res.json(); // Parse the JSON data if response is successful
            } else {
                // If the response is not OK, throw an error to be caught later
                throw new Error(`Login failed! Status: ${res.status}`);
            }
        })
        .then(data => {
            // Handle the response data if login is successful
            console.log('Login successful:', data);
            setTimeout(() => {
                navigate('/logged-in');
            }, 500);  // Short delay to allow the cookie to propagate
        })
        .catch(error => {
            // Handle errors like incorrect login or network issues
            console.error('Login failed:', error);
        });
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
                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
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

            {/* Don't have an account link */}
            <p className="mt-4 text-gray-600">
                <span>Don't have an account? </span>
                <a href="/register" className="text-blue-500 font-semibold hover:underline transition duration-300 ease-in-out transform hover:scale-105">
                    Register
                </a>
            </p>
        </div>
    );
};

export default Login;
