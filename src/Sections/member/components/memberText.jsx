import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const MemberText = () => {
  return (
    <div className="max-w-[971px] w-[100%] relative">
      <div>
        <p className="leading-[1.3] text-[32px] md:text-[40px] 2xl:text-[65px] font-drukBold font-black max-w-[600px]">
          Offer your fans monthly memberships.
        </p>
        <p className="leading-[1.3] text-[32px] md:text-[40px] 2xl:text-[55px] font-black mb-[20px] 2xl:mb-[55px] mt-[20px] 2xl:mt-[55px] font-drukBold">
          All paid in ETH.
        </p>
        <p className="text-[17px] max-w-[400px]">
          Yes, that's right, all paid in ETH directly into your wallet!
        </p>
      </div>
      <div className="absolute hidden lg:block 2xl:right-[-80px] xl:right-20 lg:right-10 2xl:top-[360px] xl:top-52 lg:top-52 md:top-52">
        <Parallax rotateZ={[0, 180]}>
          <img src="./items/member/small_fan.png" alt="" className="2xl:w-[97px] 2xl:h-[102px] w-[60px] h-[72px]" />
        </Parallax>
      </div>
    </div>
  );
};

export default MemberText;
