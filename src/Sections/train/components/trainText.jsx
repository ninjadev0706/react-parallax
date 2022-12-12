import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainText = () => {
  return (
    <div className="w-6/12 flex relative">
      <div className="relative flex items-center" style={{ background: "" }}>
        <div className="absolute 2xl:top-[-50px] xl:top-[0px] top-[50px] xl:left-[-70%] lg:left-[-80%] left-[-90%] -z-10">
          <img src="./items/train/Ellipse.png" alt="" className="2xl:w-[2000px] xl:w-[1700px] lg::w-[1400px] w-[1100px] max-w-[3000px]" />
        </div>
        <img src="./items/train/circle.png" alt="" className="w-[480px] lg:w-[600px] xl:w-[700px]" />
        <div className="rounded-full absolute p-[70px]">
          <p className="font-drukBold 2xl:text-[65px] lg:text-[40px] text-[30px] 2xl:leading-[75px] lg:leading-[45px] leading-[35px] text-center">
            Hop on the web3 train!
          </p>
          <p className="z-10 text-[10px] lg:text-[12px] xl:text-[15px] mt-3">
            We are doing this to eliminate the middle man, so case in point, we
            take zero commission, your earning are yours, fully.
          </p>
        </div>
      </div>
      <div className="absolute ml-[250px] lg:ml-[280px] xl:ml-[360px] 2xl:ml-[450px] xl:top-[30px]">
        <Parallax translateY={[50, 0]}>
          <img
            src="./items/train/purple.png"
            alt=""
            className="w-[120px] "
          />
        </Parallax>
      </div>
      <div className="2xl:mt-[500px] xl:mt-[400] lg:mt-[360px] mt-[280px] ml-[50px] absolute">
        <Parallax translateY={[0, 0]}>
          <img
            src="./items/train/pipe.png"
            alt=""
            className="w-[300px]"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainText;
