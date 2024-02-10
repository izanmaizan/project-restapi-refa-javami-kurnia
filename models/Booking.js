// Booking.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/configs/sequelizeConnection.js';
import Room from './Rooms.js';

const Guest = sequelize.define('Guest', {
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

Guest.belongsTo(Room, { foreignKey: 'room_id' });
Room.hasMany(Guest, { foreignKey: 'room_id' });

export default Guest;
