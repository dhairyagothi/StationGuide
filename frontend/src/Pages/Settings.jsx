import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCog, FaBell, FaUserAlt, FaLanguage, FaInfoCircle, FaPaperPlane } from 'react-icons/fa'; // Importing icons
import { div } from 'framer-motion/client';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('medium');

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
  <div>
    <h1 className="text-5xl text-red-300 font-bold text-center  mt-8">Settings</h1>

      <div className="w-full max-w-5xl mx-auto p-8 bg-gray-100 mt-10 mb-10 text-gray-800">
      
      {/* Account Management */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaUserCog className="inline mr-2"/> Account Management</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Change Password</span>
            <button className="text-blue-600 hover:underline">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Update Email</span>
            <button className="text-blue-600 hover:underline">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Delete Account</span>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaBell className="inline mr-2"/> Notification Settings</h2>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleToggleNotifications}
            className="mr-2"
          />
          <span>Enable Push Notifications</span>
        </div>
      </section>

      {/* Accessibility Options */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaUserAlt className="inline mr-2"/> Accessibility Options</h2>
        <div>
          <label className="block mb-2">Font Size:</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </section>

      {/* Language Preferences */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaLanguage className="inline mr-2"/> Language Preferences</h2>
        <select className="p-2 border border-gray-300 rounded">
          <option>English</option>
          <option>Hindi</option>
          <option>Other Languages</option>
        </select>
      </section>

      {/* About the App */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaInfoCircle className="inline mr-2"/> About StationSaarthi</h2>
        <p>
          StationSaarthi is dedicated to enhancing your travel experience with real-time updates and helpful resources. 
          For more information, visit our <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      {/* Feedback Section */}
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4"><FaPaperPlane className="inline mr-2"/> Feedback</h2>
        <textarea
          rows="4"
          placeholder="Your feedback..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Submit Feedback</button>
      </section>
    </div>
  </div>
  );
};

export default SettingsPage;
