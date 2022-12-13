import React from "react";
import { Parallax } from "react-scroll-parallax";

const MemberText = () => {
  return (
    <div className="relative xl:w-[200%] md:-ml-[150px] lg:-ml-[175px] xl:-ml-[100px]">
      <div>
        <p className="leading-[1.3] text-[32px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[65px] font-drukBold font-black max-w-[600px]">
          Offer your fans monthly memberships.
        </p>
        <p className="leading-[1.3] text-[31px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[65px] font-black mb-[20px] 2xl:mb-[55px] mt-[20px] 2xl:mt-[55px] font-drukBold">
          All paid in ETH.
        </p>
        <p className="text-[17px] max-w-[400px]">
          Yes, that's right, all paid in ETH directly into your wallet!
        </p>
      </div>
      <div className="absolute hidden md:flex 2xl:left-[700px] xl:left-[600px] lg:left-[450px] md:left-[350px] md:bottom-[20px]">
        <Parallax translateY={[0, 50]}>
          <img src="./items/member/small_fan.png" alt="" width="100px" />
        </Parallax>
      </div>
    </div>
  );
};

export default MemberText;
