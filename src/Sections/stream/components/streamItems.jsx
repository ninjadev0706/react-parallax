import React, { useRef, useEffect } from "react";
import { useParallax, Parallax } from 'react-scroll-parallax';

const StreamItems = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-center relative">
      <img
        src="./items/stream/globe.png"
        alt=" "
        className="w-[30px] h-[30px] absolute left-[20px]"
      />
      <div className="md:video-container w-[250px]">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
        >
          <source
            src="./items/stream/stream.mp4"
            type="video/mp4"
          />
          <source
            src="./items/stream/stream.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <img
        src="./items/stream/phonecase.svg"
        alt=" "
        className="absolute -mt-[25px] w-[250px] mt-[20px]"
      />
      <img
        src="./items/stream/stick.png"
        alt=" "
        className="absolute w-[70px] -bottom-[40px] right-[40px]"
      />
    </div>
  );
};

export default StreamItems;
