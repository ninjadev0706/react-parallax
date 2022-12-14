import React from "react";
const List = () => {
  return (
    <div className="footerwrap md:flex justify-between">
      <div className="md:w-10/12 md:flex md:text-base text-xl font-bold">
        <div className="w-4/12 mb-10">
          <p className="social">TWITTER</p>
          <p className="social">DISCORD</p>
          <img
            src="./items/app_store.png"
            alt=" "
            className="mt-10 w-[140px] md:flex hidden"
          />
        </div>
        <div className="md:w-8/12 mb-10">
          <p className="social">TERMS & CONDITIONS</p>
          <p className="social">PRIVACY POLICY</p>
        </div>
      </div>
      <div className="mb-[80px]">
        <img
          src="./items/footerlogo.png"
          alt=" "
          className="w-[120px] md:w-[170px]"
        />
        <p className="footer_logo font-semibold">Beta</p>
      </div>
    </div>
  );
};

export default List;
