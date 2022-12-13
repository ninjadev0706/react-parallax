import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const RockImage = () => {
  return (
    <div className="w-6/12 flex justify-center">
      <Parallax rotateZ={[0, 70]}>
        <img src="./items/video/rock/square.png" alt=" " />
      </Parallax>
    </div>
  );
};

export default RockImage;
