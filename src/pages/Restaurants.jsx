import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const fallbackImages = [
  "https://source.unsplash.com/720x400/?restaurant",
  "https://source.unsplash.com/720x400/?food",
  "https://source.unsplash.com/720x400/?dining",
];

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get('https://panda-rest-server.onrender.com/restaurant/all');
        console.log("Fetched:", res.data);
        setRestaurants(res.data || []);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <section className="text-white body-font max-w-7xl mx-auto py-11 bg-cover bg-center">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-white">
              Our Popular Restaurants
            </h1>
            <div className="h-1 w-24 bg-indigo-600 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full text-white leading-relaxed text-lg">
            Click on any restaurant to see available tables and seating details.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-lg text-gray-300">Loading restaurants...</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {restaurants.map((restaurant) => (
              <motion.div
                key={restaurant._id}
                variants={cardVariants}
                whileHover="hover"
                className="min-h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white text-gray-900 cursor-pointer"
                onClick={() => handleCardClick(restaurant._id)}
              >
                <div className="h-88 w-full">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={2500}
                    className="h-48"
                  >
                    {(restaurant.images?.length > 0 ? restaurant.images : fallbackImages).map((img, idx) => {
                      const imgSrc = typeof img === "string"
                        ? img
                        : `data:${img.contentType};base64,${img.base64}`;

                      return (
                        <div key={idx} className="h-90 w-full">
                          <img
                            src={imgSrc}
                            alt={`Restaurant ${idx}`}
                            className="object-cover h-90 w-full"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>

                <div className="p-4">
                  <h3 className="text-sm text-indigo-600 font-medium mb-1">
                    {restaurant.address || 'Address not provided'}
                  </h3>
                  <h2 className="text-xl font-semibold mb-2">
                    {restaurant.name || 'Unnamed Restaurant'}
                  </h2>
                  <p className="text-gray-600">Click to view tables</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Restaurants;
