import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerSlide, setCenterSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  useEffect(() => {
    const middleSlide = Math.floor(settings.slidesToShow / 2);
    setCenterSlide((currentSlide + middleSlide) % images.length);
  }, [currentSlide]);

  const images = [
    {
      src: "j1.webp",
      title: "John Wick Part 1",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j2.webp",
      title: "John Wick Part 2",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j3.webp",
      title: "John Wick Part 3",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
    {
      src: "j4.webp",
      title: "John Wick Part 4",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
    },
  ];

  return (
    <div className={style.sliderWrapper}>
      <div className={style.slidercontainer}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${style.slickslide} ${
                index === centerSlide ? style.centerSlide : ""
              }`}
            >
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
                      <button className={style.bookNow}>Trailer</button>
                      <button className={style.bookNow}>
                        <Link to="/booking">Book Now</Link>
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
  );
};

export default ImageSlider;
