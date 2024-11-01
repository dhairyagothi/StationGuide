import express from "express";
import rateLimit from "express-rate-limit";
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
} from "../controllers/authController.js";
import { createCloakroomBooking } from "../controllers/cloakroomController.js";
import { createWheelchairBooking } from "../controllers/WheelchairController.js";
import { createCoolieBooking } from "../controllers/coolieController.js";
import { sendStations } from "../controllers/stationsController.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { submitFeedback } from "../controllers/submitFeedback.js";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 55 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: "Too many login attempts from this IP, please try again later.",
});

// Register route
router.post("/register", registerUser);

// Login route with rate limiter
router.post("/login", loginLimiter, loginUser);

// Logout route
router.post("/logout", verifyJWT, logoutUser);

// Verify route
router.get("/verify", verifyUser);
 
// Feedback route
router.post("/feedback", verifyJWT, submitFeedback);

// Cloakroom bookings route
router.post("/bookCloakroom", verifyJWT, createCloakroomBooking);

// Wheelchair bookings route
router.post("/bookWheelchair", verifyJWT, createWheelchairBooking);

// Coolie bookings route
router.post("/bookCoolie", verifyJWT, createCoolieBooking);

// Get all stations route
router.get("/all-stations", verifyJWT, sendStations);

export default router;
