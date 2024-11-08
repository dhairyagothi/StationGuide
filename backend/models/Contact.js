import mongoose from 'mongoose';
const contactUsSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email format validation
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    dateSubmitted: {
      type: Date,
      default: Date.now, // Automatically set the current date when the form is submitted
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create a model based on the schema
 const ContactUs = mongoose.model('Contact', contactUsSchema);


 export default ContactUs