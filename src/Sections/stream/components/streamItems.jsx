import React, { useRef, useEffect } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

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
        className="w-[30px] h-[30px] absolute md:left-[20px] top-[-30px]"
      />
      <div className="md:video-container w-[250px] md:w-[360px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/stream/stream.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="./items/stream/phonecase.svg"
        alt=" "
        className="absolute -mt-[25px] w-[250px] lg:w-[360px] mt-[-25px]"
      />
      <div className="absolute w-[70px] -bottom-[40px] right-[40px]">
        <Parallax translateY={[50, -20]}>
          <img
            src="./items/train/stick.png"
            alt=" "
            className="-ml-[15%] w-[80px] lg:w-[110px]"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default StreamItems;
