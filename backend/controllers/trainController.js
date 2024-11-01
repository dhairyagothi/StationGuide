import Train from "../models/Trains.js";


// Create a new train
export const createTrain = async (req, res) => {
  try {
    const { trainNumber, trainName, nextStation, services, platformDetails, coachDetails } = req.body;

 
    const existingTrain = await Train.findOne({ trainNumber });
    if (existingTrain) {
      return res.status(400).json({ message: "Train with this number already exists" });
    }

 
    const newTrain = new Train({
      trainNumber,
      trainName,
      nextStation,
      services,
      platformDetails,
      coachDetails,
    });

    const savedTrain = await newTrain.save();

    return res.status(201).json({
      message: "Train created successfully",
      train: savedTrain,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating train", error: error.message });
  }
};

// Fetch all trains
export const getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    return res.status(200).json(trains);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching trains", error: error.message });
  }
};

// Fetch a single train by train number
export const getTrainByNumber = async (req, res) => {
  try {
    const { trainNumber } = req.params;

    const train = await Train.findOne({ trainNumber });

    if (!train) {
      return res.status(404).json({ message: "Train not found" });
    }

    return res.status(200).json(train);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching train", error: error.message });
  }
};

