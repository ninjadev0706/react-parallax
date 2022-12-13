import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-[100%] justify-end">
      <div className="md:block hidden">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
          className="xl:rounded-[80px] rounded-[40px] w-[1000px]"
        >
          <source
            src="./items/hero/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="md:hidden block">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
          className="xl:rounded-[80px] rounded-[40px] w-[1000px]"
        >
          <source
            src="./items/hero/mobile_hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
