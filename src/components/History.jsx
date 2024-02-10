// src/components/History.jsx
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const History = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios
      .get('http://localhost:3001/guests')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => console.error(error));
  };

  const calculateTotalCost = (checkIn, checkOut, price) => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const durationInDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
    return durationInDays * price;
  };

  const saveToBookingHistory = (booking) => {
    axios
      .post('http://localhost:3001/booking_history', {
        guest_name: booking.name,
        guest_email: booking.email,
        room_name: booking.Room.room_name,
        check_in: booking.check_in,
        check_out: booking.check_out,
        price_per_night: booking.Room.price,
        total_cost: calculateTotalCost(booking.check_in, booking.check_out, booking.Room.price),
      })
      .then((response) => {
        console.log('Data saved to booking_history:', response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='history'>
      <h2>Booking History</h2>
      <table className='rwd-table-history'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Room</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Price per Night</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.Room.room_name}</td>
              <td>{booking.check_in}</td>
              <td>{booking.check_out}</td>
              <td>Rp.{booking.Room.price}</td>
              <td>Rp.{calculateTotalCost(booking.check_in, booking.check_out, booking.Room.price)}</td>
              <td>
                <button onClick={() => saveToBookingHistory(booking)}>
                  Save to History
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
