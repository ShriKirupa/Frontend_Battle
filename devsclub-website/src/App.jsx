import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import page components
import Home from './Pages/Home';
import Events from './Pages/Events';
import Members from './Pages/Members';
import ContactUs from './Pages/ContactUs';
import Bento from './Pages/Bento';
import './App.css'





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Bento />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
