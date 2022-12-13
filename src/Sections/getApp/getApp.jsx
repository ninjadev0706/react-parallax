import React from "react";

import AppText from "./components/appText";
import AppMobile from "./components/appMobile";
import './styles.css';

const GetApp = () => {
  return (
    <div className="max-w-[1500px] md:w-[80%] m-auto md:flex justify-center items-center gap-[50px] relative">
      <AppText />
      <AppMobile />
    </div>
  );
};

export default GetApp;
