import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import Rock from "./rock/rock";
import Dancing from "./dancing/dancing";
import Art from "./art/art";
import "./styles.css";

const Video = () => {
  return (
    <div className="md:mt-[600px] mb-[50px] px-[35px]">
      <div className="relative m-auto">
        <Rock />
        <Dancing />
        <Art />
      </div>
      <div className="pb-[40px] px-[10%]">
        <div className="mb-[40px]">
          <p className="font-drukBold text-center m-auto leading-[1.3] 2xl:text-[65px] xl:text-[55px] md:text-[40px] text-[40px] font-black md:max-w-[900px]">
            Built for creators by Creators.
          </p>
        </div>
        <div className="app-wrap m-auto mx-[20px] lg:max-w-[364px]  py-[10px]">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
      </div>
    </div>
  );
};

export default Video;
