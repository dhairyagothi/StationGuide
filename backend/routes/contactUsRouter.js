import express from 'express';
const router = express.Router();
import { createContactUs} from "../controllers/contactusController.js"; 

router.post("/contactus", createContactUs); 
export default router;