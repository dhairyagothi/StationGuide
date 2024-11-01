import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // For OTP input
  const [newPassword, setNewPassword] = useState(""); // For new password input
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirm password input
  const [step, setStep] = useState(1); // For handling the steps (1: Email, 2: OTP, 3: Password Reset)
  const [otpDisabled, setOtpDisabled] = useState(false); // For disabling OTP input after submission
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Step 1: Handle sending OTP to email
  const handlePasswordRecovery = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/station/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP has been sent to your email.");
        setStep(2); // Move to OTP input step
      } else {
        setError(data.error || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Handle OTP verification
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/station/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP verified successfully. You can now reset your password.");
        setStep(3); // Move to password reset step
        setOtpDisabled(true); // Disable OTP input after successful verification
      } else {
        setError(data.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Handle new password submission
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/station/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset successfully. You can now log in.");
        navigate("/login");
      } else {
        setError(data.error || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
          Password Recovery
        </h2>

        {/* Success Message */}
        {message && (
          <p className="mb-4 text-center text-green-600 font-semibold">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mb-4 text-center text-red-600 font-semibold">
            {error}
          </p>
        )}

        {/* Form */}
        <form noValidate onSubmit={step === 1 ? handlePasswordRecovery : step === 2 ? handleVerifyOTP : handlePasswordReset}>
          {/* Email Field (always visible) */}
          <div className="mb-5">
            <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={step !== 1} // Disable email field after step 1
            />
          </div>

          {/* OTP Field (visible after step 1) */}
          {step >= 2 && (
            <div className="mb-5">
              <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={otpDisabled} // Disable OTP input after step 2
              />
            </div>
          )}

          {/* Password Fields (visible after step 2) */}
          {step === 3 && (
            <>
              <div className="mb-5">
                <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="flex gap-2 mb-2 font-semibold text-gray-700" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className={`w-full py-3 mb-4 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading
              ? step === 3
                ? "Resetting Password..."
                : step === 2
                ? "Verifying..."
                : "Sending..."
              : step === 3
              ? "Reset Password"
              : step === 2
              ? "Verify OTP"
              : "Recover Password"}
          </button>
        </form>

        <button
          onClick={handleBackToLogin}
          className="w-full py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-gray-500 rounded-lg hover:bg-gray-600 hover:scale-105"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default PasswordRecovery;
