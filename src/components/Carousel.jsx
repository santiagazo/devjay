import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Music</h2>
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full">
            &lt;
          </button>
          <div ref={carouselRef} className="flex space-x-4 overflow-x-auto">
            {items.map((item, index) => (
              <div key={index} className="min-w-[200px] bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.artist}</p>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
