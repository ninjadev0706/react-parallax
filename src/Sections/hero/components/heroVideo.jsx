import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-end max-w-[1000px]">
      <div className="hero-video rounded-[40px] w-[100%] overflow-hidden">
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
