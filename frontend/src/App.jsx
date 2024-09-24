import React from 'react' 
import Herosection from './Pages/Herosection'
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
