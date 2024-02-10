// models/BookingHistory.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/configs/sequelizeConnection.js';

const BookingHistory = sequelize.define('BookingHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  guest_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guest_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  check_in: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  check_out: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price_per_night: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  total_cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'booking_history', // Sesuaikan dengan nama tabel yang digunakan
  timestamps: false, // Nonaktifkan timestamps jika sudah ditangani secara manual
});

export default BookingHistory;
