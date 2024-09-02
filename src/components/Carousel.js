import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Adjust the path if the CSS file is in a different directory

// Import images for the carousel
import img1 from '../assets/carousel1.jpg';
import img2 from '../assets/carousel2.jpg';
import img3 from '../assets/carousel3.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="carousel-image"
      />
      <button
        onClick={goToPrevious}
        className="carousel-button left"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="carousel-button right"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
