import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:w-5/12 2xl:w-4/12 w-[100%] m-auto">
      <img src="./items/train/globe.png" alt="" className="w-[30px] absolute" />
      <div className='text-center md:hidden block'>
        <p className='font-drukBold text-5xl xl:text-7xl mb-[60px]'>Stream</p>
      </div>
      <div className="md:video-container relative w-[250px] lg:w-[360px] m-auto overflow-hidden">
        <img
            src="./items/train/mask.png"
            alt=""
            className="absolute"
          />
          <video playsInline autoPlay muted loop ref={vidRef} className="lg:mx-[20px] lg:my-[45px] p-[4px] rounded-[20px]">
          <source src="./items/train/train.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute 2xl:right-[50px] xl:right-[50px] lg:right-[0px] md:right-[0px] right-[0px] md:bottom-[100px] bottom-[-100px] ">
        <Parallax translateY={[80, -30]}>
          <img
            src="./items/train/stick.png"
            alt=" "
            className="-ml-[15%] 2xl:w-[90px] xl:w-[80px] lg:w-[70px] md:w-[60px]"
          />
        </Parallax>
      </div>
      <div className="absolute 2xl:right-[50px] xl:right-[50px] lg:right-[0px] md:right-[0px] md:bottom-[250px] md:block hidden">
        <Parallax translateY={[80, -30]}>
          <img src="./items/train/globe.png" alt=" " className="" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainMobile;
