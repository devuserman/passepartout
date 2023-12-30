import React, { useState, useEffect } from 'react';
import './SingleSlide.css';

function SingleSlide({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const currentImageUrl = images[currentImage];

  return (
    <div className="slider">
      <img src={currentImageUrl} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
}

export default SingleSlide;






