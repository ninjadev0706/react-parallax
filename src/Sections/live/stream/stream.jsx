import React from "react";
import StreamMobile from "./components/streamMobile";
import StreamList from "./components/streamList";

const Stream = () => {
  return (
    <div className="max-w-[1000px] m-auto pl-[10%] justify-center items-center md:flex gap-[100px] sticky top-0 z-10">
      <StreamMobile />
      <StreamList />
    </div>
  );
};

export default Stream;
