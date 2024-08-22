import React, { useState, useRef } from "react";
import style from "./Herovideo.module.css";
import { VscUnmute, VscMute } from "react-icons/vsc";

const Herovideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
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
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.book}>
        <button onClick={toggleMute} className={style.muteButton}>
          {isMuted ? (
            <VscUnmute className={style.icon3} />
          ) : (
            <VscMute className={style.icon3} />
          )}
        </button>
        <button className={style.bookButton}>Book Now</button>
      </div>
    </div>
  );
};

export default Herovideo;
