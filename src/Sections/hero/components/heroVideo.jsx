import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:w-7/12 md:block hidden">
      <div className="video-container rounded-[20px] overflow-hidden">
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
          />
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
