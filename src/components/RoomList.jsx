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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Room List</h2>
      <ul>
        {Array.isArray(rooms) && rooms.length > 0 ? (
          rooms.map(room => (
            <li key={room.room_id} className="mb-2 p-2 border border-gray-300">
              <b>{room.room_name}</b> : {room.description}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No rooms available</li>
        )}
      </ul>
    </div>
  );
};

export default RoomList;
