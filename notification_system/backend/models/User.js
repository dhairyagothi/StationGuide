const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  notificationPreferences: {
    type: Map,
    of: Boolean, // Preferences for notifications like 'events', 'updates', etc.
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
