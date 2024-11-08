import nodemailer from "nodemailer";
import ContactUs from "../models/Contact.js";
import "dotenv/config";


// POST Controller: Handles contact form submission
export const createContactUs = async (req, res) => {
  const { mail, subject, message } = req.body;

  // Check if required fields are present and valid
  if (!mail || !subject || !message) {
    return res.status(400).json({
      status: "error",
      message: "All fields (email, subject, message) are required.",
    });
  }

  // Validate email format using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail)) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a valid email address.",
    });
  }

  try {
    // Save the contact form data to the database
    const newContactRequest = new ContactUs({
      mail,
      subject,
      message,
    });
    await newContactRequest.save(); // Save the document to the MongoDB database

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: mail,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message,
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: "success",
      message: "Your contact request has been successfully received.",
    });
  } catch (err) {
    console.error(`Error during processing contact form: ${err.message}`);
    res.status(500).json({
      status: "error",
      message: "There was an error processing your message. Please try again later.",
    });
  }
};
