import React, { useState, useRef } from "react";
import style from "./Herovideo.module.css";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const videos = [
  { src: "video.mp4", title: "Kalki 2898 AD" },
  { src: "video.mp4", title: "Kalki 2898 AD" },
  { src: "video.mp4", title: "Kalki 2898 AD" },
];

const Herovideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    videoRef.current.load(); 
  };

  const handlePreviousVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    videoRef.current.load();
  };

  return (
    <div className={style.videocontainer}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => (videoRef.current.style.display = "block")}
        onError={() => alert("Video failed to load")}
        style={{ display: "none" }}
      >
        <source src={videos[currentVideoIndex].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.contentContainer}>
        <h1 className={style.title}>{videos[currentVideoIndex].title}</h1>
        <div className={style.buttons}>
          <button className={style.bookButton}>Book Now</button>
          <button className={style.infoButton}>Info</button>
        </div>
      </div>
      <button className={style.leftButton} onClick={handlePreviousVideo}>
        <FaAngleLeft className={style.iconNav} />
      </button>
      <button className={style.rightButton} onClick={handleNextVideo}>
        <FaAngleRight className={style.iconNav} />
      </button>
      <button onClick={toggleMute} className={style.muteButton}>
        {isMuted ? (
          <VscUnmute className={style.icon3} />
        ) : (
          <VscMute className={style.icon3} />
        )}
      </button>
    </div>
  );
};

export default Herovideo;
