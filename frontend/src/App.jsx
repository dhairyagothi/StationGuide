import React, { useEffect } from 'react';
import Herosection from './Pages/Herosection';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import PasswordRecovery from './Pages/PasswordRecovery'; // From main
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import chatbotsvg from './assets/svg/chatbot.svg';
import { useNavigate, Outlet } from 'react-router-dom';
import RailwayStations from './Pages/stations';
import NavigationPage from './Pages/navigation';
import './App.css';
import BookingPage from './Pages/booking';
import MapPage from './Pages/3Dmaps';
import SchedulePage from './Pages/schedule';
import NotificationPage from './Pages/notification';
import Chatbot from './components/chatbot';
import ContactUs from './Pages/ContactUs';
import Settings from './components/Settings';
import Help from './components/help';
import About from './components/about';
import Contributor from './Pages/contributor';
import Payment from './Pages/Payment';
import HelpAndSupport from './Pages/HelpandSupport';
import Emergency from './Pages/Emergency';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import PrivacyPolicy from './Pages/PrivacyPolicy'; // From HamburgerMenu
import User from './Pages/User'; // From main
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Herosection />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/password-recovery' element={<PasswordRecovery />} /> {/* From main */}
          <Route path='/Stations' element={<RailwayStations />} />
          <Route path='/Navigation' element={<NavigationPage />} />
          <Route path='/Booking' element={<BookingPage />} />
          <Route path='/3DMap' element={<MapPage />} />
          <Route path='/Schedule' element={<SchedulePage />} />
          <Route path='/Notification' element={<NotificationPage />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/help' element={<Help />} />
          <Route path='/about' element={<About />} />
          <Route path='/contributor' element={<Contributor />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/emergency' element={<Emergency />} />
          <Route path='/help-and-support' element={<HelpAndSupport />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} /> {/* From HamburgerMenu */}
          <Route path='/user' element={<User />} /> {/* From main */}
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRoute() {
  const navigate = useNavigate();

  // Async function to verify the token
  const verifyToken = async () => {
    try {
      const res = await fetch('http://localhost:3000/auth/verify', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      console.log('Token Verification error:', data.error); // For debugging

      if (data.error || res.status === 400 || res.status === 500) {
        navigate('/Login');
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      navigate('/Login');
    }
  };

  useEffect(() => {
    verifyToken();
  }, [navigate]);

  // If everything is fine, render the protected content
  return <Outlet />;
}
