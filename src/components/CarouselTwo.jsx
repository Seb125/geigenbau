import { useState, useEffect } from 'react';
import CarouselIndicators from './CarouselIndicators';

function Carousel ({ images, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false); // State to track transitioning
  const nextSlide = () => {
    if (!transitioning) {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setTransitioning(true);
    }
  };
  const prevSlide = () => {
    if (!transitioning) {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setTransitioning(true);
    }
  };
  const goToSlide = (index) => {
    if (!transitioning) {
      setActiveIndex(index);
      setTransitioning(true);
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className="carousel__track" style={{ transform: `translateX(-${activeIndex * 100}%)` }} onTransitionEnd={handleTransitionEnd}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel__img ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
}
export default Carousel;
