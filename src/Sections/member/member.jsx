import React from "react";

import MemberMark from "./components/memberMark";
import MemberText from "./components/memberText";
import "./styles.css";

const Member = () => {
  return (
    <div className="md:ml-[-150px] lg:ml-[-100px] xl:ml-[-150px] 2xl:ml-[-200px] lg:mb-[300px] mb-[200px] relative">
      <div className="fanwrap items-center">
        <div className="md:order-last">
          <MemberText />
        </div>
        <div className="flex flex-column justify-center">
          <MemberMark />
        </div>
      </div>
    </div>
  );
};

export default Member;
