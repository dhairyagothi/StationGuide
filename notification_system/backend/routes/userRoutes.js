const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Update user notification preferences
router.put('/:userId/preferences', async (req, res) => {
  const { userId } = req.params;
  const preferences = req.body;

  await User.findByIdAndUpdate(userId, { notificationPreferences: preferences });
  res.json({ message: 'Preferences updated successfully' });
});

module.exports = router;
