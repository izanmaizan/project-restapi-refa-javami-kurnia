// src/routes/route-hotel.js

// Import modul express dan konfigurasi koneksi database
import express from 'express';
import connection from '../configs/mysqlConnection.js';
import cors from 'cors';
import sequelize from '../configs/sequelizeConnection.js';
import Guest from '../../models/Booking.js';
import Room from '../../models/Rooms.js';
import bodyParser from 'body-parser';
const path = require('path');


// Serve React app pada rute root ('/') menggunakan Express.static
app.use(express.static(path.resolve(__dirname, '../../public')));

// Semua permintaan yang tidak cocok dengan rute API diarahkan ke halaman utama React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

// Membuat aplikasi Express
const app = express();
const port = 3001;

// Menggunakan middleware CORS
app.use(cors());
app.use(express.json()); // Middleware untuk membaca data JSON dari permintaan
app.use(bodyParser.json()); //Untuk mengizinkan parsing data JSON

// Menggunakan middleware CORS dengan konfigurasi khusus
app.use(cors({
  origin: 'http://localhost:3000', // Sesuaikan dengan origin frontend Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Endpoint untuk mendapatkan data rooms menggunakan sequelize
app.get('/rooms', async (req, res) => {
  try {
    // Menggunakan Sequelize untuk mendapatkan data rooms
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error(error); // Cetak kesalahan di konsol
    res.status(500).send(error.message);
  }
});

// Endpoint untuk menyimpan booking (dalam tabel guests)
app.post('/booking', async (req, res) => {
  try {
    const { name, email, room_id, check_in, check_out } = req.body;

    console.log('Received booking request:', req.body); // Tambahkan logging ini

    const guest = await Guest.create({
      name,
      email,
      room_id,
      check_in,
      check_out,
    });

    console.log('Booking created:', guest); // Tambahkan logging ini

    res.status(201).json(guest);
  } catch (error) {
    console.error('Error during booking:', error);
    res.status(500).send(error.message);
  }
});




// Mendengarkan pada port tertentu
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
