import React, { useState, useRef } from 'react'
import './Hero.css'
import hypREspace from "../../assets/video/hypREspace.mov"
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";


const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if(videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="hero-portion">
      <video id="hero-video" autoPlay loop muted={isMuted} ref={videoRef} playsInline controlsList="nodownload" volume="0">
        <source src={hypREspace} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? <IoVolumeMute size={30} color='white' /> : <IoVolumeHigh size={30} color='white' /> }
      </button>
    </div>
  )
}

export default Hero