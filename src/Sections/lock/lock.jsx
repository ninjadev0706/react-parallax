import React from "react";

import LockImage from "./components/lockImage";
import LockImport from "./components/lockImport";
import Mobile from "./components/mobile";
import SmallPipe from "./components/smallPipe";

import "./styles.css";

const Lock = () => {
  return (
    <div className="max-w-[1000px] m-auto">
      <div className="my-[80px] relative">
        <LockImage />
        <LockImport />
        <SmallPipe />
        <Mobile />
      </div>
    </div>
  );
};

export default Lock;
