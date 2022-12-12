import React from "react";
import { useParallax, Parallax } from 'react-scroll-parallax';
import Rock from "./rock/rock";
import Dancing from "./dancing/dancing";
import Art from "./art/art";
import './styles.css';

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
          <p className="font-drukBold text-center m-auto leading-[1.3] 2xl:text-[65px] md:text-[40px] text-[35px] font-black md:max-w-[700px]">
            Built for creators by Creators.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[10px] border border-2 border-[#000] rounded-[10px] max-w-[346px] w-[100%] py-[10px] xl:px-[50px] px-[20px] m-auto">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
      </div>
    </div>
  );
};

export default Video;
