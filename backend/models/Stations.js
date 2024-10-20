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
      type: [String], // An array to list services like cloakroom, parking, restrooms, etc.
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Station = mongoose.model("Station", stationSchema);
export default Station;
