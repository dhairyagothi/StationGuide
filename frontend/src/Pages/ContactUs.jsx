// src/components/ContactUs.jsx

import React from 'react';
import backicon from '../assets/svg/backicon.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTwitter,
    FaFacebook,
} from 'react-icons/fa';
import { AiOutlineArrowUp,AiOutlineArrowDown } from 'react-icons/ai';

const ContactUs = () => {
    const Navigate = useNavigate();
    const HomeClick = () => Navigate ('/');
   
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: 10000,
            behavior: 'smooth',
        });
    };

    return (
        <div className="min-h-screen p-6 overflow-y-auto bg-gray-100">
            {/* Header Section */}
            <button onClick={HomeClick} className='absolute top-0 left-0'>
                    <img src={backicon} alt="" className='h-[9vh]' />
                </button>
            <div className="mb-12 text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-800">Contact Us</h1>
                <p className="text-gray-600">Indian Railways</p>
            </div>

            {/* General Information */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="w-6 h-6 mr-2 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-blue-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (Railway Enquiry)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-blue-500" />
                            <span className="text-gray-700">
                                Email: <strong>customercare@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Emergency Services */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="w-6 h-6 mr-2 text-red-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Emergency Services</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-red-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>182</strong> (Security & Emergencies)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-red-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>138</strong> (Passenger Helpline)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-red-500" />
                            <span className="text-gray-700">
                                Email: <strong>emergencyservices@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Reservation and Ticketing */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="w-6 h-6 mr-2 text-green-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Reservation and Ticketing</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-green-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (IRCTC Helpline)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-green-500" />
                            <span className="text-gray-700">
                                Email: <strong>care@irctc.co.in</strong>
                            </span>
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Website:</span>{' '}
                            <a
                                href="https://www.irctc.co.in"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IRCTC Website
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Lost & Found */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="w-6 h-6 mr-2 text-yellow-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Lost & Found</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-yellow-500" />
                            <span className="text-gray-700">Phone Number: <strong>139</strong></span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-yellow-500" />
                            <span className="text-gray-700">
                                Email: <strong>lostandfound@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Grievances and Complaints */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="w-6 h-6 mr-2 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Grievances and Complaints</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-purple-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (Complaint Registration)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-purple-500" />
                            <span className="text-gray-700">
                                Email: <strong>complaints@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Online Portal:</span>{' '}
                            <a
                                href="https://railmadad.indianrailways.gov.in/"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                RailMadad
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Divisional Railway Manager (DRM) Offices */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="w-6 h-6 mr-2 text-indigo-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Divisional Railway Manager (DRM) Offices</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-indigo-500" />
                            <span className="text-gray-700">
                                Northern Railway DRM Office: <strong>drm.nr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-indigo-500" />
                            <span className="text-gray-700">
                                Western Railway DRM Office: <strong>drm.wr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-indigo-500" />
                            <span className="text-gray-700">
                                Southern Railway DRM Office: <strong>drm.sr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-indigo-500" />
                            <span className="text-gray-700">
                                Eastern Railway DRM Office: <strong>drm.er@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Railway Police Force (RPF) */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="w-6 h-6 mr-2 text-gray-700" />
                    <h2 className="text-2xl font-semibold text-gray-800">Railway Police Force (RPF)</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-gray-700" />
                            <span className="text-gray-700">Phone Number: <strong>182</strong></span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-gray-700" />
                            <span className="text-gray-700">
                                Email: <strong>rpf@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Corporate Office */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="w-6 h-6 mr-2 text-green-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Corporate Office</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="w-5 h-5 mr-3 text-green-500" />
                            <span className="text-gray-700">
                                Address: Indian Railways Corporate Office, New Delhi, India
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-3 text-green-500" />
                            <span className="text-gray-700">
                                Phone Number: <strong>+91-11-23389184</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-green-500" />
                            <span className="text-gray-700">
                                Email: <strong>corporateaffairs@indianrailways.gov.in</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Stay Connected */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaEnvelope className="w-6 h-6 mr-2 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Stay Connected</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a
                                href="https://twitter.com/RailMinIndia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 transition duration-300 hover:text-blue-700"
                            >
                                <FaTwitter className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/IndianRailways"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 transition duration-300 hover:text-blue-900"
                            >
                                <FaFacebook className="w-8 h-8" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Feedback */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaEnvelope className="w-6 h-6 mr-2 text-pink-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Feedback</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaEnvelope className="w-5 h-5 mr-3 text-pink-500" />
                            <span className="text-gray-700">
                                Email: <strong>feedback@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Online Feedback Form:</span>{' '}
                            <a
                                href="https://www.indianrailways.gov.in/feedback"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Submit Your Feedback
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed p-3 text-white transition duration-300 ease-in-out bg-blue-500 rounded-full shadow-lg bottom-36 right-6 hover:bg-blue-600"
                aria-label="Back to Top"
            >
                <AiOutlineArrowUp className="w-6 h-6" />
            </button>
            <button
                onClick={scrollToBottom}
                className="fixed p-3 text-white transition duration-300 ease-in-out bg-blue-500 rounded-full shadow-lg bottom-20 right-6 hover:bg-blue-600"
                aria-label="Back to Top"
            >
                <AiOutlineArrowDown className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ContactUs;