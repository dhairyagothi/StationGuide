// coolieBooking.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coolieBookingSchema = new Schema(
  {
    station: {
      type: Schema.Types.ObjectId,
      ref: 'Station',
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },
    departureLocation: {
      type: String,
      required: true,
      trim: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingTime: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const CoolieBooking = mongoose.model("CoolieBooking", coolieBookingSchema);
export default CoolieBooking;
