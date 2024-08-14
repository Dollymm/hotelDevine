import React from 'react';
import hotelImage from '../assets/IMG_3508.JPG';
import hotelLogo from '../assets/hotelogo.webp'; // Import the logo image

function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 transition-transform duration-500 hover:rotate-3">
            About Our Hotel
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src={hotelImage}
                alt="Hotel View"
                className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px] transition-transform duration-500 hover:rotate-1"
              />
            </div>
          </div>

          {/* About Us Text Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-gray-50 via-gray-100 to-white p-8 shadow-lg rounded-lg transition-transform duration-500 hover:rotate-1 relative">
            <img 
              src={hotelLogo} 
              alt="Hotel Logo"
              className="absolute top-4 right-4 w-20 h-auto" 
            />
            <p className="text-2xl font-semibold text-indigo-600 mb-4">
              Welcome to Unwind Hotel
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              At Unwind Hotel, we pride ourselves on offering an exceptional stay in a beautiful setting. Located far from the hustle and bustle, our hotel provides a serene escape with luxurious accommodations and top-notch service. Whether you're here for relaxation or adventure, our dedicated team ensures every guest feels at home.
            </p>
            <div className="text-center lg:text-left">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 text-lg font-semibold shadow-md transform hover:scale-105">
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
