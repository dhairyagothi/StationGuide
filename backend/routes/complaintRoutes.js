// routes/complaint.js
import express from "express";
import { submitComplaint } from "../controllers/complaintController.js";
import { sendFeedbackEmail } from "../controllers/complaintController.js";

const router = express.Router();

// Handle complaint submission
router.post("/complaint", submitComplaint);

router.post("/userfeedback", sendFeedbackEmail);

export default router;
