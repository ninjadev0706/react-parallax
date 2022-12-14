import React from "react";
import LiveMobile from "./components/liveMobile";
import LiveList from "./components/liveList";

const Listen = () => {
  return (
    <div className="max-w-[1000px] m-auto pl-[10%] justify-center items-center md:flex gap-[100px] sticky top-0 z-20">
      <LiveMobile />
      <LiveList />
    </div>
  );
};

export default Listen;
