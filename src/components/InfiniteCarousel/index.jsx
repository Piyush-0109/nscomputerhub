import React, { useEffect, useRef } from 'react';
import { carouselDataArray } from '../Carousel/carouselConstants';
import './infiniteCarousel.css';

export const InfinteCarousel = () => {
  const logosSlideRef = useRef(null);

  useEffect(() => {
    const copy = logosSlideRef.current.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide" ref={logosSlideRef}>
        {
          carouselDataArray.map((item, index) => (
            <img src={item.source} alt={item.title} key={index} />
          ))
        }
      </div>
    </div>
  );
};