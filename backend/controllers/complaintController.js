
import nodemailer from 'nodemailer'
import Complaint from '../models/Complaint.js';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


const sendConfirmationEmail = (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Complaint Received - Station Saarthi',
    text: `Dear ${name},\n\nThank you for submitting your complaint. We have received your complaint and will look into the matter soon.\n\nBest regards,\nStation Saarthi`
  };

  return transporter.sendMail(mailOptions);
};

const submitComplaint = async (req, res) => {
    const { name, phoneNumber, email, complain } = req.body;
  
    if (!name || !phoneNumber || !email || !complain) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      // Create a new complaint record in the database
      const newComplaint = new Complaint({ name, phoneNumber, email, complain });
      await newComplaint.save();
  
      // Send a confirmation email to the user
      await sendConfirmationEmail(email, name);
  
      res.status(200).json({ message: 'Complaint submitted successfully! We will get back to you soon.' });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      res.status(500).json({ message: 'There was an error submitting your complaint. Please try again later.' });
    }
  }

export default submitComplaint;