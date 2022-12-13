import React from "react";
import StreamMobile from "./components/streamMobile";
import StreamList from "./components/streamList";

const Stream = () => {
  return (
    <div className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex gap-[100px]">
      <StreamMobile />
      <StreamList />
    </div>
  );
};

export default Stream;
