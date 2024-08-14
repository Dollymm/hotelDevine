import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft } from 'react-icons/fi';
import Drawer from './Drawer';
import logo from '../assets/hotelogo.webp'


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-red-900 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
       
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
          
           <div className="md:hidden">
          <FiAlignLeft
            className="text-3xl cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>

       
        <nav className="hidden md:block">
          <ul className="flex space-x-6 md:space-x-8 text-lg font-medium">
            <li className="group">
              <Link
                to="/"
                className="relative inline-block px-3 py-1 transition-colors duration-300 hover:text-gray-300"
              >
                Home
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-white transition-transform duration-300 group-hover:scale-100 scale-0"></span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/rooms"
                className="relative inline-block px-3 py-1 transition-colors duration-300 hover:text-gray-300"
              >
                Rooms
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-white transition-transform duration-300 group-hover:scale-100 scale-0"></span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/about"
                className="relative inline-block px-3 py-1 transition-colors duration-300 hover:text-gray-300"
              >
                About
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-white transition-transform duration-300 group-hover:scale-100 scale-0"></span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/contact"
                className="relative inline-block px-3 py-1 transition-colors duration-300 hover:text-gray-300"
              >
                Contact Us
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-white transition-transform duration-300 group-hover:scale-100 scale-0"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}  />
    </header>
  );
}

export default Header;
