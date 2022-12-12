import React from "react";
import "./styles.css";
import MemberMark from "./components/memberMark";
import MemberText from "./components/memberText";

const Member = () => {
  return (
    <div className="md:pb-[100px] md:px-43px relative">
      <div className="fanwrap">
        <div className="md:order-last">
          <MemberText />
        </div>
        <div className="flex flex-column">
          <MemberMark />
        </div>
      </div>
    </div>
  );
};

export default Member;
