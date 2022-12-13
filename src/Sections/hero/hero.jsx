import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

import "./styles.css";

const Hero = () => {
  return (
    <div className="w-[100%] md:px-[115px] pt-[30px] md:pt-[60px]">
      <img src="./items/logo.png" alt=" " className="mb-[10px] md:mb-20" />
      {/* <div className="flex justify-center">
        <img
          src="./items/hero/hero.png"
          alt=" "
          className="block md:hidden w-[100%]"
        />
      </div> */}
      <div className="hero-wrap lg:flex items-center relative">
        <HeroText />
        <HeroVideo />
      </div>
      <div className="mt-[200px] ml-[40%] md:mb-[200px] mb-[50px]">
        {/* <Parallax translateY={[50, -20]}> */}
        <img
          className="w-[80px] md:w-[120px] lg:w-[150px] floating"
          name="big_fan"
          src="./items/hero/big_fan.png"
          alt=" "
        />
        {/* </Parallax> */}
      </div>
    </div>
  );
};

export default Hero;
