// station.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: {
        postalCode: {
          type: Number,
          required: true,
          trim: true,
        },
        city: {
          type: String,
          required: true,
          trim: true,
        },
        state: {
          type: String,
          required: true,
          trim: true,
        },
      },
      required: true,
    },
    stationCode: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    services: {
      type: [String], 
      required: true,
    },
    coolies: [{
      type: Schema.Types.ObjectId,
      ref: 'CoolieBooking',
    }],
    wheelchairs: [{
      type: Schema.Types.ObjectId,
      ref: 'WheelchairBooking',
    }],
    cloakrooms: [{
      type: Schema.Types.ObjectId,
      ref: 'CloakroomBooking',
    }],
  },
  {
    timestamps: true,
  }
);

const Station = mongoose.model("Station", stationSchema);
export default Station;
