import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Shop 2 & 3, Second Floor, Surya Complex</p>
            <p className="mb-2">Ranipur More, Haridwar, Uttarakhand</p>
            <p className="mb-2">Pin code-249401</p>
            <p className="mb-2">Phone: 9258126088, 9258126089, 9389301916</p>
            
            <p>Email: <a href="mailto:salesinfo@traveltonirvana.com" className="text-blue-400">salesinfo@traveltonirvana.com</a></p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Hotel Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
