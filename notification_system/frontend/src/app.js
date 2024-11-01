import React from 'react';
import NotificationCenter from './components/NotificationCenter';
import NotificationSettings from './components/NotificationSettings';

function App() {
  const userId = 'USER_ID'; // Replace with actual user ID logic from auth

  return (
    <div className="App">
      <h1>Welcome to the Notification System</h1>

      {/* Notification Center Component */}
      <NotificationCenter userId={userId} />

      {/* Notification Settings Component */}
      <NotificationSettings userId={userId} />
    </div>
  );
}

export default App;
