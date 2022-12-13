import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="max-w-[1090px] absolute right-[0] w-[100%] mx-[-100px]">
      <div className="hero-video">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
          className="md:rounded-[80px] rounded-[40px] "
        >
          <source
            src="./items/hero/video/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
