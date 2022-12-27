import React from "react";
import { Parallax } from "react-scroll-parallax";

const DancingText = () => {
  return (
    <div className="lg:w-6/12 relative max-w-[600px]">
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
            <p className="text-[13px]">METAMASK</p>
          </div>
        </div>
        <div className="absolute z-[10] right-[-50px] md:right-[-100px] bottom-[-500px] md:top-[-100px]">
          <Parallax translateY={[80, -30]}>
            <img
              src="./items/video/dancing/flow.png"
              alt=" "
              className="w-[150px] md:w-[200px]"
            />
          </Parallax>
        </div>
      </div>
      <p className="font-drukBold mb-[50px] leading-[1.3] 2xl:text-[65px] xl:text-[55px] md:text-[40px] text-[35px] font-black 2xl:mb-[20px] mt-[30px] md:mt-0">
        Crypto is here to stay.
      </p>
      <p className="md:block hidden md:text-[17px] text-[14px]">
        We have seen SBF, Luna, Save the Child and many more, but we are still
        early, very early and these are the exception not the rule.
      </p>
    </div>
  );
};

export default DancingText;
