import { useState, useEffect } from 'react';
import CarouselIndicators from './CarouselIndicators';



function Carousel ({ images, interval = 6000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const nextSlide = () => {
    setTransitionEnabled(true);
    setActiveIndex((prevIndex) =>
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  const prevSlide = () => {
    setTransitionEnabled(true);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  // Reset transition state after transition ends
  const handleTransitionEnd = () => {
    setTransitionEnabled(false);
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div
        className="carousel__slides"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: transitionEnabled ? 'transform 0.9s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel__img"
          />
        ))}
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
}

export default Carousel;
