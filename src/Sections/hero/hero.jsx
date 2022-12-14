import React from "react";
import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

import "./styles.css";

const Hero = () => {
  return (
    <div className="w-[100%] 2xl:px-[150px] xl:px-[110px] lg:px-[85px] pt-[30px] md:pt-[60px]">
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
      <div className="md:mt-[100px] mt-[80px] ml-[40%] md:mb-[200px] mb-[80px]">
        {/* <Parallax translateY={[80, -30]}> */}
        <img
          className="w-[114px] lg:w-[174px] floating"
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
