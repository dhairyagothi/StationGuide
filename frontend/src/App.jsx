import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Herosection from "./Pages/Herosection";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import PasswordRecovery from "./Pages/PasswordRecovery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import chatbotsvg from "./assets/svg/chatbot.svg";
import { useNavigate, Outlet } from "react-router-dom";
import RailwayStations from "./Pages/stations";
import NavigationPage from "./Pages/navigation";
import "./App.css";
import BookingPage from "./Pages/booking";
import MapPage from "./Pages/3Dmaps";
import SchedulePage from "./Pages/schedule";
import NotificationPage from "./Pages/notification";
import Chatbot from "./components/chatbot";
import ContactUs from "./Pages/ContactUs";
import Settings from "./components/Settings";
import GoogleTranslate from "./Pages/GoogleTranslate";
import Help from "./components/help";
import Contributor from "./Pages/contributor";
import Payment from "./Pages/Payment";
import HelpAndSupport from "./Pages/HelpandSupport";
import Emergency from "./Pages/Emergency";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import PrivacyPolicy from "./Pages/PrivacyPolicy"; // Added back from one version
import User from "./Pages/User"; // Added from the other version
import ComplainBox from "./Pages/ComplainBox";
import Metadata from "./metadata";
import SettingsPage from "./Pages/Settings";
import Faq from "./Pages/Faq";
import Feedback from "./Pages/Feedback";
import TicketSearchComponent from "./Pages/TicketsAvailability";

import ProfilePage from "./Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Metadata />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/Stations" element={<RailwayStations />} />
          <Route path="/Navigation" element={<NavigationPage />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/3DMap" element={<MapPage />} />
          <Route path="/Schedule" element={<SchedulePage />} />
          <Route path="/Notification" element={<NotificationPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Tickets" element={<TicketSearchComponent />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/GoogleTranslate" element={<GoogleTranslate />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contributor" element={<Contributor />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/complain" element={<ComplainBox />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
          {/* Restored PrivacyPolicy */}
          <Route path="/user" element={<User />} /> {/* Added User */}
          <Route path="*" element={<Error />} />
          <Analytics/>
        </Routes>
      </Router>

      {/* Optional chatbot icon at the bottom right */}
      {/* <div className='fixed bottom-0 right-0 z-50 m-4 cursor-pointer'>
        <img src={chatbotsvg} alt="chatbot" className='w-16 h-16' />
      </div> */}
    </>
  );
}

export default App;

export function ProtectedRoute() {
  const navigate = useNavigate();

  const verifyToken = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log("Token Verification error:", data.error);

      if (data.error || res.status === 400 || res.status === 500) {
        navigate("/Login");
      }

      if (res.status === 400 || res.status === 500) {
        navigate("/Login");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      navigate("/Login");
    }
  };

  useEffect(() => {
    verifyToken();
  }, [navigate]);

  return <Outlet />;
}
