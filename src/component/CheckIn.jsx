import React from 'react';
import { FaCalendarAlt, FaBed, FaUser } from 'react-icons/fa';

function CheckIn() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      {/* Check-In Section */}
      <div className="flex-1 min-w-[220px] max-w-xs bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="text-yellow-500 mr-2" />
          <p className="font-bold text-gray-700">CHECK-IN</p>
        </div>
        <input
          type="date"
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Check-Out Section */}
      <div className="flex-1 min-w-[220px] max-w-xs bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="text-yellow-500 mr-2" />
          <p className="font-bold text-gray-700">CHECK-OUT</p>
        </div>
        <input
          type="date"
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Rooms Section */}
      <div className="flex-1 min-w-[220px] max-w-xs bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center mb-2">
          <FaBed className="text-yellow-500 mr-2" />
          <p className="font-bold text-gray-700">ROOMS</p>
        </div>
        <select
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
        </select>
      </div>

      {/* Guest Section */}
      <div className="flex-1 min-w-[220px] max-w-xs bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center mb-2">
          <FaUser className="text-yellow-500 mr-2" />
          <p className="font-bold text-gray-700">GUEST</p>
        </div>
        <input
          type="number"
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Availability Section */}
      <div className="flex-1 min-w-[220px] max-w-xs flex items-center justify-center">
        <button className="text-white font-semibold text-lg py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-red-900 hover:from-red-900 hover:to-blue-500 transition duration-300 shadow-lg transform hover:scale-110">
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
  );
}

export default CheckIn;
