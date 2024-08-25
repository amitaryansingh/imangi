import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./ImageSlider.module.css";
import { Link, useNavigate } from "react-router-dom";
import Herovideo from "./Herovideo";

const ImageSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    {
      vid: "t1.mp4",
      src: "j1.webp",
      title: "John Wick Part 1",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      vid: "video.mp4",
      src: "kalki.jpg",
      title: "Kalki 2898 AD",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      vid: "t1.mp4",
      src: "j1.webp",
      title: "John Wick Part 3",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      vid: "video.mp4",
      src: "kalki.jpg",
      title: "Kalki 2898 AD",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
  ];

  const handleBookNowClick = (title) => {
    navigate("/booking", { state: { movieName: title } });
  };

  const handleTrailerClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % images.length;
    setCurrentVideoIndex(nextIndex);
  };

  const handlePreviousVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + images.length) % images.length;
    setCurrentVideoIndex(prevIndex);
  };

  return (
    <>
      <Herovideo
        video={images[currentVideoIndex]}
        onNext={handleNextVideo}
        onPrevious={handlePreviousVideo}
      />
      <div className={style.sliderWrapper}>
        <div className={style.slidercontainer}>
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className={style.slickslide}>
                <div className={style.imageContainer}>
                  <img src={image.src} alt={`Slide ${index + 1}`} />
                  <div className={style.overlay}>
                    <div className={style.movieDetails}>
                      <div className={style.movieTitle}>{image.title}</div>
                      <div className={style.languageAndGenre}>
                        <span>{image.language}</span>
                        <span>{image.genere}</span>
                      </div>
                      <div className={style.buttonsContainer}>
                        <button
                          className={style.bookNow}
                          onClick={() => handleTrailerClick(index)}
                        >
                          Trailer
                        </button>
                        <button
                          className={style.bookNow}
                          onClick={() => handleBookNowClick(image.title)}
                        >
                          Book Now
                        </button>
                      </div>
                      <div className={style.timeAndDuration}>
                        <span>{image.duration}</span>
                        <span className={style.moreInfo}>More Info</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
