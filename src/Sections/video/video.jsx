import React from "react";
import { useParallax, Parallax } from 'react-scroll-parallax';
import Rock from "./rock/rock";
import Dancing from "./dancing/dancing";
import Art from "./art/art";

const Video = () => {
  return (
    <div className="md:mt-[500px] 2xl-[400px] mb-[50px]">
      <div className="relative max-w-[1000px] m-auto">
        <Rock />
        <Dancing />
        <Art />
      </div>
      <div className="pb-[40px] px-[10%]">
        <div className="mb-[40px]">
          <p className="font-drukBold text-center m-auto leading-[1.3] 2xl:text-[55px] md:text-[40px] text-[30px] font-black md:max-w-[700px]">
            Built for creators by Creators.
          </p>
        </div>
        <div className="app-wrap m-auto">
          <img src="./items/apple.png" alt=" " className="h-[30px]" />
          <p className="app-content">Get the app</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
