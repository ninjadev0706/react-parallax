import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainText = () => {
  return (
    <div className="w-7/12 2xl:w-8/12 flex justify-center relative">
      <div className="relative flex items-center" style={{ background: "" }}>
        <img
          src="./items/train/ellipse.png"
          alt=""
          className="
            absolute 
            m-auto 
            max-w-[5000px] 
            -z-10 
            2xl:w-[2000px] 
            xl:w-[1600px] 
            lg:w-[1200px] 
            md:w-[800px] 
            2xl:left-[-800px] 
            xl:left-[-600px]
            lg:left-[-400px]
            md:left-[-300px]
            2xl:top-[-300px] 
            xl:top-[-200px]
            lg:top-[-100px]
            md:top-[-30px]
          "
        />
        <img
          src="./items/train/circle.png"
          alt=""
          className="2xl:w-[650px] xl:w-[550px] lg:w-[450px] md:w-[350px] "
        />
        <div className="rounded-full absolute 2xl:p-[80px] xl:p-[70px] lg:p-[60px] md:p-[50px]">
          <p className="font-drukBold 2xl:text-[55px] xl:text-[45px] lg:text-[35px] md:text-[25px] 2xl:leading-[60px] xl:leading-[50px] lg:leading-[40px] md:leading-[30px]">
            Hop on the web3 train!
          </p>
          <p className="z-10 xl:text-[17px] md:text-[13px] mt-3">
            We are doing this to eliminate the middle man, so case in point, we
            take zero commission, your earning are yours, fully.
          </p>
        </div>
      </div>
      <div className="absolute ml-[250px]">
        <Parallax rotateZ={[-45, 45]}>
          <img src="./items/train/purple.png" alt="" className="w-[120px] " />
        </Parallax>
      </div>
      <div className=" lg:mt-[300px] 2xl:mt-[500px] xl:mt-[400px] lg:mt-[300px] md:mt-[200px] absolute">
        <Parallax rotateZ={[-20, 20]}>
          <img src="./items/train/pipe.png" alt="" className="w-[300px]" />
        </Parallax>
      </div>
    </div>
  );
};

export default TrainText;
