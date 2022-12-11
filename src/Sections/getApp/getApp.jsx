import React from "react";

import AppText from "./components/appText";
import AppMobile from "./components/appMobile";
import './styles.css';

const GetApp = () => {
  return (
    <div className="max-w-[900px] m-auto md:flex justify-center items-center w-[90%] gap-[50px] relative">
      <AppText />
      <AppMobile />
    </div>
  );
};

export default GetApp;
