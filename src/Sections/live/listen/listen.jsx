import React from "react";
import LiveMobile from "./components/liveMobile";
import LiveList from "./components/liveList";

const Listen = () => {
  return (
    <div className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex gap-[100px]">
      <LiveMobile />
      <LiveList />
    </div>
  );
};

export default Listen;
