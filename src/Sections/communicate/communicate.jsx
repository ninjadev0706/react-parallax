import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import CommunicateMobile from "./components/communicateMobile";
import CommunicateList from "./components/communicateList";

const Communicate = () => {
  return (
    <div className="relative md:mb-[200px] mb-[50px] md:mt-[400px] mt-[50px]">
      <div className="max-w-[1000px] w-[90%] m-auto justify-center items-center md:flex hidden gap-[100px]">
        <CommunicateMobile />
        <CommunicateList />
      </div>
      <div className="absolute bottom-[600px] lg:bottom-[-50px] xl:bottom-[-100px] 2xl:bottom-[-100px] md:bottom-[0px] right-[-300px] md:right-[-100px] lg:right-[-200px] xl:right-[-200px] 2xl:right-[-280px]">
        <div className="w-[500px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px]">
          <Parallax rotateX={[-90, 90]}>
            <img src="./items/communicate/pip.png" alt="" className="" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Communicate;
