// src/components/RoomLDetail.jsx

// Import React, useEffect, dan useState dari react
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Komponen untuk menampilkan detail kamar
const RoomDetail = () => {
  // State untuk menyimpan data kamar
  const [rooms, setRooms] = useState([]);

  // Mengambil data kamar dari server saat komponen dimuat
  useEffect(() => {
    axios.get('/rooms')  // Ganti dengan '/rooms'
      .then(response => setRooms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Room Detail</h2>
      <ul>
        {Array.isArray(rooms) && rooms.length > 0 ? (
          rooms.map(room => (
            <li key={room.room_id} className="mb-2 p-2 border border-gray-300">
              {room.room_name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No rooms available</li>
        )}
      </ul>
    </div>
  );
};


// const RoomDetail = ({ rooms }) => {
//   return (
//     <div>
//       <h2>Room List</h2>
//       {/* Menampilkan daftar kamar dalam bentuk daftar */}
//       <ul>
//         {Array.isArray(rooms) && rooms.length > 0 ? (
//           rooms.map(room => (
//             <li key={room.room_id}>{room.room_name}</li>
//           ))
//         ) : (
//           <li>No rooms available</li>
//         )}
//       </ul>
//     </div>
//   );
// };

export default RoomDetail;
