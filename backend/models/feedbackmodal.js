import mongoose from "mongoose";

// Define the Feedback schema
const feedbackSchema = new mongoose.Schema(
  {
    senderEmail: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
    message: {
      type: String,
      required: true,
      maxlength: [500, "Feedback message cannot exceed 500 characters"],
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
