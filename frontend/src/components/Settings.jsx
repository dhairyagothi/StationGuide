// SettingsPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [profileDetails, setProfileDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Station Road, Yarthi City",
    password: "",
    confirmPassword: "",
  });

  const [generalSettings, setGeneralSettings] = useState({
    language: "English",
    theme: "Light",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    trainUpdates: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    locationTracking: true,
    profileVisibility: "Public",
  });

  // Handlers for input changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({ ...profileDetails, [name]: value });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({ ...generalSettings, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handlePrivacyChange = (e) => {
    const { name, value } = e.target;
    setPrivacySettings({ ...privacySettings, [name]: value });
  };

  // Navigate back to home page
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        <h2 className="text-3xl font-semibold mb-6">Station Yarthi Settings</h2>

        <div className="flex justify-end mb-4">
          <button
            onClick={goToHome}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Back
          </button>
        </div>

        {/* Profile Details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={profileDetails.name}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profileDetails.email}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={profileDetails.phoneNumber}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={profileDetails.address}
                onChange={handleProfileChange}
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Change Password</label>
              <input
                type="password"
                name="password"
                value={profileDetails.password}
                onChange={handleProfileChange}
                placeholder="New password"
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={profileDetails.confirmPassword}
                onChange={handleProfileChange}
                placeholder="Confirm new password"
                className="border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700">Language</label>
              <select
                name="language"
                value={generalSettings.language}
                onChange={handleGeneralChange}
                className="block w-40 border border-gray-300 rounded-md p-2"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700">Theme</label>
              <select
                name="theme"
                value={generalSettings.theme}
                onChange={handleGeneralChange}
                className="block w-40 border border-gray-300 rounded-md p-2"
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700">Email Alerts</label>
              <input
                type="checkbox"
                name="emailAlerts"
                checked={notifications.emailAlerts}
                onChange={handleNotificationChange}
                className="h-5 w-5"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700">SMS Alerts</label>
              <input
                type="checkbox"
                name="smsAlerts"
                checked={notifications.smsAlerts}
                onChange={handleNotificationChange}
                className="h-5 w-5"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-700">Train Updates</label>
              <input
                type="checkbox"
                name="trainUpdates"
                checked={notifications.trainUpdates}
                onChange={handleNotificationChange}
                className="h-5 w-5"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700">Location Tracking</label>
              <input
                type="checkbox"
                name="locationTracking"
                checked={privacySettings.locationTracking}
                onChange={handlePrivacyChange}
                className="h-5 w-5"
              />
            </div>
          </div>
        </div>

        {/* Save and Back to Home Button */}
        <div className="flex justify-between">
          <button
            onClick={goToHome}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
          >
            Back to Home
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
