// Booking.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/configs/sequelizeConnection.js';

const Guest = sequelize.define('guests', {
  // definisi kolom-kolom tabel Guests
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  room_id: {
    type: DataTypes.INTEGER,
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
}, {
  timestamps: false, // tidak ada updatedAt dan createdAt
});

export default Guest;
