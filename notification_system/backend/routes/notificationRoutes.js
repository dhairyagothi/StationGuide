const express = require('express');
const { sendNotification, getUserNotifications } = require('../controllers/notificationController');
const router = express.Router();

// POST route to send a notification
router.post('/send', sendNotification);

// GET route to fetch user notifications
router.get('/:userId', getUserNotifications);

module.exports = router;
