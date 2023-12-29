// src/routes/route-hotel.js

// Import modul express dan konfigurasi koneksi database
import express from 'express';
import connection from '../configs/mysqlConnection.js';
import cors from 'cors';
// import sequelize from '../configs/sequelizeConnection.js'; //jika nanti menggunakan sequelize aktifkan ini
import Guest from '../../models/Guest.js';
// import Room from '../../models/Rooms.js'; //digunain bersamaan dengan sequelize

// Membuat aplikasi Express
const app = express();
const port = 3001;

// Menggunakan middleware CORS
app.use(cors());
app.use(express.json()); // Middleware untuk membaca data JSON dari permintaan

// Menggunakan middleware CORS dengan konfigurasi khusus
app.use(cors({
  origin: 'http://localhost:3000', // Sesuaikan dengan origin frontend Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware untuk mengizinkan CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


// Endpoint untuk mendapatkan data rooms menggunakan sequelize
// app.get('/rooms', async (req, res) => {
//   try {
//     // Menggunakan Sequelize untuk mendapatkan data rooms
//     const rooms = await Room.findAll();
//     res.json(rooms);
//   } catch (error) {
//     console.error(error); // Cetak kesalahan di konsol
//     res.status(500).send(error.message);
//   }
// });


// Endpoint untuk mendapatkan data rooms menggunakan sequelize
// app.get('/rooms', async (req, res) => {
//   try {
//     // Menggunakan Sequelize untuk mendapatkan data rooms
//     const rooms = await Room.findAll();
//     res.json(rooms);
//   } catch (error) {
//     console.error(error); // Cetak kesalahan di konsol
//     res.status(500).send(error.message);
//   }
// });


// Endpoint untuk mendapatkan data rooms menggunakan connection mysql
app.get('/rooms', (req, res) => {
  const query = 'SELECT * FROM rooms';

  // Mengambil data dari database dan mengirimkannya sebagai respons JSON
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.json(results);
    }
  });
});

// Endpoint to save booking information
app.post('/booking', async (req, res) => {
  try {
    const { name, email, room_id, check_in, check_out } = req.body;

    // Save booking using Sequelize
    const guest = await Guest.create({
      name,
      email,
      room_id,
      check_in,
      check_out,
    });

    res.status(201).json(guest);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});


// // Endpoint untuk mendapatkan data rooms
// app.get('/guests', async (req, res) => {
//   try {
//     // Menggunakan Sequelize untuk mendapatkan data rooms
//     const bookings = await Guest.findAll();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });


// Endpoint untuk menyimpan booking (dalam tabel guests)
// app.post('/booking', async (req, res) => {
//   try {
//     const { name, email, room_id, check_in, check_out } = req.body;

//     // Simpan booking ke database menggunakan Sequelize
//     const booking = await Guest.create({
//       name,
//       email,
//       room_id,
//       check_in,
//       check_out,
//     });

//     res.status(201).json(booking);
//   } catch (error) {
//     console.error(error); // Cetak kesalahan di konsol
//     res.status(500).send(error.message);
//   }
// });


// Mendengarkan pada port tertentu
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




















// // Import modul express dan konfigurasi koneksi database
// import express from 'express';
// import connection from '../configs/database.js';

// // Membuat aplikasi Express
// const app = express();
// const port = 3001;

// // Middleware untuk mengizinkan CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// // Endpoint untuk mendapatkan data rooms
// app.get('/guests', (req, res) => {
//   const query = 'SELECT * FROM rooms';

//   // Mengambil data dari database dan mengirimkannya sebagai respons JSON
//   connection.query(query, (error, results) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Mendengarkan pada port tertentu
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
