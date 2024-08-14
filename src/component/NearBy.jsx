import React from 'react';
import badrinath from '../assets/badrinath.jpg'
import Narsingh from '../assets/narsingh mandir.jpeg'
import Auli from '../assets/auli.jpg'
import Bhavishya from '../assets/bhavishya-badri-temple.webp'
import Jyothermath from '../assets/jyotirmath.jpeg'
import NitiValley from '../assets/niti-velly.jpg'

function NearBy() {
  const locations = [
    {
      name: 'Badrinath',
      imgSrc: badrinath,
      location: 'PFVR+X9G, Badri to Mata Murti road, Badrinath, Uttarakhand 246422',
      distance: '(40.5 km) via NH 7 km from Joshimath Bus Stand, National Highway 58',
      time: '2-3 hr'
    },
    {
      name: 'Narsingh Temple',
      imgSrc: Narsingh,
      location: 'Joshimath, near NH-58',
      distance: '0.5 km from Joshimath Bus Stand, National Highway 7',
      time: '1 hr'
    },
    {
      name: 'Auli',
      imgSrc: Auli,
      location: 'Auli Laga Salude, Uttarakhand 246443',
      distance: '11 km from Joshimath Bus Stand, National Highway 7',
      time: '2-3 hr'
    },
    {
      name: 'Bhavishya Badri Temple',
      imgSrc: Bhavishya,
      location: 'Subhai,near tapovan Uttarakhand 246443',
      distance: '14.7 km from Joshimath Bus Stand, National Highway 7',
      time: '1 hr'
    },
    {
      name: 'Jyothermath',
      imgSrc: Jyothermath,
      location: 'Joshimath, ',
      distance: '0.5 km from Joshimath Bus Stand, National Highway 7',
      time: '1 hr'
    },
    {
      name: 'Niti Valley',
      imgSrc: NitiValley,
      location: 'Niti, Uttarakhand 246443',
      distance: '36.3km from Joshimath Bus Stand, National Highway 7',
      time: '1 hr'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-gray-800">
        Explore Joshimath
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={location.imgSrc}
              alt={location.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{location.name}</h2>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {location.location}</p>
              <p className="text-gray-600 mb-2"><strong>Distance:</strong> {location.distance}</p>
              <p className="text-gray-600"><strong>Exploration Time:</strong> {location.time}</p>
            </div>
            <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-3 rounded-bl-lg">
              {location.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearBy;
