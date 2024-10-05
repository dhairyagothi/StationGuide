import React, { useState } from 'react'; 
import logo from '../assets/stationsaarthi.svg'; // Import your logo 

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
 
    const handleLogin = (e) => { 
        e.preventDefault(); 
        // Handle login logic here 
    };  


    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-5000">
            {/* Logo and Title */} 
            <div className="text-center mb-10 ">
                <img src={logo} alt="Station Saarthi Logo" className="mx-auto w-20 h-22 " />
                <h1 className="text-4xl font-bold text-gray-800 mt-4 ">Station Saarthi</h1>
                <p className="text-gray-600 mt-2 text-lg ">Your Trusted Platform Guide</p>
            </div>


            {/* Login Form */}
            <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                {/* Login Heading */}
                <h2 className="text-xl font-bold text-center mb-4 py-1 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
                    Login
                </h2>

                {/* Username Input */}
                <div className="mb-5">
                    <label className=" block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
                    <input
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    /> 
                </div> 

                {/* Password Input */} 
                <div className="mb-6"> 
                    <label className="block  text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                    <input 
                        type="password"    
                        id="password"  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    />
                </div>

                {/* Login Button */} 
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Login
                </button>
            </form>

            {/* Don't have an account link */}
            <p className="mt-6 text-gray-600">
                Don't have an account?{' '}
                <a href="/Register.jsx" className="text-blue-500 font-semibold hover:underline transition duration-300 transform hover:scale-105">
                    Register
                </a> 
            </p> 
        </div>  
    ); 
}; 

export default Login;
