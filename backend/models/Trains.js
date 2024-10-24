// train.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trainSchema = new Schema(
  {
    trainNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    trainName: {
      type: String,
      required: true,
      trim: true,
    },
    nextStation: {
      type: {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        stationCode: {
          type: String,
          required: true,
          trim: true,
        },
        arrivalTime: {
          type: Date,
          required: true,
        },
      },
      required: true,
    },
    services: {
      type: [String],  // An array of available services like ["WiFi", "Food", "Lounge"]
      required: true,
    },
    platformDetails: {
      platformNumber: {
        type: Number,
        required: true,
      },
      boardingTime: {
        type: Date,
        required: true,
      },
    },
    coachDetails: [
      {
        coachNumber: {
          type: String,
          required: true,
          trim: true,
        },
        coachType: {
          type: String,
          enum: ['Sleeper', 'AC', 'General', 'ChairCar', 'FirstClass'],
          required: true,
        },
        capacity: {
          type: Number,
          required: true,
        },
        reservedSeats: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Train = mongoose.model("Train", trainSchema);
export default Train;
