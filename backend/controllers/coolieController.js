import { io } from "../index.js";
import CoolieBooking from "../models/CoolieBooking.js";

export const createCoolieBooking = async (req, res) => {
  try {
    const {
      station,
      pickupLocation,
      departureLocation,
      bookingDate,
      bookingTime,
      price,
    } = req.body;

    if (
      !station ||
      !pickupLocation ||
      !departureLocation ||
      !bookingDate ||
      !bookingTime ||
      !price
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields." });
    }

    const coolieBooking = new CoolieBooking({
      station,
      pickupLocation,
      departureLocation,
      bookingDate,
      bookingTime,
      price,
    });

    const savedBooking = await coolieBooking.save();

    io.emit("coolieBookingConfirmation", {
      message: `Your booking at ${station} for coolie has been confirmed.`,
      booking: savedBooking,
    });

    res.status(201).json({
      message: "Coolie booking created successfully.",
      data: savedBooking,
    });
  } catch (error) {
    console.error("Error creating coolie booking:", error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the booking." });
  }
};
