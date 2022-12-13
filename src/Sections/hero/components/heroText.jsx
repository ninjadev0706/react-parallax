import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const HeroText = () => {
  return (
    <div className="2xl:max-w-[650px] xl:max-w-[500px] lg:max-w-[360px]">
      <p className="font-drukBold leading-[1] 2xl:text-[70px] xl:text-[55px] lg:text-[35px] md:text-[30px] text-[35px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0">
        Creators earn crypto, fans earn creds.
      </p>
      <p className="mb-[15px] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px] font-bold">
        The web3 way of taking control of your content monetization.
      </p>
      <div className="app-wrap w-[100%]">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default HeroText;
