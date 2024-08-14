import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
    {/* Drawer for Small Screens */}
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-blue-500 to-red-900 text-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="flex items-center justify-between p-4">
        <img
          src="src/assets/hotelogo.webp"
          alt="Logo"
          className="h-16 w-auto object-contain"
        />
        <button onClick={toggleDrawer} className="text-white text-2xl">
          &times;
        </button>
      </div>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-700"
              onClick={toggleDrawer}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-700"
              onClick={toggleDrawer}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-700"
              onClick={toggleDrawer}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-700"
              onClick={toggleDrawer}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Overlay for Drawer */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={toggleDrawer}
      ></div>
    )}
  </>
  )
}

export default Drawer