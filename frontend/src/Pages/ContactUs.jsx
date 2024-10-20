// src/components/ContactUs.jsx

import React, { useEffect } from 'react';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTwitter,
    FaFacebook,
} from 'react-icons/fa';
import { AiOutlineArrowUp,AiOutlineArrowDown } from 'react-icons/ai';

const ContactUs = () => {
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
    useEffect(() => {
        document.title = 'Station Saarthi |ContactUs'; 
      }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6 overflow-y-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
                <p className="text-gray-600">Indian Railways</p>
            </div>

            {/* General Information */}
            <section className="mb-8">
                <div className="flex items-center mb-4">
                    <FaPhone className="text-blue-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-blue-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (Railway Enquiry)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-blue-500 w-5 h-5 mr-3" />
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
                    <FaPhone className="text-red-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Emergency Services</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-red-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>182</strong> (Security & Emergencies)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaPhone className="text-red-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>138</strong> (Passenger Helpline)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-red-500 w-5 h-5 mr-3" />
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
                    <FaPhone className="text-green-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Reservation and Ticketing</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-green-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (IRCTC Helpline)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-green-500 w-5 h-5 mr-3" />
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
                    <FaMapMarkerAlt className="text-yellow-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Lost & Found</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-yellow-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">Phone Number: <strong>139</strong></span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-yellow-500 w-5 h-5 mr-3" />
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
                    <FaPhone className="text-purple-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Grievances and Complaints</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-purple-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>139</strong> (Complaint Registration)
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-purple-500 w-5 h-5 mr-3" />
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
                    <FaMapMarkerAlt className="text-indigo-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Divisional Railway Manager (DRM) Offices</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaEnvelope className="text-indigo-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Northern Railway DRM Office: <strong>drm.nr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-indigo-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Western Railway DRM Office: <strong>drm.wr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-indigo-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Southern Railway DRM Office: <strong>drm.sr@indianrailways.gov.in</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-indigo-500 w-5 h-5 mr-3" />
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
                    <FaPhone className="text-gray-700 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Railway Police Force (RPF)</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaPhone className="text-gray-700 w-5 h-5 mr-3" />
                            <span className="text-gray-700">Phone Number: <strong>182</strong></span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-gray-700 w-5 h-5 mr-3" />
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
                    <FaMapMarkerAlt className="text-green-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Corporate Office</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="text-green-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Address: Indian Railways Corporate Office, New Delhi, India
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaPhone className="text-green-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700">
                                Phone Number: <strong>+91-11-23389184</strong>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-green-500 w-5 h-5 mr-3" />
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
                    <FaEnvelope className="text-blue-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Stay Connected</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="flex space-x-6 justify-center">
                        <li>
                            <a
                                href="https://twitter.com/RailMinIndia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 transition duration-300"
                            >
                                <FaTwitter className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/IndianRailways"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 transition duration-300"
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
                    <FaEnvelope className="text-pink-500 w-6 h-6 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Feedback</h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaEnvelope className="text-pink-500 w-5 h-5 mr-3" />
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
                className="fixed bottom-36 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                aria-label="Back to Top"
            >
                <AiOutlineArrowUp className="w-6 h-6" />
            </button>
            <button
                onClick={scrollToBottom}
                className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                aria-label="Back to Top"
            >
                <AiOutlineArrowDown className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ContactUs;
