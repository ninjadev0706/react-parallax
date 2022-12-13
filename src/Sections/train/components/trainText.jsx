import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainText = () => {
  return (
    <div className="w-7/12 2xl:w-8/12 md:flex justify-center relative">
      <div className="relative flex items-center" style={{ background: "" }}>
        <img
          src="./items/train/ellipse.png"
          alt=""
          className="
            absolute 
            m-auto 
            max-w-[5000px] 
            -z-10 
            2xl:w-[2300px] 
            xl:w-[1800px] 
            lg:w-[1400px] 
            md:w-[1000px] 
            2xl:left-[-800px] 
            xl:left-[-800px]
            lg:left-[-600px]
            md:left-[-400px]
            2xl:top-[-200px] 
            xl:top-[-240px]
            lg:top-[-150px]
            md:top-[-120px]
          "
        />
        <img
          src="./items/train/circle.png"
          alt=""
          className="2xl:w-[800px] xl:w-[650px] lg:w-[500px] md:w-[350px] "
        />
        <div className="rounded-full absolute 2xl:p-[100px] xl:p-[80px] lg:p-[60px] md:p-[50px]">
          <p className="font-drukBold 2xl:text-[70px] xl:text-[60px] xl:text-[50px] lg:text-[35px] md:text-[25px] 2xl:leading-[60px] xl:leading-[50px] lg:leading-[40px] md:leading-[30px]">
            Hop on the web3 train!
          </p>
          <p className="z-10 xl:text-[17px] md:text-[13px] mt-3">
            We are doing this to eliminate the middle man, so case in point, we
            take zero commission, your earning are yours, fully.
          </p>
        </div>
      </div>
      <div className="absolute 2xl:ml-[350px] xl:ml-[300px] ml-[250px] ml-[200px] 2xl:t-[20px] xl:t-[20px] t-[20px] t-[20px]">
        <Parallax translateY={[80, -30]}>
          <img
            src="./items/train/purple.png"
            alt=""
            className="w-[120px] 2xl:w-[200px] xl:w-[180px] lg:w-[160px] md:w-[140px]"
          />
        </Parallax>
      </div>
      <div className="2xl:mt-[600px] xl:mt-[500px] lg:mt-[350px] md:mt-[250px] absolute">
        <Parallax translateY={[80, -30]}>
          <img src="./items/train/pipe.png" alt="" className="2xl:w-[300px] xl:w-[250px] lg:w-[200px] md:w-[150px]" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainText;
