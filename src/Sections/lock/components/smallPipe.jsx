import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const SmallPipe = () => {
  return (
    <div className="md:hidden block ml-[50px] mt-[100px] mb-[50px]">
      <Parallax translateY={[50, 0]}>
        <img src="./items/tech/small_pip.png" alt=" " className="ml-[30%]" />
      </Parallax>
    </div>
  );
};

export default SmallPipe;
