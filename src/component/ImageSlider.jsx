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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows:3,
    autoplay: true,
    autoplaySpeed:2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows:2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          rows:2,
        },
      },
      {
        breakpoint:400,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          rows:2,
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
      vid: "Alien/Alien.mp4",
      src: "Alien/Alien.jpg",
      title: "Alien: Romulus",
      language: "English / Hindi",
      genere: "Horror/Sci-fi",
      duration: "1h 59m",
      isAdult: true,
      castDetails: [
        { name: "Cailee Spaeny", role: "Actress", image: "Alien/Cailee Spaeny.avif" },
        { name: "Isabela Merced", role: "Actress", image: "Alien/Isabela.jpeg" },
        { name: "Archie Renaux", role: "Actor", image: "Alien/Archie.jpg" },
        { name: "David jonsson", role: "Actor", image: "Alien/David.jpg" },
        { name: "Spike Fearn", role: "Actor", image: "Alien/Spike.jpg" },
        { name: "Daniel Betts", role: "Actor", image: "Alien/Daniel.jpg" },
      ],
      releaseDate: "23 August 2024",
      story: "It follows a group of downtrodden young space colonists in pursuit of better life conditions, who encounter hostile creatures while scavenging a derelict space station",
      trailer: "Alien/Alien.mp4",
    },
    {
      vid: "Stree/Stree.mp4",
      src: "/Stree/Stree.jpg",
      title: "Stree 2: Sarkate Ka Aatank",
      language: "Hindi",
      isAdult: false,
      genere: "Horror/Comedy",
      duration: "2h 27m",
      castDetails: [
        { name: "Rajkummar Rao", role: "Actor", image: "Stree/Rajkumar.jpg" },
        { name: "Shraddha Kapoor", role: "Actress", image: "Stree/Shardha.jpg" },
        { name: "Pankaj Tripathi", role: "Actor", image: "Stree/Pankaj.avif" },
        { name: "Aparshakti Khurana", role: "Actor", image: "Stree/Aparshakti.jpg" },
        { name: "Tamannaah Bhatia", role: "Actress", image: "Stree/Thamanna.jpg" },
        { name: "Abhishek Banerjee", role: "Actor", image: "Stree/Abhishek.jpg" },
        { name: "Amar Kaushik", role: "Director", image: "Stree/Amar.jpg" },
        { name: "Dinesh Vijan", role: "Producer", image: "Stree/Dinesh.jpg" },
        { name: "Jyoti Deshpande", role: "Producer", image: "Stree/Jyoti.jpg" },
        
      ],
      releaseDate: "15 August 2024",
      story: "The town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save their town and loved ones.",
      trailer: "Stree/Stree.mp4",
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
