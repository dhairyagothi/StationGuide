import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Register New User</h2>
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                
                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
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
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
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
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
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
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
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
                    className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
