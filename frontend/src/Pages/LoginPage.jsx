import React, { useState, useEffect } from "react";
import logo from "../assets/stationsaarthi.svg"; // Import your logo
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg"; // Assuming you have a back icon
import { loginValidation } from "../validations/validation";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  useEffect(() => {
    document.title = "Station Saarthi | LoginPage";
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // State for login success message
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

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

  const RegisterClick = () => {
    navigate("/Register"); // Navigates to the login page
  };

  const HomeClick = () => {
    navigate("/"); // Navigates to the home page
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginValidation.validate(
        { username, password },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        // newErrors[err.path] = err.errors[0];
      });

      setErrors(newErrors);
      return;
    }

    // Handle login logic here
    setLoginSuccess(true); // Set login success to true upon successful login
    setUsername(""); // Clear input fields after login
    setPassword("");
  };

  const handlePasswordRecoveryClick = () => {
    navigate("/password-recovery");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-5000">
      {/* Logo and Title */}
      <button onClick={HomeClick} className="absolute left-0 top-2">
        <img src={backicon} alt="" className="h-[5vh]" />
      </button>
      <div className="mb-10 text-center">
        <img
          src={logo}
          alt="Station Saarthi Logo"
          className="w-20 mx-auto h-22"
        />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">
          Station Saarthi
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Your Trusted Platform Guide
        </p>
      </div>

      {/* Login Form */}
      <form
        noValidate
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        {/* Login Heading */}
        <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
          Login
        </h2>

        {/* Success Message */}
        {loginSuccess && (
          <p className="mb-4 text-center text-green-600 font-semibold">
            Login successful! Welcome back.
          </p>
        )}

        {/* Username Input */}
        <div className="mb-5">
          <label
            className="flex gap-2 mb-2 font-semibold text-gray-700"
            htmlFor="username"
          >
            Username <FaUser />
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.username && (
            <div className="text-red-800">{errors.username}</div>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <label
            className="flex gap-2 mb-2 font-semibold text-gray-700"
            htmlFor="password"
          >
            Password <MdOutlinePassword className="h-5" />
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />{" "}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-12 right-3 flex items-center text-gray-500"
          >
            {passwordVisible ? (
              <span className="material-symbols-outlined">visibility_off</span> // Closed eye icon
            ) : (
              <span className="material-symbols-outlined">visibility</span> // Open eye icon
            )}
          </button>
          {errors.password && (
            <div className="text-red-800">{errors.password}</div>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
        >
          Login
        </button>

        <div className="flex items-center justify-between mt-4">
          <div className="w-1/4 border-b"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="w-1/4 border-b"></div>
        </div>

        <div className="mt-4">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>

        {/* Forgot Password Link */}
        <p className="mt-4 text-gray-600">
          <button
            onClick={handlePasswordRecoveryClick}
            className="text-blue-500 underline focus:outline-none"
          >
            Forgot Password?
          </button>
        </p>

        {/* Don't have an account link */}
        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={RegisterClick}
            className="text-blue-500 underline focus:outline-none"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
