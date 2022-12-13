import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="justify-end 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px]">
      <div className="hero-video md:rounded-[80px] rounded-[40px] overflow-hidden w-[100%]">
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
