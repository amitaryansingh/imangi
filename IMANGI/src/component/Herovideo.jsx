import React, { useState, useRef } from 'react';
import style from './Herovideo.module.css';

const Herovideo = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <div className={style.videocontainer}>
                <div className={style.videowrapper}>
                    <video 
                        id="myVideo" 
                        ref={videoRef} 
                        autoPlay 
                        loop 
                        muted 
                        className={style.customvideo}
                    >
                        <source src="video.mp4" type="video/mp4" />
                    </video>
                </div>
                <button className={style.mutebutton} onClick={toggleMute}>
                    {isMuted ? 'Unmute' : 'Mute'}
                </button>
            </div>
        </>
    );
};

export default Herovideo;
