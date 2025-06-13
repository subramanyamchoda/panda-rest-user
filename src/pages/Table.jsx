import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Table = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [checkDate, setCheckDate] = useState('');
  const [checkedBookings, setCheckedBookings] = useState([]);
  const [checkStatus, setCheckStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const res = await axios.get(`https://panda-rest-server.onrender.com/restaurant/${id}`);
        setRestaurant(res.data?.restaurant);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
        setBookingStatus('Failed to load restaurant data.');
      }
    };
    getRestaurant();
  }, [id]);

  useEffect(() => {
    if (bookingStatus) {
      const timer = setTimeout(() => setBookingStatus(null), 10000);
      return () => clearTimeout(timer);
    }
  }, [bookingStatus]);

  useEffect(() => {
    if (checkStatus) setShowPopup(true);
  }, [checkStatus]);

  const openBookingModal = (tableId) => {
    setSelectedTableId(tableId);
    setShowModal(true);
    setBookingStatus('');
  };

  const handleBookTable = async () => {
    if (!date || !time) {
      setBookingStatus('Please select both date and time.');
      return;
    }
    setBookingLoading(true);
    setBookingStatus('');
    try {
      const res = await axios.post('https://panda-rest-server.onrender.com/booking/send', {
        restaurantId: id,
        tableId: selectedTableId,
        bookingDate: date,
        bookingTime: time,
        userId,
      });

      if (res.data.success || res.status === 200) {
        setBookingStatus(res.data.message || 'Table booked successfully!');
        setShowModal(false);
        setDate('');
        setTime('');
        setSelectedTableId(null);
      } else {
        setBookingStatus('Booking failed! Please try again.');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      setBookingStatus(error.response?.data?.message || 'Booking failed! Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  const handleCheckBookings = async (tableId) => {
    if (!checkDate) {
      setCheckStatus('Please select a date to check bookings.');
      return;
    }
    try {
      const res = await axios.post('https://panda-rest-server.onrender.com/booking/check', {
        restaurantId: id,
        tableId,
        bookingDate: checkDate,
      });
      setCheckedBookings(res.data.bookings || []);
      setCheckStatus(res.data.message || 'No bookings found.');
    } catch (error) {
      console.error('Check booking failed:', error);
      setCheckStatus('Failed to fetch bookings.');
    }
  };

  const handleNext = (tableId, total) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [tableId]: (prev[tableId] + 1) % total,
    }));
  };

  const handlePrev = (tableId, total) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [tableId]: (prev[tableId] - 1 + total) % total,
    }));
  };

  if (!restaurant) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="text-xl animate-pulse">Loading restaurant details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-10 max-w-7xl mx-auto text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 drop-shadow-lg"
      >
        🍽️ Tables at {restaurant.name}
      </motion.h1>

      <AnimatePresence>
        {bookingStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`mt-8 p-4 text-center rounded transition-all duration-300 ${
              bookingStatus.toLowerCase().includes("failed")
                ? "text-red-700 bg-red-100"
                : "text-green-700 bg-green-100"
            }`}
          >
            {bookingStatus}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-white/30 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-md text-center text-white"
            >
              <h2 className="text-2xl font-extrabold drop-shadow mb-4 tracking-wide">
                {checkStatus}
              </h2>
              {checkedBookings?.length > 0 && (
                <div className="mt-2 space-y-4 max-h-60 overflow-y-auto text-left pr-1">
                  {checkedBookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="bg-white/10 border border-white/20 text-white p-3 rounded-lg"
                    >
                      <p><strong>⏰ Time:</strong> {booking.bookingTime}</p>
                      <p><strong>🍽️ Table No:</strong> {booking.tableId?.tableno || 'N/A'}</p>
                    </div>
                  ))}
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold px-8 py-2 rounded-full"
              >
                OK
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {restaurant.table.map((table) => {
          const totalImages = table.images?.length || 0;
          const currentIndex = carouselIndex[table._id] || 0;
          const currentImage = totalImages > 0 ? table.images[currentIndex] : null;

          return (
            <motion.div
              key={table._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg"
            >
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg border border-white/20">
                {currentImage ? (
                  <motion.img
                    key={currentIndex}
                    src={`data:${currentImage.contentType};base64,${currentImage.base64}`}
                    alt={`Table ${table.tableno}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src="https://source.unsplash.com/600x400/?dining-table"
                    alt="Fallback"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}

                {totalImages > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(table._id, totalImages)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNext(table._id, totalImages)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <h2 className="text-xl font-semibold mb-2">Table No: {table.tableno}</h2>
              <p className="mb-1"><strong>Type:</strong> {table.sittingtype}</p>
              <p className="mb-3"><strong>Seats:</strong> {table.sittingnos}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openBookingModal(table._id)}
                disabled={bookingLoading}
                className="w-full bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 mb-2"
              >
                Book Table
              </motion.button>
              <input
                type="date"
                className="w-full border border-white/20 bg-white/5 text-white px-3 py-2 rounded mb-2"
                value={checkDate}
                onChange={(e) => setCheckDate(e.target.value)}
              />
              <button
                onClick={() => handleCheckBookings(table._id)}
                className="w-full bg-white/10 text-white py-2 rounded hover:bg-white/20"
              >
                🔍 Check Bookings
              </button>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start pt-20 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 border border-white/30 backdrop-blur-xl rounded-xl shadow-2xl p-6 w-full max-w-md text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">📅 Select Date & Time</h2>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full mb-3 p-2 border border-white/20 bg-white/5 text-white rounded"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full mb-3 p-2 border border-white/20 bg-white/5 text-white rounded"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-red-500 hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookTable}
                  disabled={bookingLoading}
                  className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600"
                >
                  {bookingLoading ? 'Booking...' : 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Table;
