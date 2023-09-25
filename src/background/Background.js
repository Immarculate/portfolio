import React from "react";
import "../styles/background.css";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={'https://res.cloudinary.com/dvfgovtow/video/upload/v1695663431/bg-universe_o5lbeg.mp4'} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;