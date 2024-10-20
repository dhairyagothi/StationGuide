import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationSettings = ({ userId }) => {
  const [preferences, setPreferences] = useState({
    events: true,
    updates: true,
  });

  useEffect(() => {
    // Fetch user preferences from the backend
    const fetchPreferences = async () => {
      const { data } = await axios.get(`/api/users/${userId}/preferences`);
      setPreferences(data.notificationPreferences);
    };

    fetchPreferences();
  }, [userId]);

  const handleSave = async () => {
    await axios.put(`/api/users/${userId}/preferences`, preferences);
    alert('Preferences saved');
  };

  return (
    <div>
      <h2>Notification Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={preferences.events}
          onChange={(e) => setPreferences({ ...preferences, events: e.target.checked })}
        />
        Events
      </label>
      <label>
        <input
          type="checkbox"
          checked={preferences.updates}
          onChange={(e) => setPreferences({ ...preferences, updates: e.target.checked })}
        />
        Updates
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NotificationSettings;
