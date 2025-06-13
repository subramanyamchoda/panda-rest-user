import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    if (!user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <div className="py-16 bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reserve Your Table <br /> in Seconds
            </h1>
            <p className="text-white mb-6 text-base md:text-lg leading-relaxed">
              Welcome to Panda Restaurant – where great food meets smart booking!
              <br />
              ✨ Log in to explore restaurants near you. <br />
              🍽️ Browse available tables and choose your perfect time slot. <br />
              📅 Book instantly and track your reservation details in real-time.
              <br />
              No calls. No waiting. Just seamless dining.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleBookingClick}
                className="text-white text-lg bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg animate-bounce"
              >
                Book a Table Now
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="11.png"
              className="w-[320px] md:w-[460px] lg:w-[540px] mx-auto slow-spin"
              alt="Food"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
