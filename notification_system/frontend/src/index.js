import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Register service worker for push notifications
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    console.log('Service worker registered:', registration);
  }).catch((error) => {
    console.log('Service worker registration failed:', error);
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
