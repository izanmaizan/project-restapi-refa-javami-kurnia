// src/routes/route-hotel.js

// Import modul express dan konfigurasi koneksi database
import express from 'express';
import connection from '../configs/mysqlConnection.js';
import cors from 'cors';
import sequelize from '../configs/sequelizeConnection.js';
import Guest from '../../models/Booking.js';
import Room from '../../models/Rooms.js';
import bodyParser from 'body-parser';
import BookingHistory from '../../models/BookingHistory.js';

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

// Endpoint untuk mendapatkan data guests menggunakan sequelize
app.get('/guests', async (req, res) => {
  try {
    // Menggunakan Sequelize untuk mendapatkan data guests
    const guests = await Guest.findAll({
      include: [{ model: Room, attributes: ['room_name', 'price'] }],
    });
    res.json(guests);
  } catch (error) {
    console.error(error); // Cetak kesalahan di konsol
    res.status(500).send(error.message);
  }
});


// Endpoint untuk menyimpan data ke tabel booking_history
app.post('/booking_history', async (req, res) => {
  try {
    const {
      guest_name,
      guest_email,
      room_name,
      check_in,
      check_out,
      price_per_night,
      total_cost,
    } = req.body;

    const bookingHistory = await BookingHistory.create({
      guest_name,
      guest_email,
      room_name,
      check_in,
      check_out,
      price_per_night,
      total_cost,
    });

    res.status(201).json(bookingHistory);
  } catch (error) {
    console.error('Error saving to booking_history:', error);
    res.status(500).send(error.message);
  }
});

// Endpoint untuk menghapus data dari tabel guests
app.delete('/guests/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const guest = await Guest.findByPk(id);

    if (!guest) {
      res.status(404).send('Booking not found');
      return;
    }

    await guest.destroy();
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).send(error.message);
  }
});



// Mendengarkan pada port tertentu
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
