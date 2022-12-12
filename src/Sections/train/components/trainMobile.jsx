import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-6/12 flex justify-center relative">
      <img
        src="./items/train/phonecase.svg"
        alt=""
        className="absolute xl:w-[350px] w-[250px] mt-[-30px]"
      />
      <div className="video-container rounded-[20px] overflow-hidden xl:w-[350px] w-[250px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/train/app.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-[10%] top-[30px]">
        <Parallax translateY={[50, 0]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
      <div className="absolute xl:right-[25%] right-[15%] lg:right-[20%] bottom-[100px] ">
        <Parallax translateY={[50, 0]}>
          <img
            src="./items/train/stick.png"
            alt=" "
            className="-ml-[15%] w-[80px] lg:w-[110px]"
          />
        </Parallax>
      </div>
      <div className="absolute xl:right-[20%] lg:right-[15%] right-[10%] bottom-[250px]">
        <Parallax translateY={[50, 0]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainMobile;
