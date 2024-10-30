import { useState, useEffect } from "react";
import logo from "../assets/stationsaarthi.svg"; // Import your logo
import { useNavigate } from "react-router-dom";
import backicon from "../assets/svg/backicon.svg"; // Assuming you have a back icon
import { loginValidation } from "../validations/validation";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser, FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google"; // For Google Login
import { auth, provider, signInWithPopup } from "./Firebase"; // Firebase authentication methods

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

  // Handle Google Login Success for @react-oauth/google
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    console.log("Decoded Google Token:", decoded);

    try {
      const response = await fetch("https://stationguide.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          isGoogle: true,
        }),
      });

      const data = await response.json();
      response.ok ? setLoginSuccess(true) : console.log("Error:", data.error);
    } catch (error) {
      console.error("Error registering with Google:", error);
    }
  };

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginValidation.validate({ username, password }, { abortEarly: false });
      setErrors({});
      setLoginSuccess(true);
      setUsername("");
      setPassword("");
    } catch (error) {
      setErrors(error.inner.reduce((acc, err) => ({ ...acc, [err.path]: err.message }), {}));
    }
  };

  const handleGoogleLoginWithFirebase = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User Info:", result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500">
      <button onClick={() => navigate("/")} className="absolute left-0 top-2">
        <img src={backicon} alt="Back" className="h-[5vh]" />
      </button>
      <div className="mb-10 text-center">
        <img src={logo} alt="Station Saarthi Logo" className="w-20 mx-auto h-22" />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Station Saarthi</h1>
        <p className="mt-2 text-lg text-gray-600">Your Trusted Platform Guide</p>
      </div>

      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">Login</h2>
        
        {loginSuccess && <p className="mb-4 text-center text-green-600 font-semibold">Login successful! Welcome back.</p>}

        <div className="mb-5">
          <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="username">
            Username <FaUser />
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.username && <div className="text-red-800">{errors.username}</div>}
        </div>

        <div className="mb-6 relative">
          <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="password">
            Password <MdOutlinePassword className="h-5" />
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-12 right-3 flex items-center text-gray-500">
            {passwordVisible ? <span className="material-symbols-outlined">visibility_off</span> : <span className="material-symbols-outlined">visibility</span>}
          </button>
          {errors.password && <div className="text-red-800">{errors.password}</div>}
        </div>

        <button type="submit" className="w-full py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Login</button>

        <div className="flex items-center justify-between mt-4">
          <div className="w-1/4 border-b"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="w-1/4 border-b"></div>
        </div>

        <div className="mt-4">
          <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => console.log("Google Sign-In failed")} />
          <button type="button" onClick={handleGoogleLoginWithFirebase} className="flex items-center justify-center w-full py-3 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
