import React from 'react';


const About = () => {
  
  return (
    <>
      {/* Header Section */}
      <div className="w-full py-12 bg-cover bg-center">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center animate-bounce">About Us</h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 px-4 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">Welcome to Panda Restaurant</h2>
            <p className="mb-4 text-white">
              Panda Restaurant is your one-stop platform for effortless dining experiences.
              No phone calls, no waiting in lines — just smart, real-time booking.
            </p>
            <p className="mb-4 text-white">
              🔐 <strong>Login easily</strong> with your Google account to access full features. <br />
              🍽️ <strong>Explore restaurants</strong> and view real-time table availability. <br />
              📅 <strong>Book your favorite table</strong> with just one click and get instant confirmation. <br />
              ✅ <strong>Check all your bookings</strong> and even filter them by specific dates for better planning.
            </p>
            <p className="mb-4 text-white">
              Whether you're planning a casual meal or a group celebration, we've got your table ready. Just log in and dine on your schedule!
            </p>

            {/* CTA Button */}
           
          </div>
  
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img src="restapp1.jpg" alt="img1" className="rounded-lg w-full h-auto shadow-lg" />
            <img src="restapp2.jpg" alt="img2" className="rounded-lg w-3/4 mt-10 shadow-lg" />
            <img src="restapp3.jpg" alt="img3" className="rounded-lg w-3/4 ml-auto shadow-lg" />
            <img src="restapp4.jpg" alt="img4" className="rounded-lg w-full shadow-lg" />
          </div>
        </div>
      </div>
  <hr className="border-2 border-white" />
      {/* Chefs Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl text-white mb-2">Team Members</h3>
          <h2 className="text-3xl text-white font-bold mb-8">Our Master Chefs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Subbu', image: 'chef3.jpeg' },
              { name: 'Sai', image: 'chef1.jpeg' },
              { name: 'Ram', image: 'chef2.jpeg' },
            ].map((chef, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={chef.image} alt={chef.name} className="w-full h-72 object-cover" />
                <div className="py-4">
                  <h2 className="text-xl font-semibold text-center">{chef.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
