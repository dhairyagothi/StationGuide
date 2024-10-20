import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const NotificationCenter = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from API
    const fetchNotifications = async () => {
      const { data } = await axios.get(`/api/notifications/${userId}`);
      setNotifications(data);
    };

    fetchNotifications();

    // Socket.io connection for real-time notifications
    const socket = io();

    socket.on('notification', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => socket.disconnect();
  }, [userId]);

  return (
    <div>
      <h2>Notification Center</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            <strong>{notification.title}</strong>: {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
