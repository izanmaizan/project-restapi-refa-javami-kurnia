// models/Room.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/configs/sequelizeConnection.js';

const Room = sequelize.define('Room', {
  room_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false, // Nonaktifkan timestamps jika sudah ditangani secara manual
});

export default Room;
