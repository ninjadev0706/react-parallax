import React from "react";

import MemberMark from "./components/memberMark";
import MemberText from "./components/memberText";
import { useParallax, Parallax } from "react-scroll-parallax";
import "./styles.css";

const Member = () => {
  return (
    <div className="max-w-[1200px] m-auto md:pb-[100px] relative">
      <div className="fanwrap">
        <div className="md:order-last">
          <MemberText />
        </div>
        <div>
          <MemberMark />
        </div>
      </div>
      <div className="absolute hidden md:block xl:right-20 md:right-5 xl:bottom-32 md:bottom-20">
        <Parallax rotateZ={[0, 180]}>
          <img src="./items/member/small_fan.png" alt="" width="80px" />
        </Parallax>
      </div>
    </div>
  );
};

export default Member;
