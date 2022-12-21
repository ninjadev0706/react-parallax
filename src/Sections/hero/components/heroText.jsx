import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const HeroText = () => {
  return (
    <div className="2xl:max-w-[650px] xl:max-w-[500px] lg:max-w-[360px]">
      <div className="font-drukBold pl-[20px] md:pl-[0] leading-[1] 2xl:text-[70px] xl:text-[50px] lg:text-[38px] md:text-[35px] text-[32px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0">
        <div className="content mb-[10px]">
          <div className="w-full float-left">
            <div className="static">Don't</div>
            <b className="dynamic">
              <span className="content-text">
                buy
                <br />
                invest
                <br />
                trade
              </span>
            </b>
          </div>
          <div className="static w-full">crypto,</div>
          <div className="static w-full mb-[10px]">earn it.</div>
        </div>
      </div>
      <div>
        <p className="mb-[15px] pl-[20px] md:pl-[0] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px] font-bold">
          The web3 way of taking control of your content monetization.
        </p>
      </div>
      <div className="app-wrap mx-[20px] md:mx-[0px] lg:max-w-[364px]  py-[10px]">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default HeroText;
