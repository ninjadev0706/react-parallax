import React, { useRef, useEffect } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const StreamItems = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-center relative">
      <div className="md:video-container w-[250px] md:w-[360px] rounded-[20px] overflow-hidden">
        <img
            src="./items/app/mask.png"
            alt=""
            className="absolute"
          />
          <video playsInline autoPlay muted loop ref={vidRef} className="p-[15px]">
          <source src="./items/stream/stream.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="./items/stream/phonecase.svg"
        alt=" "
        className="absolute -mt-[25px] w-[250px] lg:w-[360px] mt-[-25px]"
      />
      <div className="absolute w-[70px] -bottom-[40px] right-[40px]">
        <Parallax translateY={[80, -30]}>
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
