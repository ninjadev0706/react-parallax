import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const TrainText = () => {
  return (
    <div className="train flex relative">
      <div className="relative flex items-center" style={{ background: "" }}>
        <img src="./items/train/circle.png" alt="" className="w-[420px]" />
        <div className="rounded-full absolute p-16">
          <p className="font-drukBold lg:text-4xl text-3xl text-center">
            Hop on the web3 train!
          </p>
          <p className="z-10 text-[10px] mt-3">
            We are doing this to eliminate the middle man, so case in point, we
            take zero commission, your earning are yours, fully.
          </p>
        </div>
      </div>
      <div className="absolute ml-[250px]">
        <Parallax rotateZ={[-45, 45]}>
          <img
            src="./items/train/purple.png"
            alt=""
            className="w-[120px] "
          />
        </Parallax>
      </div>
      <div className=" lg:mt-[300px] mt-[250px] absolute">
      <Parallax rotateZ={[-20, 20]}>
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
