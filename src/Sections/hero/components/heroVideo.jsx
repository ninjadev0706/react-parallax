import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-end max-w-[1000px] xl:w-[100%] md:w-[80%]">
      <div className=" player-wrapper md:rounded-[40px] rounded-[20px] overflow-hidden">
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
