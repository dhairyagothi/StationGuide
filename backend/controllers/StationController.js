import Station from "../models/Stations.js";

export const createStation = async (req, res) => {
  try {
    const { name, location, stationCode, capacity, services } = req.body;

    const newStation = new Station({
      name,
      location,
      stationCode,
      capacity,
      services,
    });

    const savedStation = await newStation.save();

    res.status(201).json({
      message: "Station created successfully",
      station: savedStation,
    });
  } catch (error) {
    console.error("Error creating station:", error);
    res.status(500).json({
      message: "Failed to create station",
      error: error.message,
    });
  }
};

export const getAllStations = async (req, res) => {
  try {
    const stations = await Station.find()
      .populate("coolies", "name")
      .populate("wheelchairs", "name")
      .populate("cloakrooms", "name");

    if (!stations || stations.length === 0) {
      return res.status(404).json({ message: "No stations found" });
    }

    return res.status(200).json(stations);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
