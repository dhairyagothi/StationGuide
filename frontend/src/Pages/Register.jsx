import React, { useState, useEffect } from "react";
import logo from "../assets/stationsaarthi.svg";
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg";
import { GoogleLogin } from "@react-oauth/google";
import { FaFacebook } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { registerValidation } from "../validations/validation";

const Register = () => {

    useEffect(() => {
        document.title = 'Station Saarthi | Register'; 
      }, []);

  const navigate = useNavigate();
  const LoginClick = () => navigate("/Login");
  const HomeClick = () => navigate("/");


  const [username, setUserName] = useState(""); // Changed from name to username
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(""); // State for password strength feedback
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerValidation.validate(
        { username, password, phoneNumber, email }, // Updated validation call
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://stationguide.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username, // Updated from name to username
            phoneNumber: phoneNumber ? phoneNumber : "",
            email,
            password,
            isGoogle: false,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setConfirmationMessage(
          "Your account is created successfully. Please login to access the website."
        );
        setUserName(""); // Reset username
        setPhoneNumber("");
        setEmail("");
        setPassword("");
      } else {
        console.log(data.error);
        setConfirmationMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setConfirmationMessage("Registration failed. Please try again.");
    }
  };

  // Use effect to clear the confirmation message after 3 seconds
  useEffect(() => {
    if (confirmationMessage) {
      const timer = setTimeout(() => setConfirmationMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [confirmationMessage]);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return "Weak";
    } else if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return "Strong";
    } else {
      return "Moderate";
    }
  };

  // Update password strength when password changes
  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  // Handle Google success
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    // Decode the token to extract user information
    const decoded = jwtDecode(token);
    console.log("Decoded Google Token:", decoded);

    try {
      const response = await fetch(
        "https://stationguide.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: decoded.name,
            phoneNumber: phoneNumber ? phoneNumber : "",
            email: decoded.email,
            password: "",
            isGoogle: true,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setConfirmationMessage(
          "Your account is created successfully. Please login to access the website."
        );
        setUserName(""); // Reset username
        setPhoneNumber("");
        setEmail("");
        setPassword("");
      } else {
        setConfirmationMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error registering with Google:", error);
    }
  };

  // Handle Google failure
  const handleGoogleLoginFailure = () => {
    console.log("Google Sign-In failed");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
};

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-100 to-blue-5000 relative">
        {confirmationMessage && (
          <div className="fixed top-0 left-0 w-full p-3 text-center text-white bg-green-600 bg-opacity-80">
            {confirmationMessage}
          </div>
        )}

        <button onClick={HomeClick} className="absolute left-0 top-0">
          <img src={backicon} alt="" className="h-[9vh]" />
        </button>
        <div className="mb-6 text-center">
          <img
            src={logo}
            alt="Station Saarthi Logo"
            className="w-20 mx-auto mb-2 h-22"
          />
          <h1 className="text-2xl font-bold text-gray-800">Station Saarthi</h1>
          <p className="mt-1 text-sm text-gray-700">
            Your Trusted Platform Guide
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleRegister}
          className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
            Register
          </h2>

          <div className="mb-4">
            <label
              className="block mb-1 font-semibold text-gray-700"
              htmlFor="username" // Updated id reference
            >
              Username
            </label>
            <input
              type="text"
              id="username" // Updated id reference
              value={username}
              onChange={(e) => setUserName(e.target.value)} // Updated setter
              placeholder="Enter your username"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.username && <div className="text-red-800">{errors.username}</div>}
          </div>

          <div className="mb-4">
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              pattern="\d{10}"
              maxLength="10"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.phoneNumber && <div className="text-red-800">{errors.phoneNumber}</div>}
          </div>

          <div className="mb-4">
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <div className="text-red-800">{errors.email}</div>}
          </div>

          <div className="mb-5">
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Change the type based on password visibility    
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            /> <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            style={{ position:'relative', bottom:'30px', left:'430px'}}
        >
            {passwordVisible ? (
                <span className="material-symbols-outlined">visibility_off</span> // Closed eye icon
            ) : (
                <span className="material-symbols-outlined">visibility</span> // Open eye icon
            )}
        </button>
            <p
              className={`mt-1 text-sm ${
                passwordStrength === "Strong"
                  ? "text-green-500"
                  : passwordStrength === "Moderate"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {password && `Password strength: ${passwordStrength}`}
            </p>
            {passwordStrength === "Weak" && (
              <p className="text-xs text-gray-500">
                Try using a mix of upper/lowercase letters, numbers, and symbols.
              </p>
            )}
            {errors.password && <div className="text-red-800">{errors.password}</div>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>

          <div className="flex justify-between items-center mt-4">
            <div className="border-b w-1/4"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="border-b w-1/4"></div>
          </div>

          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>

          <div className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={LoginClick}
              className="text-blue-600 hover:underline"
            >
              Login here
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
