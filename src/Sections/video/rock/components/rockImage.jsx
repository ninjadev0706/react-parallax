import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const RockImage = () => {
  return (
    <div className="w-6/12 max-w-[300px]">
      <Parallax rotateZ={[0, 360]}>
        <img src="./items/video/rock/square.png" alt=" " />
      </Parallax>
    </div>
  );
};

export default RockImage;
