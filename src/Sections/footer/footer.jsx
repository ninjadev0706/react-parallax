import React from "react";

import List from "./components/list";
import Contact from "./components/contact";

import "./styles.css";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="title pt-[100px] pb-[50px] md:py-[170px] max-w-[1200px] w-[80%] m-auto">
        <List />
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
