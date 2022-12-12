import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

import "./styles.css";

const Hero = () => {
  return (
    <div className="w-[100%] pt-[30px] md:px-[50px] lg:px-[140px] md:pt-[60px] mb-20 gap-[30px]">
      <img src="./items/logo.png" alt=" " className="mb-[10px] md:mb-20" />
      {/* <div className="flex justify-center"> */}
        {/* <img
          src="./items/hero/hero.png"
          alt=" "
          className="block md:hidden w-[100%]"
        /> */}
      {/* </div> */}
      <div className="hero-wrap md:flex items-center">
        <HeroText />
        <HeroVideo />
      </div>
      <div className="md:mt-[100px] mt-[50px] ml-[40%] md:mb-[150px] mb-[50px]">
        <Parallax rotateX={[-60, 0]}>
          <img
            className="md:w-[174px] w-[111px] md:h-[167px] h-[111px]"
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
