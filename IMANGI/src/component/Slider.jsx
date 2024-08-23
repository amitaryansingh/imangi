import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";

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
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
    { src: "kalki.jpg", title: "Kalki 2898 AD" },
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
                  <div className={style.movieTitle}>{image.title}</div>
                  <button className={style.bookNow}>Book Now</button>
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
