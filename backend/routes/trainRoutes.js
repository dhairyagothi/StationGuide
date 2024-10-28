// routes.js
import express from 'express';
import { createTrain, getAllTrains, getTrainByNumber } from '../controllers/trainController.js';


const router = express.Router();

router.get('/:trainNumber', getTrainByNumber);
router.post('/', createTrain);
router.get('/', getAllTrains);


export default router;
