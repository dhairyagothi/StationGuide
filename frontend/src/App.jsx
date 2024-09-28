import React from 'react' 
import Herosection from './Pages/Herosection'
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import chatbotsvg from './assets/svg/chatbot.svg';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

    <div className='fixed bottom-0 right-0 z-50 m-4 cursor-pointer'>
      <img src={chatbotsvg} alt="chatbot" className='w-16 h-16' />
    </div>

</>
  )
}

export default App
