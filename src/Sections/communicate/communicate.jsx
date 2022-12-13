import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import CommunicateMobile from "./components/communicateMobile";
import CommunicateList from "./components/communicateList";

const Communicate = () => {
  return (
    <div className="relative md:mb-[250px] mb-[50px] md:mt-[400px] mt-[50px]">
      <div className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex hidden gap-[100px]">
        <CommunicateMobile />
        <CommunicateList />
      </div>
      <div className="absolute bottom-[700px] md:bottom-[-50px] lg:bottom-[-75px] xl:bottom-[-100px] 2xl:bottom-[-150px] md:bottom-[0px] right-[-300px] md:right-[-100px] lg:right-[-200px] xl:right-[-220px] 2xl:right-[-300px]">
        <div className="w-[500px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px]">
          <Parallax translateY={[]}>
            <img src="./items/communicate/pipe.png" alt="" className="" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Communicate;
