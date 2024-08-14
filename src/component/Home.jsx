import React from 'react';
import './style.css';
import backgroundimage from '../assets/divine.jpeg'

function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center backgroundimage">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative text-center bg-opacity-90 p-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 z-10">
        {/* Heading and Subheading */}
        <div className="mb-10">
          <p className="text-3xl md:text-xl text-white mb-2 transition-opacity duration-700 ease-in-out hover:opacity-80 mt-4">
            Enjoy Your Wonderful Holidays With A Great Luxury Experience!
          </p>
          <p className="text-4xl md:text-5xl text-white font-extrabold transition-transform duration-700 ease-in-out transform hover:translate-y-1">
            Most Relaxing Place
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="border border-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-800 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">
            Take a Tour
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
