import nodemailer from "nodemailer";
import "dotenv/config";

export const createContactUs = async (req, res) => {
  const { mail, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Disable strict SSL verification
      },
    });

    const mailOptions = {
      from: mail,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message,
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, mailOptions) => {
      if (error) {
        console.error("Error occurred: " + error.message);
        return;
      }
    });

    res.status(200).json({
      status: "success",
      message: "Your contact request has been successfully received.",
    });
  } catch (err) {
    console.error(`Error at transport : ${err}`);
    res.status(500).json({
      status: "error",
      message:
        "There was an error sending your message. Please try again later.",
    });
  }
};
