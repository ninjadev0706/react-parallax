import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import "./styles.css";

const Tech = () => {
  return (
    <div className="hidden md:block lg:px-[15%] xl:px-[20%] px-[10%] py-[100px]">
      <div className="mb-[120px] block text-center leading-[70px]">
        <p className="max-w-[1200px] w-[100%] 2xl:text-[80px] xl:text-[65px] md:text-[45px] text-[35px] font-drukBold m-auto leading-[1]">
          You are the hero, not the big tech.
        </p>
        <div className="h-[20px]"></div>
        <p className="max-w-[600px] w-[100%] md:text-[17px] text-[14px] m-auto leading-[20px] mt-[20px]">
          We are doing this to eliminate the middle man, so case in point, we
          take zero commission, your earning are yours, fully.
        </p>
      </div>
      <Parallax translateY={[80, -30]}>
        <img src="./items/tech/small_pipe.png" alt=" " className="ml-[25%] mb-[150px]" />
      </Parallax>
    </div>
  );
};

export default Tech;
