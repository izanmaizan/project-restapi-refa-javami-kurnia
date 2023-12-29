// models/Guest.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/configs/sequelizeConnection.js';

const Guest = sequelize.define('Guest', {
  // Define the columns of the guests table
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
});

export default Guest;
