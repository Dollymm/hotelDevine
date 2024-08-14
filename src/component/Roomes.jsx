import React from 'react';
import room1 from '../assets/IMG_0583.JPG'
import room2 from '../assets/IMG_0607.JPG'
import room3 from '../assets/IMG_0573.JPG'
import room4 from '../assets/IMG_0571.JPG'
function Roomes() {
  return (
    <div className="p-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to Our Luxurious Rooms
        </h2>

        {/* Room and Offers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Room Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
              <img
                src={room1}
                alt="Luxurious Room"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xl font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Luxurious Rooms</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">
                Discover our beautifully appointed rooms designed for your comfort and relaxation. Far from the hustle and bustle, our rooms offer a serene escape with modern amenities and elegant decor.
              </p>
            </div>
          </div>

          {/* Special Offers Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
              <img
                src={room2}
                alt="Special Offer"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xl font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">lobby</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">
                Take advantage of our special offers and exclusive deals to make your stay even more memorable. Enjoy exceptional value with our curated packages and promotions.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat Section for additional content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Room Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
              <img
                src={room3}
                alt="Luxurious Room"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xl font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Luxurious Rooms</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">
                Enjoy the ultimate in comfort with our luxurious rooms, designed to provide a relaxing and rejuvenating experience. Each room is equipped with modern amenities and elegant furnishings.
              </p>
            </div>
          </div>

          {/* Special Offers Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
              <img
                src={room4}
                alt="Special Offer"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xl font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Duplex Roomes</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">
                Discover our special offers and enjoy additional perks during your stay. Our exclusive deals provide the best value and ensure a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomes;
