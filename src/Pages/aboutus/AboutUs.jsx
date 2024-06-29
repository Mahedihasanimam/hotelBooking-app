import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-about-bg bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl">
      <h1
        className="text-4xl font-bold border-l-4  px-2 my-12 mx-4 border-green-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
       About Us
      </h1>
        <p className="text-lg mb-4">
          Welcome to our hotel booking platform! We are dedicated to providing you with the best travel experience by offering luxurious accommodations in some of the world's most beautiful destinations.
        </p>
        <p className="text-lg mb-4">
          Our team is committed to ensuring that your stay is comfortable, enjoyable, and memorable. Whether you are looking for a beachfront resort, a city center hotel, a mountain retreat, or a riverside ryokan, we have carefully selected properties that meet our high standards of quality and service.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing us for your travel needs. We look forward to helping you create unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
