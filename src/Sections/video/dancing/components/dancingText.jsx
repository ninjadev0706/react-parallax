import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const DancingText = () => {
  return (
    <div className="md:w-7/12 relative md:mt-[0] mt-[100px]">
      <div className="flex mb-[20px]">
        <div className="flex">
          <img
            src="./items/video/dancing/eth.png"
            alt=" "
            className="h-[80px]"
          />
          <div>
            <img
              src="./items/video/dancing/metamask.png"
              alt=" "
              className="h-[60px]"
            />
            <p className="text-[13px]">
              METAMASK
            </p>
          </div>
        </div>
        <div className="absolute right-[-50px] md:right-[-100px] bottom-[-500px] md:top-[-100px]">
          <Parallax rotateZ={[-20, 40]}>
            <img src="./items/video/dancing/flow.png" alt=" " className="w-[150px] md:w-[200px]" />
          </Parallax>
        </div>
      </div>
      <p className="font-drukBold mb-[50px] leading-[1.3] 2xl:text-[55px] md:text-[40px] text-[30px] font-black 2xl:mb-[20px] mt-[30px] md:mt-0">
        Crypto is here to stay.
      </p>
      <p className="md:block hidden text-[17px]">
        We are doing this to eliminate the middle man, so case in point, we take
        zero commission, your earning are yours, fully.
      </p>
    </div>
  );
};

export default DancingText;
