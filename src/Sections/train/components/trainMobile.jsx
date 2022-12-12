import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="">
      <img src="./items/train/globe.png" alt="" className="w-[30px] absolute" />
      <img
        src="./items/train/phonecase.svg"
        alt=""
        className="absolute w-[250px] mt-[-20px]"
      />
      <div className="video-container rounded-[20px] overflow-hidden w-[250px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/app/app.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-[50%] top-[30px]">
        <Parallax rotateZ={[0, 180]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
      <div className="absolute lg:right-[-50px] right-[50px] bottom-[100px] ">
        <Parallax rotateZ={[0, 90]}>
          <img
            src="./items/train/stick.png"
            alt=" "
            className="-ml-[15%] w-[80px] lg:w-[110px]"
          />
        </Parallax>
      </div>
      <div className="absolute lg:right-[-50px] right-[50px] bottom-[250px]">
        <Parallax rotateZ={[0, 180]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainMobile;
