import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import "./styles.css";

const Tech = () => {
  return (
    <div className="hidden md:block lg:px-[15%] xl:px-[20%] px-[10%]">
      <div className="mt-[80px] mb-[150px] block text-center leading-[70px]">
        <p className="max-w-[700px] w-[90%] 2xl:text-[55px] md:text-[40px] text-[30px] font-drukBold m-auto leading-[1]">
          You are the hero, not the big tech.
        </p>
        <div className="h-[20px]"></div>
        <p className="max-w-[420px] w-[90%] text-[12px] m-auto leading-[20px] mt-[20px]">
          We are doing this to eliminate the middle man, so case in point, we
          take zero commission, your earning are yours, fully.
        </p>
      </div>
      <Parallax rotateZ={[30, 120]}>
        <img
          src="./items/tech/small_pip.png"
          alt=" "
          className="ml-[30%]"
        />
      </Parallax>
    </div>
  );
};

export default Tech;
