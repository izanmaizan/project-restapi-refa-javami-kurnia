// src/App.jsx

// Import React dan komponen dari react-router-dom
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import komponen-komponen yang digunakan di dalam aplikasi
import RoomList from './components/RoomList.jsx';
import RoomDetail from './components/RoomDetail.jsx';
import BookingForm from './components/BookingForm.jsx';
// import axios from 'axios';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold hover:text-gray-400">Home</Link>
          <div className="mx-4 border-l border-white h-6"></div>
          <Link to="/book" className="text-xl font-bold hover:text-gray-400">Book a Room</Link>
        </div>
      </div>
    </nav>
  );
}

const MainContent = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Konten utama */}
      <Routes>
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/" element={<RoomList />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <MainContent />
      </div>
    </Router>
  );
}


export default App;

