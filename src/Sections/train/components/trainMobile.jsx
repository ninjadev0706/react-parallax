import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-5/12 2xl:w-4/12">
      <img src="./items/train/globe.png" alt="" className="w-[30px] absolute" />
      <img
        src="./items/train/phonecase.svg"
        alt=""
        className="absolute w-[250px] lg:w-[360px] mt-[-25px]"
      />
      <div className="video-container rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/train/app.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-[50%] top-[30px]">
        <Parallax translateY={[50, -20]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
      <div className="absolute 2xl:right-[200px] xl:right-[250px] lg:right-[100px] md:right-[10px] bottom-[100px] ">
        <Parallax translateY={[50, -20]}>
          <img
            src="./items/train/stick.png"
            alt=" "
            className="-ml-[15%] 2xl:w-[90px] xl:w-[80px] lg:w-[70px] md:w-[60px]"
          />
        </Parallax>
      </div>
      <div className="absolute 2xl:right-[200px] xl:right-[250px] lg:right-[100px] md:right-[10px] bottom-[250px]">
        <Parallax translateY={[50, -20]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainMobile;
