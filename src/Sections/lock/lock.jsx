import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import LockImage from "./components/lockImage";
import Mobile from "./components/mobile";
import "./styles.css";

const Lock = () => {
  return (
    <div>
      <div className="lock-wrap max-w-[1200px] md:w-[80%] m-auto relative">
        <div className="md:ml-[-25px] lg:ml-[-50px] xl:ml-[-75px] 2xl:ml-[-100px]">
          <div className="relative mt-[0] lg:mt-[100px] md:top-[300px] md:ml-[150px] max-w-[650px]">
            <p className="font-drukBold 2xl:text-[65px] xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] font-bold">
              Lock-up your handle now!
            </p>
            <p className="text-[20px] font-bold ml-[10px] md:my-[20px] my-[10px]">
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
          <Parallax translateY={[50, -20]}>
            <img src="./items/member/small_fan.png" alt="" width="50px" />
          </Parallax>
        </div>
        <LockImage />
      </div>
      <div className="md:hidden block ml-[20px] mt-[100px] mb-[50px]">
        <Parallax translateY={[50, -20]}>
          <img src="./items/tech/small_pip.png" alt=" " className="w-[80px]" />
        </Parallax>
      </div>
      <Mobile />
    </div>
  );
};

export default Lock;
