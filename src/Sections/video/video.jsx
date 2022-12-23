import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import Rock from "./rock/rock";
import Dancing from "./dancing/dancing";
import Art from "./art/art";
import "./styles.css";
import styled from "styled-components";

const AppStore = styled.div`
  background-color: white;
  .app-image {
    background: url("../items/apple.png") no-repeat;
    background-size: 26px 30px;
    width: 25px;
  }
  :hover {
    background-color: black;
    .app-content {
      color: white;
    }
    .app-image {
      background: url("../items/white-apple.png") no-repeat;
      background-size: 26px 30px;
      width: 25px;
    }
  }
`;

const Video = () => {
  return (
    <div className="md:mt-[600px] mb-[50px] px-[35px]">
      <div className="relative m-auto">
        <Rock />
        <Dancing />
        <Art />
      </div>
      <div className="pb-[100px] md:pb-[200px] px-[10%]">
        <div className="mb-[40px]">
          <p className="font-drukBold text-center m-auto leading-[1.3] 2xl:text-[65px] xl:text-[55px] md:text-[40px] text-[40px] font-black md:max-w-[900px]">
            Built for creators by Creators.
          </p>
        </div>
        <AppStore className="app-wrap m-auto mx-[20px] lg:max-w-[364px]  py-[10px]">
          <div className="app-image h-[30px]"></div>
          <p className="app-content">Get the app</p>
        </AppStore>
      </div>
    </div>
  );
};

export default Video;
