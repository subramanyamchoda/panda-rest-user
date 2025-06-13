import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("https://panda-rest-server.onrender.com/user/logout", {}, { withCredentials: true });
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      navigate("/login");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className=" backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center"
      >
        {user ? (
          <div>
            <motion.img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <motion.h2
              className="text-3xl font-extrabold text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome, {user.name}!
            </motion.h2>
            <p className="text-sm text-gray-200 mt-1">{user.email}</p>

            <motion.div
              className="mt-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/bookings"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out"
              >
                📋 View Your Bookings
              </Link>

              <button
                onClick={handleLogout}
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out"
              >
                🔒 Logout
              </button>
            </motion.div>
          </div>
        ) : (
          <p className="text-lg text-white">Please log in to view your dashboard.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
