import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Modal from './Modal.jsx';

const BookingForm = () => {
    const [name, setName] = useState(''); // Tambahkan kembali deklarasi state ini
    const [email, setEmail] = useState(''); // Tambahkan kembali deklarasi state ini
    const [rooms, setRooms] = useState([]); // Tambahkan kembali deklarasi state ini
    const [roomId, setRoomId] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState();

    
  const [isEmailValid, setIsEmailValid] = useState(true); // Tambahkan variabel untuk validasi email

    const [error, setError] = useState(null);


      // Pindahkan useEffect ke luar dari openRoomSelectionModal
          useEffect(() => {
            fetchRooms();
          }, []);
      
          const fetchRooms = () => {
            axios
              .get('http://localhost:3001/rooms')
              .then((response) => {
                // console.log('Rooms data:', response.data);
                setRooms(response.data);
              })
              .catch((error) => console.error(error));
          };

    const openRoomSelectionModal = () => {
        console.log('Available Rooms:', rooms);
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
        // Validasi data sebelum mengirim
        if (name && email && selectedRoom && checkIn && checkOut) {
          // Validasi email menggunakan regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setIsEmailValid(false);
            setError('Please enter a valid email address.');
            return;
          }
    
          axios.post('http://localhost:3001/booking', {
            name,
            email,
            room_id: selectedRoom.room_id,
            check_in: checkIn,
            check_out: checkOut,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Booking successful:', response.data);
              // Reset form or perform any other necessary actions
              setName('');
              setEmail('');
              setRoomId('');
              setCheckIn('');
              setCheckOut('');
              // Reset pesan kesalahan jika sebelumnya ada
              setError(null);
              setIsEmailValid(true);
            })
            .catch(error => console.error('Error during booking:', error));
        } else {
          console.error('Please fill in all required fields.');
          // Set pesan kesalahan untuk ditampilkan di antarmuka pengguna
          setError('Please fill in all required fields.');
          setIsEmailValid(true);
        }
      };
      


  return (
    <div className='booking'>
      <h2>Booking Form</h2>
      <div className="input-container ic1">
        <input className="input-fullName" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" " />
        <div className="cut"></div>
        <label className="placeholder">Full Name</label>
      </div>
      
      <div className="input-container ic2">
        <input className="input-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " />
        <div className="cut cut-long"></div>
        <label className="placeholder">Email Address</label>
      {!isEmailValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
      </div>
      
      <div className="roomList">
      <label>Room</label>
      <input
        className='room-list'
        type="text"
        value={selectedRoom ? selectedRoom.room_name : ''}
        readOnly
        placeholder="Click to select room"
        onClick={openRoomSelectionModal}
      />

      {/* Render modal for room selection */}
      {isModalOpen && (
      <Modal onClose={closeRoomSelectionModal}>
        <h2>Select a Room</h2>
        {Array.isArray(rooms) && rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.room_id} onClick={() => handleRoomSelect(room)}>
              <p>{room.room_name}</p>
            </div>
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </Modal>
      )}
      </div>

      <div className="check">
        
      <div className="checkIn">
      <label>Check-In Date:</label>
      <input className='dateCenter' type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      
      <div className="checkOut">
      <label>Check-Out Date:</label>
      <input className='dateCenter' type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      
      </div>


      <button onClick={handleSubmit}>Submit</button>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default BookingForm;

















          {/* <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="">Select a room</option>           {Array.isArray(rooms) && rooms.length > 0 ? (
            rooms.map((room) => (
              <option key={room.room_id} value={room.room_id}>
                {room.room_name}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No rooms available
            </option>
          )}
        </select> */}



// <input
// type="text"
// value={selectedRoom ? selectedRoom.room_name : ''}
// readOnly
// placeholder="Click to select room"
// onClick={openRoomSelectionModal}
// />

// {/* Render modal for room selection */}
// {isModalOpen && (
// <Modal onClose={closeRoomSelectionModal}>
//   <h2>Select a Room</h2>
//   {Array.isArray(rooms) && rooms.length > 0 ? (
//     rooms.map((room) => (
//       <div key={room.room_id} onClick={() => handleRoomSelect(room)}>
//         {room.room_name}
//       </div>
//     ))
//   ) : (
//     <p>No rooms available</p>
//   )}
// </Modal>
// )}
















// const BookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [rooms, setRooms] = useState([]);
//   const [roomId, setRoomId] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');

//   useEffect(() => {
//     fetchRooms();
//   }, []);
  
//   const fetchRooms = () => {
//     axios.get('/rooms') // Ganti path menjadi /rooms
//       .then(response => {
//         console.log('Rooms data:', response.data);
//         setRooms(response.data);
//       })
//       .catch(error => console.error(error));
//   };


//   const handleSubmit = () => {
//     axios.post('/booking', {
//       name,
//       email,
//       room_id: roomId,
//       check_in: checkIn,
//       check_out: checkOut,
//     })
//       .then(response => {
//         console.log('Booking successful:', response.data);
//         // Reset form or perform any other necessary actions
//         setName('');
//         setEmail('');
//         setRoomId('');
//         setCheckIn('');
//         setCheckOut('');
//       })
//       .catch(error => console.error('Error during booking:', error));
//   };


//   return (
//     <div>
//       <h2>Booking Form</h2>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
//       <label>Room:</label>
//       <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="">Select a room</option>
//           {Array.isArray(rooms) && rooms.length > 0 ? (
//             rooms.map((room) => (
//               <option key={room.room_id} value={room.room_id}>
//                 {room.room_name}
//               </option>
//             ))
//           ) : (
//             <option value="" disabled>
//               No rooms available
//             </option>
//           )}
//         </select>

//       <label>Check-In Date:</label>
//       <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

//       <label>Check-Out Date:</label>
//       <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default BookingForm;
