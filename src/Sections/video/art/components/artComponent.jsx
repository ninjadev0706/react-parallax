import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const ArtComponent = () => {
  return (
    <div className="relative w-6/12 lg:block hidden pr-10 max-w-[300px]">
      <div className="absolute right-[50px] top-[100px]">
        <Parallax translateY={[80, -30]}>
          <img src="./items/video/art/SS.png" alt=" " className="" />
        </Parallax>
      </div>
      <div className="">
        <Parallax translateY={[80, -30]}>
          <img
            src="./items/video/art/circle.png"
            alt=" "
            className="absolute right-[110px] top-[160px]"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default ArtComponent;
