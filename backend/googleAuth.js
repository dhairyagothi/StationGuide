import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from './models/User.js'; // Assuming User model is in 'models' folder
import jwt from 'jsonwebtoken'; // Ensure you import jwt



dotenv.config();

const router = express.Router();

// Passport Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if the user already exists
    let user = await User.findOne({ email: profile.emails[0].value });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        password: '', // No password needed for Google login
        isVerified: true, // Assume Google login means verified
        otp: '', // No OTP for Google users
        otpExpiry: null, // No OTP expiry for Google users
      });
      await user.save();
    }

    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Google OAuth routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
}), (req, res) => {
  // Generate a JWT token with necessary user information
  const token = jwt.sign({ id: req.user._id, email: req.user.email }, process.env.SECRET, { expiresIn: '1h' });
  
  // Set the token in a cookie
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 }); // 1 hour

  // Redirect user to dashboard after successful login
  res.redirect('http://localhost:5173/');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.redirect('/');
  });
});

export default router;
