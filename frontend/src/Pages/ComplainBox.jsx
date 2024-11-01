import React, { useState } from 'react'; 

  import logo from '../assets/stationsaarthi.svg'; // Import your logo 

const ComplainBox = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [complain, setComplain] = useState('');

    const handleComplain = (e) => { 
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


            {/* Complain Form */}
            <form onSubmit={handleComplain} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                {/* Login Heading */}
                <h2 className="text-xl font-bold text-center mb-4 py-1 bg-blue-100 border border-blue-300 rounded-3xl shadow-sm">
                    Complain
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


                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="complain">write complain</label>
                    <textarea
                        
                        id="complain"
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                        placeholder="Enter your complain here"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                    />
                    </div>


                {/* Complain Button */} 
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Complain 
                </button>
            </form>

            
        </div>  
    ); 
}; 

export default  ComplainBox;
