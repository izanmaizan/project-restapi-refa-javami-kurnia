// src/configs/mysqlConnection.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_db',
});

export default connection;
