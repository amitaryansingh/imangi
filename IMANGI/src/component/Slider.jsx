import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
    "https://via.placeholder.com/800x400?text=Image+6",
    "https://via.placeholder.com/800x400?text=Image+7",
    "https://via.placeholder.com/800x400?text=Image+8",
    "https://via.placeholder.com/800x400?text=Image+9",
    "https://via.placeholder.com/800x400?text=Image+10",
  ];

  return (
    <div className={style.sliderWrapper}>
      <div className={style.slidercontainer}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className={style.slickslide}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
