// src/utils/axios.jsx

import axios from 'axios';

// Membuat instance Axios dengan konfigurasi khusus
const instance = axios.create({
  baseURL: 'http://localhost:3000', // Ganti sesuai URL server Anda
  timeout: 5000, // Timeout request dalam milidetik
});

export default instance;