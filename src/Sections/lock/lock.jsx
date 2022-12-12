import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import LockImage from "./components/lockImage";
import Mobile from "./components/mobile";
import "./styles.css";

const Lock = () => {
  return (
    <div>
      <div className="lock-wrap max-w-[800px] w-[80%] m-auto relative">
        <div className="">
          <div className="relative mt-[0] md:mt-[100px] md:top-[300px] md:ml-[150px] max-w-[600px]">
            <p className="font-drukBold 2xl:text-[55px] md:text-[40px] text-[30px] font-bold">
              Lock-up your handle now!
            </p>
            <p className="text-[20px] font-bold ml-[10px] my-[20px]">
              Select a username
            </p>
            <div className="flex justify-center relative items-center gap-[30px]">
              <input
                type="text"
                className="lock_input w-[100%] text-base outline-none"
                placeholder="/username"
              />
              <span className="absolute left-[20px]">billa.net</span>
              <img
                src="./items/lock/Path.svg"
                alt=" "
                className="max-w-[50px] md:max-w-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute block md:hidden left-[0] top-[0] my-[30px]">
          <Parallax rotateZ={[0, 180]}>
            <img src="./items/member/small_fan.png" alt="" width="50px" />
          </Parallax>
        </div>
        <LockImage />
      </div>
      <div className="md:hidden block ml-[20px] mt-[100px] mb-[0px]">
        <Parallax rotateZ={[0, 50]}>
          <img src="./items/tech/small_pip.png" alt=" " className="w-[80px]" />
        </Parallax>
      </div>
      <Mobile />
    </div>
  );
};

export default Lock;
