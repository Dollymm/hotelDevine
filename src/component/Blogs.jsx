import React, { useState } from "react";
import Ramman from '../assets/ramman3.jpeg'
import BhotiyaDance from '../assets/bhotia2.jpg'
import PandavNirtya from '../assets/pandav.webp'

function Blogs() {
  const [showMore, setShowMore] = useState({ ramman: false, jhumelo: false, pandav: false });

  const handleToggle = (section, e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    setShowMore((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-gray-800">
        Uttrakhand's Tradition
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Ramman */}
        <div className="relative group">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
            <img
              src={Ramman}
              alt="Ramman"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                Ramman
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {showMore.ramman
                  ? "Ramman is a religious festival and ritual theatre of the Garhwal region in India. It is a festival of the Garhwali people celebrated in many villages of the region. Although there are many Rammans, such as the Jak Ramman, one of the most popular is the masked Ramman of the Saloor Dungra village of the Painkhanda Valley in the Chamoli district in Uttarakhand, India."
                  : "Ramman is a religious festival and ritual theatre of the Garhwal region in India. It is a festival of the Garhwali people celebrated in many villages. Click 'See More' to read about the popular masked Ramman of Saloor Dungra village."}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-lg md:text-xl text-indigo-600 font-bold hover:underline cursor-pointer"
                onClick={(e) => handleToggle('ramman', e)}
              >
                {showMore.ramman ? "See Less" : "See More"}
              </a>
            </div>
          </div>
          <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-indigo-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
            Featured
          </div>
        </div>

        {/* Bhotiya Dance */}
        <div className="relative group">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
            <img
              src={BhotiyaDance}
              alt="Bhotiya Dance"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                Bhotiya Dance
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {showMore.jhumelo
                  ? "The Bhotiya Dance aims to liberate the soul of the dead person, which they believe rests in the body of a goat. The Bhotiya Dance is a traditional dance of Uttarakhand and is quite similar to the dance styles of Himachal Pradesh or the hunting dances of Nagaland. Bhotiya Dance of Uttarakhand is a ritual that falls under the traditional customs and rites of the Bhotiyas of Uttarakhand."
                  : "The Bhotiya Dance aims to liberate the soul of the dead person, which they believe rests in the body of a goat. Click 'See More' to explore this traditional dance further."}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-lg md:text-xl text-red-600 font-bold hover:underline cursor-pointer"
                onClick={(e) => handleToggle('jhumelo', e)}
              >
                {showMore.jhumelo ? "See Less" : "See More"}
              </a>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-red-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
            New
          </div>
        </div>
      </div>

      {/* Pandav Nirtya */}
      <div className="mt-8 md:mt-12 relative group">
        <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
          <img
            src={PandavNirtya}
            alt="Pandav Nirtya"
            className="w-full h-48 md:h-64 object-cover opacity-60"
          />
          <div className="p-4 md:p-6 absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Pandav Nirtya
            </h2>
            <p className="text-center leading-relaxed text-sm md:text-base group-hover:text-yellow-300">
              {showMore.pandav
                ? "Pandava dance is a traditional folk dance of Devbhoomi Uttarakhand. The Pandavas came here during their incarnation, exile, and in search of Lord Shiva. After the Mahabharata war, the Pandavas had handed over their destructive weapons and armor to the people of Uttarakhand and left for Swargarohini. Their weapons and armor are still worshiped in many villages."
                : "Pandava dance is a traditional folk dance of Devbhoomi Uttarakhand. Click 'See More' to learn about the Pandavas' connection to this dance."}
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-lg md:text-xl text-yellow-300 font-bold hover:underline cursor-pointer"
              onClick={(e) => handleToggle('pandav', e)}
            >
              {showMore.pandav ? "See Less" : "See More"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
