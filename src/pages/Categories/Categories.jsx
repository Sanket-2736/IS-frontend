import React from 'react';
import { categories } from '../../assets/assets';

const Categories = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Explore Categories
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
  Delve into a wide range of topics that matter to the world today.
</p>


      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Search categories..."
            className="rounded-l-full p-3 w-80 border-t border-l border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${category.bg})`, // Set the background image
              backgroundSize: 'cover', // Cover the entire card
              backgroundPosition: 'center', // Center the image
            }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6 bg-white bg-opacity-50 rounded-lg"> {/* Added a semi-transparent background for text readability */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <a
                href={category.link}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
