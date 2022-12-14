import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const HeroText = () => {
  return (
    <div className="2xl:max-w-[650px] xl:max-w-[500px] lg:max-w-[360px]">
      <p className="font-drukBold pl-[20px] leading-[1] 2xl:text-[70px] xl:text-[50px] lg:text-[38px] md:text-[35px] text-[32px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0">
        Creators earn crypto, fans earn creds.
      </p>
      <p className="mb-[15px] pl-[20px] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px] font-bold">
        The web3 way of taking control of your content monetization.
      </p>
      <div className="app-wrap mx-[20px] lg:max-w-[364px]  py-[10px]">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default HeroText;
