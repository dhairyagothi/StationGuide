// controllers/stationController.js
import Station from '../models/Stations.js';

export const createStation = async (req, res) => {
  try {
    const {
      name,
      location, // Location object with postalCode, city, and state
      stationCode,
      capacity,
      services
    } = req.body;

    // Create a new station document
    const newStation = new Station({
      name,
      location,
      stationCode,
      capacity,
      services
    });

    // Save the station document in the database
    const savedStation = await newStation.save();

    res.status(201).json({
      message: 'Station created successfully',
      station: savedStation
    });
  } catch (error) {
    console.error('Error creating station:', error);
    res.status(500).json({
      message: 'Failed to create station',
      error: error.message
    });
  }
};


export const getAllStations = async (req, res) => {
  try {
    // Fetch all stations from the database
    const stations = await Station.find()
      .populate('coolies', 'name') // Populating the coolies field with only their name
      .populate('wheelchairs', 'name') // Populating the wheelchairs field with only their name
      .populate('cloakrooms', 'name'); // Populating the cloakrooms field with only their name

    // If no stations are found, return a 404 error
    if (!stations || stations.length === 0) {
      return res.status(404).json({ message: 'No stations found' });
    }

    // Return the stations as JSON
    return res.status(200).json(stations);
  } catch (error) {
    // Return a 500 error if something goes wrong
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};