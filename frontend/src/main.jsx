import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTopButton from './components/scrollToTop.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
              console.log('ServiceWorker registration successful');
          })
          .catch(err => {
              console.log('ServiceWorker registration failed: ', err);
          });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      <ScrollToTopButton />
    </GoogleOAuthProvider>
  </StrictMode>,
)
