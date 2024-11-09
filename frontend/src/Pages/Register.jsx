import React, { useState, useEffect } from "react";
import logo from "../assets/stationsaarthi.svg";
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg";
import { FaFacebook, FaUser, FaPhone } from "react-icons/fa";
import { MdAttachEmail, MdOutlinePassword } from "react-icons/md";
import { registerValidation } from "../validations/validation";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  useEffect(() => {
    document.title = "Station Saarthi | Register";
  }, []);

  const navigate = useNavigate();
  const LoginClick = () => navigate("/Login");
  const HomeClick = () => navigate("/");

  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loader, SetLoader] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerValidation.validate(
        { username, password, phoneNumber, email },
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
      SetLoader(true);
      const response = await fetch(
        "https://stationguidebackend.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            phoneNumber: phoneNumber ? phoneNumber : "",
            email,
            password,
            isGoogle: false,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.token);
        setConfirmationMessage(
          "Your account is created successfully. Please login to access the website."
        );
        setUserName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        SetLoader(false);
      } else {
        console.log(data.error);
        setConfirmationMessage(`Error: ${data.error}`);
        SetLoader(false);
      }
    } catch (error) {
      setConfirmationMessage("Registration failed. Please try again.");
      SetLoader(false);
    }
  };

  useEffect(() => {
    if (confirmationMessage) {
      const timer = setTimeout(() => setConfirmationMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [confirmationMessage]);

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

  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-100 to-blue-500">
        {confirmationMessage && (
          <div className="fixed top-0 left-0 w-full p-3 text-center text-white bg-green-600 bg-opacity-80">
            {confirmationMessage}
          </div>
        )}

        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={loader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <button onClick={HomeClick} className="absolute left-0 top-2">
          <img src={backicon} alt="Back" className="h-[5vh]" />
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
              className="flex gap-2 mb-1 font-semibold text-gray-700"
              htmlFor="username"
            >
              Username <FaUser />
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.username && (
              <div className="text-red-800">{errors.username}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              className="flex gap-2 mb-1 font-medium text-gray-700"
              htmlFor="phoneNumber"
            >
              Phone Number <FaPhone />
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
            {errors.phoneNumber && (
              <div className="text-red-800">{errors.phoneNumber}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              className="flex gap-2 mb-1 font-medium text-gray-700"
              htmlFor="email"
            >
              Email <MdAttachEmail className="h-7" />
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
              className="flex gap-2 mb-1 font-medium text-gray-700"
              htmlFor="password"
            >
              Password <MdOutlinePassword className="h-7" />
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{ position: "relative", bottom: "30px", left: "430px" }}
            >
              {passwordVisible ? "👁️" : "👁️‍🗨️"}
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
            {errors.password && (
              <div className="text-red-800">{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>

          <div className="flex items-center justify-between mt-4">
            <div className="w-1/4 border-b"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="w-1/4 border-b"></div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                (window.location.href = "https://accounts.google.com")
              }
              className="flex items-center justify-center w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-600 hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Icon"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Sign in with Google
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={LoginClick}
                className="font-semibold text-blue-600 underline"
              >
                Log In
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
