import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

import "./styles.css";

const Hero = () => {
  return (
    <div className="w-[100%] pt-[30px] md:px-[100px] lg:px-[150px] xl:px-[150px] px-[20px] md:pt-[60px] mb-20 gap-[30px]">
      <img src="./items/logo.png" alt=" " className="mb-[10px] md:mb-20" />
      {/* <div className="flex justify-center">
        <img
          src="./items/hero/hero.png"
          alt=" "
          className="block md:hidden w-[100%]"
        />
      </div> */}
      <div className="hero-wrap md:flex items-center md:gap-[50px]">
        <HeroText />
        <HeroVideo />
      </div>
      <div className="mt-[50px]  ml-[40%] md:mb-[100px] mb-[50px]">
        <Parallax translateX={[-20, 20]}>
          <img
            className="w-[80px] md:w-[120px] lg:w-[150px]"
            name="big_fan"
            src="./items/hero/big_fan.png"
            alt=" "
          />
        </Parallax>
      </div>
    </div>
  );
};

export default Hero;
