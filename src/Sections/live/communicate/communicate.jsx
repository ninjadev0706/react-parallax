import React from "react";
import CommunicateMobile from "./components/communicateMobile";
import CommunicateList from "./components/communicateList";

const Communicate = () => {
  return (
    <div className="max-w-[1000px] m-auto pl-[10%] justify-center items-center md:flex gap-[100px] sticky top-0 z-30">
      <CommunicateMobile />
      <CommunicateList />
    </div>
  );
};

export default Communicate;
