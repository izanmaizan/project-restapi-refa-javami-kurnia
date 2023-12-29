// src/configs/sequelizeConnection.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_db',
  dialect: 'mysql',
  logging: console.log,
});

export default sequelize;
