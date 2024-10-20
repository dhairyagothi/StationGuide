import WheelchairBooking from "../models/WheelchairBooking.js";
import { io } from "../index.js";

// Controller to handle booking creation
export const createWheelchairBooking = async (req, res) => {
  const { station, bookingDate, bookingTime, wheelchairType } = req.body;

  try {
    const newBooking = new WheelchairBooking({
      station,
      bookingDate: new Date(bookingDate),
      bookingTime,
      wheelchairType: wheelchairType || "manual",
    });

    const savedBooking = await newBooking.save();

    // Emit real-time booking confirmation to the client
    io.emit("wheelchairBookingConfirmation", {
      message: `Your booking at ${station} for ${bookingDate} has been confirmed.`,
      booking: savedBooking,
    });

    // Send back HTTP response as well
    res
      .status(201)
      .json({ message: "Booking created successfully", booking: savedBooking });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
