import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:w-7/12 flex justify-end max-h-[550px]">
      <div className="hero-video rounded-[80px] overflow-hidden">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
        >
          <source
            src="./items/hero/video/hero.mp4"
            type="video/mp4"
            style={{maxWidth: '125%'}}
          />
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
