import { useState, useEffect } from "react";
import logo from "../assets/stationsaarthi.svg"; // Import your logo
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg"; // Assuming you have a back icon
import { loginValidation } from "../validations/validation";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { auth, provider, signInWithPopup } from "./Firebase"; // Import Firebase authentication methods
import { FaGoogle } from "react-icons/fa"; // Import Google icon
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  useEffect(() => {
    document.title = "Station Saarthi | LoginPage";
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [loader, SetLoader] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const RegisterClick = () => {
    navigate("/Register");
  };

  const HomeClick = () => {
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    SetLoader(true);
    try {
      await loginValidation.validate(
        { username, password },
        { abortEarly: false }
      );
      setErrors({});

      // Handle login logic here
      setLoginSuccess(true);
      setUsername("");
      setPassword("");
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    } finally {
      SetLoader(false);
    }
  };

  const handlePasswordRecoveryClick = () => {
    navigate("/password-recovery");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User Info:", user);
      // Optionally navigate or handle user state here
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500">
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
        className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
          Login
        </h2>

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
        <div className="mb-6">
          <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="password">
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
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{ position: "relative", bottom: "32px", left: "280px" }}
          >
            {passwordVisible ? (
              <span className="material-symbols-outlined">visibility_off</span>
            ) : (
              <span className="material-symbols-outlined">visibility</span>
            )}
          </button>
          {errors.password && (
            <div className="text-red-800">{errors.password}</div>
          )}

          {/* Adjusted Forgot Password Link */}
          <div className="flex justify-end mt-1" style={{ marginTop: "-25px" }}>
            <button
              onClick={handlePasswordRecoveryClick}
              className="text-blue-500 underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>
        </div>


        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
        >
          Login
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick="window.location.href='https://accounts.google.com'" // This triggers Google authentication
          className="flex items-center justify-center w-full py-3 mt-4 font-semibold text-white transition duration-300 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-600 hover:scale-105"

        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Icon"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Sign in with Google
        </button>
      </form>

      {/* Forgot Password Link */}
      <p className="mt-4 text-gray-600">
        <button
          onClick={handlePasswordRecoveryClick}
          className="text-blue-500 underline focus:outline-none"

        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Icon"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Sign in with Google
        </button>
        {/* Don't have an account link */}
        <div className="flex justify-center">
          <p className="mt-6 text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={RegisterClick}
              className="text-blue-500 underline focus:outline-none"
            >
              Register
            </button>
          </p>
        </div>

    
    </div>
  );
};

export default Login;
