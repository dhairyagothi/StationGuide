import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import placeholderImage from '../assets/person.jpg';

const ProfilePage = ({ userId }) => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(placeholderImage);
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile data on component load
  useEffect(() => {
    const fetchUserProfile = async () => {

      try {
        const response = await axios.get(`http://localhost:3000/api/profile/${userId}`);
        const data = response.data;
        setUserData(data);
        setProfilePicture(data.profilePicture || placeholderImage);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h3 className='text-3xl text-center font-bold '>User Profile</h3>
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover border border-gray-300"
          />
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              const newProfilePicture = URL.createObjectURL(file);
              setProfilePicture(newProfilePicture); // Temporarily show new picture
              // Handle picture upload to server here
            }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
          <p className="text-gray-500">{userData.email}</p>
          <p className="text-gray-500">{userData.phoneNumber}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Profile Information and Stats */}
      <div className="mt-8 space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">About</h3>
          <p className="mt-2 text-gray-600">
            {userData.bio || "This is a placeholder bio. Update your profile to add more information."}
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">15</span>
            <span className="text-gray-500">Posts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">24</span>
            <span className="text-gray-500">Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">4.5</span>
            <span className="text-gray-500">Rating</span>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name || ''}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email || ''}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber || ''}
                onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={userData.bio || ''}
                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={() => {
                // Handle profile save here
                setIsEditing(false);
              }}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
