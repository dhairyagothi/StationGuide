import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTopButton from './components/scrollToTop.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      <ScrollToTopButton />
    </GoogleOAuthProvider>
  </StrictMode>,
)
