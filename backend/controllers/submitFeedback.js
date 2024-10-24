import nodemailer from 'nodemailer';
import User from '../models/User.js';
import { generateOTP , verifyOTP} from '../utils/otputils.js'; // Import the OTP generation function
import { sendOTPEmail } from '../utils/emailUtils.js'; // Import the email sender utility if separated into a different file

import { hashPassword } from '../utils/authFunctions.js';

// Controller to handle user feedback submission
export const submitFeedback = async (req, res) => {
  const { rating, comment } = req.body;

  try {
    // The user is already authenticated and attached to req.user by verifyJWT
    const user = req.user; 

    // Update user's rating and comment fields
    user.rating = rating || user.rating; // If no rating is provided, keep the existing one
    user.comment = comment || user.comment; // If no comment is provided, keep the existing one

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: 'Feedback submitted successfully', user });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(error.statusCode || 500).json({ message: error.message || 'An error occurred while submitting feedback' });
  }
};

export const sendOTPToEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User does not exist' });
    }

    // Generate OTP and set expiry (10 minutes from now)
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    // Store the OTP and expiry in the user's document
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP to user's email using the utility
    await sendOTPEmail(email, otp);

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const verifyOTPController = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Check if email and OTP are provided
    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify the OTP and check expiration
    const isValid = verifyOTP(user, otp);

    if (!isValid) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // Clear OTP after successful verification (optional, but recommended)
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    // OTP is valid
    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Check if both email and new password are provided
    if (!email || !newPassword) {
      return res.status(400).json({ error: 'Email and new password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
