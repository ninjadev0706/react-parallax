import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const ArtComponent = () => {
  return (
    <div className="relative w-6/12 md:block hidden pr-10 max-w-[300px]">
      <div className="absolute right-[50px] top-[100px]">
        <Parallax rotateX={[0, 360]} rotateY={[0, 360]}>
          <img src="./items/video/art/SS.png" alt=" " className="" />
        </Parallax>
      </div>
      <Parallax rotateZ={[0, 360]}>
        <img
          src="./items/video/art/circle.png"
          alt=" "
          className="absolute right-[110px] top-[160px]"
        />
      </Parallax>
    </div>
  );
};

export default ArtComponent;
