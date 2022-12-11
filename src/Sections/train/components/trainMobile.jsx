import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from 'react-scroll-parallax';

const TrainMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-6/12">
      <img src="./items/train/globe.png" alt="" className="w-[30px] absolute" />
      <img
        src="./items/train/phonecase.svg"
        alt=""
        className="absolute w-[250px] mt-[-20px]"
      />
      <div className="video-container rounded-[20px] overflow-hidden w-[250px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/app/app.mp4" type="video/mp4" />
          <source src="./items/app/app.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="./items/train/globe.png" alt=" " className="absolute left-[50%] top-[20px]" />
      <img src="./items/train/stick.png" alt=" " className="-ml-[15%] absolute lg:right-[150px] right-[50px] bottom-[100px] w-[80px] lg:w-[110px]" />
      <img src="./items/train/globe.png" alt=" " className="absolute lg:right-[150px] right-[50px] lg:bottom-[200px] bottom-[200px]" />
    </div>
  );
};

export default TrainMobile;
