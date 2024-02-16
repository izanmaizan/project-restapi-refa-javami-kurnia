// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RoomList from './components/RoomList.jsx';
import RoomDetail from './components/RoomDetail.jsx';
import BookingForm from './components/BookingForm.jsx';
import History from './components/History.jsx';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <span className='credit'>
      &copy; Maizan Insani Akbar
      </span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<RoomList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
