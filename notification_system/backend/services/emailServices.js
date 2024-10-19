const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
