import React, { useState, useEffect } from 'react';
import logo from '../assets/stationsaarthi.svg';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';
import { GoogleLogin } from '@react-oauth/google';
import { FaFacebook } from 'react-icons/fa';
import { jwtDecode } from "jwt-decode";

// Reusable FormInput component
const FormInput = ({ label, type, value, onChange, placeholder, pattern, maxLength, required, errorMessage }) => (
    <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            pattern={pattern}
            maxLength={maxLength}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={required}
        />
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
);

const Register = () => {
    const navigate = useNavigate();
    const LoginClick = () => navigate('/Login');
    const HomeClick = () => navigate('/');

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: ''
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://stationguide.onrender.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, isGoogle: false })
            });

            const data = await response.json();

            if (response.ok) {
                setConfirmationMessage("Your account is created successfully. Please login to access the website.");
                setFormData({ name: '', phoneNumber: '', email: '', password: '' });
            } else {
                setConfirmationMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setConfirmationMessage("Registration failed. Please try again.");
        }
    };

    useEffect(() => {
        if (confirmationMessage) {
            const timer = setTimeout(() => setConfirmationMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [confirmationMessage]);

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            return "Weak";
        } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
            return "Strong";
        } else {
            return "Moderate";
        }
    };

    useEffect(() => {
        setPasswordStrength(checkPasswordStrength(formData.password));
    }, [formData.password]);

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        const decoded = jwtDecode(token);

        try {
            const response = await fetch('https://stationguide.onrender.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: decoded.name,
                    phoneNumber: formData.phoneNumber,
                    email: decoded.email,
                    password: '',
                    isGoogle: true
                })
            });

            const data = await response.json();

            if (response.ok) {
                setConfirmationMessage("Your account is created successfully. Please login to access the website.");
                setFormData({ name: '', phoneNumber: '', email: '', password: '' });
            } else {
                setConfirmationMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error registering with Google:', error);
        }
    };

    const handleGoogleLoginFailure = () => {
        console.log("Google Sign-In failed");
    };

    const MemoizedFormInput = useMemo(() => FormInput, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-100 to-blue-5000 relative">
                {confirmationMessage && (
                    <div className="fixed top-0 left-0 w-full p-3 text-center text-white bg-green-600 bg-opacity-80">
                        {confirmationMessage}
                    </div>
                )}
                
                <button onClick={HomeClick} className='absolute left-0 top-0'>
                    <img src={backicon} alt="" className='h-[9vh]' />
                </button>
                <div className="mb-6 text-center">
                    <img src={logo} alt="Station Saarthi Logo" className="w-20 mx-auto mb-2 h-22" />
                    <h1 className="text-2xl font-bold text-gray-800">Station Saarthi</h1>
                    <p className="mt-1 text-sm text-gray-700">Your Trusted Platform Guide</p>
                </div>

                <form onSubmit={handleRegister} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                    <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
                        Register
                    </h2>

                    <MemoizedFormInput
                        label="Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

                    <MemoizedFormInput
                        label="Phone Number"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        pattern="\d{10}"
                        maxLength="10"
                        required
                        errorMessage={formData.phoneNumber && formData.phoneNumber.length !== 10 ? 'Please enter a valid 10-digit phone number.' : ''}
                    />

                    <MemoizedFormInput
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <MemoizedFormInput
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                    />
                    <p className={`mt-1 text-sm ${passwordStrength === "Strong" ? 'text-green-500' : passwordStrength === "Moderate" ? 'text-yellow-500' : 'text-red-500'}`}>
                        {formData.password && `Password strength: ${passwordStrength}`}
                    </p>
                    {passwordStrength === "Weak" && (
                        <p className="text-xs text-gray-500">Try using a longer password with uppercase letters, numbers, and symbols for a stronger password.</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 text-sm font-semibold text-white transition duration-200 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105"
                    >
                        Register
                    </button>

                    <div className='flex justify-between'>
                        <div className="mt-4 w-fit">
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                            />
                        </div>
                        <div className="mt-4 w-fit">
                            <button className="flex items-center justify-center w-full py-2 px-4 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                <FaFacebook className="mr-2 text-lg" /> Sign Up with Facebook
                            </button>
                        </div>
                    </div>
                </form>

                <p className="mt-4 text-sm text-gray-700">
                    Already have an account?{' '}
                    <button onClick={LoginClick} className="text-blue-500 underline cursor-pointer"> Login</button>
                </p>
            </div>
        </>
    );
};

export default Register;