// src/components/Carousel.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../assets/image/arrow_left.png';
import ArrowRight from '../assets/image/arrow_right.png';

const Carousel = ({ images, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel-wrapper">
      <div className="carrousel-container">
        <img className="logement_carrousel" src={images[currentIndex]} alt="slide-img" />
        <img
          className="arrow arrow-left"
          src={ArrowLeft}
          alt="arrow-left"
          onClick={handlePrev}
        />
        <img
          className="arrow arrow-right"
          src={ArrowRight}
          alt="arrow-right"
          onClick={handleNext}
        />
        <div className="carrousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <Link to={`/details/${category}`} className="carrousel-link">
        <span>Voir Plus</span>
      </Link>
    </div>
  );
};

export default Carousel;
