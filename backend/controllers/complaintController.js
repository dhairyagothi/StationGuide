import nodemailer from "nodemailer";
import Complaint from "../models/Complaint.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Complaint Received - Station Saarthi",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
        <!-- Header -->
        <div style="background-color: #a6e4f5; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
          <img src="cid:headerImage" alt="Station Saarthi" style="width: 150px; margin-bottom: 10px;">
          <h2 style="margin: 0;">Complaint Received</h2>
        </div>

        <!-- Body Content -->
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333;">Dear ${name},</p>
          <p>Thank you for submitting your complaint to Station Saarthi. We have received your complaint and will look into the matter as soon as possible.</p>
          <p style="font-size: 16px;">Your satisfaction is important to us. Please feel free to reach out if you have any further questions or require assistance.</p>

          <!-- Button -->
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://stationsaarthi.com" style="display: inline-block; padding: 12px 25px; background-color: #007bff; color: white; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
          <p style="font-size: 14px; color: #666;">Best regards,<br><strong>Station Saarthi Team</strong></p>
          <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Station Saarthi. All rights reserved.</p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: "image",
        path: "C:/Users/ayush/OneDrive/Desktop/StationGuide/frontend/src/assets/station.png", // Update this to the path where the image is stored
        cid: "headerImage",
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};

const submitComplaint = async (req, res) => {
  const { name, phoneNumber, email, complain } = req.body;

  if (!name || !phoneNumber || !email || !complain) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new complaint record in the database
    const newComplaint = new Complaint({ name, phoneNumber, email, complain });
    await newComplaint.save();

    // Send a confirmation email to the user
    await sendConfirmationEmail(email, name);

    res.status(200).json({
      message:
        "Complaint submitted successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Error submitting complaint:", error);
    res.status(500).json({
      message:
        "There was an error submitting your complaint. Please try again later.",
    });
  }
};

export default submitComplaint;
