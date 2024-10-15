import express from "express";
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

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Logout route
router.post("/logout", verifyJWT, logoutUser);

// Verify route
router.get("/verify", verifyUser);

//cloakroom bookings route
router.post("/bookCloakroom", verifyJWT, createCloakroomBooking);

//wheelchair bookings route
router.post("/bookWheelchair", verifyJWT, createWheelchairBooking);

//coolie bookings route
router.post("/bookCoolie", verifyJWT, createCoolieBooking);

// get all stations route
router.get("/all-stations", verifyJWT, sendStations);

export default router;
