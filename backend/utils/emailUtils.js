import nodemailer from 'nodemailer';

// Function to send OTP via email
export const sendOTPEmail = async (email, otp) => {
  try {
    // Create a transporter using SMTP settings (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS   // Your email password or app-specific password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Password Reset OTP',
      text: `Your OTP for password reset is ${otp}. It will expire in 10 minutes.`
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send OTP email');
  }
};
