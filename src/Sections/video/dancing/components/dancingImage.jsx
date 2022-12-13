import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const DancingImage = () => {
  return (
    <div className="md:block hidden md:w-6/12">
      <div className="relative">
        <img
          src="./items/video/video_mark.svg"
          alt=""
          className="absolute m-[60px]"
        />
        <img
          src="./items/video/dancing/dancer.png"
          alt=" "
          className="m-auto"
        />
      </div>
      <p className="text-[17px] max-w-[300px] m-auto pl-[20px]">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p>
    </div>
  );
};

export default DancingImage;
