// src/configs/sequelizeConnection.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hotel_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
