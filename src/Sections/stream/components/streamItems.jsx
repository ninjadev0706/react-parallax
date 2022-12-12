import React, { useRef, useEffect } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const StreamItems = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-center relative">
      <div className="md:video-container w-[250px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/stream/stream.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="./items/stream/globe.png"
        alt=" "
        className="w-[30px] h-[30px] absolute z-10 left-[20px] top-[20px]"
      />
      <img
        src="./items/stream/phonecase.svg"
        alt=" "
        className="absolute -mt-[25px] w-[250px] mt-[20px]"
      />
      <div className="absolute w-[70px] -bottom-[40px] right-[40px]">
        <Parallax translateY={[50, 0]}>
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
