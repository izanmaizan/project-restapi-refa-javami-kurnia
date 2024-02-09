const axios = require('axios');

test('should successfully create a booking', async () => {
  try {
    const response = await axios.post('http://localhost:3001/booking', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      room_id: 1,
      guests: {
        check_in: '2024-02-05', // Ganti dengan tanggal check-in yang valid
        check_out: '2024-02-10', // Ganti dengan tanggal check-out yang valid
      },
    });

    console.log('Booking successful:', response.data);
  } catch (error) {
    console.error('Error during test:', error.message);

    if (error.response && error.response.data) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }

    throw error; // Lepaskan kembali kesalahan untuk membuat pengujian gagal
  }
});
