import React, { useState } from 'react';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('account');

  const sections = [
    { id: 'account', label: 'Account Settings' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'display', label: 'Display & Accessibility' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-5 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Settings</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`p-3 rounded cursor-pointer transition-colors duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Account Settings */}
        {activeSection === 'account' && (
          <div className="max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Account Settings</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" placeholder="Enter your username" disabled className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="Enter your email" disabled className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <input type="password" placeholder="New password" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
          </div>
        )}

        {/* Privacy Settings */}
        {activeSection === 'privacy' && (
          <div className="max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Privacy Settings</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Profile Visibility</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Last Seen</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Everyone</option>
                <option>Friends Only</option>
                <option>No One</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Location Sharing</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeSection === 'notifications' && (
          <div className="max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Notification Settings</h2>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Receive notifications via email</label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Receive notifications on your device</label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Receive notifications for messages</label>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeSection === 'security' && (
          <div className="max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Security Settings</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enable 2FA</button>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Send alerts for unrecognized logins</label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Keep me signed in on trusted devices</label>
            </div>
          </div>
        )}

        {/* Display & Accessibility Settings */}
        {activeSection === 'display' && (
          <div className="max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Display & Accessibility</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Font Size</label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Enable high contrast mode</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
