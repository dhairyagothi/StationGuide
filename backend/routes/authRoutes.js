import express from 'express';
import { registerUser, loginUser, logoutUser, verifyUser } from '../controllers/authController.js';
import { createCloakroomBooking } from '../controllers/cloakroomController.js';
import { createWheelchairBooking } from '../controllers/WheelchairController.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', logoutUser);

// Verify route
router.get('/verify', verifyUser);

//cloakroom bookings route
router.post('/bookCloakroom', createCloakroomBooking);

//wheelchair bookings route
router.post('/bookWheelchair', createWheelchairBooking);

export default router;