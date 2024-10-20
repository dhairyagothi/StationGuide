const Notification = require('../models/Notification');
const User = require('../models/User');
const io = require('../server');

// Create new notification
const sendNotification = async (req, res) => {
  const { userId, title, message, type } = req.body;

  const notification = new Notification({
    userId,
    title,
    message,
    type,
  });

  await notification.save();

  // Emit real-time notification to user via Socket.io
  io.to(userId).emit('notification', { title, message, type });

  res.status(201).json({ message: 'Notification sent successfully' });
};

// Get notifications for user
const getUserNotifications = async (req, res) => {
  const userId = req.params.userId;
  const notifications = await Notification.find({ userId });
  res.json(notifications);
};

module.exports = { sendNotification, getUserNotifications };
