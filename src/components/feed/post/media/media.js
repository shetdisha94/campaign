import React, { useState } from "react";
import * as styles from "./media.module.css";
import { useInView } from "react-intersection-observer";

const Media = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: postRef, inView: postInView } = useInView();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div ref={postRef}>
      {postInView && images.length ? (
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
              <img
                className={styles.rightChevron}
                src="/chevron-circle-left-solid.svg"
                alt=">"
              />
            </button>
          )}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            >
              <img src="/chevron-circle-left-solid.svg" alt="<" />
            </button>
          )}
        </>
      ) : (
        <div className={styles.carouselNoImage}></div>
      )}
    </div>
  );
};

export default Media;
