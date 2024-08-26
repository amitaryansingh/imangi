import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./ImageSlider.module.css";
import Herovideo from "./Herovideo";
import BookingPopup from "./BookingPopup";
import MoreInfoPopup from "./MoreInfoPopup";

const ImageSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [showMoreInfoPopup, setShowMoreInfoPopup] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const images = [
    {
      vid: "t1.mp4",
      src: "j1.webp",
      title: "John Wick Part 1",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
      isAdult: true,
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2014-10-24",
      story: "John Wick is an ex-hitman who comes out of retirement...",
      trailer: "t1.mp4",
    },
    {
      vid: "video.mp4",
      src: "kalki.jpg",
      title: "Kalki 2898 AD",
      language: "Hindi",
      isAdult: false,
      genere: "Sci-Fi",
      duration: "2h 30m",
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2024-08-15",
      story: "A sci-fi adventure in the year 2898...",
      trailer: "kalki_trailer.mp4",
    },
    {
      vid: "t1.mp4",
      src: "j1.webp",
      title: "John Wick Part 1",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
      isAdult: true,
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2014-10-24",
      story: "John Wick is an ex-hitman who comes out of retirement...",
      trailer: "t1.mp4",
    },
    {
      vid: "video.mp4",
      src: "kalki.jpg",
      title: "Kalki 2898 AD",
      language: "Hindi",
      isAdult: false,
      genere: "Sci-Fi",
      duration: "2h 30m",
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2024-08-15",
      story: "A sci-fi adventure in the year 2898...",
      trailer: "kalki_trailer.mp4",
    },
    {
      vid: "t1.mp4",
      src: "j1.webp",
      title: "John Wick Part 1",
      language: "Hindi",
      genere: "Sci-Fi",
      duration: "2h 30m",
      isAdult: true,
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2014-10-24",
      story: "John Wick is an ex-hitman who comes out of retirement...",
      trailer: "t1.mp4",
    },
    {
      vid: "video.mp4",
      src: "kalki.jpg",
      title: "Kalki 2898 AD",
      language: "Hindi",
      isAdult: false,
      genere: "Sci-Fi",
      duration: "2h 30m",
      castDetails: [
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
        { name: "Prabhas", role: "Actor", image: "/j3.webp" },
        { name: "Deepika Padukone", role: "Actress", image: "/j3.webp" },
        { name: "Amitabh Bachchan", role: "Actor", image: "/j3.webp" },
      ],
      releaseDate: "2024-08-15",
      story: "A sci-fi adventure in the year 2898...",
      trailer: "kalki_trailer.mp4",
    },
  ];

  const handleBookNowClick = (movie) => {
    setSelectedMovie(movie);
    setShowBookingPopup(true);
  };

  const handleMoreInfoClick = (movie) => {
    setSelectedMovie(movie);
    setShowMoreInfoPopup(true);
  };

  const handleClosePopup = () => {
    setShowBookingPopup(false);
    setShowMoreInfoPopup(false);
    setSelectedMovie(null);
  };

  const handleTrailerClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
      <Herovideo
        video={images[currentVideoIndex]}
        onNext={() =>
          setCurrentVideoIndex((currentVideoIndex + 1) % images.length)
        }
        onPrevious={() =>
          setCurrentVideoIndex(
            (currentVideoIndex - 1 + images.length) % images.length
          )
        }
        bookNow={handleBookNowClick}
        moreInfo={handleMoreInfoClick}
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
                          onClick={() => handleBookNowClick(image)}
                        >
                          Book Now
                        </button>
                      </div>
                      <div className={style.timeAndDuration}>
                        <span>{image.duration}</span>
                        <span
                          className={style.moreInfo}
                          onClick={() => handleMoreInfoClick(image)}
                        >
                          More Info
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {showBookingPopup && selectedMovie && (
        <BookingPopup
          movieName={selectedMovie.title}
          closePopup={handleClosePopup}
        />
      )}
      {showMoreInfoPopup && selectedMovie && (
        <MoreInfoPopup movie={selectedMovie} closePopup={handleClosePopup} />
      )}
    </>
  );
};

export default ImageSlider;
