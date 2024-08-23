import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className={style.slidercontainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={style.slickslide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
