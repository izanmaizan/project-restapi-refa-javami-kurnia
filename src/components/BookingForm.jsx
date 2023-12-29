// src/components/BookingForm.jsx

import React, { useState, useEffect } from 'react';
import axios from '../utils/axios.jsx';
import Modal from './Modal.jsx';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rooms, setRooms] = useState([]);
  const [roomId, setRoomId] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    fetch('http://localhost:3001/rooms')
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => console.error(error));
  };

  const openRoomSelectionModal = () => {
    setModalOpen(true);
  };

  const closeRoomSelectionModal = () => {
    setModalOpen(false);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    closeRoomSelectionModal();
  };

  const handleSubmit = () => {
    if (selectedRoom && selectedRoom.room_id) {
      axios.post('/booking', {
        name,
        email,
        room_id: selectedRoom.room_id,
        check_in: checkIn,
        check_out: checkOut,
      })
        .then(response => {
          console.log('Booking successful:', response.data);
          setName('');
          setEmail('');
          setRoomId('');
          setCheckIn('');
          setCheckOut('');
        })
        .catch(error => console.error('Error during booking:', error));
    } else {
      console.error('Selected room is null or does not have room_id');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
      <label className="block mb-2">Name:</label>
      <input
        className="border border-gray-300 p-2 mb-4 w-full"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="block mb-2">Email:</label>
      <input
        className="border border-gray-300 p-2 mb-4 w-full"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Room:</label>
      <input
        type="text"
        value={selectedRoom ? selectedRoom.room_name : ''}
        readOnly
        placeholder="Click to select room"
        onClick={openRoomSelectionModal}
      />

      {isModalOpen && (
        <Modal onClose={closeRoomSelectionModal}>
          <h2>Select a Room</h2>
          {Array.isArray(rooms) && rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.room_id} onClick={() => handleRoomSelect(room)}>
                {room.room_name}
              </div>
            ))
          ) : (
            <p>No rooms available</p>
          )}
        </Modal>
      )}

      <label>Check-In Date:</label>
      <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

      <label>Check-Out Date:</label>
      <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default BookingForm;


































// import React, { useState, useEffect } from 'react';
// import axios from '../utils/axios.jsx';
// import Modal from './Modal.jsx';

// const BookingForm = () => {
//     const [name, setName] = useState(''); // Tambahkan kembali deklarasi state ini
//     const [email, setEmail] = useState(''); // Tambahkan kembali deklarasi state ini
//     const [rooms, setRooms] = useState([]); // Tambahkan kembali deklarasi state ini
//     const [roomId, setRoomId] = useState('');
//     const [checkIn, setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');
    
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [selectedRoom, setSelectedRoom] = useState();

//       // Pindahkan useEffect ke luar dari openRoomSelectionModal
//           // useEffect(() => {
//           //   fetchRooms();
//           // }, []);
      
//           // const fetchRooms = () => {
//           //   axios
//           //     .get('/rooms')
//           //     .then((response) => {
//           //       console.log('Rooms data:', response.data);
//           //       setRooms(response.data);
//           //     })
//           //     .catch((error) => console.error(error));
//           // };



//           useEffect(() => {
//             fetchRooms();
//           }, []);
        
//           const fetchRooms = () => {
//             // Mengambil data dari database MySQL dan mengirimkannya sebagai respons JSON
//             fetch('http://localhost:3001/rooms')
//               .then(response => response.json())
//               .then(data => setRooms(data))
//               .catch(error => console.error(error));
//           };






//     const openRoomSelectionModal = () => {
//         console.log('Available Rooms:', rooms);
//         setModalOpen(true);
//       };
  
//       const closeRoomSelectionModal = () => {
//         setModalOpen(false);
//       };
    
//       const handleRoomSelect = (room) => {
//         setSelectedRoom(room);
//         closeRoomSelectionModal();
//       };

//     //   const handleSubmit = () => {
//     //     axios.post('/booking', {
//     //       name,
//     //       email,
//     //       room_id: selectedRoom.room_id, // Gunakan selectedRoom untuk mendapatkan room_id
//     //       check_in: checkIn,
//     //       check_out: checkOut,
//     //     })
//     //       .then(response => {
//     //         console.log('Booking successful:', response.data);
//     //         // Reset form or perform any other necessary actions
//     //         setName('');
//     //         setEmail('');
//     //         setRoomId('');
//     //         setCheckIn('');
//     //         setCheckOut('');
//     //       })
//     //       .catch(error => console.error('Error during booking:', error));

//     //       console.log('Rooms:', rooms);
//     //       console.log('Selected Room:', selectedRoom);
//     //   };


//     // const handleSubmit = () => {
//     //     // Pengecekan apakah selectedRoom tidak null dan memiliki properti room_id
//     //     if (selectedRoom && selectedRoom.room_id) {
//     //       axios.post('/booking', {
//     //         name,
//     //         email,
//     //         room_id: selectedRoom.room_id,
//     //         check_in: checkIn,
//     //         check_out: checkOut,
//     //       })
//     //         .then(response => {
//     //           console.log('Booking successful:', response.data);
//     //           // Reset form or perform any other necessary actions
//     //           setName('');
//     //           setEmail('');
//     //           setRoomId('');
//     //           setCheckIn('');
//     //           setCheckOut('');
//     //         })
//     //         .catch(error => console.error('Error during booking:', error));
//     //     } else {
//     //       console.error('Selected room is null or does not have room_id');
//     //     }
//     //   };


//     const handleSubmit = () => {
//   // Dapatkan informasi room berdasarkan roomId
//   const selectedRoom = rooms.find(room => room.room_id === parseInt(roomId));

//   // Menampilkan informasi pada modal atau melakukan operasi lainnya
//   if (selectedRoom) {
//     console.log('Selected Room:', selectedRoom);
//     // Buka modal atau lakukan operasi lainnya
//   } else {
//     console.error('Selected room is null or does not have room_id');
//   }

//   // ... kode lainnya untuk pengiriman data ke server
// };


//   return (
//     <div>
//       <h2>Booking Form</h2>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
//       <label>Room:</label>
//       <input
//         type="text"
//         value={selectedRoom ? selectedRoom.room_name : ''}
//         readOnly
//         placeholder="Click to select room"
//         onClick={openRoomSelectionModal}
//       />
//       {/* Tambahkan elemen div di bawah input untuk menampilkan informasi ruangan yang dipilih */}
//       <div onClick={openRoomSelectionModal}>
//         {selectedRoom ? selectedRoom.room_name : 'Click to select room'}
//       </div>
        
//       {/* Render modal untuk pemilihan ruangan */}
//       {isModalOpen && (
//         <Modal onClose={closeRoomSelectionModal}>
//         <h2>Select a Room</h2>
//         {Array.isArray(rooms) && rooms.length > 0 ? (
//           rooms.map((room) => (
//             <div key={room.room_id} onClick={() => handleRoomSelect(room)}>
//               {room.room_name}
//             </div>
//           ))
//         ) : (
//           <p>No rooms available</p>
//         )}
//       </Modal>
//       )}
      

//       <label>Check-In Date:</label>
//       <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

//       <label>Check-Out Date:</label>
//       <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default BookingForm;



































// // const BookingForm = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [rooms, setRooms] = useState([]);
// //   const [roomId, setRoomId] = useState('');
// //   const [checkIn, setCheckIn] = useState('');
// //   const [checkOut, setCheckOut] = useState('');

// //   useEffect(() => {
// //     fetchRooms();
// //   }, []);
  
// //   const fetchRooms = () => {
// //     axios.get('/rooms') // Ganti path menjadi /rooms
// //       .then(response => {
// //         console.log('Rooms data:', response.data);
// //         setRooms(response.data);
// //       })
// //       .catch(error => console.error(error));
// //   };


// //   const handleSubmit = () => {
// //     axios.post('/booking', {
// //       name,
// //       email,
// //       room_id: roomId,
// //       check_in: checkIn,
// //       check_out: checkOut,
// //     })
// //       .then(response => {
// //         console.log('Booking successful:', response.data);
// //         // Reset form or perform any other necessary actions
// //         setName('');
// //         setEmail('');
// //         setRoomId('');
// //         setCheckIn('');
// //         setCheckOut('');
// //       })
// //       .catch(error => console.error('Error during booking:', error));
// //   };


// //   return (
// //     <div>
// //       <h2>Booking Form</h2>
// //       <label>Name:</label>
// //       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
// //       <label>Email:</label>
// //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
// //       <label>Room:</label>
// //       <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
// //           <option value="">Select a room</option>
// //           {Array.isArray(rooms) && rooms.length > 0 ? (
// //             rooms.map((room) => (
// //               <option key={room.room_id} value={room.room_id}>
// //                 {room.room_name}
// //               </option>
// //             ))
// //           ) : (
// //             <option value="" disabled>
// //               No rooms available
// //             </option>
// //           )}
// //         </select>

// //       <label>Check-In Date:</label>
// //       <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

// //       <label>Check-Out Date:</label>
// //       <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

// //       <button onClick={handleSubmit}>Submit</button>
// //     </div>
// //   );
// // };

// // export default BookingForm;
