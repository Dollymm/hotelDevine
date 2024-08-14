import React from 'react';
import { IoWifiSharp } from "react-icons/io5";
import { BsMenuButtonFill } from "react-icons/bs";
import { IoRestaurantOutline } from "react-icons/io5";
import { LiaHandsHelpingSolid } from "react-icons/lia";

function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-3xl font-bold text-gray-800 mb-4">Unwind Services</p>
          <p className="text-lg text-gray-600">Explore Our Hotel Services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Wifi Service */}
          <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <IoWifiSharp className="text-5xl text-purple-700 mb-4" />
            <p className="text-xl font-semibold text-gray-800 mb-2">Free Wifi</p>
            <p className="text-sm text-gray-600">Stay connected with high-speed internet access available throughout the hotel.</p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-500"></div>
          </div>

          {/* Easy Booking Service */}
          <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <BsMenuButtonFill className="text-5xl text-purple-700 mb-4" />
            <p className="text-xl font-semibold text-gray-800 mb-2">Easy Booking</p>
            <p className="text-sm text-gray-600">Experience seamless and quick booking with our user-friendly interface.</p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-500"></div>
          </div>

          {/* Restaurant Service */}
          <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <IoRestaurantOutline className="text-5xl text-purple-700 mb-4" />
            <p className="text-xl font-semibold text-gray-800 mb-2">Restaurant</p>
            <p className="text-sm text-gray-600">Delight in gourmet dining with a wide variety of cuisines to choose from.</p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-500"></div>
          </div>

          {/* Help & Support Service */}
          <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <LiaHandsHelpingSolid className="text-5xl text-purple-700 mb-4" />
            <p className="text-xl font-semibold text-gray-800 mb-2">Help & Support</p>
            <p className="text-sm text-gray-600">Our team is here to assist you 24/7 with any queries or concerns.</p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
