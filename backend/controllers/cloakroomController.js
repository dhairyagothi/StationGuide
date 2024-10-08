import CloakroomBooking from "../models/CloakroomBooking.js";

export const createCloakroomBooking = async (req, res) => {
  const { station, items, storageStartDate, storageEndDate, charges } =
    req.body;

  if (!station || !items || !storageStartDate || !storageEndDate || !charges) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  try {
    const newBooking = new CloakroomBooking({
      station,
      items,
      storageStartDate: new Date(storageStartDate),
      storageEndDate: new Date(storageEndDate),
      charges,
    });

    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error creating cloakroom booking:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not create booking." });
  }
};
