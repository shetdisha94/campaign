import { useState } from "react";

const Carousel = ({ post }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = post;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      {images.length ? (
        <>
          <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="carousel-background-image"
          />
          <img
            src={images[currentIndex]}
            alt="image"
            className="carousel-image"
          />
          {currentIndex < images.length - 1 && (
            <button onClick={handleNext} className="carousel-button next">
              {">"}
            </button>
          )}
          {currentIndex > 0 && (
            <button onClick={handlePrev} className="carousel-button prev">
              {"<"}
            </button>
          )}
        </>
      ) : (
        <div className="carousel-no-image"></div>
      )}
    </>
  );
};

export default Carousel;
