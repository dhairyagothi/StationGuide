import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Fetch the register API from the backend
        fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                phoneNumber,
                email,
                password
            }),
            credentials: 'include'
        })
        .then(res => {
            // Check if the response is OK (status 200-299)
            if (res.ok) {
                // If the response is successful, return the JSON data
                return res.json();
            } else {
                // If the response is not OK, throw an error to be caught later
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => {
            // Handle the response data if successful
            console.log('Registration successful:', data);
            setTimeout(() => {
                navigate('/logged-in');
            }, 500);  // Short delay to allow the cookie to propagate
        })
        .catch(error => {
            // Handle errors such as invalid response or network issues
            console.error('Registration failed:', error);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="mb-6 text-3xl font-bold">Register New User</h2>
            <form onSubmit={handleRegister} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
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
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full py-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
            {/* Already have an account link */}
            <p className="mt-4">
                <span className="text-gray-600">Already have an account? </span>
                <a href="/login" className="font-semibold text-blue-500 transition duration-300 ease-in-out transform hover:underline hover:scale-105">
                    Log in
                </a>
            </p>
        </div>
    );
};

export default Register;
