import React from 'react';
import logo from '../assets/hotelogo.webp'

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div className="absolute inset-0 bg-gray-200 opacity-70 rounded-lg"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="order-2 lg:order-1 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-red-900 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Header Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left lg:pl-8">
              <img
                src={logo}
                alt="Hotel Logo"
                className="w-32 h-auto mb-4 mx-auto lg:mx-0"
              />
              <p className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Travel to Nirvana – Srisanchay Corporation</p>
              <p className="text-gray-600 mb-4">
                Shop 2 & 3, Second Floor, Surya Complex<br />
                Ranipur More, Haridwar, Uttarakhand<br />
                Pin Code – 24940
              </p>
              <p className="text-gray-700 mb-2">Phone No: 9258126088, 9258126089, 9389301916</p>
              <p className="text-gray-700">Email Id: salesinfo@traveltonirvana.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
