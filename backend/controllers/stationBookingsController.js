// stationController.js
import Station from '../models/Stations.js';
import CoolieBooking from '../models/CoolieBooking.js';
import WheelchairBooking from '../models/WheelchairBooking.js';
import CloakroomBooking from '../models/CloakroomBooking.js';

// Fetch all bookings associated with a station by ID
export const getStationBookings = async (req, res) => {
  try {
    const stationId = req.params.id;

    // Check if the station exists
    const station = await Station.findById(stationId);
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }

    // Retrieve bookings for this station
    const coolieBookings = await CoolieBooking.find({ station: stationId });
    const wheelchairBookings = await WheelchairBooking.find({ station: stationId });
    const cloakroomBookings = await CloakroomBooking.find({ station: stationId });

    // Construct the response object
    const response = {
      station: station,
      coolieBookings: coolieBookings,
      wheelchairBookings: wheelchairBookings,
      cloakroomBookings: cloakroomBookings
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Fetch coolie bookings by station ID
export const getCoolieBookingsByStation = async (req, res) => {
  try {
    const stationId = req.params.id;
    
    const coolieBookings = await CoolieBooking.find({ station: stationId });

    return res.status(200).json(coolieBookings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Fetch wheelchair bookings by station ID
export const getWheelchairBookingsByStation = async (req, res) => {
  try {
    const stationId = req.params.id;
    
    const wheelchairBookings = await WheelchairBooking.find({ station: stationId });

    return res.status(200).json(wheelchairBookings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Fetch cloakroom bookings by station ID
export const getCloakroomBookingsByStation = async (req, res) => {
  try {
    const stationId = req.params.id;
    
    const cloakroomBookings = await CloakroomBooking.find({ station: stationId });

    return res.status(200).json(cloakroomBookings);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
