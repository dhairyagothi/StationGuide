import WheelchairBooking from "../models/WheelChairBooking.js";

export const createWheelchairBooking = async (req, res) => {
  const { station, bookingDate, bookingTime, wheelchairType } = req.body;

  if (!station || !bookingDate || !bookingTime) {
    return res
      .status(400)
      .json({
        message:
          "Please provide all required fields: station, bookingDate, bookingTime",
      });
  }

  try {
    const newBooking = new WheelchairBooking({
      station,
      bookingDate: new Date(bookingDate),
      bookingTime,
      wheelchairType: wheelchairType || "manual",
    });

    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error creating wheelchair booking:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not create wheelchair booking." });
  }
};
