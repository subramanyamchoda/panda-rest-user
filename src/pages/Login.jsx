import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const { data } = await axios.post(
        "https://panda-rest-server.onrender.com/user/login",
        { token: credential },
        { withCredentials: true }
      );

      const formattedUser = {
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.avatar || "https://via.placeholder.com/150",
        id: data.user._id 
      };

      setUser(formattedUser);
      localStorage.setItem("user", JSON.stringify(formattedUser));
      localStorage.setItem("userId", formattedUser.id);
    
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  const handleLoginFailure = () => {
    console.error("Google login failed");
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="flex items-center justify-center min-h-screen  px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-100 text-center border border-white/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-white"
          >
            Login to Continue
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 mt-2"
          >
            Sign in with Google to proceed
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl mt-3"
          >
            🐼
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-white mt-3 animate-pulse"
          >
            This login is for exploring restaurants, booking tables, and checking your reservations.
          </motion.p>

        </motion.div>
      </div> 
    </GoogleOAuthProvider>
  );
};

export default Login; 
