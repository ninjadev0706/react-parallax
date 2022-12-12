import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const HeroText = () => {
  return (
    <div className="md:max-w-[647px] xl:w-[100%] md:w-[80%]">
      <p className="font-drukBold leading-[1] 2xl:text-[70px] text-[35px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0">
        Creators earn crypto, fans earn creds.
      </p>
      <p className="mb-[15px] md:max-w-[458px] w-[100%] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px] font-bold">
        The web3 way of taking control of your content monetization.
      </p>
      <div className="flex justify-center items-center gap-[10px] border border-2 border-[#000] rounded-[10px] max-w-[346px] w-[100%] py-[5px] xl:px-[50px] px-[20px] m-auto">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default HeroText;
