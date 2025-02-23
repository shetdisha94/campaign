import React, { useState } from "react";
import styles from "./media.module.css";

const Media = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            className={styles.carouselBackgroundImage}
          />
          <img
            src={images[currentIndex]}
            alt="image"
            className={styles.carouselImage}
            loading="lazy"
          />
          {currentIndex < images.length - 1 && (
            <button
              onClick={handleNext}
              className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
            >
              {">"}
            </button>
          )}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            >
              {"<"}
            </button>
          )}
        </>
      ) : (
        <div className={styles.carouselNoImage}></div>
      )}
    </>
  );
};

export default Media;
