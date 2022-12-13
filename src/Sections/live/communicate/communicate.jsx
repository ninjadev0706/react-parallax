import React from "react";
import CommunicateMobile from "./components/communicateMobile";
import CommunicateList from "./components/communicateList";

const Communicate = () => {
  return (
    <div className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex lg:gap-[100px] gap-[50px]">
      <CommunicateMobile />
      <CommunicateList />
    </div>
  );
};

export default Communicate;
