// src/components/RoomList.jsx

// Import React, useEffect, dan useState dari react
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Komponen untuk menampilkan daftar kamar
const RoomList = () => {
  // State untuk menyimpan data kamar
  const [rooms, setRooms] = useState([]);

  // Mengambil data kamar dari server saat komponen dimuat
  useEffect(() => {
    axios.get('http://localhost:3001/rooms')
      .then(response => setRooms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='roomList'>
      <h2>Room List</h2>
      {/* Menampilkan daftar kamar dalam bentuk tabel */}
      <table className='rwd-table'>
        <thead>
          <tr>
            <th className='roomHead'>Room Name</th>
            <th className='roomHead'>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(rooms) && rooms.length > 0 ? (
            rooms.map(room => (
              <tr key={room.room_id}>
                <td className='roomName'>{room.room_name}</td>
                <td className='description'>{room.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No rooms available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
