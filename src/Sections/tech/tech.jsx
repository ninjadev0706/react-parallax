import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import "./styles.css";

const Tech = () => {
  return (
    <div className="hidden md:block lg:px-[15%] xl:px-[20%] px-[20px]">
      <div className="mt-[80px] mb-[60px] block text-center leading-[70px]">
        <p className="max-w-[700px] w-[90%] text-[50px] font-drukBold m-auto leading-[1]">
          You are the hero, not the big tech.
        </p>
        <div className="h-[20px]"></div>
        <p className="max-w-[420px] w-[90%] text-[12px] m-auto leading-[20px] mt-[20px]">
          We are doing this to eliminate the middle man, so case in point, we
          take zero commission, your earning are yours, fully.
        </p>
      </div>
      <Parallax rotateX={[0, 180]}>
        <img
          src="./items/tech/small_pip.png"
          alt=" "
          className="ml-[30%] mb-[120px]"
        />
      </Parallax>
    </div>
  );
};

export default Tech;
