import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('https://panda-rest-server.onrender.com/booking/get');
        const userBookings = res.data.bookings.filter(
          (booking) => booking.userId?._id === userId
        );
        setBookings(userBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        🍽️ My Bookings
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking, index) => (
          <motion.div
            key={booking._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 60 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300 border border-gray-200"
          >
            {/* Restaurant Image */}
            {booking.restaurantImage && (
              <motion.img
                src={booking.restaurantImage}
                alt="Restaurant"
                className="w-full h-40 object-cover rounded-xl mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="mb-3 space-y-1 text-gray-800">
              <h3 className="text-xl font-semibold">
                🍴 Restaurant: {booking.restaurantId?.name || 'N/A'}
              </h3>
              <p>🪑 Table No: {booking.tableId?.tableno || 'N/A'}</p>
              <p>🏷️ Type: {booking.tableId?.sittingtype}</p>
              <p>👥 Seats: {booking.tableId?.sittingnos}</p>
            </div>

            {/* Table Image */}
            {booking.tableImage && (
              <motion.img
                src={booking.tableImage}
                alt="Table"
                className="w-full h-32 object-cover rounded-xl mb-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                📅 <strong>Date:</strong> {booking.bookingDate}
              </p>
              <p>
                ⏰ <strong>Time:</strong> {booking.bookingTime}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {bookings.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-10 text-lg"
        >
          😔 No bookings found for your account.
        </motion.p>
      )}
    </div>
  );
};

export default Bookings;
